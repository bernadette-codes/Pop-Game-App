// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

var $instruction = $("#instruction"),
    $timeUP = $("#timeUP");

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
}

// Burst All Bubbles
function burst() {
    $(".allBubbles").empty();
}

// Game Over
function stop() {
    burst();
    $instruction.css('visibility', 'hidden');
    $timeUP.css('visibility', 'visible');
}

$(document).ready(function(){

    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        navHeight = $("nav").height(),
        instructionHeight = $("#instruction").height(),
        //pop image size
        popLandscape = (windowHeight - navHeight - instructionHeight - 50)/8,
        popPortrait = (windowWidth - 50)/8,
        $pop = $(".pop"),
        // Randomly Select the Burst-all Bubble
        x = Math.floor((Math.random() * 64) + 1),
        pickedBubble = "#bubble"+[x],
        $clickedImg = $("img");

    //alert(windowWidth);

    //pop image size
    if(windowHeight < windowWidth) {
        //landscape screen
        $pop.css("width", popLandscape);
    } else {
        //portrait screen
        $pop.css("width", popPortrait);
    }

    $(window).on("resize", function() {
        var windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            navHeight = $("nav").height(),
            instructionHeight = $("#instruction").height(),
            //pop image size
            popLandscape = (windowHeight - navHeight - instructionHeight - 30)/8,
            popPortrait = (windowWidth - 30)/8;

        if(windowHeight < windowWidth) {
            //landscape screen
            $pop.css("width", popLandscape);
        } else {
            //portrait screen
            $pop.css("width", popPortrait);
        }
    });

    // Start Game
    $(".startButton").click(function(){
        var timeLeft = 30,
            timerId = setInterval(countdown, 1000),
            $elem = $("#countDown");

        // 30 Sec Timer
        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                stop();
            } else {
                $elem.html(timeLeft);
                timeLeft--;
            }
        } // end countdown

        // Remove Start Button
        $(this).remove();

        // Show All Bubbles
        showVisibility('.pop');
    }); // end startButton click

    // Remove this Bubble
    $clickedImg.on('click', hideVisibility);

    // Select the burst all bubble
    $(pickedBubble).on('click' ,function(){
        burst();

        // Win Game
        myVar = setTimeout(time, 750);
        function time() {
            $instruction.css('visibility', 'hidden');
            $timeUP.css('display', 'none');
            $("#goodjob").css('visibility', 'visible');
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
