/**
 * Created by Bernadette on 3/29/2016.
 */

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

// Select the burst all bubble
var x = ["#bubble1", "#bubble10", "#bubble19", "#bubble28", "#bubble37", "#bubble46", "#bubble55", "#bubble64"];

// Randomly select the burst-all bubble
    i = Math.floor(Math.random() * 7);

// 30 Sec Timer
function start() {
    var timeLeft = 30,
        elem = document.getElementById("countDown"),
        timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == -1) {
            clearTimeout(timerId);
            stop();
        } else {
            elem.innerHTML = timeLeft;
            timeLeft--;
        }
    }
}

// Burst all bubble
function burst() {
    var images = document.getElementsByTagName('img'),
        l = images.length;
    for (var i = 0; i < l; i++) {
        images[0].parentNode.removeChild(images[0]);}
}

// Time is Up
function stop() {
    burst();
    document.getElementById("instruction").style.visibility="hidden";
    document.getElementById("timeUP").style.visibility="visible";
}

// Show bubble
function showVisibility(elemName) {
    $(elemName).css("visibility", "visible");
}

// Remove this bubble
function hideVisibility() {
    $(this).css("visibility", "hidden");
}

$(document).ready(function(){
    // Window height
    var windowHeight=$(window).height();
    $(window).height(windowHeight+"px");

    // Window width
    var windowWidth=$(window).width();
    //alert(windowWidth);

    // Start Game
    $(".startButton").click(function(){
        $(this).remove();
        showVisibility('.pop');
    });

    // Remove this bubble Call
    $("img").on('click', hideVisibility);

    // Select the burst all bubble
    $(x[i]).click(function(){
        burst();

        myVar = setTimeout(time, 750);
        function time() {
            document.getElementById("instruction").style.visibility="hidden";
            document.getElementById("timeUP").style.display="none";
            document.getElementById("goodjob").style.visibility="visible";
        }
    });

    //Appear Bubbles
    $("#bubble6").click(function(){
        hideVisibility();
        showVisibility('.popbubble6');
    });

    $("#bubble11").click(function(){
        hideVisibility();
        showVisibility('.popbubble11');
    });

    $("#bubble24").click(function(){
        hideVisibility();
        showVisibility('.popbubble24');
    });

    $("#bubble30").click(function(){
        hideVisibility();
        showVisibility('.popbubble30');
    });

    $("#bubble43").click(function(){
        hideVisibility();
        showVisibility('.popbubble43');
    });

    $("#bubble52").click(function(){
        hideVisibility();
        showVisibility('.popbubble52');
    });

    $("#bubble59").click(function(){
        hideVisibility();
        showVisibility('.popbubble59');
    });
});

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};
