function setup() {
	// createCanvas(550, 550);
	createCanvas(windowWidth, windowHeight);
	background(125);
}

function draw() {
	followCursor.init();
  followCursor.run();
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
	var rotation = 0;
	 window.addEventListener('keydown', function (e) {
		switch (e.key) {
			case 'ArrowUp':
			s.style.top = (s.getBoundingClientRect().top - 2)+ 'px';
			break;
			case 'ArrowDown':
			s.style.top = (s.getBoundingClientRect().top + 2)+ 'px';
			break;
			case 'ArrowLeft':
			rotation-=3;
			break;
			case 'ArrowRight':
			rotation+=3;
		}
	});


  return {
    init: function() {
      document.body.appendChild(s);
    },

    run: function() {
      var e = e || window.event;
  // s.style.left  = (e.clientX - 10) + 'px';
  // s.style.top = (e.clientY - 10) + 'px';
	// s.style.top = s.getBoundingClientRect().top + 'px';
	// s.style.left = s.getBoundingClientRect().left + 'px';
	s.style.transform = 'rotate('+rotation+'deg)';
	document.getElementById('ship').innerHTML = rotation+' deg';
    }
  };
}());

// window.onload = function() {
//   followCursor.init();
//   followCursor.run();
// }
