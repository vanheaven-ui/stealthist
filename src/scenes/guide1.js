import Phaser from 'phaser';
import Menu from '../utils/menu';
import { CST } from '../utils/utils';

export default class GuideOne extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GUIDE1);
    this.titleText = 'FORAGE SCENE INSTRUCTIONS';
    this.guideText = `You were camping with your girlfriend in a public park, and a local gang attacked you, 
                      kidnapped your girlfriend, and left you in bad health as you tried to ward them off. 
                      Now you have to forage through the bushes and replenish your energy. 
                      
                      Disclaimer: You are not out for revenge but rather to evade obstacles and 
                      get your girlfriend. /* Don’t expect any bloodshed */.

                      The challenge beforehand is to beat the countdown timer to improve the character 
                      health to atleast 100%
                      
                      You have to move the player through the park to collect enough food to replenish 
                      your health so that you can search for your kidnapped girlfriend.
                      
                      To move the player, use the keyboard arrows accordingly.

                        1. To move up, use the up keyboard key
                        2. To move down, use the down keyboard key
                        3. To move left, use the left keyboard key
                        4. To move right, use the right keyboard key`
  }

  create() {
    const title = this.add.dom(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 * 0.20,
      'h1',
      CST.styles.guideTitleStyle,
      this.titleText
    );

    const guide = this.add.dom(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2,
      'p',
      CST.styles.guideTextStyle,
      this.guideText,
    );

    this.add.dom(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2 * 1.70,
      'input',
      { 
        fill: '#111',
        font: '19px monoscope',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '10px',
        padding: '0, 5px',
      },
    );

    this.domInputRef = document.querySelector('input');
    this.domInputRef.setAttribute('placeholder', 'Enter your name and click Let\'s Go..');

    this.tweens.add({
        targets: title,
        y: -50,
        duration: 3000,
        ease: 'Sine.easeInOut',
        loop: -1,
        yoyo: true
    });

    this.tweens.add({
      targets: guide,
      y: 200,
      duration: 3000,
      ease: 'Sine.easeInOut',
      loop: -1,
      yoyo: true
    });

    Menu.createMenuBtn(this);

    this.proceedBtn = this.add.image(
      CST.dimens(this).width / 2 + 200,
      CST.dimens(this).height * 0.9,
      'proceed'
    );
    this.proceedBtn.setInteractive();
    
    this.proceedBtn.on('pointerdown', () => {
      if (this.domInputRef.value === '') {
        localStorage.setItem('player', JSON.stringify('Anonymous'));
      }
      else {
        localStorage.setItem('player', JSON.stringify(this.domInputRef.value));
      }
      this.scene.start(CST.scenes.GAME);     
    });
  }
}