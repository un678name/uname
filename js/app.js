let timer = document.querySelector("#timer");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let time = setInterval(() => {
  let duration = moment.duration(
    moment("2019-01-01 00:00:00").valueOf() - moment().valueOf()
  );

  if (duration >= 0) {
    hours.textContent =
      duration.hours().toString().length === 1
        ? "0" + duration.hours().toString()
        : duration.hours().toString();
    minutes.textContent =
      duration.minutes().toString().length === 1
        ? "0" + duration.minutes().toString()
        : duration.minutes().toString();
    seconds.textContent =
      duration.seconds().toString().length === 1
        ? "0" + duration.seconds().toString()
        : duration.seconds().toString();
  } else {
    timer.textContent = "SIM VOCE PERDEU TEMPO A VIDA...";
    clearInterval(time);
  }
}, 1000);
