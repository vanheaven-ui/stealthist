import Phaser from 'phaser';
import { CST } from '../utils/utils';
import MyModule from '../utils/assetLoad';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.PRELOAD);
  }

  preload() {
    MyModule.assetLoad(this);
    this.add.image(CST.dimens(this).width / 2, (CST.dimens(this).height / 2) - 2, 'logo');
    this.loadingBar = this.add.graphics();
    this.loadingBox = this.add.graphics();
    this.loadingBox.fillStyle(0x222222, 0.8);
    this.loadingBox.fillRect(230, 270, 300, 100);

    const loadingText = this.make.text({
      text: 'Loading...',
      x: CST.dimens(this).width / 2,
      y: (CST.dimens(this).height / 2) - 20,
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      text: '0%',
      x: CST.dimens(this).width / 2,
      y: (CST.dimens(this).height / 2) + 20,
      style: {
        font: '19px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      text: '',
      x: CST.dimens(this).width / 2,
      y: (CST.dimens(this).height / 2) * 1.2,
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', percent => {
      this.loadingBar.fillStyle('#ffffff66', 1);
      this.loadingBar.fillRect(250, 300, 300 * percent, 30);
      percentText.setText(`${parseInt(percent * 100, 10)}%`);
      this.loadingBox.fillStyle('#2121211a', 0.8);
    });

    this.load.on('fileprogress', file => {
      assetText.setText(`Loading Asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      this.loadingBar.destroy();
      this.loadingBox.destroy();
      [loadingText, assetText, percentText].forEach(text => {
        text.destroy();
      });
    });
  }

  create() {
    this.scene.start(CST.scenes.TITLE);
  }
}