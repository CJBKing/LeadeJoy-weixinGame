import Phaser from './libs/phaser-wx.js';
var Parser = require('./libs/dom-parser.js')
import 'globals'
window.musicPlayer = null;
window.MusicPlayer = null;
/* Phaser v2.8.3 - http://phaser.io - @photonstorm - (c) 2016 Photon Storm Ltd. */
//# sourceMappingURL=phaser.map
var GameTexts = function() {
  this.gameTextsParsed = null;
  this.xml = null;
  this.gameTextsLists = [];
};
GameTexts.prototype = {
  preload: function() {
    console.log("GameTexts.prototypeGameTexts.prototype");
    game.load.text("gameTexts", "assets/lang.xml");
  },
  create: function() {
   var xml = game.cache.getText("gameTexts");
    var parser = new Parser.DOMParser;
    this.gameTextsParsed = parser.parseFromString(xml, "text/xml");
    this.loadTexts();
  },
  loadTexts: function() {
    var document = this.gameTextsParsed.getElementsByTagName("string");
    for (var i = 0; i < document.length; i++) {
      if (this.gameTextsLists[document.item(i).getAttribute("id")] == null) {
        this.gameTextsLists[document.item(i).getAttribute("id")] = [];
      }
      if (document.item(i).getElementsByTagName(LANGUAGES[GAME_LANGUAGE]).length > 0) {
        this.gameTextsLists[document.item(i).getAttribute("id")][GAME_LANGUAGE] = document.item(i).getElementsByTagName(LANGUAGES[GAME_LANGUAGE])[0].textContent.replace(/\\n/g, "\n");
      }
    }
  },
  textFromID: function(textID) {
    if (this.gameTextsLists[textID] == undefined || this.gameTextsLists[textID][GAME_LANGUAGE] == undefined) {
      return "";
    } else {
      return this.gameTextsLists[textID][GAME_LANGUAGE];
    }
  },
  textFromID_upper: function(textID) {
    return this.textFromID(textID).toUpperCase();
  },
  updateTextToWidth: function(textObj, fontSize, maxWidth) {
    textObj.fontSize = fontSize;
    while (textObj.width > maxWidth) {
      fontSize--;
      textObj.fontSize = fontSize;
    }
  },
  updateTextToHeight: function(textObj, fontSize, maxHeight) {
    textObj.fontSize = fontSize;
    while (textObj.height > maxHeight) {
      fontSize--;
      textObj.fontSize = fontSize;
    }
  }
};
var TEXT_COLOR_YELLOW = "#eee197";
var TEXT_COLOR_WHITE = "#FFFFFF";
var LANGUAGE_EN = 0;
var LANGUAGE_DE = 1;
var LANGUAGE_FR = 2;
var LANGUAGE_ES = 3;
var LANGUAGE_IT = 4;
var LANGUAGE_PT = 5;
var LANGUAGES = ["en", "de", "fr", "es", "it", "pt"];
var GAME_LANGUAGE = LANGUAGE_EN;
var systemLang = "";
var TEXT_LEVEL = "LEVEL";
var TEXT_SCORE = "SCORE";
var TEXT_BEST = "BEST";
var TEXT_TAP_TO_CONTINUE = 26;
var TEXT_INSTRUCTIONS = "INSTRUCTIONS_TEXT";
var TEXT_GOAL = "GOAL";
var TEXT_GET = "GET";
var TEXT_BRING = "BRING";
var TEXT_CATCH = "CATCH";
var TEXT_POINTS = "POINTS";
var TEXT_GOAL_BLOCK = "GOAL_BLOCK";
var TEXT_PEARLS = "PEARLS";
var TEXT_ESC = "ESC";
var TEXT_PAUSE = "PAUSE";
var SOUNDS_ENABLED = true;
var RUNNING_ON_WP = navigator.userAgent.indexOf("Windows Phone") > -1;
if (RUNNING_ON_WP) {
  SOUNDS_ENABLED = false;
}
Phaser.Device._initialize();
var RUNNING_ON_DESKTOP = Phaser.Device.desktop;
var RUNNING_ON_IOS = false;
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
  RUNNING_ON_IOS = true;
}
var MUSIC_MENU = 0;
var MUSIC_GAME = 1;
var GAME_VERSION = "1.0.2";
var GAME_NAME = "JEWEL AQUARIUM";
var APP_STATES = {
  MENU: 0,
  GAME_START: 1,
  GAME_RUNNING: 2,
  GAME_PAUSED: 3,
  GAME_OVER: 4
};
var GAME_STATES = {
  GAME_OFF: 10,
  GAME_WAITING_FOR_INPUT: 13,
  SWITCH_BALLOONS: 15,
  CHECK_COMBINATION: 16,
  REMOVE_BALLOONS: 17,
  DROPDOWN_BALLOONS: 18,
  ADD_NEW_BALLOONS: 19,
  SIDE_SLIDE: 20,
  NO_MORE_MOVES: 21,
  MOVE_FLUSKS_UP: 22,
  GENERATE_FLASK: 23,
  HAPPY_MOMENT: 24,
  GAME_OVER: 50
};
var CHARACTER_TIME_MOVEMENT_PER_GAMETILE = 140;

function getDictKeyAccordingToValue(dict, value) {
  return Object.keys(dict).filter(function(key) {
    return dict[key] === value;
  })[0];
}
var GAME_TILE_OFFSET = 3;
var GAME_TILE_WIDTH = 0;
var GAME_TILE_HEIGHT = 0;
var GAME_TILE_EMPTY = -1;
var GAMEPLAY_BOARD_BOUNDRIES = {
  xMin: 0,
  xMax: 0,
  yMin: 0,
  yMax: 0
};
var GAME_BALLOONS_COLORS_COUNT = 7;
var GAME_BALLOON_COLOR_RED = 0;
var GAME_BALLOON_COLOR_PINK = 1;
var GAME_BALLOON_COLOR_YELLOW = 2;
var GAME_BALLOON_COLOR_ORANGE = 3;
var GAME_BALLOON_COLOR_PURPLE = 4;
var GAME_BALLOON_COLOR_BLUE = 5;
var GAME_BALLOON_COLOR_GREEN = 6;
var GAME_BALLOON_TYPE_CLASSIC = 0;
var GAME_BALLOON_TYPE_BOMB = 1;
var GAME_BALLOON_TYPE_BOMBCROSS = 2;
var GAME_BALLOON_TYPE_SPECTRUM = 3;
var GAME_BALLOON_TYPE_FLASK = 4;
var GAME_BALLOON_TYPE_PEARL = 5;
var BALLOON_SCORE_FONT_COLOR = ["#992226", "#BA4490", "#DABF2F", "#E38436", "#762D92", "#5CB396", "#58733C"];
var GAME_BALLOON_COLLOR_LETTER = ["R", "P", "Y", "O", "p", "B", "G"];
var BALLOONS_SWAP_MOUSE_MOVE_OFFSET = 10;
var GAME_BG_COLOR = "#2e87b3";
var GAME_TYPE_MOVES = 0;
var GAME_TYPE_TIME = 1;
var GAME_TYPE_BLOCKS = 2;
var GAME_TYPE_FLASKS = 3;
var GAME_TYPE_PEARLS = 4;
var GAME_MAX_ROWS = 8;
var GAME_MAX_COLS = 8;
var GAME_OVER_WIN = 1;
var GAME_OVER_LOSE = 2;
var GAME_OVER_BY_USER = 3;
var gameModesSettings = {
  "moveMode": ["spr_level_type_ico", 0],
  "timeMode": ["spr_level_type_ico"],
  "blocksMode": ["spr_level_type_ico", 3],
  "escapeMode": ["spr_level_type_ico", 1],
  "fallMode": ["spr_level_type_ico", 2]
};
var SCORE_SYSTEM = {
  _iScoreJewel: 80,
  _iScoreBlock: 1E3,
  _iScoreEscape: 3E3,
  _iScoreDownFall: 8E3,
  _iScoreHappyMmnt: 3E3,
  _iScoreBomb: 720,
  _iScoreBombCross: 1350,
  _iScoreBombsCombination: 2100
};
var MESSAGE_TYPE = {
  NO_MORE_MOVES: "msg_noMoreMoves",
  HAPPY_MOMENT: "msg_happy"
};
var anim_movement_multiply = 40;
var ANIMS = {
  select: function(sprite) {
    return {
      scale: {
        x: [1.25, .9, 1.15, 1],
        y: [.85, 1.1, .95, 1]
      },
      position: {
        y: [sprite.y + .1 * anim_movement_multiply, sprite.y - .1 * anim_movement_multiply, sprite.y, sprite.y],
        x: [sprite.x]
      },
      time: 500
    };
  },
  touchdown: function(sprite) {
    return {
      scale: {
        x: [1.25, .9, 1.15, 1],
        y: [.85, 1.1, .95, 1]
      },
      position: {
        y: [sprite.y + .1 * anim_movement_multiply, sprite.y - .1 * anim_movement_multiply, sprite.y, sprite.y],
        x: [sprite.x]
      },
      time: 770
    };
  },
  hint: function(sprite) {
    return {
      scale: {
        x: [1.3, .7, 1.8, 1, 1.05, .95, 1],
        y: [.7, 1.3, .8, 1, .95, 1.05, 1]
      },
      position: {
        y: [sprite.y + .4 * anim_movement_multiply, sprite.y + .15 * anim_movement_multiply, sprite.y - .45 * anim_movement_multiply, sprite.y, sprite.y + .05 * anim_movement_multiply, sprite.y - .03 * anim_movement_multiply, sprite.y],
        x: [sprite.x]
      },
      time: 1100,
      delay: 350
    };
  }
};
var LEVELS_COUNT = 60;
var LEVEL_LOCKED = -1;
var LEVEL_UNLOCKED = 0;

function getRandomUInt(num) {
  return Math.floor(Math.random() * num);
}

function getRandomInt(num) {
  return Math.floor(Math.random() * num) * (getRandomUInt(100) > 50 ? -1 : 1);
}

function getRandomUIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntInRange(min, max) {
  return getRandomUIntInRange(min, max) * (getRandomUInt(100) > 50) ? -1 : 1;
}

function getRandomValueFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getRandomIdxFromList(list) {
  return getRandomUIntInRange(0, list.length - 1);
}

function logToConsole() {}
Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};

function getCorrectAnchorX(obj, anchX) {
  return Math.round(obj.width * anchX) / obj.width;
}

function getCorrectAnchorY(obj, anchY) {
  return Math.round(obj.height * anchY) / obj.height;
}

function setObjectAnchor(obj, anchX, anchY) {
  if (anchX != null) {
    obj.anchor.x = getCorrectAnchorX(obj, anchX);
  }
  if (anchY != null) {
    obj.anchor.y = getCorrectAnchorY(obj, anchY);
  }
}

function average(values) {
  var sum = 0;
  for (var i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return Math.floor(sum / values.length);
};
(function(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments);
  }, i[r].l = 1 * new Date;
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  if(m)
    m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "_gaTrack");
_gaTrack("create", "UA-57743254-47", "auto");
_gaTrack("send", "pageview");
var partnerName = "leadjoy";

function analyticsOnGameStartEvent() {
  _gaTrack("send", "event", "basic", "started", partnerName, 1);
}

function analyticsOnGameLoadEvent() {
  _gaTrack("send", "event", "basic", "loaded", partnerName, 1);
}

function analyticsOnLevelStartEvent(level) {
  _gaTrack("send", "event", "basic", "level_started:" + level, partnerName, 1);
};

function showDiv(div, always) {
  if (always == null) {
    always = false;
  }
  if (!game.device.desktop || always) {
    document.getElementById(div).style.display = "block";
  }
}

function hideDiv(div, always) {
  if (always == null) {
    always = false;
  }
  if (!game.device.desktop || always) {
    document.getElementById(div).style.display = "none";
  }
};
var IMAGE_FOLDER = "assets/img/";

function loadSplash() {
  game.load.image("inlogic_logo", IMAGE_FOLDER + "IMG_logoINL.png");
  game.load.image("bgImg", IMAGE_FOLDER + "IMG_background.png");
  game.load.image("gameSplash", IMAGE_FOLDER + "splash.png");
}

function loadImages() {
  var images_load = [
    ["gameCharSpectrum", "game/IMG_bombsSpectrum.png"],
    ["gameCharPearl", "game/IMG_pearl.png"],
    ["gmTileImg", "ui/IMG_policko.png"],
    ["topBar1", "ui/IMG_topbar.png"],
    ["topBar2", "ui/IMG_topbar2.png"],
    ["topBar3", "ui/IMG_topbar3.png"],
    ["dialWin", "ui/IMG_dialogwindow.png"],
    ["game_logo", "gameLogo.png"],
    ["shockWv", "effects/expl_ShockWave.png"],
    ["explCross", "effects/expl_ciara.png"],
    ["rotGlw", "effects/IMG_RotatingGlow.png"],
    ["blockParticle1", "effects/break_blocks_part1.png"],
    ["blockParticle2", "effects/break_blocks_part2.png"],
    ["blockParticle3", "effects/break_blocks_part3.png"],
    ["imgBblSmall", "effects/IMG_bubbleMala.png"],
    ["eff_spect", "effects/SprEffectSpectrumSplash.png"],
    ["msg_happy", "messg/IMG_happyMoment.png"],
    ["msg_noMoreMoves", "messg/IMG_noMoreMoves.png"],
    ["bblbtn", "ui/IMG_bubble.png"],
    ["playbtn", "ui/IMG_playpolicko.png"],
    ["playbtnMale", "ui/IMG_level.png"],
    ["kladka", "ui/IMG_locklevel.png"],
    ["timeBlue", "ui/IMG_timeprazdny.png"],
    ["timeYell",
      "ui/IMG_timeplny.png"
    ]
  ];
  for (var i = 0; i < images_load.length; i++) {
    game.load.image(images_load[i][0], IMAGE_FOLDER + images_load[i][1]);
  }
  var spritesheet_load = [
    ["gameCharactersImg", "game/SPR_characters.png", 67, 60],
    ["gameCharBomb", "game/SPR_bombsAround.png", 62, 60],
    ["gameCharBombCross", "game/SPR_bombsCross.png", 61, 60],
    ["flasksSpawnWhirpool", "game/SPR_whirpool.png", 70, 70],
    ["gameCharFlasks", "game/SPR_flacons.png", 64, 60],
    ["ui_buttons", "ui/SPR_icons.png", 32, 22],
    ["ui_buttons2", "ui/SPR_icons2.png", 54, 41],
    ["blockImg", "ui/SPR_blocks.png", 73, 73],
    ["starBig", "ui/SPR_stars.png", 103, 95],
    ["starSmall", "ui/SPR_levelstars.png",
      27, 24
    ],
    ["starTopBar", "ui/SPR_topbarstars.png", 40, 37],
    ["spr_btn", "ui/SPR_buttons.png", 195, 152],
    ["spr_level_type_ico", "ui/SPR_topbar1.png", 23, 24],
    ["spr_btn_sipka_refr", "ui/SPR_buttonArrowRefresh.png", 80, 58],
    ["spr_levelIcons", "ui/SPR_dialog1.png", 58, 50]
  ];
  for (var i = 0; i < spritesheet_load.length; i++) {
    game.load.spritesheet(spritesheet_load[i][0], IMAGE_FOLDER + spritesheet_load[i][1], spritesheet_load[i][2], spritesheet_load[i][3]);
  }
}

function loadLevels() {
  game.load.json("levelsData", "assets/levels.json");
}

function loadSounds() {
  if (!SOUNDS_ENABLED) {
    return;
  }
  //game.load.audio("musicMenu", ["assets/music/menuMusic.ogg", "assets/music/menuMusic.mp3"]);
  //game.load.audio("musicGame", ["assets/music/gameMusic.ogg", "assets/music/gameMusic.mp3"]);
  for (var i = 0; i < soundsList.length; i++) {
    // game.load.audio(soundsList[i].soundID, ["assets/sounds/" + soundsList[i].fileName + ".ogg", "assets/sounds/" + soundsList[i].fileName + ".mp3"]);
  }
}
var soundsList = [{
  soundID: "clck",
  fileName: "Click"
}, {
  soundID: "happymmnt",
  fileName: "happy_moment",
  vol: 2
}, {
  soundID: "sndSwp",
  fileName: "geff/swap",
  vol: 2
}, {
  soundID: "sndSwpB",
  fileName: "geff/swap_back",
  vol: 2
}, {
  soundID: "sndStar1",
  fileName: "geff/Star1",
  vol: 2
}, {
  soundID: "sndStar2",
  fileName: "geff/Star2",
  vol: 2
}, {
  soundID: "sndStar3",
  fileName: "geff/Star3",
  vol: 2
}, {
  soundID: "spectFlame",
  fileName: "geff/spectrumFlame1",
  vol: 2
}, {
  soundID: "sndBombCreate",
  fileName: "bombs/bombExplosion2",
  vol: 2
}, {
  soundID: "sndExpl1",
  fileName: "jeweldestroy/Match1"
}, {
  soundID: "sndExpl2",
  fileName: "jeweldestroy/Match2"
}, {
  soundID: "sndExpl3",
  fileName: "jeweldestroy/Match3"
}, {
  soundID: "sndExpl4",
  fileName: "jeweldestroy/Match4"
}, {
  soundID: "sndExpl5",
  fileName: "jeweldestroy/Match5"
}, {
  soundID: "sndWin",
  fileName: "Victory1"
}, {
  soundID: "sndLose",
  fileName: "Fail"
}];
var gameTexts = new GameTexts;
var Splash = function() {};
Splash.prototype = {
  preload: function() {
    game.load.crossOrigin = "Anonymous";
    game.stage.backgroundColor = GAME_BG_COLOR;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    if (!game.device.desktop) {
      window.addEventListener("resize", function() {
        checkOrientation();
      });
    }
    this.scale.refresh();
    loadSplash();
    gameTexts.preload();
    if (game.device.desktop) {
      game.input.mspointer.capture = false;
    }
    setCorrectResolution();
  },
  create: function() {
    var grp = game.add.group();
    var logoImg = "inlogic_logo";
    var logo = this.add.sprite(game.width / 2, game.height / 2, logoImg);
    setObjectAnchor(logo, .5, .5);
    grp.addChild(logo);
    grp.alpha = 0;
    game.add.tween(grp).to({
      alpha: 1
    }, 750, Phaser.Easing.Linear.None, true, 0, 0, false);
    loadLanguageSettings();
    gameTexts.create();
    checkOrientation();
    this.startPreloadDelayed(Phaser.Timer.SECOND * 2);
  },
  startPreloadDelayed: function(time) {
    game.time.events.add(time, this.startPreload, this);
  },
  startPreload: function() {
    if (!game.device.desktop) {
      if (checkOrientation() === false) {
        this.startPreloadDelayed(Phaser.Timer.SECOND);
        return;
      }
    }
    analyticsOnGameStartEvent();
    setCorrectResolution();
    game.state.start("StatePreload");
  }
};

function enterIncorrectOrientation() {
  game.onPause.dispatch();
}

function leaveIncorrectOrientation() {
  game.onResume.dispatch();
}

function checkOrientation() {
  var correctOrientation = true;
  if (RUNNING_ON_IOS) {
    if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
      enterIncorrectOrientation();
      correctOrientation = false;
    } else {
      leaveIncorrectOrientation();
    }
  } else {
    if (window.innerWidth > window.innerHeight) {
      enterIncorrectOrientation();
      correctOrientation = false;
    } else {
      leaveIncorrectOrientation();
    }
  }
  return correctOrientation;
}

function setCorrectResolution() {
  var aspect = window.innerHeight / window.innerWidth;
  resolutionY = Math.floor(resolutionX * aspect);
  if (resolutionY > resolutionY_max) {
    resolutionY = resolutionY_max;
  }
  if (resolutionY < resolutionY_min) {
    resolutionY = resolutionY_min;
  }
  game.scale.setGameSize(resolutionX, resolutionY);
  game.scale.refresh();
};
var Preloader = function() {};
Preloader.prototype = {
  preload: function() {
    game.stage.backgroundColor = GAME_BG_COLOR;
    loadAllGameData();
    this.createPreloadBG();
    this.preloadGroup.alpha = 0;
    game.add.tween(this.preloadGroup).to({
      alpha: 1
    }, 350, Phaser.Easing.Linear.None, true, 0, 0, false);
    game.load.setPreloadSprite(this.preloadGroup.loadingSlider);
    loadImages();
    if (SOUNDS_ENABLED) {
      loadSounds();
    }
    loadLevels();
    game.load.onFileComplete.add(this.fileComplete, this);
  },
  fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {},
  create: function() {
    this._create();
  },
  _create: function() {
    this.showContinueText();
    game.input.onDown.addOnce(function() {
      this.hidePreloadScr();
      game.time.events.add(200, function() {
        this.startGame();
      }, this);
    }, this);
  },
  startGame: function() {
    game.state.start("StateGame");
  },
  createPreloadBG: function() {
    this.preloadGroup = game.add.group();
    var bcgImg = game.add.sprite(game.width / 2, game.height / 2, "gameSplash");
    setObjectAnchor(bcgImg, .5, .5);
    this.preloadGroup.addChild(bcgImg);
    if (resolutionY < 700) {
      bcgImg.y += 30;
    }
    var loadingSliderBg = game.make.sprite(0, game.height - 70, this.createLoadingIndicatorBG(200, 30, "#FFFFFF", 4));
    loadingSliderBg.x = (game.width - loadingSliderBg.width) / 2;
    setObjectAnchor(loadingSliderBg, 0, .5);
    this.preloadGroup.loadingSliderBG = this.preloadGroup.addChild(loadingSliderBg);
    var loadingSlider = game.make.sprite(4, 0, this.createLoadingIndicatorFRONT(192, 30, [255, 255, 255]));
    setObjectAnchor(loadingSlider, 0, .5);
    this.preloadGroup.loadingSlider = loadingSliderBg.addChild(loadingSlider);
    var taptc = game.make.text(Math.floor(game.width / 2), loadingSliderBg.y, gameTexts.textFromID_upper(TEXT_TAP_TO_CONTINUE), {
      font: "30px gameFont",
      fill: "#fff"
    });
    setObjectAnchor(taptc, .5, .5);
    this.preloadGroup.tapToContText = this.preloadGroup.addChild(taptc);
    taptc.alpha = 0;
    taptc.makeBigTw = game.add.tween(taptc.scale).to({
      x: 1.05,
      y: 1.05
    }, 150, Phaser.Easing.Linear.None, true, 700);
    taptc.makeSmallTw = game.add.tween(taptc.scale).to({
      x: 1,
      y: 1
    }, 150, Phaser.Easing.Linear.None, false, 0);
    taptc.makeBigTw.onComplete.add(function() {
      taptc.makeSmallTw.start();
    }, this);
    taptc.makeSmallTw.onComplete.add(function() {
      taptc.makeBigTw.start();
    }, this);
  },
  showContinueText: function() {
    game.add.tween(this.preloadGroup.loadingSliderBG).to({
      alpha: 0
    }, 250, Phaser.Easing.Linear.None, true, 0);
    game.add.tween(this.preloadGroup.tapToContText).to({
      alpha: 1
    }, 250, Phaser.Easing.Linear.None, true, 0);
  },
  hidePreloadScr: function() {
    game.add.tween(this.preloadGroup).to({
      alpha: 0
    }, 150, Phaser.Easing.Linear.None, true, 0);
  },
  createLoadingIndicatorBG: function(width, height, color, lineWidth) {
    var indiBMD = game.add.bitmapData(width, height);
    indiBMD.line(0, lineWidth / 2, width, lineWidth / 2, color, lineWidth);
    indiBMD.line(0, height - lineWidth / 2, width, height - lineWidth / 2, color, lineWidth);
    indiBMD.line(lineWidth / 2, 0, lineWidth / 2, height, color, lineWidth);
    indiBMD.line(width - lineWidth / 2, 0, width - lineWidth / 2, height, color, lineWidth);
    return indiBMD;
  },
  createLoadingIndicatorFRONT: function(width, height, color) {
    var indiBMD = game.add.bitmapData(width, height);
    indiBMD.fill(color[0], color[1], color[2]);
    return indiBMD;
  }
};
var Buttons = function() {};
Buttons.prototype = {
  constructor: Buttons,
  create: function() {},
  createMenuButtonOneImage: function(x, y, btnKey, btnFrame, imageKeyDwn, callback, callbackContext) {
    var btn = game.add.button(x, y, btnKey);
    btn.isClickable = true;
    if (typeof btnFrame == "string") {
      btn.frameName = btnFrame;
    } else {
      btn.frame = btnFrame;
    }
    btn.onUpImgKey = btnKey;
    btn.onDownImgKey = imageKeyDwn;
    btn.clbck = callback;
    btn.clbckCtx = callbackContext || this;
    btn.events.onInputUp.add(this.btnInputUp, this);
    btn.events.onInputDown.add(this.btnInputDown, this);
    btn.events.onInputOver.add(this.btnInputOver, this);
    btn.events.onInputOut.add(this.btnInputOut, this);
    setObjectAnchor(btn, .5, .5);
    return btn;
  },
  createEmptyButton: function(x, y, callback, callbackContext) {
    var btn = game.add.button(x, y);
    btn.isClickable = true;
    btn.clbck = callback;
    btn.clbckCtx = callbackContext || this;
    btn.events.onInputUp.add(this.btnInputUp, this);
    btn.events.onInputDown.add(this.btnInputDown, this);
    btn.events.onInputOver.add(this.btnInputOver, this);
    btn.events.onInputOut.add(this.btnInputOut, this);
    setObjectAnchor(btn, .5, .5);
    return btn;
  },
  createBubbleButton: function(x, y, bblKey, icoKey, icoFrame, callback, callbackContext) {
    var btn = game.add.button(x, y);
    btn.anchor.set(.5);
    btn.isClickable = true;
    if (typeof icoFrame == "string") {
      btn.frameName = icoFrame;
    } else {
      btn.frame = icoFrame;
    }
    var bblImg = game.make.sprite(0, 0, bblKey);
    setObjectAnchor(bblImg, .5, .5);
    btn.bbl = btn.addChild(bblImg);
    var icoImg = game.make.sprite(0, 0, icoKey, icoFrame);
    setObjectAnchor(icoImg, .5, .5);
    btn.ico = btn.addChild(icoImg);
    btn.clbck = callback;
    btn.clbckCtx = callbackContext || this;
    btn.events.onInputUp.add(this.btnInputUp, this);
    btn.events.onInputDown.add(this.btnInputDown, this);
    btn.events.onInputOver.add(this.btnInputOver, this);
    btn.events.onInputOut.add(this.btnInputOut, this);
    btn.noScaleOnDown = true;
    btn.playAnims = false;
    btn.bblPulseTW = game.add.tween(btn.bbl.scale).to({
      x: [1.07, 1, .93, 1],
      y: [.93, 1, 1.07, 1]
    }, getRandomUIntInRange(1800, 2100), Phaser.Easing.Linear.None, false, 0, 0);
    btn.bblPulseTW.onComplete.add(function() {
      if (btn.playAnims === true) {
        btn.bblPulseTW.start();
      }
    });
    btn.ico.defY = 0;
    btn.moveIcoTW = game.add.tween(btn.ico).to({
      y: [btn.ico.defY - 2, btn.ico.defY, btn.ico.defY + 2, btn.ico.defY]
    }, getRandomUIntInRange(1500, 2E3), Phaser.Easing.Linear.None, false, 0, 0);
    btn.moveIcoTW.onComplete.add(function() {
      if (btn.playAnims === true) {
        btn.moveIcoTW.start();
      }
    });
    btn.resetAnims = function() {
      btn.scale.set(.8);
      btn.bbl.scale.set(1);
      btn.ico.y = btn.ico.defY;
    };
    btn.startAnims = function() {
      btn.playAnims = true;
      btn.bblPulseTW.start();
      btn.moveIcoTW.start();
    };
    btn.stopAnims = function() {
      btn.playAnims = false;
    };
    return btn;
  },
  createMenuButtonTwoImages: function(x, y, btnKey, btnFrame, imageKeyDwn, iconKey, iconFrame, iconScale, callback, callbackContext) {
    var btn = game.add.button(x, y, btnKey);
    btn.isClickable = true;
    if (typeof btnFrame == "string") {
      btn.frameName = btnFrame;
    } else {
      btn.frame = btnFrame;
    }
    var iconImg = game.make.sprite(0, 0, iconKey, iconFrame);
    setObjectAnchor(iconImg, .5, .5);
    if (iconScale !== null) {
      iconImg.scale.set(iconScale);
    }
    btn.icoImg = btn.addChild(iconImg);
    btn.onUpImgKey = btnKey;
    btn.onDownImgKey = imageKeyDwn;
    btn.clbck = callback;
    btn.clbckCtx = callbackContext || this;
    btn.events.onInputUp.add(this.btnInputUp, this);
    btn.events.onInputDown.add(this.btnInputDown, this);
    btn.events.onInputOver.add(this.btnInputOver, this);
    btn.events.onInputOut.add(this.btnInputOut, this);
    setObjectAnchor(btn, .5, .5);
    return btn;
  },
  createMenuButtonWithText: function(x, y, imageKey, imageKeyDwn, text, textID, callback, callbackContext) {
    var btn = game.add.button(x, y, imageKey);
    btn.isClickable = true;
    if (text != null) {
      var btnTxt = game.make.text(0, 0, text, STYLE_TEXT);
      btnTxt.anchor.set(.5);
      btn.addChild(btnTxt);
    }
    if (textID != null) {
      btn.textID = textID;
    }
    btn.updateText = function(text) {
      btnTxt.setText(text);
    };
    btn.updateTextAutomatic = function() {
      if (btn.textID != null) {
        btnTxt.setText(gameTexts.textFromID(btn.textID));
      }
    };
    btn.onUpImgKey = imageKey;
    btn.onDownImgKey = imageKeyDwn;
    btn.clbck = callback;
    btn.clbckCtx = callbackContext || this;
    btn.events.onInputUp.add(this.btnInputUp, this);
    btn.events.onInputDown.add(this.btnInputDown, this);
    btn.events.onInputOver.add(this.btnInputOver, this);
    btn.events.onInputOut.add(this.btnInputOut, this);
    setObjectAnchor(btn, .5, .5);
    return btn;
  },
  updateMenuButtonFrame: function(btn, frame) {
    if (typeof frame == "string") {
      btn.frameName = frame;
    } else {
      btn.frame = frame;
    }
    btn.cachedTint = null;
  },
  updateMenuButtonTexture: function(btn, frame) {
    btn.loadTexture(frame);
  },
  btnInputOver: function(btn) {
    if (!btn.isClickable) {
      return;
    }
    if (!game.input.pointer1.isDown) {
      btn.tint = 10078449;
      for (var c in btn.children) {
        btn.getChildAt(c).tint = 10078449;
      }
      if (btn.textChildIdx != null) {
        this.setFontColor(btn, true);
      }
    }
    btn.mouseOnBtn = true;
  },
  btnInputOut: function(btn) {
    if (!btn.isClickable) {
      return;
    }
    btn.tint = 16777215;
    for (var c in btn.children) {
      btn.getChildAt(c).tint = 16777215;
    }
    if (btn.textChildIdx != null) {
      this.setFontColor(btn, false);
    }
    btn.mouseOnBtn = false;
  },
  btnInputUp: function(btn) {
    if (!btn.isClickable) {
      return;
    }
    btn.tint = 16777215;
    for (var c in btn.children) {
      btn.getChildAt(c).tint = 16777215;
    }
    if (btn.textChildIdx != null) {
      this.setFontColor(btn, false);
    }
    if (btn.mouseOnBtn) {
      btn.mouseOnBtn = false;
      btn.clbck.call(btn.clbckCtx, btn);
    }
    if (btn.noScaleOnDown === undefined || btn.noScaleOnDown === false) {
      btn.scale.set(btn.maxScaleX || 1, btn.maxScaleY || 1);
    }
    btn.cachedTint = -1;
  },
  btnInputDown: function(btn) {
    if (!btn.isClickable) {
      return;
    }
    btn.tint = 10078449;
    for (var c in btn.children) {
      btn.getChildAt(c).tint = 10078449;
    }
    if (btn.textChildIdx != null) {
      this.setFontColor(btn, true);
    }
    if (btn.noScaleOnDown === undefined || btn.noScaleOnDown === false) {
      btn.scale.set(btn.maxScaleX * .95 || .95, btn.maxScaleY * .95 || .95);
    }
    btn.cachedTint = -1;
    btn.mouseOnBtn = true;
  },
  setFontColor: function(btn, newColor) {
    for (var i = 0; i < btn.textChildIdx.length; i++) {
      if (newColor) {
        btn.getChildAt(btn.textChildIdx[i]).fill = "#CC9E6A";
      } else {
        btn.getChildAt(btn.textChildIdx[i]).fill = btn.getChildAt(btn.textChildIdx[i]).originalFill;
      }
    }
  },
  createLangMenuBtn: function(langID, flagSpritesheetID, callback, callbackContext) {
    var bg = game.make.button(0, 0, "flags");
    bg.frame = flagSpritesheetID;
    bg.maxScaleX = .6;
    bg.maxScaleY = .6;
    bg.scale.set(.6);
    bg.isClickable = true;
    bg.anchor.set(.5);
    bg.langID = langID;
    bg.clbck = callback;
    bg.clbckCtx = callbackContext || this;
    bg.events.onInputUp.add(this.btnInputUp, this);
    bg.events.onInputDown.add(this.btnInputDown, this);
    bg.events.onInputOver.add(this.btnInputOver, this);
    bg.events.onInputOut.add(this.btnInputOut, this);
    return bg;
  }
};
var Anims = function() {};
Anims.prototype = {
  preload: function() {},
  create: function() {},
  getFreeExplosionSprite: function() {
    var spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.animsGroup.getFirstDead();
    if (spriteToReturn === null) {
      spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.animsGroup.create(0, 0, "shockWv");
      setObjectAnchor(spriteToReturn, .5, .5);
      spriteToReturn.resetPosition = function(clmn, rw) {
        var coord = gamePlay.recalc_getRealXYfrom2Dcoord(clmn, rw);
        spriteToReturn.reset(coord[0], coord[1]);
        spriteToReturn.setNewGridPos(clmn, rw);
      }.bind(this);
      spriteToReturn.setNewGridPos = function(clmn, rw) {
        spriteToReturn.COL = clmn;
        spriteToReturn.ROW = rw;
      }.bind(this);
    }
    spriteToReturn.tint = 16777215;
    game.tweens.removeFrom(spriteToReturn, true);
    return spriteToReturn;
  },
  playCharacterSelectAnim: function(row, col) {
    var spriteToReturn = this.getFreeExplosionSprite();
    spriteToReturn.resetPosition(col, row);
    spriteToReturn.alpha = 1;
    spriteToReturn.scale.set(.35);
    var spd = 600;
    var tw = game.add.tween(spriteToReturn).to({
      alpha: 0
    }, spd - 200, Phaser.Easing.Linear.None, true, 200);
    game.add.tween(spriteToReturn.scale).to({
      x: 0,
      y: 0
    }, spd, Phaser.Easing.Linear.None, true);
    tw.onComplete.addOnce(function(sprt, twn) {
      sprt.kill();
    });
  },
  playCharacterExplodeAnim: function(row, col) {
    var spriteToReturn = this.getFreeExplosionSprite();
    spriteToReturn.tint = 65535;
    spriteToReturn.resetPosition(col, row);
    spriteToReturn.alpha = 1;
    spriteToReturn.scale.set(.03);
    var tw = game.add.tween(spriteToReturn).to({
      alpha: 0
    }, 250, Phaser.Easing.Linear.None, true, 250);
    game.add.tween(spriteToReturn.scale).to({
      x: .38,
      y: .38
    }, 500, Phaser.Easing.Linear.None, true);
    tw.onComplete.addOnce(function(sprt, twn) {
      sprt.kill();
    });
  },
  playBombClassicAnim: function(row, col) {
    var duration = 200;
    var anim2delay = 100;
    var finalHideTwnDelay = 450;
    var finalScale = 1;
    for (var i = 0; i < 3; i++) {
      var spriteToReturn = this.getFreeExplosionSprite();
      spriteToReturn.tint = 65535;
      spriteToReturn.resetPosition(col, row);
      spriteToReturn.alpha = .9;
      spriteToReturn.scale.set(.05);
      game.add.tween(spriteToReturn.scale).to({
        x: finalScale,
        y: finalScale
      }, duration, Phaser.Easing.Linear.None, true, i * anim2delay);
      var tw = game.add.tween(spriteToReturn).to({
        alpha: 0
      }, 400, Phaser.Easing.Linear.None, true, finalHideTwnDelay);
      tw.onComplete.addOnce(function(sprt, twn) {
        sprt.kill();
      }, this);
    }
  },
  getFreeCrossExplosionSprite: function() {
    var spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.crossAnimsGroup.getFirstDead();
    if (spriteToReturn === null) {
      spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.crossAnimsGroup.create(0, 0, "explCross");
      spriteToReturn.resetPosition = function(clmn, rw) {
        var coord = gamePlay.recalc_getRealXYfrom2Dcoord(clmn, rw);
        spriteToReturn.reset(coord[0], coord[1]);
        spriteToReturn.setNewGridPos(clmn, rw);
      }.bind(this);
      spriteToReturn.setNewGridPos = function(clmn, rw) {
        spriteToReturn.COL = clmn;
        spriteToReturn.ROW = rw;
      }.bind(this);
    }
    spriteToReturn.scale.set(0);
    game.tweens.removeFrom(spriteToReturn, true);
    return spriteToReturn;
  },
  playCrossAnim: function(row, col) {
    var time = 225;
    var spriteToReturn = this.getFreeCrossExplosionSprite();
    spriteToReturn.angle = 0;
    spriteToReturn.anchor.set(.5);
    spriteToReturn.resetPosition(col, row);
    game.add.tween(spriteToReturn.scale).to({
      x: [4, 0],
      y: [1.5, 0]
    }, time, Phaser.Easing.Linear.None, true);
    spriteToReturn.lifespan = time;
    var spriteToReturn = this.getFreeCrossExplosionSprite();
    spriteToReturn.angle = 90;
    spriteToReturn.anchor.set(.5);
    spriteToReturn.resetPosition(col, row);
    game.add.tween(spriteToReturn.scale).to({
      x: [4, 0],
      y: [1.5, 0]
    }, time, Phaser.Easing.Linear.None, true);
    spriteToReturn.lifespan = time;
  },
  playCrossAnim2: function(row, col) {
    var time = 225;
    var spriteToReturn = this.getFreeCrossExplosionSprite();
    spriteToReturn.angle = 0;
    spriteToReturn.anchor.set(.5);
    spriteToReturn.resetPosition(col, row);
    game.add.tween(spriteToReturn.scale).to({
      x: [5, 0],
      y: [4, 0]
    }, time, Phaser.Easing.Linear.None, true);
    spriteToReturn.lifespan = time;
    var spriteToReturn = this.getFreeCrossExplosionSprite();
    spriteToReturn.angle = 90;
    spriteToReturn.anchor.set(.5);
    spriteToReturn.resetPosition(col, row);
    game.add.tween(spriteToReturn.scale).to({
      x: [5, 0],
      y: [4, 0]
    }, time, Phaser.Easing.Linear.None, true);
    spriteToReturn.lifespan = time;
  },
  showScoreText: function(x, y, value, blnColor) {
    var scoreSpr = guiManager.gameScreenGroup.gameBoardGroup.scoreTextGroup.getFirstDead();
    if (scoreSpr === null) {
      scoreSpr = game.make.text(0, 3, "0", {
        font: "35px gameFont",
        fill: TEXT_COLOR_WHITE
      });
      guiManager.gameScreenGroup.gameBoardGroup.scoreTextGroup.addChild(scoreSpr);
    }
    scoreSpr.fill = BALLOON_SCORE_FONT_COLOR[blnColor];
    scoreSpr.setText(value);
    scoreSpr.anchor.set(.5);
    scoreSpr.scale.set(0);
    scoreSpr.reset(x, y);
    game.tweens.removeFrom(scoreSpr, true);
    var tw = game.add.tween(scoreSpr).to({
      y: scoreSpr.y - 50
    }, 1E3, function(k) {
      var s = 2;
      if ((k *= 2) < 1) {
        return .5 * (k * k * ((s + 1) * k - s));
      }
      return .5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }, true);
    game.add.tween(scoreSpr.scale).to({
      x: [1, 0],
      y: [1, 0]
    }, 1E3, Phaser.Easing.Linear.None, true);
    tw.onComplete.addOnce(function(sprt, twn) {
      sprt.kill();
    });
    return scoreSpr;
  },
  showMessage: function(msgType) {
    var msgSpr = guiManager.gameScreenGroup.msgGroup.getFirstDead();
    if (msgSpr === null) {
      msgSpr = guiManager.gameScreenGroup.msgGroup.create(0, 0, "msg_happy");
    }
    msgSpr.loadTexture(msgType);
    msgSpr.anchor.set(.5);
    msgSpr.scale.set(1);
    msgSpr.alpha = 1;
    msgSpr.reset(game.width / 2, game.height / 2);
    game.tweens.removeFrom(msgSpr, true);
    msgSpr.angle = 180;
    game.add.tween(msgSpr).to({
      angle: 0
    }, 1500, Phaser.Easing.Elastic.Out, true);
    var time = 1E3;
    if (msgType === MESSAGE_TYPE.NO_MORE_MOVES) {
      time = 1200;
    }
    var tw = game.add.tween(msgSpr).to({
      y: msgSpr.y - 200
    }, time, Phaser.Easing.Quadratic.In, true, 600);
    tw.onComplete.addOnce(function(sprt, twn) {
      sprt.kill();
    });
    var delay = 900;
    if (msgType === MESSAGE_TYPE.NO_MORE_MOVES) {
      delay = 1200;
    }
    game.add.tween(msgSpr).to({
      alpha: 0
    }, 400, Phaser.Easing.Linear.None, true, delay);
    return msgSpr;
  },
  getFreeSpectrumAnim: function() {
    var spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.spectrumAnimsGroup.getFirstDead();
    if (spriteToReturn === null) {
      spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.spectrumAnimsGroup.create(0, 0, "eff_spect");
      spriteToReturn.anchor.set(.5);
      spriteToReturn.resetPosition = function(x, y) {
        spriteToReturn.reset(x, y);
      }.bind(this);
    }
    spriteToReturn.scale.set(0);
    game.tweens.removeFrom(spriteToReturn, true);
    return spriteToReturn;
  },
  playHappyMomentAddAnim: function(x_from, y_from, x_to, y_to, clbck, clbckContext) {
    var time = 400;
    var spriteToReturn = this.getFreeSpectrumAnim();
    spriteToReturn.angle = 0;
    spriteToReturn.scale.set(.15);
    spriteToReturn.alpha = 1;
    spriteToReturn.resetPosition(x_from, y_from);
    spriteToReturn.rotation = -10;
    game.add.tween(spriteToReturn.scale).to({
      x: 1,
      y: 1
    }, time, Phaser.Easing.Linear.None, true);
    var tw = game.add.tween(spriteToReturn).to({
      x: x_to,
      y: y_to,
      rotation: 0
    }, time, Phaser.Easing.Linear.None, true);
    tw.onComplete.addOnce(function(sprt, twn) {
      sprt.kill();
    });
    tw.onComplete.addOnce(clbck, clbckContext);
  },
  playSpectrumAnim: function(x_from, y_from, x_to, y_to) {
    var time = 500;
    var spriteToReturn = this.getFreeSpectrumAnim();
    spriteToReturn.angle = 0;
    spriteToReturn.scale.set(.15);
    spriteToReturn.alpha = 1;
    spriteToReturn.resetPosition(x_from, y_from);
    game.add.tween(spriteToReturn.scale).to({
      x: .7 * guiManager.gameScreenGroup.gameBoardGroup.scale.x,
      y: .7 * guiManager.gameScreenGroup.gameBoardGroup.scale.x
    }, time / 2, Phaser.Easing.Linear.None, true);
    var tw = game.add.tween(spriteToReturn).to({
      x: x_to,
      y: y_to
    }, time, Phaser.Easing.Sinusoidal.Out, true);
    tw.onComplete.addOnce(function(sprt, twn) {
      sprt.kill();
    });
  }
};
var GUI = function() {
  this.backgroundGroup = null;
  this.mainMenuGroup = null;
  this.instructionsScreenGroup = null;
  this.aboutScreenGroup = null;
  this.levelSelectionGroup = null;
  this.tutorialScreenGroup = null;
  this.gameScreenGroup = null;
  this.pauseScreenGroup = null;
  this.gameOverScreenGroup = null;
  this.buttonsManager = null;
  this.activeScreen = [];
};
GUI.prototype = {
  preload: function() {},
  create: function() {
    this.buttonsManager = new Buttons;
    this.buttonsManager.create();
    this.createBitmaps();
    this.createGameScreen();
    this.createMainMenuScreen();
    this.createInstructionsScreen();
    this.createAboutScreen();
    this.createLevelSelectionScreen();
    this.createTutorialScreen();
    this.createGameOverScreen();
    this.createPauseScreen();
    this.initParticles();
    game.input.onDown.add(this.levelSelectionScreenClickDown, this);
    game.input.onUp.add(this.levelSelectionScreenClickUp, this);
    game.input.mouse.mouseWheelCallback = this.mouseWheelScrolled;
    game.input.mouse.callbackContext = this;
  },
  update: function() {
    this.gameScreenUpdate();
    this.levelSelectionScreenUpdate();
    this.gameOverScreenUpdate();
    this.updateScreenShake();
    this.updateParticles();
    this.updateBgBubbles();
  },
  mouseWheelScrolled: function(event) {
    if (this.levelSelectionGroup.visible === true) {
      if (game.input.mouse.wheelDelta === Phaser.Mouse.WHEEL_UP) {
        if (this.wheelScrolled > 0) {
          if (this.wheelScrolled < 50) {
            this.wheelScrolled += 7;
          }
        } else {
          this.wheelScrolled = 7;
        }
      } else {
        if (this.wheelScrolled < 0) {
          if (this.wheelScrolled > -50) {
            this.wheelScrolled -= 7;
          }
        } else {
          this.wheelScrolled = -7;
        }
      }
    }
  },
  screenSwitcher_openNewScreen: function(newScr) {
    while (this.activeScreen.length > 0) {
      var scr = this.activeScreen.pop();
      if (scr.grayOverlay != undefined && scr.grayOverlay.alpha > 0) {
        scr.grayOverlay.hideTW.start();
      }
      scr.closeScrFunc.call(this);
    }
    this.activeScreen.push(newScr);
    newScr.openScrFunc.call(this);
    if (newScr.grayOverlay != null) {
      newScr.grayOverlay.alpha = 0;
      newScr.grayOverlay.visible = false;
    }
  },
  screenSwitcher_openOverlayScreen: function(newScr) {
    var actScr = this.activeScreen[this.activeScreen.length - 1];
    this.setButtonsInput(actScr, false);
    if (actScr.grayOverlay == null) {
      actScr.grayOverlay = actScr.addChild(this.getGraySprite());
      actScr.grayOverlay.showTW.start();
      actScr.grayOverlay.anim = false;
    } else {
      actScr.grayOverlay.alpha = 0;
      actScr.grayOverlay.visible = true;
      actScr.grayOverlay.showTW.start();
    }
    this.activeScreen.push(newScr);
    newScr.openScrFunc.call(this);
  },
  screenSwitcher_switchOverlayScreen: function(newScr) {
    var overlayScreen = this.activeScreen.pop();
    overlayScreen.closeScrFunc.call(this, function() {
      this.closeOverlayScreenOver(overlayScreen);
    });
    this.activeScreen.push(newScr);
    newScr.openScrFunc.call(this);
    overlayScreen.upperScreenName = newScr.name;
  },
  screenSwitcher_closeOverlayScreen: function() {
    var overlayScreen = this.activeScreen.pop();
    overlayScreen.closeScrFunc.call(this, function() {
      this.closeOverlayScreenOver(overlayScreen);
    });
    var newScr = this.activeScreen[this.activeScreen.length - 1];
    newScr.grayOverlay.hideTW.start();
    overlayScreen.upperScreenName = newScr.name;
  },
  closeOverlayScreenOver: function(screen) {
    if (this.activeScreen[this.activeScreen.length - 1].name == screen.upperScreenName) {
      this.setButtonsInput(this.activeScreen[this.activeScreen.length - 1], true);
    }
  },
  screenSwitcher_refreshActiveScreenElements: function() {
    for (var i = 0; i < this.activeScreen.length; i++) {
      this.activeScreen[i].refreshScrFunc.call(this);
    }
  },
  getGraySprite: function() {
    if (game.cache.checkBitmapDataKey("grayBGg") == false) {
      var btmp = game.add.bitmapData(1, 1);
      btmp.fill(0, 0, 0, .65);
      game.cache.addBitmapData("grayBGg", btmp);
    }
    var spriteToReturn = game.make.sprite(0, 0, game.cache.getBitmapData("grayBGg"));
    spriteToReturn.width = game.width;
    spriteToReturn.height = game.height;
    spriteToReturn.alpha = 0;
    spriteToReturn.showTW = game.add.tween(spriteToReturn).to({
      alpha: 1
    }, 150, Phaser.Easing.Linear.None, false);
    spriteToReturn.hideTW = game.add.tween(spriteToReturn).to({
      alpha: 0
    }, 150, Phaser.Easing.Linear.None, false);
    spriteToReturn.hideTW.onComplete.add(function(spr) {
      if (spr.showTW.isRunning) {
        return;
      }
      spr.visible = false;
    }, this);
    spriteToReturn.isGraySprt = true;
    return spriteToReturn;
  },
  createBackground: function() {
    game.stage.backgroundColor = GAME_BG_COLOR;
    this.backgroundGroup = game.add.group();
    var bcgImg = game.add.sprite(0, 0, "bgImg");
    bcgImg.height = game.height;
    bcgImg.width = game.width;
    this.backgroundGroup.bgImg = this.backgroundGroup.add(bcgImg);
    var bgBubblesGrp = game.add.group();
    this.backgroundGroup.addChild(bgBubblesGrp);
    this.backgroundGroup.bgBubblesGrp = bgBubblesGrp;
    this.backgroundGroup.bgBubblesGrp.timeTillNext = 0;
  },
  createBgBubble: function(x, y) {
    var bble = this.backgroundGroup.bgBubblesGrp.getFirstDead();
    if (bble === null) {
      bble = this.backgroundGroup.bgBubblesGrp.create(0, 0, "imgBblSmall");
    }
    bble.scale.set(getRandomUIntInRange(20, 55) / 100);
    bble.alpha = getRandomUIntInRange(30, 60) / 100;
    bble.anchor.set(.5);
    bble.reset(x, y);
    bble.speed = .3 + Math.random() / 2;
    return bble;
  },
  updateBgBubbles: function() {
    this.backgroundGroup.bgBubblesGrp.timeTillNext -= game.time.physicsElapsed;
    if (this.backgroundGroup.bgBubblesGrp.timeTillNext <= 0) {
      var kolko = getRandomUIntInRange(1, 2);
      for (var i = 0; i < kolko; i++) {
        this.createBgBubble(getRandomUIntInRange(30, game.width - 30), game.height + 50);
      }
      this.backgroundGroup.bgBubblesGrp.timeTillNext = 1 + Math.floor(Math.random() * 2);
    }
    this.backgroundGroup.bgBubblesGrp.forEachAlive(function(bbl) {
      bbl.y -= bbl.speed;
      if (bbl.y + 30 < 0) {
        bbl.kill();
      }
    }, this);
  },
  createGameLogoGrp: function() {
    this.gameLogoGrp = game.add.group();
    this.gameLogoGrp.name = "gameLogoGoup";
    var menuTopSpr = game.add.sprite(game.width / 2, 0, "menu_top");
    setObjectAnchor(menuTopSpr, .5, 0);
    menuTopSpr.visibleY = 0;
    menuTopSpr.hiddenY = 0 - menuTopSpr.height;
    this.addShowTween(menuTopSpr, menuTopSpr, {
      y: menuTopSpr.visibleY
    }, 450, Phaser.Easing.Quadratic.Out, 0, null, null, this);
    this.addHideTween(menuTopSpr, menuTopSpr, {
      y: menuTopSpr.hiddenY
    }, 250, Phaser.Easing.Cubic.In, 0, null, this.hideGameLogoOver, this);
    this.gameLogoGrp.addChild(menuTopSpr);
    this.gameLogoGrp.gameLogoSpr = menuTopSpr;
    var menuFooterSpr = game.add.sprite(game.width / 2, game.height, "menu_bot");
    setObjectAnchor(menuFooterSpr, .5, 1);
    menuFooterSpr.visibleY = game.height;
    menuFooterSpr.hiddenY = game.height + menuFooterSpr.height;
    this.addShowTween(menuFooterSpr, menuFooterSpr, {
      y: menuFooterSpr.visibleY
    }, 450, Phaser.Easing.Quadratic.Out, 0, null, null, this);
    this.addHideTween(menuFooterSpr, menuFooterSpr, {
      y: menuFooterSpr.hiddenY
    }, 250, Phaser.Easing.Cubic.In, 0, null, this.hideGameLogoOver, this);
    this.gameLogoGrp.addChild(menuFooterSpr);
    this.gameLogoGrp.menuFooterSpr = menuFooterSpr;
    this.mainMenuVerticalCenterPosition = menuTopSpr.height + (game.height - menuTopSpr.height - menuFooterSpr.height) / 2;
    this.gameLogoGrp.openScrFunc = this.showGameLogo;
    this.gameLogoGrp.closeScrFunc = this.hideGameLogo;
    this.gameLogoGrp.closeScrOverFunc = this.hideGameLogoOver;
    this.gameLogoGrp.logoInit = true;
    this.gameLogoGrp.visible = false;
  },
  showGameLogo: function() {
    if (this.gameLogoGrp.visible == true) {
      return;
    }
    this.gameLogoGrp.gameLogoSpr.y = this.gameLogoGrp.gameLogoSpr.hiddenY;
    this.gameLogoGrp.menuFooterSpr.y = this.gameLogoGrp.menuFooterSpr.hiddenY;
    this.showScreenCustomTweens(this.gameLogoGrp);
  },
  hideGameLogo: function() {
    this.gameLogoGrp.gameLogoSpr.anim = true;
    this.hideScreenCustomTweens(this.gameLogoGrp);
  },
  hideGameLogoOver: function() {
    this.gameLogoGrp.visible = false;
  },
  createMainMenuScreen: function() {
    this.mainMenuGroup = game.add.group();
    this.mainMenuGroup.name = "mainMenu";
    var playButton = this.buttonsManager.createMenuButtonTwoImages(game.width / 2, game.height / 2, "playbtn", 0, null, "spr_btn", 0, null, this.mainMenuPlayButtonClicked, this);
    playButton.icoImg.x = 13;
    playButton.icoImg.y = 5;
    this.mainMenuGroup.playButton = this.mainMenuGroup.addChild(playButton);
    playButton.maxScaleX = .8;
    playButton.maxScaleY = .8;
    this.addShowTween(playButton, playButton.scale, {
      x: .8,
      y: .8
    }, 250, Phaser.Easing.Back.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.mainMenuGroup, this);
    }, this);
    this.addHideTween(playButton, playButton.scale, {
      x: 0,
      y: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.mainMenuGroup, this);
    }, this);
    var offset = (game.height / 2 - playButton.height / 2) * .6;
    var gmlogoParent = game.make.sprite(game.width / 2, offset);
    setObjectAnchor(gmlogoParent, .5, .5);
    var gmlogo = game.make.sprite(0, 0, "game_logo");
    setObjectAnchor(gmlogo, .5, .5);
    gmlogoParent.addChild(gmlogo);
    gmlogoParent.visibleY = offset;
    gmlogoParent.hiddenY = -100;
    gmlogoParent.moveTW = game.add.tween(gmlogo).to({
      y: [-2, 0, 2, 0]
    }, getRandomUIntInRange(1500, 2E3), Phaser.Easing.Linear.None, false, 0, 0);
    gmlogoParent.moveTW.onComplete.add(function() {
      if (gmlogoParent.playAnim === true) {
        gmlogoParent.moveTW.start();
      }
    });
    this.mainMenuGroup.gmlogoParent = this.mainMenuGroup.addChild(gmlogoParent);
    this.addShowTween(gmlogoParent, gmlogoParent, {
      y: gmlogoParent.visibleY
    }, 300, Phaser.Easing.Quadratic.Out, 0, false, null, null, this);
    this.addHideTween(gmlogoParent, gmlogoParent, {
      y: gmlogoParent.hiddenY
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.mainMenuGroup, this);
    }, this);
    var bottomBtns = [];
    this.mainMenuGroup.bottomBtns = bottomBtns;
    var btnInstr = this.buttonsManager.createBubbleButton(0, 0, "bblbtn", "ui_buttons2", 0, this.mainMenuScreenInstructionsClicked, this);
    btnInstr.hiddenY = game.height + 50;
    this.mainMenuGroup.btnInstr = this.mainMenuGroup.addChild(btnInstr);
    bottomBtns.push(btnInstr);
    if (SOUNDS_ENABLED) {
      var btnSnd = this.buttonsManager.createBubbleButton(0, 0, "bblbtn", "ui_buttons2", 2, this.mainMenuScreenSoundClicked, this);
      btnSnd.hiddenY = game.height + 50;
      this.mainMenuGroup.btnSnd = this.mainMenuGroup.addChild(btnSnd);
      bottomBtns.push(btnSnd);
    }
    var btnAbout = this.buttonsManager.createBubbleButton(0, 0, "bblbtn", "ui_buttons2", 1, this.mainMenuScreenAboutClicked, this);
    btnAbout.hiddenY = game.height + 50;
    this.mainMenuGroup.btnAbout = this.mainMenuGroup.addChild(btnAbout);
    bottomBtns.push(btnAbout);
    if (bottomBtns.length === 2) {
      bottomBtns[0].x = game.width / 2 - 50;
      bottomBtns[1].x = game.width / 2 + 50;
      bottomBtns[0].visibleY = game.height - offset;
      bottomBtns[1].visibleY = game.height - offset;
    } else {
      if (bottomBtns.length === 3) {
        bottomBtns[1].x = game.width / 2;
        bottomBtns[0].x = bottomBtns[1].x - 100;
        bottomBtns[2].x = bottomBtns[1].x + 100;
        bottomBtns[0].visibleY = game.height - offset;
        bottomBtns[1].visibleY = game.height - offset + 20;
        bottomBtns[2].visibleY = game.height - offset;
      } else {
        if (bottomBtns.length === 4) {
          bottomBtns[0].x = game.width / 2 - 150;
          bottomBtns[1].x = game.width / 2 - 50;
          bottomBtns[2].x = game.width / 2 + 50;
          bottomBtns[3].x = game.width / 2 + 150;
          bottomBtns[0].visibleY = game.height - offset;
          bottomBtns[1].visibleY = game.height - offset + 30;
          bottomBtns[2].visibleY = game.height - offset + 30;
          bottomBtns[3].visibleY = game.height - offset;
        }
      }
    }
    for (var l = 0; l < bottomBtns.length; l++) {
      this.addShowTween(bottomBtns[l], bottomBtns[l], {
        y: bottomBtns[l].visibleY
      }, getRandomUIntInRange(400, 700), Phaser.Easing.Back.Out, l * 150 + getRandomUIntInRange(50, 150), false, null);
      this.addHideTween(bottomBtns[l], bottomBtns[l], {
        y: bottomBtns[l].hiddenY
      }, 350, Phaser.Easing.Exponential.Out, getRandomUIntInRange(0, 75), null, function() {
        this.checkHideScreenOver(this.mainMenuGroup, this);
      }, this);
    }
    this.mainMenuGroup.openScrFunc = this.showMainMenuScreen;
    this.mainMenuGroup.openScrOverFunc = this.showMainMenuScreenOver;
    this.mainMenuGroup.closeScrFunc = this.hideMainMenuScreen;
    this.mainMenuGroup.closeScrOverFunc = this.hideMainMenuScreenOver;
    this.updateMainMenuScreenTexts();
    this.mainMenuGroup.visible = false;
  },
  mainMenuUpdate: function() {
    if (this.mainMenuGroup.visible !== true) {
      return;
    }
  },
  mainMenuPlayButtonClicked: function() {
    musicPlayer.playSound("clck");
    guiManager.screenSwitcher_openNewScreen(this.levelSelectionGroup);
  },
  mainMenuScreenInstructionsClicked: function() {
    musicPlayer.playSound("clck");
    this.screenSwitcher_openNewScreen(this.instructionsScreenGroup);
  },
  mainMenuScreenSoundClicked: function() {
    musicPlayer.playSound("clck");
    musicPlayer.toggleEnableDisableMusic();
    if (musicPlayer.soundON) {
      this.mainMenuGroup.btnSnd.ico.frame = 2;
    } else {
      this.mainMenuGroup.btnSnd.ico.frame = 3;
    }
  },
  mainMenuScreenAboutClicked: function() {
    musicPlayer.playSound("clck");
    this.screenSwitcher_openNewScreen(this.aboutScreenGroup);
  },
  showMainMenuScreen: function() {
    this.setButtonsInput(this.mainMenuGroup, false);
    this.mainMenuGroup.gmlogoParent.playAnim = true;
    this.mainMenuGroup.gmlogoParent.moveTW.start();
    this.mainMenuGroup.gmlogoParent.y = this.mainMenuGroup.gmlogoParent.hiddenY;
    this.mainMenuGroup.playButton.scale.set(0);
    for (var l = 0; l < this.mainMenuGroup.bottomBtns.length; l++) {
      this.mainMenuGroup.bottomBtns[l].y = this.mainMenuGroup.bottomBtns[l].hiddenY;
      this.mainMenuGroup.bottomBtns[l].resetAnims();
      this.mainMenuGroup.bottomBtns[l].startAnims();
    }
    if (SOUNDS_ENABLED) {
      if (musicPlayer.soundON) {
        this.mainMenuGroup.btnSnd.ico.frame = 2;
      } else {
        this.mainMenuGroup.btnSnd.ico.frame = 3;
      }
    }
    this.showScreenCustomTweens(this.mainMenuGroup);
  },
  showMainMenuScreenOver: function() {
    this.setButtonsInput(this.mainMenuGroup, true);
  },
  hideMainMenuScreen: function(hideOverClbck) {
    this.hideScreenCustomTweens(this.mainMenuGroup);
    this.setButtonsInput(this.mainMenuGroup, false);
    this.mainMenuGroup.hideOverClbck = hideOverClbck;
    for (var l = 0; l < this.mainMenuGroup.bottomBtns.length; l++) {
      this.mainMenuGroup.bottomBtns[l].stopAnims();
    }
    this.mainMenuGroup.gmlogoParent.playAnim = false;
  },
  hideMainMenuScreenOver: function() {
    this.mainMenuGroup.visible = false;
  },
  updateMainMenuScreenTexts: function() {},
  createInstructionsScreen: function() {
    this.instructionsScreenGroup = game.add.group();
    this.instructionsScreenGroup.name = "instructionsScreen";
    var backButton = this.buttonsManager.createBubbleButton(50, game.height - 50, "imgBblSmall", "ui_buttons", 1, this.instructionsScreenBackClicked, this);
    backButton.visibleY = game.height - 50;
    backButton.hiddenY = game.height + 50;
    this.instructionsScreenGroup.backButton = this.instructionsScreenGroup.addChild(backButton);
    this.addShowTween(backButton, backButton, {
      y: backButton.visibleY,
      alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.instructionsScreenGroup, this);
    }, this);
    this.addHideTween(backButton, backButton, {
      y: backButton.hiddenY,
      alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.instructionsScreenGroup, this);
    }, this);
    var instrText = game.make.text(game.width / 2, 100, gameTexts.textFromID(TEXT_INSTRUCTIONS), {
      font: "22px gameFont",
      fill: TEXT_COLOR_WHITE,
      wordWrap: true,
      wordWrapWidth: game.width * .7
    });
    instrText.lineSpacing = -5;
    gameTexts.updateTextToHeight(instrText, 35, game.height - 80 - 40);
    instrText.y = Math.floor((game.height - 70 - instrText.height) / 2);
    setObjectAnchor(instrText, .5, 0);
    this.instructionsScreenGroup.instrText = this.instructionsScreenGroup.addChild(instrText);
    this.addShowTween(instrText, instrText, {
      alpha: 1
    }, 250, Phaser.Easing.Linear.None, 0, true, null, function() {
      this.checkShowScreenOver(this.instructionsScreenGroup, this);
    }, this);
    this.addHideTween(instrText, instrText, {
      alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, null, function() {
      this.checkHideScreenOver(this.instructionsScreenGroup, this);
    }, this);
    this.instructionsScreenGroup.openScrFunc = this.showInstructionsScreen;
    this.instructionsScreenGroup.openScrOverFunc = this.showInstructionsScreenOver;
    this.instructionsScreenGroup.closeScrFunc = this.hideInstructionsScreen;
    this.instructionsScreenGroup.closeScrOverFunc = this.hideInstructionsScreenOver;
    this.instructionsScreenGroup.openedFromPause = false;
    this.updateInstructionsScreenTexts();
    this.instructionsScreenGroup.visible = false;
  },
  instructionsScreenUpdate: function() {
    if (this.instructionsScreenGroup.visible !== true) {
      return;
    }
  },
  instructionsScreenBackClicked: function() {
    musicPlayer.playSound("clck");
    if (this.instructionsScreenGroup.openedFromPause === true) {
      this.screenSwitcher_openNewScreen(this.pauseScreenGroup);
    } else {
      this.screenSwitcher_openNewScreen(this.mainMenuGroup);
    }
  },
  showInstructionsScreen: function() {
    this.setButtonsInput(this.instructionsScreenGroup, false);
    this.instructionsScreenGroup.backButton.alpha = 0;
    this.instructionsScreenGroup.backButton.y = this.instructionsScreenGroup.backButton.hiddenY;
    this.instructionsScreenGroup.backButton.resetAnims();
    this.instructionsScreenGroup.backButton.startAnims();
    this.instructionsScreenGroup.instrText.alpha = 0;
    this.showScreenCustomTweens(this.instructionsScreenGroup);
  },
  showInstructionsScreenOver: function() {
    this.setButtonsInput(this.instructionsScreenGroup, true);
  },
  hideInstructionsScreen: function(hideOverClbck) {
    this.hideScreenCustomTweens(this.instructionsScreenGroup);
    this.setButtonsInput(this.instructionsScreenGroup, false);
    this.instructionsScreenGroup.hideOverClbck = hideOverClbck;
    this.instructionsScreenGroup.backButton.stopAnims();
  },
  hideInstructionsScreenOver: function() {
    this.instructionsScreenGroup.visible = false;
    this.instructionsScreenGroup.openedFromPause = false;
  },
  updateInstructionsScreenTexts: function() {},
  createAboutScreen: function() {
    this.aboutScreenGroup = game.add.group();
    this.aboutScreenGroup.name = "aboutScreen";
    var backButton = this.buttonsManager.createBubbleButton(50, game.height - 50, "imgBblSmall", "ui_buttons", 1, this.aboutScreenBackClicked, this);
    backButton.visibleY = game.height - 50;
    backButton.hiddenY = game.height + 50;
    this.aboutScreenGroup.backButton = this.aboutScreenGroup.addChild(backButton);
    this.addShowTween(backButton, backButton, {
      y: backButton.visibleY,
      alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.aboutScreenGroup, this);
    }, this);
    this.addHideTween(backButton, backButton, {
      y: backButton.hiddenY,
      alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.aboutScreenGroup, this);
    }, this);
    var inlLogo = game.make.sprite(game.width / 2, 100, "inlogic_logo");
    inlLogo.scale.set(.7);
    setObjectAnchor(inlLogo, .5, 0);
    this.aboutScreenGroup.inlLogo = this.aboutScreenGroup.addChild(inlLogo);
    this.addShowTween(inlLogo, inlLogo, {
      alpha: 1
    }, 250, Phaser.Easing.Linear.None, 150, true, null, function() {
      this.checkShowScreenOver(this.aboutScreenGroup, this);
    }, this);
    this.addHideTween(inlLogo, inlLogo, {
      alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, null, function() {
      this.checkHideScreenOver(this.aboutScreenGroup, this);
    }, this);
    var inlGamesText = game.make.text(Math.floor(game.width / 2), 250, "Inlogic Games", {
      font: "35px gameFont",
      fill: TEXT_COLOR_WHITE
    });
    setObjectAnchor(inlGamesText, .5, 0);
    this.aboutScreenGroup.inlGamesText = this.aboutScreenGroup.addChild(inlGamesText);
    this.addShowTween(inlGamesText, inlGamesText, {
      alpha: 1
    }, 250, Phaser.Easing.Linear.None, 350, true, null, function() {
      this.checkShowScreenOver(this.aboutScreenGroup, this);
    }, this);
    this.addHideTween(inlGamesText, inlGamesText, {
      alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, null, function() {
      this.checkHideScreenOver(this.aboutScreenGroup, this);
    }, this);
    var gameNameText = game.make.text(Math.floor(game.width / 2), 300, GAME_NAME + "\nv." + GAME_VERSION, {
      font: "35px gameFont",
      fill: TEXT_COLOR_WHITE,
      align: "center"
    });
    setObjectAnchor(gameNameText, .5, 0);
    this.aboutScreenGroup.gameNameText = this.aboutScreenGroup.addChild(gameNameText);
    this.addShowTween(gameNameText, gameNameText, {
      alpha: 1
    }, 250, Phaser.Easing.Linear.None, 550, false, null);
    this.addHideTween(gameNameText, gameNameText, {
      alpha: 0
    }, 250, Phaser.Easing.Linear.None, 0, null, function() {
      this.checkHideScreenOver(this.aboutScreenGroup, this);
    }, this);
    this.aboutScreenGroup.openScrFunc = this.showAboutScreen;
    this.aboutScreenGroup.openScrOverFunc = this.showAboutScreenOver;
    this.aboutScreenGroup.closeScrFunc = this.hideAboutScreen;
    this.aboutScreenGroup.closeScrOverFunc = this.hideAboutScreenOver;
    this.updateAboutScreenTexts();
    this.aboutScreenGroup.visible = false;
  },
  aboutScreenUpdate: function() {
    if (this.aboutScreenGroup.visible !== true) {
      return;
    }
  },
  aboutScreenBackClicked: function() {
    musicPlayer.playSound("clck");
    this.screenSwitcher_openNewScreen(this.mainMenuGroup);
  },
  showAboutScreen: function() {
    this.setButtonsInput(this.aboutScreenGroup, false);
    this.aboutScreenGroup.backButton.alpha = 0;
    this.aboutScreenGroup.backButton.y = this.aboutScreenGroup.backButton.hiddenY;
    this.aboutScreenGroup.backButton.resetAnims();
    this.aboutScreenGroup.backButton.startAnims();
    this.aboutScreenGroup.inlLogo.alpha = 0;
    this.aboutScreenGroup.inlGamesText.alpha = 0;
    this.aboutScreenGroup.gameNameText.alpha = 0;
    this.showScreenCustomTweens(this.aboutScreenGroup);
  },
  showAboutScreenOver: function() {
    this.setButtonsInput(this.aboutScreenGroup, true);
  },
  hideAboutScreen: function(hideOverClbck) {
    this.hideScreenCustomTweens(this.aboutScreenGroup);
    this.setButtonsInput(this.aboutScreenGroup, false);
    this.aboutScreenGroup.hideOverClbck = hideOverClbck;
    this.aboutScreenGroup.backButton.stopAnims();
  },
  hideAboutScreenOver: function() {
    this.aboutScreenGroup.visible = false;
  },
  updateAboutScreenTexts: function() {},
  createLevelSelectionScreen: function() {
    this.levelSelectionGroup = game.add.group();
    this.levelSelectionGroup.name = "levelSelection";
    var backButton = this.buttonsManager.createBubbleButton(50, game.height - 50, "imgBblSmall", "ui_buttons", 1, this.levelSelectionScreenBackButton, this);
    backButton.visibleY = game.height - 50;
    backButton.hiddenY = game.height + 50;
    this.levelSelectionGroup.backButton = this.levelSelectionGroup.addChild(backButton);
    this.addShowTween(backButton, backButton, {
      y: backButton.visibleY,
      alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.levelSelectionGroup, this);
    }, this);
    this.addHideTween(backButton, backButton, {
      y: backButton.hiddenY,
      alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.levelSelectionGroup, this);
    }, this);
    var createLvlBtn = function(x, y, idx) {
      var lvlParent = this.buttonsManager.createMenuButtonOneImage(x, y, game.cache.getBitmapData("lvlLocked"), 0, null, this.levelSelectionScreenLevelSelected, this);
      lvlParent.anchor.set(.5, 0);
      lvlParent.noScaleOnDown = true;
      var lvlNumber = game.make.text(0, Math.floor(game.cache.getImage("playbtnMale").height / 2), idx, {
        font: "35px gameFont",
        fill: TEXT_COLOR_WHITE
      });
      setObjectAnchor(lvlNumber, .5, .5);
      lvlParent.lvlNumber = lvlParent.addChild(lvlNumber);
      lvlNumber.visible = false;
      lvlParent.levelNumber = idx;
      return lvlParent;
    }.bind(this);
    var levelsGroup = game.make.group();
    this.levelSelectionGroup.levelsGroup = this.levelSelectionGroup.addChild(levelsGroup);
    var levelsMask = game.add.graphics(0, 0);
    levelsMask.beginFill(16777215);
    levelsMask.drawRect(0, 40, game.width, game.height - 40 - 80);
    this.levelSelectionGroup.addChild(levelsMask);
    levelsGroup.mask = levelsMask;
    var distX = 110;
    var xInit = (game.width - 2 * distX) / 2;
    var distY = 135;
    var yInit = 50;
    for (var r = 0; r < 20; r++) {
      for (var c = 0; c < 3; c++) {
        var lvlbtn = createLvlBtn(xInit + c * distX, yInit + r * distY, c + r * 3 + 1);
        levelsGroup.addChild(lvlbtn);
      }
    }
    this.levelSelectionGroup.levelsGroup.totalHeight = yInit + 20 * distY;
    this.addShowTween(levelsGroup, levelsGroup, {
      alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, false, null);
    this.addHideTween(levelsGroup, levelsGroup, {
      alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.levelSelectionGroup, this);
    }, this);
    this.levelSelectionGroup.openScrFunc = this.showLevelSelectionScreen;
    this.levelSelectionGroup.openScrOverFunc = this.showLevelSelectionScreenOver;
    this.levelSelectionGroup.closeScrFunc = this.hideLevelSelectionScreen;
    this.levelSelectionGroup.closeScrOverFunc = this.hideLevelSelectionScreenOver;
    this.updateLevelSelectionScreenTexts();
    this.levelSelectionGroup.updateLevelScreenInNextShow = true;
    this.levelSelectionGroup.visible = false;
  },
  levelSelectionScreenUpdate: function() {
    if (this.levelSelectionGroup.visible === false) {
      return;
    }
    if (this.contentMoveType !== null) {
      this.levelSelectionScreenMoveContent();
    }
    if (this.wheelScrolled != 0) {
      if (this.wheelScrolled > 0 && this.wheelScrolled - 2 > 0) {
        this.wheelScrolled -= 2;
      } else {
        if (this.wheelScrolled < 0 && this.wheelScrolled + 2 < 0) {
          this.wheelScrolled += 2;
        } else {
          this.wheelScrolled = 0;
        }
      }
      this.levelSelectionScreenMoveContent();
    }
  },
  levelSelectionScreenMoveContent: function() {
    var dif = 0;
    var newY;
    if (this.contentMoveType === 0) {
      dif = game.input.activePointer.y - this.initClickY;
      newY = this.contentOriginY + dif;
    } else {
      if (this.wheelScrolled !== 0) {
        dif = this.wheelScrolled;
        newY = this.levelSelectionGroup.levelsGroup.y + dif;
        this.contentMoveType = null;
      }
    }
    if (dif !== 0) {
      if (newY > 0) {
        this.levelSelectionGroup.levelsGroup.y = 0;
      } else {
        if (newY < 0 - this.levelSelectionGroup.levelsGroup.totalHeight + (game.height - 60)) {
          this.levelSelectionGroup.levelsGroup.y = -this.levelSelectionGroup.levelsGroup.totalHeight + (game.height - 60);
        } else {
          this.levelSelectionGroup.levelsGroup.y = newY;
        }
      }
    }
  },
  levelSelectionScreenClickDown: function(pointer) {
    if (this.levelSelectionGroup.visible) {
      this.initClickY = pointer.y;
      this.contentOriginY = this.levelSelectionGroup.levelsGroup.y;
      this.contentMoveType = 0;
    }
  },
  levelSelectionScreenClickUp: function(pointer) {
    this.touchContentMove = Math.abs(this.initClickY - pointer.y);
    this.initClickY = null;
    this.contentMoveType = null;
  },
  levelSelectionScreenBackButton: function() {
    musicPlayer.playSound("clck");
    guiManager.screenSwitcher_openNewScreen(this.mainMenuGroup);
  },
  levelSelectionScreenLevelSelected: function(btn) {
    if (gamePlay.levelsScore[btn.levelNumber - 1] === -1) {
      return;
    }
    if (this.touchContentMove > 15) {
      return;
    }
    musicPlayer.playSound("clck");
    gamePlay.currentLevel = btn.levelNumber;
    this._gameStart();
  },
  showLevelSelectionScreen: function() {
    this.setButtonsInput(this.levelSelectionGroup, false);
    this.levelSelectionGroup.levelsGroup.alpha = 0;
    this.levelSelectionGroup.backButton.alpha = 0;
    this.levelSelectionGroup.backButton.y = this.levelSelectionGroup.backButton.hiddenY;
    this.levelSelectionGroup.backButton.resetAnims();
    this.levelSelectionGroup.backButton.startAnims();
    if (this.levelSelectionGroup.updateLevelScreenInNextShow === true) {
      this.levelSelectionGroup.updateLevelScreenInNextShow = false;
      for (var i = 0; i < this.levelSelectionGroup.levelsGroup.length; i++) {
        if (gamePlay.levelsScore[i] !== -1) {
          this.levelSelectionGroup.levelsGroup.getChildAt(i).lvlNumber.visible = true;
          if (gamePlay.levelsScore[i] > gamePlay.levelsProps.getLevelAttribute(i + 1, "maxScore")) {
            this.levelSelectionGroup.levelsGroup.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_3"));
          } else {
            if (gamePlay.levelsScore[i] > gamePlay.levelsProps.getLevelAttribute(i + 1, "minScore")) {
              this.levelSelectionGroup.levelsGroup.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_2"));
            } else {
              if (gamePlay.levelsScore[i] > gamePlay.levelsProps.getLevelAttribute(i + 1, "midScore")) {
                this.levelSelectionGroup.levelsGroup.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_1"));
              } else {
                this.levelSelectionGroup.levelsGroup.getChildAt(i).loadTexture(game.cache.getBitmapData("lvlUnl_0"));
              }
            }
          }
        }
      }
    }
    this.showScreenCustomTweens(this.levelSelectionGroup);
  },
  showLevelSelectionScreenOver: function() {
    this.setButtonsInput(this.levelSelectionGroup, true);
  },
  hideLevelSelectionScreen: function(hideOverClbck) {
    this.hideScreenCustomTweens(this.levelSelectionGroup);
    this.setButtonsInput(this.levelSelectionGroup, false);
    this.levelSelectionGroup.hideOverClbck = hideOverClbck;
    this.levelSelectionGroup.backButton.stopAnims();
  },
  hideLevelSelectionScreenOver: function() {
    this.levelSelectionGroup.visible = false;
  },
  updateLevelSelectionScreenTexts: function() {},
  createTutorialScreen: function() {
    this.tutorialScreenGroup = game.add.group();
    this.tutorialScreenGroup.name = "tutorialScreen";
    var window = game.make.sprite(game.width / 2, 0, "dialWin");
    setObjectAnchor(window, .5, 0);
    window.y = Math.floor((game.height - window.height) / 2);
    window.isClickable = true;
    window.events.onInputDown.add(this.tutorialScreenContinue, this);
    this.tutorialScreenGroup.window = this.tutorialScreenGroup.addChild(window);
    var goalTitle = game.make.text(0, 30, gameTexts.textFromID(TEXT_GOAL), {
      font: "80px gameFont",
      fill: TEXT_COLOR_WHITE
    });
    setObjectAnchor(goalTitle, .5, 0);
    this.tutorialScreenGroup.goalTitle = window.addChild(goalTitle);
    var windowText = game.make.text(0, Math.floor(window.height / 2) + 10, "Bring 3\npearls down", {
      font: "40px gameFont",
      fill: TEXT_COLOR_WHITE,
      align: "center",
      wordWrap: true,
      wordWrapWidth: window.width * .9
    });
    windowText.lineSpacing = -3;
    setObjectAnchor(windowText, .5, .5);
    this.tutorialScreenGroup.windowText = window.addChild(windowText);
    var btn = game.make.sprite(0, window.height - 15, "playbtnMale");
    setObjectAnchor(btn, .5, .5);
    this.tutorialScreenGroup.btn = window.addChild(btn);
    var levelIco = game.make.sprite(0, 0, "spr_levelIcons", 0);
    setObjectAnchor(levelIco, .5, .5);
    this.tutorialScreenGroup.levelIcoImg = btn.addChild(levelIco);
    this.tutorialScreenGroup.openScrFunc = this.showTutorialScreen;
    this.tutorialScreenGroup.openScrOverFunc = this.showTutorialScreenOver;
    this.tutorialScreenGroup.closeScrFunc = this.hideTutorialScreen;
    this.tutorialScreenGroup.closeScrOverFunc = this.hideTutorialScreenOver;
    this.updateTutorialScreenTexts();
    this.tutorialScreenGroup.visible = false;
  },
  tutorialScreenUpdate: function() {
    if (this.tutorialScreenGroup.visible !== true) {
      return;
    }
  },
  tutorialScreenContinue: function() {
    musicPlayer.playSound("clck");
    this.screenSwitcher_openNewScreen(this.gameScreenGroup);
    game.time.events.add(300, gamePlay.startGame, gamePlay);
  },
  showTutorialScreen: function() {
    this.setButtonsInput(this.tutorialScreenGroup, false);
    var textToShow = "";
    if (gamePlay.levelsProps._bModeMoves === true) {
      this.tutorialScreenGroup.levelIcoImg.frame = 2;
      this.tutorialScreenGroup.levelIcoImg.x = -1;
      textToShow = gameTexts.textFromID(TEXT_GET) + gamePlay.levelsProps.scoreMin + " " + gameTexts.textFromID(TEXT_POINTS);
    }
    if (gamePlay.levelsProps._bModeTime === true) {
      this.tutorialScreenGroup.levelIcoImg.frame = 4;
      this.tutorialScreenGroup.levelIcoImg.x = -3;
      textToShow = gameTexts.textFromID(TEXT_GET) + gamePlay.levelsProps.scoreMin + " " + gameTexts.textFromID(TEXT_POINTS);
    }
    if (gamePlay.levelsProps._bModeBlocks === true) {
      this.tutorialScreenGroup.levelIcoImg.frame = 3;
      this.tutorialScreenGroup.levelIcoImg.x = -3;
      textToShow = gameTexts.textFromID(TEXT_GOAL_BLOCK);
    }
    if (gamePlay.levelsProps._bModeEscape === true) {
      this.tutorialScreenGroup.levelIcoImg.frame = 0;
      this.tutorialScreenGroup.levelIcoImg.x = -2;
      textToShow = gameTexts.textFromID(TEXT_CATCH) + " " + gamePlay.levelsProps.flasksCount + gameTexts.textFromID(TEXT_ESC);
    }
    if (gamePlay.levelsProps._bModeDownfall === true) {
      this.tutorialScreenGroup.levelIcoImg.frame = 1;
      this.tutorialScreenGroup.levelIcoImg.x = 0;
      textToShow = gameTexts.textFromID(TEXT_BRING) + " " + gamePlay.levelsProps.pearlsCount + gameTexts.textFromID(TEXT_PEARLS);
    }
    this.tutorialScreenGroup.windowText.setText(textToShow);
    setObjectAnchor(this.tutorialScreenGroup.windowText, .5, .5);
    this.showScreenFromTop(this.tutorialScreenGroup, true, 200, 0, Phaser.Easing.Quadratic.Out);
  },
  showTutorialScreenOver: function() {
    this.setButtonsInput(this.tutorialScreenGroup, true);
  },
  hideTutorialScreen: function(hideOverClbck) {
    this.hideScreenToTop(this.tutorialScreenGroup, true, 200, 0, Phaser.Easing.Quadratic.Out);
    this.setButtonsInput(this.tutorialScreenGroup, false);
    this.tutorialScreenGroup.hideOverClbck = hideOverClbck;
  },
  hideTutorialScreenOver: function() {
    this.tutorialScreenGroup.visible = false;
  },
  updateTutorialScreenTexts: function() {},
  createGameOverScreen: function() {
    this.gameOverScreenGroup = game.add.group();
    this.gameOverScreenGroup.name = "gameOverScreen";
    var window = game.make.sprite(game.width / 2, 0, "dialWin");
    setObjectAnchor(window, .5, 0);
    window.y = Math.floor((game.height - window.height) / 2);
    this.gameOverScreenGroup.window = this.gameOverScreenGroup.addChild(window);
    var levelText = game.make.text(0, 35, "LEVEL 1", {
      font: "37px gameFont",
      fill: TEXT_COLOR_YELLOW
    });
    setObjectAnchor(levelText, .5, .5);
    this.gameOverScreenGroup.levelText = window.addChild(levelText);
    var starY = 115;
    var starOffset = 90;
    var star1_bg = game.make.sprite(0 - starOffset, starY, "starBig", 1);
    setObjectAnchor(star1_bg, .5, .5);
    star1_bg.scale.set(.6);
    this.gameOverScreenGroup.star1_bg = window.addChild(star1_bg);
    var star2_bg = game.make.sprite(0, starY, "starBig", 1);
    setObjectAnchor(star2_bg, .5, .5);
    this.gameOverScreenGroup.star2_bg = window.addChild(star2_bg);
    var star3_bg = game.make.sprite(0 + starOffset, starY, "starBig", 1);
    setObjectAnchor(star3_bg, .5, .5);
    star3_bg.scale.set(.6);
    this.gameOverScreenGroup.star3_bg = window.addChild(star3_bg);
    var starsList = [];
    this.gameOverScreenGroup.starsList = starsList;
    var starsParams = [
      [0 - starOffset, starY, .6],
      [0, starY, 1],
      [0 + starOffset, starY, .6]
    ];
    for (var i = 0; i < starsParams.length; i++) {
      var str = game.make.sprite(starsParams[i][0], starsParams[i][1], "starBig", 0);
      setObjectAnchor(str, .5, .5);
      str.scale.set(starsParams[i][2]);
      starsList.push(window.addChild(str));
      var delay = 850 + i * 600;
      this.addShowTween(str, str, {
        alpha: 1,
        x: starsParams[i][0],
        y: starsParams[i][1],
        rotation: 0
      }, 400, Phaser.Easing.Quadratic.Out, delay, false, null, null, this);
      var tww = this.addShowTween(str, str.scale, {
        x: starsParams[i][2],
        y: starsParams[i][2]
      }, 800, Phaser.Easing.Elastic.Out, delay + 400 - 100, false, null, null, this);
      tww.startSoundName = "sndStar" + (i + 1);
      tww.onStart.add(function(point, twn) {
        musicPlayer.playSound(twn.startSoundName);
      });
    }
    var scoreText = game.make.text(0, 205, "SCORE\n55", {
      font: "28px gameFont",
      fill: TEXT_COLOR_WHITE,
      align: "center"
    });
    scoreText.lineSpacing = -8;
    setObjectAnchor(scoreText, .5, .5);
    this.gameOverScreenGroup.scoreText = window.addChild(scoreText);
    this.gameOverScreenGroup.scoreValueLoadRunning = false;
    this.gameOverScreenGroup.previousMillis = 0;
    this.gameOverScreenGroup.scoreValueLoadDuration = 300;
    this.gameOverScreenGroup.scoreValueLoadCurrentTime = 0;
    var bestText = game.make.text(0, 265, "BEST:\n102", {
      font: "25px gameFont",
      fill: TEXT_COLOR_WHITE,
      align: "center"
    });
    bestText.lineSpacing = -8;
    setObjectAnchor(bestText, .5, .5);
    this.gameOverScreenGroup.bestText = window.addChild(bestText);
    var btnY = 340;
    var btnOffset = 95;
    var btn_backToLevelSelection = this.buttonsManager.createBubbleButton(0 - btnOffset, btnY, "imgBblSmall", "ui_buttons", 1, this.gameOverScreenBackToLevelSelectionButtonClicked, this);
    this.gameOverScreenGroup.btn_backToLevelSelection = window.addChild(btn_backToLevelSelection);
    var btn_play = this.buttonsManager.createBubbleButton(0, btnY, "bblbtn", "spr_btn_sipka_refr", 0, this.gameOverPlayButtonClicked, this);
    this.gameOverScreenGroup.btn_play = window.addChild(btn_play);
    var btn_new_restart = this.buttonsManager.createBubbleButton(0 + btnOffset, btnY, "imgBblSmall", "spr_btn", 1, this.gameOverRightButtonClicked, this);
    this.gameOverScreenGroup.btn_new_restart = window.addChild(btn_new_restart);
    this.gameOverScreenGroup.openScrFunc = this.showGameOverScreen;
    this.gameOverScreenGroup.openScrOverFunc = this.showGameOverScreenOver;
    this.gameOverScreenGroup.closeScrFunc = this.hideGameOverScreen;
    this.gameOverScreenGroup.closeScrOverFunc = this.hideGameOverScreenOver;
    this.gameOverScreenGroup.visible = false;
  },
  gameOverScreenUpdate: function() {
    if (this.gameOverScreenGroup.visible === false) {
      return;
    }
    if (this.gameOverScreenGroup.scoreValueLoadRunning === true) {
      this.gameOverScreenGroup.scoreValueLoadCurrentTime += Date.now() - this.gameOverScreenGroup.previousMillis;
      var perc = this.gameOverScreenGroup.scoreValueLoadCurrentTime / this.gameOverScreenGroup.scoreValueLoadDuration;
      if (perc > 1) {
        perc = 1;
      }
      this.setNewText(this.gameOverScreenGroup.scoreText, null, gameTexts.textFromID_upper(TEXT_SCORE) + "\n" + Math.floor(this.gameOverScreenGroup.scoreValueDetination * perc));
      if (perc === 1) {
        this.gameOverScreenGroup.scoreValueLoadRunning = false;
      }
    }
    this.gameOverScreenGroup.previousMillis = Date.now();
  },
  gameOverScreenBackToLevelSelectionButtonClicked: function() {
    musicPlayer.playSound("clck");
    musicPlayer.playMusic(MUSIC_MENU);
    guiManager.screenSwitcher_openNewScreen(this.levelSelectionGroup);
    appState = APP_STATES.MENU;
    gameState = GAME_STATES.GAME_OFF;
    gamePlay.clearGamePlayElements();
  },
  gameOverPlayButtonClicked: function() {
    musicPlayer.playSound("clck");
    if (this.gameOverScreenGroup.useWinButtons) {
      gamePlay.currentLevel += 1;
      this._gameStart();
    } else {
      this._gameStart();
    }
  },
  gameOverRightButtonClicked: function() {
    musicPlayer.playSound("clck");
    if (this.gameOverScreenGroup.useWinButtons) {
      this._gameStart();
    } else {
      this.screenSwitcher_openNewScreen(this.mainMenuGroup);
      appState = APP_STATES.MENU;
      gameState = GAME_STATES.GAME_OFF;
      gamePlay.clearGamePlayElements();
    }
  },
  _gameStart: function() {
    gamePlay.prepareNewGame();
    this.prepareGameScreen();
    this.screenSwitcher_openNewScreen(this.tutorialScreenGroup);
    musicPlayer.playMusic(MUSIC_GAME);
  },
  showGameOverScreen: function() {
    this.setButtonsInput(this.gameOverScreenGroup, false);
    this.gameOverScreenGroup.levelText.setText(gameTexts.textFromID_upper(TEXT_LEVEL) + " " + gamePlay.currentLevel);
    this.gameOverScreenGroup.scoreText.setText(gameTexts.textFromID_upper(TEXT_SCORE) + "\n" + 0);
    this.gameOverScreenGroup.bestText.setText(gameTexts.textFromID_upper(TEXT_BEST) + "\n" + gamePlay.levelsScore[gamePlay.currentLevel - 1]);
    var showStars = gamePlay.currentLevelStars;
    if (showStars > this.gameOverScreenGroup.starsList.length) {
      showStars = this.gameOverScreenGroup.starsList.length;
    }
    for (var i = 0; i < this.gameOverScreenGroup.starsList.length; i++) {
      var star = this.gameOverScreenGroup.starsList[i];
      star.scale.set(1.2);
      star.alpha = 0;
      star.x = 0;
      star.y = 200;
      star.rotation = -5;
      if (gamePlay.gameOverType === GAME_OVER_WIN) {
        if (i < showStars) {
          for (var j = 0; j < this.gameOverScreenGroup.starsList[i].showTW.length; j++) {
            this.gameOverScreenGroup.starsList[i].showTW[j].start();
          }
        }
      }
    }
    this.gameOverScreenGroup.useWinButtons = gamePlay.gameOverType === GAME_OVER_WIN;
    if (gamePlay.currentLevel === 60) {
      this.gameOverScreenGroup.useWinButtons = false;
    }
    if (this.gameOverScreenGroup.useWinButtons === true) {
      this.gameOverScreenGroup.btn_play.ico.loadTexture("spr_btn_sipka_refr", 0);
      this.gameOverScreenGroup.btn_new_restart.ico.loadTexture("ui_buttons", 14);
    } else {
      this.gameOverScreenGroup.btn_play.ico.loadTexture("spr_btn_sipka_refr", 1);
      this.gameOverScreenGroup.btn_new_restart.ico.loadTexture("ui_buttons", 2);
    }
    this.gameOverScreenGroup.btn_play.resetAnims();
    this.gameOverScreenGroup.btn_play.startAnims();
    this.gameOverScreenGroup.btn_new_restart.resetAnims();
    this.gameOverScreenGroup.btn_new_restart.startAnims();
    this.gameOverScreenGroup.btn_backToLevelSelection.resetAnims();
    this.gameOverScreenGroup.btn_backToLevelSelection.startAnims();
    this.gameOverScreenGroup.scoreValueLoadCurrentTime = 0;
    this.gameOverScreenGroup.scoreValueDetination = gamePlay.currentLevelScore;
    this.gameOverScreenGroup.scoreValueLoadRunning = false;
    this.showScreenFromTop(this.gameOverScreenGroup, true, 250, 0, Phaser.Easing.Quadratic.Out);
    this.gameOverScreenGroup.visible = true;
  },
  showGameOverScreenOver: function() {
    this.setButtonsInput(this.gameOverScreenGroup, true);
    game.time.events.add(200, function() {
      this.gameOverScreenGroup.scoreValueLoadRunning = true;
    }, this);
  },
  hideGameOverScreen: function(hideOverClbck) {
    this.hideScreenToTop(this.gameOverScreenGroup, true, 200, 0, Phaser.Easing.Quadratic.Out);
    this.setButtonsInput(this.gameOverScreenGroup, false);
    this.gameOverScreenGroup.hideOverClbck = hideOverClbck;
    this.gameOverScreenGroup.btn_play.stopAnims();
    this.gameOverScreenGroup.btn_new_restart.stopAnims();
    this.gameOverScreenGroup.btn_backToLevelSelection.stopAnims();
  },
  hideGameOverScreenOver: function() {
    this.gameOverScreenGroup.visible = false;
  },
  createPauseScreen: function() {
    this.pauseScreenGroup = game.add.group();
    this.pauseScreenGroup.name = "pauseScreen";
    var contButton = this.buttonsManager.createMenuButtonTwoImages(game.width / 2, game.height * .6, "playbtn", 0, null, "spr_btn", 0, null, this.pauseScreenBackToGameButtonClicked, this);
    contButton.icoImg.x = 13;
    contButton.icoImg.y = 5;
    this.pauseScreenGroup.contButton = this.pauseScreenGroup.addChild(contButton);
    contButton.maxScaleX = .8;
    contButton.maxScaleY = .8;
    this.addShowTween(contButton, contButton.scale, {
      x: .8,
      y: .8
    }, 250, Phaser.Easing.Back.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.pauseScreenGroup, this);
    }, this);
    this.addHideTween(contButton, contButton.scale, {
      x: 0,
      y: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.pauseScreenGroup, this);
    }, this);
    var offset = (game.height / 2 - contButton.height / 2) * .6;
    var gmlogoParent = game.make.sprite(game.width / 2, offset);
    setObjectAnchor(gmlogoParent, .5, .5);
    var gmlogo = game.make.sprite(0, 0, "game_logo");
    setObjectAnchor(gmlogo, .5, .5);
    gmlogoParent.addChild(gmlogo);
    gmlogoParent.visibleY = offset;
    gmlogoParent.hiddenY = -100;
    gmlogoParent.moveTW = game.add.tween(gmlogo).to({
      y: [-2, 0, 2, 0]
    }, getRandomUIntInRange(1500, 2E3), Phaser.Easing.Linear.None, false, 0, 0);
    gmlogoParent.moveTW.onComplete.add(function() {
      if (gmlogoParent.playAnim === true) {
        gmlogoParent.moveTW.start();
      }
    });
    this.pauseScreenGroup.gmlogoParent = this.pauseScreenGroup.addChild(gmlogoParent);
    this.addShowTween(gmlogoParent, gmlogoParent, {
      y: gmlogoParent.visibleY
    }, 300, Phaser.Easing.Quadratic.Out, 0, false, null, null, this);
    this.addHideTween(gmlogoParent, gmlogoParent, {
      y: gmlogoParent.hiddenY
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.pauseScreenGroup, this);
    }, this);
    var pauseText = game.add.text(game.width / 2, 200, gameTexts.textFromID(TEXT_PAUSE), {
      font: "70px gameFont",
      fill: TEXT_COLOR_WHITE
    });
    setObjectAnchor(pauseText, .5, .5);
    pauseText.y = Math.floor(gmlogoParent.visibleY + (contButton.y - gmlogoParent.visibleY) * .44);
    pauseText.strokeThickness = 5;
    pauseText.stroke = "#252161";
    this.pauseScreenGroup.pauseText = this.pauseScreenGroup.addChild(pauseText);
    this.addShowTween(pauseText, pauseText.scale, {
      x: 1,
      y: 1
    }, 250, Phaser.Easing.Back.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.pauseScreenGroup, this);
    }, this);
    this.addHideTween(pauseText, pauseText.scale, {
      x: 0,
      y: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.pauseScreenGroup, this);
    }, this);
    var bottomBtns = [];
    this.pauseScreenGroup.bottomBtns = bottomBtns;
    var btnRestart = this.buttonsManager.createBubbleButton(0, 0, "bblbtn", "ui_buttons2", 5, this.pauseScreenRefreshButtonClicked, this);
    btnRestart.hiddenY = game.height + 50;
    this.pauseScreenGroup.btnRestart = this.pauseScreenGroup.addChild(btnRestart);
    bottomBtns.push(btnRestart);
    var btnInstr = this.buttonsManager.createBubbleButton(0, 0, "bblbtn", "ui_buttons2", 0, this.pauseScreenInstructionsClicked, this);
    btnInstr.hiddenY = game.height + 50;
    this.pauseScreenGroup.btnInstr = this.pauseScreenGroup.addChild(btnInstr);
    bottomBtns.push(btnInstr);
    if (SOUNDS_ENABLED) {
      var btnSnd = this.buttonsManager.createBubbleButton(0, 0, "bblbtn", "ui_buttons2", 2, this.pauseScreenSoundClicked, this);
      btnSnd.hiddenY = game.height + 50;
      this.pauseScreenGroup.btnSnd = this.pauseScreenGroup.addChild(btnSnd);
      bottomBtns.push(btnSnd);
    }
    var btnMenu = this.buttonsManager.createBubbleButton(0, 0, "bblbtn", "ui_buttons2", 6, this.pauseScreenReturnToMainMenuClicked, this);
    btnMenu.hiddenY = game.height + 50;
    this.pauseScreenGroup.btnMenu = this.pauseScreenGroup.addChild(btnMenu);
    bottomBtns.push(btnMenu);
    if (bottomBtns.length === 2) {
      bottomBtns[0].x = game.width / 2 - 50;
      bottomBtns[1].x = game.width / 2 + 50;
      bottomBtns[0].visibleY = game.height - offset;
      bottomBtns[1].visibleY = game.height - offset;
    } else {
      if (bottomBtns.length === 3) {
        bottomBtns[1].x = game.width / 2;
        bottomBtns[0].x = bottomBtns[1].x - 100;
        bottomBtns[2].x = bottomBtns[1].x + 100;
        bottomBtns[0].visibleY = game.height - offset;
        bottomBtns[1].visibleY = game.height - offset + 20;
        bottomBtns[2].visibleY = game.height - offset;
      } else {
        if (bottomBtns.length === 4) {
          bottomBtns[0].x = game.width / 2 - 150;
          bottomBtns[1].x = game.width / 2 - 50;
          bottomBtns[2].x = game.width / 2 + 50;
          bottomBtns[3].x = game.width / 2 + 150;
          bottomBtns[0].visibleY = game.height - offset;
          bottomBtns[1].visibleY = game.height - offset + 30;
          bottomBtns[2].visibleY = game.height - offset + 30;
          bottomBtns[3].visibleY = game.height - offset;
        }
      }
    }
    for (var l = 0; l < bottomBtns.length; l++) {
      this.addShowTween(bottomBtns[l], bottomBtns[l], {
        y: bottomBtns[l].visibleY
      }, getRandomUIntInRange(400, 700), Phaser.Easing.Back.Out, getRandomUIntInRange(20, 350), false, null);
      this.addHideTween(bottomBtns[l], bottomBtns[l], {
        y: bottomBtns[l].hiddenY
      }, 350, Phaser.Easing.Exponential.Out, getRandomUIntInRange(0, 75), null, function() {
        this.checkHideScreenOver(this.pauseScreenGroup, this);
      }, this);
    }
    this.pauseScreenGroup.openScrFunc = this.showPauseScreen;
    this.pauseScreenGroup.openScrOverFunc = this.showPauseScreenOver;
    this.pauseScreenGroup.closeScrFunc = this.hidePauseScreen;
    this.pauseScreenGroup.closeScrOverFunc = this.hidePauseScreenOver;
    this.updatePauseScreenTexts();
    this.pauseScreenGroup.visible = false;
  },
  pauseScreenUpdate: function() {
    if (this.pauseScreenGroup.visible === false) {
      return;
    }
  },
  pauseScreenRefreshButtonClicked: function() {
    musicPlayer.playSound("clck");
    this._gameStart();
  },
  pauseScreenBackToGameButtonClicked: function() {
    musicPlayer.playSound("clck");
    gamePlay.resumeGamePlay();
    this.screenSwitcher_openNewScreen(this.gameScreenGroup);
  },
  pauseScreenInstructionsClicked: function() {
    musicPlayer.playSound("clck");
    this.screenSwitcher_openNewScreen(this.instructionsScreenGroup);
    this.instructionsScreenGroup.openedFromPause = true;
  },
  pauseScreenSoundClicked: function() {
    musicPlayer.playSound("clck");
    musicPlayer.toggleEnableDisableMusic();
    if (musicPlayer.soundON) {
      this.pauseScreenGroup.btnSnd.ico.frame = 2;
    } else {
      this.pauseScreenGroup.btnSnd.ico.frame = 3;
    }
  },
  pauseScreenReturnToMainMenuClicked: function() {
    musicPlayer.playSound("clck");
    musicPlayer.playMusic(MUSIC_MENU);
    appState = APP_STATES.MENU;
    gameState = GAME_STATES.GAME_OFF;
    this.screenSwitcher_openNewScreen(this.levelSelectionGroup);
    gamePlay.clearGamePlayElements();
    gamePlay.onGameOver(GAME_OVER_BY_USER);
  },
  showPauseScreen: function() {
    this.setButtonsInput(this.pauseScreenGroup, false);
    this.pauseScreenGroup.gmlogoParent.playAnim = true;
    this.pauseScreenGroup.gmlogoParent.moveTW.start();
    this.pauseScreenGroup.gmlogoParent.y = this.pauseScreenGroup.gmlogoParent.hiddenY;
    this.pauseScreenGroup.contButton.scale.set(0);
    this.pauseScreenGroup.pauseText.scale.set(0);
    for (var l = 0; l < this.pauseScreenGroup.bottomBtns.length; l++) {
      this.pauseScreenGroup.bottomBtns[l].y = this.pauseScreenGroup.bottomBtns[l].hiddenY;
      this.pauseScreenGroup.bottomBtns[l].resetAnims();
      this.pauseScreenGroup.bottomBtns[l].startAnims();
    }
    if (SOUNDS_ENABLED) {
      if (musicPlayer.soundON) {
        this.pauseScreenGroup.btnSnd.ico.frame = 2;
      } else {
        this.pauseScreenGroup.btnSnd.ico.frame = 3;
      }
    }
    this.showScreenCustomTweens(this.pauseScreenGroup);
  },
  showPauseScreenOver: function() {
    this.setButtonsInput(this.pauseScreenGroup, true);
  },
  hidePauseScreen: function(hideOverClbck) {
    this.hideScreenCustomTweens(this.pauseScreenGroup);
    this.setButtonsInput(this.pauseScreenGroup, false);
    this.pauseScreenGroup.hideOverClbck = hideOverClbck;
    for (var l = 0; l < this.pauseScreenGroup.bottomBtns.length; l++) {
      this.pauseScreenGroup.bottomBtns[l].stopAnims();
    }
  },
  hidePauseScreenOver: function() {
    this.pauseScreenGroup.visible = false;
  },
  updatePauseScreenTexts: function() {},
  createGameScreen: function() {
    this.gameScreenGroup = game.add.group();
    this.gameScreenGroup.name = "gameScreen";
    this.gameScreenGroup.levelScoreVisible = 0;
    var upperBarGroup = game.add.group();
    this.gameScreenGroup.upperBarGrp = this.gameScreenGroup.addChild(upperBarGroup);
    upperBarGroup.visibleY = 0;
    upperBarGroup.hiddenY = -80;
    this.addShowTween(upperBarGroup, upperBarGroup, {
      y: upperBarGroup.visibleY
    }, 300, Phaser.Easing.Quadratic.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.gameScreenGroup, this);
    }, this);
    this.addHideTween(upperBarGroup, upperBarGroup, {
      y: upperBarGroup.hiddenY
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.gameScreenGroup, this);
    }, this);
    var scoreBg = game.make.sprite(game.width / 2, 0, "topBar1");
    setObjectAnchor(scoreBg, .5, 0);
    var scoreText = game.make.text(0, Math.floor(scoreBg.height * .42), 0, {
      font: "35px gameFont",
      fill: TEXT_COLOR_WHITE
    });
    setObjectAnchor(scoreText, .5, .5);
    this.gameScreenGroup.scoreText = scoreBg.addChild(scoreText);
    upperBarGroup.addChild(scoreBg);
    var starsBg = game.make.sprite(game.width / 2 + 150, Math.floor(scoreBg.height * .9), "topBar3");
    setObjectAnchor(starsBg, .5, .5);
    upperBarGroup.addChild(starsBg);
    var starsPos = [
      [-60, -1],
      [-20, -1],
      [19, -1]
    ];
    this.gameScreenGroup.scoreStars = [];
    for (var s = 0; s < 3; s++) {
      var starBlack = game.make.sprite(starsPos[s][0], starsPos[s][1], "starTopBar", 1);
      setObjectAnchor(starBlack, 0, .5);
      starsBg.addChild(starBlack);
      var starScore = game.make.sprite(starsPos[s][0], starsPos[s][1], "starTopBar", 0);
      setObjectAnchor(starScore, 0, .5);
      starsBg.addChild(starScore);
      this.gameScreenGroup.scoreStars.push(starScore);
    }
    this.gameScreenGroup.leftIndiList = [];
    for (var i = 0; i < 2; i++) {
      var leftIndi = game.make.sprite(game.width / 2 - 150, Math.floor(scoreBg.height * .75), "topBar2");
      setObjectAnchor(leftIndi, .5, .5);
      upperBarGroup.addChild(leftIndi);
      this.gameScreenGroup.leftIndiList.push(leftIndi);
      var indiText = game.make.text(13, 11, 0, {
        font: "25px gameFont",
        fill: TEXT_COLOR_WHITE
      });
      setObjectAnchor(indiText, .5, .5);
      leftIndi.indiText = leftIndi.addChild(indiText);
      var indiImg = game.make.sprite(-12, -7, "spr_level_type_ico", 0);
      setObjectAnchor(indiImg, .5, .5);
      leftIndi.indiImg = leftIndi.addChild(indiImg);
    }
    var timeGroup = game.make.group();
    timeGroup.scale.set(.85);
    timeGroup.x = -13;
    timeGroup.y = -7;
    this.gameScreenGroup.leftIndiList[0].timeGroup = this.gameScreenGroup.leftIndiList[0].addChild(timeGroup);
    var bg1 = game.make.sprite(0, 0, "timeBlue");
    bg1.anchor.set(0, .5);
    bg1.angle = 180;
    timeGroup.addChild(bg1);
    var bg2 = game.make.sprite(0, 0, "timeBlue");
    bg2.anchor.set(0, .5);
    timeGroup.addChild(bg2);
    var rot_yel1 = game.make.sprite(0, 0, "timeYell");
    rot_yel1.anchor.set(1, .5);
    timeGroup.rot_yel1 = timeGroup.addChild(rot_yel1);
    var rot_yel2 = game.make.sprite(0, 0, "timeYell");
    rot_yel2.anchor.set(1, .5);
    rot_yel2.angle = 180;
    timeGroup.rot_yel2 = timeGroup.addChild(rot_yel2);
    var rot_bl = game.make.sprite(0, 0, "timeBlue");
    rot_bl.anchor.set(0, .5);
    timeGroup.rot_bl = timeGroup.addChild(rot_bl);
    this.setLeftTimeIco = function(perc) {
      if (perc <= 1 && perc > .5) {
        rot_bl.visible = false;
        rot_bl.angle = 0;
        rot_yel2.angle = Math.floor(180 - perc * 360);
      } else {
        if (perc <= .5 && perc >= 0) {
          rot_bl.visible = true;
          rot_bl.angle = Math.floor((.5 - perc) * 2 * 180);
          rot_yel2.angle = 0;
        }
      }
    };
    var gameBoardGroup = game.add.group();
    gameBoardGroup.position.set(20, 20);
    gameBoardGroup.dontChangeInput = true;
    this.gameScreenGroup.addChild(gameBoardGroup);
    this.gameScreenGroup.gameBoardGroup = gameBoardGroup;
    var gameBG = game.make.sprite(0, 0);
    gameBoardGroup.addChild(gameBG);
    gameBoardGroup.backGroundSpr = gameBG;
    var gameBlocksGroup = game.add.group();
    gameBoardGroup.addChild(gameBlocksGroup);
    gameBoardGroup.gameBlocksGroup = gameBlocksGroup;
    var animsGroup = game.add.group();
    gameBoardGroup.addChild(animsGroup);
    gameBoardGroup.animsGroup = animsGroup;
    var spectrumAnimsGroup = game.add.group();
    gameBoardGroup.addChild(spectrumAnimsGroup);
    gameBoardGroup.spectrumAnimsGroup = spectrumAnimsGroup;
    var crossAnimsGroup = game.add.group();
    gameBoardGroup.addChild(crossAnimsGroup);
    gameBoardGroup.crossAnimsGroup = crossAnimsGroup;
    var flaskSpawnerGroup = game.add.group();
    gameBoardGroup.flaskSpawnerGroup = gameBoardGroup.addChild(flaskSpawnerGroup);
    var gameCharactersGroup = game.add.group();
    gameBoardGroup.addChild(gameCharactersGroup);
    gameBoardGroup.gameCharactersGroup = gameCharactersGroup;
    var scoreTextGroup = game.add.group();
    gameBoardGroup.addChild(scoreTextGroup);
    gameBoardGroup.scoreTextGroup = scoreTextGroup;
    var msgGroup = game.add.group();
    this.gameScreenGroup.addChild(msgGroup);
    this.gameScreenGroup.msgGroup = msgGroup;
    this.addShowTween(gameBoardGroup, gameBoardGroup, {
      alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.gameScreenGroup, this);
    }, this);
    this.addHideTween(gameBoardGroup, gameBoardGroup, {
      alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.gameScreenGroup, this);
    }, this);
    var pauseButton = this.buttonsManager.createBubbleButton(game.width - 50, game.height - 50, "imgBblSmall", "ui_buttons", 4, this.gameScreenPauseClicked, this);
    pauseButton.visibleY = game.height - 50;
    pauseButton.hiddenY = game.height + 50;
    this.gameScreenGroup.pauseButton = this.gameScreenGroup.addChild(pauseButton);
    this.addShowTween(pauseButton, pauseButton, {
      y: pauseButton.visibleY,
      alpha: 1
    }, 300, Phaser.Easing.Quadratic.Out, 0, true, null, function() {
      this.checkShowScreenOver(this.gameScreenGroup, this);
    }, this);
    this.addHideTween(pauseButton, pauseButton, {
      y: pauseButton.hiddenY,
      alpha: 0
    }, 300, Phaser.Easing.Quadratic.Out, 0, null, function() {
      this.checkHideScreenOver(this.gameScreenGroup, this);
    }, this);
    this.updateGameScreenTexts();
    this.gameScreenGroup.openScrFunc = this.showGameScreen;
    this.gameScreenGroup.openScrOverFunc = this.showGameScreenOver;
    this.gameScreenGroup.closeScrFunc = this.hideGameScreen;
    this.gameScreenGroup.closeScrOverFunc = this.hideGameScreenOver;
    this.gameScreenGroup.visible = false;
    GAMEPLAY_BOARD_BOUNDRIES = {
      xMin: 20,
      xMax: game.width - 20,
      yMin: this.gameScreenGroup.upperBarGrp.getChildAt(0).height + 50,
      yMax: game.height - 80
    };
  },
  gameScreenUpdate: function() {
    if (this.gameScreenGroup.visible === false) {
      return;
    }
    this.updateGameScreenScore();
  },
  updateGameScreenScore: function() {
    if (gamePlay.scoreInc > 0) {
      if (gamePlay.scoreInc % 2 === 0) {
        this.gameScreenGroup.levelScoreVisible += gamePlay.scoreInc / 2;
        gamePlay.scoreInc -= gamePlay.scoreInc / 2;
      } else {
        this.gameScreenGroup.levelScoreVisible += gamePlay.scoreInc % 2;
        gamePlay.scoreInc -= gamePlay.scoreInc % 2;
      }
    }
    this.setGameScreenScore(this.gameScreenGroup.levelScoreVisible);
  },
  gameScreenPauseClicked: function() {
    musicPlayer.playSound("clck");
    gamePlay.pauseGamePlay();
    guiManager.screenSwitcher_openNewScreen(this.pauseScreenGroup);
  },
  gameScreenUpdateLevelBoardImage: function(imgName) {
    this.gameScreenGroup.gameBoardGroup.backGroundSpr.loadTexture(imgName);
  },
  showGameScreen: function() {
    this.setButtonsInput(this.gameScreenGroup, false);
    this.gameScreenGroup.visible = true;
    this.gameScreenGroup.pauseButton.alpha = 0;
    this.gameScreenGroup.pauseButton.y = this.gameScreenGroup.pauseButton.hiddenY;
    this.gameScreenGroup.pauseButton.resetAnims();
    this.gameScreenGroup.pauseButton.startAnims();
    if (this.gameScreenGroup.gameBoardGroup.length > 0) {
      var scaleX = (GAMEPLAY_BOARD_BOUNDRIES.xMax - GAMEPLAY_BOARD_BOUNDRIES.xMin) / this.gameScreenGroup.gameBoardGroup.getChildAt(0).width;
      var scaleY = (GAMEPLAY_BOARD_BOUNDRIES.yMax - GAMEPLAY_BOARD_BOUNDRIES.yMin) / this.gameScreenGroup.gameBoardGroup.getChildAt(0).height;
      var finalScale = scaleX < scaleY ? scaleX : scaleY;
      finalScale = finalScale < .85 ? finalScale : .85;
      this.gameScreenGroup.gameBoardGroup.scale.set(Math.floor(finalScale * 100) / 100);
      this.gameScreenGroup.gameBoardGroup.x = Math.floor((GAMEPLAY_BOARD_BOUNDRIES.xMax - GAMEPLAY_BOARD_BOUNDRIES.xMin) / 2 + GAMEPLAY_BOARD_BOUNDRIES.xMin - this.gameScreenGroup.gameBoardGroup.width / 2);
      this.gameScreenGroup.gameBoardGroup.y = Math.floor((GAMEPLAY_BOARD_BOUNDRIES.yMax - GAMEPLAY_BOARD_BOUNDRIES.yMin) / 2 + GAMEPLAY_BOARD_BOUNDRIES.yMin - this.gameScreenGroup.gameBoardGroup.height / 2);
    }
    this.gameScreenGroup.gameBoardGroup.alpha = 0;
    this.showScreenCustomTweens(this.gameScreenGroup);
  },
  prepareGameScreen: function() {
    this.gameScreenGroup.levelScoreVisible = 0;
    for (var i = 0; i < this.gameScreenGroup.scoreStars.length; i++) {
      var width = 0;
      var cropRect = new Phaser.Rectangle(0, 0, width, this.gameScreenGroup.scoreStars[i].height);
      this.gameScreenGroup.scoreStars[i].crop(cropRect);
      this.gameScreenGroup.scoreStars[i].cropRect = cropRect;
    }
    var levelModes = gamePlay.levelsProps.getLevelModes(gamePlay.currentLevel);
    if (levelModes.length === 1) {
      this.gameScreenGroup.leftIndiList[1].visible = false;
      this.gameScreenGroup.leftIndiList[0].x = game.width / 2 - 150;
    } else {
      if (levelModes.length !== 1 && levelModes.length !== 2) {
        logToConsole("level", gamePlay.currentLevel, "problem, levelModes.length unsupported value");
      }
      this.gameScreenGroup.leftIndiList[1].visible = true;
      this.gameScreenGroup.leftIndiList[0].x = game.width / 2 - 190;
      this.gameScreenGroup.leftIndiList[1].x = game.width / 2 - 115;
    }
    this.gameScreenGroup.leftIndiList[0].indiImg.visible = true;
    this.gameScreenGroup.leftIndiList[0].timeGroup.visible = false;
    if (levelModes.contains("moveMode")) {
      this.gameScreenGroup.leftIndiList[0].indiImg.loadTexture(gameModesSettings["moveMode"][0], gameModesSettings["moveMode"][1]);
    }
    if (levelModes.contains("timeMode")) {
      this.gameScreenGroup.leftIndiList[0].indiImg.visible = false;
      this.gameScreenGroup.leftIndiList[0].timeGroup.visible = true;
    }
    if (levelModes.contains("blocksMode")) {
      this.gameScreenGroup.leftIndiList[1].indiImg.loadTexture(gameModesSettings["blocksMode"][0], gameModesSettings["blocksMode"][1]);
    }
    if (levelModes.contains("escapeMode")) {
      this.gameScreenGroup.leftIndiList[1].indiImg.loadTexture(gameModesSettings["escapeMode"][0], gameModesSettings["escapeMode"][1]);
    }
    if (levelModes.contains("fallMode")) {
      this.gameScreenGroup.leftIndiList[1].indiImg.loadTexture(gameModesSettings["fallMode"][0], gameModesSettings["fallMode"][1]);
    }
  },
  setGameScreenLeftIndicator1: function(value) {
    this.gameScreenGroup.leftIndiList[0].indiText.setText(value);
    setObjectAnchor(this.gameScreenGroup.leftIndiList[0].indiText, .5, .5);
  },
  setGameScreenLeftIndicator2: function(value) {
    this.gameScreenGroup.leftIndiList[1].indiText.setText(value);
    setObjectAnchor(this.gameScreenGroup.leftIndiList[1].indiText, .5, .5);
  },
  setGameScreenScore: function(score) {
    this.gameScreenGroup.scoreText.setText(score);
    setObjectAnchor(this.gameScreenGroup.scoreText, .5, .5);
    var star1Perc = Math.floor(score / gamePlay.levelsProps.scoreMin * 1E3) / 1E3;
    var star2Perc = 0;
    var star3Perc = 0;
    if (star1Perc > 1) {
      star1Perc = 1;
      star2Perc = Math.floor((score - gamePlay.levelsProps.scoreMin) / (gamePlay.levelsProps.scoreMid - gamePlay.levelsProps.scoreMin) * 1E3) / 1E3;
      if (star2Perc > 1) {
        star2Perc = 1;
        star3Perc = Math.floor((score - gamePlay.levelsProps.scoreMid) / (gamePlay.levelsProps.scoreMax - gamePlay.levelsProps.scoreMid) * 1E3) / 1E3;
        if (star3Perc > 1) {
          star3Perc = 1;
        }
      }
    }
    var starWidth = 34;
    this.gameScreenGroup.scoreStars[0].cropRect.width = 3 + star1Perc * starWidth;
    this.gameScreenGroup.scoreStars[0].updateCrop();
    this.gameScreenGroup.scoreStars[1].cropRect.width = 3 + star2Perc * starWidth;
    this.gameScreenGroup.scoreStars[1].updateCrop();
    this.gameScreenGroup.scoreStars[2].cropRect.width = 3 + star3Perc * starWidth;
    this.gameScreenGroup.scoreStars[2].updateCrop();
  },
  showGameScreenOver: function() {
    this.setButtonsInput(this.gameScreenGroup, true);
  },
  hideGameScreen: function(hideOverClbck) {
    this.setButtonsInput(this.gameScreenGroup, false);
    this.gameScreenGroup.hideOverClbck = hideOverClbck;
    this.hideScreenCustomTweens(this.gameScreenGroup);
    this.gameScreenGroup.pauseButton.stopAnims();
  },
  hideGameScreenOver: function() {
    this.gameScreenGroup.visible = false;
  },
  updateGameScreenTexts: function() {},
  createBitmaps: function() {
    this.createLevelSelStarBitmap(-1, "lvlLocked");
    this.createLevelSelStarBitmap(0, "lvlUnl_0");
    this.createLevelSelStarBitmap(1, "lvlUnl_1");
    this.createLevelSelStarBitmap(2, "lvlUnl_2");
    this.createLevelSelStarBitmap(3, "lvlUnl_3");
  },
  create1x3HeightWindowBitmap: function(maxHeight, newTileName) {
    function drawToBitmap(imgFrame, x, y) {
      var img = game.make.image(0, 0, "wind13", imgFrame);
      tile.draw(img, x, y);
    }
    var tileWidthPx = 391;
    var tileHeightPx = 130;
    var heightCount = Math.floor(maxHeight / tileHeightPx);
    var tile = game.add.bitmapData(tileWidthPx, heightCount * tileHeightPx);
    drawToBitmap(0, 0, 0);
    drawToBitmap(2, 0, (heightCount - 1) * tileHeightPx);
    for (var i = 1; i < heightCount - 1; i++) {
      drawToBitmap(1, 0, i * tileHeightPx);
    }
    if (newTileName != null) {
      game.cache.addBitmapData(newTileName, tile);
    } else {
      return tile;
    }
  },
  create1x3WidthWindowBitmap: function(maxWidth, newTileName) {
    function drawToBitmap(imgFrame, x, y) {
      var img = game.make.image(0, 0, "menuButtonSsheet", imgFrame);
      tile.draw(img, x, y);
    }
    var tileWidthPx = 40;
    var tileHeightPx = 48;
    var widthCount = Math.floor(maxWidth / tileHeightPx);
    var tile = game.add.bitmapData(widthCount * tileWidthPx, tileHeightPx);
    drawToBitmap(0, 0, 0);
    drawToBitmap(2, (widthCount - 1) * tileWidthPx, 0);
    for (var i = 1; i < widthCount - 1; i++) {
      drawToBitmap(1, i * tileWidthPx, 0);
    }
    if (newTileName != null) {
      game.cache.addBitmapData(newTileName, tile);
    } else {
      return tile;
    }
  },
  create3x3WindowBitmap: function(maxWidth, maxHeight, newTileName) {
    function drawToBitmap(imgFrame, x, y) {
      var img = game.make.image(0, 0, "dialogOknoSsheet", imgFrame);
      tile.draw(img, x, y);
    }
    var tileWidthPx = 60;
    var tileHeightPx = 60;
    var widthCount = Math.floor(maxWidth / tileWidthPx);
    var heightCount = Math.floor(maxHeight / tileHeightPx);
    var tile = game.add.bitmapData(widthCount * tileWidthPx, heightCount * tileHeightPx);
    drawToBitmap(0, 0, 0);
    drawToBitmap(2, (widthCount - 1) * tileWidthPx, 0);
    drawToBitmap(6, 0, (heightCount - 1) * tileHeightPx);
    drawToBitmap(8, (widthCount - 1) * tileWidthPx, (heightCount - 1) * tileHeightPx);
    for (var i = 1; i < widthCount - 1; i++) {
      drawToBitmap(1, i * tileWidthPx, 0);
      drawToBitmap(7, i * tileWidthPx, (heightCount - 1) * tileHeightPx);
    }
    for (var i = 1; i < heightCount - 1; i++) {
      drawToBitmap(3, 0, i * tileHeightPx);
      drawToBitmap(5, (widthCount - 1) * tileWidthPx, i * tileHeightPx);
    }
    for (var i = 1; i < heightCount - 1; i++) {
      for (var j = 1; j < widthCount - 1; j++) {
        drawToBitmap(4, j * tileWidthPx, i * tileHeightPx);
      }
    }
    if (newTileName != null) {
      game.cache.addBitmapData(newTileName, tile);
    } else {
      return tile;
    }
  },
  createLevelSelStarBitmap: function(stars, newTileName) {
    var btmp = game.add.bitmapData(game.cache.getImage("playbtnMale").width, game.cache.getImage("playbtnMale").height + 29);
    var btn = game.make.sprite(0, 0, "playbtnMale");
    btn.anchor.set(.5, 0);
    btmp.draw(btn, Math.floor(btmp.width / 2), 0);
    if (stars === -1) {
      var kladkaImg = game.make.sprite(0, 0, "kladka");
      kladkaImg.anchor.set(.5);
      btmp.draw(kladkaImg, Math.floor(btmp.width / 2), Math.floor(game.cache.getImage("playbtnMale").height / 2));
    }
    var starsPosition = [
      [Math.floor(btmp.width / 2) - 26, btn.height - 3, .9],
      [Math.floor(btmp.width / 2), btn.height + 3, 1],
      [Math.floor(btmp.width / 2) + 26, btn.height - 3, .9]
    ];
    var star = game.make.sprite(0, 0, "starSmall", 1);
    for (var s = 0; s < starsPosition.length; s++) {
      if (stars > 0) {
        if (stars - 1 >= s) {
          star.frame = 0;
        } else {
          star.frame = 1;
        }
      }
      star.scale.set(starsPosition[s][2]);
      star.anchor.x = .5;
      btmp.draw(star, starsPosition[s][0], starsPosition[s][1]);
    }
    if (newTileName !== null) {
      game.cache.addBitmapData(newTileName, btmp);
    } else {
      return btmp;
    }
  },
  setNewText: function(textObject, textID, text, anchorX, anchorY) {
    if (textID !== null) {
      textObject.setText(gameTexts.textFromID(textID));
    }
    if (text !== undefined && text !== null) {
      textObject.setText(text);
    }
    if (anchorX === undefined) {
      anchorX = .5;
    }
    if (anchorY === undefined) {
      anchorY = .5;
    }
    setObjectAnchor(textObject, anchorX, anchorY);
  },
  setButtonsInput: function(grp, enabled) {
    var setInput = function(param) {
      param.inputEnabled = false;
      if (param.isClickable == true) {
        param.inputEnabled = enabled;
        param.tint = 16777215;
      }
    };
    var checkChilds = function(parent) {
      for (var i = 0; i < parent.children.length; i++) {
        if (parent.getChildAt(i).dontChangeInput === true) {
          continue;
        }
        setInput(parent.getChildAt(i));
        if (parent.getChildAt(i).children.length > 0) {
          checkChilds(parent.getChildAt(i));
        }
      }
    };
    checkChilds(grp);
  },
  showScreenFromRight: function(grp, clbck, duration, delay, ease) {
    duration = duration || 300;
    delay = delay || 150;
    ease = ease || Phaser.Easing.Linear.None;
    grp.x = game.width;
    var tw = game.add.tween(grp).to({
      x: 0
    }, duration, ease, true, delay);
    tw.onComplete.add(clbck, this);
  },
  hideScreenToRight: function(grp, clbck, duration, delay, ease) {
    duration = duration || 300;
    delay = delay || 150;
    ease = ease || Phaser.Easing.Linear.None;
    grp.x = 0;
    var tw = game.add.tween(grp).to({
      x: game.width
    }, duration, ease, true, delay);
    tw.onComplete.add(clbck, this);
  },
  showScreenFromLeft: function(grp, onCompleteCallEnabled, duration, delay, ease) {
    if (duration === null) {
      duration = 300;
    }
    if (delay === null) {
      delay = 150;
    }
    if (ease === null) {
      ease = Phaser.Easing.Linear.None;
    }
    grp.x = -game.width;
    var tw = game.add.tween(grp).to({
      x: 0
    }, duration, ease, true, delay);
    if (onCompleteCallEnabled === true) {
      tw.onComplete.add(function() {
        grp.openScrOverFunc.call(this);
      }, this);
    }
  },
  hideScreenToLeft: function(grp, onCompleteCallEnabled, duration, delay, ease) {
    if (duration === null) {
      duration = 300;
    }
    if (delay === null) {
      delay = 150;
    }
    if (ease === null) {
      ease = Phaser.Easing.Linear.None;
    }
    grp.x = 0;
    var tw = game.add.tween(grp).to({
      x: -game.width
    }, duration, ease, true, delay);
    if (onCompleteCallEnabled === true) {
      tw.onComplete.add(function() {
        grp.closeScrOverFunc.call(this);
        if (grp.hideOverClbck !== undefined) {
          grp.hideOverClbck.call(this);
        }
      }, this);
    }
  },
  showScreenFromBottom: function(grp, onCompleteCallEnabled, duration, delay, ease) {
    if (duration === null) {
      duration = 300;
    }
    if (delay === null) {
      delay = 150;
    }
    if (ease === null) {
      ease = Phaser.Easing.Linear.None;
    }
    grp.y = game.height;
    var tw = game.add.tween(grp).to({
      y: 0
    }, duration, ease, true, delay);
    if (onCompleteCallEnabled === true) {
      tw.onComplete.add(function() {
        grp.openScrOverFunc.call(this);
      }, this);
    }
  },
  hideScreenToBottom: function(grp, onCompleteCallEnabled, duration, delay, ease) {
    if (duration === null) {
      duration = 300;
    }
    if (delay === null) {
      delay = 150;
    }
    if (ease === null) {
      ease = Phaser.Easing.Linear.None;
    }
    grp.y = 0;
    var tw = game.add.tween(grp).to({
      y: game.height
    }, duration, ease, true, delay);
    if (onCompleteCallEnabled === true) {
      tw.onComplete.add(function() {
        grp.closeScrOverFunc.call(this);
        if (grp.hideOverClbck !== undefined) {
          grp.hideOverClbck.call(this);
        }
      }, this);
    }
  },
  showScreenFromTop: function(grp, onCompleteCallEnabled, duration, delay, ease) {
    if (duration === null) {
      duration = 300;
    }
    if (delay === null) {
      delay = 150;
    }
    if (ease === null) {
      ease = Phaser.Easing.Linear.None;
    }
    grp.y = -game.height;
    grp.visible = true;
    var tw = game.add.tween(grp).to({
      y: 0
    }, duration, ease, true, delay);
    if (onCompleteCallEnabled === true) {
      tw.onComplete.add(function() {
        grp.openScrOverFunc.call(this);
      }, this);
    }
  },
  hideScreenToTop: function(grp, onCompleteCallEnabled, duration, delay, ease) {
    if (duration === null) {
      duration = 300;
    }
    if (delay === null) {
      delay = 150;
    }
    if (ease === null) {
      ease = Phaser.Easing.Linear.None;
    }
    grp.y = 0;
    var tw = game.add.tween(grp).to({
      y: -game.height
    }, duration, ease, true, delay);
    if (onCompleteCallEnabled === true) {
      tw.onComplete.add(function() {
        grp.closeScrOverFunc.call(this);
        if (grp.hideOverClbck !== undefined) {
          grp.hideOverClbck.call(this);
        }
      }, this);
    }
  },
  showScreenAlpha: function(grp, clbck, duration, delay) {
    duration = duration || 300;
    delay = delay || 150;
    grp.alpha = 0;
    var tw = game.add.tween(grp).to({
      alpha: 1
    }, duration, Phaser.Easing.Linear.None, true, delay);
    tw.onComplete.add(clbck, this);
  },
  hideScreenAlpha: function(grp, clbck, duration, delay) {
    duration = duration || 300;
    delay = delay || 150;
    var tw = game.add.tween(grp).to({
      alpha: 0
    }, duration, Phaser.Easing.Linear.None, true, delay);
    tw.onComplete.add(clbck, this);
  },
  showScreenCustomTweens: function(grp) {
    grp.visible = true;
    grp.tweenCallbacksCount = 0;
    for (var i = 0; i < grp.length; i++) {
      if (grp.getChildAt(i).showTW instanceof Array == true) {
        for (var j = 0; j < grp.getChildAt(i).showTW.length; j++) {
          if (grp.getChildAt(i).anim == false) {
            continue;
          }
          grp.getChildAt(i).showTW[j].start();
          if (grp.getChildAt(i).useTweenToFinishiShow != undefined && grp.getChildAt(i).useTweenToFinishiShow === true) {
            grp.tweenCallbacksCount++;
          }
        }
      } else {
        if (grp.getChildAt(i).showTW != undefined && grp.getChildAt(i).anim != false) {
          grp.getChildAt(i).showTW.start();
          if (grp.getChildAt(i).useTweenToFinishiShow != undefined && grp.getChildAt(i).useTweenToFinishiShow === true) {
            grp.tweenCallbacksCount++;
          }
        }
      }
    }
  },
  hideScreenCustomTweens: function(grp) {
    grp.tweenCallbacksCount = 0;
    for (var i = 0; i < grp.length; i++) {
      if (grp.getChildAt(i).hideTW instanceof Array == true) {
        for (var j = 0; j < grp.getChildAt(i).hideTW.length; j++) {
          grp.getChildAt(i).hideTW[j].start();
        }
      } else {
        if (grp.getChildAt(i).hideTW != undefined && grp.getChildAt(i).anim != false) {
          grp.getChildAt(i).hideTW.start();
          grp.tweenCallbacksCount++;
        }
      }
    }
  },
  addShowTween: function(object, tweenObject, prop, duration, easing, delay, useTweenToFinishiShow, callbackOnce, callback, context) {
    var tw = game.add.tween(tweenObject).to(prop, duration, easing, false, delay);
    if (callbackOnce != null) {
      tw.onComplete.addOnce(callbackOnce, context);
    }
    if (callback != null) {
      tw.onComplete.add(callback, context);
    }
    if (object.showTW == undefined) {
      object.showTW = [];
    }
    object.useTweenToFinishiShow = useTweenToFinishiShow;
    object.showTW.push(tw);
    return tw;
  },
  addHideTween: function(object, tweenObject, prop, duration, easing, delay, callbackOnce, callback, context) {
    object.hideTW = game.add.tween(tweenObject).to(prop, duration, easing, false, delay);
    if (callbackOnce != null) {
      object.hideTW.onComplete.addOnce(callbackOnce, context);
    }
    if (callback != null) {
      object.hideTW.onComplete.add(callback, context);
    }
  },
  checkShowScreenOver: function(grp, context) {
    grp.tweenCallbacksCount--;
    if (grp.tweenCallbacksCount < 0) {
      logToConsole("vela show tweenov:", grp.name);
      return;
    }
    if (grp.tweenCallbacksCount == 0) {
      logToConsole("checkShowScreenOver:", grp.name);
      grp.openScrOverFunc.call(context);
    }
  },
  checkHideScreenOver: function(grp, context) {
    grp.tweenCallbacksCount--;
    if (grp.tweenCallbacksCount < 0) {
      logToConsole("vela hide tweenov:", grp.name);
      return;
    }
    if (grp.tweenCallbacksCount == 0) {
      logToConsole("checkHideScreenOver:", grp.name);
      grp.closeScrOverFunc.call(context);
      if (grp.hideOverClbck != undefined) {
        grp.hideOverClbck.call(this);
      }
    }
  },
  shakeScene: function(scene, shakeAmount, delay, shakeLength, callbackOnComplete, callbackOnUpdate) {
    if (scene.isShaking == undefined || scene.isShaking == false) {
      scene.isShaking = true;
      if (shakeAmount === undefined) {
        shakeAmount = 3;
      }
      if (delay === undefined) {
        delay = 0;
      }
      if (shakeLength === undefined) {
        shakeLength = 50;
      }
      if (callbackOnComplete === undefined) {
        callbackOnComplete = null;
      }
      if (callbackOnUpdate === undefined) {
        callbackOnUpdate = null;
      }
      var tween = game.add.tween(scene.position);
      scene.position.orgX = scene.position.x;
      scene.position.orgY = scene.position.y;
      scene.position.shakeAmount = shakeAmount;
      tween.to({
        x: scene.position.x,
        y: scene.position.y
      }, shakeLength, Phaser.Easing.Cubic.InOut, true, delay);
      tween.onUpdateCallback(function(twn, percent, twnData) {
        twn.target.x = twn.target.orgX + getRandomInt(twn.target.shakeAmount);
        twn.target.y = twn.target.orgY + getRandomInt(twn.target.shakeAmount);
        if (this.callbackOnUpdate != null) {
          this.callbackOnUpdate(percent);
        }
      }, {
        callbackOnUpdate: callbackOnUpdate
      });
      tween.onComplete.add(function() {
        this.scene.position.x = this.scene.position.orgX;
        this.scene.position.y = this.scene.position.orgY;
        scene.isShaking = false;
        if (this.callbackOnComplete != null) {
          this.callbackOnComplete();
        }
      }, {
        scene: scene,
        callbackOnComplete: callbackOnComplete
      });
      return tween;
    }
  },
  screenShakeFire: function(duration, strength) {
    this._shakeWorldTime = duration || 20;
    this._shakeWorldMax = strength || 20;
    if (this._boundsCache == null) {
      this._boundsCache = Phaser.Utils.extend(false, {}, game.world.bounds);
    }
    game.world.setBounds(this._boundsCache.x - this._shakeWorldMax, this._boundsCache.y - this._shakeWorldMax, this._boundsCache.width + 2 * this._shakeWorldMax, this._boundsCache.height + 2 * this._shakeWorldMax);
  },
  updateScreenShake: function() {
    if (this._shakeWorldTime > 0) {
      var magnitude = this._shakeWorldTime / this._shakeWorldMax * this._shakeWorldMax;
      var x = game.rnd.integerInRange(-magnitude, magnitude);
      var y = game.rnd.integerInRange(-magnitude, magnitude);
      game.camera.x = x;
      game.camera.y = y;
      this._shakeWorldTime--;
      if (this._shakeWorldTime <= 0) {
        game.world.setBounds(this._boundsCache.x, this._boundsCache.x, this._boundsCache.width, this._boundsCache.height);
        this._boundsCache = null;
      }
    }
  },
  initParticles: function() {
    this.particlesGroup = game.add.group();
  },
  fireParticle: function(x, y, count, particleSprt, scaleFunc) {
    if (count == undefined) {
      count = 1;
    }
    for (var i = 0; i < count; i++) {
      if (this.particlesGroup.countLiving() > 30) {
        return;
      }
      var spriteToReturn = this.particlesGroup.getFirstDead();
      if (spriteToReturn == null) {
        spriteToReturn = this.particlesGroup.create(0, 0, particleSprt);
        setObjectAnchor(spriteToReturn, .5, .5);
        game.physics.enable(spriteToReturn, Phaser.Physics.ARCADE);
      }
      spriteToReturn.loadTexture(particleSprt);
      spriteToReturn.reset(x, y);
      spriteToReturn.angle = Math.floor(Math.random() * 90) - 45;
      spriteToReturn.lifespan = 2500;
      spriteToReturn.rotateStep = Math.floor(Math.random() * 200) / 10 - 10;
      if (scaleFunc !== undefined) {
        spriteToReturn.scale.set(scaleFunc());
      }
      spriteToReturn.angle = Math.floor(Math.random() * 360);
      spriteToReturn.allowGravity = true;
      spriteToReturn.body.gravity.y = 300 + Math.floor(Math.random() * 800);
      var ra1 = Math.floor(Math.random() * 15 + 1) * 25;
      spriteToReturn.body.velocity.y = -ra1;
      var ra = Math.floor(Math.random() * 300) - 150;
      spriteToReturn.body.velocity.x = ra;
      spriteToReturn.revive();
    }
  },
  fireBlockParticle: function(x, y, count) {
    if (count === undefined) {
      count = 1;
    }
    for (var i = 0; i < count; i++) {
      if (this.particlesGroup.countLiving() > 30) {
        return;
      }
      var spriteToReturn = this.particlesGroup.getFirstDead();
      if (spriteToReturn === null) {
        spriteToReturn = this.particlesGroup.create(0, 0);
        setObjectAnchor(spriteToReturn, .5, .5);
        game.physics.enable(spriteToReturn, Phaser.Physics.ARCADE);
      }
      spriteToReturn.loadTexture("blockParticle" + getRandomUIntInRange(1, 3));
      spriteToReturn.reset(x, y);
      spriteToReturn.alpha = getRandomUIntInRange(40, 70) / 100;
      spriteToReturn.angle = Math.floor(Math.random() * 90) - 45;
      spriteToReturn.lifespan = 1100;
      spriteToReturn.rotateStep = Math.floor(Math.random() * 200) / 10 - 10;
      spriteToReturn.scale.set(.3 + Math.floor(Math.random() * 15) / 100);
      spriteToReturn.angle = Math.floor(Math.random() * 360);
      spriteToReturn.allowGravity = true;
      spriteToReturn.body.gravity.y = getRandomUIntInRange(300, 1E3);
      var ra1 = getRandomUIntInRange(1, 4) * 40;
      spriteToReturn.body.velocity.y = -ra1;
      var ra = getRandomUIntInRange(-150, 150);
      spriteToReturn.body.velocity.x = ra;
      game.tweens.removeFrom(spriteToReturn, true);
      game.add.tween(spriteToReturn).to({
        alpha: 0
      }, 600, Phaser.Easing.Linear.None, true, 500);
      spriteToReturn.revive();
    }
  },
  updateParticles: function() {
    this.particlesGroup.forEachAlive(function(particle) {
      particle.angle += particle.rotateStep;
    }, this);
  },
  updateGUITextLanguage: function() {
    this.updateMainMenuScreenTexts();
    this.updateLevelSelectionScreenTexts();
  }
};
var LevelProperties = function() {
  this.totalCols = 0;
  this.totalRows = 0;
  this.world = null;
  this.lvlBgImg = null;
  this.colorsCount = 0;
  this.levelType = null;
  this.useSideSlide = false;
  this._bModeMoves = false;
  this._bModeTime = false;
  this._bModeBlocks = false;
  this._bModeEscape = false;
  this._bModeDownfall = false;
  this._iMoves = 0;
  this._iSeconds = 0;
  this.blocks = null;
  this.flasksSpawners = null;
  this.flasksCount = 0;
  this.pearlsCount = 0;
  this.pearlsInWorld = [];
  this.pearlsSpawnDuringGame = true;
  this.pearls_movesCount = 0;
  this.pearls_movesTillNextSpawn = 0;
  this.scoreMin = 0;
  this.scoreMid = 0;
  this.scoreMax = 0;
};
LevelProperties.prototype = {
  constructor: LevelProperties,
  create: function() {
    this.lvlsDataJSON = game.cache.getJSON("levelsData");
  },
  loadLevel: function(levelNumber) {
    var lvlJson = this.lvlsDataJSON[levelNumber];
    this.world = lvlJson["world"];
    this.totalCols = parseInt(lvlJson["maxCol"]);
    this.totalRows = parseInt(lvlJson["maxRow"]);
    this.useSideSlide = lvlJson["wrap"] === "true";
    this.colorsCount = parseInt(lvlJson["color"]);
    if (this.lvlBgImg !== null) {
      this.lvlBgImg.destroy();
    }
    var lvlBG = game.add.bitmapData(GAME_TILE_WIDTH * this.totalCols + (this.totalCols - 1) * GAME_TILE_OFFSET, GAME_TILE_HEIGHT * this.totalRows + (this.totalRows - 1) * GAME_TILE_OFFSET);
    var bgImg = game.make.sprite(0, 0, "gmTileImg");
    for (var i = 0; i < this.totalRows; i++) {
      for (var j = 0; j < this.totalCols; j++) {
        if (this.world[i * this.totalCols + j] != 0) {
          lvlBG.draw(bgImg, j * (GAME_TILE_WIDTH + GAME_TILE_OFFSET), i * (GAME_TILE_HEIGHT + GAME_TILE_OFFSET));
        }
      }
    }
    this.lvlBgImg = lvlBG;
    bgImg.destroy();
    bgImg = null;
    this._bModeMoves = false;
    this._bModeTime = false;
    this._bModeBlocks = false;
    this._bModeEscape = false;
    this._bModeDownfall = false;
    this.levelType = GAME_TYPE_MOVES;
    this.scoreMin = parseInt(lvlJson["minScore"]);
    this.scoreMid = parseInt(lvlJson["midScore"]);
    this.scoreMax = parseInt(lvlJson["maxScore"]);
    this._iMoves = 0;
    this._iSeconds = 0;
    this.pearlsCount = 0;
    this.pearlsInWorld = [];
    this.pearlsSpawnDuringGame = false;
    this.pearls_movesCount = 0;
    this.pearls_movesTillNextSpawn = 0;
    this.flasksCount = 0;
    this.flasksSpawners = [];
    this.blocks = [];
    if (lvlJson["moveMode"] === "true") {
      this.levelType = GAME_TYPE_MOVES;
      this._bModeMoves = true;
      this._iMoves = parseInt(lvlJson["move"]);
    }
    if (lvlJson["timeMode"] === "true") {
      this.levelType = GAME_TYPE_TIME;
      this._bModeTime = true;
      this._iSeconds = parseInt(lvlJson["time"]);
    }
    if (lvlJson["fallMode"] === "true") {
      this.levelType = GAME_TYPE_PEARLS;
      this._bModeDownfall = true;
      this.pearlsCount = parseInt(lvlJson["croissant"]);
      this.pearlsRestToGenerate = this.pearlsCount;
      this.pearlsInWorld = [];
      this.pearlsSpawnDuringGame = true;
      var aa = lvlJson["balloonsBonus"];
      for (var k = 0; k < aa.length; k++) {
        if (aa[k] === "60") {
          this.pearlsInWorld.push(true);
          this.pearlsSpawnDuringGame = false;
        } else {
          this.pearlsInWorld.push(false);
        }
      }
      if (this.pearlsSpawnDuringGame) {
        this.pearls_movesCount = Math.floor((this._iMoves - 1) / this.pearlsCount);
        this.pearls_movesTillNextSpawn = 1;
      }
    }
    if (lvlJson["escapeMode"] === "true") {
      this.levelType = GAME_TYPE_FLASKS;
      this._bModeEscape = true;
      this.flasksCount = parseInt(lvlJson["escOrFallCount"]);
      this.flasksSpawners = [];
      var aa = lvlJson["vir"];
      for (var k = 0; k < aa.length; k++) {
        if (aa[k] === "100") {
          this.flasksSpawners[k] = 1;
        } else {
          this.flasksSpawners[k] = -1;
        }
      }
    }
    if (lvlJson["blocksMode"] === "true") {
      this.levelType = GAME_TYPE_BLOCKS;
      this._bModeBlocks = true;
      this.blocks = [];
      var aa = lvlJson["block"];
      for (var k = 0; k < aa.length; k++) {
        if (aa[k] === "2") {
          this.blocks[k] = 1;
        } else {
          if (aa[k] === "3") {
            this.blocks[k] = 2;
          } else {
            if (aa[k] === "4") {
              this.blocks[k] = 3;
            } else {
              this.blocks[k] = -1;
            }
          }
        }
      }
    }
  },
  getLevelModes: function(level) {
    var modes = [];
    if (this.lvlsDataJSON[level]["moveMode"] === "true") {
      modes.push("moveMode");
    }
    if (this.lvlsDataJSON[level]["timeMode"] === "true") {
      modes.push("timeMode");
    }
    if (this.lvlsDataJSON[level]["blocksMode"] === "true") {
      modes.push("blocksMode");
    }
    if (this.lvlsDataJSON[level]["escapeMode"] === "true") {
      modes.push("escapeMode");
    }
    if (this.lvlsDataJSON[level]["fallMode"] === "true") {
      modes.push("fallMode");
    }
    return modes;
  },
  getLevelAttribute: function(lvl, attribute) {
    return this.lvlsDataJSON[lvl][attribute];
  },
  _debug_findAllKeys: function() {
    var keysList = [];
    for (var i = 1; i <= 60; i++) {
      var lvlJson = game.cache.getJSON("level" + i);
      for (var key in lvlJson) {
        if (!keysList.contains(key)) {
          keysList.push(key);
        }
      }
    }
  },
  _debug_checkLevelParam: function(param, showEntireList) {
    for (var i = 1; i <= 60; i++) {
      var contentList = [];
      for (var j = 0; j < this.lvlsDataJSON[i][param].length; j++) {
        if (!contentList.contains(this.lvlsDataJSON[i][param][j])) {
          contentList.push(this.lvlsDataJSON[i][param][j]);
        }
      }
      if (showEntireList) {}
    }
  },
  _debug_printRequestedParams: function(params, printOnlyTrue) {
    for (var i = 1; i <= 60; i++) {
      for (var j = 0; j < params.length; j++) {
        if (printOnlyTrue === true && this.lvlsDataJSON[i][params[j]] === "false") {
          continue;
        }
      }
    }
  }
};
var lastUpdateTime = 0;
var currentUpdateTime = 0;
var lastUpdateTimeDif = 0;
var gameTimer = 0;
window.GamePlay = function() {
  this.currentLevel = 0;
  this.currentLevelScore = 0;
  this.currentLevelStars = 0;
  this.scoreInc = 0;
  this.scoreTurnMultiplicator = 0;
  this.levelsProps = null;
  this.gameBoard = [];
  this.blocksGrid = [];
  this.flasksSpawnersList = [];
  this.flasksAdditionInCurrentTurnEnabled = false;
  this.selectedBalloon = null;
  this.selectedBalloonSwapBack = null;
  this.selectedBalloonInitCursorPos = [];
  this.currentAvailableSwaps = [];
  this.currentHintSwapIdx = 0;
  this.wasUserMove = false;
  this.gameOverType = null;
  this.levelsScore = [];
  this.millisSinceLastTouch = 0;
  this.isHappyMoment = false;
  this.isPaused = false;
  this.continueFuncName = null;
  this.timeModeOver = false;
  this.animsManager = new Anims;
};
GamePlay.prototype = {
  constructor: GamePlay,
  preload: function() {
    this.initLevelsScore();
    this.animsManager.preload();
    for (var key in this) {
      if (typeof this[key] === "function") {
        this[key].funcName = key;
      }
    }
  },
  create: function() {
    this.levelsProps = new LevelProperties;
    this.levelsProps.create();
    for (var i = 0; i < GAME_MAX_COLS * GAME_MAX_ROWS; i++) {
      this.getFreeBalloon(0, 0);
    }
    this.killAllGameCharacters();
    this.initBlocks();
    game.input.addMoveCallback(function(pointer, x, y) {
      this.mouseDragged(pointer, x, y);
    }, this);
    currentUpdateTime = (new Date).getTime();
    lastUpdateTimeDif = currentUpdateTime - lastUpdateTime;
    lastUpdateTime = currentUpdateTime;
    this.animsManager.create();
    game.input.onDown.add(function() {
      this.millisSinceLastTouch = 0;
    }, this);
  },
  initLevelsScore: function() {
    for (var i = 0; i < LEVELS_COUNT; i++) {
      if (this.levelsScore[i] === undefined) {
        this.levelsScore[i] = LEVEL_LOCKED;
      }
    }
    if (this.levelsScore[0] === LEVEL_LOCKED) {
      this.levelsScore[0] = LEVEL_UNLOCKED;
    }
  },
  update: function() {
    currentUpdateTime = (new Date).getTime();
    lastUpdateTimeDif = currentUpdateTime - lastUpdateTime;
    lastUpdateTime = currentUpdateTime;
    if (appState !== APP_STATES.GAME_RUNNING) {
      return;
    }
    gameTimer += lastUpdateTimeDif;
    if (this.levelsProps._bModeTime === true && this.timeModeOver === false) {
      this.secondsLeft = this.levelsProps._iSeconds - Math.floor(gameTimer / 1E3);
      if (this.secondsLeft <= 0) {
        this.secondsLeft = 0;
        this.timeModeOver = this.checkGameOver();
      }
      guiManager.setGameScreenLeftIndicator1(this.secondsLeft);
      if (RUNNING_ON_DESKTOP) {
        guiManager.setLeftTimeIco((this.levelsProps._iSeconds - gameTimer / 1E3) / this.levelsProps._iSeconds);
      } else {
        guiManager.setLeftTimeIco(this.secondsLeft / this.levelsProps._iSeconds);
      }
    }
    this.updateFlaskSpawners();
    if (gameState === GAME_STATES.GAME_WAITING_FOR_INPUT) {
      this.millisSinceLastTouch += lastUpdateTimeDif;
      if (this.millisSinceLastTouch > 3E3) {
        this.playBalloonAnim(ANIMS.hint, this.gameBoard[this.currentAvailableSwaps[this.currentHintSwapIdx][0][0]][this.currentAvailableSwaps[this.currentHintSwapIdx][0][1]]);
      }
    }
  },
  prepareNewGame: function() {
    appState = APP_STATES.GAME_START;
    this.clearGamePlayElements();
    this.levelsProps.loadLevel(this.currentLevel);
    guiManager.gameScreenUpdateLevelBoardImage(this.levelsProps.lvlBgImg);
    this.spawnBalloons();
    if (this.levelsProps.levelType === GAME_TYPE_BLOCKS) {
      this.prepareLevelBlocks();
    }
    if (this.levelsProps.levelType === GAME_TYPE_FLASKS) {
      this.prepareFlasksSpawners();
    }
    if (this.levelsProps.levelType === GAME_TYPE_PEARLS) {
      for (var k = 0; k < this.levelsProps.pearlsInWorld.length; k++) {
        if (this.levelsProps.pearlsInWorld[k] === true) {
          this.gameBoard[Math.floor(k / this.levelsProps.totalCols)][k % this.levelsProps.totalCols].updateTile_type_color(null, GAME_BALLOON_TYPE_PEARL);
        }
      }
    }
    gameTimer = 0;
    this.wasUserMove = false;
    if (this.levelsProps._bModeMoves) {
      guiManager.setGameScreenLeftIndicator1(this.levelsProps._iMoves);
    }
    if (this.levelsProps._bModeTime) {
      guiManager.setGameScreenLeftIndicator1(this.levelsProps._iSeconds);
      guiManager.setLeftTimeIco(1);
    }
    if (this.levelsProps._bModeBlocks) {
      guiManager.setGameScreenLeftIndicator2(this.countRestBlocksInGame());
    }
    if (this.levelsProps._bModeEscape) {
      guiManager.setGameScreenLeftIndicator2(this.levelsProps.flasksCount);
    }
    if (this.levelsProps._bModeDownfall) {
      guiManager.setGameScreenLeftIndicator2(this.levelsProps.pearlsCount);
    }
    this.gameOverType = GAME_OVER_WIN;
    this.currentLevelStars = 0;
    this.currentLevelScore = 0;
    this.scoreInc = 0;
    this.scoreTurnMultiplicator = 0;
    this.isHappyMoment = false;
    this.isPaused = false;
    this.timeModeOver = false;
  },
  startGame: function() {
    this.startGameCallback();
  },
  startGameCallback: function() {
    appState = APP_STATES.GAME_RUNNING;
    this.enableUserInput();
    analyticsOnLevelStartEvent(this.currentLevel);
  },
  resetGamePlay: function() {},
  enableUserInput: function() {
    if (this.checkGameOver() === true) {
      return;
    }
    if (this.isHappyMoment === true) {
      return;
    }
    gameState = GAME_STATES.GAME_WAITING_FOR_INPUT;
    this.scoreTurnMultiplicator = 1;
    this.millisSinceLastTouch = 0;
  },
  spawnBalloons: function() {
    do {
      this.killAllGameCharacters();
      this.generateBalloons();
      this.findAllAvailableSwaps();
    } while (this.currentAvailableSwaps.length === 0);
  },
  generateBalloons: function() {
    var getNextRandomColor = function(clmn, rw) {
      var newColor = 0;
      do {
        newColor = getRandomUInt(this.levelsProps.colorsCount);
      } while (clmn >= 2 && this.gameBoard[rw][clmn - 2] !== null && this.gameBoard[rw][clmn - 2] !== GAME_TILE_EMPTY && this.gameBoard[rw][clmn - 2].tileColor === newColor && this.gameBoard[rw][clmn - 1] !== null && this.gameBoard[rw][clmn - 1].tileColor === newColor || rw >= 2 && this.gameBoard[rw - 2][clmn] !== null && this.gameBoard[rw - 2][clmn] !== GAME_TILE_EMPTY && this.gameBoard[rw - 2][clmn].tileColor === newColor && this.gameBoard[rw - 1][clmn] !== null && this.gameBoard[rw - 1][clmn].tileColor ===
        newColor);
      return newColor;
    }.bind(this);
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      this.gameBoard[i] = [];
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        if (this.levelsProps.world[i * this.levelsProps.totalCols + j] != 0) {
          this.setGameBoardTile(j, i, this.getFreeBalloon(j, i, getNextRandomColor(j, i), GAME_BALLOON_TYPE_CLASSIC));
        } else {
          this.setGameBoardTile(j, i, GAME_TILE_EMPTY);
        }
      }
    }
  },
  getFreeBalloon: function(column, row, color, type) {
    var spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.gameCharactersGroup.getFirstDead();
    if (spriteToReturn === null) {
      spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.gameCharactersGroup.create(0, 0);
      setObjectAnchor(spriteToReturn, .5, .5);
      var glow = game.make.sprite(0, 0, "rotGlw");
      glow.anchor.set(.5);
      spriteToReturn.glow = spriteToReturn.addChild(glow);
      spriteToReturn.glow.kill();
      spriteToReturn.glow.startGlow = function() {
        var duration = 1200;
        spriteToReturn.glow.rotation = 0;
        spriteToReturn.glow.scale.set(1.3);
        spriteToReturn.glow.revive();
        spriteToReturn.glow.scale.set(1.2);
        game.add.tween(spriteToReturn.glow.scale).to({
          x: 0,
          y: 0
        }, 150, Phaser.Easing.Linear.None, true, duration - 150);
        spriteToReturn.glow.scale.set(0);
        game.add.tween(spriteToReturn.glow.scale).to({
          x: 1.2,
          y: 1.2
        }, 200, Phaser.Easing.Linear.None, true);
        game.add.tween(spriteToReturn.glow).to({
          rotation: 2
        }, duration, Phaser.Easing.Linear.None, true);
        spriteToReturn.glow.lifespan = duration + 200;
      };
      var characterImg = game.make.sprite(0, 0, "gameCharactersImg", 0);
      setObjectAnchor(characterImg, .5, 1);
      spriteToReturn.characterImg = spriteToReturn.addChild(characterImg);
      spriteToReturn.characterImg.inputEnabled = true;
      spriteToReturn.characterImg.events.onInputDown.add(function() {
        this.tilePressed(spriteToReturn);
      }, this);
      spriteToReturn.characterImg.events.onInputUp.add(function() {
        this.tileReleased(spriteToReturn);
      }, this);
      spriteToReturn.updateTile_type_color = function(tileColor, tileType) {
        if (tileColor === undefined || tileColor === null) {
          tileColor = spriteToReturn.tileColor;
        } else {
          spriteToReturn.tileColor = tileColor;
        }
        if (tileType === undefined || tileType === null) {
          tileType = GAME_BALLOON_TYPE_CLASSIC;
        } else {
          spriteToReturn.tileType = tileType;
        }
        spriteToReturn.scale.set(1);
        var textureKey = "gameCharactersImg";
        if (spriteToReturn.tileType === GAME_BALLOON_TYPE_BOMB) {
          spriteToReturn.glow.startGlow();
          textureKey = "gameCharBomb";
          musicPlayer.playSound("sndBombCreate", .5);
        } else {
          if (spriteToReturn.tileType === GAME_BALLOON_TYPE_BOMBCROSS) {
            spriteToReturn.glow.startGlow();
            textureKey = "gameCharBombCross";
            musicPlayer.playSound("sndBombCreate", .5);
          } else {
            if (spriteToReturn.tileType === GAME_BALLOON_TYPE_FLASK) {
              textureKey = "gameCharFlasks";
            } else {
              if (spriteToReturn.tileType === GAME_BALLOON_TYPE_PEARL) {
                textureKey = "gameCharPearl";
                spriteToReturn.tileColor = null;
                tileColor = null;
              } else {
                if (spriteToReturn.tileType === GAME_BALLOON_TYPE_SPECTRUM) {
                  spriteToReturn.glow.startGlow();
                  textureKey = "gameCharSpectrum";
                  spriteToReturn.tileColor = null;
                  tileColor = null;
                  musicPlayer.playSound("sndBombCreate", .5);
                }
              }
            }
          }
        }
        spriteToReturn.characterImg.loadTexture(textureKey);
        spriteToReturn.characterImg.frame = tileColor;
        spriteToReturn.characterImg.anchor.set(.5, 1);
        spriteToReturn.characterImg.y = spriteToReturn.characterImg.height / 2;
      };
      spriteToReturn.tileType = GAME_BALLOON_TYPE_CLASSIC;
      spriteToReturn.resetPosition = function(clmn, rw) {
        var coord = this.recalc_getRealXYfrom2Dcoord(clmn, rw);
        spriteToReturn.reset(coord[0], coord[1]);
        spriteToReturn.setNewGridPos(clmn, rw);
      }.bind(this);
      spriteToReturn.setNewGridPos = function(clmn, rw) {
        spriteToReturn.COL = clmn;
        spriteToReturn.ROW = rw;
        spriteToReturn.lastUpdateMillis = Date.now();
      }.bind(this);
      spriteToReturn.markToDelete = function() {
        if (spriteToReturn.KIL === true) {
          return;
        }
        if (spriteToReturn.tileType === GAME_BALLOON_TYPE_PEARL) {
          return;
        }
        if (spriteToReturn.tileType === GAME_BALLOON_TYPE_SPECTRUM) {
          return;
        }
        spriteToReturn.KIL = true;
        this.animsManager.playCharacterExplodeAnim(spriteToReturn.ROW, spriteToReturn.COL);
        if (spriteToReturn.tileType === GAME_BALLOON_TYPE_BOMB) {
          var startRow = spriteToReturn.ROW - 1;
          var startCol = spriteToReturn.COL - 1;
          for (var rw = startRow; rw < startRow + 3; rw++) {
            for (var clm = startCol; clm < startCol + 3; clm++) {
              if (this.isBoardTileValid(clm, rw)) {
                this.getGameBoardTile(clm, rw).markToDelete();
              }
            }
          }
          this.animsManager.playBombClassicAnim(spriteToReturn.ROW, spriteToReturn.COL);
          guiManager.screenShakeFire(10, .5);
        } else {
          if (spriteToReturn.tileType === GAME_BALLOON_TYPE_BOMBCROSS) {
            var rw = spriteToReturn.ROW;
            for (var clm = 0; clm < this.levelsProps.totalCols; clm++) {
              if (this.isBoardTileValid(clm, rw)) {
                this.getGameBoardTile(clm, rw).markToDelete();
              }
            }
            var clm = spriteToReturn.COL;
            for (var rw = 0; rw < this.levelsProps.totalRows; rw++) {
              if (this.isBoardTileValid(clm, rw)) {
                this.getGameBoardTile(clm, rw).markToDelete();
              }
            }
            this.animsManager.playCrossAnim(spriteToReturn.ROW, spriteToReturn.COL);
          } else {
            if (spriteToReturn.tileType === GAME_BALLOON_TYPE_CLASSIC) {}
          }
        }
        if (spriteToReturn.tileType === GAME_BALLOON_TYPE_FLASK) {
          this.levelsProps.flasksCount--;
          if (this.levelsProps.flasksCount < 0) {
            this.levelsProps.flasksCount = 0;
          }
          guiManager.setGameScreenLeftIndicator2(this.levelsProps.flasksCount);
        }
      }.bind(this);
    }
    spriteToReturn.updateTile_type_color(color, type);
    spriteToReturn.resetPosition(column, row);
    spriteToReturn.scale.set(1);
    spriteToReturn.KIL = false;
    spriteToReturn.MOV = false;
    spriteToReturn.addScore = true;
    spriteToReturn.waypoints = [];
    spriteToReturn.glow.kill();
    game.tweens.removeFrom(spriteToReturn, true);
    spriteToReturn.animsList = [];
    return spriteToReturn;
  },
  playBalloonAnim: function(anim, sprite) {
    if (this.checkBalloonAnimationsRunning(sprite) === true) {
      return;
    }
    var animObj = anim(sprite);
    var delay = 0;
    if (animObj["delay"] !== undefined) {
      delay = animObj["delay"];
    }
    sprite.animsList = [];
    if (animObj["scale"] !== undefined) {
      sprite.animsList.push(game.add.tween(sprite.scale).to({
        x: animObj.scale.x,
        y: animObj.scale.y
      }, animObj.time, Phaser.Easing.Linear.None, true, delay));
    }
    if (animObj["position"] !== undefined) {
      sprite.animsList.push(game.add.tween(sprite).to({
        x: animObj.position.x,
        y: animObj.position.y
      }, animObj.time, Phaser.Easing.Linear.None, true, delay));
    }
  },
  checkBalloonAnimationsRunning: function(sprite) {
    if (sprite.animsList === undefined) {
      return false;
    }
    for (var j = 0; j < sprite.animsList.length; j++) {
      if (sprite.animsList[j].isRunning === true) {
        return true;
      }
    }
    return false;
  },
  stopAllBalloonsAnim: function() {
    for (var r = 0; r < this.levelsProps.totalRows; r++) {
      for (var c = 0; c < this.levelsProps.totalCols; c++) {
        if (this.isBoardTileValid(c, r)) {
          this.stopBalloonAnim(this.gameBoard[r][c]);
        }
      }
    }
  },
  stopBalloonAnim: function(balloon) {
    if (this.checkBalloonAnimationsRunning(balloon) === false) {
      return;
    }
    if (balloon.animsList.length === 0) {
      return;
    }
    for (var j = 0; j < balloon.animsList.length; j++) {
      balloon.animsList[j].stop();
    }
    balloon.scale.set(1);
    var coord = this.recalc_getRealXYfrom2Dcoord(balloon.COL, balloon.ROW);
    balloon.reset(coord[0], coord[1]);
  },
  _findNewestBalloonInList: function(balloonsList) {
    var newestTime = 0;
    var newestIdx = 0;
    for (var i = 0; i < balloonsList.length; i++) {
      if (balloonsList[i].lastUpdateMillis > newestTime) {
        newestTime = balloonsList[i].lastUpdateMillis;
        newestIdx = i;
      }
    }
    return newestIdx;
  },
  _tileTypeExists: function(tileType) {
    for (var r = 0; r < this.levelsProps.totalRows; r++) {
      for (var c = 0; c < this.levelsProps.totalCols; c++) {
        if (this.gameBoard[r][c] !== null && this.gameBoard[r][c] !== GAME_TILE_EMPTY && this.gameBoard[r][c].tileType == tileType) {
          return true;
        }
      }
    }
    return false;
  },
  tilePressed: function(sprt, pointer) {
    if (appState !== APP_STATES.GAME_RUNNING || gameState !== GAME_STATES.GAME_WAITING_FOR_INPUT) {
      return;
    }
    logToConsole("tile pressed, type: " + GAME_BALLOON_COLLOR_LETTER[sprt.tileColor]);
    this.selectedBalloon = sprt;
    this.selectedBalloonInitCursorPos = [game.input.x, game.input.y];
    guiManager.gameScreenGroup.gameBoardGroup.gameCharactersGroup.bringToTop(sprt);
    this.playBalloonAnim(ANIMS.select, sprt);
    this.playBalloonAnim(ANIMS.touchdown, this.gameBoard[this.currentAvailableSwaps[this.currentHintSwapIdx][0][0]][this.currentAvailableSwaps[this.currentHintSwapIdx][0][1]]);
  },
  tileReleased: function() {
    if (appState !== APP_STATES.GAME_RUNNING || gameState !== GAME_STATES.GAME_WAITING_FOR_INPUT) {
      return;
    }
    logToConsole("tile released");
    this.selectedBalloon = null;
    this.selectedBalloonInitCursorPos = [];
  },
  mouseDragged: function(pointer, x, y) {
    if (appState !== APP_STATES.GAME_RUNNING || gameState !== GAME_STATES.GAME_WAITING_FOR_INPUT || this.selectedBalloon === null) {
      return;
    }
    if (this.levelsProps.levelType === GAME_TYPE_FLASKS) {
      this.flasksAdditionInCurrentTurnEnabled = true;
    }
    var differenceX = this.selectedBalloonInitCursorPos[0] - game.input.x;
    var differenceY = this.selectedBalloonInitCursorPos[1] - game.input.y;
    if (Math.abs(differenceX) < BALLOONS_SWAP_MOUSE_MOVE_OFFSET && Math.abs(differenceY) < BALLOONS_SWAP_MOUSE_MOVE_OFFSET) {
      return false;
    }
    var newCol = this.selectedBalloon.COL;
    var newRow = this.selectedBalloon.ROW;
    if (differenceX <= -BALLOONS_SWAP_MOUSE_MOVE_OFFSET) {
      newCol++;
    }
    if (differenceX >= BALLOONS_SWAP_MOUSE_MOVE_OFFSET) {
      newCol--;
    }
    if (newCol === this.selectedBalloon.COL) {
      if (differenceY <= -BALLOONS_SWAP_MOUSE_MOVE_OFFSET) {
        newRow++;
      }
      if (differenceY >= BALLOONS_SWAP_MOUSE_MOVE_OFFSET) {
        newRow--;
      }
    }
    if (this.isBoardTileValid(newCol, newRow)) {
      this.wasUserMove = true;
      this.animsManager.playCharacterSelectAnim(this.selectedBalloon.ROW, this.selectedBalloon.COL);
      this.animsManager.playCharacterSelectAnim(newRow, newCol);
      this.selectedBalloonSwapBack = {
        col1: this.selectedBalloon.COL,
        row1: this.selectedBalloon.ROW,
        col2: newCol,
        row2: newRow
      };
      this.switchBalloons(this.selectedBalloon.COL, this.selectedBalloon.ROW, newCol, newRow, false, GAME_STATES.CHECK_COMBINATION, this.checkMatches);
      musicPlayer.playSound("sndSwp");
    }
    this.selectedBalloon = null;
    this.selectedBalloonInitCursorPos = [];
  },
  isBoardTileValid: function(col, row) {
    if (row < 0) {
      return false;
    }
    if (col < 0) {
      return false;
    }
    if (row >= this.levelsProps.totalRows) {
      return false;
    }
    if (col >= this.levelsProps.totalCols) {
      return false;
    }
    if (this.getGameBoardTile(col, row) === GAME_TILE_EMPTY) {
      return false;
    }
    if (this.getGameBoardTile(col, row) === null) {
      return false;
    }
    return true;
  },
  isBoardTileEmpty: function(col, row) {
    if (row < 0) {
      return false;
    }
    if (col < 0) {
      return false;
    }
    if (row >= this.levelsProps.totalRows) {
      return false;
    }
    if (col >= this.levelsProps.totalCols) {
      return false;
    }
    if (this.gameBoard[row][col] === GAME_TILE_EMPTY) {
      return true;
    }
    return false;
  },
  isBoardTileNULL: function(col, row) {
    if (row < 0) {
      return false;
    }
    if (col < 0) {
      return false;
    }
    if (row >= this.levelsProps.totalRows) {
      return false;
    }
    if (col >= this.levelsProps.totalCols) {
      return false;
    }
    if (this.gameBoard[row][col] === GAME_TILE_EMPTY) {
      return false;
    }
    if (this.gameBoard[row][col] === null) {
      return true;
    }
    return false;
  },
  getGameBoardTile: function(col, row) {
    if (row < 0) {
      return null;
    }
    if (col < 0) {
      return null;
    }
    if (row >= this.levelsProps.totalRows) {
      return null;
    }
    if (col >= this.levelsProps.totalCols) {
      return null;
    }
    if (this.gameBoard[row][col] === GAME_TILE_EMPTY) {
      return null;
    }
    return this.gameBoard[row][col];
  },
  setGameBoardTile: function(col, row, newTile) {
    if (row < 0) {
      return;
    }
    if (col < 0) {
      return;
    }
    if (row >= this.levelsProps.totalRows) {
      return;
    }
    if (col >= this.levelsProps.totalCols) {
      return;
    }
    if (this.gameBoard[row][col] === GAME_TILE_EMPTY) {
      return;
    }
    this.gameBoard[row][col] = newTile;
  },
  checkAvailableSwaps: function() {
    this.findAllAvailableSwaps();
    logToConsole("pocet dalsich swapov:", this.currentAvailableSwaps.length);
    if (this.currentAvailableSwaps.length === 0) {
      this.reshuffleBalloons();
      return;
    }
    if (this.levelsProps.levelType === GAME_TYPE_FLASKS && this.flasksAdditionInCurrentTurnEnabled === true) {
      this.flasksAdditionInCurrentTurnEnabled = false;
      this.moveFlasksUp();
    } else {
      if (this.levelsProps.levelType === GAME_TYPE_PEARLS) {
        this.checkPearlsDown();
      } else {
        this.enableUserInput();
      }
    }
  },
  reshuffleBalloons: function() {
    gameState = GAME_STATES.NO_MORE_MOVES;
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    this.animsManager.showMessage(MESSAGE_TYPE.NO_MORE_MOVES);
    var tilesToReshuffle = [];
    for (var r = 0; r < this.levelsProps.totalRows; r++) {
      for (var c = 0; c < this.levelsProps.totalCols; c++) {
        if (this.gameBoard[r][c] !== GAME_TILE_EMPTY) {
          if (this.gameBoard[r][c].tileType === GAME_BALLOON_TYPE_PEARL || this.gameBoard[r][c].tileType === GAME_BALLOON_TYPE_FLASK) {
            continue;
          }
          tilesToReshuffle.push(this.gameBoard[r][c]);
          this.gameBoard[r][c] = null;
        }
      }
    }
    for (var k = 0; k < tilesToReshuffle.length; k++) {
      var balloon = tilesToReshuffle[k];
      do {
        var newRow = getRandomUIntInRange(0, this.levelsProps.totalRows - 1);
        var newCol = getRandomUIntInRange(0, this.levelsProps.totalCols - 1);
      } while (this.gameBoard[newRow][newCol] !== null);
      this.gameBoard[newRow][newCol] = balloon;
      balloon.ROW = newRow;
      balloon.COL = newCol;
    }
    for (var k = 0; k < tilesToReshuffle.length; k++) {
      var balloon = tilesToReshuffle[k];
      var newPos = this.recalc_getRealXYfrom2Dcoord(balloon.COL, balloon.ROW);
      var twn = game.add.tween(balloon).to({
        x: newPos[0],
        y: newPos[1]
      }, 400 + getRandomUIntInRange(0, 300), Phaser.Easing.Sinusoidal.Out, true, 400 + getRandomUIntInRange(0, 300));
      twn.onComplete.add(this.reshuffleBalloonsTweenOver, this);
      balloon.MOV = true;
    }
  },
  reshuffleBalloonsTweenOver: function(sprt, twn) {
    sprt.MOV = false;
    if (this.stillMovingBalloons()) {
      return;
    }
    this.reshuffleBalloonsOver();
  },
  reshuffleBalloonsOver: function() {
    this.checkMatches();
  },
  switchBalloons: function(COL1, ROW1, COL2, ROW2, skipAnimation, overState, overFunc) {
    this.switchBaloonsOverState = overState;
    this.switchBaloonsOverFunc = overFunc;
    gameState = GAME_STATES.SWITCH_BALLOONS;
    skipAnimation = skipAnimation || false;
    if (this.isBoardTileValid(COL2, ROW2) === false) {
      return false;
    }
    var bln1 = this.getGameBoardTile(COL1, ROW1);
    var bln2 = this.getGameBoardTile(COL2, ROW2);
    this.stopBalloonAnim(bln1);
    this.stopBalloonAnim(bln2);
    bln1.setNewGridPos(COL2, ROW2);
    this.setGameBoardTile(COL1, ROW1, bln2);
    bln2.setNewGridPos(COL1, ROW1);
    this.setGameBoardTile(COL2, ROW2, bln1);
    if (!skipAnimation) {
      game.tweens.removeFrom(bln1, true);
      game.tweens.removeFrom(bln2, true);
      var newCoord = this.recalc_getRealXYfrom2Dcoord(COL2, ROW2);
      bln1.MOV = true;
      var tween_b1 = game.add.tween(bln1.position).to({
        x: newCoord[0],
        y: newCoord[1]
      }, CHARACTER_TIME_MOVEMENT_PER_GAMETILE, Phaser.Easing.Linear.In, true, 0);
      tween_b1.onComplete.add(function() {
        this.baloonSwitchTweenOver(bln1);
      }, this);
      bln2.MOV = true;
      newCoord = this.recalc_getRealXYfrom2Dcoord(COL1, ROW1);
      var tween_b2 = game.add.tween(bln2.position).to({
        x: newCoord[0],
        y: newCoord[1]
      }, CHARACTER_TIME_MOVEMENT_PER_GAMETILE, Phaser.Easing.Linear.In, true, 0);
      tween_b2.onComplete.add(function() {
        this.baloonSwitchTweenOver(bln2);
      }, this);
    } else {
      newCoord = this.recalc_getRealXYfrom2Dcoord(COL2, ROW2);
      bln1.x = newCoord[0];
      bln1.y = newCoord[1];
      newCoord = this.recalc_getRealXYfrom2Dcoord(COL1, ROW1);
      bln2.x = newCoord[0];
      bln2.y = newCoord[1];
    }
    return true;
  },
  baloonSwitchTweenOver: function(balloon) {
    balloon.MOV = false;
    if (this.stillMovingBalloons()) {
      return;
    }
    this.baloonsSwitchOver();
  },
  baloonsSwitchOver: function() {
    if (this.switchBaloonsOverState !== null) {
      gameState = this.switchBaloonsOverState;
      this.switchBaloonsOverState = null;
    }
    if (this.switchBaloonsOverFunc !== null) {
      var fnc = this.switchBaloonsOverFunc;
      this.switchBaloonsOverFunc = null;
      fnc.call(this);
    }
  },
  checkMatches: function() {
    if (this.stillMovingBalloons()) {
      return;
    }
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    logToConsole("check combination");
    gameState = GAME_STATES.CHECK_COMBINATION;
    if (this.selectedBalloonSwapBack !== null) {
      var foundSpectrum = this._balloonSwitchIsAtLeastOneBalloonSpectrum(this.gameBoard[this.selectedBalloonSwapBack.row1][this.selectedBalloonSwapBack.col1], this.gameBoard[this.selectedBalloonSwapBack.row2][this.selectedBalloonSwapBack.col2]);
      if (foundSpectrum !== false) {
        if (foundSpectrum === 0 && this.gameBoard[this.selectedBalloonSwapBack.row2][this.selectedBalloonSwapBack.col2].tileType === GAME_BALLOON_TYPE_PEARL || foundSpectrum === 1 && this.gameBoard[this.selectedBalloonSwapBack.row1][this.selectedBalloonSwapBack.col1].tileType === GAME_BALLOON_TYPE_PEARL) {} else {
          this.stopAllBalloonsAnim();
          this.removeSpectrum(foundSpectrum, [this.gameBoard[this.selectedBalloonSwapBack.row1][this.selectedBalloonSwapBack.col1], this.gameBoard[this.selectedBalloonSwapBack.row2][this.selectedBalloonSwapBack.col2]]);
          this.selectedBalloonSwapBack = null;
          this.decrementMoves();
          return;
        }
      }
      var bonusBombsConnected = this._balloonSwitchAreBothBalloonsBonus(this.gameBoard[this.selectedBalloonSwapBack.row1][this.selectedBalloonSwapBack.col1], this.gameBoard[this.selectedBalloonSwapBack.row2][this.selectedBalloonSwapBack.col2]);
      if (bonusBombsConnected !== false) {
        this.stopAllBalloonsAnim();
        this.gameBoard[this.selectedBalloonSwapBack.row1][this.selectedBalloonSwapBack.col1].addScore = false;
        this.gameBoard[this.selectedBalloonSwapBack.row2][this.selectedBalloonSwapBack.col2].addScore = false;
        if (bonusBombsConnected === true) {
          this.gameBoard[this.selectedBalloonSwapBack.row1][this.selectedBalloonSwapBack.col1].markToDelete();
          this.gameBoard[this.selectedBalloonSwapBack.row2][this.selectedBalloonSwapBack.col2].markToDelete();
        } else {
          if (bonusBombsConnected === GAME_BALLOON_TYPE_BOMB) {
            this.bombClassic2combination(this.selectedBalloonSwapBack.row2, this.selectedBalloonSwapBack.col2);
          } else {
            if (bonusBombsConnected === GAME_BALLOON_TYPE_BOMBCROSS) {
              this.bombCross2combination(this.selectedBalloonSwapBack.row2, this.selectedBalloonSwapBack.col2);
            }
          }
        }
        this.scoreIncrement(SCORE_SYSTEM._iScoreBombsCombination, true, this.selectedBalloonSwapBack.row2, this.selectedBalloonSwapBack.col2, this.selectedBalloonSwapBack.tileColor);
        this.removeMarkedBalloons();
        this.selectedBalloonSwapBack = null;
        this.decrementMoves();
        return;
      }
    }
    var foundChains = this.findChains();
    if (foundChains.length > 0) {
      this.stopAllBalloonsAnim();
      this.removeChains(foundChains);
      this.selectedBalloonSwapBack = null;
      this.scoreTurnMultiplicator += 1;
      this.decrementMoves();
      return;
    } else {
      if (this.selectedBalloonSwapBack !== null) {
        musicPlayer.playSound("sndSwpB");
        this.switchBalloons(this.selectedBalloonSwapBack.col2, this.selectedBalloonSwapBack.row2, this.selectedBalloonSwapBack.col1, this.selectedBalloonSwapBack.row1, false, null, this.enableUserInput);
        this.selectedBalloonSwapBack = null;
        return;
      }
    }
    this.checkAvailableSwaps();
  },
  bombCross2combination: function(row, col) {
    var removeRows = [row - 1, row, row + 1];
    var removeCols = [col - 1, col, col + 1];
    for (var r = 0; r < removeRows.length; r++) {
      var rw = removeRows[r];
      for (var clm = 0; clm < this.levelsProps.totalCols; clm++) {
        if (this.isBoardTileValid(clm, rw)) {
          this.getGameBoardTile(clm, rw).markToDelete();
        }
      }
    }
    for (var c = 0; c < removeCols.length; c++) {
      var clm = removeCols[c];
      for (var rw = 0; rw < this.levelsProps.totalRows; rw++) {
        if (this.isBoardTileValid(clm, rw)) {
          this.getGameBoardTile(clm, rw).markToDelete();
        }
      }
    }
  },
  bombClassic2combination: function(row, col) {
    var startRow = row - 2;
    var startCol = col - 2;
    for (var rw = startRow; rw < startRow + 5; rw++) {
      for (var clm = startCol; clm < startCol + 5; clm++) {
        if (this.isBoardTileValid(clm, rw)) {
          this.getGameBoardTile(clm, rw).markToDelete();
        }
      }
    }
  },
  decrementMoves: function() {
    if (this.wasUserMove === false) {
      return;
    }
    this.wasUserMove = false;
    if (this.levelsProps._bModeMoves === true) {
      this.levelsProps._iMoves--;
      if (this.levelsProps._iMoves < 0) {
        this.levelsProps._iMoves = 0;
      }
      logToConsole("zvysne tahy:", this.levelsProps._iMoves);
      guiManager.setGameScreenLeftIndicator1(this.levelsProps._iMoves);
      if (this.levelsProps.levelType === GAME_TYPE_PEARLS && this.levelsProps.pearlsSpawnDuringGame === true) {
        this.levelsProps.pearls_movesTillNextSpawn--;
      }
    }
  },
  _balloonSwitchAreBothBalloonsBonus: function(bln1, bln2) {
    if (bln1.tileType === GAME_BALLOON_TYPE_BOMBCROSS && bln2.tileType === GAME_BALLOON_TYPE_BOMBCROSS) {
      return GAME_BALLOON_TYPE_BOMBCROSS;
    }
    if (bln1.tileType === GAME_BALLOON_TYPE_BOMB && bln2.tileType === GAME_BALLOON_TYPE_BOMB) {
      return GAME_BALLOON_TYPE_BOMB;
    }
    if ((bln1.tileType === GAME_BALLOON_TYPE_BOMBCROSS || bln1.tileType === GAME_BALLOON_TYPE_BOMB) && (bln2.tileType === GAME_BALLOON_TYPE_BOMBCROSS || bln2.tileType === GAME_BALLOON_TYPE_BOMB)) {
      return true;
    }
    return false;
  },
  _balloonSwitchIsAtLeastOneBalloonSpectrum: function(bln1, bln2) {
    if (bln1.tileType === GAME_BALLOON_TYPE_SPECTRUM && bln2.tileType === GAME_BALLOON_TYPE_SPECTRUM) {
      return 2;
    }
    if (bln1.tileType === GAME_BALLOON_TYPE_SPECTRUM) {
      return 0;
    } else {
      if (bln2.tileType === GAME_BALLOON_TYPE_SPECTRUM) {
        return 1;
      }
    }
    return false;
  },
  removeSpectrum: function(spectrumIdx, balloonsList) {
    if (spectrumIdx === 2) {
      for (var i = 0; i < this.levelsProps.totalRows; i++) {
        for (var j = 0; j < this.levelsProps.totalCols; j++) {
          if (this.isBoardTileValid(j, i)) {
            var bln = this.gameBoard[i][j];
            bln.markToDelete();
          }
        }
      }
      balloonsList[0].KIL = true;
      balloonsList[1].KIL = true;
      this.removeMarkedBalloons();
      musicPlayer.playSound("spectFlame");
    } else {
      var otherBalloonIdx = spectrumIdx === 0 ? 1 : 0;
      var otherBalloonColor = balloonsList[otherBalloonIdx].tileColor;
      var otherBalloonType = balloonsList[otherBalloonIdx].tileType;
      var balloonsToRemove = [];
      for (var i = 0; i < this.levelsProps.totalRows; i++) {
        for (var j = 0; j < this.levelsProps.totalCols; j++) {
          if (this.isBoardTileValid(j, i)) {
            var bln = this.gameBoard[i][j];
            if (bln.tileColor === otherBalloonColor) {
              if (otherBalloonType === GAME_BALLOON_TYPE_BOMB) {
                bln.tileType = GAME_BALLOON_TYPE_BOMB;
              }
              if (otherBalloonType === GAME_BALLOON_TYPE_BOMBCROSS) {
                bln.tileType = GAME_BALLOON_TYPE_BOMBCROSS;
              }
              balloonsToRemove.push([bln.ROW, bln.COL]);
              this.animsManager.playSpectrumAnim(balloonsList[spectrumIdx].x, balloonsList[spectrumIdx].y, bln.x, bln.y);
            }
          }
        }
      }
      balloonsList[spectrumIdx].KIL = true;
      game.time.events.add(500, function() {
        for (var m = 0; m < balloonsToRemove.length; m++) {
          this.gameBoard[balloonsToRemove[m][0]][balloonsToRemove[m][1]].markToDelete();
        }
        this.removeMarkedBalloons();
        musicPlayer.playSound("spectFlame");
      }, this);
    }
  },
  removeChains: function(chains) {
    gameState = GAME_STATES.REMOVE_BALLOONS;
    var foundChains = {};
    var generateSpecialBalloons = [];
    for (var i = 0; i < chains.length; i++) {
      if (foundChains[chains[i][0].tileColor] === undefined) {
        foundChains[chains[i][0].tileColor] = [];
      }
      foundChains[chains[i][0].tileColor].push(chains[i]);
    }
    for (var colorKeys in foundChains) {
      if (foundChains[colorKeys].length > 1) {
        for (var i = 0; i < foundChains[colorKeys].length; i++) {
          for (var j = i + 1; j < foundChains[colorKeys].length; j++) {
            for (var k = 0; k < foundChains[colorKeys][i].length; k++) {
              for (var l = 0; l < foundChains[colorKeys][j].length; l++) {
                if (foundChains[colorKeys][i][k].ROW === foundChains[colorKeys][j][l].ROW && foundChains[colorKeys][i][k].COL === foundChains[colorKeys][j][l].COL) {
                  foundChains[colorKeys][i].isPartOfKombo = true;
                  foundChains[colorKeys][j].isPartOfKombo = true;
                  logToConsole("------------\x3e generujem krizovu bombu na riadok/stlpec:", foundChains[colorKeys][i][k].ROW, foundChains[colorKeys][i][k].COL);
                  generateSpecialBalloons.push({
                    "ROW": foundChains[colorKeys][i][k].ROW,
                    "COL": foundChains[colorKeys][i][k].COL,
                    "type": GAME_BALLOON_TYPE_BOMBCROSS
                  });
                }
              }
            }
          }
        }
      }
    }
    for (var i = 0; i < chains.length; i++) {
      var chain = chains[i];
      if (chain.isPartOfKombo !== true) {
        if (chain.length >= 5) {
          var idx = this._findNewestBalloonInList(chain);
          logToConsole("------------\x3e generujem spektrum na riadok/stlpec:", chain[idx].ROW, chain[idx].COL);
          generateSpecialBalloons.push({
            "ROW": chain[idx].ROW,
            "COL": chain[idx].COL,
            "type": GAME_BALLOON_TYPE_SPECTRUM
          });
        } else {
          if (chain.length === 4) {
            var idx = this._findNewestBalloonInList(chain);
            logToConsole("------------\x3e generujem bombu na riadok/stlpec:", chain[idx].ROW, chain[idx].COL);
            generateSpecialBalloons.push({
              "ROW": chain[idx].ROW,
              "COL": chain[idx].COL,
              "type": GAME_BALLOON_TYPE_BOMB
            });
          }
        }
      }
      for (var j = 0; j < chain.length; j++) {
        chain[j].markToDelete();
      }
    }
    for (var i = 0; i < generateSpecialBalloons.length; i++) {
      var specialBalParam = generateSpecialBalloons[i];
      this.gameBoard[specialBalParam["ROW"]][specialBalParam["COL"]].updateTile_type_color(null, specialBalParam["type"]);
      this.gameBoard[specialBalParam["ROW"]][specialBalParam["COL"]].KIL = false;
      if (this.levelsProps.levelType === GAME_TYPE_BLOCKS) {
        if (this.blockExplode(specialBalParam["ROW"], specialBalParam["COL"]) === true) {
          this.scoreIncrement(SCORE_SYSTEM._iScoreBlock, false);
        }
      }
    }
    this.removeMarkedBalloons();
  },
  dropDownBalloons: function() {
    gameState = GAME_STATES.DROPDOWN_BALLOONS;
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    var odpalujemNieco = false;
    for (var j = 0; j < this.levelsProps.totalCols; j++) {
      var clmnMoveCnt = 0;
      for (var i = this.levelsProps.totalRows - 1; i >= 0; i--) {
        if (this.gameBoard[i][j] === null) {
          for (var lookupRow = i - 1; lookupRow >= 0; lookupRow--) {
            if (this.gameBoard[lookupRow][j] !== null) {
              if (this.gameBoard[lookupRow][j] === GAME_TILE_EMPTY) {
                if (this.levelsProps.useSideSlide === true) {
                  break;
                } else {
                  continue;
                }
              }
              this.gameBoard[i][j] = this.gameBoard[lookupRow][j];
              this.gameBoard[lookupRow][j] = null;
              this.gameBoard[i][j].setNewGridPos(j, i);
              var bln = this.gameBoard[i][j];
              var distance = Math.abs(lookupRow - i);
              var newCoord = this.recalc_getRealXYfrom2Dcoord(j, i);
              bln.MOV = true;
              var twn = game.add.tween(bln).to({
                x: newCoord[0],
                y: newCoord[1]
              }, distance * CHARACTER_TIME_MOVEMENT_PER_GAMETILE, Phaser.Easing.Linear.In, true, clmnMoveCnt * 30);
              twn.onComplete.add(this.dropDownBalloonsTweenOver, this);
              clmnMoveCnt++;
              odpalujemNieco = true;
              break;
            }
          }
        }
      }
    }
    if (odpalujemNieco === false) {
      this.dropDownBalloonsOver();
    }
  },
  dropDownBalloonsTweenOver: function(sprt, twn) {
    sprt.MOV = false;
    if (this.stillMovingBalloons()) {
      return;
    }
    this.dropDownBalloonsOver();
  },
  dropDownBalloonsOver: function() {
    if (this.levelsProps.useSideSlide === true) {
      this.sideSlideBalloons();
    } else {
      this.addNewBalloons();
    }
  },
  sideSlideBalloons: function() {
    gameState = GAME_STATES.SIDE_SLIDE;
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    this.wasSideSlide = false;
    for (var i = this.levelsProps.totalRows - 2; i >= 0; i--) {
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        if (this.gameBoard[i][j] !== null && this.gameBoard[i][j] !== GAME_TILE_EMPTY) {
          if (this.isBoardTileEmpty(j - 1, i) && this.isBoardTileNULL(j - 1, i + 1)) {
            this._moveBalloon(j, i, j - 1, i + 1, this.sideSlideBalloonsTweenOver, this);
            this.wasSideSlide = true;
          } else {
            if (this.isBoardTileEmpty(j + 1, i) && this.isBoardTileNULL(j + 1, i + 1)) {
              this._moveBalloon(j, i, j + 1, i + 1, this.sideSlideBalloonsTweenOver, this);
              this.wasSideSlide = true;
            } else {
              if (this.isBoardTileEmpty(j, i + 1)) {
                if (this.isBoardTileNULL(j - 1, i + 1)) {
                  this._moveBalloon(j, i, j - 1, i + 1, this.sideSlideBalloonsTweenOver, this);
                  this.wasSideSlide = true;
                } else {
                  if (this.isBoardTileNULL(j + 1, i + 1)) {
                    this._moveBalloon(j, i, j + 1, i + 1, this.sideSlideBalloonsTweenOver, this);
                    this.wasSideSlide = true;
                  }
                }
              }
            }
          }
        }
      }
    }
    if (this.wasSideSlide === false) {
      this.sideSlideBalloonsOver();
    }
  },
  _moveBalloon: function(oldColumn, oldRow, newColumn, newRow, onCompleteCallback, onCompleteContext) {
    logToConsole("posuvam z: column", oldColumn, "row:", oldRow, "do: column:", newColumn, "row:", newRow);
    this.gameBoard[newRow][newColumn] = this.gameBoard[oldRow][oldColumn];
    this.gameBoard[oldRow][oldColumn] = null;
    this.gameBoard[newRow][newColumn].setNewGridPos(newColumn, newRow);
    var bln = this.gameBoard[newRow][newColumn];
    var newCoord = this.recalc_getRealXYfrom2Dcoord(newColumn, newRow);
    bln.MOV = true;
    var twn = game.add.tween(bln).to({
      x: newCoord[0],
      y: newCoord[1]
    }, CHARACTER_TIME_MOVEMENT_PER_GAMETILE, Phaser.Easing.Linear.In, true, 0);
    twn.onComplete.add(onCompleteCallback, onCompleteContext);
  },
  sideSlideBalloonsTweenOver: function(sprt, twn) {
    sprt.MOV = false;
    if (this.stillMovingBalloons()) {
      return;
    }
    this.sideSlideBalloonsOver();
  },
  sideSlideBalloonsOver: function() {
    if (this.wasSideSlide === true) {
      this.dropDownBalloons();
    } else {
      this.addNewBalloons();
    }
  },
  addNewBalloons: function() {
    gameState = GAME_STATES.ADD_NEW_BALLOONS;
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    this.balloonsWereAdded = false;
    for (var j = 0; j < this.levelsProps.totalCols; j++) {
      var newBalloonColor = getRandomUInt(this.levelsProps.colorsCount);
      var columnBalloonsToAdd = [];
      for (var i = 0; i < this.levelsProps.totalRows; i++) {
        if (this.levelsProps.useSideSlide === true && this.gameBoard[i][j] === GAME_TILE_EMPTY) {
          break;
        }
        if (this.gameBoard[i][j] === null) {
          var blnColor;
          do {
            blnColor = getRandomUInt(this.levelsProps.colorsCount);
          } while (blnColor === newBalloonColor);
          newBalloonColor = blnColor;
          var newBln = this.getFreeBalloon(j, -1, blnColor, GAME_BALLOON_TYPE_CLASSIC);
          this.balloonsWereAdded = true;
          if (this.levelsProps.levelType === GAME_TYPE_PEARLS && this.levelsProps.pearlsSpawnDuringGame === true) {
            if (this.levelsProps.pearls_movesTillNextSpawn === 0 && this.levelsProps.pearlsRestToGenerate > 0) {
              this.levelsProps.pearls_movesTillNextSpawn = this.levelsProps.pearls_movesCount;
              this.levelsProps.pearlsRestToGenerate--;
              newBln.updateTile_type_color(null, GAME_BALLOON_TYPE_PEARL);
            }
          }
          newBln.scale.set(0, 1);
          var distance = Math.abs(1 + i);
          var newCoord = this.recalc_getRealXYfrom2Dcoord(j, i);
          newBln.MOV = true;
          columnBalloonsToAdd.push([newBln, newCoord, distance]);
          this.gameBoard[i][j] = newBln;
          this.gameBoard[i][j].setNewGridPos(j, i);
        }
      }
      for (var k = 0; k < columnBalloonsToAdd.length; k++) {
        var item = columnBalloonsToAdd[k];
        var twn = game.add.tween(item[0]).to({
          x: item[1][0],
          y: item[1][1]
        }, item[2] * CHARACTER_TIME_MOVEMENT_PER_GAMETILE, Phaser.Easing.Linear.In, true, (columnBalloonsToAdd.length - k - 1) * CHARACTER_TIME_MOVEMENT_PER_GAMETILE);
        game.add.tween(item[0].scale).to({
          x: 1
        }, 100, Phaser.Easing.Linear.In, true, (columnBalloonsToAdd.length - k - 1) * CHARACTER_TIME_MOVEMENT_PER_GAMETILE);
        twn.onComplete.add(this.addNewBalloonsTweenOver, this);
      }
    }
    if (this.balloonsWereAdded === false) {
      this.addNewBalloonsOver();
    }
  },
  addNewBalloonsTweenOver: function(sprt, twn) {
    sprt.MOV = false;
    if (this.stillMovingBalloons()) {
      return;
    }
    this.addNewBalloonsOver();
  },
  addNewBalloonsOver: function() {
    logToConsole("dopridavane");
    if (this.levelsProps.useSideSlide === true && this.balloonsWereAdded === true) {
      this.sideSlideBalloons();
    } else {
      this.checkMatches();
    }
  },
  removeMarkedBalloons: function() {
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    var removeBal = function(row, clmn) {
      if (this.isBoardTileValid(clmn, row) && this.gameBoard[row][clmn].KIL === true) {
        var score = 0;
        var showScore = false;
        if (this.levelsProps.levelType === GAME_TYPE_BLOCKS) {
          if (this.blockExplode(row, clmn) === true) {
            score += SCORE_SYSTEM._iScoreBlock;
          }
        }
        var bln = this.gameBoard[row][clmn];
        this.gameBoard[row][clmn] = null;
        if (bln.tileType === GAME_BALLOON_TYPE_BOMB) {
          if (bln.addScore === true) {
            score += SCORE_SYSTEM._iScoreBomb;
            showScore = true;
          }
        } else {
          if (bln.tileType === GAME_BALLOON_TYPE_BOMBCROSS) {
            if (bln.addScore === true) {
              score += SCORE_SYSTEM._iScoreBombCross;
              showScore = true;
            }
          } else {
            if (bln.tileType === GAME_BALLOON_TYPE_CLASSIC) {
              score += SCORE_SYSTEM._iScoreJewel * this.scoreTurnMultiplicator;
              showScore = true;
            } else {
              if (bln.tileType === GAME_BALLOON_TYPE_FLASK) {
                score += SCORE_SYSTEM._iScoreEscape;
                showScore = true;
              }
            }
          }
        }
        if (score > 0) {
          this.scoreIncrement(score, showScore, bln.ROW, bln.COL, bln.tileColor);
        }
        musicPlayer.playSound("sndExpl" + getRandomUIntInRange(1, 5));
        this.removeBalloonTweenOver(bln);
      }
    }.bind(this);
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        removeBal(i, j);
      }
    }
  },
  removeBalloonTweenOver: function(bln) {
    bln.KIL = false;
    bln.kill();
    var balloonsAllRemovedTwnFinished = function() {
      for (var i = 0; i < guiManager.gameScreenGroup.gameBoardGroup.gameCharactersGroup.length; i++) {
        var bln = guiManager.gameScreenGroup.gameBoardGroup.gameCharactersGroup.getChildAt(i);
        if (bln !== null && bln.KIL === true) {
          return true;
        }
      }
      return false;
    };
    if (balloonsAllRemovedTwnFinished() === true) {
      return;
    }
    game.time.events.add(250, function() {
      this.removeBalloonsOver();
    }, this);
  },
  removeBalloonsOver: function() {
    this.dropDownBalloons();
  },
  findChains: function() {
    var chains = [];
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      for (var j = 0; j < this.levelsProps.totalCols - 2;) {
        var bal = this.gameBoard[i][j];
        if (bal !== null) {
          var chainList = this._findHorizontalChainHelper(bal);
          if (chainList.length >= 3) {
            chains.push(chainList);
          }
          j += chainList.length;
        } else {
          j += 1;
        }
      }
    }
    for (var j = 0; j < this.levelsProps.totalCols; j++) {
      for (var i = 0; i < this.levelsProps.totalRows - 2;) {
        var bal = this.gameBoard[i][j];
        if (bal !== null) {
          var chainList = this._findVerticalChainHelper(bal);
          if (chainList.length >= 3) {
            chains.push(chainList);
          }
          i += chainList.length;
        } else {
          i += 1;
        }
      }
    }
    logToConsole("found chains:", chains);
    return chains;
  },
  _findHorizontalChainHelper: function(balloon) {
    var currentColor = balloon.tileColor;
    var currentType = balloon.tileType;
    var chain = [];
    chain.push(balloon);
    var clmn = balloon.COL;
    var row = balloon.ROW;
    for (var i = clmn + 1; i < this.levelsProps.totalCols; i++) {
      if (this.gameBoard[row][i] !== null && this.gameBoard[row][i] !== GAME_TILE_EMPTY && this.gameBoard[row][i].tileColor === currentColor && currentType !== GAME_BALLOON_TYPE_PEARL && currentType !== GAME_BALLOON_TYPE_SPECTRUM) {
        chain.push(this.gameBoard[row][i]);
      } else {
        break;
      }
    }
    return chain;
  },
  _findVerticalChainHelper: function(balloon) {
    var currentColor = balloon.tileColor;
    var currentType = balloon.tileType;
    var chain = [];
    chain.push(balloon);
    var clmn = balloon.COL;
    var row = balloon.ROW;
    for (var i = row + 1; i < this.levelsProps.totalRows; i++) {
      if (this.gameBoard[i][clmn] !== null && this.gameBoard[i][clmn] !== GAME_TILE_EMPTY && this.gameBoard[i][clmn].tileColor === currentColor && currentType !== GAME_BALLOON_TYPE_PEARL && currentType !== GAME_BALLOON_TYPE_SPECTRUM) {
        chain.push(this.gameBoard[i][clmn]);
      } else {
        break;
      }
    }
    return chain;
  },
  findAllAvailableSwaps: function() {
    this.currentAvailableSwaps = [];
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      for (var j = 0; j < this.levelsProps.totalCols - 1; j++) {
        var bal1 = this.gameBoard[i][j];
        var bal2 = this.gameBoard[i][j + 1];
        if (bal1 !== null && bal1 !== GAME_TILE_EMPTY && bal2 !== null && bal2 !== GAME_TILE_EMPTY) {
          this.gameBoard[i][j + 1] = bal1;
          this.gameBoard[i][j] = bal2;
          if (this.isMatchAtPosition(j, i)) {
            this.currentAvailableSwaps.push([
              [i, j + 1],
              [i, j]
            ]);
          } else {
            if (this.isMatchAtPosition(j + 1, i)) {
              this.currentAvailableSwaps.push([
                [i, j],
                [i, j + 1]
              ]);
            }
          }
          this.gameBoard[i][j] = bal1;
          this.gameBoard[i][j + 1] = bal2;
        }
      }
    }
    for (var i = 0; i < this.levelsProps.totalRows - 1; i++) {
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        var bal1 = this.gameBoard[i][j];
        var bal2 = this.gameBoard[i + 1][j];
        if (bal1 !== null && bal1 !== GAME_TILE_EMPTY && bal2 !== null && bal2 !== GAME_TILE_EMPTY) {
          this.gameBoard[i + 1][j] = bal1;
          this.gameBoard[i][j] = bal2;
          if (this.isMatchAtPosition(j, i)) {
            this.currentAvailableSwaps.push([
              [i + 1, j],
              [i, j]
            ]);
          } else {
            if (this.isMatchAtPosition(j, i + 1)) {
              this.currentAvailableSwaps.push([
                [i, j],
                [i + 1, j]
              ]);
            }
          }
          this.gameBoard[i][j] = bal1;
          this.gameBoard[i + 1][j] = bal2;
        }
      }
    }
    if (this.currentAvailableSwaps.length === 0) {
      var coordsToCheck = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
      ];
      for (var i = 0; i < this.levelsProps.totalRows; i++) {
        for (var j = 0; j < this.levelsProps.totalCols; j++) {
          if (this.gameBoard[i][j].tileType === GAME_BALLOON_TYPE_SPECTRUM) {
            for (var k = 0; k < coordsToCheck.length; k++) {
              if (this.gameBoard[i + coordsToCheck[k][0]][j + coordsToCheck[k][1]].tileType !== GAME_TILE_EMPTY && this.gameBoard[i + coordsToCheck[k][0]][j + coordsToCheck[k][1]].tileType !== GAME_BALLOON_TYPE_PEARL) {
                this.currentAvailableSwaps.push([
                  [i, j]
                ]);
                break;
              }
            }
          } else {
            for (var k = 0; k < coordsToCheck.length; k++) {
              if (this.isBoardTileValid(j + coordsToCheck[k][1], i + coordsToCheck[k][0])) {
                if (this._balloonSwitchAreBothBalloonsBonus(this.gameBoard[i][j], this.gameBoard[i + coordsToCheck[k][0]][j + coordsToCheck[k][1]]) !== false) {
                  this.currentAvailableSwaps.push([
                    [i, j],
                    [i + coordsToCheck[k][0], j + coordsToCheck[k][1]]
                  ]);
                }
              }
            }
          }
        }
      }
    }
    this.currentHintSwapIdx = getRandomIdxFromList(this.currentAvailableSwaps);
  },
  isMatchAtPosition: function(column, row) {
    if (this._findHorizontalMatchAtPosition(column, row) >= 3) {
      return true;
    }
    return this._findVerticalMatchAtPosition(column, row) >= 3;
  },
  _findHorizontalMatchAtPosition: function(column, row) {
    var currentColor = this.gameBoard[row][column].tileColor;
    var currentType = this.gameBoard[row][column].tileType;
    var horizontalChainLength = 1;
    for (var i = column - 1; i >= 0; i--) {
      if (this.gameBoard[row][i] !== null && this.gameBoard[row][i] !== GAME_TILE_EMPTY && this.gameBoard[row][i].tileColor === currentColor && currentType !== GAME_BALLOON_TYPE_PEARL && currentType !== GAME_BALLOON_TYPE_SPECTRUM) {
        horizontalChainLength += 1;
      } else {
        break;
      }
    }
    for (var i = column + 1; i < this.levelsProps.totalCols; i++) {
      if (this.gameBoard[row][i] !== null && this.gameBoard[row][i] !== GAME_TILE_EMPTY && this.gameBoard[row][i].tileColor === currentColor && currentType !== GAME_BALLOON_TYPE_PEARL && currentType !== GAME_BALLOON_TYPE_SPECTRUM) {
        horizontalChainLength += 1;
      } else {
        break;
      }
    }
    return horizontalChainLength;
  },
  _findVerticalMatchAtPosition: function(column, row) {
    var currentColor = this.gameBoard[row][column].tileColor;
    var currentType = this.gameBoard[row][column].tileType;
    var verticalChainLength = 1;
    for (var i = row - 1; i >= 0; i--) {
      if (this.gameBoard[i][column] !== null && this.gameBoard[i][column] !== GAME_TILE_EMPTY && this.gameBoard[i][column].tileColor === currentColor && currentType !== GAME_BALLOON_TYPE_PEARL && currentType !== GAME_BALLOON_TYPE_SPECTRUM) {
        verticalChainLength += 1;
      } else {
        break;
      }
    }
    for (var i = row + 1; i < this.levelsProps.totalRows; i++) {
      if (this.gameBoard[i][column] !== null && this.gameBoard[i][column] !== GAME_TILE_EMPTY && this.gameBoard[i][column].tileColor === currentColor && currentType !== GAME_BALLOON_TYPE_PEARL && currentType !== GAME_BALLOON_TYPE_SPECTRUM) {
        verticalChainLength += 1;
      } else {
        break;
      }
    }
    return verticalChainLength;
  },
  stillMovingBalloons: function() {
    for (var row = 0; row < this.levelsProps.totalRows; row++) {
      for (var col = 0; col < this.levelsProps.totalCols; col++) {
        if (this.getGameBoardTile(col, row) !== null && this.getGameBoardTile(col, row).MOV === true) {
          return true;
        }
      }
    }
    return false;
  },
  clearGamePlayElements: function() {
    this.killAllGameCharacters();
    this.killAllBlocks();
    this.resetFlaskSpawners();
    this.gameBoard = [];
    this.currentAvailableSwaps = [];
    this.currentHintSwapIdx = 0;
    this.selectedBalloon = null;
    this.selectedBalloonSwapBack = null;
    this.selectedBalloonInitCursorPos = [];
    this.isPaused = false;
    this.wasUserMove = false;
    if (this.levelsProps.lvlBgImg !== null) {
      this.levelsProps.lvlBgImg.destroy();
    }
  },
  killAllGameCharacters: function() {
    guiManager.gameScreenGroup.gameBoardGroup.gameCharactersGroup.forEachAlive(function(balloon) {
      game.tweens.removeFrom(balloon, true);
    }, this);
    guiManager.gameScreenGroup.gameBoardGroup.gameCharactersGroup.callAll("kill");
  },
  recalc_getRealXYfrom2Dcoord: function(col, row) {
    return [(GAME_TILE_WIDTH >> 1) + col * (GAME_TILE_WIDTH + GAME_TILE_OFFSET), (GAME_TILE_HEIGHT >> 1) + row * (GAME_TILE_HEIGHT + GAME_TILE_OFFSET)];
  },
  recalc_getRealXYfrom2Dcoord_anchorY1: function(col, row, sprtHeight) {
    return [(GAME_TILE_WIDTH >> 1) + col * (GAME_TILE_WIDTH + GAME_TILE_OFFSET), (row + 1) * (GAME_TILE_HEIGHT + GAME_TILE_OFFSET) - (GAME_TILE_HEIGHT - sprtHeight) / 2];
  },
  scoreIncrement: function(value, show, row, col, blnColor) {
    this.currentLevelScore += value;
    this.scoreInc += value;
    if (show === true) {
      var coords = this.recalc_getRealXYfrom2Dcoord(col, row);
      this.animsManager.showScoreText(coords[0], coords[1], value, blnColor);
    }
  },
  initBlocks: function() {
    for (var i = 0; i < GAME_MAX_ROWS; i++) {
      this.blocksGrid[i] = [];
      for (var j = 0; j < GAME_MAX_COLS; j++) {
        this.blocksGrid[i][j] = this.createBlock(i, j, -1);
      }
    }
    this.killAllBlocks();
  },
  createBlock: function(row, column, level) {
    var spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.gameBlocksGroup.create(0, 0, "blockImg", 0);
    setObjectAnchor(spriteToReturn, .5, .5);
    spriteToReturn.markToDelete = function() {}.bind(this);
    spriteToReturn.updateBlockLevel = function(level) {
      if (level < 0) {
        level = 0;
      }
      spriteToReturn.blockLevel = level;
      if (level === 0) {
        spriteToReturn.kill();
      }
      if (level > 0) {
        spriteToReturn.frame = level - 1;
      }
    };
    var coord = this.recalc_getRealXYfrom2Dcoord(column, row);
    spriteToReturn.reset(coord[0], coord[1]);
    spriteToReturn.COL = column;
    spriteToReturn.ROW = row;
    spriteToReturn.updateBlockLevel(level);
    return spriteToReturn;
  },
  killAllBlocks: function() {
    guiManager.gameScreenGroup.gameBoardGroup.gameBlocksGroup.callAll("kill");
  },
  prepareLevelBlocks: function() {
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        if (this.gameBoard[i][j] === GAME_TILE_EMPTY) {
          this.blocksGrid[i][j].updateBlockLevel(-1);
        } else {
          if (this.levelsProps.blocks[i * this.levelsProps.totalCols + j] > 0) {
            this.blocksGrid[i][j].updateBlockLevel(this.levelsProps.blocks[i * this.levelsProps.totalCols + j]);
            this.blocksGrid[i][j].revive();
          } else {
            this.blocksGrid[i][j].updateBlockLevel(-1);
          }
        }
      }
    }
    var levelBlocksCount = this.countRestBlocksInGame();
    guiManager.setGameScreenLeftIndicator2(levelBlocksCount);
  },
  blockExplode: function(row, col) {
    var block = this.blocksGrid[row][col];
    if (block.blockLevel > 0) {
      block.blockLevel--;
      guiManager.fireBlockParticle(block.worldPosition.x, block.worldPosition.y, 2);
      block.updateBlockLevel(block.blockLevel);
    }
    var levelBlocksCount = this.countRestBlocksInGame();
    guiManager.setGameScreenLeftIndicator2(levelBlocksCount);
    if (block.blockLevel <= 0) {
      block.blockLevel = 0;
      block.kill();
      return true;
    }
    return false;
  },
  countRestBlocksInGame: function() {
    var count = 0;
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        if (this.blocksGrid[i][j].blockLevel > 0) {
          count++;
        }
      }
    }
    return count;
  },
  prepareFlasksSpawners: function() {
    this.resetFlaskSpawners();
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        if (this.gameBoard[i][j] !== GAME_TILE_EMPTY && this.levelsProps.flasksSpawners[i * this.levelsProps.totalCols + j] === 1) {
          this.flasksSpawnersList.push(this.getFreeFlaskSpawner(i, j));
        }
      }
    }
  },
  getFreeFlaskSpawner: function(row, column) {
    var spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.flaskSpawnerGroup.getFirstDead();
    if (spriteToReturn === null) {
      spriteToReturn = guiManager.gameScreenGroup.gameBoardGroup.flaskSpawnerGroup.create(0, 0, "flasksSpawnWhirpool", 0);
      setObjectAnchor(spriteToReturn, .5, .5);
      spriteToReturn.resetPosition = function(clmn, rw) {
        var coord = this.recalc_getRealXYfrom2Dcoord(clmn, rw);
        spriteToReturn.reset(coord[0], coord[1]);
        spriteToReturn.setNewGridPos(clmn, rw);
      }.bind(this);
      spriteToReturn.setNewGridPos = function(clmn, rw) {
        spriteToReturn.COL = clmn;
        spriteToReturn.ROW = rw;
      }.bind(this);
    }
    spriteToReturn.resetPosition(column, row);
    return spriteToReturn;
  },
  moveFlasksUp: function() {
    if (this.isHappyMoment === true) {
      return;
    }
    gameState = GAME_STATES.MOVE_FLUSKS_UP;
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    var flasksCount = 0;
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        var balloon = this.gameBoard[i][j];
        if (i === 0 && balloon.tileType === GAME_BALLOON_TYPE_FLASK) {
          this.gameOverFlaskGone();
          return;
        }
        if (balloon.tileType === GAME_BALLOON_TYPE_FLASK) {
          var newRow = balloon.ROW - 1;
          var newCol = balloon.COL;
          if (this.gameBoard[newRow][newCol] === GAME_TILE_EMPTY) {
            var selectedValue = getRandomValueFromList([-1, 1]);
            var nwcl = balloon.COL + selectedValue;
            if (nwcl >= 0 && nwcl < this.levelsProps.totalCols && this.gameBoard[newRow][nwcl] !== GAME_TILE_EMPTY && this.gameBoard[newRow][nwcl].tileType !== GAME_BALLOON_TYPE_FLASK) {
              newCol = nwcl;
            } else {
              selectedValue *= -1;
              nwcl = balloon.COL + selectedValue;
              if (nwcl >= 0 && nwcl < this.levelsProps.totalCols && this.gameBoard[newRow][nwcl] !== GAME_TILE_EMPTY && this.gameBoard[newRow][nwcl].tileType !== GAME_BALLOON_TYPE_FLASK) {
                newCol = nwcl;
              } else {
                continue;
              }
            }
          }
          this.switchBalloons(balloon.COL, balloon.ROW, newCol, newRow, false, GAME_STATES.GENERATE_FLASK, this.generateFlask);
          flasksCount += 1;
        }
      }
    }
    if (flasksCount === 0) {
      this.generateFlask();
    }
  },
  generateFlask: function() {
    if (this.isHappyMoment === true) {
      return;
    }
    gameState = GAME_STATES.GENERATE_FLASK;
    // if (this.checkPause(arguments.callee.funcName) === true) {
    //   return;
    // }
    var availableSpawnersList = [];
    for (var k = 0; k < this.flasksSpawnersList.length; k++) {
      availableSpawnersList.push(this.flasksSpawnersList[k]);
    }
    var chosenSpawner = null;
    do {
      if (availableSpawnersList.length === 0) {
        break;
      }
      var spawnerIdx = getRandomIdxFromList(availableSpawnersList);
      var spawner = availableSpawnersList[spawnerIdx];
      availableSpawnersList.splice(spawnerIdx, 1);
      var row = spawner.ROW;
      var col = spawner.COL;
      if (this.gameBoard[row][col].tileType === GAME_BALLOON_TYPE_CLASSIC) {
        chosenSpawner = spawner;
        break;
      }
    } while (true);
    if (chosenSpawner === null) {
      this.generateFlaskOver();
    } else {
      var row = chosenSpawner.ROW;
      var col = chosenSpawner.COL;
      var tw1 = game.add.tween(this.gameBoard[row][col].scale).to({
        x: 0,
        y: 0
      }, 220, Phaser.Easing.Linear.None, true);
      tw1.onComplete.add(function() {
        this.gameBoard[row][col].updateTile_type_color(null, GAME_BALLOON_TYPE_FLASK);
        this.gameBoard[row][col].scale.set(0);
        var tw = game.add.tween(this.gameBoard[row][col].scale).to({
          x: 1,
          y: 1
        }, 150, Phaser.Easing.Back.Out, true);
        tw.onComplete.add(this.generateFlaskOver, this);
      }, this);
    }
  },
  generateFlaskOver: function() {
    this.checkMatches();
  },
  updateFlaskSpawners: function() {
    if (this.levelsProps.levelType !== GAME_TYPE_FLASKS) {
      return;
    }
    guiManager.gameScreenGroup.gameBoardGroup.flaskSpawnerGroup.forEachAlive(function(spawner) {
      spawner.angle -= 2;
    }, this);
  },
  resetFlaskSpawners: function() {
    guiManager.gameScreenGroup.gameBoardGroup.flaskSpawnerGroup.callAll("kill");
    this.flasksSpawnersList = [];
    this.flasksAdditionInCurrentTurnEnabled = false;
  },
  checkPearlsDown: function() {
    if (this.isHappyMoment === true) {
      this.enableUserInput();
      return;
    }
    var pearlsDownCount = 0;
    for (var c = 0; c < this.levelsProps.totalCols; c++) {
      var tile = this.gameBoard[this.levelsProps.totalRows - 1][c];
      if (tile !== GAME_TILE_EMPTY) {
        if (tile.tileType === GAME_BALLOON_TYPE_PEARL) {
          pearlsDownCount++;
          this.pearlDown(tile);
          return;
        }
      }
    }
    if (pearlsDownCount === 0) {
      this.enableUserInput();
    }
  },
  pearlDown: function(pearlTile) {
    this.gameBoard[pearlTile.ROW][pearlTile.COL] = null;
    var tw = game.add.tween(pearlTile).to({
      x: guiManager.gameScreenGroup.leftIndiList[1].indiImg.worldPosition.x - guiManager.gameScreenGroup.gameBoardGroup.worldPosition.x + 23,
      y: guiManager.gameScreenGroup.leftIndiList[1].indiImg.worldPosition.y - guiManager.gameScreenGroup.gameBoardGroup.worldPosition.y - 33
    }, 450, Phaser.Easing.Linear.None, true);
    tw.onComplete.add(this.pearlDownAnimOnComplete, this);
  },
  pearlDownAnimOnComplete: function(pearlTile) {
    this.levelsProps.pearlsCount--;
    if (this.levelsProps.pearlsCount < 0) {
      this.levelsProps.pearlsCount = 0;
    }
    guiManager.setGameScreenLeftIndicator2(this.levelsProps.pearlsCount);
    this.scoreIncrement(SCORE_SYSTEM._iScoreDownFall, false);
    pearlTile.kill();
    this.dropDownBalloons();
  },
  checkGameOver: function() {
    if (this.isHappyMoment === true) {
      this._happyMomentCont();
      return;
    }
    var isOver = false;
    if (this.levelsProps.levelType === GAME_TYPE_PEARLS) {
      if (this.levelsProps.pearlsCount === 0) {
        isOver = true;
      }
    }
    if (this.levelsProps.levelType === GAME_TYPE_FLASKS) {
      if (this.levelsProps.flasksCount === 0) {
        isOver = true;
      }
    }
    if (this.levelsProps._bModeMoves === true) {
      if (this.levelsProps._iMoves <= 0) {
        isOver = true;
      }
    }
    if (this.levelsProps._bModeTime === true && gameState === GAME_STATES.GAME_WAITING_FOR_INPUT) {
      if (this.secondsLeft <= 0) {
        isOver = true;
      }
    }
    if (this.levelsProps.levelType === GAME_TYPE_BLOCKS) {
      var levelBlocksCount = this.countRestBlocksInGame();
      if (levelBlocksCount <= 0) {
        isOver = true;
      }
    }
    if (isOver === true) {
      this.findGameOverState();
      return true;
    }
    return false;
  },
  gameOverFlaskGone: function() {
    this.gameOverType = GAME_OVER_LOSE;
    this.gameOver();
  },
  findGameOverState: function() {
    this.gameOverType = GAME_OVER_WIN;
    if (this.currentLevelScore < this.levelsProps.scoreMin) {
      this.gameOverType = GAME_OVER_LOSE;
    }
    if (this.levelsProps.levelType === GAME_TYPE_PEARLS) {
      if (this.levelsProps.pearlsCount > 0) {
        this.gameOverType = GAME_OVER_LOSE;
      }
    }
    if (this.levelsProps.levelType === GAME_TYPE_FLASKS) {
      if (this.levelsProps.flasksCount > 0) {
        this.gameOverType = GAME_OVER_LOSE;
      }
    }
    if (this.levelsProps.levelType === GAME_TYPE_BLOCKS) {
      var levelBlocksCount = this.countRestBlocksInGame();
      if (levelBlocksCount > 0) {
        this.gameOverType = GAME_OVER_LOSE;
      }
    }
    if (this.gameOverType === GAME_OVER_WIN) {
      this.startHappyMoment();
    } else {
      this.gameOver();
    }
  },
  startHappyMoment: function() {
    var foundBomb = false;
    for (var r = 0; r < this.levelsProps.totalRows; r++) {
      for (var c = 0; c < this.levelsProps.totalCols; c++) {
        if (this.isBoardTileValid(c, r)) {
          var balloon = this.gameBoard[r][c];
          if (balloon.tileType === GAME_BALLOON_TYPE_BOMB || balloon.tileType === GAME_BALLOON_TYPE_BOMBCROSS || balloon.tileType === GAME_BALLOON_TYPE_SPECTRUM) {
            foundBomb = true;
            r = c = 50;
          }
        }
      }
    }
    if (foundBomb === true || this.levelsProps._iMoves > 0) {
      gameState = GAME_STATES.HAPPY_MOMENT;
      if (this.isHappyMoment === false) {
        this.isHappyMoment = true;
        this.animsManager.showMessage(MESSAGE_TYPE.HAPPY_MOMENT);
        musicPlayer.playSound("happymmnt");
        game.time.events.add(1E3, this._happyMomentCont, this);
        return;
      }
      this._happyMomentCont();
    } else {
      game.time.events.add(1E3, this.gameOver, this);
    }
  },
  _happyMomentCont: function() {
    if (this.levelsProps._iMoves > 0) {
      this._happyReuseRestMoves();
    } else {
      this._happyExplode();
    }
  },
  _happyReuseRestMoves: function() {
    if (this.levelsProps._iMoves > 0 && this._tileTypeExists(GAME_BALLOON_TYPE_CLASSIC)) {
      this._happyAddBomb();
      return;
    }
    this._happyExplode();
  },
  _happyAddBomb: function() {
    this.levelsProps._iMoves--;
    guiManager.setGameScreenLeftIndicator1(this.levelsProps._iMoves);
    do {
      var newRow = getRandomUIntInRange(0, this.levelsProps.totalRows - 1);
      var newCol = getRandomUIntInRange(0, this.levelsProps.totalCols - 1);
    } while (this.gameBoard[newRow][newCol] === null || this.gameBoard[newRow][newCol] === GAME_TILE_EMPTY || this.gameBoard[newRow][newCol].tileType !== GAME_BALLOON_TYPE_CLASSIC);
    this.newBombPosition = {
      row: newRow,
      col: newCol
    };
    this.animsManager.playHappyMomentAddAnim(guiManager.gameScreenGroup.leftIndiList[0].indiText.worldPosition.x - guiManager.gameScreenGroup.gameBoardGroup.worldPosition.x, guiManager.gameScreenGroup.leftIndiList[0].indiText.worldPosition.y - guiManager.gameScreenGroup.gameBoardGroup.worldPosition.y - 13, this.gameBoard[newRow][newCol].x, this.gameBoard[newRow][newCol].y, this._happyAddBombTwOver, this);
  },
  _happyAddBombTwOver: function() {
    this.gameBoard[this.newBombPosition.row][this.newBombPosition.col].updateTile_type_color(null, GAME_BALLOON_TYPE_BOMBCROSS);
    this.scoreIncrement(3E3, true, this.newBombPosition.row, this.newBombPosition.col, this.gameBoard[this.newBombPosition.row][this.newBombPosition.col].tileColor);
    this._happyReuseRestMoves();
  },
  _happyExplode: function() {
    var foundBomb = false;
    for (var r = 0; r < this.levelsProps.totalRows; r++) {
      for (var c = 0; c < this.levelsProps.totalCols; c++) {
        if (this.isBoardTileValid(c, r)) {
          var balloon = this.gameBoard[r][c];
          if (balloon.tileType === GAME_BALLOON_TYPE_BOMB) {
            balloon.markToDelete();
            foundBomb = true;
          }
          if (balloon.tileType === GAME_BALLOON_TYPE_BOMBCROSS) {
            balloon.markToDelete();
            foundBomb = true;
          }
        }
      }
    }
    if (foundBomb === true) {
      this.removeMarkedBalloons();
      return;
    } else {
      var balloonsCoords = [];
      for (var r = 0; r < this.levelsProps.totalRows; r++) {
        for (var c = 0; c < this.levelsProps.totalCols; c++) {
          if (this.isBoardTileValid(c, r)) {
            var balloon = this.gameBoard[r][c];
            if (balloon.tileType === GAME_BALLOON_TYPE_SPECTRUM) {
              do {
                var newRow = getRandomUIntInRange(0, this.levelsProps.totalRows - 1);
                var newCol = getRandomUIntInRange(0, this.levelsProps.totalCols - 1);
              } while (this.gameBoard[newRow][newCol] === null || this.gameBoard[newRow][newCol] === GAME_TILE_EMPTY || this.gameBoard[newRow][newCol].tileType === GAME_BALLOON_TYPE_PEARL);
              balloonsCoords.push([r, c]);
              balloonsCoords.push([newRow, newCol]);
              r = this.levelsProps.totalRows;
              c = this.levelsProps.totalCols;
            }
          }
        }
      }
      if (balloonsCoords.length > 0) {
        this.removeSpectrum(0, [this.gameBoard[balloonsCoords[0][0]][balloonsCoords[0][1]], this.gameBoard[balloonsCoords[1][0]][balloonsCoords[1][1]]]);
        this.selectedBalloonSwapBack = null;
        return;
      }
    }
    appState = APP_STATES.GAME_OVER;
    gameState = GAME_STATES.GAME_OVER;
    game.time.events.add(1E3, this.gameOver, this);
  },
  gameOver: function() {
    appState = APP_STATES.GAME_OVER;
    gameState = GAME_STATES.GAME_OVER;
    if (this.gameOverType === GAME_OVER_WIN) {
      if (this.currentLevelScore >= this.levelsProps.scoreMax) {
        this.currentLevelStars = 3;
      } else {
        if (this.currentLevelScore >= this.levelsProps.scoreMid) {
          this.currentLevelStars = 2;
        } else {
          if (this.currentLevelScore >= this.levelsProps.scoreMin) {
            this.currentLevelStars = 1;
          } else {
            this.currentLevelStars = 0;
          }
        }
      }
      if (this.currentLevelScore > this.levelsScore[this.currentLevel - 1]) {
        this.levelsScore[this.currentLevel - 1] = this.currentLevelScore;
      }
      if (this.currentLevel < 60 && this.levelsScore[this.currentLevel] === -1) {
        this.levelsScore[this.currentLevel] = 0;
      }
      guiManager.levelSelectionGroup.updateLevelScreenInNextShow = true;
      musicPlayer.playSound("sndWin");
    } else {
      this.currentLevelStars = 0;
      musicPlayer.playSound("sndLose");
    }
    guiManager.screenSwitcher_openNewScreen(guiManager.gameOverScreenGroup);
    saveAllGameData();
    this.onGameOver(this.gameOverType);
  },
  onGameOver: function(lvlEndType) {
    var allLevelsScore = 0;
    for (var i = 0; i < this.levelsScore.length; i++) {
      if (this.levelsScore[i] > 0) {
        allLevelsScore += this.levelsScore[i];
      }
    }
    if (lvlEndType !== GAME_OVER_BY_USER) {}
    this.showAdvert();
  },
  showAdvert: function() {},
  pauseGamePlay: function() {
    gamePlay.isPaused = true;
    appState = APP_STATES.GAME_PAUSED;
  },
  checkPause: function(funcName) {
    if (this.isPaused) {
      this.continueFuncName = funcName;
      return true;
    }
    return false;
  },
  resumeGamePlay: function() {
    this.isPaused = false;
    var resumeFuncName = this.continueFuncName;
    this.continueFuncName = null;
    if (resumeFuncName !== null) {
      this[resumeFuncName].call(this);
    }
    appState = APP_STATES.GAME_RUNNING;
  },
  _debugGameField: function() {
    var line = "--";
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      line += "--";
    }
    for (var i = 0; i < this.levelsProps.totalRows; i++) {
      var s = "|";
      for (var j = 0; j < this.levelsProps.totalCols; j++) {
        if (this.gameBoard[i][j] === GAME_TILE_EMPTY) {
          s = s + " " + " ";
        } else {
          if (this.gameBoard[i][j] === null) {
            s = s + " " + "-";
          } else {
            s = s + " " + GAME_BALLOON_COLLOR_LETTER[this.getGameBoardTile(j, i).tileColor];
          }
        }
      }
      s += "|";
    }
  },
  _debugWriteGameState: function() {
    if (this.gameStateText == null) {
      this.gameStateText = game.add.text(game.width, game.height - 20, "");
      this.gameStateText.anchor.x = 1;
      this.gameStateText.fontSize = 20;
    }
    this.gameStateText.text = "game state:" + getDictKeyAccordingToValue(GAME_STATES, gameState);
    if (this.appStateText == null) {
      this.appStateText = game.add.text(game.width, game.height - 40, "");
      this.appStateText.anchor.x = 1;
      this.appStateText.fontSize = 20;
    }
    this.appStateText.text = "app state:" + getDictKeyAccordingToValue(APP_STATES, appState);
  },
  _debugWriteFPS: function() {
    this.fpsActual = Math.floor(1E3 / (Date.now() - this.lastUpdate));
    this.lastUpdate = Date.now();
    if (this.fpsText == null) {
      this.fpsText = game.add.text(game.width - 10, game.height / 2, "");
      this.fpsText.anchor.x = 1;
      this.fpsText.fontSize = 20;
    }
    this.fpsText.text = this.fpsActual;
  }
};
MusicPlayer = function() {
  this.soundON = true;
  this.musics = [];
  this.sounds = [];
  this.actualMusic = null;
};
MusicPlayer.prototype = {
  constructor: MusicPlayer,
  create: function() {
    console.log("MusicPlayer" + game.baseURL);
    this.musics[MUSIC_MENU] = window.createAudio(game.baseURL + "assets/music/menuMusic.mp3", true);
    //game.add.audio//createAudio("musicMenu", 1, true);//音乐文件
    this.musics[MUSIC_GAME] = window.createAudio(game.baseURL + "assets/music/gameMusic.mp3", true);
    for (var i = 0; i < soundsList.length; i++) {
      var volume = 1;
      if (soundsList[i].vol !== undefined) {
        volume = soundsList[i].vol;
      }
      var nameSound = game.baseURL + "assets/sounds/"+soundsList[i].fileName + ".mp3";
      console.log("name = " + nameSound);
      this.sounds[soundsList[i].soundID] = window.createAudio(nameSound, false);
     // this.sounds[soundsList[i].soundID] = game.add.audio(soundsList[i].soundID, volume);
    }
  },
  playMusic: function(musicToPlay, reset) {
    if (!SOUNDS_ENABLED) {
      return;
    }
    if (musicToPlay == this.actualMusic && reset != true) {
      return;
    }
    this.actualMusic = musicToPlay;
    if (!this.soundON) {
      return;
    }
    for (var i = 0; i < this.musics.length; i++) {
      this.musics[i].stop();
    }
    this.musics[this.actualMusic].play();
  },
  playSound: function(soundToPlay, volume) {
    if (!SOUNDS_ENABLED) {
      return;
    }
    if (!this.soundON) {
      return;
    }
    try {
      this.sounds[soundToPlay].play();
    } catch (err) {}
  },
  pauseMusic: function() {
    if (!SOUNDS_ENABLED) {
      return;
    }
    if (!this.soundON) {
      return;
    }
    this.musics[this.actualMusic].pause();
  },
  resumeMusic: function() {
    if (!SOUNDS_ENABLED) {
      return;
    }
    if (!this.soundON) {
      return;
    }
    this.musics[this.actualMusic].resume();
  },
  stopMusic: function() {
    if (!SOUNDS_ENABLED) {
      return;
    }
    for (var i = 0; i < this.musics.length; i++) {
      this.musics[i].stop();
    }
  },
  toggleEnableDisableMusic: function(musicToPlay) {
    if (!SOUNDS_ENABLED) {
      return;
    }
    if (!this.soundON) {
      this.soundON = true;
      this.playMusic(musicToPlay || this.actualMusic, true);
    } else {
      this.soundON = false;
      this.stopMusic();
    }
    saveAllGameData();
  }
};
var appState;
var gameState;
var gamePlay = new GamePlay;
var guiManager = new GUI;
musicPlayer = new MusicPlayer;
var GameState = function() {};
GameState.prototype = {
  preload: function() {
    GAME_TILE_WIDTH = game.cache.getImage("gmTileImg").width;
    GAME_TILE_HEIGHT = game.cache.getImage("gmTileImg").height;
    guiManager.preload();
    gamePlay.preload();
    game.input.maxPointers = 1;
    
    guiManager.createBackground();
  },
  create: function() {
   
    //zanglengyu
    musicPlayer.create();
    guiManager.create();
    gamePlay.create();
    analyticsOnGameLoadEvent();
    appState = APP_STATES.MENU;
    gameState = GAME_STATES.GAME_OFF;
    guiManager.screenSwitcher_openNewScreen(guiManager.mainMenuGroup);
    musicPlayer.playMusic(MUSIC_MENU);
    game.onPause.add(onGamePause);
    game.onResume.add(onGameResume);
    this.lastUpdate = Date.now();
  },
  update: function() {
    game.time.physicsElapsed = (Date.now() - this.lastUpdate) / 1E3;
    gamePlay.update();
    guiManager.update();
    this.lastUpdate = Date.now();
  }
};

function updateGameLanguage(lng) {
  GAME_LANGUAGE = lng;
  gameTexts.loadTexts();
  guiManager.updateGUITextLanguage();
}

function loadLanguageSettings() {
  var sstmLng = navigator.userLanguage || navigator.language;
  sstmLng = sstmLng.toLowerCase();
  systemLang = "en";
  if (sstmLng.indexOf("fr") !== -1) {
    systemLang = "fr";
  }
  if (sstmLng.indexOf("it") !== -1) {
    systemLang = "it";
  }
  if (sstmLng.indexOf("de") !== -1) {
    systemLang = "de";
  }
  if (sstmLng.indexOf("es") !== -1) {
    systemLang = "es";
  }
  if (sstmLng.indexOf("pt") !== -1) {
    systemLang = "pt";
  }
  GAME_LANGUAGE = LANGUAGES.indexOf(systemLang);
}

function loadAllGameData() {
  var storedData;
  try {
    storedData = localStorage.getItem("jwaq");
    parsedData = JSON.parse(storedData);
    if (parsedData == null) {
      return;
    }
    var tmp = parsedData["scrs"];
    if (tmp !== null) {
      for (var i = 0; i < LEVELS_COUNT; i++) {
        gamePlay.levelsScore[i] = tmp[i];
      }
    }
    if (SOUNDS_ENABLED) {
      var tmp = parsedData["snd"];
      if (tmp == true || tmp == false) {
        musicPlayer.soundON = tmp;
      }
    }
  } catch (err) {}
}

function saveAllGameData() {
  var profile = {};
  profile["snd"] = musicPlayer.soundON;
  profile["scrs"] = gamePlay.levelsScore;
  try {
    localStorage.setItem("jwaq", JSON.stringify({
      "snd": musicPlayer.soundON,
      "scrs": gamePlay.levelsScore
    }));
  } catch (err) {}
}

function onGamePause() {
  if (guiManager.gameScreenGroup.visible === true && guiManager.gameScreenGroup.pauseButton.inputEnabled === true) {
    guiManager.gameScreenPauseClicked();
  }
  musicPlayer.pauseMusic();
}

function onGameResume() {
  musicPlayer.resumeMusic();
};
var resolutionY_min = 575;
var resolutionY_max = 950;
var resolutionY = resolutionY_max;
var resolutionX = 480;

function ie_ver() {
  var iev = 0;
  var ieold = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
  var trident = !!navigator.userAgent.match(/Trident\/7.0/);
  var rv = navigator.userAgent.indexOf("rv:11.0");
  if (ieold) {
    iev = new Number(RegExp.$1);
  }
  if (navigator.appVersion.indexOf("MSIE 10") != -1) {
    iev = 10;
  }
  if (trident && rv != -1) {
    iev = 11;
  }
  return iev;
}
var selectedRenderer = Phaser.CANVAS;
var config = {
  width: resolutionX,
  height: resolutionY,
  renderer: selectedRenderer,
  canvas: canvas,
  baseURL: 'https://www.leadjoy.net/wxxyx/szgxxl/'
};

var game;
var phaserInit = function() {
  //game = new Phaser.Game(resolutionX, resolutionY, selectedRenderer, "");
  game = new Phaser.Game(config);
  game.state.add("StateSplash", Splash);
  game.state.add("StatePreload", Preloader);
  game.state.add("StateGame", GameState);
  game.state.start("StateSplash");
};
phaserInit();
window["phsrI"] = phaserInit;
// document.documentElement.style.overflow = "hidden";
// document.body.scroll = "no";
// window.addEventListener("contextmenu", function(e) {
//   e.preventDefault();
// });
// window.addEventListener("touchend", function() {
//   if (game === null) {
//     return;
//   }
//   try {
//     if (game.sound.context.state !== "running") {
//       game.sound.context.resume();
//     }
//   } catch (err) {}
// }, false);