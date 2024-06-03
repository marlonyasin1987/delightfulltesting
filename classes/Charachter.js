class Charachteri extends Being {	
	constructor(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance, statusmode, walk_speed,damage_range_c_w, damage_range_c_h) {
		super(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance);
		this.statusmode = statusmode;
		this.walk_speed = walk_speed;
		this.damage_range_c_h = damage_range_c_h;
		this.damage_range_c_w = damage_range_c_w;
		this.keyDownCounterCounter = 0;
		this.lefttrigger = 0;
		this.righttrigger = 0;
		this.uptrigger = 0;
		this.downtrigger = 0;
		this.pausetrigger = 0;
		this.sneaktrigger = 0;
		this.fighttrigger = 0;
		this.fightwalktrigger = 0;
		this.fightstandtriggerleft = 0;
		this.fightstandtriggerright = 0;
		this.fightstandtriggerup = 0;
		this.fightstandtriggerdown = 0;
		this.fightstandtriggerleftup = 0;
		this.fightstandtriggerleftdown = 0;
		this.fightstandtriggerrightup = 0;
		this.fightstandtriggerrightdown = 0;
		this.fastwalktrigger = 0;
		this.fastwalktriggertimmer = 0;
		this.fastwalkactive = 'none';
		this.fastwalkactiveforjump = 'no';
		this.jumptrigger = 0;
		this.damageLvl = 5;
		this.damageLvlInitial = 5;
		this.life = 100;
		this.beingAttackedTriggerCounter = 75;

	}


	
	playerFunction(){
		this.damageLvl = this.damageLvlInitial;
		if(this.controlhandler == 1){
			this.playerControlShemaPause();	
			this.counteriz(this.controlhandlermax);
		}else if(this.controlhandler == 0){
			this.keyboardListener();
			this.playerControlShemaPause();	
			this.playerControlShema();
			this.checkIfStillBeingAttacked();
			this.checkIfBeingAttacked();
			if(this.fastwalktrigger!=2){
				if(this.fastwalktriggertimmer>0){
					if(this.fastwalktriggertimmer>16){
					}else{
						this.fastwalktrigger= 1;
						this.fastwalktriggertimmer++
					}
				}else{
				}
			}else{
				if(this.fastwalktriggertimmer>0){
					if(this.fastwalktriggertimmer>16){
					}else{
						this.fastwalktriggertimmer++
					}
				}else{
				}
			}
		}
		if(this.momentevent == 'just-stand'){
			this.stanceChanger(1,2);
			this.stillStand();
		}else if(this.momentevent == 'sneak-stand'){
			this.stanceChanger(3,4);
			this.stillStand();
		}else if(this.momentevent == 'fight-stand'){
			this.stanceChanger(5,6);
			this.stillStand();
		}else if(this.momentevent == 'walk-left'){
			this.playerWalkLeft();
		}else if(this.momentevent == 'walk-right'){
			this.playerWalkRight();
		}else if(this.momentevent == 'walk-up'){
			this.playerWalkUp();
		}else if(this.momentevent == 'walk-down'){
			this.playerWalkDown();
		}else if(this.momentevent == 'walk-left-up'){
			this.playerWalkLeftUp();
		}else if(this.momentevent == 'walk-left-down'){
			this.playerWalkLeftDown();
		}else if(this.momentevent == 'walk-right-up'){
			this.playerWalkRightUp();
		}else if(this.momentevent == 'walk-right-down'){
			this.playerWalkRightDown();
		}else if(this.momentevent == 'sneak-left'){
			this.playerSneakLeft();
		}else if(this.momentevent == 'sneak-right'){
			this.playerSneakRight();
		}else if(this.momentevent == 'sneak-up'){
			this.playerSneakUp();
		}else if(this.momentevent == 'sneak-down'){
			this.playerSneakDown();
		}else if(this.momentevent == 'sneak-left-up'){
			this.playerSneakLeftUp();
		}else if(this.momentevent == 'sneak-left-down'){
			this.playerSneakLeftDown();
		}else if(this.momentevent == 'sneak-right-down'){
			this.playerSneakRightDown();
		}else if(this.momentevent == 'sneak-right-up'){
			this.playerSneakRightUp();
		}else if(this.momentevent == 'jump-left'){
			this.jumpLeft(40);
			this.anim(13,20);
		}else if(this.momentevent == 'jump-left-fast'){
			this.jumpLeft(30);
			this.jumpLeft(30);				
			this.anim(13,15);
		}else if(this.momentevent == 'jump-right'){
			this.jumpRight(40);
			this.anim(14,20);
		}else if(this.momentevent == 'jump-right-fast'){
			this.jumpRight(30);
			this.jumpRight(30);
			this.anim(14,15);
		}else if(this.momentevent == 'jump-up'){
			this.jumpUp(30);
			this.anim(15,15);
		}else if(this.momentevent == 'jump-up-fast'){
			this.jumpUp(24);
			this.jumpUp(24);
			this.anim(15,12);
		}else if(this.momentevent == 'jump-down'){
			this.jumpDown(30);
			this.anim(16,15);
		}else if(this.momentevent == 'jump-down-fast'){
			this.jumpDown(24);
			this.jumpDown(24);
			this.anim(16,12);
		}else if(this.momentevent == 'jump-left-up'){
			this.jumpLeftUp(30);
			this.anim(19,15);
		}else if(this.momentevent == 'jump-left-down'){
			this.jumpLeftDown(30);
			this.anim(17,15);
		}else if(this.momentevent == 'jump-right-up'){
			this.jumpRightUp(30);
			this.anim(20,15);
		}else if(this.momentevent == 'jump-right-down'){
			this.jumpRightDown(30);
			this.anim(18,15);
		}else if(this.momentevent == 'fight-left'){
			this.fightRunLeft();
			this.anim(21,15);
		}else if(this.momentevent == 'fight-right'){
			this.fightRunRight();
			this.anim(22,12);				
		}else if(this.momentevent == 'fight-up'){
			this.fightRunUp();
			this.anim(23,12);
		}else if(this.momentevent == 'fight-down'){
			this.fightRunDown();
			this.anim(24,12);
		}else if(this.momentevent == 'fight-left-up'){
			this.fightRunLeftUp();
			this.anim(27,12);
		}else if(this.momentevent == 'fight-left-down'){
			this.fightRunLeftDown();
			this.anim(25,12);		
		}else if(this.momentevent == 'fight-right-up'){
			this.fightRunRightUp();
			this.anim(28,12);				
		}else if(this.momentevent == 'fight-right-down'){
			this.fightRunRightDown();	
			this.anim(26,12);			
		}else if(this.momentevent == 'fight-left-stand'){
			this.fightStandLeft();	
		}else if(this.momentevent == 'fight-right-stand'){
			this.fightStandRight();	
		}else if(this.momentevent == 'fight-up-stand'){
			this.fightStandUp();	
		}else if(this.momentevent == 'fight-down-stand'){
			this.fightStandDown();	
		}else if(this.momentevent == 'fight-left-up-stand'){
			this.fightStandLeftUp();	
		}else if(this.momentevent == 'fight-left-down-stand'){
			this.fightStandLeftDown();	
		}else if(this.momentevent == 'fight-right-up-stand'){
			this.fightStandRightUp();		
		}else if(this.momentevent == 'fight-right-down-stand'){
			this.fightStandRightDown();	
		}else if(this.momentevent == 'being-attacked'){
			this.beingAttacked();
		}console.log(Player.momentevent);
		//console.log('this.momentevent: ' + this.momentevent + '   action-mode: ' + this.actionmode + '   no control: ' + this.controlhandler);
		//console.log('this.momentevent: ' + this.momentevent + '   action-mode: ' + this.actionmode + '   no control: ' + this.controlhandler + '   keyDownCOunter: ' + keyDownCounterCounter + '   this.jumptrigger: ' + this.jumptrigger + '  fastwalkactive: ' + fastwalkactive + '  fastwalktimmer: ' + this.fastwalktriggertimmer);
	}	
 

 
	//////////////////////////////////////////////////////////////////////// TRIGGER - STUFF  //////////////////////////////////////////////////////////////////////////
	fastwalktriggeration(){	
		if(this.fastwalktrigger!= 2){
			if(this.fastwalktrigger== 1){
				if(this.fastwalktriggertimmer > 16){
					this.fastwalktriggertimmer = 0;
					this.fastwalktrigger= 0;
					this.fastwalkactive = 'none';
					////console.log('this.fastwalktrigger' + fastwalktrigger);
				}else{
					this.fastwalktrigger= 2;
					console.log('this.fastwalktrigger' + this.fastwalktrigger);
				}
			}else{
				this.fastwalktrigger= 0;
				this.fastwalkactive = 'none';
			}
		}else{
			if(this.fastwalktriggertimmer > 16){
				this.fastwalktriggertimmer = 0;
				this.fastwalktrigger = 0;
				this.fastwalkactive = 'none';
			}else{
			}		
		}
	}
		
	lefttriggeration(wert){
		if(this.lefttrigger == 1){
			if(CapArray[0] == 0){
				this.lefttrigger = 0;
				//console.log('triggered-left');
				this.actionmode = wert;
			}
			else if(CapArray[0] == 1){
			}				
		}else if(this.lefttrigger == 0){
			if(CapArray[0] == 0){
			}
			else if(CapArray[0] == 1){
				this.lefttrigger = 1;
			}					
		}
	}
	
	righttriggeration(wert){
		if(this.righttrigger == 1){
			if(CapArray[2] == 0){
				this.righttrigger = 0;
				//console.log('triggered-right');
				this.actionmode = wert;
			}
			else if(CapArray[2] == 1){
			}				
		}else if(this.righttrigger == 0){
			if(CapArray[2] == 0){
			}
			else if(CapArray[2] == 1){
				this.righttrigger = 1;
			}					
		}
	}

	uptriggeration(wert){
		if(this.uptrigger == 1){
			if(CapArray[1] == 0){
				this.uptrigger = 0;
				//console.log('triggered-up');
				this.actionmode = wert;
			}
			else if(CapArray[1] == 1){
			}				
		}else if(this.uptrigger == 0){
			if(CapArray[1] == 0){
			}
			else if(CapArray[1] == 1){
				this.uptrigger = 1;
			}					
		}
	}
	
	downtriggeration(wert){
		if(this.downtrigger == 1){
			if(CapArray[3] == 0){
				this.downtrigger = 0;
				//console.log('triggered-down');
				this.actionmode = wert;
			}
			else if(CapArray[3] == 1){
			}				
		}else if(this.downtrigger == 0){
			if(CapArray[3] == 0){
			}
			else if(CapArray[3] == 1){
				this.downtrigger = 1;
			}					
		}
	}
	
	fighttriggeration(wert){
		if(this.fighttrigger == 1){
			if(CapArray[4] == 0){
				this.fighttrigger  = 0;
				//console.log('triggered-fight');
				this.actionmode = wert;
			}
			else if(CapArray[4] == 1){
			}				
		}else if(this.fighttrigger  == 0){
			
			if(CapArray[4] == 0){
			}
			else if(CapArray[4] == 1){
				this.fighttrigger  = 1;
			}					
		}
	}
	
	sneaktriggeration(wert){
		if(this.sneaktrigger == 1){
			if(CapArray[7] == 0){
				this.sneaktrigger = 0;
				//console.log('triggered-sneak');
				this.actionmode = wert;
			}
			else if(CapArray[7] == 1){
			}				
		}else if(this.sneaktrigger == 0){
			
			if(CapArray[7] == 0){
			}
			else if(CapArray[7] == 1){
				this.sneaktrigger = 1;
			}					
		}
	}
 
 	pausetriggeration(){
		if(this.pausetrigger == 1){
			if(CapArray[6] == 0){
				this.pausetrigger = 0;
				//console.log('triggered-pause');
			}
			else if(CapArray[6] == 1){
			}				
		}else if(this.pausetrigger == 0){
			
			if(CapArray[6] == 0){
			}
			else if(CapArray[6] == 1){
				this.pausetrigger = 1;
			}					
		}
	}



	//////////////////////////////////// KEYBOARD Listener ///////////////////////////////////////////////////////////////////////////////////////
	keyboardListener(){
		if(this.actionmode == 'fighting'){
			document.onkeydown = function(event) {
				if (event.key == 65) {
					CapArray[0] = 1;
					//CapArray[1] = 0;
					CapArray[2] = 0;
					//CapArray[3] = 0;
				}else if (event.keyIdentifier == 65) {
					CapArray[0] = 1;
					//CapArray[1] = 0;
					CapArray[2] = 0;
					//CapArray[3] = 0;
				}else if (event.keyCode == 65) {
					CapArray[0] = 1;
					//CapArray[1] = 0;
					CapArray[2] = 0;
					//CapArray[3] = 0;
				}
	
				if (event.key == 87) {
					//CapArray[0] = 0;
					CapArray[1] = 1;
					//CapArray[2] = 0;
					CapArray[3] = 0;	
				}else if (event.keyIdentifier == 87) {
					//CapArray[0] = 0;
					CapArray[1] = 1;
					//CapArray[2] = 0;
					CapArray[3] = 0;	
				}else if (event.keyCode == 87) {
					//CapArray[0] = 0;
					CapArray[1] = 1;
					//CapArray[2] = 0;
					CapArray[3] = 0;	
				}
	
				if (event.key == 68) {
					CapArray[0] = 0;
					//CapArray[1] = 0;
					CapArray[2] = 1;
					//CapArray[3] = 0;
				}else if (event.keyIdentifier == 68) {
					CapArray[0] = 0;
					//CapArray[1] = 0;
					CapArray[2] = 1;
					//CapArray[3] = 0;
				}else if (event.keyCode == 68) {
					CapArray[0] = 0;
					//CapArray[1] = 0;
					CapArray[2] = 1;
					//CapArray[3] = 0;
				}
	
				if (event.key == 83) {
					//CapArray[0] = 0;
					CapArray[1] = 0;
					//CapArray[2] = 0;
					CapArray[3] = 1;
				}else if (event.keyIdentifier == 83) {
					//CapArray[0] = 0;
					CapArray[1] = 0;
					//CapArray[2] = 0;
					CapArray[3] = 1;
				}else if (event.keyCode == 83) {
					//CapArray[0] = 0;
					CapArray[1] = 0;
					//CapArray[2] = 0;
					CapArray[3] = 1;
				}
	
				if (event.key == 37){
					//left-arrow
					CapArray[4] = 1;
					//console.log("attack");
					
					if(CapArray[7] == 1){
						CapArray[7] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyIdentifier == 37){
					//left-arrow
					CapArray[4] = 1;
					//console.log("attack");
					
					if(CapArray[7] == 1){
						CapArray[7] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyCode == 37){
					//left-arrow
					CapArray[4] = 1;
					//console.log("attack");
					
					if(CapArray[7] == 1){
						CapArray[7] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}	
	
				if (event.key == 40){
					//down-arrow
					CapArray[7] = 1;
					//console.log("jump");
					
					if(CapArray[4] == 1){
						CapArray[4] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyIdentifier == 40){
					//down-arrow
					CapArray[7] = 1;
					//console.log("jump");
					
					if(CapArray[4] == 1){
						CapArray[4] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyCode == 40){
					//down-arrow
					CapArray[7] = 1;
					//console.log("jump");
					
					if(CapArray[4] == 1){
						CapArray[4] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}
	
				if (event.key == 38){
					//up-arrow
					CapArray[5] = 1;
					//console.log("nothing");
				}else if (event.keyIdentifier == 38){
					//up-arrow
					CapArray[5] = 1;
					//console.log("nothing");
				}else if (event.keyCode == 38){
					//up-arrow
					CapArray[5] = 1;
					//console.log("nothing");
				}
	
				if (event.key == 39){
					//right-arrow
					CapArray[6] = 1;
					//console.log("pause");
				}else if (event.keyIdentifier == 39){
					//right-arrow
					CapArray[6] = 1;
					//console.log("pause");
				}else if (event.keyCode == 39){
					//right-arrow
					CapArray[6] = 1;
					//console.log("pause");
				}
	
				if (event.key == 70) {
					toggleFullScreen();
					//resoAnpasser();
					//console.log('Fullscreen-Mode switched');
				}else if (event.keyIdentifier == 70) {
					toggleFullScreen();
					//resoAnpasser();
					//console.log('Fullscreen-Mode switched');
				}else if (event.keyCode == 70) {
					toggleFullScreen();
					//resoAnpasser();
					//console.log('Fullscreen-Mode switched');
				}
			}
	
			document.onkeyup = function(event) {
				if (event.key == 65) {
					CapArray[0] = 0;
				}else if (event.keyIdentifier == 65) {
					CapArray[0] = 0;
				}else if (event.keyCode == 65) {
					CapArray[0] = 0;
				}
	
				if (event.key == 87) {
					CapArray[1] = 0;
				}else if (event.keyIdentifier == 87) {
					CapArray[1] = 0;
				}else if (event.keyCode == 87) {
					CapArray[1] = 0;
				}
	
				if (event.key == 68) {
					CapArray[2] = 0;
				}else if (event.keyIdentifier == 68) {
					CapArray[2] = 0;
				}else if (event.keyCode == 68) {
					CapArray[2] = 0;
				}
	
				if (event.key == 83) {
					CapArray[3] = 0;
				}else if (event.keyIdentifier == 83) {
					CapArray[3] = 0;
				}else if (event.keyCode == 83) {
					CapArray[3] = 0;
				}
	
				if (event.key == 37){
					//left-arrow
					CapArray[4] = 0;
				}else if (event.keyIdentifier == 37){
					//left-arrow
					CapArray[4] = 0;
				}else if (event.keyCode == 37){
					//left-arrow
					CapArray[4] = 0;
				}	
	
				if (event.key == 40){
					//down-arrow
					CapArray[7] = 0;
				}else if (event.keyIdentifier == 40){
					//down-arrow
					CapArray[7] = 0;
				}else if (event.keyCode == 40){
					//down-arrow
					CapArray[7] = 0;
				}
	
				if (event.key == 38){
					//up-arrow
					CapArray[5] = 0;
				}else if (event.keyIdentifier == 38){
					//up-arrow
					CapArray[5] = 0;
				}else if (event.keyCode == 38){
					//up-arrow
					CapArray[5] = 0;
				}
	
				if (event.key == 39){
					CapArray[6] = 0;
				}else if (event.keyIdentifier == 39){
					CapArray[6] = 0;
				}else if (event.keyCode == 39){
					CapArray[6] = 0;
				}
			}
		}else{
			document.onkeydown = function(event) {
				if (event.key == 65) {
						CapArray[0] = 1;
						CapArray2[0] = 1;
						////console.log("left");
						
						if(CapArray[2] == 1){
							CapArray[2] = 0;
						}
						else if(CapArray[1] == 1){
							CapArray[2] = 0;
						}
						else if(CapArray[3] == 1){
							CapArray[2] = 0;
						}
						////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyIdentifier == 65) {
					CapArray[0] = 1;
					CapArray2[0] = 1;
					////console.log("left");
					
					if(CapArray[2] == 1){
						CapArray[2] = 0;
					}
					else if(CapArray[1] == 1){
						CapArray[2] = 0;
					}
					else if(CapArray[3] == 1){
						CapArray[2] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyCode == 65) {
					CapArray[0] = 1;
					CapArray2[0] = 1;
					////console.log("left");
					
					if(CapArray[2] == 1){
						CapArray[2] = 0;
					}
					else if(CapArray[1] == 1){
						CapArray[2] = 0;
					}
					else if(CapArray[3] == 1){
						CapArray[2] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}
	
				if (event.key == 87) {
					CapArray[1] = 1;
					CapArray2[1] = 1;
					////console.log("up");
							
					if(CapArray[3] == 1){
						CapArray[3] = 0;
					}
					else if(CapArray[0] == 1){
						CapArray[3] = 0;
					}
					else if(CapArray[2] == 1){
						CapArray[3] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);	
				}else if (event.keyIdentifier == 87) {
					CapArray[1] = 1;
					CapArray2[1] = 1;
					////console.log("up");
							
					if(CapArray[3] == 1){
						CapArray[3] = 0;
					}
					else if(CapArray[0] == 1){
						CapArray[3] = 0;
					}
					else if(CapArray[2] == 1){
						CapArray[3] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);	
				}else if (event.keyCode == 87) {
					CapArray[1] = 1;
					CapArray2[1] = 1;
					////console.log("up");
							
					if(CapArray[3] == 1){
						CapArray[3] = 0;
					}
					else if(CapArray[0] == 1){
						CapArray[3] = 0;
					}
					else if(CapArray[2] == 1){
						CapArray[3] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);	
				}
	
				if (event.key == 68) {
					CapArray[2] = 1;
					CapArray2[2] = 1;
					////console.log("right");
							
					if(CapArray[0] == 1){
						CapArray[0] = 0;
					}
					else if(CapArray[1] == 1){
						CapArray[0] = 0;
					}
					else if(CapArray[3] == 1){
						CapArray[0] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyIdentifier == 68) {
					CapArray[2] = 1;
					CapArray2[2] = 1;
					////console.log("right");
							
					if(CapArray[0] == 1){
						CapArray[0] = 0;
					}
					else if(CapArray[1] == 1){
						CapArray[0] = 0;
					}
					else if(CapArray[3] == 1){
						CapArray[0] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyCode == 68) {
					CapArray[2] = 1;
					CapArray2[2] = 1;
					////console.log("right");
							
					if(CapArray[0] == 1){
						CapArray[0] = 0;
					}
					else if(CapArray[1] == 1){
						CapArray[0] = 0;
					}
					else if(CapArray[3] == 1){
						CapArray[0] = 0;
					}
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}
	
				if (event.key == 83) {
					CapArray[3] = 1;
					CapArray2[3] = 1;
					////console.log("down");
							
					if(CapArray[1] == 1){
						CapArray[1] = 0;
					}
					else if(CapArray[2] == 1){
						CapArray[1] = 0;
					}
					else if(CapArray[0] == 1){
						CapArray[1] = 0;
					}			
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyIdentifier == 83) {
					CapArray[3] = 1;
					CapArray2[3] = 1;
					////console.log("down");
							
					if(CapArray[1] == 1){
						CapArray[1] = 0;
					}
					else if(CapArray[2] == 1){
						CapArray[1] = 0;
					}
					else if(CapArray[0] == 1){
						CapArray[1] = 0;
					}			
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyCode == 83) {
					CapArray[3] = 1;
					CapArray2[3] = 1;
					////console.log("down");
							
					if(CapArray[1] == 1){
						CapArray[1] = 0;
					}
					else if(CapArray[2] == 1){
						CapArray[1] = 0;
					}
					else if(CapArray[0] == 1){
						CapArray[1] = 0;
					}			
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}
	
				if (event.key == 37){
					//left-arrow
					CapArray[4] = 1;
					//console.log("attack");
					
					if(CapArray[7] == 1){
						CapArray[7] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyIdentifier == 37){
					//left-arrow
					CapArray[4] = 1;
					//console.log("attack");
					
					if(CapArray[7] == 1){
						CapArray[7] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyCode == 37){
					//left-arrow
					CapArray[4] = 1;
					//console.log("attack");
					
					if(CapArray[7] == 1){
						CapArray[7] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}	
	
				if (event.key == 40){
					//down-arrow
					CapArray[7] = 1;
					//console.log("jump");
					
					if(CapArray[4] == 1){
						CapArray[4] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyIdentifier == 40){
					//down-arrow
					CapArray[7] = 1;
					//console.log("jump");
					
					if(CapArray[4] == 1){
						CapArray[4] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}else if (event.keyCode == 40){
					//down-arrow
					CapArray[7] = 1;
					//console.log("jump");
					
					if(CapArray[4] == 1){
						CapArray[4] = 0;
					}
					//console.log(CapArray[4],CapArray[7]);
				}
	
				if (event.key == 38){
					//up-arrow
					CapArray[5] = 1;
					//console.log("nothing");
				}else if (event.keyIdentifier == 38){
					//up-arrow
					CapArray[5] = 1;
					//console.log("nothing");
				}else if (event.keyCode == 38){
					//up-arrow
					CapArray[5] = 1;
					//console.log("nothing");
				}
	
				if (event.key == 39){
					//right-arrow
					CapArray[6] = 1;
					//console.log("pause");
				}else if (event.keyIdentifier == 39){
					//right-arrow
					CapArray[6] = 1;
					//console.log("pause");
				}else if (event.keyCode == 39){
					//right-arrow
					CapArray[6] = 1;
					//console.log("pause");
				}
	
				if (event.key == 70) {
					toggleFullScreen();
					//resoAnpasser();
					//console.log('Fullscreen-Mode switched');
				}else if (event.keyIdentifier == 70) {
					toggleFullScreen();
					//resoAnpasser();
					//console.log('Fullscreen-Mode switched');
				}else if (event.keyCode == 70) {
					toggleFullScreen();
					//resoAnpasser();
					//console.log('Fullscreen-Mode switched');
				}
			}
	
			document.onkeyup = function(event) {
				if (event.key == 65) {
					CapArray[0] = 0;
					if(CapArray2[2] == 1){
					CapArray[2] = 1;
					}
					CapArray2[0] = 0;
				
				}else if (event.keyIdentifier == 65) {
					CapArray[0] = 0;
					if(CapArray2[2] == 1){
					CapArray[2] = 1;
					}
					CapArray2[0] = 0;
			
				}else if (event.keyCode == 65) {
					CapArray[0] = 0;
					if(CapArray2[2] == 1){
					CapArray[2] = 1;
					}
					CapArray2[0] = 0;
			
				}
	
				if (event.key == 87) {
					CapArray[1] = 0;
					if(CapArray2[3] == 1){
					CapArray[3] = 1;
					}
					CapArray2[1] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyIdentifier == 87) {
					CapArray[1] = 0;
					if(CapArray2[3] == 1){
					CapArray[3] = 1;
					}
					CapArray2[1] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyCode == 87) {
					CapArray[1] = 0;
					if(CapArray2[3] == 1){
					CapArray[3] = 1;
					}
					CapArray2[1] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}
	
				if (event.key == 68) {
					CapArray[2] = 0;
					if(CapArray2[0] == 1){
					CapArray[0] = 1;
					}
					CapArray2[2] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyIdentifier == 68) {
					CapArray[2] = 0;
					if(CapArray2[0] == 1){
					CapArray[0] = 1;
					}
					CapArray2[2] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyCode == 68) {
					CapArray[2] = 0;
					if(CapArray2[0] == 1){
					CapArray[0] = 1;
					}
					CapArray2[2] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}
	
				if (event.key == 83) {
					CapArray[3] = 0;
					if(CapArray2[1] == 1){
					CapArray[1] = 1;
					}
					CapArray2[3] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyIdentifier == 83) {
					CapArray[3] = 0;
					if(CapArray2[1] == 1){
					CapArray[1] = 1;
					}
					CapArray2[3] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}else if (event.keyCode == 83) {
					CapArray[3] = 0;
					if(CapArray2[1] == 1){
					CapArray[1] = 1;
					}
					CapArray2[3] = 0;
					////console.log(CapArray[0],CapArray[1],CapArray[2],CapArray[3]);
				}
	
				if (event.key == 37){
					//left-arrow
					CapArray[4] = 0;
				}else if (event.keyIdentifier == 37){
					//left-arrow
					CapArray[4] = 0;
				}else if (event.keyCode == 37){
					//left-arrow
					CapArray[4] = 0;
				}	
	
				if (event.key == 40){
					//down-arrow
					CapArray[7] = 0;
				}else if (event.keyIdentifier == 40){
					//down-arrow
					CapArray[7] = 0;
				}else if (event.keyCode == 40){
					//down-arrow
					CapArray[7] = 0;
				}
	
				if (event.key == 38){
					//up-arrow
					CapArray[5] = 0;
				}else if (event.keyIdentifier == 38){
					//up-arrow
					CapArray[5] = 0;
				}else if (event.keyCode == 38){
					//up-arrow
					CapArray[5] = 0;
				}
	
				if (event.key == 39){
					CapArray[6] = 0;
				}else if (event.keyIdentifier == 39){
					CapArray[6] = 0;
				}else if (event.keyCode == 39){
					CapArray[6] = 0;
				}
			}			
		}
	}

	

	//////////////////////////////////////////////////////////// Control Shema Stuff///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	playerControlShema() {
		if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0 && CapArray[4] == 0 && CapArray[7] == 1){
			this.actionmode = 'sneaking';
		}else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0 && CapArray[4] == 1 && CapArray[7] == 0){
			this.actionmode = 'fighting';
			this.fightwalktrigger = 0;
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 0;
		}else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0 && CapArray[4] == 0 && CapArray[7] == 0){
			this.actionmode = 'normal';
			this.fastwalktriggeration();
			this.momentevent = 'just-stand';
		}
		if(this.actionmode == 'normal'){
			if(CapArray[4] == 1){

				if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
				}
				else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
					//LeftFightWalk
					this.momenteventFightRunLeft(30);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
					//upFightWalk
					this.momenteventFightRunUp(30);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 0){
					//rightFightWalk
					this.momenteventFightRunRight(30);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
					//downFightWalk
					this.momenteventFightRunDown(30);
				}
				else if(CapArray[0] == 1 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
					//leftupFightWalk
					this.momenteventFightRunLeftUp(30);
				}
				else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
					//leftdownFightWalk
					this.momenteventFightRunLeftDown(30);				
				}
				else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 1 && CapArray[3] == 0){
					//rightupFightWalk
					this.momenteventFightRunRightUp(30);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 1){
					//rightdownFightWalk
					this.momenteventFightRunRightDown(30);
				}else{
					//console.log('fucked');
				}					
			}else if(CapArray[7] == 1){
				if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
					//stillstand
					this.stanceChanger(1,2);
					this.stillStand();
					this.momentevent = 'just-stand';
				}
				else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
					//leftJump
					this.momenteventJumpLeft(30,40);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
					//upJump
					this.momenteventJumpUp(24,30);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 0){
					//rightJump
					this.momenteventJumpRight(30,40);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
					//downJump
					this.momenteventJumpDown(24,30);
				}
				else if(CapArray[0] == 1 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
					//leftupJump
					this.momenteventJumpLeftUp(30);
				}
				else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
					//leftdownJump
					this.momenteventJumpLeftDown(30);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 1 && CapArray[3] == 0){
					//rightupJump
					this.momenteventJumpRightUp(30);
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 1){
					//rightdownJump
					this.momenteventJumpRightDown(30);
				}else{
					//console.log('fucked');
				}				
			}else{
				this.fightwalktrigger = 0;
				this.jumptrigger = 0;
				if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
					//stillstand
					this.momentevent = 'just-stand';
					this.stanceChanger(1,2);
					this.stillStand();
				}
				else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
					//leftWalk
					this.momentevent = 'walk-left';	
				}
				else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
					//upWalk
					this.momentevent = 'walk-up';
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 0){
					//rightWalk
					this.momentevent = 'walk-right';
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
					//downWalk
					this.momentevent = 'walk-down';
				}
				else if(CapArray[0] == 1 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
					//leftupWalk
					this.momentevent = 'walk-left-up';
				}
				else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
					//leftdownWalk
					this.momentevent = 'walk-left-down';
				}
				else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 1 && CapArray[3] == 0){
					//rightupWalk
					this.momentevent = 'walk-right-up';
				}
				else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 1){
					//rightdownWalk
					this.momentevent = 'walk-right-down';
				}else{
					//console.log('fucked');
				}					
			}
		}else if(this.actionmode == 'fighting'){
			this.fighttriggeration('normal');
			if(this.keyDownCounterCounter > 10){
				if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
					//stillstand
					this.momentevent = 'fight-stand';
				}
				else if(CapArray[0] == 1 && CapArray[1] == 1){
					//leftupAttack
					this.momenteventFightStandLeftUp(20);				
				}
				else if(CapArray[0] == 1 && CapArray[3] == 1){
					//leftdownAttack
					this.momenteventFightStandLeftDown(20);
				}
				else if(CapArray[1] == 1 && CapArray[2] == 1 ){
					//rightupAttack
					this.momenteventFightStandRightUp(20);				
				}
				else if(CapArray[2] == 1 && CapArray[3] == 1){
					//rightdownAttack
					this.momenteventFightStandRightDown(20);
				}
				else if(CapArray[0] == 1){
					//leftAttack
					this.momenteventFightStandLeft(20);
				}
				else if(CapArray[1] == 1 ){
					//upAttack
					this.momenteventFightStandUp(20);
				}
				else if(CapArray[2] == 1 ){
					//rightAttack
					this.momenteventFightStandRight(20);
				}
				else if(CapArray[3] == 1){
					//downAttack
					this.momenteventFightStandDown(20);
				}else{
					//console.log('fucked');
				}
				this.keyDownCounterCounter = 0;			
			}else{
				this.keyDownCounterCounter++;
			}
		}else if(this.actionmode == 'sneaking'){
			this.sneaktriggeration('normal');
			if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
				//stillStand
				this.momentevent = 'sneak-stand';
			}
			else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 0){
				//leftSneak
				this.momentevent = 'sneak-left';
			}
			else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
				//upSneak
				this.momentevent = 'sneak-up';
			}
			else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 0){
				//rightSneak
				this.momentevent = 'sneak-right';
			}
			else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
				//downSneak
				this.momentevent = 'sneak-down';
			}
			else if(CapArray[0] == 1 && CapArray[1] == 1 && CapArray[2] == 0 && CapArray[3] == 0){
				//leftupSneak
				this.momentevent = 'sneak-left-up';
			}
			else if(CapArray[0] == 1 && CapArray[1] == 0 && CapArray[2] == 0 && CapArray[3] == 1){
				//leftdownSneak
				this.momentevent = 'sneak-left-down';
			}
			else if(CapArray[0] == 0 && CapArray[1] == 1 && CapArray[2] == 1 && CapArray[3] == 0){
				//rightupSneak
				this.momentevent = 'sneak-right-up';
			}
			else if(CapArray[0] == 0 && CapArray[1] == 0 && CapArray[2] == 1 && CapArray[3] == 1){
				//rightdownSneak
				this.momentevent = 'sneak-right-down';
			}else{
				//console.log('fucked');
			}
		}			
	}

	playerControlShemaPause() {
		if(this.pausetrigger == 1){
			if(CapArray[6] == 1){

			}else if(CapArray[6] == 0){
				this.pausetrigger = 0;
			}
		}else if(this.pausetrigger == 0){
			if(CapArray[6] == 1){
				this.pausetrigger = 1;
				if(pause == 1){
					pause = 0;
					//console.log('pauseentriggers');
				}else{
					pause = 1;
					//console.log('pause getriggerd');
				}
			}else if(CapArray[6] == 0){
				
			}
		}
	}



	//////////////////////////////////////////////////////////////////////// EVENT Funktions /////////////////////////////////////////////////////////////////
	///////////////////////////////////////////// Walk //////////////////////////////////
	playerWalkLeft() {
		//leftWalk
		if(this.fastwalktrigger==0){
			this.fastwalktriggertimmer = 1;					
			this.moveLeft(1,1);
			this.anim(1,15);
		}else if(this.fastwalktrigger==1){
			this.moveLeft(1,1);
			this.anim(1,15);
			this.fastwalkactive = 'left';
		}else if(this.fastwalktrigger==2){
			this.fastwalktriggertimmer = 1;
			if(this.fastwalkactive != 'left'){
				this.fastwalktrigger = 0;
				this.moveLeft(1,1);
				this.anim(1,15);
			}else{
				this.moveLeft(1,1);
				this.anim(1,15);
				this.moveLeft(1,1);
				this.anim(1,15);
			}
		}
	}

	playerWalkRight() {
		//rightWalk
		if(this.fastwalktrigger==0){
			this.fastwalktriggertimmer = 1;					
			this.moveRight(2,1);
			this.anim(2,15);
		}else if(this.fastwalktrigger==1){
			this.moveRight(2,1);
			this.anim(2,15);
			this.fastwalkactive = 'right';
		}else if(this.fastwalktrigger==2){
			this.fastwalktriggertimmer = 1;	
			if(this.fastwalkactive != 'right'){
				this.fastwalktrigger = 0;
				this.moveRight(2,1);
				this.anim(2,15);
			}else{
				this.moveRight(2,1);
				this.anim(2,15);
				this.moveRight(2,1);
				this.anim(2,15);
			}
		}
	}

	playerWalkUp() {
		//upWalk
		if(this.fastwalktrigger==0){
			this.fastwalktriggertimmer = 1;					
			this.moveUp(0,1);
			this.anim(3,15);
		}else if(this.fastwalktrigger==1){
			this.moveUp(0,1);
			this.anim(3,15);
			this.fastwalkactive = 'up';
		}else if(this.fastwalktrigger==2){
			this.fastwalktriggertimmer = 1;	
			if(this.fastwalkactive != 'up'){
				this.fastwalktrigger = 0;
				this.moveUp(0,1);
				this.anim(3,15);
			}else{
				this.moveUp(0,1);
				this.anim(3,15);
				this.moveUp(0,1);
				this.anim(3,15);
			}
		}
	}

	playerWalkDown() {
		//downWalk
		if(this.fastwalktrigger==0){
			this.fastwalktriggertimmer = 1;					
			this.moveDown(0,1);
			this.anim(4,15);
		}else if(this.fastwalktrigger==1){
			this.moveDown(0,1);
			this.anim(4,15);
			this.fastwalkactive = 'down';
		}else if(this.fastwalktrigger==2){
			this.fastwalktriggertimmer = 1;	
			if(this.fastwalkactive != 'down'){
				this.fastwalktrigger = 0;
				this.moveDown(0,1);
				this.anim(4,15);
			}else{
				this.moveDown(0,1);
				this.anim(4,15);
				this.moveDown(0,1);
				this.anim(4,15);
			}
		}
	}

	playerWalkLeftUp() {
		//leftupWalk
		if(this.fastwalktrigger == 2){
			this.fastwalktrigger = 0;
		}
		this.moveLeft(1,1);
		this.moveUp(0,1);
		this.anim(6,15);
	}

	playerWalkLeftDown() {
		//leftdownWalk
		if(this.fastwalktrigger == 2){
			this.fastwalktrigger = 0;
		}
		this.moveLeft(1,1);
		this.moveDown(0,1);
		this.anim(7,15);
	}

	playerWalkRightUp() {
		//rightupWalk
		if(this.fastwalktrigger == 2){
			this.fastwalktrigger = 0;
		}
		this.moveRight(2,1);
		this.moveUp(0,1);
		this.anim(5,15);
	}

	playerWalkRightDown() {
		//rightdownWalk
		if(this.fastwalktrigger == 2){
			this.fastwalktrigger = 0;
		}
		this.moveRight(2,1);
		this.moveDown(0,1);
		this.anim(8,15);
	}

	////////////////////////////////////////////// Jump /////////////////////////////////////
	momenteventJumpLeft(chmax1, chmax2) {
		//leftJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;				
				if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
					this.controlhandlermax = chmax1;
					this.momentevent = 'jump-left-fast';
				}else{
					this.controlhandlermax = chmax2;
					this.momentevent = 'jump-left';
					this.fastwalktriggertimmer = 17;
				}
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-left';
		}
	}

	momenteventJumpRight(chmax1, chmax2) {
		//rightJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;
				if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
					this.controlhandlermax = chmax1;
					this.momentevent = 'jump-right-fast';
				}else{
				this.controlhandlermax = chmax2;
					this.momentevent = 'jump-right';
					this.fastwalktriggertimmer = 17;
				}
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-right';
		}
	}

	momenteventJumpUp(chmax1, chmax2) {
		//upJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;
				if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
					this.controlhandlermax = chmax1;
					this.momentevent = 'jump-up-fast';
				}else{
					this.controlhandlermax = chmax2;
					this.momentevent = 'jump-up';
					this.fastwalktriggertimmer = 17;
				}
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-up';
		}
	}

	momenteventJumpDown(chmax1, chmax2) {
		//downJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;
				if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
					this.controlhandlermax = chmax1;
					this.momentevent = 'jump-down-fast';
				}else{
					this.controlhandlermax = chmax2;
					this.momentevent = 'jump-down';
					this.fastwalktriggertimmer = 17;
				}
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-down';						
		}
	}

	momenteventJumpLeftUp(chmax) {
		//leftupJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlermax = chmax;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;
			this.momentevent = 'jump-left-up';
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-left-up';						
		}
	}

	momenteventJumpLeftDown(chmax) {
		//leftdownJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlermax = chmax;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;
			this.momentevent = 'jump-left-down';
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-left-down';						
		}
	}

	momenteventJumpRightUp(chmax) {
		//rightupJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlermax = chmax;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;
			this.momentevent = 'jump-right-up';
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-right-up';						
		}
	}

	momenteventJumpRightDown(chmax) {
		//rightdownJump
		if(this.jumptrigger == 0){
			this.jumptrigger = 1;
			this.controlhandlermax = chmax;
			this.controlhandlercounter = 1;	
			this.controlhandler = 1;
			this.momentevent = 'jump-right-down';
		}else if(this.jumptrigger == 1){
			this.momentevent = 'walk-right-down';						
		}
	}


	////////////////////////////////////////////// Sneak /////////////////////////////////////
	playerSneakLeft() {
		//leftSneak
		this.moveLeft(3);
		this.anim(9,20);
	}

	playerSneakRight() {
		//rightSneak
		this.moveRight(4);
		this.anim(10,20);
	}

	playerSneakUp() {
		//upSneak
		this.moveUp(0,1);
		this.anim(11,20);
	}

	playerSneakDown() {
		//downSneak
		this.moveDown(0,1);
		this.anim(10,20);
	}

	playerSneakLeftUp() {
		//leftupSneak
		this.moveLeft(3);
		this.moveUp(0,1);
		this.anim(11,20);
	}

	playerSneakLeftDown() {
		//leftdownSneak
		this.moveLeft(3);
		this.moveDown(0,1);
		this.anim(9,20);
	}

	playerSneakRightUp() {
		//rightupSneak
		this.moveRight(4);
		this.moveUp(0,1);
		this.anim(12,20);
	}

	playerSneakRightDown() {
		//rightdownSneak
		this.moveRight(4);
		this.moveDown(0,1);
		this.anim(10,20);
	}

	////////////////////////////////////////////// Fight Run /////////////////////////////////////
	momenteventFightRunLeft(chmax) {
		if(this.fightwalktrigger == 0){
			//leftFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-left';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}	
	}

	momenteventFightRunRight(chmax) {
		if(this.fightwalktrigger == 0){
			//rightFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-right';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}		
	}

	momenteventFightRunUp(chmax) {
		if(this.fightwalktrigger == 0){
			//upFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-up';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}			
	}

	momenteventFightRunDown(chmax) {
		if(this.fightwalktrigger == 0){
			//downFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-down';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}
	}

	momenteventFightRunLeftUp(chmax) {
		if(this.fightwalktrigger == 0){
			//leftupFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-left-up';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}			
	}

	momenteventFightRunLeftDown(chmax) {
		if(this.fightwalktrigger == 0){
			//leftdownFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-left-down';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}		
	}

	momenteventFightRunRightUp(chmax) {
		if(this.fightwalktrigger == 0){
			//rightupFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-right-up';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}		
	}

	momenteventFightRunRightDown(chmax) {
		if(this.fightwalktrigger == 0){
			//rightdownFightWalk
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-right-down';
		}else if(this.fightwalktrigger == 1){
			this.momentevent = 'fight-stand';						
		}
	}

	////////////////////////////////////////////// Fight Stand /////////////////////////////////////
	momenteventFightStandLeft(chmax) {
		//leftAttack
		if(this.fightstandtriggerleft==0){
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-left-stand';
		}else if(this.fightstandtriggerleft==1){
			
		}
	}

	momenteventFightStandRight(chmax) {
		//rightAttack
		if(this.fightstandtriggerright==0){
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-right-stand';
		}else if(this.fightstandtriggerright==1){
			
		}
	}

	momenteventFightStandUp(chmax) {
		//upAttack
		if(this.fightstandtriggerup==0){
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-up-stand';
		}else if(this.fightstandtriggerup==1){
			
		}
	}

	momenteventFightStandDown(chmax) {
		if(this.fightstandtriggerdown==0){
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-down-stand';
		}else if(this.fightstandtriggerdown==1){
			
		}
	}

	momenteventFightStandLeftUp(chmax) {
		//leftupAttack
		if(this.fightstandtriggerleftup==0){
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-left-up-stand';
		}else if(this.fightstandtriggerleftup==1){
			
		}
	}

	momenteventFightStandLeftDown(chmax) {
		//leftdownAttack
		if(this.fightstandtriggerleftdown==0){
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-left-down-stand'
		}else if(this.fightstandtriggerleftdown==1){
			
		};
	}

	momenteventFightStandRightUp(chmax) {
		//rightupAttack
		if(this.fightstandtriggerrightup==0){
			this.controlhandlermax = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-right-up-stand';
		}else if(this.fightstandtriggerrightup==1){
			
		};
	}

	momenteventFightStandRightDown(chmax) {
		//rightdownAttack
		if(this.fightstandtriggerrightdown==0){
			this.controlhandler = chmax;
			this.controlhandler = 1;
			this.momentevent = 'fight-right-down-stand';
		}else if(this.fightstandtriggerrightdown==1){
			
		};
	}

	//////////////////////////////////////////////////////////////////////// BASE Funktions /////////////////////////////////////////////////////////////////


	//////////////////////////////////// SCROLL STUFF ///////////////////////////////////////////////////////////////////////////////////////

	leftScroll(){
		if(this.on_s_p_x_r > 154){
			container.position.x = container.position.x + 0;
		}else if(this.on_s_p_x_r >= 91){
			container.position.x = container.position.x + 1;
		}else if(this.on_s_p_x_r < 91){
			container.position.x = container.position.x + 0;
		}
	}

	rightScroll(){
		if(this.on_s_p_x_r > 153){
			container.position.x = container.position.x - 0;
		}else if(this.on_s_p_x_r >= 90){
			container.position.x = container.position.x - 1;
		}else if(this.on_s_p_x_r < 90){
			container.position.x = container.position.x - 0;
		}
	}


	upScroll(){
		if(this.on_s_p_y_r > 230){
			container.position.y = container.position.y + 0;
		}else if(this.on_s_p_y_r >= 119){
			container.position.y = container.position.y + 1;
		}else if(this.on_s_p_y_r < 119){
			container.position.y = container.position.y + 0;
		}
	}

	downScroll(){
		if(this.on_s_p_y_r > 229){
			container.position.y = container.position.y - 0;
		}else if(this.on_s_p_y_r >= 118){
			container.position.y = container.position.y - 1;
		}else if(this.on_s_p_y_r < 118){
			container.position.y = container.position.y - 0;
		}
	}


	////////////////////////////////////////////// Jump /////////////////////////////////////
	jumpLeft(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveLeft(1,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);	
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk-left';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);	
		}
	}
	
	jumpRight(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveRight(2,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);	
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk-right';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);	
		}
	}
	
	jumpUp(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveUp(0,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);	
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk-up';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);	
		}
	}

	jumpDown(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveDown(0,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);	
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk-down';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);	
		}
	}
	
	jumpLeftUp(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveLeft(1,1);
			this.moveUp(0,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);			
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk-left-up';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);		
		}
	}
	
	jumpLeftDown(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveLeft(1,1);
			this.moveDown(0,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);			
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk--left-down';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);		
		}
	}
	
	jumpRightUp(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveRight(2,1);
			this.moveUp(0,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);		
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk-right-up';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);	
		}
	}
	
	jumpRightDown(width){
		this.Shadow = new Spriteelement(2,1,"",this.off_s_p_x,781,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Shadow.GVS(this.Shadow.id);
		this.uebereinstimmtwidth = width;
		if(this.controlhandlercounter<width){
			this.moveRight(2,1);
			this.moveDown(0,1);
			if(this.controlhandlercounter<(width/2)){
				this.on_s_p_y = this.on_s_p_y-1;
			}else{
				this.on_s_p_y = this.on_s_p_y+1;
			}
			this.Shadow.sequenceDrawArrayFiller(this.Shadow.sgdavar);				
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.momentevent = 'walk-right-down';
			this.on_s_p_y = this.on_s_p_y-1;
			this.Shadow.disapear(this.Shadow.sgdavar);	
		}
	}	
	

	////////////////////////////////////////////// Fight Run /////////////////////////////////////
	fightRunLeft(){
		this.Weapon = new Spriteelement(5,1,"",1,859,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r-16,this.on_s_p_y_r-4,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}
		if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
			if(this.fightwalktrigger == 0){
				this.damageLvl = this.damageLvl + this.damageLvl;
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(6,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				if(this.controlhandler == 1){
					////console.log('controlhandler: ' + this.controlhandler)
				}else{
					this.fastwalktrigger = 0;
				}
				this.stillStand();						
			}
		}else{
			if(this.fightwalktrigger == 0){
				this.damageLvl = this.damageLvl / 2;
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(1,1);
				this.moveLeft(6,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				this.stillStand();						
			}
		}					
	}

	fightRunRight(){
		this.Weapon = new Spriteelement(5,1,"",18,859,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+16,this.on_s_p_y_r-4,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r+16,this.on_s_p_y_r-4,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.momentevent = 'fight-stand';	
		}	
		if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
			if(this.fightwalktrigger == 0){
				this.damageLvl = this.damageLvl + this.damageLvl;
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(5,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				if(this.controlhandler == 1){
					//console.log('controlhandler: ' + this.controlhandler)
				}else{
					this.fastwalktrigger = 0;
				}
				this.stillStand();						
			}						
		}else{
			if(this.fightwalktrigger == 0){
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(2,1);
				this.moveRight(5,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				this.stillStand();						
			}						
		}
	}

	fightRunUp(){
		this.Weapon = new Spriteelement(5,1,"",18,840,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+6,this.on_s_p_y_r-10,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.momentevent = 'fight-stand';	
		}			
		if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
			if(this.fightwalktrigger == 0){
				this.damageLvl = this.damageLvl + this.damageLvl;
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				if(this.controlhandler == 1){
					////console.log('controlhandler: ' + this.controlhandler)
				}else{
					this.fastwalktrigger = 0;
				}
				this.stillStand();		
			}						
		}else{
			if(this.fightwalktrigger == 0){			
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.moveUp(0,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				this.stillStand();		
			}						
		}
	}

	fightRunDown(){
		this.Weapon = new Spriteelement(5,1,"",1,840,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+1,this.on_s_p_y_r+23,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.momentevent = 'fight-stand';	
		}					
		if(this.fastwalkactive != 'none' && this.fastwalktrigger==2){
			if(this.fightwalktrigger == 0){	
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				if(this.controlhandler == 1){
					//console.log('controlhandler: ' + this.controlhandler)
				}else{
					this.fastwalktrigger = 0;
				}
				this.stillStand();						
			}						
		}else{
			if(this.fightwalktrigger == 0){	
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.moveDown(0,1);
				this.fightwalktrigger = 1;
			}else if(this.fightwalktrigger == 1){
				//stillstand
				this.stillStand();						
			}						
		}
	}

	fightRunLeftUp(){
		this.Weapon = new Spriteelement(5,1,"",1,895,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r-6,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.momentevent = 'fight-stand';	
		}		
		if(this.fightwalktrigger == 0){
			this.moveLeft(1,1);
			this.moveUp(0,1);
			this.moveLeft(1,1);
			this.moveUp(0,1);
			this.moveLeft(1,1);
			this.moveUp(0,1);
			this.moveLeft(1,1);
			this.moveUp(0,1);
			this.moveLeft(6,1);
			this.moveUp(0,1);
			this.fightwalktrigger = 1;
		}else if(this.fightwalktrigger == 1){
			//stillstand
			this.stillStand();						
		}
	}

	fightRunLeftDown(){
		this.Weapon = new Spriteelement(5,1,"",1,816,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r-7,this.on_s_p_y_r+18,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.momentevent = 'fight-stand';	
		}		
		if(this.fightwalktrigger == 0){		
			this.moveLeft(1,1);
			this.moveDown(0,1);
			this.moveLeft(1,1);
			this.moveDown(0,1);
			this.moveLeft(1,1);
			this.moveDown(0,1);
			this.moveLeft(1,1);
			this.moveDown(0,1);
			this.moveLeft(6,1);
			this.moveDown(0,1);
			this.fightwalktrigger = 1;
		}else if(this.fightwalktrigger == 1){
			//stillstand
			this.stillStand();						
		}
	}

	fightRunRightUp(){
		this.Weapon = new Spriteelement(5,1,"",18,895,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+6,this.on_s_p_y_r,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.momentevent = 'fight-stand';	
		}	
		if(this.fightwalktrigger == 0){	
			this.moveRight(2,1)
			this.moveUp(0,1);
			this.moveRight(2,1);
			this.moveUp(0,1);
			this.moveRight(2,1);
			this.moveUp(0,1);
			this.moveRight(2,1);
			this.moveUp(0,1);
			this.moveRight(5,1);
			this.moveUp(0,1);
			this.fightwalktrigger = 1;
		}else if(this.fightwalktrigger == 1){
			//stillstand
			this.stillStand();						
		}
	}

	fightRunRightDown(){
		this.Weapon = new Spriteelement(5,1,"",18,816,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+7,this.on_s_p_y_r+18,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlercounter==0){
			this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
			this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.momentevent = 'fight-stand';	
		}	
		if(this.fightwalktrigger == 0){	
			this.moveRight(2,1);
			this.moveDown(0,1);
			this.moveRight(2,1);
			this.moveDown(0,1);
			this.moveRight(2,1);
			this.moveDown(0,1);
			this.moveRight(2,1);
			this.moveDown(0,1);
			this.moveRight(5,1);
			this.moveDown(0,1);
			this.fightwalktrigger = 1;
		}else if(this.fightwalktrigger == 1){
			//stillstand
			this.stillStand();						
		}
	}

	////////////////////////////////////////////// Fight Stand /////////////////////////////////////
	fightStandLeft(){
		this.Weapon = new Spriteelement(5,1,"",1,859,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r-16,this.on_s_p_y_r-2,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);
		if(this.controlhandlercounter==1){
			this.moveLeft(5);
			this.anim(21,15);
			this.moveRight(6);
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft=1;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 0;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';
		}
	}

	fightStandRight(){
		this.Weapon = new Spriteelement(5,1,"",18,859,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+16,this.on_s_p_y_r-2,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r+16,this.on_s_p_y_r-4,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);
		if(this.controlhandlercounter==1){
			this.moveRight(6);
			this.anim(22,15);
			this.moveLeft(5);
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 1;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 0;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';
		}
	}

	fightStandUp(){
		this.Weapon = new Spriteelement(5,1,"",18,840,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+6,this.on_s_p_y_r-16,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);
		if(this.controlhandlercounter==1){
			this.moveUp(0,1);
			this.anim(23,15);
			this.moveDown(0,1);
			this.audio = attackSound;
			this.audio.play();
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 1;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 0;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';
		}
	}

	fightStandDown(){
		this.Weapon = new Spriteelement(5,1,"",1,840,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r+16,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
			this.moveDown(0,1);
			this.anim(24,15);
			this.moveUp(0,1);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 1;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 0;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';	
		}
	}

	fightStandLeftUp(){
		this.Weapon = new Spriteelement(5,1,"",1,895,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r-6,this.on_s_p_y_r-6,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
			this.moveLeft(1,1);
			this.moveUp(0,1);
			this.anim(27);
			this.moveRight(2,1);
			this.moveDown(0,1);
			this.anim(27);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 1;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 0;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';	
		}
	}

	fightStandLeftDown(){
		this.Weapon = new Spriteelement(5,1,"",1,816,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r-7,this.on_s_p_y_r+11,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
			this.moveLeft(1,1);
			this.moveDown(0,1);
			this.anim(25);
			this.moveRight(2,1);
			this.moveUp(0,1);
			this.anim(25);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 1;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 0;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';	
		}	
	}

	fightStandRightUp(){
		this.Weapon = new Spriteelement(5,1,"",18,895,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+6,this.on_s_p_y_r-6,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
			this.moveRight(2,1);
			this.moveUp(0,1);
			this.anim(28);
			this.moveLeft(1,1);
			this.moveDown(0,1);
			this.anim(28);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 1;
			this.fightstandtriggerrightdown = 0;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';	
		}	
	}

	fightStandRightDown(){
		this.Weapon = new Spriteelement(5,1,"",18,816,this.off_s_s_w,this.off_s_s_h,this.on_s_p_x_r+7,this.on_s_p_y_r+11,this.on_s_s_w,this.on_s_s_h,this.on_s_p_x_r,this.on_s_p_y_r,0);
		this.Weapon.GVS(this.Weapon.id);
		this.Weapon.sequenceDrawArrayFiller(this.Weapon.sgdavar);
		this.TempChar = new Spriteelement(7,1,"",this.off_s_p_x, this.off_s_p_y, this.off_s_s_w, this.off_s_s_h, this.on_s_p_x, this.on_s_p_y, this.on_s_s_w, this.on_s_s_h, this.on_s_p_x_r, this.on_s_p_y_r,0);
		this.TempChar.GVS(this.TempChar.id);
		this.TempChar.sequenceDrawArrayFiller(this.TempChar.sgdavar);	
		if(this.controlhandlercounter==1){
			this.audio = attackSound;
			this.audio.play();
			this.moveRight(2,1);
			this.moveDown(0,1);
			this.anim(26);
			this.moveLeft(1,1);
			this.moveUp(0,1);
			this.anim(26);
		}else if(this.controlhandlermax==this.controlhandlercounter){
			this.fightstandtriggerleft = 0;
			this.fightstandtriggerright = 0;
			this.fightstandtriggerup = 0;
			this.fightstandtriggerdown = 0;
			this.fightstandtriggerleftup = 0;
			this.fightstandtriggerleftdown = 0;
			this.fightstandtriggerrightup = 0;
			this.fightstandtriggerrightdown = 1;
			this.Weapon.disapear(this.Weapon.sgdavar);
			this.TempChar.disapear(this.TempChar.sgdavar);
			this.momentevent = 'fight-stand';	
		}	
	}

		//////////////////////////////////////// MOVE //////////////////////////////	
	moveLeft(stancey){
		var k = 2;
		var ki = 2;
		for(i=1;i<=this.g_h;i++){
			if(i<3){
				this.directioncountermax = this.directioncountermax + 1 * i;
			}else{
				this.directioncountermax = this.directioncountermax + (k*2);
				k = k * 2;
			}
			if(FgroundMapArray[this.on_s_p_y_r+this.on_s_s_h+8-i][this.on_s_p_x_r+8+1] == 1){
				if(i<3){
					this.directioncounter = this.directioncounter + 1 * i;
				}else{
					this.directioncounter = this.directioncounter + (ki*2);
					ki = ki * 2;
				}
			}else{
				if(i<3){
				}else{
					ki = ki * 2;
				}
			}
		}	
		////console.log('max: '+ this.directioncountermax +' direct: '+ this.directioncounter);
		if(this.directioncounter==0){
			this.leftScroll();
			this.on_s_p_x = this.on_s_p_x-1;
			this.on_s_p_x_r = this.on_s_p_x_r-1;
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
				}else{
					this.upScroll();
					this.on_s_p_y = this.on_s_p_y -1;
					this.on_s_p_y_r = this.on_s_p_y_r -1;
					this.leftScroll();
					this.on_s_p_x = this.on_s_p_x-1;
					this.on_s_p_x_r = this.on_s_p_x_r-1;
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					this.downScroll();
					this.on_s_p_y = this.on_s_p_y +1;
					this.on_s_p_y_r = this.on_s_p_y_r +1;
					this.leftScroll();
					this.on_s_p_x = this.on_s_p_x-1;
					this.on_s_p_x_r = this.on_s_p_x_r-1;		
				}else{
				}				
			}
		}
		this.directioncounter = 0;
		this.directioncountermax = 0;
		this.stance = stancey;	
	}
	
	moveRight(stancey){
		var k = 2;
		var ki = 2;
		for(i=1;i<=this.g_h;i++){
			if(i<3){
				this.directioncountermax = this.directioncountermax + 1 * i;
			}else{
				this.directioncountermax = this.directioncountermax + (k*2);
				k = k * 2;
			}
			if(FgroundMapArray[this.on_s_p_y_r+this.on_s_s_h+8-i][this.on_s_p_x_r+this.on_s_s_w+8-2] == 1){
				if(i<3){
					this.directioncounter = this.directioncounter + 1 * i;
				}else{
					this.directioncounter = this.directioncounter + (ki*2);
					ki = ki * 2;
				}
			}else{
				if(i<3){
				}else{
					ki = ki * 2;
				}
			}
		}
		////console.log('max: '+ this.directioncountermax +' direct: '+ this.directioncounter);
		if(this.directioncounter==0){
			this.rightScroll();
			this.on_s_p_x = this.on_s_p_x+1;
			this.on_s_p_x_r = this.on_s_p_x_r+1;
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
				}else{
					this.upScroll();
					this.on_s_p_y = this.on_s_p_y -1;
					this.on_s_p_y_r = this.on_s_p_y_r -1;
					this.rightScroll();
					this.on_s_p_x = this.on_s_p_x+1;
					this.on_s_p_x_r = this.on_s_p_x_r+1;		
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					this.downScroll();
					this.on_s_p_y = this.on_s_p_y +1;
					this.on_s_p_y_r = this.on_s_p_y_r +1;
					this.rightScroll();
					this.on_s_p_x = this.on_s_p_x+1;
					this.on_s_p_x_r = this.on_s_p_x_r+1;					
				}else{
					
				}				
			}
		}	
		this.directioncounter = 0;
		this.directioncountermax = 0;
		this.stance = stancey;
	}	

	moveUp(stancey){
		var k = 2;
		var ki = 2;
		for(i=1;i<=this.g_w;i++){
			if(i<3){
				this.directioncountermax = this.directioncountermax + 1 * i;
			}else{
				this.directioncountermax = this.directioncountermax + (k*2);
				k = k * 2;
			}
			if(FgroundMapArray[this.on_s_p_y_r+this.on_s_s_h-this.g_h+8][this.on_s_p_x_r+8+i] == 1){
				if(i<3){
					this.directioncounter = this.directioncounter + 1 * i;
				}else{
					this.directioncounter = this.directioncounter + (ki*2);
					ki = ki* 2;
				}
			}else{
				if(i<3){
				}else{
					ki = ki * 2;
				}
			}
		}
		////console.log('max: '+ this.directioncountermax +' direct: '+ this.directioncounter);
		if(this.directioncounter==0){
			this.upScroll();
			this.on_s_p_y = this.on_s_p_y -1;
			this.on_s_p_y_r = this.on_s_p_y_r -1;			
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
				}else{
					this.rightScroll();
					this.on_s_p_x = this.on_s_p_x+1;
					this.on_s_p_x_r = this.on_s_p_x_r+1;
					this.upScroll();
					this.on_s_p_y = this.on_s_p_y -1;
					this.on_s_p_y_r = this.on_s_p_y_r -1;
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					this.leftScroll();
					this.on_s_p_x = this.on_s_p_x-1;
					this.on_s_p_x_r = this.on_s_p_x_r-1;
					this.upScroll();
					this.on_s_p_y = this.on_s_p_y -1;
					this.on_s_p_y_r = this.on_s_p_y_r -1;	
				}else{
					
				}				
			}
		}
		this.directioncounter = 0;
		this.directioncountermax = 0;	
	}		
	
	moveDown(stancey,playerornot){
		var k = 2;
		var ki = 2;
		for(i=1;i<=this.g_w-2;i++){
			if(i<3){
				this.directioncountermax = this.directioncountermax + 1 * i;
			}else{
				this.directioncountermax = this.directioncountermax + (k*2);
				k = k * 2;
			}
			if(FgroundMapArray[this.on_s_p_y_r+this.on_s_s_h+8][this.on_s_p_x_r+8+i+1] == 1){
				if(i<3){
					this.directioncounter = this.directioncounter + 1 * i;
				}else{
					this.directioncounter = this.directioncounter + (ki*2);
					ki = ki * 2;
				}
			}else{
				if(i<3){
				}else{
					ki = ki * 2;
				}
			}
		}
		////console.log('max: '+ this.directioncountermax +' direct: '+ this.directioncounter);
		if(this.directioncounter==0){
			this.downScroll();
			this.on_s_p_y = this.on_s_p_y+1;
			this.on_s_p_y_r = this.on_s_p_y_r+1;		
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
				}else{
					this.rightScroll();
					this.on_s_p_x = this.on_s_p_x+1;
					this.on_s_p_x_r = this.on_s_p_x_r+1;
					this.downScroll();
					this.on_s_p_y = this.on_s_p_y+1;
					this.on_s_p_y_r = this.on_s_p_y_r+1;
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					this.leftScroll();
					this.on_s_p_x = this.on_s_p_x-1;
					this.on_s_p_x_r = this.on_s_p_x_r-1;
					this.downScroll();
					this.on_s_p_y = this.on_s_p_y+1;
					this.on_s_p_y_r = this.on_s_p_y_r+1;							
				}else{
					
				}				
			}
		}
		this.directioncounter = 0;
		this.directioncountermax = 0;	
	}

	checkIfBeingAttacked(){
		for(let i=0;i<=NpcArray.length-1;i++){
			if(NpcArray[i] != null && i != (this.id - 8)){
				if(NpcArray[i].momentevent=='attack'){
					this.momentevent='being-attacked';
					console.log('NpcArray[i].momentevent')
					console.log(NpcArray[i].momentevent);
				}else{
					//console.log('else ?');
				}
			}
		}
	}

	checkIfStillBeingAttacked(){
		if(this.beingAttackedTriggerCounter==0){
			this.momentevent='just-stand';
		}
	}

	beingAttacked(){
		this.beingAttackedTriggerCounter = 75;
		if(this.beingAttackedTriggerCounter == 0){
			this.beingAttackedTriggerCounter = 50;
			if(this.life <= 0){
				//this.dead = true;
			}
			this.beingAttacked = false;
		}else{

			if(this.beingAttackedTriggerCounter>97){
				//this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>94){
				this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>82){
				//this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>79){
				this.anim(9,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>67){
				//this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>64){
				this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>52){
				//this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>49){
				this.anim(9,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>45){
				//this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>40){
				this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>35){
				//this.anim(9,20);
			}else if(this.beingAttackedTriggerCounter>30){
				this.anim(9,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>25){
				//this.anim(9,20);
			}else if(this.beingAttackedTriggerCounter>20){
				this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>15){
				//this.anim(9,20);
			}else if(this.beingAttackedTriggerCounter>10){
				this.anim(9,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>5){
				//this.anim(9,20);
			}else if(this.beingAttackedTriggerCounter>4){
				this.anim(8,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>3){
				//this.anim(9,20);
			}else if(this.beingAttackedTriggerCounter>2){
				this.anim(9,this.anim_s);
			}else if(this.beingAttackedTriggerCounter>1){
				//this.anim(9,20);
			}else{
				this.anim(8,20);
			}
			this.beingAttackedTriggerCounter--;
		}
	}
}