import Phaser from 'phaser';
import CST from '../utils/utils';

export default class StealthScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAME1);
  }

  create() {
    this.menuBtn = this.add.image(
      CST.dimens(this).width / 2 - 200,
      CST.dimens(this).height * 0.9,
      'menu',
    );

    this.menuBtn.setInteractive();

    this.menuBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.TITLE);
    });
  }
}