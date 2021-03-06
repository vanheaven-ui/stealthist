import Phaser from 'phaser';
import BootScene from '../scenes/bootScene';
import CreditsScene from '../scenes/creditsScene';
import FailScene from '../scenes/failScene';
import GameOver from '../scenes/gameOver';
import GameScene from '../scenes/gameScene';
import StealthScene from '../scenes/gameScene1';
import GuideOne from '../scenes/guide1';
import GuideTwo from '../scenes/guide2';
import Leaderboard from '../scenes/leaderboardScene';
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
    GameOver,
    FailScene,
    Leaderboard,
  ],
  audio: {
    disableWebAudio: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  pixelArt: true,
  dom: {
    createContainer: true,
  },
};

export default config;