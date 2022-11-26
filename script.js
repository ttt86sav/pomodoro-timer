let startButton = document.querySelector('#start');
let timer = document.querySelector('#pomodoro-time');
let startValue = timer.textContent;
let minutes = +startValue.slice(0, 2);
let seconds = +startValue.slice(3);

startButton.addEventListener('click', function() {
    if (startButton.textContent == "start") {
        startButton.textContent = "stop";
        let timerId = setInterval(() => {
            if (minutes > 0) {

                if (seconds <= 0) {
                    minutes -= 1;
                    seconds = 60;
                }

                seconds--;
                timer.textContent = (`${minutes}:${seconds}`);

                if (seconds <= 9) {
                    seconds = `0${seconds}`;
                    timer.textContent = (`${minutes}:${seconds}`);
                }
                if (minutes <= 9) {
                    timer.textContent = (`0${minutes}:${seconds}`);
                }
            } else {
                seconds--;
                timer.textContent = (`${minutes}:${seconds}`);

                if (seconds <= 9) {
                    seconds = `0${seconds}`;
                    timer.textContent = (`0${minutes}:${seconds}`);
                }
                if (seconds <= 0) {
                    clearInterval(timerId);
                    startButton.textContent = "start";
                    timer.textContent = startValue;
                    minutes = +startValue.slice(0, 2);
                    seconds = +startValue.slice(3);
                }
            }
        }, 100);
    } else {
        startButton.textContent = "start";

    }
})