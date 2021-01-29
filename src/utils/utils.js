const CST = {
  scenes: {
    BOOT: 'BOOT',
    PRELOAD: 'PRELOAD',
    TITLE: 'TITLE',
    GAME: 'GAME',
    GUIDE1: 'Scene1Guide',
    GUIDE2: 'Scene2Guide',
    OPTIONS: 'OPTIONS',
    CREDITS: 'CREDITS',
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

    },
    guideTitleStyle: {
      'color': '#00ff00',
      'text-decoration': 'underline',
      'text-align': 'center',

    },
    guideTextStyle: {
      'color': '#ffffff',
      'line-spacing': '3px',
      'text-align': 'center',
      'font': '15px monospace',
      'border': '2px solid #fff',
      'border-radius': '10px',
      'padding': '10px',
      'text-align': 'justify',
    }
  }
}

export default CST;