var trainSpeed = 250;
var trainPosition = 0;
var animation;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startButton);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 50;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 440) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);
    }
}
