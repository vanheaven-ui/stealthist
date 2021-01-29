import Phaser from 'phaser';
import CST from '../utils/utils';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.PRELOAD);
  }

  preload() {
    this.add.image(CST.dimens(this).width / 2, CST.dimens(this).height / 2, 'logo');
    this.load.image('background', 'assets/images/title_bg.jpg');

    this.load.spritesheet('dude', 'assets/images/male.png', { frameWidth: 32, frameHeight: 32 });

    this.load.image('tiles', 'assets/images/RPG Nature Tileset.png');
    this.load.tilemapTiledJSON('map', 'assets/map/nature.json');

    this.load.image('play', 'assets/images/play_button.png');
    this.load.image('options', 'assets/images/options_button.png');
    this.load.atlas('dude1', 'assets/images/dude1.png', 'assets/images/dude1_atlas.json');

    this.load.image('food', 'assets/images/crops.png');

    this.loadingBar = this.add.graphics();
    this.loadingBox = this.add.graphics();
    this.loadingBox.fillStyle(0x222222, 0.8);
    this.loadingBox.fillRect(240, 270, 320, 50);

    let loadingText = this.make.text({
      text: 'Loading...',
      x: CST.cameraDimens(this).width / 2,
      y: CST.cameraDimens(this).height / 2 - 50,
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      text: '0%',
      x: CST.cameraDimens(this).width / 2,
      y: CST.cameraDimens(this).height / 2 - 5,
      style: {
        font: '19px monospace',
        fill: '#ffffff'
      }      
    });
    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({
      text: '',
      x: CST.cameraDimens(this).width / 2,
      y: CST.cameraDimens(this).height / 2 + 50,
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', percent => {
      this.loadingBar.fillStyle(0xffffff, 1);
      this.loadingBar.fillRect(250, 280, 300 * percent, 30);
      percentText.setText(parseInt(percent * 100, 10) + '%');
    });

    this.load.on('fileprogress', file => {
      assetText.setText('Loading Asset: ' + file.key);
    });

    this.load.on('complete', () => {
      this.loadingBar.destroy();
      this.loadingBox.destroy();
      [loadingText, assetText, percentText].forEach(text => {
        text.destroy();
      })
    });
  }

  create () {
    this.scene.start(CST.scenes.TITLE);
  }
}