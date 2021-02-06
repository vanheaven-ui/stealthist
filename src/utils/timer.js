export default class Timer {
  constructor(seconds) {
    this.startTime = seconds;
    this.minutes = Math.floor(this.startTime / 60);
    this.seconds = this.startTime % 60;
  }

  printTime(min, sec) {
    this.minFormat = min < 10 ? `0${min}` : min;
    this.secFormat = sec < 10 ? `0${sec}` : sec;
    return `${this.minFormat}:${this.secFormat}`;
  }

  countDown() {
    if (this.seconds > 0) {
      this.seconds -= 1;
      this.scene.text.setText(`Countdown👉  ${this.printTime(this.minutes, this.seconds)}`);
      if (this.seconds === 0 && this.minutes > 0) {
        this.seconds = 59;
        this.minutes -= 1;
        this.scene.text.setText(`Countdown👉  ${this.printTime(this.minutes, this.seconds)}`);
      }
    }
  }
}