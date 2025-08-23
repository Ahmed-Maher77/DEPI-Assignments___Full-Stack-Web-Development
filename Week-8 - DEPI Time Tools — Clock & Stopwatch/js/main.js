// ================================= Select Elements =================================
// Clock Elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const currentDateElement = document.getElementById("current-date");
const timezoneElement = document.getElementById("timezone");

// Stopwatch Elements
const swHoursElement = document.getElementById("sw-hours");
const swMinutesElement = document.getElementById("sw-minutes");
const swSecondsElement = document.getElementById("sw-seconds");
const swMillisecondsElement = document.getElementById("sw-milliseconds");

// Control Buttons
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

// Tab Elements
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

// Lap Elements
const lapList = document.getElementById("lap-list");

// ================================= Global Variables =================================
let clockInterval;
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchStartTime = 0;
let stopwatchElapsedTime = 0;
let lapTimes = [];

// ================================= Tab Functionality =================================
function initTabs() {
	tabBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const targetTab = btn.getAttribute("data-tab");
			switchTab(targetTab);
		});
	});
}

function switchTab(targetTab) {
	// Remove active class from all tabs and panes
	tabBtns.forEach((btn) => btn.classList.remove("active"));
	tabPanes.forEach((pane) => pane.classList.remove("active"));

	// Add active class to selected tab and pane
	document.querySelector(`[data-tab="${targetTab}"]`).classList.add("active");
	document.getElementById(`${targetTab}-tab`).classList.add("active");
}

// ================================= Clock Functionality =================================
function initClock() {
	updateClock();
	clockInterval = setInterval(updateClock, 1000);
}

function updateClock() {
	const now = new Date();

	// Update time
	hoursElement.textContent = String(now.getHours()).padStart(2, "0");
	minutesElement.textContent = String(now.getMinutes()).padStart(2, "0");
	secondsElement.textContent = String(now.getSeconds()).padStart(2, "0");

	// Update date
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	currentDateElement.textContent = now.toLocaleDateString("en-US", options);

	// Update timezone
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	timezoneElement.textContent = timezone;
}

// ================================= Stopwatch Functionality =================================
function initStopwatch() {
	startBtn.addEventListener("click", startStopwatch);
	pauseBtn.addEventListener("click", pauseStopwatch);
	resetBtn.addEventListener("click", resetStopwatch);
}

function startStopwatch() {
	if (!stopwatchRunning) {
		stopwatchRunning = true;
		stopwatchStartTime = Date.now() - stopwatchElapsedTime;

		startBtn.disabled = true;
		pauseBtn.disabled = false;
		resetBtn.disabled = false;

		stopwatchInterval = setInterval(updateStopwatch, 10); // Update every 10ms for smooth milliseconds
	}
}

function pauseStopwatch() {
	if (stopwatchRunning) {
		stopwatchRunning = false;
		clearInterval(stopwatchInterval);

		startBtn.disabled = false;
		pauseBtn.disabled = true;
	}
}

function resetStopwatch() {
	stopwatchRunning = false;
	clearInterval(stopwatchInterval);
	stopwatchElapsedTime = 0;

	startBtn.disabled = false;
	pauseBtn.disabled = true;
	resetBtn.disabled = true;

	updateStopwatchDisplay(0);
	clearLapTimes();
}

function updateStopwatch() {
	const currentTime = Date.now();
	stopwatchElapsedTime = currentTime - stopwatchStartTime;
	updateStopwatchDisplay(stopwatchElapsedTime);
}

function updateStopwatchDisplay(elapsedTime) {
	const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
	const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
	const milliseconds = Math.floor((elapsedTime % 1000) / 10);

	swHoursElement.textContent = String(hours).padStart(2, "0");
	swMinutesElement.textContent = String(minutes).padStart(2, "0");
	swSecondsElement.textContent = String(seconds).padStart(2, "0");
	swMillisecondsElement.textContent = String(milliseconds).padStart(2, "0");
}

function addLapTime() {
	if (stopwatchRunning) {
		const lapTime = {
			time: stopwatchElapsedTime,
			lapNumber: lapTimes.length + 1,
		};
		lapTimes.push(lapTime);
		displayLapTime(lapTime);
	}
}

function displayLapTime(lapTime) {
	const hours = Math.floor(lapTime.time / (1000 * 60 * 60));
	const minutes = Math.floor((lapTime.time % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((lapTime.time % (1000 * 60)) / 1000);
	const milliseconds = Math.floor((lapTime.time % 1000) / 10);

	const lapElement = document.createElement("div");
	lapElement.className = "lap-item";
	lapElement.innerHTML = `
        <span class="lap-number">Lap ${lapTime.lapNumber}</span>
        <span class="lap-time">${String(hours).padStart(2, "0")}:${String(
		minutes
	).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(
		milliseconds
	).padStart(2, "0")}</span>
    `;

	lapList.appendChild(lapElement);
}

function clearLapTimes() {
	lapTimes = [];
	lapList.innerHTML = "";
}

// Add lap button functionality
function addLapButton() {
	const lapBtn = document.createElement("button");
	lapBtn.className = "control-btn lap-btn";
	lapBtn.innerHTML = '<i class="fas fa-flag me-2"></i>Lap';
	lapBtn.addEventListener("click", addLapTime);

	// Insert after pause button
	pauseBtn.parentNode.insertBefore(lapBtn, resetBtn.nextSibling);
}

// ================================= Utility Functions =================================
function formatTime(ms) {
	const hours = Math.floor(ms / (1000 * 60 * 60));
	const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((ms % (1000 * 60)) / 1000);
	const milliseconds = Math.floor((ms % 1000) / 10);

	return {
		hours: String(hours).padStart(2, "0"),
		minutes: String(minutes).padStart(2, "0"),
		seconds: String(seconds).padStart(2, "0"),
		milliseconds: String(milliseconds).padStart(2, "0"),
	};
}

// ================================= Footer =================================
function updateFooter() {
	const currentYear = document.getElementById("current-year");
	currentYear.innerHTML = new Date().getFullYear();
}

// ================================= Initialization =================================
function init() {
	initTabs();
	initClock();
	initStopwatch();
	addLapButton();
	updateFooter();
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
