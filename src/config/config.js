import Phaser from 'phaser';
import BootScene from '../scenes/bootScene';
import PreloaderScene from '../scenes/preloaderScene';
import TitleScene from '../scenes/titleScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, PreloaderScene, TitleScene],
  pixelArt: true,
  physics: 'arcade',
  arcade: {
    debug: true,
    gravity: { y: 0 },
  }
}