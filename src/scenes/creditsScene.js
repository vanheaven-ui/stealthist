import Phaser from 'phaser';
import CST from '../utils/utils';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super(CST.scenes.CREDITS);
  }

  create() {
    this.creditTitle = this.add.text(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 * 0.3,
      'CREDITS',
      { 
        font: '32px monoscope',
        fill: '#00ff00',
      },
    );
    this.creditTitle.setOrigin(0.5, 0.5);

    this.createdBy = this.add.text(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2,
      'Created By: Ezekiel Mworekwa',
      { 
        font: '24px garamond',
        fill: '#0000ff'
      },
    );
    this.createdBy.setOrigin(0.5, 0.5);

    this.poweredBy = this.add.text(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 * 1.70,
      'Powered By: Phaser 3',
      { 
        fontSize: '18px',
        fill: '#ffffff',
      },
    );

    this.tweens.add({
      targets: this.creditTitle,
      y: -300,
      duration: 2000,
      ease: 'linear',
      repeat: -1,
    });

    this.tweens.add({
      targets: this.createdBy,
      y: -300,
      duration: 2000,
      ease: 'linear',
      repeat: -1,
    });

    this.tweens.add({
      targets: this.poweredBy,
      y: -300,
      duration: 2000,
      ease: 'linear',
      repeat: -1,
    });

    this.input.on('pointerdown', () => {
      this.scene.start(CST.scenes.GUIDE1);
    });    
  }
}