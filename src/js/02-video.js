import Player from '@vimeo/player';
import throttle  from  "lodash.throttle";

const iframe = document.querySelector('iframe');
const STORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay,1000));

function onPlay (e){
    const time = e.seconds;
    localStorage.setItem("videoplayer-current-time", time);
};

function timerOfVideo(){
const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {
    player.setCurrentTime(currentTime)
    }
}