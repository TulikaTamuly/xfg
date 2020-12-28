var hr=hour()
var mn=minute()
var sc=second()
var scAngle
function setup() {
  createCanvas(800,800);
 // createSprite(400, 200, 50, 50);
 xyz=random(70,255)
 yzx=random(70,255)
 zxy=random(70,255)
 
 
}

function draw() {
  
  background("black");
  hhr=hour()
  hr=hhr
  if(hhr>12){
    hr=hhr-12
  }
  console.log(hr)
  mn=minute()
  sc=second()
  fill(xyz,yzx,zxy)
  textSize(40)
  text("0",470,30)
  text("12",0,470)
  textSize(30)
  text(hhr+" : "+mn+" : "+sc,500,500)
  scAngle=map(sc,0,60,0,90)
  strokeWeight(10)
  stroke("red")
  noFill()
  arc(0, 0, 800, 800, 0, scAngle);
  mnAngle=map(mn,0,60,0,90)
  strokeWeight(10)
  stroke("lightgreen")
  noFill()
  arc(0, 0, 825, 810, 0, mnAngle);
  hrAngle=map(hr,0,12,0,90)
  strokeWeight(10)
  stroke("yellow")
  noFill()
  arc(0, 0, 850, 820, 0, hrAngle);
  
  angleMode(DEGREES)
  push()
  rotate(scAngle)
  strokeWeight(7)
  stroke("red")
  //translate(400,400)
  line(0,0,370,0)
  //console.log(hr,mn,sc)
  pop()
  push()
  rotate(mnAngle)
  strokeWeight(10)
  stroke("lightgreen")
  //translate(400,400)
  line(0,0,350,0)
 // console.log(hr,mn,sc)
  pop()
  push()
  rotate(hrAngle)
  strokeWeight(12)
  stroke("yellow")
  //translate(400,400)
  line(0,0,200,0)
 // console.log(hr,mn,sc)
  pop()
  
  drawSprites();
}