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

minute.textContent = stopWatch.min;
second.textContent = stopWatch.sec;
centisecond.textContent = stopWatch.cs;

playBtn.textContent = 'Play';
pauzeBtn.textContent = 'Pauze';
stopBtn.textContent = 'Stop';
