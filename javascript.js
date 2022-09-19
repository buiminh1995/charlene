
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// canvas width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

alreadyClicked = false;

// cat image
const cat = new Image();
cat.src = "tandywalk.png";

//message
const quote1 = new Image();
quote1.src = "quote1.png";
const quote2 = new Image();
quote2.src = "quote2.png";
const quote3 = new Image();
quote3.src = "quote3.png";
const quote4 = new Image();
quote4.src = "quote4.png";
const quote5 = new Image();
quote5.src = "quote5.png";

const emoji1 = new Image();
emoji1.src = "emoji1.png";
const emoji2 = new Image();
emoji2.src = "emoji2.png";

const colenanhtuan = new Image();
colenanhtuan.src = "colenanhtuan.png";


//cat
const player = {
  x: 1500,
  y: 551,
  width: 64,
  height: 64,
  frameX: 3,
  frameY: 0,
  speed: 2,
  moving: false
}

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//fps-related variables
let fps, fpsInterval, startTime, now, then, elapsed;
let number_of_times_elapsed = 0; // reach 10 change to another frame
let number_of_times_elapsed_standing = 0;
let times_elapsed_entire_game = 0 // only switch back to 0 when cat finishes road

function startAnimating(fps){
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate(){
  times_elapsed_entire_game++;
  // if(player.x == 550 && number_of_times_elapsed_standing < 120){
  //   ctx.clearRect(0,0,canvas.width, canvas.height);
  //   //standing still
  //   drawSprite(cat, player.width * 2, player.height * 2, player.width, player.height, player.x, player.y, player.width*2, player.height*2);
  //   drawSprite(message, 0, 0, 1145, 616, 500, 200, 1145/2, 616/2);
  //   number_of_times_elapsed_standing++;
  // }
  // if(times_elapsed_entire_game == 80){
  //   drawSprite(message, 0, 0, 1145, 616, 500, 200, 1145/2, 616/2);
  // }
  // else{
  //   number_of_times_elapsed_standing = 0;
  //   now = Date.now();
  //   elapsed = now - then;
  //   //only update after certain amount of time
  //   //when time elapsed is over fpsInterval, time to update
  //   if(elapsed > fpsInterval){
  //     ctx.clearRect(0,0,canvas.width, canvas.height);
  //     number_of_times_elapsed++;
  //     if(player.x < -100){
  //       player.x = 1400;
  //       times_elapsed_entire_game = 0
  //     }
  //     // cat moving
  //     drawSprite(cat, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width*2, player.height*2);
  //     movePlayer();
  //     if(number_of_times_elapsed == 10){
  //       handlePlayerFrame();
  //       number_of_times_elapsed = 0
  //       }
  //     }
  //   }
  if(times_elapsed_entire_game < 200){
    drawSprite(quote1, 0, 0, 1177, 137, 430, 150, 1177/2, 137/2);
  }
  else if (times_elapsed_entire_game == 201){
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }
  else if (times_elapsed_entire_game > 201 && times_elapsed_entire_game < 500){
    drawSprite(quote2, 0, 0, 1177, 238, 430, 150, 1177/2, 238/2);
  }
  else if (times_elapsed_entire_game == 501){
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }
  else if (times_elapsed_entire_game > 501){
    if(player.x == 550 && number_of_times_elapsed_standing < 150){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      //standing still
      drawSprite(cat, player.width * 2, player.height * 2, player.width, player.height, player.x, player.y, player.width*2, player.height*2);
      drawSprite(colenanhtuan, 0, 0, 1530, 669, 600, 250, 1530/2, 669/2);
      number_of_times_elapsed_standing++;
    }
    else{
      number_of_times_elapsed_standing = 0;
      now = Date.now();
      elapsed = now - then;
      //only update after certain amount of time
      //when time elapsed is over fpsInterval, time to update
      if(elapsed > fpsInterval){
        ctx.clearRect(0,0,canvas.width, canvas.height); // delete the previous image the next time next interval
        if (times_elapsed_entire_game < 650){
          drawSprite(quote3, 0, 0, quote3.width, quote3.height, 430, 150, quote3.width/2, quote3.height/2);
        }
        else if (times_elapsed_entire_game < 800){
          drawSprite(quote4, 0, 0, quote4.width, quote4.height, 430, 150, quote4.width/2, quote4.height/2);
        }
        else if (times_elapsed_entire_game > 1000 && times_elapsed_entire_game < 1300){
          drawSprite(quote5, 0, 0, quote5.width, quote5.height, 430, 150, quote5.width/2, quote5.height/2);
        }
        else if (times_elapsed_entire_game > 1300 && times_elapsed_entire_game < 1400){
          drawSprite(emoji1, 0, 0, emoji1.width, emoji1.height, 430, 150, emoji1.width/2, emoji1.height/2);
        }
        else if (times_elapsed_entire_game > 1400 && times_elapsed_entire_game < 1450){
          drawSprite(emoji2, 0, 0, emoji2.width, emoji2.height, 430, 150, emoji2.width/2, emoji2.height/2);
        }
        number_of_times_elapsed++;
        if(player.x < -100){
          player.x = 1500;
          times_elapsed_entire_game = 0
        }
        // cat moving
        drawSprite(cat, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width*2, player.height*2);
        movePlayer();
        if(number_of_times_elapsed == 10){
          handlePlayerFrame();
          number_of_times_elapsed = 0
          }
        }
    }
  }
  requestAnimationFrame(animate)
}

// cat position change by decreasing its x-coordinate
function movePlayer(){
  player.x -= player.speed;
}

function handlePlayerFrame(){
  if(player.frameY == 0){
    player.frameY = 1;
  } else{
    player.frameY = 0;
  }
}

startAnimating(0.5);
