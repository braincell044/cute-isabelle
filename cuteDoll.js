   
    function nextOn (){
  
        var nowThese = document.getElementsByClassName("dom")
        for (a = 0; a < nowThese.length; a++){
            nowThese[a].innerHTML = "i got a surprise for you!"  
        }
        }
        setTimeout(nextOn,3000)


function nextOne (){
  
    var sayThese = document.getElementsByClassName("dom")
    for (a = 0; a < sayThese.length; a++){
        sayThese[a].innerHTML = "i love you!"  
    }
    }
    setTimeout(nextOne,5000)

 setInterval(function(){   
var sayHello = document.getElementsByTagName("h2")

for(b = 0; b< sayHello.length; b++){
    sayHello[b].innerHTML = "i miss you so much"

}

},10000)


var face = document.getElementById("face");
// 2. Define the function that will respond to the event.
var onMouseMove = function(event) {
    console.log(event);
    document.getElementById("message").textContent += " ";      
       var beard = document.createElement("div");
    beard.className = "beard";
    document.body.appendChild(beard);
    beard.style.top = event.clientY + "px";
    beard.style.left = event.clientX + "px";
    
};
// 3. Add the event listener for the element and function
face.addEventListener("mousemove", onMouseMove);



var leftX = 150;
var rightX = 300;
var bottomLeftX = 100;
var bottomRightX = 350;
var sunRadius = 100;

function setup() {
    createCanvas(1000, 1000); // Create a 400x400 canvas
    noStroke();
}

function draw() {
    background(184, 236, 255); // Sky color
    leftX -= 1; // Move the left cloud to the left
    rightX += 1; // Move the right cloud to the right
    bottomLeftX += 0.5; // Move the bottom left cloud to the right
    bottomRightX -= 0.5; // Move the bottom right cloud to the left
    sunRadius += 2; // Increase the size of the sun

    /* Draw the sun
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);*/

    // Reset cloud positions when they move off screen
    if (leftX < -100) {  // If the left cloud goes too far left
        leftX = width + 100; // Reset it to the right edge
    }
    if (rightX > width + 100) { // If the right cloud goes too far right
        rightX = -100; // Reset it to the left edge
    }
    if (bottomLeftX > width + 100) { // If the bottom left cloud goes too far right
        bottomLeftX = -100; // Reset it to the left edge
    }
    if (bottomRightX < -100) { // If the bottom right cloud goes too far left
        bottomRightX = width + 100; // Reset it to the right edge
    }

    // Draw clouds
    fill(255, 255, 255);
    // Top left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX + 62, 150, 70, 60);
    ellipse(leftX - 62, 150, 70, 60);

    // Top right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX + 62, 100, 70, 60);
    ellipse(rightX - 62, 100, 70, 60);

    // Bottom left cloud
    ellipse(bottomLeftX, 300, 126, 97);
    ellipse(bottomLeftX + 62, 300, 70, 60);
    ellipse(bottomLeftX - 62, 300, 70, 60);

    // Bottom right cloud
    ellipse(bottomRightX, 250, 126, 97);
    ellipse(bottomRightX + 62, 250, 70, 60);
    ellipse(bottomRightX - 62, 250, 70, 60);
}