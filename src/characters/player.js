import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {

  constructor (scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    //  You can either do this:
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setScale(1.5);
    this.setVelocity(0);
    this.setCollideWorldBounds(true);
    this.setVelocity(0);
  }  
}