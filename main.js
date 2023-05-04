function preload(){
}


function setup() {
    canvas= createCanvas(400,400);
    canvas.position(450, 300);
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    rect(50, 50, 300, 300 );
    stroke(0,200,0);
    circle(65, 65, 50);
    circle(335,65,50);
    circle(65, 335, 50);
    circle(335,335,50);
image(video, 100, 100, 200, 200);
}

function take_snapshot(){
    save("student_name.png");
    }