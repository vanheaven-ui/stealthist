import Phaser from 'phaser';
import Menu from '../utils/menu';
import { CST } from '../utils/utils';
import APIHandler from '../utils/apiHandler';
import Timer from '../utils/timer';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAMEOVER);
    this.playerTime = JSON.parse(localStorage.getItem('time'));
    this.score;
  }

  create() {
    console.log(this.playerTime);
    this.add.image(CST.dimens(this).width / 2, 100, 'gameoverTitle');
    this.add.image(CST.dimens(this).width / 2, 180, 'welldone');
    this.add.image(CST.dimens(this).width / 2, 250, 'yourtime');

    this.timer = new Timer(0);

    Menu.createMenuBtn(this);

    const restartBtn = this.add.image((CST.dimens(this).width / 2) * 1.50, 500, 'restart');
    restartBtn.setInteractive();

    restartBtn.on('pointerdown', () => location.reload());

    this.timeObj = APIHandler.modifyTime(this.playerTime.min, this.playerTime.sec);
    console.log(this.timeObj);
    this.timeMins = this.timeObj.min;
    this.timeSecs = this.timeObj.sec;

    this.score = this.add.text(
      350,
      300,
      `${this.timer.printTime(this.timeMins,this.timeSecs)}`,
      {
        fontSize: '32px'
      }
    );

    this.loadBestScoreBtn = this.add.image(200, 400, 'best-score');

    this.loadBestScoreBtn.setInteractive();

    this.loadBestScoreBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.LEADER);
    });
  }
}