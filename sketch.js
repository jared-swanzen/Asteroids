function setup() {
	// createCanvas(550, 550);
	createCanvas(windowWidth, windowHeight);
	background(125);
}

function draw() {
	followCursor.init();
  document.body.onmousemove = followCursor.run;
	// Call the variableEllipse() method and send it the
	// parameters for the current mouse position
	// and the previous mouse position
	// background(102)
	// variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
	// ship sh = new ship(100,100,0);
}

// The simple method variableEllipse() was created specifically
// for this program. It calculates the speed of the mouse
// and draws a small ellipse if the mouse is moving slowly
// and draws a large ellipse if the mouse is moving quickly
//
// function variableEllipse(x, y, px, py) {
// 	let speed = abs(x - px) + abs(y - py);
// 	stroke(speed);
// 	ellipse(x, y, speed, speed);
// }
// class ship {
// 	constructor(x,y) {
// 		triangle(x,y_3,x+1.5,y-2,x-1.5,y-2);
//
// 	}
// 	turnR(){
// 		ship.rotation(-5)
// 	}
// 	turnL(){
// 		ship.rotation(-5)
// 	}
// }
//
// function keyDown(key){
// 	if (key = right_key){
// 		sh.turnR();
// 	}
// 	if(key = left_key){
// 		sh.turnL();
// 	}
// }
function mouseClicked(){
followCursor.s.style.transform = 'rotate(30deg)';
}

function getMouseCoords(e) {
  var e = e || window.event;
  document.getElementById('ship').innerHTML = e.clientX + ', ' +
           e.clientY;
}


var followCursor = (function() {
  var s = window.document.createElement('div');
	s.style.position = 'absolute';
	s.style.left = '50%';
	s.style.top = '50%';
	s.style.width = '0';
	s.style.height = '0';
	s.style.borderLeft = '5px solid transparent';
	s.style.borderRight = '5px solid transparent';
	s.style.borderBottom = '15px solid white';
	// s.style.transform = 'rotate(50deg)';
	// alert(document.getElementById('div'));


  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function(e) {
      var e = e || window.event;
      // s.style.left  = (e.clientX - 10) + 'px';
      // s.style.top = (e.clientY - 10) + 'px';
			s.style.transform = 'rotate('+e.clientX+'deg)';
      getMouseCoords(e);
    }
  };
}());

// window.onload = function() {
//   followCursor.init();
//   document.body.onmousemove = followCursor.run;
// }
