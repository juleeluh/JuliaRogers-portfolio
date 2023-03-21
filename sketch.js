let home
let bio
let experience
let expg1
let expg2
let expg3

let state = 0;


 //preloading
function preload() {
  home = loadImage("0_home.jpg");
  bio = loadImage("1_bio.jpg");
  experience = loadImage("2_experience.jpg");
  expg1 = loadImage("3_expg1.jpg");
  expg2 = loadImage("4_expg2.jpg");
  expg3 = loadImage("5_expg3.jpg");
}


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(255);
  
// state 0 - home page
if (state == 0) {
    image(home,0,0,1000,1000); 
  if(mouseX >= 35 && mouseX <= 520 && mouseY >= 35 && mouseY <= 290 && mouseIsPressed){
    state = 1
  }
   if(mouseX >= 340 && mouseX <= 970 && mouseY >= 260 && mouseY <= 400 && mouseIsPressed){
    state = 1
  }
   if (mouseX >= 35 && mouseX <= 740 && mouseY >= 400 && mouseY <= 740 && mouseIsPressed){
    state = 2
  }
  if (mouseX >= 35 && mouseX <= 350 && mouseY >= 850 && mouseIsPressed){
    state = 3
  }
  } 
  
  
  else if (state == 1) {
    image (bio,0,0,1000,1000);
    if(mouseX >= 35 && mouseX <= 220 && mouseY >= 745 && mouseY <= 855 && mouseIsPressed){
      state = 0
  }
    if (mouseX >= 35 && mouseX <= 350 && mouseY >= 860 && mouseIsPressed){
      state = 3
    }
  }
  
  else if (state == 2) {
    image (experience,0,0,1000,1000); 
     if(mouseX >= 35 && mouseX <= 220 && mouseY >= 745 && mouseY <= 855 && mouseIsPressed){
      state = 0
  }
    if (mouseX >= 35 && mouseX <= 350 && mouseY >= 860 && mouseIsPressed){
      state = 3
    }
  }
  
  else if (state == 3) {
    image(expg1,0,0,1000,1000);
    if (mouseX >= 590 && mouseX <= 775 && mouseY >= 25 && mouseY <= 70 && mouseIsPressed){
      state = 2
    }
    if(mouseX >= 790 && mouseX <= 970 && mouseY >= 25 && mouseY <= 70 && mouseIsPressed){
      state = 4
  }
  } 
  
  else if (state == 4) {
    image(expg2,0,0,1000,1000);
      if (mouseX >= 590 && mouseX <= 680 && mouseY >= 75 && mouseY <= 140 && mouseIsPressed){
      state = 3
    }
    if(mouseX >= 880 && mouseX <= 970 && mouseY >= 75 && mouseY <= 140 && mouseIsPressed){
      state = 5
  }
  } 
  
  if (state == 5) {
    image(expg3,0,0,1000,1000);
     if (mouseX >= 685 && mouseX <= 775 && mouseY >= 30 && mouseY <= 140 && mouseIsPressed){
      state = 4
    }
    if(mouseX >= 790 && mouseX <= 880 && mouseY >= 30 && mouseY <= 140 && mouseIsPressed){
      state = 0
  }
  } 

  
//     // mouse coords
//   textSize(20);
//   fill(0);
//   noStroke();
//   text(mouseX + "," + mouseY, mouseX, mouseY);
   
}

function keyTyped() {
  //state-key shortcuts
  if (key == "0") {
    state = 0;
  } else if (key == "1") {
    state = 1;
  } else if (key == "2") {
    state = 2;
  } else if (key == "3") {
    state = 3;
  } else if (key == "4") {
    state = 4;
  } else if (key == "5") {
    state = 5;
  }  
}