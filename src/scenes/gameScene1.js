import Phaser from 'phaser';
import { CST } from '../utils/utils';
import Player from '../characters/player';
import Timer from '../utils/timer';

export default class StealthScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAME1);
    this.HP = JSON.parse(localStorage.getItem('healthPoints'));
    this.username = JSON.parse(localStorage.getItem('player'));
    this.min = 0;
    this.sec = 0;
    this.trapEnd = false;
    this.fail = false;
    this.pass = false;
  }

  create() {
    this.player = new Player(this, 20, 20, 'dude1', 'down').setDepth(1);

    this.player.cursors = this.input.keyboard.createCursorKeys();
    this.timer = new Timer(this, 0, this.timeText);

    this.overSound = this.sound.add('game-over', { volume: 1 });

    this.health = this.add.text(100, 5, `Health: ${this.HP}%`, { fill: '#00ff00', font: '32px roboto' }).setDepth(1);
    this.playername = this.add.text(20, 100, `Rock on! ${this.username}`, { fill: '#00ff00', font: '32px roboto' }).setDepth(1);
    this.timeText = this.add.text(20, 180, 'Time:', { fill: '#00ff00', font: '32px roboto' }).setDepth(1);
    this.trapped = this.add.text(20, 210, '', { fill: '#00ff00', font: '32px roboto' }).setDepth(1);
    this.winText = this.add.text(20, 500, '', { fill: '#00ff00', font: '32px roboto' }).setDepth(2);
    this.deadText = this.add.text(200, 200, '', { fill: '#ff0000', font: '24px monospace' });

    const map = this.make.tilemap({ key: 'map2' });
    const tileset = map.addTilesetImage('Dungeon_Tileset_at', 'tiles3', 32, 32, 0, 0);
    const layer1 = map.createLayer('rooms', tileset, 0, 0);
    const layer2 = map.createLayer('snareLayer', tileset, 0, 0);
    const layer3 = map.createLayer('lessHarmLayer', tileset, 0, 0);
    const layer4 = map.createLayer('treasureLayer', tileset, 0, 0);
    this.hittext = this.add.text(this.cameras.main.width / 2, 300, '', { fontSize: '22px' });

    const layers = [layer1, layer2, layer3, layer4];

    layers.forEach(layer => layer.setCollisionByProperty({ collides: true }));

    this.physics.add.collider(this.player, layer1, () => this.hittext.setText('true'), null, this);
    this.physics.add.collider(this.player, layer2, this.trapFall, null, this);
    this.physics.add.collider(this.player, layer3, this.healthDent, null, this);
    this.physics.add.collider(this.player, layer4, this.endByTreasure, null, this);

    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
  }

  /* eslint-disable */
  trapFall(player, trap) {
    this.trapEnd = true;
    this.trapped.setVisible(true);
    this.trapped.setText('Trapped!!');
    this.physics.pause();

    setTimeout(() => {
      this.player.disableBody(true, true);
      this.trapped.setVisible(false);
      this.scene.start(CST.scenes.FAIL);
    }, 1000);
  }

  healthDent(player, obstacle) {
    this.hittext.setVisible(true);
    this.deadText.setVisible(true);
    this.hittext.setText('health -5');
    setTimeout(() => this.hittext.setVisible(false), 1000);
    this.HP -= 5;
    this.health.setText(`Health: ${this.HP}%`);
    if (this.HP === 0) {
      this.fail = true;
      setTimeout(() => {
        this.deadText.setVisible(true);
        this.scene.start(CST.scenes.FAIL);
      }, 1000);
    }
  }

  endByTreasure(player, treasure) {
    this.pass = true;
    this.physics.pause();
    this.winText.setVisible(true);
    this.winText.setText('💪Yay! You made it');

    setTimeout(() => {
      this.winText.setVisible(false);
      this.scene.start(CST.scenes.GAMEOVER);
    }, 1000);
  }

  /* eslint-enable */

  update() {
    this.player.movePlayer();

    this.timeText.setText(`Time: ${this.timer.printTime(this.min, this.sec)}`);
    this.sec += 1;
    if (!this.pass) {
      if (this.sec === 59) {
        this.sec = 0;
        this.min += 1;
        this.timeText.setText(`Time: ${this.timer.printTime(this.min, this.sec)}`);
      }
    } else {
      this.overSound.play();
      localStorage.setItem('time', JSON.stringify({ min: `${this.min}`, sec: `${this.sec}` }));
    }
  }

  static trackFailState() {
    if (this.trapEnd) {
      CST.state.stealthFail = true;
    }

    if (this.fail) {
      CST.state.StealthTimeFail = true;
    }
  }
}