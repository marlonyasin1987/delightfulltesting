<!doctype html>

<html lang="de">

  <head>
  	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="author" content="Marlon Yasin" />
	<meta name="description" content="Webseite ueber die Acryl Bilder von Marlon Yasin" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="pixi/pixi.js"></script>
  <script src="howler.js"></script>
	<script type="text/javascript" src="classes/arrayfields.js"></script>
	<script type="text/javascript" src="classes/Spritelement.js"></script>
	<script type="text/javascript" src="classes/Being.js"></script>
  <script type="text/javascript" src="classes/Npc.js"></script>
  <script type="text/javascript" src="classes/Enemy.js"></script>
  <script type="text/javascript" src="classes/Crab.js"></script>
	<script type="text/javascript" src="classes/Charachter.js"></script>
	<script type="text/javascript" src="additionalstuff.js"></script>
  <script type="text/javascript" src="classes/mapSetup.js"></script>
    <title>Test-2</title>
  </head>
  <style>
    body{
      background-color: black;
    }
    #onscreen{
      image-rendering: pixelated;
    }
    .main{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content{
      width: 100%;
      max-width: 1100px;
      background-image: url("backgroundohnelogosmall.png");
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      display: flex;
      align-items: center;
      position: relative;
      flex-direction: column;
      padding-bottom: 120px;
    }
    .content::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    pointer-events: none;
}
    .logo{
      position: absolute;
      left: 50%;
      top: 0px;
      transform: translateX(-50%);
      width: 512px;
      height: 256px;
      background-image: url("delightfulllogo2.png");
      background-position: center; /* Center the image */
      background-repeat: no-repeat; /* Do not repeat the image */
      background-size: cover; /* Resize the background image to cover the entire container */
      index: 1;
    }
    #pixi-container{
      width: 384px;
      height: 288px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 256px;
      index: 2;
    }
    #pixi-container canvas {
        transform: scale(2); /* Scale the canvas by 2x */
        position: relative;
    }
    .controls{
      padding-bottom: 80px;
      max-width: 384px;
      color: rgb(12 153 185);
      font-family: system-ui;
    }
    #joystick-container {
            position: relative;
            width: 384px;
            height: 144px;
            touch-action: none;
            margin-bottom: 60px;
            margin-top: 30px;
        }
        #joystick-handle-1 {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 50%;
            top: 60px;
            left: 60px;
            touch-action: none;
        }
        #joystick-handle-2 {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 50%;
            top: 30px;
            left: 100px;
            touch-action: none;
        }
        #joystick-handle-3 {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 50%;
            top: 60px;
            left: 140px;
            touch-action: none;
        }
        #joystick-handle-4 {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 50%;
            top: 90px;
            left: 100px;
            touch-action: none;
        }
        #joystick-handle-5 {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 50%;
            top: 50px;
            left: 220px;
            touch-action: none;
        }
        #joystick-handle-6 {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 50%;
            top: 80px;
            left: 270px;
            touch-action: none;
        }
        #joystick-handle-7 {
            position: absolute;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 50%;
            top: 30px;
            left: 300px;
            touch-action: none;
        }
  </style>  
  <body oncontextmenu="return false;">
    <div class="main">
      <div class="content">
        <div id="pixi-container"></div>
<!--         <div id="joystick-container">
          <div id="joystick-handle-1"></div>
          <div id="joystick-handle-2"></div>
          <div id="joystick-handle-3"></div>
          <div id="joystick-handle-4"></div>
          <div id="joystick-handle-5"></div>
          <div id="joystick-handle-6"></div>
          <div id="joystick-handle-7"></div>
        </div> -->
        <div class="controls">
          <h1>Steuerung: </h1>
          <p><strong>Bestätigen / Springen:</strong>Pfeiltaste Unten  und mit W,A,S,D richtung vorgeben</p>
          <p><strong>Kämpfen:</strong> Pfeiltaste Rechts und mit W,A,S,D richtung vorgeben</p>
          <p><strong>Laufen:</strong> W, A, S, D</p>
          <p><strong>Pause:</strong> Pfeiltaste Links</p>
          <p><strong>Fullscreen:</strong> F - Taste</p>
        </div> 
        <div class="logo"></div>
      </div>
    </div>
  </body>
  <script>
    window.onload = function() {
      var element = document.getElementById('onscreen');
      if (element != null) {
        element.setAttribute("oncontextmenu", "return false;");
      }
      else {
      }
    };

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// Global-VARIABLES //////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////////////////////////
  var CurrentGLobalState = ['startScreen','normal'];
  var CurrentMapLocation = 12;
  var changeLevelCounter = 40;
  var changeLevelDirection = 0;
  var interiorOrOutside = 0;
  var StartScreenPrevChoose = 0;


    /////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////// Controll-Shema-VARIABLES //////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////
    var CapArray = new Array(512);
    CapArray[0] = 0;
    CapArray[1] = 0;
    CapArray[2] = 0;
    CapArray[3] = 0;
    CapArray[4] = 0;
    CapArray[5] = 0;
    CapArray[6] = 0;
    CapArray[7] = 0;
    CapArray[8] = 0;

    var CapArray2 = new Array(512);
    CapArray2[0] = 0;
    CapArray2[1] = 0;
    CapArray2[2] = 0;
    CapArray2[3] = 0;
    CapArray2[4] = 0;
    CapArray2[5] = 0;
    CapArray2[6] = 0;
    CapArray2[7] = 0;
    CapArray2[8] = 0;


  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////// Graphics Setup  //////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  let Application = PIXI.Application,
      Container = PIXI.Container,
      loader = PIXI.loader,
      resources = PIXI.loader.resources,
      TextureCache = PIXI.utils.TextureCache,
      Sprite = PIXI.Sprite;

  //Create a Pixi Application
  let app = new Application({ 
      width: 192, 
      height: 144,                      
      antialiasing: true, 
      transparent: false, 
      resolution: 1
    }
  );
  
  let container;
  let startcontainer;
  let deathcontainer;
  let talkcontainer;
  let inventorycontainer;


  //Add the canvas that Pixi automatically created for you to the HTML document
  // Get the HTML element by its ID
let pixiContainer = document.getElementById('pixi-container');

// Append PIXI canvas to the container
pixiContainer.appendChild(app.view);
  //document.body.appendChild(app.view);
  app.view.id = "onscreen";
  loader
    .add("sprites/mapi2ss.png")
    .add("sprites/testisss.png")
    .add("sprites/testcrabs.png")
    .load(setup);

  var GV = new Array(64);
  var SV = new Array(8);
  var DV = new Array(8);
  var TV = new Array(7);
  var IV = new Array(40);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////									Object Generating-Stuff																				//////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var OverWorld = new Spriteelement(0,2,"",0,0,1792,312,0,0,256,312,0,0,0);
  var Player = new Charachteri(4,'','normal',0,"",1,1,16,24,200,248,16,24,200,248,15,14,4,1,0,0,12,6);

  var BackgroundStart = new Spriteelement(0,2,"",0,0,192,144,0,0,192,144,0,0,0);
  var ArrowStart = new Spriteelement(1,2,"",0,0,8,8,73,39,8,8,0,0,0);
  var Option1Start = new Spriteelement(2,2,"",0,0,32,8,80,39,32,8,0,0,0);
  var Option2Start = new Spriteelement(3,2,"",0,0,32,8,80,49,32,8,0,0,0);

  var BackgroundDeath = new Spriteelement(0,2,"",0,0,192,144,0,0,192,144,0,0,0);

  var BackgroundTalk = new Spriteelement(0,2,"",0,0,192,144,0,0,192,144,0,0,0);

  var BackgroundInventory = new Spriteelement(0,2,"",0,0,192,144,0,0,192,144,0,0,0);

  var NpcArray = [];
  var ItemArray = [];
  var ThrowableArray = [];
  var DestroyableArray = [];
  var SpriteArray =  [];
  let TempCurrentMapLocation = 0;

  var SGDA = new Array(314);
  for(i=0;i<=312;i++){
    SGDA[i]=new Array(0);
  }
  //console.log('SGDA');
  //console.log(SGDA);          
  var SGDA2 = new Array(314);



  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////									SOUND-Stuff																				//////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const attackSound = new Howl({
    src: ['char_atttack.wav'],
    volume: 1.0
  });
  const crabAttackSound = new Howl({
    src: ['crab_hits.wav'],
    volume: 1
  });
  const crabDiesSound = new Howl({
    src: ['crab_dies.wav'],
    volume: 1
  });
  const musicSound = new Howl({
    src: ['bg_music.mp3'],
    volume: 0.0
  });



  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////									SETUP																			//////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function setup() {
    var texture2 = PIXI.Texture.fromImage("sprites/testisssz.png?=" + new Date().getTime());
    var texture4 = PIXI.Texture.fromImage("sprites/weapons.png?=" + new Date().getTime());

    ////////////////// World Texture Load-Up /////////////////////////
    for(let i = 0;i<overWorldZ[interiorOrOutside].length;i++){
      overWorldZ[interiorOrOutside][i][6]=PIXI.Texture.fromImage("sprites/collison"+i+"show.png?=" + new Date().getTime());
    }
    GV[0] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][6]);
    GV[0].sgdaId = OverWorld.id;
    GV[0].position.x = OverWorld.on_s_p_x;
    GV[0].position.y = OverWorld.on_s_p_y;
    GV[0].tilePosition.x = OverWorld.off_s_p_x;
    GV[0].tilePosition.y = OverWorld.off_s_p_y;
    GV[0].width = OverWorld.width;
    GV[0].height = OverWorld.height;
    
    GV[4] = new PIXI.extras.TilingSprite(texture2);
    GV[4].sgdaId = 4;
    GV[4].position.x = 0;
    GV[4].position.y = 0;
    GV[4].tilePosition.x = 0;
    GV[4].tilePosition.y = 0;
    GV[4].width = 0;
    GV[4].height = 0;
    GV[5] = new PIXI.extras.TilingSprite(texture2);
    GV[5].sgdaId = 5;
    GV[5].position.x = 0;
    GV[5].position.y = 0;
    GV[5].tilePosition.x = 0;
    GV[5].tilePosition.y = 0;
    GV[5].width = 0;
    GV[5].height = 0;
    GV[6] = new PIXI.extras.TilingSprite(texture2);
    GV[6].sgdaId = 6;
    GV[6].position.x = 0;
    GV[6].position.y = 0;
    GV[6].tilePosition.x = 0;
    GV[6].tilePosition.y = 0;
    GV[6].width = 0;
    GV[6].height = 0;
    GV[7] = new PIXI.extras.TilingSprite(texture4);
    GV[7].sgdaId = 7;
    GV[7].position.x = 0;
    GV[7].position.y = 0;
    GV[7].tilePosition.x = 0;
    GV[7].tilePosition.y = 0;
    GV[7].width = 0;
    GV[7].height = 0;
    GV[8] = new PIXI.extras.TilingSprite(texture2);
    GV[8].sgdaId = 8;
    GV[8].position.x = 0;
    GV[8].position.y = 0;
    GV[8].tilePosition.x = 0;
    GV[8].tilePosition.y = 0;
    GV[8].width = 0;
    GV[8].height = 0;
    GV[9] = new PIXI.extras.TilingSprite(texture2);
    GV[9].sgdaId = 9;
    GV[9].position.x = 0;
    GV[9].position.y = 0;
    GV[9].tilePosition.x = 0;
    GV[9].tilePosition.y = 0;
    GV[9].width = 0;
    GV[9].height = 0;


    ////////////////// NPC Texture Load-Up /////////////////////////
    if(overWorldZ[interiorOrOutside][CurrentMapLocation][2][1] != []){
      for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][2][1].length;i++){
        let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][2][1][i];
        overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
      }
      for(let i = 10;i<overWorldZ[interiorOrOutside][CurrentMapLocation][2][2].length+10;i++){
        GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-10]);
      }
    }

    ////////////////// Item Texture Load-Up /////////////////////////
    if(overWorldZ[interiorOrOutside][CurrentMapLocation][3][1] != []){
      for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][3][1].length;i++){
        let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][3][1][i];
        overWorldZ[interiorOrOutside][CurrentMapLocation][3][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
      }
      for(let i = 34;i<overWorldZ[interiorOrOutside][CurrentMapLocation][3][2].length+34;i++){
        GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-34]);
      }
    }

    ////////////////// Pickable Texture Load-Up /////////////////////////
    if(overWorldZ[interiorOrOutside][CurrentMapLocation][4][1] != []){
      for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][4][1].length;i++){
        let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][4][1][i];
        overWorldZ[interiorOrOutside][CurrentMapLocation][4][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
      }
      for(let i = 38;i<overWorldZ[interiorOrOutside][CurrentMapLocation][4][2].length+38;i++){
        GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-38]);
      }
    }

    ////////////////// Destroyable Texture Load-Up /////////////////////////
    if(overWorldZ[interiorOrOutside][CurrentMapLocation][4][1] != []){
      for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][5][1].length;i++){
        let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][5][1][i];
        overWorldZ[interiorOrOutside][CurrentMapLocation][5][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
      }
      for(let i = 46;i<overWorldZ[interiorOrOutside][CurrentMapLocation][5][1].length+46;i++){
        GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-46]);
      }
    }

    CollisionArray = overWorldZ[interiorOrOutside][CurrentMapLocation][1];
    NpcArray = overWorldZ[interiorOrOutside][CurrentMapLocation][2][0];
    ItemArray = overWorldZ[interiorOrOutside][CurrentMapLocation][3];
    ThrowableArray = overWorldZ[interiorOrOutside][CurrentMapLocation][4];
    DestroyableArray = overWorldZ[interiorOrOutside][CurrentMapLocation][5];
    SpriteArray =  [];
    
   
    ////// Health-Bar //////////
    GV[54] = new PIXI.extras.TilingSprite(texture2);
    GV[54].sgdaId = 54;
    GV[54].position.x = 0;
    GV[54].position.y = 0;
    GV[54].tilePosition.x = 0;
    GV[54].tilePosition.y = 0;
    GV[54].width = 0;
    GV[54].height = 0;
    GV[55] = new PIXI.extras.TilingSprite(texture2);
    GV[55].sgdaId = 55;
    GV[55].position.x = 0;
    GV[55].position.y = 0;
    GV[55].tilePosition.x = 1;
    GV[55].tilePosition.y = 1;
    GV[55].width = 0;
    GV[55].height = 0;
    ////// Energy-Bar //////////
    GV[56] = new PIXI.extras.TilingSprite(texture2);
    GV[56].sgdaId = 56;
    GV[56].position.x = 0;
    GV[56].position.y = 0;
    GV[56].tilePosition.x = 0;
    GV[56].tilePosition.y = 0;
    GV[56].width = 0;
    GV[56].height = 0;
    GV[57] = new PIXI.extras.TilingSprite(texture2);
    GV[57].sgdaId = 57;
    GV[57].position.x = 0;
    GV[57].position.y = 0;
    GV[57].tilePosition.x = 0;
    GV[57].tilePosition.y = 0;
    GV[57].width = 0;
    GV[57].height = 0;
    ////// Mana-Bar //////////
    GV[58] = new PIXI.extras.TilingSprite(texture2);
    GV[58].sgdaId = 58;
    GV[58].position.x = 0;
    GV[58].position.y = 0;
    GV[58].tilePosition.x = 0;
    GV[58].tilePosition.y = 0;
    GV[58].width = 0;
    GV[58].height = 0;
    GV[59] = new PIXI.extras.TilingSprite(texture2);
    GV[59].sgdaId = 59;
    GV[59].position.x = 0;
    GV[59].position.y = 0;
    GV[59].tilePosition.x = 1;
    GV[59].tilePosition.y = 1;
    GV[59].width = 0;
    GV[59].height = 0;
    
    ///////////////////////// Create Container ////////////////////////////
    container = new PIXI.Container();
    app.stage.addChild(container);
    container.position.x = -64;
    container.position.y = -168;

    for(let i = 4;i<GV.length;i++){
      if (typeof GV[i] === 'undefined') {
      }else{
        container.addChild(GV[i]);
      }
    }
    container.addChild(GV[0]);


    ////// Start-Screen //////////
    var startscreen = PIXI.Texture.fromImage("sprites/startscreen.png?=" + new Date().getTime());
    var startarrow = PIXI.Texture.fromImage("sprites/startarrow.png?=" + new Date().getTime());
    var startoption1 = PIXI.Texture.fromImage("sprites/option2.png?=" + new Date().getTime());
    var startoption2 = PIXI.Texture.fromImage("sprites/option1.png?=" + new Date().getTime());
    containerstart = new PIXI.Container();
    containerstart.position.x = 0;
    containerstart.position.y = 0;    
    SV[0] = new PIXI.extras.TilingSprite(startscreen);
    SV[0].sgdaId = BackgroundStart.id;
    SV[0].position.x = BackgroundStart.on_s_p_x;
    SV[0].position.y = BackgroundStart.on_s_p_y;
    SV[0].tilePosition.x = BackgroundStart.off_s_p_x;
    SV[0].tilePosition.y = BackgroundStart.off_s_p_y;
    SV[0].width = BackgroundStart.on_s_s_w;
    SV[0].height = BackgroundStart.on_s_s_h;

    SV[1] = new PIXI.extras.TilingSprite(startarrow);
    SV[1].sgdaId = ArrowStart.id;
    SV[1].position.x = ArrowStart.on_s_p_x;
    SV[1].position.y = ArrowStart.on_s_p_y;
    SV[1].tilePosition.x = ArrowStart.off_s_p_x;
    SV[1].tilePosition.y = ArrowStart.off_s_p_y;
    SV[1].width = ArrowStart.on_s_s_w;
    SV[1].height = ArrowStart.on_s_s_h;

    SV[2] = new PIXI.extras.TilingSprite(startoption1);
    SV[2].sgdaId = Option1Start.id;
    SV[2].position.x = Option1Start.on_s_p_x;
    SV[2].position.y = Option1Start.on_s_p_y;
    SV[2].tilePosition.x = Option1Start.off_s_p_x;
    SV[2].tilePosition.y = Option1Start.off_s_p_y;
    SV[2].width = Option1Start.on_s_s_w;
    SV[2].height = Option1Start.on_s_s_h;

    SV[3] = new PIXI.extras.TilingSprite(startoption2);
    SV[3].sgdaId = Option2Start.id;
    SV[3].position.x = Option2Start.on_s_p_x;
    SV[3].position.y = Option2Start.on_s_p_y;
    SV[3].tilePosition.x = Option2Start.off_s_p_x;
    SV[3].tilePosition.y = Option2Start.off_s_p_y;
    SV[3].width = Option2Start.on_s_s_w;
    SV[3].height = Option2Start.on_s_s_h;

    for(let i = 1;i<SV.length;i++){
      if (typeof SV[i] === 'undefined') {
      }else{
        containerstart.addChild(SV[i]);
      }
    }
    containerstart.addChild(SV[0]);






    ////// Death-Screen //////////
    DV[0] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][6]);
    
    ///////////////////////// Create Death-Container ////////////////////////////
    containerdeath = new PIXI.Container();
    containerdeath.position.x = 0;
    containerdeath.position.y = 0;

    for(let i = 1;i<DV.length;i++){
      if (typeof DV[i] === 'undefined') {
      }else{
        containerdeath.addChild(DV[i]);
      }
    }
    containerdeath.addChild(DV[0]);





    ////// Talk-Screen //////////
    TV[0] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][6]);
    
    ///////////////////////// Create Talk-Container ////////////////////////////
    containertalk = new PIXI.Container();
    containertalk.position.x = 0;
    containertalk.position.y = 0;

    for(let i = 1;i<TV.length;i++){
      if (typeof TV[i] === 'undefined') {
      }else{
        containertalk.addChild(TV[i]);
      }
    }
    containertalk.addChild(TV[0]);





    ////// Inventory-Screen //////////
    IV[0] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][6]);
    
    ///////////////////////// Create Inventory-Container ////////////////////////////
    containerinventory = new PIXI.Container();
    containerinventory.position.x = 0;
    containerinventory.position.y = 0;

    for(let i = 1;i<IV.length;i++){
      if (typeof IV[i] === 'undefined') {
      }else{
        containerinventory.addChild(IV[i]);
      }
    }
    containerinventory.addChild(IV[0]);


    app.ticker._maxElapsedMS = 16.67;
    app.ticker.add(delta => gameLoop(delta));

    weaponHit = setWeaponHitArray(144, 136, 17, 18);
    crabHit = setHitArray(35, 162, 17, 18);
    for(let i=0;i<16;i++){
      overWorldZ[interiorOrOutside][i][1]=setMapArray(272, 328,i);
      if(overWorldZ[interiorOrOutside][i][7].length != 0){
        for(let j=0;j<overWorldZ[interiorOrOutside][i][7].length;j++){
          overWorldZ[interiorOrOutside][i][7][j][1]=setInteriorArray(272, 328,i,j);
        }
      }
    }
  }
  //musicSound.play();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////                              Gameloop Function                                     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function gameLoop(delta){
    if(CurrentGLobalState[0] == 'pause'){
      Player.playerControlShemaPause();
    }else if(CurrentGLobalState[0] == 'changeLevel'){
      //console.log('changeLevel');
      if(changeLevelCounter <= 40){
        if(changeLevelCounter>35){
          if(changeLevelCounter==39){
            OverWorld.fadeState = 2;
            OverWorld.MVS(OverWorld.id);
            container.addChild(GV[0]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>30){
          if(changeLevelCounter==34){
            OverWorld.fadeState = 1;
            OverWorld.MVS(OverWorld.id);
            container.addChild(GV[0]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>25){
          if(changeLevelCounter==29){
            OverWorld.fadeState = 0;
            OverWorld.MVS(OverWorld.id);
            container.addChild(GV[0]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>20){
          if(changeLevelCounter==24){
            OverWorld.MVS(OverWorld.id);
            container.addChild(GV[0]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>15){
          if(changeLevelCounter==19){
            for(let i = 0; i<NpcArray.length; i++){
              //TempNpcInfo[i] = NpcArray[i].on_s_p_x_r;
              //console.log(NpcArray[i].on_s_p_x_r);
              TempNpcInfo[i][0] = NpcArray[i].on_s_p_x_r;
              TempNpcInfo[i][1] = NpcArray[i].on_s_p_x;
              TempNpcInfo[i][2] = NpcArray[i].on_s_p_y_r;
              TempNpcInfo[i][3] = NpcArray[i].on_s_p_y;
              NpcArray[i].on_s_p_x_r = 0;
              NpcArray[i].on_s_p_x = 0;
              NpcArray[i].on_s_p_y_r = 0;
              NpcArray[i].on_s_p_y = 0;
              NpcArray[i].GVS(NpcArray[i].id);
            }
            console.log('TempNpcInfo[i]');
            console.log(TempNpcInfo);
            TempCurrentMapLocation = CurrentMapLocation;
            if(changeLevelDirection > 4){
   
            }else{
              CurrentMapLocation = CurrentMapLocation + changeLevelDirection;
              GV[0] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][6]);
            }
            if(changeLevelDirection == -4){
              Player.on_s_p_y_r = 288;
              Player.on_s_p_y = Player.on_s_p_y+253;
       /*        Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp(); */
              container.position.y = -168;
            }else if(changeLevelDirection == 4){
              Player.on_s_p_y_r = 48;
              Player.on_s_p_y = Player.on_s_p_y-240;
              container.position.y = -56;
     /*          Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown(); */
            }else if(changeLevelDirection == -1){
              Player.on_s_p_x_r = 242;
              Player.on_s_p_x = 242;
              container.position.x = -64;
       /*        Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft(); */
            }else if(changeLevelDirection == 1){
              Player.on_s_p_x_r = -1;
              Player.on_s_p_x = -1;
              container.position.x = 0;
              console.log('Moveright');
             /*  console.log('Player.on_s_p_x_r: '+Player.on_s_p_x_r);
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight(); */
            }else{
              Player.on_s_p_y_r = Player.on_s_p_y_r+16;
              Player.on_s_p_y = Player.on_s_p_y_r+16;
              container.position.y = container.position.y+16;
              console.log('MoveIn');
            }
            NpcArray = overWorldZ[interiorOrOutside][CurrentMapLocation][2][0];
                    ////////////////// NPC Texture Load-Up /////////////////////////
            if(overWorldZ[interiorOrOutside][CurrentMapLocation][2][1] != []){
              for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][2][1].length;i++){
                let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][2][1][i];
                overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
              }
              container.children.forEach(child => {
                if (child instanceof PIXI.TilingSprite && child.width==16 && child.height==16) {
                    console.log('Found a Crab:');
                }else if (child instanceof PIXI.TilingSprite && child.width==16 && child.height==24) {
                    console.log('Found a Char:');
                }else if (child instanceof PIXI.TilingSprite && child.width==256 && child.height==312) {
                    console.log('Found a Level:');
                }else{
                  console.log('Found a Something elsel:');
                }
            });
            if(container.children.length > 0){
              console.log('Before removal:', container.children);
            }
            container.removeChildren();
            if(container.children.length==0){
              console.log('After removal:', container.children);
            }
            


              for(let i = 10;i<overWorldZ[interiorOrOutside][TempCurrentMapLocation][2][2].length+10;i++){
              }
              for(let i = 10;i<overWorldZ[interiorOrOutside][CurrentMapLocation][2][2].length+10;i++){
                GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-10]);
              }
            }

            ////////////////// Item Texture Load-Up /////////////////////////
            if(overWorldZ[interiorOrOutside][CurrentMapLocation][3][1] != []){
              for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][3][1].length;i++){
                let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][3][1][i];
                overWorldZ[interiorOrOutside][CurrentMapLocation][3][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
              }
              for(let i = 34;i<overWorldZ[interiorOrOutside][CurrentMapLocation][3][2].length+34;i++){
                GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-34]);
              }
            }

            ////////////////// Pickable Texture Load-Up /////////////////////////
            if(overWorldZ[interiorOrOutside][CurrentMapLocation][4][1] != []){
              for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][4][1].length;i++){
                let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][4][1][i];
                overWorldZ[interiorOrOutside][CurrentMapLocation][4][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
              }
              for(let i = 38;i<overWorldZ[interiorOrOutside][CurrentMapLocation][4][2].length+38;i++){
                GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-38]);
              }
            }

            ////////////////// Destroyable Texture Load-Up /////////////////////////
            if(overWorldZ[interiorOrOutside][CurrentMapLocation][4][1] != []){
              for(let i = 0;i<overWorldZ[interiorOrOutside][CurrentMapLocation][5][1].length;i++){
                let tempFileName = overWorldZ[interiorOrOutside][CurrentMapLocation][5][1][i];
                overWorldZ[interiorOrOutside][CurrentMapLocation][5][2][i]=PIXI.Texture.fromImage('sprites/'+tempFileName+".png?=" + new Date().getTime());
              }
              for(let i = 46;i<overWorldZ[interiorOrOutside][CurrentMapLocation][5][1].length+46;i++){
                GV[i] = new PIXI.extras.TilingSprite(overWorldZ[interiorOrOutside][CurrentMapLocation][2][2][i-46]);
              }
            }
            console.log('NpcArray');
            console.log(NpcArray);
          }         
          changeLevelCounter--;
        }else if(changeLevelCounter>10){
          if(changeLevelCounter==14){
            OverWorld.fadeState = 1;
            OverWorld.MVS(OverWorld.id);
            container.addChild(GV[0]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>5){
          if(changeLevelCounter==9){
            OverWorld.fadeState = 2;
            OverWorld.MVS(OverWorld.id);
            container.addChild(GV[0]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>0){
          if(changeLevelCounter==4){
            OverWorld.fadeState = 3;
            OverWorld.MVS(OverWorld.id);
            container.addChild(GV[0]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter==0){
          for(let i = 0; i<overWorldZ[interiorOrOutside][TempCurrentMapLocation][2][0].length; i++){
              overWorldZ[interiorOrOutside][TempCurrentMapLocation][2][0][i].on_s_p_x_r = TempNpcInfo[i][0];
              overWorldZ[interiorOrOutside][TempCurrentMapLocation][2][0][i].on_s_p_x = TempNpcInfo[i][1];
              overWorldZ[interiorOrOutside][TempCurrentMapLocation][2][0][i].on_s_p_y_r = TempNpcInfo[i][2];
              overWorldZ[interiorOrOutside][TempCurrentMapLocation][2][0][i].on_s_p_y = TempNpcInfo[i][3];
            }
          changeLevelCounter = 40;
          CurrentGLobalState[0] = 'inGame';
          Player.directioncounter = 0;
          Player.directioncountermax = 0;
          Player.directioncounter = 0;
          Player.directioncountermax = 0;
          //Player.momentevent = 'just-stand';
        }
        //console.log('changeLevelCounter: '+changeLevelCounter);
        
      }
      
    }else if(CurrentGLobalState[0] == 'startScreen'){
      Player.keyboardListener();
      Player.playerControlShemaStartScreen();
      if(CurrentGLobalState[0] == 'startScreen'){
        app.stage.removeChild(container);
        app.stage.addChild(containerstart);
        containerstart.addChild(SV[0]);
        containerstart.addChild(SV[2]);
        containerstart.addChild(SV[3]);
        containerstart.addChild(SV[1]);
      }else{
        app.stage.removeChild(containerstart);
        app.stage.addChild(container);
      }
    }else if(CurrentGLobalState[0] == 'death'){
      Player.playerControlShemaDeath();	
    }else if(CurrentGLobalState[0] == 'Credits'){
      Player.playerControlShemaCredits();	
    }else if(CurrentGLobalState[0] == 'Talking'){
      Player.playerControlShemaCredits();	
    }else if(CurrentGLobalState[0] == 'inGame'){

    ////////////////////////////////////////////////////// Background /////////////////////////////////////////////
      OverWorld.sequenceDrawArrayFiller(OverWorld.sgdavar);
      OverWorld.MVS(OverWorld.id);
      container.addChild(GV[0]);

      
    ////////////////////////////////////////////////////// Entitys ///////////////////////////////////////////// 
      Player.playerFunction();
      if(DestroyableArray != []){
        for(let i=0;i<DestroyableArray.length;i++){
          //DestroyableArray[i].destroyableFunction();
        }
      }
      
      if(NpcArray != []){
        for(let i=0;i<NpcArray.length;i++){
          NpcArray[i].npcFunction();
        }
      }
      
      if(ItemArray != []){
        for(let i=0;i<ItemArray.length;i++){
          //ItemArray[i].itemFunction();
        }
      }

      if(ThrowableArray != []){
        for(let i=0;i<ThrowableArray.length;i++){
          //ThrowableArray[i].throwableFunction();
        }
      }
      if(ThrowableArray != []){
        for(let i=0;i<SpriteArray.length;i++){
          //SpriteArray[i].spriteFunction();
        }
      }

    ////////////////////////////////////////////////////// Entity Sequence Draw Filler ///////////////////////////////////////////// 
      Player.sequenceDrawArrayFiller(0);
      for(let i=0;i<DestroyableArray.length;i++){
        //DestroyableArray[i].sequenceDrawArrayFiller(0);
      }
      if(NpcArray.length>0){
        for(let i=0;i<NpcArray.length;i++){
          NpcArray[i].sequenceDrawArrayFiller(0);
        }
      }
 
      for(let i=0;i<ItemArray.length;i++){
        //ItemArray[i].sequenceDrawArrayFiller(0);
      }
      for(let i=0;i<ThrowableArray.length;i++){
        //ThrowableArray[i].sequenceDrawArrayFiller(0);
      }
      for(let i=0;i<SpriteArray.length;i++){
        //SpriteArray[i].sequenceDrawArrayFiller(0);
      }

    ////////////////////////////////////////////////////// GVS ///////////////////////////////////////////// 
      Player.GVS(Player.id);
      for(let i=0;i<DestroyableArray.length;i++){
        //DestroyableArray[i].GVS(DestroyableArray[i].id);
      }
      if(NpcArray.length>0){
        for(let i=0;i<NpcArray.length;i++){
          NpcArray[i].GVS(NpcArray[i].id);
        }
      }
      for(let i=0;i<ItemArray.length;i++){
        //ItemArray[i].GVS(ItemArray[i].id);
      }
      for(let i=0;i<ThrowableArray.length;i++){
        //ThrowableArray[i].GVS(ThrowableArray[i].id);
      }
      for(let i=0;i<SpriteArray.length;i++){
        //SpriteArray[i].GVS(SpriteArray[i].id);
      }
    }
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////									Game-Draw-Stuff																				//////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    for(let i=0; i<=312 ; i++){
      if(SGDA[i].length>0){
        for(let j=0; j<SGDA[i].length; j++){
          container.addChild(SGDA[i][j]);
        }
        container.addChild(GV[7]);
        container.addChild(GV[5]);
      }else{}
    }
    container.addChild(GV[6]);
  }
  </script>

  
  
</html>