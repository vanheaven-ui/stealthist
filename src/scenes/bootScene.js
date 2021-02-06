import Phaser from 'phaser';
import { CST } from '../utils/utils';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.BOOT);
  }

  preload() {
    this.load.image('logo', 'assets/images/logo1.png');
  }

  create() {
    this.scene.start(CST.scenes.PRELOAD);
  }
}