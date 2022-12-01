import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_PLAYER = "videoplayer-current-time";

setCurrentTime();

const onPlay = (data) => {
    localStorage.setItem(CURRENT_TIME_PLAYER, data.seconds);
};

function setCurrentTime() {
    if (localStorage.getItem(CURRENT_TIME_PLAYER)) {
        player.setCurrentTime(localStorage.getItem(CURRENT_TIME_PLAYER))
    }
}

player.on('timeupdate', throttle(onPlay, 1000));

