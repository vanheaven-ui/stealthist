import Phaser from 'phaser';
import { CST } from '../utils/utils';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.BOOT);
  }

  preload() {
    console.log('I dont think this scene is important in my game concept');
  }

  create() {    
    this.scene.start(CST.scenes.PRELOAD);
  }
}