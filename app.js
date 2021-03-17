const minute = document.getElementById('min');
const second = document.getElementById('sec');
const centisecond = document.getElementById('cs');
const playBtn = document.getElementById('play');
const pauzeBtn = document.getElementById('pauze');
const stopBtn = document.getElementById('stop');

const stopWatch = {
  min: 0,
  sec: 0,
  cs: 0,
  isPlay: false,
  isPauze: false,
  isStop: true,
};

// minute.textContent = stopWatch.min;
// second.textContent = stopWatch.sec;
// centisecond.textContent = stopWatch.cs;

playBtn.textContent = 'Play';
pauzeBtn.textContent = 'Pauze';
stopBtn.textContent = 'Stop';

function play() {
  stopWatch.isPlay = true;
  stopWatch.cs++;

  if (stopWatch.cs === 100) {
    stopWatch.cs = 0;
    stopWatch.sec++;
  }

  if (stopWatch.sec === 60) {
    stopWatch.sec = 0;
    stopWatch.min++;
  }

  centisecond.textContent = stopWatch.cs;
  second.textContent = stopWatch.sec;
  minute.textContent = stopWatch.min;
}

function pauze() {
  if (stopWatch.isPlay === true) {
    stopWatch.isPlay = false;
    stopWatch.isPauze = true;
    clearInterval(player);
  }
}

playBtn.addEventListener('click', () => {
  player = setInterval(play, 10);
});

pauzeBtn.addEventListener('click', pauze);
