import Phaser from 'phaser';
import Player from '../characters/player';
import CST from '../utils/utils';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAME);
    this.HP = 15;
    this.score;
    this.HPTweenText;
  }

  create() {
    this.player = new Player(this, 20, 20, 'dude1', 'down').setDepth(1);

    this.player.cursors = this.input.keyboard.createCursorKeys();

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);

    this.HPTweenText = this.add.text(
      CST.dimens.width,
      CST.dimens.height, '',
      { font: '19px monoscope', fill: '#ff0000' }
    );

    this.score = this.add.text(150, 240, `${this.HP} %`, { fill: '#00ff00', font: '32px garamond' } );

    this.food = this.createChicken();
    console.log(this.food);

    layer1.setCollisionByExclusion([-1]);
    // this.physics.arcade.convertTilemapLayer(layer1);

    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;

    this.physics.add.overlap(this.player, this.food, this.improveHP, null, this);
  }

  createChicken() {
    let food = this.physics.add.group({
      key: 'chicken',
      repeat: 5,
      setXY: {
        x: 100,
        y: 60,
        stepX: Phaser.Math.Between(120, 200),
        stepY: Phaser.Math.Between(80, 100),
      }
    });

    food.children.iterate(child => {
      child.setScale(0.6);
    });
    return food; 
  }

  improveHP(player, chicken) {
    this.HPTweenText.setText('5+');
    setTimeout(() => this.HPTweenText.destroy(), 2000);

    this.cameras.main.shake(300);
    chicken.disableBody(true, true);

    this.HP += 5;

    this.score.setText(`${this.HP} %`);
  }

  update() {
    this.player.movePlayer();

    this.input.on('pointerdown', () => {
      this.scene.start(CST.scenes.GUIDE2);
    });
  }
}