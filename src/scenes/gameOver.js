import Phaser from 'phaser';
import Menu from '../utils/menu';
import { CST } from '../utils/utils';
import APIHandler from '../utils/apiHandler';
import Timer from '../utils/timer';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAMEOVER);
  }

  create() {
    this.playerTime = JSON.parse(localStorage.getItem('time'));
    this.timeMin = this.playerTime.min;
    this.timeSec = this.playerTime.sec;
    this.username = JSON.parse(localStorage.getItem('player'));
    this.userObj = {
      user: this.username,
      score: APIHandler.modifyTime(this.timeMin, this.timeSec),
    };
    APIHandler.postData(APIHandler.baseEndPoint, this.userObj)
      .then(data => () => {
        this.successText = this.add.text(
          400,
          20,
          `${data.result}`,
          { fill: '0x00ff00', font: '20px monospace' },
        );
        this.successText.setVisible(true);
        setTimeout(() => {
          this.successText.setVisible(false);
        }, 1000);
      });

    this.add.image(CST.dimens(this).width / 2, 100, 'gameoverTitle');
    this.add.image(CST.dimens(this).width / 2, 180, 'welldone');
    this.add.image(CST.dimens(this).width / 2, 250, 'yourtime');

    this.timer = new Timer(0);

    Menu.createMenuBtn(this);

    const restartBtn = this.add.image((CST.dimens(this).width / 2) * 1.50, 500, 'restart');
    restartBtn.setInteractive();

    /* eslint-disable */
    restartBtn.on('pointerdown', () => location.reload());
    /* eslint-enable */

    this.timeObj = APIHandler.modifyTime(this.playerTime.min, this.playerTime.sec);
    this.timeMins = this.timeObj.min;
    this.timeSecs = this.timeObj.sec;

    this.score = this.add.text(
      350,
      300,
      `${this.timer.printTime(this.timeMins, this.timeSecs)}`,
      {
        fontSize: '32px',
      },
    );

    this.loadBestScoreBtn = this.add.image(200, 400, 'best-score');

    this.loadBestScoreBtn.setInteractive();

    this.loadBestScoreBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.LEADER);
    });
  }
}