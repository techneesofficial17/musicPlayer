'use strict';
// const pause = document.querySelector('#pause');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const img = document.querySelector('#img');
const play = document.querySelector('#play');
let range = document.querySelector('#range');
let song = new Audio('music.mp3');
let duration = 0;
let currentTime = 0;
window.onload = playSong;
let isPlaying = false;
// console.log(parseInt(song.duration));

function playSong() {
    if (!isPlaying) {
        song.play();
        img.src = './images/pause.png';
        isPlaying = true;
        range.max = song.duration;
    } else {
        isPlaying = false;
    }
}
play.addEventListener('click', pauseSong);

function pauseSong() {
    img.src = './images/play.png';
    song.pause();
    play.addEventListener('click', playSong);
}

function Range() {
    duration = song.duration;
    currentTime = duration;
    // console.log('duration : ' + duration);
    // console.log('current time : ' + currentTime);

    range.addEventListener('change', () => {
        song.currentTime = range.value;
    });
    next.addEventListener('click', () => {
        range.value += 10;
    });
}
song.addEventListener('timeupdate', () => {
    range.value = song.currentTime;
    Range();

    let lastValue = Math.floor(range.value);
    let finalValue = Math.floor(range.max);

    if (lastValue === finalValue) {
        console.log('finished song');
        playSong();
    }
});