import Phaser from 'phaser';
import { CST } from '../utils/utils';
import Menu from '../utils/menu';

export default class FailScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.FAIL);
  }

  create() {
    this.add.image(CST.dimens(this).width / 2, 100, 'gameoverTitle');
    const restartBtn = this.add.image((CST.dimens(this).width / 2) * 1.50, 400, 'restart');
    this.quitBtn = this.add.image(CST.dimens(this).width / 2, 480, 'quit');
    
    [restartBtn, this.quitBtn].forEach(btn => btn.setInteractive());

    restartBtn.on('pointerdown', () => location.reload());

    this.quitBtn.on('pointerdown', () => close());

    Menu.createMenuBtn(this);
  }
}