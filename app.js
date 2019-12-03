let timer = document.querySelector("#tempo");
let hours = document.querySelector("#horas");
let minutes = document.querySelector("#minutos");
let seconds = document.querySelector("#seg");

let time = setInterval(() => {
  let duration = moment.duration(
    moment("2020-01-01 00:00:00").valueOf() - moment().valueOf()
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