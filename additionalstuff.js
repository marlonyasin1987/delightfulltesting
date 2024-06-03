

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////                                                       Code for the Full-Screen Mode                                             //////	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////				

	
	var db, isfullscreen = false;
		function toggleFullScreen(){
		db = document.getElementById("onscreen");
		if(isfullscreen == false){
			if(db.requestFullScreen){
			db.requestFullScreen();
			}else if(db.webkitRequestFullscreen){
			db.webkitRequestFullscreen();
			}else if(db.mozRequestFullScreen){
			db.mozRequestFullScreen();}
			else if(db.msRequestFullScreen){
			msRequestFullScreen();
			}
			isfullscreen = true;
			/*wrap.style.width = window.screen.width+"px";
			wrap.style.height = window.screen.height+"px";
			wrap.webkitImageSmoothingEnabled = false;
			wrap.mozImageSmoothingEnabled = false;
			wrap.imageSmoothingEnabled = false;*/
			}
			else{
			if(document.cancelFullScreen){
				document.cancelFullScreen();
			}else if(document.exitFullScreen){
				document.exitFullScreen();
				}else if(document.mozCancelFullScreen){
				document.mozCancelFullScreen();
				}else if(document.webkitCancelFullScreen){
				document.webkitCancelFullScreen();
				}else if(document.msEkitFullScreen){
				document.msEkitFullScreen();
				}
				isfullscreen = false;
				/*wrap.style.width ="100%";
				wrap.style.height = "auto";*/
			}
		}

        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////                                          GAMEPAD                                                                                          //////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var haveEvents = 'ongamepadconnected' in window;
var controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;


  requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {

  delete controllers[gamepad.index];
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }

  var i = 0;
  var j;

  for (j in controllers) {
    var controller = controllers[j];

    for (i = 0; i < controller.buttons.length; i++) {
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      if (typeof(val) == "object") {
        pressed = val.pressed;
        val = val.value;
      }

      var pct = Math.round(val * 100) + "%";

      if (pressed) {
		if(i == 12){
			CapArray[1] = 1;
		}
		else if(i == 13){
			CapArray[3] = 1;
		}
		else if(i == 14){
			CapArray[0] = 1;
		}
		else if(i == 15){
			CapArray[2] = 1;
		}
		else if(i == 9){
			CapArray[6] = 1;
		}
		else if(i == 2){
			CapArray[4] = 1;
		}
		else if(i == 0){
			CapArray[7] = 1;
		}		
		//console.log('Pressed ' + CapArray[0] + ' ' + CapArray[1] + ' ' + CapArray[2] + ' ' + CapArray[3] + ' Aktionbuttons: ' + CapArray[3]);
		
		
      } else {
		if(i == 12){
			CapArray[1] = 0;
		}
		else if(i == 13){
			CapArray[3] = 0;
		}
		else if(i == 14){
			CapArray[0] = 0;
		}
		else if(i == 15){
			CapArray[2] = 0;
		}
		else if(i == 9){
			CapArray[6] = 0;
		}
		else if(i == 2){
			CapArray[4] = 0;
		}
		else if(i == 0){
			CapArray[7] = 0;
		}
      }
    }
  }
// b = 0
// l = 4,6
// r = 5,7
// select = 8
// start = 9
	if(i == 12){
		CapArray[1] = 1;
		}
		else if(i == 13){
		CapArray[3] = 1;
		}
		else if(i == 14){
		CapArray[0] = 1;
		}
		else if(i == 15){
		CapArray[2] = 1;
		}
  requestAnimationFrame(updateStatus);
}

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addgamepad(gamepads[i]);
      }
    }
  }
}


window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
  setInterval(scangamepads, 500);
}