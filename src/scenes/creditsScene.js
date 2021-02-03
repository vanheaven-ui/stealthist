import Phaser from 'phaser';
import Menu from '../utils/menu';
import { CST } from '../utils/utils';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.CREDITS);
  }

  create() {
    this.creditTitle = this.add.text(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2,
      'CREDITS',
      { 
        font: '32px monoscope',
        fill: '#00ff00',
      },
    );
    this.creditTitle.setOrigin(0.5, 0.5);

    this.createdBy = this.add.text(
      CST.dimens(this).width / 2,
      CST.dimens(this).height,
      'Created By: Ezekiel Mworekwa',
      { 
        font: '24px garamond',
        fill: '#0000ff'
      },
    );
    this.createdBy.setOrigin(0.5, 0.5);

    this.poweredBy = this.add.text(
      CST.dimens(this).width / 2,
      CST.dimens(this).height * 1.50,
      'Powered By: Phaser 3',
      { 
        fontSize: '18px',
        fill: '#ffffff',
      },
    );
    this.poweredBy.setOrigin(0.5, 0.5);

    this.tweens.add({
      targets: this.creditTitle,
      y: -300,
      delay: 1000,
      duration: 3000,
      ease: 'linear',
      repeat: -1,
    });

    this.tweens.add({
      targets: this.createdBy,
      y: -300,
      delay: 1000,
      duration: 3000,
      ease: 'linear',
      repeat: -1,
    });

    this.tweens.add({
      targets: this.poweredBy,
      y: -300,
      delay: 1000,
      duration: 3000,
      ease: 'linear',
      repeat: -1,
    });
    Menu.createMenuBtn(this);
  }
}