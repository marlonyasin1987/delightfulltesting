class Being extends Spriteelement {
	
	constructor(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance) {
		super(id, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s,);
		this.g_w = g_w;
		this.g_h = g_h;
		this.stance = stance;
		this.directioncounter = 0;
		this.directioncountermax = 0;
		this.momentevent = momentevent;
		this.actionmode = actionmode;
	}


//////////////////////////////////// MOVEMENT ///////////////////////////////////////////////////////////////////////////////////////

	stanceChanger(wert1,wert2){
		if(this.stance % 2 == 1){
		this.stance = wert1;
		}else if(this.stance % 2 == 0){
			this.stance = wert2;
		}else{}		
	}

	stillStand(){
		if(this.stance == 1){
			this.off_s_p_x = 1;
			this.off_s_p_y = 1;
		}else if(this.stance == 2){
			this.off_s_p_x = 18;
			this.off_s_p_y = 1;
		}else if(this.stance == 3){
			this.off_s_p_x = 1;
			this.off_s_p_y = 234;
		}else if(this.stance == 4){
			this.off_s_p_x = 18;
			this.off_s_p_y = 260;
		}else if(this.stance == 5){
			this.off_s_p_x = 18;
			this.off_s_p_y = 755;
		}else if(this.stance == 6){
			this.off_s_p_x = 1;
			this.off_s_p_y = 755;
		}
		this.sequenceDrawArrayFiller(this.sgdavar);		
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
		if(this.id == 8){
			//console.log('mömömömö left');
		}
		////console.log('max: '+ this.directioncountermax +' direct: '+ this.directioncounter);
		if(this.directioncounter==0){
			if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'left') == false){
				this.on_s_p_x = this.on_s_p_x-1;
				this.on_s_p_x_r = this.on_s_p_x_r-1;
			}else{
				this.directioncounter = 0;
				this.directioncountermax = 0;
				this.stance = stancey;
				return false;
			}	
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
					this.directioncounter = 0;
					this.directioncountermax = 0;
					this.stance = stancey;
					return false;
				}else{
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'up') == false){
						this.on_s_p_y = this.on_s_p_y -1;
						this.on_s_p_y_r = this.on_s_p_y_r -1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'left') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'up') == false){
							this.on_s_p_x = this.on_s_p_x-1;
							this.on_s_p_x_r = this.on_s_p_x_r-1;
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'down') == false){
						this.on_s_p_y = this.on_s_p_y +1;
						this.on_s_p_y_r = this.on_s_p_y_r +1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'left') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'down') == false){
							this.on_s_p_x = this.on_s_p_x-1;
							this.on_s_p_x_r = this.on_s_p_x_r-1;
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}				
				}else{
					this.directioncounter = 0;
					this.directioncountermax = 0;
					this.stance = stancey;
					return false;
				}				
			}
		}
		this.directioncounter = 0;
		this.directioncountermax = 0;
		this.stance = stancey;
		return true;	
	}

	
 	moveRight(stancey){
		//console.log('moveRight');
		if(this.id == 8){
			//console.log('mömömömö right');
		}
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
			if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'right') == false){
				this.on_s_p_x = this.on_s_p_x+1;
				this.on_s_p_x_r = this.on_s_p_x_r+1;
			}else{
				this.directioncounter = 0;
				this.directioncountermax = 0;
				this.stance = stancey;
				return false;
			}		
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
					this.directioncounter = 0;
					this.directioncountermax = 0;
					this.stance = stancey;
					return false;
				}else{
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'up') == false){
						this.on_s_p_y = this.on_s_p_y -1;
						this.on_s_p_y_r = this.on_s_p_y_r -1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'right') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'up') == false){
							this.on_s_p_x = this.on_s_p_x+1;
							this.on_s_p_x_r = this.on_s_p_x_r+1;
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}			
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'down') == false){
						this.on_s_p_y = this.on_s_p_y +1;
						this.on_s_p_y_r = this.on_s_p_y_r +1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'right') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'down') == false){
							this.on_s_p_x = this.on_s_p_x+1;
							this.on_s_p_x_r = this.on_s_p_x_r+1;
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}				
				}else{
					this.directioncounter = 0;
					this.directioncountermax = 0;
					this.stance = stancey;
					return false;
				}				
			}
		}	
		this.directioncounter = 0;
		this.directioncountermax = 0;
		this.stance = stancey;
		return true;
	}	

	
 	moveUp(stancey){
		//console.log('moveUp');
		if(this.id == 8){
			//console.log('mömömömö uo');
		}
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
			if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'up') == false){
				this.on_s_p_y = this.on_s_p_y -1;
				this.on_s_p_y_r = this.on_s_p_y_r -1;	
			}else{
				this.directioncounter = 0;
				this.directioncountermax = 0;
				this.stance = stancey;
				return false;
			}			
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
					this.directioncounter = 0;
					this.directioncountermax = 0;
					return false;
				}else{
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'right') == false){
						this.on_s_p_x = this.on_s_p_x+1;
						this.on_s_p_x_r = this.on_s_p_x_r+1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'up') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'right') == false){
							this.on_s_p_y = this.on_s_p_y -1;
							this.on_s_p_y_r = this.on_s_p_y_r -1;
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}	
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'left') == false){
						this.on_s_p_x = this.on_s_p_x-1;
						this.on_s_p_x_r = this.on_s_p_x_r-1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'up') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'left') == false){
							this.on_s_p_y = this.on_s_p_y -1;
							this.on_s_p_y_r = this.on_s_p_y_r -1;	
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}						
				}else{
					this.directioncounter = 0;
					this.directioncountermax = 0;
					this.directioncounter = 0;
					this.directioncountermax = 0;
					return false;
				}				
			}
		}
		this.directioncounter = 0;
		this.directioncountermax = 0;
		return true;	
	}		
	

 	moveDown(stancey){
		//console.log('moveDown');
		if(this.id == 8){
			//console.log('mömömömö down');
		}
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
			if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'down') == false){
				this.on_s_p_y = this.on_s_p_y+1;
				this.on_s_p_y_r = this.on_s_p_y_r+1;	
			}else{
				this.directioncounter = 0;
				this.directioncountermax = 0;
				this.stance = stancey;
				return false;
			}			
		}else{
			if(this.directioncounter%2==1){
				if(this.directioncounter>1){
					this.directioncounter = 0;
					this.directioncountermax = 0;
					this.stance = stancey;
					return false;
				}else{
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'right') == false){
						this.on_s_p_x = this.on_s_p_x+1;
						this.on_s_p_x_r = this.on_s_p_x_r+1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'down') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'right') == false){
							this.on_s_p_y = this.on_s_p_y+1;
							this.on_s_p_y_r = this.on_s_p_y_r+1;
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}		
				}
			}else{
				if(this.directioncounter==(this.directioncountermax+1)/2){
					if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'left') == false){
						this.on_s_p_x = this.on_s_p_x-1;
						this.on_s_p_x_r = this.on_s_p_x_r-1;
						if(this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'down') == false && this.checkOtherBeingCollition(this.on_s_p_x_r,this.on_s_p_y_r,this.g_w,this.g_h,'left') == false){
							this.on_s_p_y = this.on_s_p_y+1;
							this.on_s_p_y_r = this.on_s_p_y_r+1;	
						}else{
							this.directioncounter = 0;
							this.directioncountermax = 0;
							this.stance = stancey;
							return false;
						}	
					}else{
						this.directioncounter = 0;
						this.directioncountermax = 0;
						this.stance = stancey;
						return false;
					}						
				}else{
					this.directioncounter = 0;
					this.directioncountermax = 0;
					return false;
				}				
			}
		}
		this.directioncounter = 0;
		this.directioncountermax = 0;
		return true;		
	}
	

	//////////////////////////////////////// COLLITION //////////////////////////////
	checkOtherBeingCollitionX(ownX,ownY,NpcX,NpcY,direction){
		let canMove = false;
		for(i=0;i<Npc.length-1;i++){
			if(Npc[i] != null){
				//console.log('fucking i:   ' + i);
				if(Npc[i].on_s_p_x_r+NpcX <= ownX){
					if(Npc[i].on_s_p_x_r+NpcX == ownX){
						if(Npc[i].on_s_p_y_r >= ownY && Npc[i].on_s_p_y_r+NpcY < ownY){
							if(direction == 'left'){
								canMove = true;
							}
						}
					}
				}else{
					if(Npc[i].on_s_p_x_r-11 == ownX){
						if(Npc[i].on_s_p_y_r >= ownY && Npc[i].on_s_p_y_r+NpcY < ownY){
							if(direction == 'right'){
								canMove = true;
							}
						}
					}
				}
			}
		}

//		for(i=0;i<Npc.length;i++){
	//		if(Npc[i].on_s_p_x_r-8 < ownX && Npc[i].on_s_p_x_r >= ownX){
	//			console.log('trueueueuueue ???');
	////		}
	//	}
		return canMove;
	}

	checkOtherBeingCollitionY(ownX,ownY,NpcX,NpcY){
		let canMove = false;
		for(i=0;i<Npc.length-1;i++){
			if(Npc[i] != null){
				if(Npc[i].on_s_p_y_r+NpcY >= ownY){
					if(Npc[i].on_s_p_y_r+NpcY == ownY){
						if(Npc[i].on_s_p_x_r-12 <= ownX && Npc[i].on_s_p_x_r+NpcX > ownX){
							canMove = true;
						}
					}
				}else{
					if(Npc[i].on_s_p_y_r+NpcY == ownY){
						if(Npc[i].on_s_p_x_r-11 <= ownX && Npc[i].on_s_p_x_r+NpcX > ownX){
							//console.log('trueueueuueue ???');
							canMove = true;
						}
					}
				}		
			}

		}

//		for(i=0;i<Npc.length;i++){
	//		if(Npc[i].on_s_p_x_r-8 < ownX && Npc[i].on_s_p_x_r >= ownX){
	//			console.log('trueueueuueue ???');
	////		}
	//	}
		return canMove;
	}


	checkOtherBeingCollition(ownX,ownY,ownWidth,ownHeight, direction){
		let canMove = false;
		for(i=0;i<NpcArray.length;i++){
			if(NpcArray[i] != null && i != (this.id - 8)){
				let constructedArrayLength = NpcArray[i].g_w + ownWidth - 1;
				let constructedArrayHeight = NpcArray[i].g_h + ownHeight - 1;
				let upperHalf = 0;
				let lowerHalf = 0;
				if(constructedArrayHeight%2==1){
					upperHalf = (constructedArrayHeight-1)/2;
					lowerHalf = upperHalf;
				}else{
					upperHalf = (constructedArrayHeight/2)-1;
					lowerHalf = upperHalf;
				}
			    //console.log('Npc[i].g_w + ownWidth - 1:     ',Npc[i].g_w + ownWidth - 1);
				//console.log('Npc[i].g_h + (16 - 1) + (ownHeight - 1)) - 16:     ',(Npc[i].g_h + (16 - 1) + (ownHeight - 1)) - 16);
				var constructedArray = new Array(constructedArrayHeight);
				for(let p=0;p<constructedArrayHeight;p++){
					constructedArray[p]=new Array(constructedArrayLength);
					if(p+1<=lowerHalf){
						for(let u=0;u<constructedArrayLength-1;u++){
							if(u <= upperHalf-p-1){
								constructedArray[p][u]=0;
							}else{
								constructedArray[p][u]=1;
							}
						}
						for(let u=constructedArray[p].length-1;u>0;u--){
							if(u >= constructedArray[p].length-lowerHalf+p){
								constructedArray[p][u]=0;
							}
						}
					}else if(p+1==lowerHalf+1){
						for(let u=0;u<constructedArrayLength;u++){
							constructedArray[p][u]=1;
						}
					}else{
						for(let u=constructedArray[p].length-1;u>=0;u--){
							if(u >= p-lowerHalf){
								constructedArray[p][u]=1;
							}else{
								constructedArray[p][u]=0;
							}
						}
						for(let u=0;u<=constructedArrayLength-1;u++){
							if(u >= constructedArray[p].length-(p-lowerHalf)){
								constructedArray[p][u]=0;
							}
						}
					}
				}
				for(j=0;j<constructedArray.length-1;j++){
					//console.log('Npc[i].on_s_p_y_r - ((16 - Npc[i].g_w) - 1) + j :     ',Npc[0].on_s_p_y_r - (((16 - Npc[0].g_h) - ownHeight)) + j);
					for(k=0;k<constructedArray[j].length-1;k++){
						if(constructedArray[j][k]!=0){
							if(direction == 'left'){
								if((NpcArray[i].on_s_p_x_r + 1) - (ownWidth - 1) + k == ownX && (((NpcArray[i].on_s_p_y_r+NpcArray[i].on_s_s_h)-NpcArray[i].g_h)-this.on_s_s_h) + j + 1 == ownY){
									canMove = true;
								}
							}else if(direction == 'right'){
								if((NpcArray[i].on_s_p_x_r - 1) - (ownWidth - 1) + k == ownX && (((NpcArray[i].on_s_p_y_r+NpcArray[i].on_s_s_h)-NpcArray[i].g_h)-this.on_s_s_h) + j + 1 == ownY){
									canMove = true;
								}
							}else if(direction == 'up'){
								if(NpcArray[i].on_s_p_x_r - (ownWidth - 1) + k == ownX && ((((NpcArray[i].on_s_p_y_r + 1)+NpcArray[i].on_s_s_h)-NpcArray[i].g_h)-this.on_s_s_h) + j + 1 == ownY){
									canMove = true;
								}
							}else if(direction == 'down'){
								if(NpcArray[i].on_s_p_x_r - (ownWidth - 1) + k == ownX && ((((NpcArray[i].on_s_p_y_r - 1)+NpcArray[i].on_s_s_h)-NpcArray[i].g_h)-this.on_s_s_h) + j + 1 == ownY){
									canMove = true;
								}
							}	
						}						
					}
				}
			}
		}

		if(this.id != 0){

			let constructedArrayLengthForBot = Player.g_w + ownWidth - 1;
			let constructedArrayHeightForBot = Player.g_h + ownHeight - 1;
			let upperHalfForBot = 0;
			let lowerHalfForBot = 0;
			if(constructedArrayHeightForBot%2==1){
				upperHalfForBot = (constructedArrayHeightForBot-1)/2;
				lowerHalfForBot = upperHalfForBot;
			}else{
				upperHalfForBot = (constructedArrayHeightForBot/2)-1;
				lowerHalfForBot = upperHalfForBot;
			}
			//console.log('Npc[i].g_w + ownWidth - 1:     ',Npc[i].g_w + ownWidth - 1);
			//console.log('Npc[i].g_h + (16 - 1) + (ownHeight - 1)) - 16:     ',(Npc[i].g_h + (16 - 1) + (ownHeight - 1)) - 16);
			var constructedArrayForBot = new Array(constructedArrayHeightForBot);
			for(let p=0;p<constructedArrayHeightForBot;p++){
				constructedArrayForBot[p]=new Array(constructedArrayLengthForBot);
				if(p+1<=lowerHalfForBot){
					for(let u=0;u<constructedArrayLengthForBot-1;u++){
						if(u <= upperHalfForBot-p-1){
							constructedArrayForBot[p][u]=0;
						}else{
							constructedArrayForBot[p][u]=1;
						}
					}
					for(let u=constructedArrayForBot[p].length-1;u>0;u--){
						if(u >= constructedArrayForBot[p].length-lowerHalfForBot+p){
							constructedArrayForBot[p][u]=0;
						}
					}
				}else if(p+1==lowerHalfForBot+1){
					for(let u=0;u<constructedArrayLengthForBot;u++){
						constructedArrayForBot[p][u]=1;
					}
				}else{
					for(let u=constructedArrayForBot[p].length-1;u>=0;u--){
						if(u >= p-lowerHalfForBot){
							constructedArrayForBot[p][u]=1;
						}else{
							constructedArrayForBot[p][u]=0;
						}
					}
					for(let u=0;u<=constructedArrayLengthForBot-1;u++){
						if(u >= constructedArrayForBot[p].length-(p-lowerHalfForBot)){
							constructedArrayForBot[p][u]=0;
						}
					}
				}
			}


			for(let z=0;z<constructedArrayForBot.length-1;z++){
				//console.log('Npc[i].on_s_p_y_r - ((16 - Npc[i].g_w) - 1) + j :     ',Npc[0].on_s_p_y_r - (((16 - Npc[0].g_h) - ownHeight)) + j);
		
					for(let t=0;t<constructedArrayForBot[z].length-1;t++){
						if(direction == 'left'){
							if((Player.on_s_p_x_r + 1) - (ownWidth - 1) + t == ownX && (((Player.on_s_p_y_r+Player.on_s_s_h)-Player.g_h)-this.on_s_s_h) + z + 1 == ownY){
								canMove = true;
							}
						}else if(direction == 'right'){
							if((Player.on_s_p_x_r - 1) - (ownWidth - 1) + t == ownX && (((Player.on_s_p_y_r+Player.on_s_s_h)-Player.g_h)-this.on_s_s_h) + z + 1 == ownY){
								canMove = true;
							}
						}else if(direction == 'up'){
							if(Player.on_s_p_x_r - (ownWidth - 1) + t == ownX && ((((Player.on_s_p_y_r + 1)+Player.on_s_s_h)-Player.g_h)-this.on_s_s_h) + z + 1 == ownY){
								canMove = true;
							}
						}else if(direction == 'down'){
							if(Player.on_s_p_x_r - (ownWidth - 1) + t == ownX && ((((Player.on_s_p_y_r - 1)+Player.on_s_s_h)-Player.g_h)-this.on_s_s_h) + z + 1 == ownY){
								canMove = true;
							}
						}
					}			
				

			}
		}

//		for(i=0;i<Npc.length;i++){
	//		if(Npc[i].on_s_p_x_r-8 < ownX && Npc[i].on_s_p_x_r >= ownX){
	//			console.log('trueueueuueue ???');
	////		}
	//	}
		return canMove;
	}

	checkTouchingArea(ownX,ownY,ownHeight,ownWidth,hitsquareWidth,hitsquareHeight,hitsquarePosiX,hitsquarePosiY){

		let majorBoxHeight = (ownHeight * 2)+(hitsquareHeight-2);
		let majorBoxWidth = (ownWidth * 2)+(hitsquareWidth-2);

		let majorBoxHeightNew = majorBoxHeight-((majorBoxHeight - 8) / 2);
		let majorBoxWidthNew = majorBoxWidth-((majorBoxWidth - 8) / 2);

		let majorBoxY = (this.on_s_p_y_r+hitsquarePosiY) - (majorBoxHeight-majorBoxHeightNew);
		let majorBoxX = (this.on_s_p_x_r+hitsquarePosiX) - (majorBoxWidth-majorBoxWidthNew);
		
		//console.log('majorBoxWidth: ' + majorBoxWidth);
		//console.log('majorBoxHeight: ' + majorBoxHeight);
		//console.log('majorBoxWidthNew: ' + majorBoxWidthNew);
		//console.log('majorBoxHeightNew: ' + majorBoxHeightNew);
		//console.log('this.on_s_p_y_r+hitsquarePosiY: ' + parseInt(this.on_s_p_y_r+hitsquarePosiY));
		//console.log('this.on_s_p_x_r+hitsquarePosiX: ' + parseInt(this.on_s_p_x_r+hitsquarePosiX));
		//console.log('majorBoX: ' + majorBoxX);
		//console.log('majorBoxY: ' + majorBoxY);

		for(let i=0;i<=majorBoxHeightNew-1;i++){
			for(let j=0;j<=majorBoxWidthNew-1;j++){
				if(majorBoxY+i == ownY+(24-ownHeight) && majorBoxX+j == ownX){
					return true;
				}
			}
		}
	}

}