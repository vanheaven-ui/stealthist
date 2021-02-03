import Phaser from 'phaser';
import Menu from '../utils/menu';
import { CST } from '../utils/utils';

export default class GuideTwo extends Phaser.Scene {
  constructor() {
    super(CST.scenes.GUIDE2);
  }

  create() {
    this.titleText = 'STEALTH SCENE INSTRUCTIONS';
    this.guideText = `You were camping with your girlfriend, and a local gang attacked you, 
                      kidnapped your girlfriend, and left you in bad health as you tried to ward them off. 
                      Now you have to forage through the bushes and replenish your energy. 
                      Once you have good health, you have to make it through obstacles in the evade scene 
                      to get your girlfriend back. In the evade scene, you will be able to 
                      collect coins with different fiscal values to increase your wallet points. 
                      Wallet points will help you to upgrade your appearance and gradually 
                      make you immune to obstacles that could otherwise have hurt you.

                      Disclaimer: You are not out for revenge but rather to evade obstacles and 
                      get your girlfriend. /* Don’t expect any bloodshed */.
                      
                      You have to move the player through the woods to collect enough food to replenish 
                      your health so that you can search for your kidnapped girlfriend.
                      
                      To move the player, use the keyboard arrows accordingly. 
                        1. To move up, you use the up keyboard key
                        2. To move down, you use the down keyboard key
                        3. To move left, you use the left keyboard key
                        4. To move right, you use the right keyboard key`

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

    // guide.setAngle(-15);

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