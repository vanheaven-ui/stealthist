import Phaser from 'phaser';
import CST from '../utils/utils';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.TITLE);
  }

  create() {
    this.add.image(CST.dimens(this).width / 2 * 1.25, CST.dimens(this).height / 2 * 0.30, 'logo').setDepth(1);
    this.add.image(0, 0, 'background').setOrigin(0, 0);
    this.optionsBtn = this.add.image(CST.dimens(this).width / 2, CST.dimens(this).height / 2 , 'options').setDepth(1);
    this.playBtn = this.add.image(CST.dimens(this).width / 2, CST.dimens(this).height / 2 * 0.70, 'play').setDepth(2);
    this.creditsBtn = this.add.image(CST.dimens(this).width / 2, CST.dimens(this).height / 2 * 1.30, 'credits');

    [this.optionsBtn, this.playBtn, this.creditsBtn].forEach((btn) => {
      btn.setInteractive();
    });


    this.playBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.GUIDE1);
    });

    this.optionsBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.OPTIONS);
    });

    this.creditsBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.CREDITS);
    });
  }
}