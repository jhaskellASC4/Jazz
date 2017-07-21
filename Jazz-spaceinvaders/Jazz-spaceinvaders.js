var x;
var y;
var alienx = {
    xcor: 123890,
    ycor: 12390,
    dicksize: "19in",
    girth: "12in radius",
    women: -5
};
var alieny;
var xIncrement = -2;
var bulletx;
var bullety;
function setup(){
    createCanvas(windowWidth,windowHeight);
    //player coordinates
    x = width/2;
    y = (5/6) * height;
    alienx = width/2;
    alieny = (1/10)*height;
    background(0);
    bulletx = (x+30)
    bullety = (y)
}
function draw(){
 
    //when arrow key down, square moves
    if (keyIsDown(LEFT_ARROW)){
        if (x<=0 && bulletx<=40){
            x=0;
            bulletx=30;
        }
        x-=10;
        bulletx -=10;
    }
     if (keyIsDown(RIGHT_ARROW)){
         if (((x+100)>=width)){
             x = (width-100)
             bulletx = (width-70);
         }
        x+=10;
        bulletx += 10;
    }
    
    //rectangle following x and y coordinates based on left and right arrow
    clear();
    fill(0,255,0);
    rect(x, y, 100, 100);
    //shooting "bullet"(i.e. rectangle)
    fill(0,0,255);
    rect(bulletx,bullety, 40,40)
    //enemy alien

    fill(255,0,0);
    rect(alienx, alieny, 100, 100);
    rect(100,94,100,100)
    rect(300,94,100,100)
    rect(500,94,100,100)
    rect(700,94,100,100)
    rect(900,94,100,100)
    //alien automatic movement from side to side, if reaches border, goes oopposite way
    alienx += xIncrement;
    if (((alienx+100) >= width) || ((alienx)<=0)){
        xIncrement = xIncrement*(-1)
    }
}
function keyTyped(){
    if (keyCode == UP_ARROW){
        if(bullety>0){
            bullety -= 5
        }
    }
}
