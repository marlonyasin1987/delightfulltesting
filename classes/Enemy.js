class Enemy extends Npc {	
	constructor(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance, aiscript, movingslow, hitdetectionArray, health, damageLvl) {
		super(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance);
		this.aiscript = aiscript;
		this.movingslow = movingslow;
		this.hitdetectionArray = hitdetectionArray;
		this.health = health;
		this.damageLvl = damageLvl;

		this.beingAttacked = false;
		this.beingAttackedTriggerCounter = 75;
		this.doAttack = false;
		this.doAttackTriggerCounter = 50;
		this.cantAttackAnymoreCounter = 0;
		this.dead = false;
		this.playerDmgHolder = 0;
	}

	npcFunction(){
		let animSillouette = 0;
		if(this.off_s_p_x > 2){
			animSillouette = 1;
		}
		if(this.dead != true){
			if(Player.momentevent == 'fight-left'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][0],'left',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}
			}else if(Player.momentevent == 'fight-right'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][1],'right',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}				
			}else if(Player.momentevent == 'fight-up'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][2],'up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}
			}else if(Player.momentevent == 'fight-down'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][3],'down',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}
			}else if(Player.momentevent == 'fight-left-up'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][4],'left-up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}
			}else if(Player.momentevent == 'fight-left-down'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][6],'left-down',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}		
			}else if(Player.momentevent == 'fight-right-up'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][5],'right-up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}				
			}else if(Player.momentevent == 'fight-right-down'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][6],'right-down',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}			
			}else if(Player.momentevent == 'fight-left-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][0],'left',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}	
			}else if(Player.momentevent == 'fight-right-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][1],'right',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}
			}else if(Player.momentevent == 'fight-up-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][2],'up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}	
			}else if(Player.momentevent == 'fight-down-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][3],'down',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}
			}else if(Player.momentevent == 'fight-left-up-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][4],'left-up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}	
			}else if(Player.momentevent == 'fight-left-down-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][6],'left-down',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}		
			}else if(Player.momentevent == 'fight-right-up-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][5],'right-up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}			
			}else if(Player.momentevent == 'fight-right-down-stand'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][7],'right-down',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}		
			}
			if(this.beingAttacked){
				if(this.beingAttackedTriggerCounter == 50){
					this.playerDmgHolder = Player.damageLvl;
				}

				if(this.beingAttackedTriggerCounter == 0){
					this.beingAttackedTriggerCounter = 50;
					this.health = this.health - (this.playerDmgHolder * 10);
					if(this.health <= 0){
						this.dead = true;
					}
					this.playerDmgHolder = Player.damageLvl;
					this.beingAttacked = false;
				}else{
					 if(this.direction == 'left'){
						this.animDirection = 4;
					}else if(this.direction == 'right'){
						this.animDirection = 5;
					}else if(this.direction == 'up'){
						this.animDirection = 5;
					}else if(this.direction == 'down'){
						this.animDirection = 4;
					}else if(this.direction == 'left-up'){
						this.animDirection = 4;
					}else if(this.direction == 'left-down'){
						this.animDirection = 4;
					}else if(this.direction == 'right-up'){
						this.animDirection = 5;
					}else if(this.direction == 'right-down'){
						this.animDirection = 5;
					} 
	
					if(this.beingAttackedTriggerCounter>97){
						//this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>94){
						this.anim(this.animDirection,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>82){
						//this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>79){
						this.anim(this.animDirection,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>67){
						this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>64){
						this.anim(this.animDirection,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>52){
						//this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>49){
						this.anim(this.animDirection,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>45){
						//this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>40){
						this.anim(this.animDirection,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>35){
						this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>30){
						this.anim(this.animDirection+2,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>25){
						this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>20){
						this.anim(this.animDirection+2,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>15){
						this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>10){
						this.anim(this.animDirection+2,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>5){
						this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>4){
						this.anim(this.animDirection+2,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>3){
						this.anim(8,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>2){
						this.anim(this.animDirection+2,this.anim_s);
					}else if(this.beingAttackedTriggerCounter>1){
						this.anim(8,this.anim_s);
					}else{
						this.anim(this.animDirection+2,this.anim_s);
					}
					this.beingAttackedTriggerCounter--;
				}
				
			}else{
				if(this.directionChangerCounter < 30){
					this.directionChangerCounter++;
				}else{
					if(this.direction == 'left'){
						//console.log(this.sleepTriggerRandom);
						this.npcWalkLeft();
					}else if(this.direction == 'right'){
						this.npcWalkRight();
					}else if(this.direction == 'up'){
						this.npcWalkUp();
					}else if(this.direction == 'down'){
						this.npcWalkDown();
					}			
				}
			}
		}else{
			this.on_s_p_x_r = 0;
			this.on_s_p_x = 0;
			this.on_s_p_y_r = 0;
			this.on_s_p_y = 0;
		}
	}	


	//////////////////////////////////// KEYBOARD Listener ///////////////////////////////////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////// Control Shema Stuff///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	//////////////////////////////////////////////////////////////////////// EVENT Funktions /////////////////////////////////////////////////////////////////
	
	checkOtherBeingCollitionBeingAttacked(ownX,ownY,weaponHitArrayCurrent,direction,hitdetectionArray){
		let beingHit = false;

		for(let i=0;i<=weaponHitArrayCurrent.length-1;i++){
			for(let j=0;j<=weaponHitArrayCurrent[i].length-1;j++){
				if(weaponHitArrayCurrent[i][j]==1){
					for(let p=0;p<=hitdetectionArray[this.animDirection].length-1;p++){
						for(let z=0;z<=hitdetectionArray[this.animDirection][p].length-1;z++){
							if(hitdetectionArray[this.animDirection][p][z]==1){
								if(ownY+i == this.on_s_p_y+p && ownX+j == this.on_s_p_x + z){
									beingHit = true;
								}
							}
							
/* 							if(direction == 'left'){
								if(ownX-weaponHitArrayCurrent[i].length+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY-2)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							}else if(direction == 'right'){
								if(ownX+weaponHitArrayCurrent[i].length+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY-2)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							}else if(direction == 'up'){
								if(ownX+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY-6)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							}else if(direction == 'down'){
								if(ownX+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY+Player.on_s_s_h+1)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							}else if(direction == 'left-down'){
								if(ownX-7+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY+10)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							}else if(direction == 'right-down'){
								if(ownX+7+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY+10)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							}else if(direction == 'left-up'){
								if(ownX-6+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY-6)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							}else if(direction == 'right-up'){
								if(ownX+6+j == this.on_s_p_x_r+z && this.on_s_p_y_r+p == (ownY-6)+i && hitdetectionArray[this.animDirection][p][z]==1){
									beingHit = true;
								}
							} */
						}
					}
				}
			}
		}
		return beingHit;
	}
}