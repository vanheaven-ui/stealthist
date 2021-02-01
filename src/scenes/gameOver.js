import Phaser from 'phaser';
import Menu from '../utils/menu';
import CST from '../utils/utils';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GAMEOVER);
  }

  create() {
    Menu.createMenuBtn();
  }
}