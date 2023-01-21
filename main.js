song = "";

function preload()
{
    song = loadSound("music.mp3");
}

rightwistX = 0;
rightwistY = 0;
leftwistX = 0;
leftwistY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function modelLoaded()
{
    console.log('posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightwistX = results[0].pose.rightWrist.x;
        rightwistY = results[0].pose.rightWrist.y;
        leftwistX = results[0].pose.leftWrist.x;
        leftwistY = results[0].pose.leftWrist.y;
        console.log("Right Wrist X = " + rightwistX, "Right Wrist Y" + rightwistY);
        console.log("Left Wrist X = " + leftwistX, "Left Wrist Y" + leftwistY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}