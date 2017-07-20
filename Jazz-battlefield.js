var x = 0;//index x
var y = 0;//index y
var value = 0;
var sizeX = 600; // the width
var sizeY = 600; // the height
var boxes = ; // amount of Boxes

var randomX = Math.floor(Math.random()*4)*100;
var randomY = Math.floor(Math.random()*4)*100;

function setup() {
    createCanvas(sizeX,sizeY);
    for(var row = 0; row < boxes; row++){ //getting the row
        for( var col = 0; col < boxes; col++){
            fill(255, 204, 0); //filling the boxes with the color
            rect( x, y, boxes*100, boxes*100);
            y+= boxes*100;
        }
        y =0;
        x+=boxes*100;
    }

}
function mouseClicked() {
    if (mouseX < 200 && mouseY < 200){
        fill(100, 30, 22);
        rect( 0, 0, 200, 200);
    } else if (mouseX > 200 && mouseY < 200){
        fill(74, 35, 90);
        rect( 200, 0, 200, 200);
    } else if (mouseX < 200 && mouseY > 200){
        fill(40, 180, 99);
        rect( 0, 200, 200, 200);
    } else if (mouseX > 200 && mouseY > 200){
        fill(31, 97, 141);
        rect( 200, 200, 200, 200);
    }
    
}