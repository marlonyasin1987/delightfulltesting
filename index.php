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
    #onscreen{
      image-rendering: pixelated;
    }
  </style>  
  <body oncontextmenu="return false;">
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
  var CurrentGLobalState = ['inGame','normal'];
  var CurrentMapLocation = 12;

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

    let app2 = new Application({ 
      width: 256, 
      height: 312,                       
      antialiasing: true, 
      transparent: false, 
      resolution: 1
    }
  );

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
  //Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view);
  app.view.id = "onscreen";
  loader
    .add("sprites/mapi2ss.png")
    .add("sprites/testisss.png")
    .add("sprites/testcrabs.png")
    .load(setup);
  var GV = new Array();
  var MV = new Array(16);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////									Object Generating-Stuff																				//////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var OverWorld = new Spriteelement(0,2,"",0,0,1792,312,0,0,256,312,0,0,0);
  var changeLevelCounter = 40;
  var changeLevelDirection = 0;

  var Player = new Charachteri(1,'','normal',0,"",1,1,16,24,200,248,16,24,200,248,15,14,4,1,0,0,12,6);

  var OverWorldZOriginal = [];
  var CollisionArray = [];
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
  console.log('SGDA');
  console.log(SGDA);          
  var SGDA2 = new Array(314);

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
    volume: 0.3
  });


  function setup() {
    for(let i = 0;i<16;i++){
      overWorldZ[i][6]=PIXI.Texture.fromImage("sprites/collison"+i+"show.png?=" + new Date().getTime());
    }
    for(let i = 0;i<16;i++){
      MV[i]=new PIXI.extras.TilingSprite(overWorldZ[i][6]);
      
    }
    
    var texture1 = PIXI.Texture.fromImage("sprites/mapi2ssz.png?=" + new Date().getTime());
    var texture2 = PIXI.Texture.fromImage("sprites/testisssz.png?=" + new Date().getTime());
    var texture3 = PIXI.Texture.fromImage("sprites/testcrabsz.png?=" + new Date().getTime());
    var texture4 = PIXI.Texture.fromImage("sprites/weapons.png?=" + new Date().getTime());

    overWorldZOriginal = overWorldZ;
    CollisionArray = overWorldZ[CurrentMapLocation][1];
    NpcArray = overWorldZ[CurrentMapLocation][2];
    ItemArray = overWorldZ[CurrentMapLocation][3];
    ThrowableArray = overWorldZ[CurrentMapLocation][4];
    DestroyableArray = overWorldZ[CurrentMapLocation][5];
    SpriteArray =  [];
    
    GV[0] = new PIXI.extras.TilingSprite(overWorldZ[CurrentMapLocation][6]);
    GV[1] = new PIXI.extras.TilingSprite(texture2);
    GV[1].sgdaId = 1;
    GV[1].position.x = 0;
    GV[1].position.y = 0;
    GV[1].tilePosition.x = 0;
    GV[1].tilePosition.y = 0;
    GV[1].width = 0;
    GV[1].height = 0;
    GV[2] = new PIXI.extras.TilingSprite(texture2);
    GV[2].sgdaId = 2;
    GV[2].position.x = 0;
    GV[2].position.y = 0;
    GV[2].tilePosition.x = 0;
    GV[2].tilePosition.y = 0;
    GV[2].width = 0;
    GV[2].height = 0;
    GV[3] = new PIXI.extras.TilingSprite(texture3);
    GV[3].sgdaId = 3;
    GV[3].position.x = 0;
    GV[3].position.y = 0;
    GV[3].tilePosition.x = 0;
    GV[3].tilePosition.y = 0;
    GV[3].width = 0;
    GV[3].height = 0;
    GV[4] = new PIXI.extras.TilingSprite(texture3);
    GV[4].sgdaId = 4;
    GV[4].position.x = 0;
    GV[4].position.y = 0;
    GV[4].tilePosition.x = 0;
    GV[4].tilePosition.y = 0;
    GV[4].width = 0;
    GV[4].height = 0;
    GV[5] = new PIXI.extras.TilingSprite(texture4);
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
    GV[7] = new PIXI.extras.TilingSprite(texture2);
    GV[7].sgdaId = 7;
    GV[7].position.x = 0;
    GV[7].position.y = 0;
    GV[7].tilePosition.x = 0;
    GV[7].tilePosition.y = 0;
    GV[7].width = 0;
    GV[7].height = 0;
    GV[8] = new PIXI.extras.TilingSprite(texture3);
    GV[8].sgdaId = 8;
    GV[8].position.x = 0;
    GV[8].position.y = 0;
    GV[8].tilePosition.x = 1;
    GV[8].tilePosition.y = 1;
    GV[8].width = 0;
    GV[8].height = 0;
    GV[9] = new PIXI.extras.TilingSprite(texture3);
    GV[9].sgdaId = 9;
    GV[9].position.x = 0;
    GV[9].position.y = 0;
    GV[9].tilePosition.x = 0;
    GV[9].tilePosition.y = 0;
    GV[9].width = 0;
    GV[9].height = 0;
    GV[10] = new PIXI.extras.TilingSprite(texture3);
    GV[10].sgdaId = 10;
    GV[10].position.x = 0;
    GV[10].position.y = 0;
    GV[10].tilePosition.x = 0;
    GV[10].tilePosition.y = 0;
    GV[10].width = 0;
    GV[10].height = 0;
    GV[11] = new PIXI.extras.TilingSprite(texture3);
    GV[11].sgdaId = 11;
    GV[11].position.x = 0;
    GV[11].position.y = 0;
    GV[11].tilePosition.x = 0;
    GV[11].tilePosition.y = 0;
    GV[11].width = 0;
    GV[11].height = 0;
    GV[12] = new PIXI.extras.TilingSprite(texture3);
    GV[12].sgdaId = 12;
    GV[12].position.x = 0;
    GV[12].position.y = 0;
    GV[12].tilePosition.x = 1;
    GV[12].tilePosition.y = 1;
    GV[12].width = 0;
    GV[12].height = 0;
    GV[13] = new PIXI.extras.TilingSprite(texture3);
    GV[13].sgdaId = 13;
    GV[13].position.x = 0;
    GV[13].position.y = 0;
    GV[13].tilePosition.x = 0;
    GV[13].tilePosition.y = 0;
    GV[13].width = 0;
    GV[13].height = 0;
    GV[14] = new PIXI.extras.TilingSprite(texture3);
    GV[14].sgdaId = 14;
    GV[14].position.x = 0;
    GV[14].position.y = 0;
    GV[14].tilePosition.x = 0;
    GV[14].tilePosition.y = 0;
    GV[14].width = 0;
    GV[14].height = 0;
    GV[15] = new PIXI.extras.TilingSprite(texture3);
    GV[15].sgdaId = 15;
    GV[15].position.x = 0;
    GV[15].position.y = 0;
    GV[15].tilePosition.x = 0;
    GV[15].tilePosition.y = 0;
    GV[15].width = 0;
    GV[15].height = 0;
    GV[16] = new PIXI.extras.TilingSprite(texture3);
    GV[16].sgdaId = 16;
    GV[16].position.x = 0;
    GV[16].position.y = 0;
    GV[16].tilePosition.x = 0;
    GV[16].tilePosition.y = 0;
    GV[16].width = 0;
    GV[16].height = 0;
    GV[17] = new PIXI.extras.TilingSprite(texture3);
    GV[17].sgdaId = 17;
    GV[17].position.x = 0;
    GV[17].position.y = 0;
    GV[17].tilePosition.x = 0;
    GV[17].tilePosition.y = 0;
    GV[17].width = 0;
    GV[17].height = 0;
    container = new PIXI.Container();
    container.position.x = -64;
    container.position.y = -168;
    container.addChild(MV[CurrentMapLocation]);
    container.addChild(GV[1]);
    container.addChild(GV[2]);
    container.addChild(GV[3]);
    container.addChild(GV[4]);
    container.addChild(GV[5]);
    container.addChild(GV[6]);
    container.addChild(GV[7]);
    container.addChild(GV[8]);
    container.addChild(GV[9]);
    container.addChild(GV[10]);
    container.addChild(GV[11]);
    container.addChild(GV[12]);
    container.addChild(GV[13]);
    container.addChild(GV[14]);
    container.addChild(GV[15]);
    container.addChild(GV[16]);
    container.addChild(GV[17]);
    app.ticker.add(delta => gameLoop(delta));
    weaponHit = setWeaponHitArray(144, 136, 17, 18);
    crabHit = setHitArray(35, 162, 17, 18);
    for(let i=0;i<16;i++){
      overWorldZ[i][1]=setMapArray(272, 328,i);
    }
  }
  musicSound.play();

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////                              Gameloop Function                                     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function gameLoop(delta){
    if(CurrentGLobalState[0] == 'pause'){
      Player.playerControlShemaPause();
    }else if(CurrentGLobalState[0] == 'changeLevel'){
      console.log('changeLevel');
      if(changeLevelCounter <= 40){
        if(changeLevelCounter>35){
          if(changeLevelCounter==39){
            OverWorld.fadeState = 2;
            OverWorld.MVS(CurrentMapLocation);
            container.addChild(MV[CurrentMapLocation]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>30){
          if(changeLevelCounter==34){
            OverWorld.fadeState = 1;
            OverWorld.MVS(CurrentMapLocation);
            container.addChild(MV[CurrentMapLocation]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>25){
          if(changeLevelCounter==29){
            OverWorld.fadeState = 0;
            OverWorld.MVS(CurrentMapLocation);
            container.addChild(MV[CurrentMapLocation]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>20){
          if(changeLevelCounter==24){
            OverWorld.MVS(CurrentMapLocation);
            container.addChild(MV[CurrentMapLocation]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>15){
          if(changeLevelCounter==19){
            for(let i = 0; i<NpcArray.length; i++){
              //TempNpcInfo[i] = NpcArray[i].on_s_p_x_r;
              console.log(NpcArray[i].on_s_p_x_r);
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
            TempCurrentMapLocation = CurrentMapLocation;
            CurrentMapLocation = CurrentMapLocation + changeLevelDirection;
            if(changeLevelDirection == -4){
              Player.on_s_p_y_r = Player.on_s_p_y_r + 256;
              Player.on_s_p_y = Player.on_s_p_y + 256;
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              Player.moveUp();
              container.position.y = -168;
            }else if(changeLevelDirection == 4){
              Player.on_s_p_y_r = Player.on_s_p_y_r - 256;
              Player.on_s_p_y = Player.on_s_p_y - 256;
              container.position.y = -56;
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
              Player.moveDown();
            }else if(changeLevelDirection == -1){
              Player.on_s_p_x_r = Player.on_s_p_x_r + 256;
              Player.on_s_p_x = Player.on_s_p_x + 256;
              container.position.x = -64;
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
              Player.moveLeft();
            }else if(changeLevelDirection == 1){
              Player.on_s_p_x_r = Player.on_s_p_x_r - 256;
              Player.on_s_p_x = Player.on_s_p_x - 256;
              container.position.x = 0;
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
              Player.moveRight();
            }else{}
            NpcArray = overWorldZ[CurrentMapLocation][2];
            //console.log('NpcArray');
            //console.log(NpcArray);
          }         
          changeLevelCounter--;
        }else if(changeLevelCounter>10){
          if(changeLevelCounter==14){
            OverWorld.fadeState = 1;
            OverWorld.MVS(CurrentMapLocation);
            container.addChild(MV[CurrentMapLocation]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>5){
          if(changeLevelCounter==9){
            OverWorld.fadeState = 2;
            OverWorld.MVS(CurrentMapLocation);
            container.addChild(MV[CurrentMapLocation]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter>0){
          if(changeLevelCounter==4){
            OverWorld.fadeState = 3;
            OverWorld.MVS(CurrentMapLocation);
            container.addChild(MV[CurrentMapLocation]);
          }
          changeLevelCounter--;
        }else if(changeLevelCounter==0){
          for(let i = 0; i<overWorldZ[TempCurrentMapLocation][2].length; i++){
              overWorldZ[TempCurrentMapLocation][2][i].on_s_p_x_r = TempNpcInfo[i][0];
              overWorldZ[TempCurrentMapLocation][2][i].on_s_p_x = TempNpcInfo[i][1];
              overWorldZ[TempCurrentMapLocation][2][i].on_s_p_y_r = TempNpcInfo[i][2];
              overWorldZ[TempCurrentMapLocation][2][i].on_s_p_y = TempNpcInfo[i][3];
            }
          changeLevelCounter = 40;
          CurrentGLobalState[0] = 'inGame';
          console.log(CurrentGLobalState[0]);
          Player.directioncounter = 1;
          Player.directioncountermax = 20;
        }
        console.log('changeLevelCounter: '+changeLevelCounter);
      }
      
    }else if(CurrentGLobalState[0] == 'startScreen'){
      Player.playerControlShemaStartScreen();	
    }else if(CurrentGLobalState[0] == 'death'){
      Player.playerControlShemaDeath();	
    }else if(CurrentGLobalState[0] == 'Credits'){
      Player.playerControlShemaCredits();	
    }else if(CurrentGLobalState[0] == 'Talking'){
      Player.playerControlShemaCredits();	
    }else if(CurrentGLobalState[0] == 'inGame'){

    ////////////////////////////////////////////////////// Background /////////////////////////////////////////////
      OverWorld.sequenceDrawArrayFiller(2);
      OverWorld.MVS(CurrentMapLocation);

    ////////////////////////////////////////////////////// Entitys ///////////////////////////////////////////// 
      Player.playerFunction();
      for(let i=0;i<DestroyableArray.length;i++){
        DestroyableArray[i].destroyableFunction();
      }
      for(let i=0;i<NpcArray.length;i++){
        NpcArray[i].npcFunction();
      }
      for(let i=0;i<ItemArray.length;i++){
        ItemArray[i].itemFunction();
      }
      for(let i=0;i<ThrowableArray.length;i++){
        ThrowableArray[i].throwableFunction();
      }
      for(let i=0;i<SpriteArray.length;i++){
        SpriteArray[i].spriteFunction();
      }

    ////////////////////////////////////////////////////// Entity Sequence Draw Filler ///////////////////////////////////////////// 
      Player.sequenceDrawArrayFiller(0);
      for(let i=0;i<DestroyableArray.length;i++){
        DestroyableArray[i].sequenceDrawArrayFiller(0);
      }
      for(let i=0;i<NpcArray.length;i++){
        NpcArray[i].sequenceDrawArrayFiller(0);
      }
      for(let i=0;i<ItemArray.length;i++){
        ItemArray[i].sequenceDrawArrayFiller(0);
      }
      for(let i=0;i<ThrowableArray.length;i++){
        ThrowableArray[i].sequenceDrawArrayFiller(0);
      }
      for(let i=0;i<SpriteArray.length;i++){
        SpriteArray[i].sequenceDrawArrayFiller(0);
      }

    ////////////////////////////////////////////////////// GVS ///////////////////////////////////////////// 
      Player.GVS(Player.id);
      for(let i=0;i<DestroyableArray.length;i++){
        DestroyableArray[i].GVS(DestroyableArray[i].id);
      }
      for(let i=0;i<NpcArray.length;i++){
        NpcArray[i].GVS(NpcArray[i].id);
      }
      for(let i=0;i<ItemArray.length;i++){
        ItemArray[i].GVS(ItemArray[i].id);
      }
      for(let i=0;i<ThrowableArray.length;i++){
        ThrowableArray[i].GVS(ThrowableArray[i].id);
      }
      for(let i=0;i<SpriteArray.length;i++){
        SpriteArray[i].GVS(SpriteArray[i].id);
      }


      container.addChild(MV[CurrentMapLocation]);
      container.addChild(GV[2]);
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
    app.stage.addChild(container);
  }

  </script>

  
  
</html>