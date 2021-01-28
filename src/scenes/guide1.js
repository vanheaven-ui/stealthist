import Phaser from 'phaser';
import { CST } from '../utils/utils';

export default class GuideOne extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GUIDE1);
  }

  create() {
    console.log('This is the guide scene');
    this.para = this.add.dom(CST.dimens(this).width / 2, CST.dimens(this).height / 2).createElement('p', 'color: #fff; background-color: #333; font: 19px monospace', 'Testing text');
    console.log(this.para);

    this.input.on('pointerdown', () => {
      this.scene.start(CST.scenes.GAME);
    });
  }

}