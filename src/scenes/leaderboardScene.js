import Phaser from 'phaser'
import APIHandler from '../utils/apiHandler';
import { CST, sortArrayByScore } from '../utils/utils';

export default class Leaderboard extends Phaser.Scene {
  constructor() {
    super(CST.scenes.LEADER);
    this.baseEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CdISo1zrmscAtAtqHEmn/scores';
    this.gameData = { "user": "", "score": "" };
    this.successText;
    this.space = 0;
  }

  create() {
    this.add.image(CST.dimens(this).width / 2, 80, 'best-score');
    this.add.image(360, 130, 'player');
    this.add.image(460, 130, 'player-score');
    this.playAgainBtn = this.add.image(620, 300, 'play-again');
    this.menuBtn = this.add.image(150, 300, 'menu');

    [this.menuBtn, this.playAgainBtn].forEach(btn => {
      btn.setInteractive();
    });

    this.menuBtn.setAngle(-15);

    this.playAgainBtn.setAngle(15);

    this.playAgainBtn.on('pointerdown', () => {
      location.reload();
    });

    this.menuBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.TITLE);
    });

    this.gameData.user = JSON.parse(localStorage.getItem('player'));
    this.gameData.score = JSON.parse(localStorage.getItem('time'));
    console.log(APIHandler.modifyTime(this.gameData.score.min, this.gameData.score.sec));

    APIHandler.postData(this.baseEndPoint, this.gameData)
    .then(data => {
      console.log(data);
      this.successText = this.add.text(
        180,
        20,
        `${data.result}`,
        { 
          fontSize: '22px',
          fill: '#00ff00'
        }
      );
      this.successText.setVisible(true);
      setTimeout(() => {
        this.successText.setVisible(false);
      }, 1000);
    });

    APIHandler.getData(this.baseEndPoint)
    .then(data => {
      sortArrayByScore(data.result).forEach((result, index) => {
        this.add.text(
          280,
          170 + this.space,
          `${index + 1}. ${result.user} | ${result.score.min} : ${result.score.sec}`,
          {
            font: '19px monospace',
            fill: '#0000ff',
          }
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