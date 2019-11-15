
var bananaX= 600;
var dragonY= 600;
var dragonS= 0;
var score= 0;
var banana;
var dragon;
var dragonAfter;
var bg1;
var dragonFace= 0;


function preload() {
      banana = loadImage("https://i.postimg.cc/ZKK6xNdM/banana.png");
      dragon = loadImage("https://i.postimg.cc/qvKqsBjF/dragon.png");
      dragonAfter = loadImage("https://i.postimg.cc/N0J0YyM5/dragon-After.png");
      bg1 = loadImage("https://i.postimg.cc/JzKrcyjP/bg1.jpg");
		};

function setup() {
      createCanvas(windowWidth, windowHeight);
    };

function draw() {
			background(bg1);

      image(dragon, windowWidth/2, dragonY, 160, 150);
			image(banana, bananaX, 500);
			bananaX = bananaX-5;
			if(bananaX < 0) {
				bananaX = windowWidth + 100
			}

      if (dragonFace>10) {
        image(dragonAfter, windowWidth/2, dragonY, 160, 150);
        dragonFace--
      }


			dragonY = dragonY - dragonS;

			if (dragonY < 600) {
				dragonY = dragonY +5
			}

			if (mouseIsPressed && dragonS <= 0.1) {
				dragonS = 10
			} else if (dragonS > 0.1) {
				dragonS = dragonS - 0.1
			}

			if (bananaX < windowWidth/2+280 && bananaX > windowWidth/2 && dragonY < 500) {
				bananaX = windowWidth + 100
				score++
        dragonFace = 50
			}

			text('你jb已经吃了'+ this.score + '个香蕉', 10, 30);
    }
