export const CST = {
  scenes: {
    BOOT: 'BOOT',
    PRELOAD: 'PRELOAD',
    TITLE: 'TITLE',
    GAME: 'GAME',
  },
  dimens: (scene) => {
    return {
      width: scene.game.renderer.width,
      height: scene.game.renderer.height
    }
  },
  cameraDimens: (scene) => {
    return {
      width: scene.cameras.main.width,
      height: scene.cameras.main.height, 
    }
  },
  styles: {
    style1: {

    },
    style2: {

    },
    style3: {

    }
  }
}