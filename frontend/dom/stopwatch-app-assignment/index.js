/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

// TODO: answer here
const stopwatch = document.getElementById('stopwatch');

let startbtn = document.getElementById('start');
startbtn.addEventListener('click', start);

let stopbtn = document.getElementById('stop');
stopbtn.addEventListener('click', stop);

let resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', reset);


let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function start() {
  // TODO: answer here
  stoptime = false;
  runTime();
}

function stop() {
  // TODO: answer here
  stoptime = true;
}

function reset() {
  // TODO: answer here
  stopwatch.innerHTML = '00:00:00';
  stoptime = true;
  hr = 0;
  min = 0;
  sec = 0;
}

function runTime() {
  // TODO: answer here
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    stopwatch.innerHTML = hr + ':' + min + ':' + sec;
    setTimeout(runTime, 1000);
  }
}