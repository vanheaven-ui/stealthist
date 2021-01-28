import Phaser from 'phaser';
import Player from '../characters/player';
import { CST } from '../utils/utils';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAME);
  }

  create() {
    console.log('This is the Game Scene');
    this.player = new Player({
      scene: this,
      x: 20,
      y: 20,
      texture: 'dude1',
      frame: 'down',
    });

    this.add.existing(this.player);
  }

  update() {
    
  }
}