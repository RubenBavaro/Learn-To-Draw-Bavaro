let x = 0
let y = 0

function setup(){
    createCanvas(500,500)
    background("red")
}

function draw(){
    stroke(255,255,255)
    strokeWeight(5)
    line(0,0,x,y)
    x = x+1
    y=y+1
}