class Spriteelement {
	
	constructor(id, sgdavar, imageobject, off_s_p_x, off_s_p_y, off_s_s_w, off_s_s_h, on_s_p_x, on_s_p_y, on_s_s_w, on_s_s_h, on_s_p_x_r, on_s_p_y_r, anim_s) {
    this.id = id;
	this.sgdavar = sgdavar;	
	this.io = imageobject;
	this.off_s_p_x = off_s_p_x;
	this.off_s_p_y = off_s_p_y;
	this.off_s_s_w = off_s_s_w;
	this.off_s_s_h = off_s_s_h;
	this.on_s_p_x = on_s_p_x;
	this.on_s_p_y = on_s_p_y;
	this.on_s_s_w = on_s_s_w;
	this.on_s_s_h = on_s_s_h;
	this.on_s_p_y_r = on_s_p_y_r;
	this.on_s_p_x_r = on_s_p_x_r;
	this.controlhandler = 0;
	this.controlhandlercounter = 0;
	this.controlhandlermax = 0;
	this.uebereinstimmtwidth = 0;
	this.anim_s = anim_s;	
  }
  
  
	disapear(sgdavar){
		if(sgdavar != 0){
			if(SGDA2.indexOf(GV[this.id])!= -1){
				GV[this.id].position.x = -100;
				GV[this.id].position.y = -100;}else{}
		}else{
			if(SGDA[this.on_s_p_y].indexOf(GV[this.id])!= -1){
				SGDA[this.on_s_p_y].splice( SGDA[this.on_s_p_y].indexOf(GV[this.id]), 1 );
			}else{}
		}
	}
  
 	sequenceDrawArrayFiller(sgdavar){
		if(sgdavar == 1){
			if(SGDA2.indexOf(GV[this.id])!= -1){}else{
					SGDA2.push(GV[this.id]);
				}
		}else if(sgdavar == 0){
			let self = this;
			let notHere = false;
			SGDA[this.on_s_p_y_r].forEach(function (value) {
				if(value.sgdaId == self.id){
					notHere = true;
				}
			});

			if(notHere === false){
				SGDA.forEach(function (value, key) {
					//console.log(key+parseInt(self.on_s_s_h));
					SGDA[key].forEach(function (value2, key2) {
						if(value2.sgdaId == self.id){
							SGDA[key].splice( key2 , 1 );
						}
					});
				});
				SGDA[this.on_s_p_y_r+parseInt(self.on_s_s_h)].push(GV[this.id]);
			}
			//SGDA[this.on_s_p_y-1].splice( indexOff , 1 );
			//SGDA[this.on_s_p_y-2].splice( indexOff , 1 );			
			//SGDA[this.on_s_p_y+1].splice( indexOff , 1 );
			//SGDA[this.on_s_p_y+2].splice( indexOff , 1 );
		}else{}

		//console.log('minus-1' + SGDA[this.on_s_p_y-1].length);
		//console.log('normal-1' +SGDA[this.on_s_p_y].length);
		//console.log('plus-1' +SGDA[this.on_s_p_y+1].length);
	}
	
	
	GVS(id){
		GV[id].position.x = this.on_s_p_x;
		GV[id].position.y = this.on_s_p_y;
		GV[id].tilePosition.x = -(this.off_s_p_x);
		GV[id].tilePosition.y = -(this.off_s_p_y);
		GV[id].width = this.on_s_s_w;
		GV[id].height = this.on_s_s_h;
	}
	

	counteriz(dauer){
		if(this.controlhandlercounter<dauer){
			this.controlhandlercounter++;
		}else{
			this.controlhandlercounter = 0;
			this.controlhandler = 0;
		}	

	}
	
	anim(paramiz,speed){	
		if(this.animationcounter < speed){
			this.animationcounter++;
			this.off_s_p_y = ((this.on_s_s_h+((this.on_s_s_h/this.on_s_s_h)*2))*paramiz)+(this.on_s_s_h/this.on_s_s_h);
		}else{
			this.off_s_p_y = ((this.on_s_s_h+((this.on_s_s_h/this.on_s_s_h)*2))*paramiz)+(this.on_s_s_h/this.on_s_s_h);
			this.animationcounter = 0;
			this.off_s_p_x = this.off_s_p_x + this.on_s_s_w+(this.on_s_s_h/this.on_s_s_h);
			if(this.off_s_p_x > this.on_s_s_h+((this.on_s_s_h/this.on_s_s_h)*2)){
				this.off_s_p_x = (this.on_s_s_h/this.on_s_s_h);
			}
		}
	}	
	
}