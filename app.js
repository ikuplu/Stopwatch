const minSetter = document.getElementById('set-min');
const secSetter = document.getElementById('set-sec');
const minute = document.getElementById('min');
const second = document.getElementById('sec');
const centisecond = document.getElementById('cs');
const playBtn = document.getElementById('play');
const pauzeBtn = document.getElementById('pauze');
const stopBtn = document.getElementById('stop');

minute.textContent = '00';
second.textContent = '00';
centisecond.textContent = '00';

const stopWatch = {
  min: 0,
  sec: 0,
  cs: 0,
  isPlay: false,
  isPauze: false,
  isStop: true,
};

playBtn.textContent = 'Play';
pauzeBtn.textContent = 'Pauze';
stopBtn.textContent = 'Stop';

function checkSetter() {
  if (minSetter.value) {
    stopWatch.min = minSetter.value;
  }
  if (secSetter.value) {
    stopWatch.sec = secSetter.value;
  }
  minSetter.value = '';
  secSetter.value = '';
}

function play() {
  stopWatch.isPlay = true;
  checkSetter();

  if (
    (stopWatch.min !== 0 && stopWatch.min !== '') ||
    (stopWatch.sec !== 0 && stopWatch.sec !== '')
  ) {
    stopWatch.cs--;
    if (stopWatch.cs === -100 && stopWatch.sec > 0) {
      stopWatch.sec--;
      stopWatch.cs = 0;
      console.log(stopWatch.sec);
    }
    if (stopWatch.cs === -100 && stopWatch.sec === 0) {
      stopWatch.min--;
      stopWatch.sec--;
      stopWatch.sec = 59;
      stopWatch.cs = 0;
      console.log(stopWatch.min);
    }
    display();
  } else {
    stopWatch.cs++;
    if (stopWatch.cs === 100) {
      stopWatch.cs = 0;
      stopWatch.sec++;
    }

    if (stopWatch.sec === 60) {
      stopWatch.sec = 0;
      stopWatch.min++;
    }
    display();
  }
}

function pauze() {
  if (stopWatch.isPlay === true) {
    stopWatch.isPlay = false;
    stopWatch.isPauze = true;
    clearInterval(player);
  }
}

function stop() {
  if (stopWatch.isPlay === true || stopWatch.isPauze === true) {
    stopWatch.isPlay = false;
    stopWatch.isPauze = false;
    stopWatch.isStop = true;
    clearInterval(player);
    reset();
  }
}

function reset() {
  stopWatch.min = 0;
  stopWatch.sec = 0;
  stopWatch.cs = 0;
  display();
}

function display() {
  minute.textContent = stopWatch.min;
  second.textContent = stopWatch.sec;
  centisecond.textContent = stopWatch.cs;
}

playBtn.addEventListener('click', () => {
  player = setInterval(play, 10);
});

pauzeBtn.addEventListener('click', pauze);
stopBtn.addEventListener('click', stop);

minSetter.addEventListener('input', () => {
  if (minSetter.value <= 99 && minSetter.value !== '') {
    minute.textContent = minSetter.value;
  } else {
    minute.textContent = '00';
  }
});
secSetter.addEventListener('input', () => {
  if (secSetter.value <= 59 && secSetter.value !== '') {
    second.textContent = secSetter.value;
  } else {
    second.textContent = '00';
  }
});
