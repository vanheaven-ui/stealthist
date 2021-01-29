import Phaser from 'phaser';
import BootScene from '../scenes/bootScene';
import CreditsScene from '../scenes/creditsScene';
import GameScene from '../scenes/gameScene';
import GuideOne from '../scenes/guide1';
import GuideTwo from '../scenes/guide2';
import PreloaderScene from '../scenes/preloaderScene';
import TitleScene from '../scenes/titleScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'steathist-wrap',
  scene: [
    BootScene,
    PreloaderScene,
    TitleScene,
    CreditsScene,
    GuideOne,
    GameScene,
    GuideTwo
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 0 }, 
    }
  },
  pixelArt: true,
  dom: {
    createContainer: true,
  },
}

export default config;