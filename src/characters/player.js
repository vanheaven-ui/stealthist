import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data
    super(scene, x, y, texture, frame);

    this.setScale(1.5);
  }
}