import Phaser from 'phaser';
import BootScene from '../scenes/bootScene';
import CreditsScene from '../scenes/creditsScene';
import GameScene from '../scenes/gameScene';
import StealthScene from '../scenes/gameScene1';
import GuideOne from '../scenes/guide1';
import GuideTwo from '../scenes/guide2';
import OptionsScene from '../scenes/optionsScene';
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
    OptionsScene,
    CreditsScene,
    GuideOne,
    GameScene,
    GuideTwo,
    StealthScene,
  ],
  audio: {
    disableWebAudio: true
  },
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
  scale: {
    autocenter: Phaser.Scale.CENTER_BOTH,
  }
}

export default config;