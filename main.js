status = "";
video = "";
input = "";

function setup(){
    canvas = createCanvas(400, 275);
    canvas.position(425, 225);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 275);
}


function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("objectStatus").innerHTML = "Status: Object Detecting";
    input = document.getElementById("objectInput").value;
}

function modelLoaded(){
    console.log("Model is Currently Initialized.")
    status = true;
}
