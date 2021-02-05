import BootScene from '../src/scenes/bootScene';
import CreditsScene from '../src/scenes/creditsScene';
import FailScene from '../src/scenes/failScene';
import GameOver from '../src/scenes/gameOver';
import GameScene from '../src/scenes/gameScene';
import StealthScene from '../src/scenes/gameScene1';
import GuideOne from '../src/scenes/guide1';
import GuideTwo from '../src/scenes/guide2';
import Leaderboard from '../src/scenes/leaderboardScene';
import OptionsScene from '../src/scenes/optionsScene';
import PreloaderScene from '../src/scenes/preloaderScene';
import TitleScene from '../src/scenes/titleScene';
import 'jest-canvas-mock';

let scenes = [
  BootScene,
  CreditsScene,
  FailScene,
  GameOver,
  GameScene,
  StealthScene,
  GuideOne,
  GuideTwo,
  Leaderboard,
  OptionsScene,
  PreloaderScene,
  TitleScene,
];

scenes.forEach(scene => {
  test('Scenes are defined', () => {
    new scene();
    expect(scene).toBeDefined();
  });
});