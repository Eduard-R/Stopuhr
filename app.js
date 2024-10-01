const Stopuhr = {

    name: 'Stopuhr',
    description: 'Eine Stopuhr mit den Methoden: Start, Stop und Reset.',
    buttonStart: document.getElementById('startbt'),
    buttonStop: document.getElementById('stopbt'),
    buttonReset: document.getElementById('resetbt'),

    startTime: 0,
    currentTime: 0,
    intervalId: null,

    start: function start() {
        if (this.intervalId !== null) {
            console.log("Stopwatch is already running. Please stop it before starting again.");
            return;
        }
        this.startTime = new Date().getTime();
        this.intervalId = setInterval(() => {
            this.currentTime = new Date().getTime() - this.startTime;
            this.displayTime();
        }, 10); // update every 10ms
    },

    stop: function stop() {
        clearInterval(this.intervalId);
        this.intervalId = null; // Reset the intervalId to null
    },

    reset: function reset() {
        this.startTime = 0;
        this.currentTime = 0;
        this.displayTime();
    },

    displayTime: function displayTime() {
        const displayElement = document.getElementById('displayText');
        const timeString = this.formatTime(this.currentTime);
        displayElement.value = timeString;
    },

    formatTime: function formatTime(time) {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    } 
};