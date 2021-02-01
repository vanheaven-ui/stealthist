const MyModule = (() => {
  const assetLoad = (scene) => {
    scene.load.image('background', 'assets/images/title_bg.jpg');

    scene.load.spritesheet('dude', 'assets/images/male.png', { frameWidth: 6, frameHeight: 6 });
    scene.load.image('tiles', 'assets/images/RPG Nature Tileset.png');
    scene.load.tilemapTiledJSON('map', 'assets/map/nature.json');
    
    scene.load.image('play', 'assets/images/play.png');
    scene.load.image('options', 'assets/images/options.png');
    scene.load.image('credits', 'assets/images/credits.png');
    scene.load.atlas('dude1', 'assets/images/dude1.png', 'assets/images/dude1_atlas.json');
    
    scene.load.image('chicken', 'assets/images/chicken.png');
    scene.load.image('ananas', 'assets/images/ananas.png');
    scene.load.image('apple', 'assets/images/apple.png');
    scene.load.image('banana', 'assets/images/banana.png');
    
    scene.load.image('proceed', 'assets/images/continue.png');
    scene.load.image('menu', 'assets/images/menu.png');
    scene.load.image('playScene', 'assets/images/play.png');
    
    scene.load.image('enable-music', 'assets/images/enableMusic.png');
    scene.load.image('disable-music', 'assets/images/disable.png');
    scene.load.image('enabled', 'assets/images/musicEnabled.png');
    scene.load.image('disabled', 'assets/images/musicDisabled.png');
    scene.load.audio('gameSound', 'assets/audio/game.mp3');
    
    scene.load.spritesheet('dude4', 'assets/sprites/ezekiel.png', { frameWidth: 60, frameHeight: 70 });
    scene.load.animation('dude_anim', 'assets/sprites/dude1_anim.json');
  }
  return { assetLoad }
})();

export default MyModule;