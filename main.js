leftWristX = 0;
leftWristY = 0;
leftWristScore = 0;
song_status = "";
rightWristX = 0;
rightWristY = 0;
song_1 = "";
song_2 = "";
function preload(){
    song_1 = loadSound("candyland.mp3");
    song_2 = loadSound("traveling time.mp3");
}
function setup(){
    canvas = createCanvas("600", "450");
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    image(video, 0, 0, 350, 450);
    song_status = song_1.isPlaying();
    if(leftWristScore > 0.2){
        fill("#FF0000");
        stroke("#FF0000");
        circle(leftWristX, leftWristY, 20);
        song_2.stop();
    }
    if(song_status = false){
        
    }
}
function modelLoaded(){
    console.log("Posenet is loaded.");
}
function gotPoses(results){
    if(results.length() > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristScore = results[0].pose.keypoints[0].score;
        console.log("Left wrist x is: " + leftWristX + ",Left wrist y is: " + leftWristY + ",Right wrist x is: " + rightWristX + ",Right wrist y is: " + rightWristY + ".");
        
    }
}