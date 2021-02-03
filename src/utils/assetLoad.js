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
    scene.load.audio('collect', 'assets/audio/collectitem.mp3');
    scene.load.audio('game-over', 'assets/audio/gameover.mp3');
    
    scene.load.spritesheet('dude4', 'assets/sprites/ezekiel.png', { frameWidth: 60, frameHeight: 70 });
    scene.load.animation('dude_anim', 'assets/sprites/dude1_anim.json');

    scene.load.image('options-title', 'assets/images/optionsTitle.png');
    scene.load.image('options-title1', 'assets/images/optionsTitle1.png');

    scene.load.image('tiles1', 'assets/images/DungeonTileset.png');
    scene.load.tilemapTiledJSON('map1', 'assets/map/dungeon.json');

    scene.load.image('tiles3', 'assets/images/Dungeon_Tileset_at.png');
    scene.load.tilemapTiledJSON('map2', 'assets/map/dungeons.json');

    scene.load.image('gameoverTitle', 'assets/images/gameover.png');

    scene.load.image('restart', 'assets/images/restart.png');

    scene.load.image('quit', 'assets/images/quit.png');

    scene.load.image('best-score', 'assets/images/bestscore.png');

    scene.load.image('welldone', 'assets/images/welldone.png');

    scene.load.image('player-score', 'assets/images/timescore.png');

    scene.load.image('treasure', 'assets/images/treasure.png');

    scene.load.image('player', 'assets/images/player.png');

    scene.load.image('play-again', 'assets/images/play-again.png');

    scene.load.image('yourtime', 'assets/images/yourtime.png');
  }
  return { assetLoad }
})();

export default MyModule;