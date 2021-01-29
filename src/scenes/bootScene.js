import Phaser from 'phaser';
import CST from '../utils/utils';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.BOOT);
  }

  preload() {
    this.load.image('logo', 'assets/images/logo1.png');
    for (let i = 0; i < 50; i += 1) {
      this.load.image('logo' + i, 'assets/images/logo1.png');
    }
    console.log('I dont think this scene is important in my game concept');
  }

  create() {
    this.scene.start(CST.scenes.PRELOAD);
  }
}