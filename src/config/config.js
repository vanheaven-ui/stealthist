import Phaser from 'phaser';
import BootScene from '../scenes/bootScene';
import CreditsScene from '../scenes/creditsScene';
import PreloaderScene from '../scenes/preloaderScene';
import TitleScene from '../scenes/titleScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, PreloaderScene, TitleScene, CreditsScene],
  pixelArt: true,
  physics: 'arcade',
  arcade: {
    debug: true,
    gravity: { y: 0 },
  }
}