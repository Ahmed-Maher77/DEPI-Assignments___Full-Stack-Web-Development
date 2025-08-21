// ================================= Select Elements =================================
const hours = document.querySelector(".hours #count");
const minutes = document.querySelector(".minutes #count");
const seconds = document.querySelector(".seconds #count");
const targetTimeElement = document.getElementById("target-time");
const countdownFinishedModal_trigger = document.querySelector("[data-bs-target='#staticBackdrop']");
const currentYear = document.getElementById("current-year");


// ================================= Count-down Time =================================
const targetTime = new Date("2025-08-25T23:59:59");

// Update Timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Update Timer
function updateTimer() {
	const timeNow = new Date();
	const timeDiff = targetTime - timeNow;

	// Check if the countdown is finished
	if (timeDiff <= 0) {
		resetCountdown();
        showPopup();
		return;
	}
	const { hoursLeft, minutesLeft, secondsLeft } = calculateTimeLeft(timeDiff);
	countdownDisplay(hoursLeft, minutesLeft, secondsLeft);
}

// Reset Countdown
function resetCountdown() {
	clearInterval(timerInterval);
	hours.textContent = "00";
	minutes.textContent = "00";
	seconds.textContent = "00";
}

// Calculate Time Left
function calculateTimeLeft(timeDiff) {
	const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
	const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
	const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
	return { hoursLeft, minutesLeft, secondsLeft };
}

// Update the countdown display
function countdownDisplay(hoursLeft, minutesLeft, secondsLeft) {
	hours.textContent = String(hoursLeft).padStart(2, "0");
	minutes.textContent = String(minutesLeft).padStart(2, "0");
	seconds.textContent = String(secondsLeft).padStart(2, "0");
}

// Show Popup when Countdown is Finished
function showPopup() {
    countdownFinishedModal_trigger.click();
    targetTimeElement.innerHTML = targetTime.toISOString().slice(0, 19).replace("T", "  &nbsp; ");
}


// ================================= Footer =================================
currentYear.innerHTML = new Date().getFullYear();