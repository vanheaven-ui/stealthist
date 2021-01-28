import Phaser from 'phaser';
import { CST } from '../utils/utils';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.TITLE);
  }

  create() {
    this.add.image(CST.dimens(this).width / 2 * 1.25, CST.dimens(this).height / 2 * 0.30, 'logo').setDepth(1);
    this.add.image(0, 0, 'background').setOrigin(0, 0);
    this.add.image(CST.dimens(this).width / 2, CST.dimens(this).height / 2 * 1.30, 'options')
    this.add.image(CST.dimens(this).width / 2, CST.dimens(this).height / 2, 'play').setDepth(2);

    this.input.on('pointerdown', () => {
      this.scene.start(CST.scenes.CREDITS);
    });
  }
}