import Phaser from 'phaser';
import { CST } from '../utils/utils';

export default class GuideOne extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GUIDE1);
  }

  create() {
    console.log('This is the guide scene');
  }

}