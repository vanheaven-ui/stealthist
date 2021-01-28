import Phaser from 'phaser';
import { CST } from '../utils/utils';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.TITLE);
  }

  create() {
    this.add.image(CST.dimens(this).width / 2, CST.dimens(this).height / 2, 'logo').setDepth(1);
    this.add.image(0, 0, 'background').setOrigin(0, 0);
  }
}