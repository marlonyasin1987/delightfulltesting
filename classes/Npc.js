class Npc extends Being {	
	constructor(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance, aiscript, movingslow, hitdetectionArray) {
		super(id, momentevent, actionmode, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_y_r, on_s_p_x_r, anim_s, g_w, g_h, stance);
		this.aiscript = aiscript;
		this.movingslow = movingslow;
		this.hitdetectionArray = hitdetectionArray;

		this.movingslowcounterLeft = 0;
		this.movingslowcounterRight = 0;
		this.movingslowcounterUp = 0;
		this.movingslowcounterDown = 0;
		this.direction = 'left';
		this.directionsRight = ['left','up','down'];
		this.directionsLeft = ['right','up','down'];
		this.directionsUp = ['left','right','down'];
		this.directionsDown = ['left','up','right'];
		this.directionChangerCounter = 30;
		this.animDirection = 0;
	}


	npcFunction(){
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


	//////////////////////////////////// KEYBOARD Listener ///////////////////////////////////////////////////////////////////////////////////////
	aiscriptListener(){

	}

	

	//////////////////////////////////////////////////////////// Control Shema Stuff///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	npcControlShema() {
	
	}



	//////////////////////////////////////////////////////////////////////// EVENT Funktions /////////////////////////////////////////////////////////////////
	///////////////////////////////////////////// Walk //////////////////////////////////
	npcWalkLeft() {
		//leftWalk
		//console.log(this.direction);
		if(this.id == 8){
			//console.log('minimi');
		}
		if(this.movingslow == 0){
			if(this.movingslowcounterLeft == 0){
				if(!this.moveLeft(1)){
					this.directionChangerCounter = 0;
					this.direction = this.directionsLeft[Math.floor(Math.random() * this.directionsLeft.length)];
					//console.log(this.direction);
				}
				this.movingslowcounterLeft = 1;
			}else{
				this.movingslowcounterLeft = 0;
			}
		}else{
			if(!this.moveLeft(1)){
				this.directionChangerCounter = 0;
				this.direction = this.directionsLeft[Math.floor(Math.random() * this.directionsLeft.length)];
			}
		}
		this.animDirection = 0;
		this.anim(this.animDirection,this.anim_s);
	}

	npcWalkRight() {
		//rightWalk
		if(this.id == 8){
			//console.log('minimi');
		}
		if(this.movingslow == 0){
			if(this.movingslowcounterRight == 0){
				if(!this.moveRight(1)){
					this.directionChangerCounter = 0;
					this.direction = this.directionsRight[Math.floor(Math.random() * this.directionsRight.length)];
					//console.log(this.direction);
				}
				this.movingslowcounterRight = 1;
			}else{
				this.movingslowcounterRight = 0;
			}
		}else{
			if(!this.moveRight(1)){
				this.directionChangerCounter = 0;
				this.direction = this.directionsRight[Math.floor(Math.random() * this.directionsRight.length)];
			}
		}
		this.animDirection = 1;
		this.anim(this.animDirection,this.anim_s);
	}

	npcWalkUp() {
		//upWalk
		if(this.id == 8){
			//console.log('minimi');
		}
		if(this.movingslow == 0){
			if(this.movingslowcounterUp == 0){
				if(!this.moveUp(0)){
					this.directionChangerCounter = 0;
					this.direction = this.directionsUp[Math.floor(Math.random() * this.directionsUp.length)];
					//console.log(this.direction);
				}
				this.movingslowcounterUp = 1;
			}else{
				this.movingslowcounterUp = 0;
			}
		}else{
			if(!this.moveUp(0)){
				this.directionChangerCounter = 0;
				this.direction = this.directionsUp[Math.floor(Math.random() * this.directionsUp.length)];
			}
		}
		this.anim(this.animDirection,this.anim_s);
	}

	npcWalkDown() {
		//downWalk
		if(this.id == 8){
			//console.log('minimi');
		}
		if(this.movingslow == 0){
			if(this.movingslowcounterDown == 0){
				if(!this.moveDown(0)){
					this.directionChangerCounter = 0;
					this.direction = this.directionsDown[Math.floor(Math.random() * this.directionsDown.length)];
					//console.log(this.direction);
				}
				this.movingslowcounterDown = 1;
			}else{
				this.movingslowcounterDown = 0;
			}
		}else{
			if(!this.moveDown(0)){
				this.directionChangerCounter = 0;
				this.direction = this.directionsDown[Math.floor(Math.random() * this.directionsDown.length)];
			}
		}
		this.anim(this.animDirection,this.anim_s);
	}

	npcWalkLeftUp() {
	debugger;
		//leftupWalk
		if(fastwalktrigger == 2){
			fastwalktrigger = 0;
		}
		this.moveLeft(1,1);
		this.moveUp(0,1);
		this.anim(6,15);
	}

	npcWalkLeftDown() {
		//leftdownWalk
		if(fastwalktrigger == 2){
			fastwalktrigger = 0;
		}
		this.moveLeft(1,1);
		this.moveDown(0,1);
		this.anim(7,15);
	}

	npcWalkRightUp() {
		//rightupWalk
		if(fastwalktrigger == 2){
			fastwalktrigger = 0;
		}
		this.moveRight(2,1);
		this.moveUp(0,1);
		this.anim(5,15);
	}

	npcWalkRightDown() {
		//rightdownWalk
		if(fastwalktrigger == 2){
			fastwalktrigger = 0;
		}
		this.moveRight(2,1);
		this.moveDown(0,1);
		this.anim(8,15);
	}


	checkIfISeePlayer(ownX,ownY,ownHeight,ownWidth,range){
		let centerX = ownX + (ownWidth/2);
		let centerY = ownY + (ownHeight/2);
		let startPointX = centerX - (range/2);
		let startPointY = centerY - (range/2);
		
		for(i=0;i<=range;i++){
			for(j=0;j<=range;j++){
				if(Player.on_s_p_x_r == startPointX+i){
					if(Player.on_s_p_y_r == startPointY+j){
						return true;
					}
				}
			}
		}
	}

	walkToPlayer(ownX,ownY){
		let xDistance = 0;
		let yDistance = 0;
		
		if(ownX < Player.on_s_p_x_r){
			xDistance = Player.on_s_p_x_r - ownX;
		}else if(ownX == Player.on_s_p_x_r){
		}else{
			xDistance = ownX - Player.on_s_p_x_r
		}

		if(ownY < Player.on_s_p_y_r){
			yDistance = Player.on_s_p_y_r - ownY;
		}else if(ownY == Player.on_s_p_y_r){
		}else{
			yDistance = ownY - Player.on_s_p_y_r
		}

		if(xDistance < yDistance){
			if(ownX < Player.on_s_p_x_r){
				this.npcWalkRight();
			}else if(ownX == Player.on_s_p_x_r){
			}else{
				this.npcWalkLeft();
			}
	
			if(ownY < Player.on_s_p_y_r){
				this.npcWalkDown();
			}else if(ownY == Player.on_s_p_y_r){
			}else{
				this.npcWalkUp();
			}
		}else{
			if(ownY < Player.on_s_p_y_r){
				this.npcWalkDown();
			}else if(ownY == Player.on_s_p_y_r){
			}else{
				this.npcWalkUp();
			}
			
			if(ownX < Player.on_s_p_x_r){
				this.npcWalkRight();
			}else if(ownX == Player.on_s_p_x_r){
			}else{
				this.npcWalkLeft();
			}
		}
	}
}