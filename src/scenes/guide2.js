import Phaser from 'phaser';
import Menu from '../utils/menu';
import { CST } from '../utils/utils';

export default class GuideTwo extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GUIDE2);
    this.titleText = 'STEALTH SCENE INSTRUCTIONS';
    this.guideText = `Welldone on getting your health in order, brace your self for the stealth scene 
                      where there are obstacles that can dent your health. In the stealth scene, 
                      you will move the character through a bungeon and collect your treasure chest 
                      girlfiend.

                      Disclaimer: You are not out for revenge but rather to evade obstacles and 
                      get your girlfriend. /* Don’t expect any bloodshed */.
                      
                      You have to move the player through the dungeon while avoiding obstacles that 
                      can reduce your health
                      to death.
                      You should look out for trap disguised as go-down ladder that will end the game 
                      when collided with. 

                      To move the player, use the keyboard arrows accordingly as below.

                        1. To move up, use the up keyboard key
                        2. To move down, use the down keyboard key
                        3. To move left, use the left keyboard key
                        4. To move right, use the right keyboard key`;
  }

  create() {
    this.add.image(320, 300, 'congs').setAngle(-15);

    const title = this.add.dom(
      CST.dimens(this).width / 2,
      (CST.dimens(this).height / 2) * 0.20,
      'h1',
      CST.styles.guideTitleStyle,
      this.titleText,
    );

    const guide = this.add.dom(
      CST.dimens(this).width / 2,
      CST.dimens(this).height / 2,
      'p',
      CST.styles.guideTextStyle,
      this.guideText,
    );

    // guide.setAngle(-15);

    this.tweens.add({
      targets: title,
      y: -50,
      duration: 3000,
      ease: 'Sine.easeInOut',
      loop: -1,
      yoyo: true,
    });

    this.tweens.add({
      targets: guide,
      y: 200,
      duration: 3000,
      ease: 'Sine.easeInOut',
      loop: -1,
      yoyo: true,
    });

    this.proceedBtn = this.add.image(
      CST.dimens(this).width / 2 + 200,
      CST.dimens(this).height * 0.9,
      'playScene',
    );

    Menu.createMenuBtn(this);

    this.proceedBtn.setInteractive();

    this.proceedBtn.on('pointerdown', () => {
      this.scene.start(CST.scenes.GAME1);
    });
  }
}