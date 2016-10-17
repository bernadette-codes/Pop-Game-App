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
        showVisibility('#bubble12');
        showVisibility('#bubble23');
        showVisibility('#bubble34');
        showVisibility('#bubble45');
        showVisibility('#bubble51');
        showVisibility('#bubble62');
    });

    $("#bubble11").click(function(){
        hideVisibility();
        showVisibility('#bubble3');
        showVisibility('#bubble25');
        showVisibility('#bubble53');
        showVisibility('#bubble57');
    });

    $("#bubble24").click(function(){
        hideVisibility();
        showVisibility('#bubble1');
        showVisibility('#bubble13');
        showVisibility('#bubble29');
        showVisibility('#bubble33');
        showVisibility('#bubble42');
        showVisibility('#bubble50');
        showVisibility('#bubble60');
    });

    $("#bubble30").click(function(){
        hideVisibility();
        showVisibility('#bubble4');
        showVisibility('#bubble24');
        showVisibility('#bubble40');
        showVisibility('#bubble44');
        showVisibility('#bubble61');
    });

    $("#bubble43").click(function(){
        hideVisibility();
        showVisibility('#bubble2');
        showVisibility('#bubble9');
        showVisibility('#bubble17');
        showVisibility('#bubble27');
        showVisibility('#bubble38');
        showVisibility('#bubble54');
        showVisibility('#bubble63');
    });

    $("#bubble52").click(function(){
        hideVisibility();
        showVisibility('#bubble7');
        showVisibility('#bubble14');
        showVisibility('#bubble20');
        showVisibility('#bubble26');
        showVisibility('#bubble36');
        showVisibility('#bubble41');
        showVisibility('#bubble58');
    });

    $("#bubble59").click(function(){
        hideVisibility();
        showVisibility('#bubble5');
        showVisibility('#bubble15');
        showVisibility('#bubble22');
        showVisibility('#bubble31');
        showVisibility('#bubble39');
        showVisibility('#bubble43');
        showVisibility('#bubble52');
    });
});

//Body Not Selectable
window.onload = function() {
    document.body.onselectstart = function() {
        return false;
    }
};
