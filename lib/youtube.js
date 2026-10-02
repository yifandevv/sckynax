    const { randomUUID } = require('crypto')
    const axios = require('axios')
    const { Innertube } = require('youtubei.js')

module.exports = async (conn, m) => {
    let youtube = null

    const text = String(
        m.text ||
        m.body ||
        m.message?.conversation ||
        ''
    ).replace(/^[./!#]\S+\s*/, '').trim()

    async function getYoutube() {
        if (!youtube) {
            youtube = await Innertube.create()
        }
        return youtube
    }

    async function resolvePreview(url) {
        try {
            const guestId = randomUUID()

            const response = await axios.post(
                'https://scriptmind.co/api/media/resolve/preview',
                {
                    url,
                    platform: 'youtube',
                    pageType: 'video',
                    guestId
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    timeout: 60000
                }
            )

            return response.data
        } catch (error) {
            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    error.response?.data ||
                    error.message ||
                    'Gagal resolve video'
            }
        }
    }

    async function getLyrics(query) {
        try {
            const response = await axios.get(
                'https://api-faa.my.id/faa/lyrics',
                {
                    params: {
                        q: query
                    },
                    timeout: 15000
                }
            )

            if (!response.data?.status) {
                return null
            }

            return response.data.result || null
        } catch {
            return null
        }
    }

    function getThumbnail(video) {
        const thumbnails = video?.thumbnails || []

        if (!thumbnails.length) {
            return null
        }

        return thumbnails[thumbnails.length - 1]?.url || null
    }

    async function YouTubeplay(query) {
        try {
            if (!query || typeof query !== 'string') {
                return {
                    success: false,
                    message: 'Query harus berupa teks'
                }
            }

            const yt = await getYoutube()

            const search = await yt.search(query, {
                type: 'video'
            })

            const video = search.videos?.[0]

            if (!video) {
                return {
                    success: false,
                    message: 'Video tidak ditemukan'
                }
            }

            const videoId = video.id

            if (!videoId) {
                return {
                    success: false,
                    message: 'Video ID tidak ditemukan'
                }
            }

            const url =
                `https://www.youtube.com/watch?v=${videoId}`

            const resolved = await resolvePreview(url)

            if (!resolved?.success) {
                return {
                    success: false,
                    message:
                        resolved?.message ||
                        'Gagal resolve video'
                }
            }

            const data = resolved.result || {}

            let media

            try {
                media =
                    typeof data.resolvedMediaJson === 'string'
                        ? JSON.parse(data.resolvedMediaJson)
                        : data.resolvedMediaJson
            } catch {
                return {
                    success: false,
                    message: 'Gagal membaca data media'
                }
            }

            const audio = media?.tunnel?.[1] || null

            if (!audio) {
                return {
                    success: false,
                    message: 'URL audio tidak ditemukan'
                }
            }

            const title =
                video.title?.text ||
                data.title ||
                query

            const channel =
                video.author?.name ||
                video.author?.text ||
                data.author ||
                data.artist ||
                'YouTube'

            let lyrics = null

            try {
                lyrics = await getLyrics(title)
            } catch {
                lyrics = null
            }

            return {
                success: true,

                result: {
                    title,
                    channel,
                    videoId,
                    url,

                    thumbnail:
                        getThumbnail(video),

                    duration:
                        video.duration?.text ||
                        video.duration?.seconds ||
                        data.duration ||
                        null,

                    audio,

                    lyrics: lyrics
                        ? {
                            title:
                                lyrics.title ||
                                title,

                            artist:
                                lyrics.artist ||
                                channel,

                            album:
                                lyrics.album ||
                                '',

                            cover:
                                lyrics.cover ||
                                {},

                            genre:
                                lyrics.genre ||
                                '',

                            lyrics:
                                lyrics.lyrics ||
                                '',

                            release_date:
                                lyrics.release_date ||
                                '',

                            share_url:
                                lyrics.share_url ||
                                url
                        }
                        : null
                }
            }
        } catch (error) {
            return {
                success: false,
                message:
                    error.message ||
                    'Terjadi kesalahan'
            }
        }
    }

    function escapeHtmlJs(value) {
        return String(value ?? '')
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/`/g, '\\`')
            .replace(/\$\{/g, '\\${')
            .replace(/</g, '\\x3C')
    }

    function escapeJsonForScript(value) {
        return JSON.stringify(value ?? '')
            .replace(/</g, '\\u003C')
            .replace(/>/g, '\\u003E')
            .replace(/&/g, '\\u0026')
            .replace(/\u2028/g, '\\u2028')
            .replace(/\u2029/g, '\\u2029')
    }

    function buildPlayerHtml({
        title,
        channel,
        duration,
        videoUrl,
        wsUrl,
        posterBase64,
        lyrics
    }) {
        const safeTitle =
            escapeHtmlJs(title)

        const safeChannel =
            escapeHtmlJs(channel)

        const safeDuration =
            escapeHtmlJs(duration)

        const safeVideoUrl =
            escapeHtmlJs(videoUrl)

        const safeWsUrl =
            escapeHtmlJs(wsUrl)

        const lyricsJson =
            escapeJsonForScript(
                lyrics?.lyrics || ''
            )

        const lyricTitle =
            escapeHtmlJs(
                lyrics?.title ||
                title ||
                'Unknown'
            )

        const lyricArtist =
            escapeHtmlJs(
                lyrics?.artist ||
                channel ||
                'Unknown'
            )

        return `<style>
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
body{margin:0;background:transparent;font-family:Arial,Helvetica,sans-serif;color:#fff;touch-action:manipulation;cursor:pointer}
input[type=range]{width:100%;height:4px;accent-color:#fff;cursor:pointer}
.player-wrap{width:100%;max-width:440px;margin:auto;padding:12px}
.player{position:relative;overflow:hidden;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:20px;box-shadow:none}
.content{position:relative;padding:18px;z-index:2}
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}
.top-title{font-size:13px;font-weight:700;letter-spacing:.8px;opacity:.85}
.top-sub{font-size:10px;opacity:.5;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:260px}
.icon-btn{width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.08);color:#fff;display:flex;align-items:center;justify-content:center;padding:0;flex-shrink:0}
.icon-btn svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.video-frame{position:relative;width:100%;aspect-ratio:16/9;border-radius:15px;overflow:hidden;background:transparent;box-shadow:none;cursor:pointer}
.video-frame video{width:100%;height:100%;display:block;background:transparent;object-fit:contain}
.big-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:transparent;transition:opacity .2s;z-index:3}
.big-btn{width:64px;height:64px;border:0;border-radius:50%;background:#fff;color:#08090d;display:flex;align-items:center;justify-content:center;padding:0;box-shadow:0 6px 18px rgba(0,0,0,.35)}
.big-btn svg{width:26px;height:26px;fill:currentColor;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.frame-playing .big-play{opacity:0;pointer-events:none}
.info{padding-top:15px}
.song-title{font-size:19px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.artist{font-size:13px;opacity:.6;margin-top:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.progress{margin-top:18px}
.times{display:flex;justify-content:space-between;font-size:10px;opacity:.55;margin-top:7px}
.controls{display:flex;align-items:center;justify-content:center;gap:18px;margin-top:13px}
.side-btn{width:38px;height:38px;border:0;background:transparent;color:#fff;display:flex;align-items:center;justify-content:center;padding:0;opacity:.8}
.side-btn svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.bottom{display:flex;align-items:center;justify-content:space-between;margin-top:15px;gap:12px}
.bottom-left,.bottom-right{display:flex;align-items:center;gap:9px}
.volume{width:85px}
.lyrics-wrap{margin-top:12px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:14px;overflow:hidden}
.lyrics-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:0}
.lyrics-head-left{min-width:0}
.lyrics-title{font-size:12px;font-weight:700;letter-spacing:.8px;opacity:.9}
.lyrics-sub{font-size:10px;opacity:.5;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.lyrics-status{font-size:9px;font-weight:700;padding:4px 8px;border-radius:20px;background:rgba(255,255,255,.08);opacity:.7;white-space:nowrap}
.lyrics-box{height:245px;overflow-y:auto;scroll-behavior:smooth;padding:105px 4px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.lyrics-box::-webkit-scrollbar{display:none}
.lyric-line{font-size:15px;line-height:1.55;font-weight:600;opacity:.32;padding:8px 9px;margin:2px 0;border-radius:9px;transition:opacity .25s,transform .25s,background .25s,font-size .25s;cursor:pointer}
.lyric-line.active{opacity:1;background:rgba(255,255,255,.08);transform:scale(1.015);font-size:17px}
.lyric-line.past{opacity:.48}
.lyrics-empty{height:180px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:12px;opacity:.45;padding:20px}
</style>
<body>
<div class="player-wrap">
<div class="player">
<div class="content">

<div class="top">
<div>
<div class="top-title">WhatsApp Music</div>
<div class="top-sub" id="playlistSub">${safeTitle}</div>
</div>

<button class="icon-btn" type="button" onclick="toggleMute()" id="muteButton">
<svg viewBox="0 0 24 24">
<path d="M11 5 6 9H2v6h4l5 4V5z"></path>
<path d="M19 9a5 5 0 0 1 0 6"></path>
<path d="M16 6.5a9 9 0 0 1 0 11"></path>
</svg>
</button>
</div>

<div class="video-frame" id="videoFrame" onclick="toggleVideo()">
<video id="videoPlayer"
playsinline
webkit-playsinline
preload="none"
poster="${posterBase64}">
</video>

<div class="big-play" id="bigPlay">
<button class="big-btn" type="button" onclick="event.stopPropagation();toggleVideo()">
<svg viewBox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</button>
</div>
</div>

<div class="info">
<div class="song-title" id="songTitle">${safeTitle || 'Unknown Video'}</div>
<div class="artist" id="artist">${safeChannel || 'Unknown Channel'}</div>
</div>

<div class="progress">
<input id="progress" type="range" min="0" max="100" value="0" step="0.1" oninput="seekVideo(this.value)">
<div class="times">
<span id="currentTime">0:00</span>
<span id="duration">0:00</span>
</div>
</div>

<div class="controls">

<button class="side-btn" type="button" onclick="previousVideo()">
<svg viewBox="0 0 24 24">
<path d="M19 20 9 12l10-8v16z"></path>
<path d="M5 19V5"></path>
</svg>
</button>

<button class="side-btn" type="button" onclick="toggleVideo()">
<svg id="smallPlayIcon" viewBox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>

<svg id="smallPauseIcon" viewBox="0 0 24 24" style="display:none">
<path d="M7 5v14"></path>
<path d="M17 5v14"></path>
</svg>
</button>

<button class="side-btn" type="button" onclick="nextVideo()">
<svg viewBox="0 0 24 24">
<path d="m5 4 10 8-10 8V4z"></path>
<path d="M19 5v14"></path>
</svg>
</button>

</div>

<div class="bottom">

<div class="bottom-left">
<button class="icon-btn" type="button" onclick="toggleRepeat()" id="repeatButton">
<svg viewBox="0 0 24 24">
<path d="M17 2l4 4-4 4"></path>
<path d="M3 11V9a3 3 0 0 1 3-3h15"></path>
<path d="m7 22-4-4 4-4"></path>
<path d="M21 13v2a3 3 0 0 1-3 3H3"></path>
</svg>
</button>
</div>

<div class="bottom-right">

<button class="icon-btn" type="button" onclick="toggleMute()">
<svg viewBox="0 0 24 24">
<path d="M11 5 6 9H2v6h4l5 4V5z"></path>
<path d="m19 9-5 6"></path>
<path d="m14 9 5 6"></path>
</svg>
</button>

<input class="volume" id="volume" type="range" min="0" max="1" step="0.01" value="1" oninput="changeVolume(this.value)">

</div>
</div>

</div>
</div>

<div class="lyrics-wrap">

<div class="lyrics-head">

<div class="lyrics-head-left">
<div class="lyrics-title">LYRICS</div>
<div class="lyrics-sub" id="lyricsSub">${lyricTitle} — ${lyricArtist}</div>
</div>

<div class="lyrics-status" id="lyricsStatus">SYNC</div>

</div>

<div class="lyrics-box" id="lyricsBox"></div>

</div>

</div>

<script>
window.VIDEO_CONFIG={
    title:"${safeTitle}",
    channel:"${safeChannel}",
    duration:"${safeDuration}",
    videoUrl:"${safeVideoUrl}",
    wsUrl:"${safeWsUrl}",
    autoplay:false,
    volume:.8,
    loop:false
};

window.LYRICS_DATA=${lyricsJson};

var video=document.getElementById("videoPlayer"),
frame=document.getElementById("videoFrame"),
songTitle=document.getElementById("songTitle"),
artist=document.getElementById("artist"),
progress=document.getElementById("progress"),
currentTime=document.getElementById("currentTime"),
durationLabel=document.getElementById("duration"),
volume=document.getElementById("volume"),
smallPlayIcon=document.getElementById("smallPlayIcon"),
smallPauseIcon=document.getElementById("smallPauseIcon"),
repeatButton=document.getElementById("repeatButton"),
playlistSub=document.getElementById("playlistSub"),
lyricsBox=document.getElementById("lyricsBox"),
lyricsStatus=document.getElementById("lyricsStatus"),
config=window.VIDEO_CONFIG||{},
lyricText=window.LYRICS_DATA||"",
lyricLines=[],
activeLyricIndex=-1,
isLoop=false,
userPressed=false;

songTitle.textContent=config.title||"Unknown Video";
artist.textContent=config.channel||"YouTube";
playlistSub.textContent=config.title||"Unknown Video";

if(config.volume!==undefined){
    video.volume=config.volume;
    volume.value=config.volume;
}

isLoop=config.loop||false;
video.loop=isLoop;

function formatTime(seconds){
    if(!isFinite(seconds))return"0:00";

    var min=Math.floor(seconds/60);
    var sec=Math.floor(seconds%60);

    if(sec<10)sec="0"+sec;

    return min+":"+sec;
}

function updateUI(){
    if(video.paused){
        smallPlayIcon.style.display="block";
        smallPauseIcon.style.display="none";
        frame.classList.remove("frame-playing");
    }else{
        smallPlayIcon.style.display="none";
        smallPauseIcon.style.display="block";
        frame.classList.add("frame-playing");
    }
}

function playVideo(){
    var result=video.play();

    if(result&&result.catch){
        result.catch(function(){});
    }

    updateUI();
}

function toggleVideo(){
    if(video.paused){
        if(!video.src){
            userPressed=true;
        }

        playVideo();
    }else{
        userPressed=false;
        video.pause();
    }

    updateUI();
}

function previousVideo(){
    if(!isFinite(video.duration))return;

    video.currentTime=Math.max(
        0,
        video.currentTime-10
    );

    syncLyrics(
        video.currentTime,
        true
    );
}

function nextVideo(){
    if(!isFinite(video.duration))return;

    video.currentTime=Math.min(
        video.duration,
        video.currentTime+10
    );

    syncLyrics(
        video.currentTime,
        true
    );
}

function seekVideo(value){
    if(!isFinite(video.duration))return;

    video.currentTime=
        Number(value)/100*video.duration;

    syncLyrics(
        video.currentTime,
        true
    );
}

function changeVolume(value){
    video.volume=Number(value);

    if(video.volume>0){
        video.muted=false;
    }
}

function toggleMute(){
    video.muted=!video.muted;
}

function toggleRepeat(){
    isLoop=!isLoop;

    video.loop=isLoop;

    repeatButton.style.opacity=
        isLoop?"1":".55";

    repeatButton.title=
        isLoop?"Loop ON":"Loop OFF";
}

video.addEventListener(
    "loadedmetadata",
    function(){
        durationLabel.textContent=
            formatTime(video.duration);
    }
);

video.addEventListener(
    "timeupdate",
    function(){
        if(!isFinite(video.duration))return;

        progress.value=
            video.currentTime/video.duration*100;

        currentTime.textContent=
            formatTime(video.currentTime);

        durationLabel.textContent=
            formatTime(video.duration);

        syncLyrics(
            video.currentTime,
            false
        );
    }
);

video.addEventListener(
    "play",
    function(){
        updateUI();
    }
);

video.addEventListener(
    "pause",
    function(){
        updateUI();
    }
);

video.addEventListener(
    "ended",
    function(){
        if(!isLoop){
            progress.value=0;
            currentTime.textContent="0:00";
            video.currentTime=0;
            activeLyricIndex=-1;
            resetLyrics();
        }

        updateUI();
    }
);

function parseLyrics(text){
    var result=[];

    if(!text||typeof text!=="string"){
        return result;
    }

    var lines=text.split(/\\r?\\n/);

    for(
        var i=0;
        i<lines.length;
        i++
    ){
        var line=lines[i];

        var matches=line.match(
            /\\[(\\d{1,3}):(\\d{2})(?:\\.(\\d{1,3}))?\\]\\s*(.*)/
        );

        if(!matches)continue;

        var minutes=Number(matches[1]);
        var seconds=Number(matches[2]);
        var fraction=matches[3]||"0";

        var fractionValue=
            Number(fraction)/
            Math.pow(
                10,
                fraction.length
            );

        var time=
            minutes*60+
            seconds+
            fractionValue;

        var textLine=
            (matches[4]||"").trim();

        result.push({
            time:time,
            text:textLine
        });
    }

    result.sort(function(a,b){
        return a.time-b.time;
    });

    return result;
}

function renderLyrics(){
    lyricLines=parseLyrics(lyricText);

    lyricsBox.innerHTML="";

    if(!lyricLines.length){
        lyricsStatus.textContent="NO LYRICS";

        var empty=
            document.createElement("div");

        empty.className="lyrics-empty";

        empty.textContent=
            "Lirik tidak ditemukan untuk lagu ini.";

        lyricsBox.appendChild(empty);

        return;
    }

    lyricsStatus.textContent="SYNC";

    for(
        var i=0;
        i<lyricLines.length;
        i++
    ){
        var item=
            document.createElement("div");

        item.className="lyric-line";

        item.textContent=
            lyricLines[i].text||"♪";

        item.dataset.index=
            String(i);

        item.addEventListener(
            "click",
            (function(index){
                return function(){
                    video.currentTime=
                        lyricLines[index].time;

                    syncLyrics(
                        video.currentTime,
                        true
                    );

                    if(video.paused){
                        userPressed=true;
                        playVideo();
                    }
                };
            })(i)
        );

        lyricsBox.appendChild(item);
    }
}

function resetLyrics(){
    var elements=
        lyricsBox.querySelectorAll(
            ".lyric-line"
        );

    for(
        var i=0;
        i<elements.length;
        i++
    ){
        elements[i].classList.remove("active");
        elements[i].classList.remove("past");
    }
}

function syncLyrics(time,forceScroll){
    if(!lyricLines.length)return;

    var index=-1;

    for(
        var i=0;
        i<lyricLines.length;
        i++
    ){
        if(
            lyricLines[i].time<=
            time+.05
        ){
            index=i;
        }else{
            break;
        }
    }

    if(
        index===activeLyricIndex&&
        !forceScroll
    ){
        return;
    }

    activeLyricIndex=index;

    var elements=
        lyricsBox.querySelectorAll(
            ".lyric-line"
        );

    for(
        var i=0;
        i<elements.length;
        i++
    ){
        elements[i].classList.remove(
            "active"
        );

        elements[i].classList.remove(
            "past"
        );

        if(i<index){
            elements[i].classList.add(
                "past"
            );
        }

        if(i===index){
            elements[i].classList.add(
                "active"
            );
        }
    }

    if(
        index<0||
        !elements[index]
    ){
        return;
    }

    var target=elements[index];

    var boxRect=
        lyricsBox.getBoundingClientRect();

    var targetRect=
        target.getBoundingClientRect();

    var targetCenter=
        targetRect.top+
        targetRect.height/2;

    var boxCenter=
        boxRect.top+
        boxRect.height/2;

    var difference=
        targetCenter-boxCenter;

    if(Math.abs(difference)>1){
        lyricsBox.scrollBy({
            top:difference,
            behavior:
                forceScroll?
                "auto":
                "smooth"
        });
    }
}

renderLyrics();

var wsVideo=null,
wsChunks=[],
wsDownloaded=0,
wsTotal=null,
wsMime="audio/mpeg",
wsObjectUrl=null,
wsDone=false;

function finishWsDownload(cfg){
    if(wsDone)return;

    wsDone=true;

    var blob=
        new Blob(
            wsChunks,
            {
                type:
                    wsMime||
                    "audio/mpeg"
            }
        );

    if(wsObjectUrl){
        URL.revokeObjectURL(
            wsObjectUrl
        );
    }

    wsObjectUrl=
        URL.createObjectURL(blob);

    video.src=wsObjectUrl;

    video.load();

    if(
        cfg.autoplay||
        userPressed
    ){
        setTimeout(
            function(){
                playVideo();
            },
            300
        );
    }
}

function startVideoStream(cfg){
    var videoUrl=
        cfg.videoUrl||"";

    var wsUrl=
        cfg.wsUrl||"";

    if(
        !wsUrl&&
        videoUrl
    ){
        wsUrl=
            "wss://kyzorohan.web.id/?url="+
            encodeURIComponent(
                videoUrl
            );
    }

    if(
        !wsUrl||
        typeof WebSocket===
        "undefined"
    ){
        return;
    }

    wsVideo=
        new WebSocket(wsUrl);

    wsVideo.binaryType=
        "arraybuffer";

    wsVideo.onmessage=
        function(event){

        if(
            typeof event.data===
            "string"
        ){
            var message=null;

            try{
                message=
                    JSON.parse(
                        event.data
                    );
            }catch(e){}

            if(!message)return;

            if(
                message.type===
                "start"
            ){
                wsMime=
                    message.mime||
                    "audio/mpeg";

                if(
                    message.contentLength!==
                    undefined&&
                    message.contentLength!==
                    null
                ){
                    wsTotal=
                        Number(
                            message.contentLength
                        );
                }

                return;
            }

            if(
                message.type===
                "end"
            ){
                finishWsDownload(
                    config
                );

                return;
            }

            if(
                message.type===
                "error"
            ){
                return;
            }

            return;
        }

        wsChunks.push(
            event.data
        );

        wsDownloaded+=
            event.data.byteLength||
            0;
    };

    wsVideo.onerror=
        function(){};

    wsVideo.onclose=
        function(){};

    window.addEventListener(
        "beforeunload",
        function(){
            if(wsVideo){
                try{
                    wsVideo.close();
                }catch(e){}
            }

            if(wsObjectUrl){
                URL.revokeObjectURL(
                    wsObjectUrl
                );
            }
        }
    );
}

startVideoStream(config);
</script>`
    }

    await m.reply(
        '⏳ Sedang memproses, mohon tunggu sebentar...'
    )

    try {
        const query =
            String(text || '').trim()

        if (!query) {
            return m.reply(
                'Masukkan judul atau link YouTube.\n\n' +
                'Contoh:\n' +
                '.ytplay alan walker faded\n' +
                '.ytp https://youtu.be/xxxxx'
            )
        }

        const result =
            await YouTubeplay(query)

        if (!result?.success) {
            throw new Error(
                result?.message ||
                'Video YouTube tidak ditemukan.'
            )
        }

        const data =
            result.result

        if (!data?.audio) {
            throw new Error(
                'URL media tidak ditemukan.'
            )
        }

        let posterBase64 = ''

        if (data.thumbnail) {
            try {
                const thumbRes =
                    await axios.get(
                        data.thumbnail,
                        {
                            responseType:
                                'arraybuffer',
                            timeout:
                                10000
                        }
                    )

                posterBase64 =
                    'data:image/jpeg;base64,' +
                    Buffer
                        .from(
                            thumbRes.data
                        )
                        .toString(
                            'base64'
                        )
            } catch {
                posterBase64 = ''
            }
        }

        const wsUrl =
            'wss://kyzorohan.web.id/?url=' +
            encodeURIComponent(
                data.audio
            )

        const duration =
            typeof data.duration === 'number'
                ? `${Math.floor(data.duration / 60)}:${String(data.duration % 60).padStart(2, '0')}`
                : String(
                    data.duration || ''
                )

        const htmlPayload =
            buildPlayerHtml({
                title:
                    data.title ||
                    'YouTube Video',

                channel:
                    data.channel ||
                    'YouTube',

                duration,

                videoUrl:
                    data.audio,

                wsUrl,

                posterBase64,

                lyrics:
                    data.lyrics
            })

        await conn.relayMessage(
            m.chat,
            {
                botForwardedMessage: {
                    message: {
                        richResponseMessage: {
                            messageType: 1,

                            unifiedResponse: {
                                data:
                                    Buffer
                                        .from(
                                            JSON.stringify({
                                                __typename:
                                                    'GenAIUnifiedResponse',

                                                response_id:
                                                    randomUUID(),

                                                sections: [
                                                    {
                                                        __typename:
                                                            'GenAIUnifiedResponseSection',

                                                        view_model: {
                                                            __typename:
                                                                'GenAISingleLayoutViewModel',

                                                            primitive: {
                                                                __typename:
                                                                    'FOAHtmlPrimitiveDemoDONOTUSE',

                                                                trusted_sources:
                                                                    [],

                                                                payload:
                                                                    htmlPayload
                                                            }
                                                        }
                                                    }
                                                ]
                                            })
                                        )
                                        .toString(
                                            'base64'
                                        )
                            },

                            contextInfo: {
                                isForwarded: true,
                                forwardOrigin: 4
                            }
                        }
                    }
                }
            },
            {
                additionalAttributes: {
                    type: 'text'
                },
                edit: false
            }
        )

    } catch (err) {
        await m.reply(
            'Gagal memutar video YouTube.\nError: ' +
            (err?.message || err)
        )
    }
}