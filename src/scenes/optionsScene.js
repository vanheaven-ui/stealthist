import Phaser from 'phaser';
import Menu from '../utils/menu';
import { CST } from '../utils/utils';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.OPTIONS);
  }

  create() {
    const gameSound = this.sound.add('gameSound', { loop: true, volume: 0.8 });
    this.sound.pauseOnBlur = false;

    this.add.image(CST.dimens(this).width / 2, 50, 'options-title');
    this.createMusicBtns();

    this.enable.on('pointerdown', () => {
      gameSound.play();
      this.enable.setVisible(false);
      this.disabled.setVisible(false);
      this.disable.setVisible(true);
      this.enabled.setVisible(true);
    });

    this.disable.on('pointerdown', () => {
      this.sound.stopAll();
      this.disable.setVisible(false);
      this.enabled.setVisible(false);
      this.enable.setVisible(true);
      this.disabled.setVisible(true);
    });
    Menu.createMenuBtn(this);
  }

  createMusicBtns() {
    this.enable = this.add.image(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 - 100,
      'enable-music',
    );

    this.disable = this.add.image(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 + 100,
      'disable-music',
    );

    this.enabled = this.add.image(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 - 100,
      'enabled',
    );

    this.disabled = this.add.image(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 + 100,
      'disabled',
    );

    const defaultState = [this.enable, this.disable];
    const changedState = [this.enabled, this.disabled];

    changedState.forEach(state => {
      state.setVisible(false);
    });

    defaultState.forEach(state => {
      state.setVisible(true);
    });

    defaultState.concat(changedState).forEach(state => {
      state.setInteractive();
    });
  }
}