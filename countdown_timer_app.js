let interval;
let remainingTime;

function startTimer() {
    const input = document.getElementById("timerInput").value;
    remainingTime = parseInt(input);

    if (isNaN(remainingTime) || remainingTime <= 0) {
        alert("Please enter a valid number greater than 0. 🤓");
        return;
    }

    if (interval) {
        clearInterval(interval);
    }

    updateTimerDisplay();

    interval = setInterval(function () {
        remainingTime--;
        updateTimerDisplay();

        if (remainingTime <= 0) {
            clearInterval(interval);
            alert("⏰ Time is up! ⏰");
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById("timerDisplay").innerText = "⏱️ Time remaining: " + remainingTime + " seconds";
}

function showNotification() {
    const delay = 4000;
    
    setTimeout(function () {
        alert("This is your delayed notification! 🤔");
    }, delay);
}

let repeatInterval;

function startRepeatedNotifications() {
    repeatInterval = setInterval(function () {
        alert("This is your repeated notification! 🤩");
    }, 5000);
}

function stopRepeatedNotifications() {
    clearInterval(repeatInterval);
        alert("Repeated notifications stopped. ✋🏻");
}