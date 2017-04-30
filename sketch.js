var threshold = 30;
var accChangeX = 0; 
var accChangeY = 0;
var accChangeT = 0;
//var interval = 150;
//preMillis

//var k=150;
function setup(){
  createCanvas(800, 800, WEBGL);
  frameRate(8);
   perspective(80/ 180 * PI, 1, 0.5, 20);

}

function draw(){
 orbitControl();

checkForShake();
   

 
}

function particle(x,y,z,s){
  
  push();
  translate(x+random(-0.5,0.5),y+2*random(-s,s),z+random(-0.5,0.5));
  colorMode(RGB)
  ambientLight(random(25,35));
  ambientMaterial(41,130,random(130,160),180);
  box(20,20,20);
  pop();
}

function checkForShake() {
  // Calculate total change in accelerationX and accelerationY
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake

  // If not shake
var w = 20-3*accChangeT;
 for(var i=-400;i<400;i=i+35){
for(var j=0;j<400;j=j+35){
  for(var k=150;k>w;k=k-30){
particle(i,k,j,1);}
  }
      }
}
