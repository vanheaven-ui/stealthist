import Phaser from 'phaser';
import Player from '../characters/player';
import CST from '../utils/utils';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAME);
  }

  create() {
    this.player = new Player(this, 20, 20, 'dude1', 'down').setDepth(1);

    this.player.cursors = this.input.keyboard.createCursorKeys();

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);

    layer1.setCollisionByProperty({ collides: true });
    // this.physics.arcade.convertTilemapLayer(layer1);

    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
  }

  update() {
    this.player.movePlayer();
    this.input.on('pointerdown', () => {
      this.scene.start(CST.scenes.GUIDE2);
    });
  }
}