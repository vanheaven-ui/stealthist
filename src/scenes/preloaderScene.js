import Phaser from 'phaser';
import { CST } from '../utils/utils';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.PRELOAD);
  }

  preload() {
    this.load.image('logo', 'assets/images/logo1.png');
    this.load.image('background', 'assets/images/title_bg.jpg');

    this.loadingBar = this.add.graphics();
    this.loadingBox = this.add.graphics();
    this.loadingBox.fillStyle(0x222222, 0.8);
    this.loadingBox.fillRect(240, 270, 320, 50);

    let x = this.cameras.main.width;
    let y = this.cameras.main.height;

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
      console.log(percent);
      this.loadingBar.fillStyle(0xffffff, 1);
      this.loadingBar.fillRect(250, 280, 300 * percent, 30);
      percentText.setText(parseInt(percent * 100, 10) + '%');
    });

    this.load.on('fileprogress', file => {
      console.group(file.src);
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