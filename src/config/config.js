import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from "phaser-matter-collision-plugin/src";
import BootScene from '../scenes/bootScene';
import CreditsScene from '../scenes/creditsScene';
import GameScene from '../scenes/gameScene';
import GuideOne from '../scenes/guide1';
import PreloaderScene from '../scenes/preloaderScene';
import TitleScene from '../scenes/titleScene';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    BootScene,
    PreloaderScene,
    TitleScene,
    CreditsScene,
    GuideOne,
    GameScene,
  ],
  parent: 'steathist-wrap',
  pixelArt: true,
  physics: 'matter',
  matter: {
    debug: true,
    gravity: { y: 0 },
  },
  dom: {
    createContainer: true,
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin, // The plugin class
        key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
        mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
      }
    ]
  }
}