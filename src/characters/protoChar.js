import Phaser from 'phaser';

export default class ProtoChar extends Phaser.GameObjects.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data;
    super({
      scene: scene,
      x: x,
      y: y,
      texture: texture,
      frame: frame
    });

    
  }
}