// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

var instruction = document.getElementById("instruction"),
    timeUP = document.getElementById("timeUP");

// 30 Sec Timer
function start() {
    var timeLeft = 30,
        elem = document.getElementById("countDown"),
        timerId = setInterval(countdown, 1000);

    // End Game
    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            stop();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    } // end countdown
} // end start

// Show Bubble
function showVisibility(elemName) {
    $(elemName).css("visibility", "visible");
}

// Remove this Bubble
function hideVisibility() {
    $(this).css("visibility", "hidden");
}

// Show Clicked Bubbles
function appearBubble(clickedBubble, popbubbles){
    $(clickedBubble).click(function(){
        hideVisibility();
        showVisibility(popbubbles);
    });
} // end appearBubble

// Burst All Bubbles
function burst() {
    var images = document.getElementsByTagName('img'),
        l = images.length,
        i;
    for (i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);
    }
} // end burst

// Game Over
function stop() {
    burst();
    instruction.style.visibility = "hidden";
    timeUP.style.visibility = "visible";
}

$(document).ready(function(){

    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        // Randomly Select the Burst-all Bubble
        x = Math.floor((Math.random() * 64) + 1),
        pickedBubble = "#bubble"+[x],
        clickedImg = $("img");

    // Window height
    $(window).height(windowHeight+"px");

    // Window width
    //alert(windowWidth);

    // Start Game
    $(".startButton").click(function(){
        $(this).remove();
        // Show All Bubbles
        showVisibility('.pop');
    });

    // Remove this Bubble
    clickedImg.on('click', hideVisibility);

    // Select the burst all bubble
    $(pickedBubble).click(function(){
        burst();

        // Win Game
        myVar = setTimeout(time, 750);
        function time() {
            instruction.style.visibility = "hidden";
            timeUP.style.display = "none";
            document.getElementById("goodjob").style.visibility = "visible";
        } // end time
    }); // end click event

}); // end ready

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};

//Call Appear Bubbles Function
appearBubble("#bubble6", ".popbubble6");
appearBubble("#bubble11", ".popbubble11");
appearBubble("#bubble24", ".popbubble24");
appearBubble("#bubble30", ".popbubble30");
appearBubble("#bubble43", ".popbubble43");
appearBubble("#bubble52", ".popbubble52");
appearBubble("#bubble59", ".popbubble59");
