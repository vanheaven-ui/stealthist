import Phaser from 'phaser';
import APIHandler from '../utils/apiHandler';
import Timer from '../utils/timer';
import { CST, sortArrayByScore } from '../utils/utils';

export default class Leaderboard extends Phaser.Scene {
  constructor() {
    super(CST.scenes.LEADER);
    this.space = 0;
  }

  create() {
    this.add.image(CST.dimens(this).width / 2, 80, 'best-score');
    this.add.image(340, 130, 'player');
    this.add.image(430, 140, 'player-score');
    this.timer = new Timer(0);
    this.playAgainBtn = this.add.image(620, 300, 'play-again');
    this.menuBtn = this.add.image(150, 300, 'menu');

    [this.menuBtn, this.playAgainBtn].forEach(btn => {
      btn.setInteractive();
    });

    this.menuBtn.setAngle(-15);

    this.playAgainBtn.setAngle(15);

    /* eslint-disable */

    this.playAgainBtn.on('pointerdown', () => {
      location.reload();
    });

    /* eslint-enable */

    this.menuBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.TITLE);
    });

    APIHandler.getData(APIHandler.baseEndPoint)
      .then(data => {
        sortArrayByScore(data.result).forEach((userObj, index) => {
          this.add.text(
            280,
            170 + this.space,
            `${index + 1}. ${userObj.user} | ${this.timer.printTime(userObj.score.min, userObj.score.sec)}`,
            {
              font: '19px monospace',
              fill: '#0000ff',
            },
          );
          this.space += 30;
        });
      });
  }

  successMsg() {
    this.successText.setVisible(true);
    setTimeout(() => {
      this.successText.setVisible(false);
    }, 1000);
  }

  update() {
    this.sound.stopAll();
  }
}