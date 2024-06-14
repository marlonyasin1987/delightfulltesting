class Crab extends Enemy {	
	constructor(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance, aiscript, movingslow, hitdetectionArray, health, damageLvl) {
		super(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance, aiscript, movingslow, hitdetectionArray, health, damageLvl);

		this.sleepTriggerRandom = Math.floor(Math.random() * 10000);
		this.sleepTriggerCounter = 0;
		this.doAttackTriggerCounter = 75;
		this.deathSoundPlayed = false;
	}



	npcFunction(){
		if(this.dead != true){
			if(this.checkTouchingArea(Player.on_s_p_x_r,Player.on_s_p_y_r,Player.g_h,Player.on_s_s_h,Player.g_w,8,8,0,8)){
				this.isInAtackRange = true;
			}else if(this.checkTouchingArea(Player.on_s_p_x_r,Player.on_s_p_y_r,Player.g_h,Player.on_s_s_h,Player.g_w,8,8,8,8)){
				this.isInAtackRange = true;
			}else{
				this.isInAtackRange = false;
			}

			let animSillouette = 0;
			if(this.off_s_p_x > 2){
				animSillouette = 1;
			}
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
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][7],'left-up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}
			}else if(Player.momentevent == 'fight-left-down'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][5],'left-down',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}		
			}else if(Player.momentevent == 'fight-right-up'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][6],'right-up',crabHit['fullArray'][animSillouette])){
					this.beingAttacked = true;
				}				
			}else if(Player.momentevent == 'fight-right-down'){
				if(this.checkOtherBeingCollitionBeingAttacked(Player.Weapon.on_s_p_x,Player.Weapon.on_s_p_y,weaponHit['fullArray'][0][4],'right-down',crabHit['fullArray'][animSillouette])){
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
					if(Player.fastwalkactive != 'none' && Player.fastwalktrigger == 2){
						this.playerDmgHolder = Player.damageLvl * 2;
					}else{
						this.playerDmgHolder = Player.damageLvl;
					}
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
						crabDiesSound.play();
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
				if(this.checkTouchingArea(Player.on_s_p_x_r,Player.on_s_p_y_r,Player.g_h,Player.on_s_s_h,Player.g_w,8,8,0,8)&&this.doAttackTriggerCounter == 75 && this.cantAttackAnymoreCounter == 0){
					this.momentevent='attack-left';
					crabAttackSound.play();
				}else if(this.checkTouchingArea(Player.on_s_p_x_r,Player.on_s_p_y_r,Player.g_h,Player.on_s_s_h,Player.g_w,8,8,8,8)&&this.doAttackTriggerCounter == 75 && this.cantAttackAnymoreCounter == 0){
					this.momentevent='attack-right';
					crabAttackSound.play();
				}
				
				if(this.cantAttackAnymoreCounter != 0){
					this.cantAttackAnymoreCounter--;
				}
				if(this.momentevent=='attack-left'){
					if(this.isInAtackRange==true){
						this.doAttack = true;
					}
					if(this.doAttackTriggerCounter == 0){
						this.doAttackTriggerCounter = 75;
						this.cantAttackAnymoreCounter = 150;
						this.momentevent='normal';
					}else{
						this.doAttackTriggerCounter--;
						this.anim(3,this.anim_s);
					}
				}else if(this.momentevent=='attack-right'){
					if(this.isInAtackRange==true){
						this.doAttack = true;
					}
					if(this.doAttackTriggerCounter == 0){
						this.doAttackTriggerCounter = 75;
						this.cantAttackAnymoreCounter = 150;
						this.momentevent='normal';
					}else{
						this.doAttackTriggerCounter--;
						this.anim(2,this.anim_s);
					}
				}else{
					this.doAttack = false;
					this.sleepTriggerRandom = Math.floor(Math.random() * 10000);
					if(this.checkIfISeePlayer(this.on_s_p_x_r, this.on_s_p_y_r, this.g_h, this.g_w,40)){
						//this.walkToPlayer(this.on_s_p_x_r,this.on_s_p_y_r);
					}
					if(this.sleepTriggerCounter != 0){
						if(this.direction == 'left'){
							this.animDirection = 6;
						}else if(this.direction == 'right'){
							this.animDirection = 7;
						}else{
							this.animDirection = 6;
						}
						this.anim(this.animDirection,this.anim_s);
						this.sleepTriggerCounter--;
					}else{
						if(this.direction == 'left'){
							this.animDirection = 0;
						}else if(this.direction == 'right'){
							this.animDirection = 1;
						}else{
							this.animDirection = 1;
						}
						if(this.sleepTriggerRandom%5000==0){
							this.sleepTriggerCounter = 500;
						}else{
							if(this.directionChangerCounter < 30){
								this.directionChangerCounter++;
							}else{
								if(this.direction == 'left'){
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
}