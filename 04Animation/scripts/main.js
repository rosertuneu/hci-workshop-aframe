

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var upDownSpeed = 0.05;
var myOtherBox = document.getElementById('myOtherBox');
var ground = document.getElementById('ground');

function spin(){
    myOtherBox.object3D.rotation.x -= rotationSpeed * 0.25;
    myOtherBox.object3D.rotation.y -= rotationSpeed;
    myOtherBox.object3D.rotation.z -= rotationSpeed * 3;
}

function switchRotationSpeed() {
    if (rotationSpeed == 0.01) {
        rotationSpeed = 0.1;
    } else if (rotationSpeed == 0.1) {
        rotationSpeed = 0.001;
    } else {
        rotationSpeed = 0.01;
    }
}


// Move ground up or down
var movementDirection = 1; // up = 1, down = -1
function moveUpOrDown(){
    ground.object3D.position.y += movementDirection * upDownSpeed;
    if (ground.object3D.position.y > -1) {
        movementDirection = -1;
    }
    if (ground.object3D.position.y < -5) {
        movementDirection = 1;
    }
}

// Set animation intervals
setInterval(moveUpOrDown, 16);
setInterval(spin, 16); //equivalent to 60 fps
setInterval(switchRotationSpeed, 1000);