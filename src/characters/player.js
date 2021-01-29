import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(data) {
    let { scene, x, y, texture, frame } = data
    super(scene, x, y, texture, frame);
    this.scene.add.existing(this);

    this.setScale(1.5);
  }

  movePlayer() {
    const speed = 2.5;
    let playerVelocity = new Phaser.Math.Vector2();
    if (this.cursors.left.isDown) {
      playerVelocity.x = -1;
    } 
    else if (this.cursors.right.isDown) {
      playerVelocity.x = 1;
    }

    if (this.cursors.up.isDown) {
      playerVelocity.y = -1;
    } 
    else if (this.cursors.down.isDown) {
      playerVelocity.y = 1;
    }

    playerVelocity.normalize();

    playerVelocity.scale(speed);

    this.setVelocity(playerVelocity.x, playerVelocity.y);
  }
}