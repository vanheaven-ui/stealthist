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
    GAME1: 'STEALTH',
    GAMEOVER: 'GAMEOVER',
    FAIL: 'FAIL',
    LEADER: 'LEADER',
  },
  dimens: (scene) => ({
    width: scene.game.renderer.width,
    height: scene.game.renderer.height,
  }),
  cameraDimens: (scene) => ({
    width: scene.cameras.main.width,
    height: scene.cameras.main.height,
  }),
  styles: {
    healthStyle: { fill: '#ff0000', font: '32px monospace' },
    nameStyle: { fill: '#111111', font: '18px monospace' },
    guideTitleStyle: {
      color: '#00ff00',
      'text-decoration': 'underline',
      'text-align': 'center',
    },
    guideTextStyle: {
      color: '#ffffff',
      'line-spacing': '3px',
      font: '15px monospace',
      border: '2px solid #fff',
      'border-radius': '10px',
      padding: '10px',
    },
  },
  state: {
    forageFail: false,
    stealthFail: false,
    StealthTimeFail: false,
  },
};

const sortArrayBySec = (array) => array.sort((a, b) => a.score.sec - b.score.sec);

const sortArrayByScore = (array) => {
  const sortedArray = array.sort((a, b) => a.score.min - b.score.min);
  const sortBySecArr = sortArrayBySec(sortedArray);
  sortBySecArr.sort((a, b) => a.score.min - b.score.min);
  return sortBySecArr;
};

export { CST, sortArrayByScore };