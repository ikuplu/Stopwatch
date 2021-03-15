const min = document.getElementById('min');
const sec = document.getElementById('sec');
const cs = document.getElementById('cs');
const play = document.getElementById('play');
const pauze = document.getElementById('pauze');
const stop = document.getElementById('stop');

const stopWatch = {
  min: 0,
  sec: 0,
  cs: 0,
  isPlay: false,
  isPauze: false,
  isStop: true,
};

min.textContent = stopWatch.min;
sec.textContent = stopWatch.sec;
cs.textContent = stopWatch.cs;

play.textContent = 'Play';
pauze.textContent = 'Pauze';
stop.textContent = 'Stop';
