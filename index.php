<!doctype html>

<html lang="de">

  <head>
  	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="author" content="Marlon Yasin" />
	<meta name="description" content="Webseite ueber die Acryl Bilder von Marlon Yasin" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="pixi/pixi.js"></script>
	<script type="text/javascript" src="classes/arrayfields.js"></script>
	<script type="text/javascript" src="classes/Spritelement.js"></script>
	<script type="text/javascript" src="classes/Being.js"></script>
  <script type="text/javascript" src="classes/Npc.js"></script>
  <script type="text/javascript" src="classes/Enemy.js"></script>
  <script type="text/javascript" src="classes/Crab.js"></script>
	<script type="text/javascript" src="classes/Charachter.js"></script>
	<script type="text/javascript" src="additionalstuff.js"></script>
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////                                                            Global-VARIABLES                                                                             //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /////////////////////Resolution-Stuff//////////////////////////////////////

  var wrapheight = window.screen.height;
  var reso = 5;/*
  let resoAnpasser = function(){
    if(window.screen.width >= 1344){
      reso = 7;
    }else if(window.screen.width >= 1152){
      reso = 6;
    }else if(window.screen.width >= 960){
      reso = 5;
    }else if(window.screen.width >= 768){
      reso = 4;
    }else if(window.screen.width >= 576){
      reso = 3;
    }else if(window.screen.width >= 384){
      reso = 2;
    }else if(window.screen.width >= 192){
      reso = 1;
    }else{
      reso = 1;
    }
    //document.getElementById("wrap").style.height = wrapheight+'px';
    document.getElementById("onscreen").width = 192 * reso;
    document.getElementById("onscreen").height = 144 * reso;
  }*/
  //resoAnpasser();

  var backgroundimagewidth = 256 * reso;
  var backgroundimageheight = 312 * reso;
  var foregroundimagewidth = 192 * reso;
  var foregroundimageheight = 144 * reso;


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


  let pause = 0;
  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////// Sprite-GRAPHICS-VARIABLES //////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////

  ///////////// Charachter ----------------------	0 ------------------ //
  ////////////////////////////////////////////////////// /////////////////////////////////////////////////////// /////////////////////////////////////////////////////
  ////    [Image-object,off_sprite_posi_x, off_sprite_posi_y, off_sprite_size_w, off_sprite_size_h, on_sprite_posi_x, on_sprite_posi_y, on_sprite_size_w, on_sprite_size_h],   ///
  ////////////////////////////////////////////////////// /////////////////////////////////////////////////////// ///////////////////////////////////////////////////
  ///////////// NPC ----------------------------- 1-9 ---------------- //

  ///////////// Charachter Projectiles ---------- 10 ----------------- //

  ///////////// NPC Projectiles ----------------- 11-19  ------------- //

  ///////////// Nothing ------------------------- 20  ---------------- //

  ///////////// NPC Drop-Items ------------------ 21-29  ------------- //

  ///////////// Nothing ------------------------- 30  ---------------- //

  ///////////// Level-Items-Consumable ---------- 31-34 -------------- //

  ////////////// Nothing ------------------------ 35-39 -------------- //

  /////////////// Nothing ----------------------- 40 ----------------- //
  
  ///////////// Level-Items-Usable -------------- 41-44 -------------- //

  ///////////////////////////////////////////////////// End ////////////////////////////////////////////////////
    


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////             Graphics Setup                                          							////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////				

  //Aliases
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////									Object Generating-Stuff																				//////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  var Currentlevel = new Spriteelement(0,2,"",0,0,256,312,0,0,256,312,0,0,0);
  var Player = new Charachteri(1,'','normal',0,"",1,1,16,24,200,248,16,24,200,248,15,14,4,1,0,0,12,6);
  var NpcArray = new Array(16);
  NpcArray[0] = new Crab(8,'','normal',0,"",1,1,16,16,240,176,16,16,240,176,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[1] = new Crab(9,'','normal',0,"",1,1,16,16,240,200,16,16,240,200,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[2] = new Crab(10,'','normal',0,"",1,1,16,16,240,208,16,16,240,208,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[3] = new Crab(11,'','normal',0,"",1,1,16,16,240,216,16,16,240,216,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[4] = new Crab(12,'','normal',0,"",1,1,16,16,208,208,16,16,208,208,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[5] = new Crab(13,'','normal',0,"",1,1,16,16,160,250,16,16,160,250,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[6] = new Crab(14,'','normal',0,"",1,1,16,16,160,240,16,16,160,240,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[7] = new Crab(15,'','normal',0,"",1,1,16,16,140,248,16,16,140,248,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[8] = new Crab(16,'','normal',0,"",1,1,16,16,160,266,16,16,160,266,15,16,6,1,[],0,crabSmall,100,1);
  NpcArray[9] = new Crab(17,'','normal',0,"",1,1,16,16,120,248,16,16,120,248,15,16,6,1,[],0,crabSmall,100,1);
  //Npc[1] = new Crab(8,'','normal',0,"",1,1,16,16,240,200,16,16,240,200,15,16,8,1,[],0);
  //Npc[0] = new Crab(9,'','normal',0,"",1,1,16,16,240,176,16,16,240,176,15,16,8,1,[],0);
  //Npc[1] = new Crab(10,'','normal',0,"",1,1,16,16,240,200,16,16,240,200,15,16,8,1,[],0);
  //Npc[0] = new Crab(11,'','normal',0,"",1,1,16,16,240,176,16,16,240,176,15,16,8,1,[],0);
  //Npc[1] = new Crab(12,'','normal',0,"",1,1,16,16,240,200,16,16,240,200,15,16,8,1,[],0);
  //Npc[0] = new Crab(13,'','normal',0,"",1,1,16,16,240,176,16,16,240,176,15,16,8,1,[],0);
  //Npc[1] = new Crab(14,'','normal',0,"",1,1,16,16,240,200,16,16,240,200,15,16,8,1,[],0);
  //Npc[0] = new Crab(15,'','normal',0,"",1,1,16,16,240,176,16,16,240,176,15,16,8,1,[],0);
  //Npc[1] = new Crab(16,'','normal',0,"",1,1,16,16,240,200,16,16,240,200,15,16,8,1,[],0);
  //Npc[2] = new Spriteelement(6,0,"",1,1,16,16,190,220,16,16,190,220,15);

  var SGDA = new Array(314);
  for(i=0;i<312;i++){
    SGDA[i]=new Array(0);
  }
            
  var SGDA2 = new Array(314);
  var attackSound = new Audio('char_atttack.wav');
  function setup() {
    var texture1 = PIXI.Texture.fromImage("sprites/mapi2ss.png");
    var texture2 = PIXI.Texture.fromImage("sprites/testisss.png");
    var texture3 = PIXI.Texture.fromImage("sprites/testcrabs.png");
    var texture4 = PIXI.Texture.fromImage("sprites/habibismall.png");
    var sprite = new PIXI.Sprite(PIXI.Texture.fromCanvas(app));
    GV[0] = new PIXI.extras.TilingSprite(texture1);
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
    container.addChild(GV[0]);
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
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////									Game-Sound-Stuff																				//////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function gameSound(){

  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////									Game-Draw-Stuff																				//////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////                              Gameloop Function                                     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function gameLoop(delta){
    //console.log('looopi');
    if(pause == 1){
      Player.playerControlShemaPause();	
    }else if(pause == 0){
      Currentlevel.sequenceDrawArrayFiller(1);
      Currentlevel.GVS(Currentlevel.id);
      Player.playerFunction();
      NpcArray[0].crabFunction();
      NpcArray[1].crabFunction();
      NpcArray[2].crabFunction();
      NpcArray[3].crabFunction();
      NpcArray[4].crabFunction();
      NpcArray[5].crabFunction();
      NpcArray[6].crabFunction();
      NpcArray[7].crabFunction();
      NpcArray[8].crabFunction();
      NpcArray[9].crabFunction();
      Player.sequenceDrawArrayFiller(0);
      NpcArray[0].sequenceDrawArrayFiller(0);
      NpcArray[1].sequenceDrawArrayFiller(0);
      NpcArray[2].sequenceDrawArrayFiller(0);
      NpcArray[3].sequenceDrawArrayFiller(0);
      NpcArray[4].sequenceDrawArrayFiller(0);
      NpcArray[5].sequenceDrawArrayFiller(0);
      NpcArray[6].sequenceDrawArrayFiller(0);
      NpcArray[7].sequenceDrawArrayFiller(0);
      NpcArray[8].sequenceDrawArrayFiller(0);
      NpcArray[9].sequenceDrawArrayFiller(0);
      //Npc[2].sequenceDrawArrayFiller(0);
      Player.GVS(Player.id);
      NpcArray[0].GVS(NpcArray[0].id);
      NpcArray[1].GVS(NpcArray[1].id);
      NpcArray[2].GVS(NpcArray[2].id);
      NpcArray[3].GVS(NpcArray[3].id);
      NpcArray[4].GVS(NpcArray[4].id);
      NpcArray[5].GVS(NpcArray[5].id);
      NpcArray[6].GVS(NpcArray[6].id);
      NpcArray[7].GVS(NpcArray[7].id);
      NpcArray[8].GVS(NpcArray[8].id);
      NpcArray[9].GVS(NpcArray[9].id);
      //Npc[2].GVS(Npc[2].id);
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////									Game-Draw-Stuff																				//////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    container.addChild(GV[0]);
    container.addChild(GV[2]);
    for(let i=0; i<312 ; i++){
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