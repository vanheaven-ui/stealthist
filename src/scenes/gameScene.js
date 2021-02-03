import Phaser from 'phaser';
import Player from '../characters/player';
import Timer from '../utils/timer';
import { CST } from '../utils/utils';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAME);
    this.HP = 15;
    this.health;
    this.HPTweenText;
    this.hitText;
    this.username;
    this.timerText;
    this.seconds = 59;
    this.minutes = 9;
    this.fail = false;
    this.pass = false;
    this.failText;
  }

  create() {
    this.username = JSON.parse(localStorage.getItem('player'));

    this.player = new Player(this, 20, 20, 'dude1', 'down').setDepth(1);

    this.player.cursors = this.input.keyboard.createCursorKeys();

    this.collectSound = this.sound.add('collect', { volume: 1 });

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('RPG Nature Tileset', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);

    this.timer = new Timer(this, 600, this.timerText);
    
    this.hitText = this.add.text(200, 100, '', { font: '28px roboto' });
    this.timerText = this.add.text(550, 0, 'counter', CST.styles.nameStyle);

    this.failText = this.add.text(45, 300, '', { font: '19px monospace' } );

    [layer1, layer2].forEach(layer => layer.setCollisionByProperty({ collides: true }));

    this.physics.add.collider(this.player, layer1, this.hitObstacle, null, this);
    this.physics.add.collider(this.player, layer2, this.hitObstacle, null, this);

    this.HPTweenText = this.add.text(180, 35, '', { font: '19px monoscope', fill: '#00ff00' });
    
    this.health = this.add.text(100, 0, `Health: ${this.HP}%`, CST.styles.healthStyle);

    this.playername = this.add.text(320, 0, `Howdy! ${this.username}`, CST.styles.nameStyle);

    this.food = this.createChicken();
    
    this.createOtherFoods();

    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;

    this.physics.add.overlap(this.player, this.food, this.improveHP, null, this);
    this.physics.add.overlap(this.player, this.otherFoods, this.improveHP, null, this);
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

  createOtherFoods() {
    this.otherFoods = this.physics.add.group();
    for (let i = 0; i < 5; i += 1) {
      this.otherFoods.create(
        Phaser.Math.Between(100, 750),
        Phaser.Math.Between(150, 550), 
        'banana',
      );

      this.otherFoods.create(
        Phaser.Math.Between(100, 500),
        Phaser.Math.Between(150, 500), 
        'ananas',
      );
    }
    return this.otherFoods;
  }

  improveHP(player, ...foods) {
    this.collectSound.play();
    this.HPTweenText.setText('10+');
    this.HPTweenText.setVisible(true);
    setTimeout(() => this.HPTweenText.setVisible(false), 1000);

    foods.forEach(food => {
      food.disableBody(true, true);
    });
    this.HP += 10;
    this.health.setText(`Health: ${this.HP}%`);
    this.endByHp(this.HP);
  }

  endByHp(hp) {
    if (hp >= 100) {
      this.pass = true;
    }
  }

  endByTimer(min, sec) {
    if (min === 0 && sec === 0) {
      this.fail = true;
    }
  }

  hitObstacle(player, ...obstacles) {
    this.cameras.main.shake(100);
    this.hitText.setVisible(true);
    this.hitText.setText('Obstacle there, find your way');
    
    setTimeout(() => this.hitText.setVisible(false), 2000);
    
  }

  update() {
    if (this.seconds > 0) {
      this.seconds -= 1;
      this.timerText.setText(`Countdown👉  ${this.timer.printTime(this.minutes, this.seconds)}`);
      if (this.seconds === 0 && this.minutes > 0) {
        this.seconds = 59;
        this.minutes -= 1;
        this.timerText.setText(`Countdown👉  ${this.timer.printTime(this.minutes, this.seconds)}`);
      }
      this.endByTimer(this.minutes, this.seconds);
    }

    this.player.movePlayer();

    if (this.pass) {
      localStorage.setItem('healthPoints', JSON.stringify(this.HP));
      this.scene.start(CST.scenes.GUIDE2);
    }

    if (this.fail) {
      this.failText.setText('😜Looks like the clock beat you to it.. Better Luck again!');
      this.physics.pause();
      setTimeout(() => {
        this.failText.setVisible(false);
        this.scene.start(CST.scenes.FAIL);
      }, 3000);
    }
  }
}