import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {

  constructor (scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(1.5);
    this.setVelocity(0);
    this.setCollideWorldBounds(true);
    this.setVelocity(0);
  }
  
  movePlayer() {
    this.setVelocity(0);
    
    if (this.cursors.left.isDown) {
      this.setVelocityX(-160);
    }
    else if (this.cursors.right.isDown) {
      this.setVelocityX(160);
    }

    if (this.cursors.up.isDown) {
      this.setVelocityY(-160);
    }
    else if (this.cursors.down.isDown) {
      this.setVelocityY(160);
    }
  }
}