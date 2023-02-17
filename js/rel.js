window.addEventListener("scroll", function () {
    let top = document.querySelector('.top');

    if (window.scrollY > 0) {
        top.classList.add("line");
    } else {
        top.classList.remove("line");
    }
})
window.onmouseover = function () {
}

const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

const audio = document.getElementById("audio")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const title = document.getElementById("title")
const musicCover = document.getElementById("music-cover")


const songs = ["打上花火", "Mojito", "Super_Star", "离人"]

let songIndex = 0;

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerHTML = song
    audio.src = `../music/${song}.mp3`;
    musicCover.src = `../image/${song}.jpg`;
}

// 播放歌曲
function playSong() {
    // 元素添加类名
    musicContainer.classList.add("play")
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}


function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}


function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {

    const {
        duration,
        currentTime
    } = e.target;
    const progressPercent = (currentTime / duration) * 100

    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {

    const width = this.clientWidth

    const clickX = e.offsetX

    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

playBtn.onclick = function () {
    musicContainer.classList.contains('play') ? pauseSong() : playSong()
}

prevBtn.onclick = prevSong
nextBtn.onclick = nextSong

progressContainer.onclick = setProgress

audio.ontimeupdate = updateProgress

audio.onended = nextSong