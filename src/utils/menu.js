import { CST } from './utils';

export default class Menu {
  static createMenuBtn(scene) {
    scene.menuBtn = scene.add.image(
      CST.dimens(scene).width / 2 - 200,
      CST.dimens(scene).height * 0.9,
      'menu',
    );

    scene.menuBtn.setInteractive();

    scene.menuBtn.on('pointerdown', () => {
      scene.scene.start(CST.scenes.TITLE);
    });
  }
}
