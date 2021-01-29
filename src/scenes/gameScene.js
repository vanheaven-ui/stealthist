import Phaser from 'phaser';
import Player from '../characters/player';
import CST from '../utils/utils';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAME);
  }

  create() {
    
    // this.player = new Player({
    //   scene: this,
    //   x: 20,
    //   y: 20,
    //   texture: 'dude1',
    //   frame: 'down',
    // });

    this.player = this.physics.add.sprite(20, 20, 'dude1', 'down').setDepth(1);

    // this.add.existing(this.player).setDepth(1);

    // console.log(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);

    layer1.setCollisionByProperty({ collides: true });
    // this.matter.world.convertTilemapLayer(layer1);
  }

  update() {
    this.player.setVelocity(0);
    // this.player.movePlayer();
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
    }
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
    }

    else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
    }
    else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
    }
  }
}