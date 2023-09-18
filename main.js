function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(700,600);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is intialized");
}
function gotPoses(results)
{
    console.log(results);
}