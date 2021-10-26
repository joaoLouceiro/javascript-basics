"use strict";

window.onload = function animation() {
    var circ = document.getElementById("circle");

    var loc = 450;
    var time = setInterval(frame, 10);

    function frame() {
        if (loc == 0) {
            clearInterval(time);
        } else {
            loc--;
            circ.style.top = loc + "px";
            circ.style.right = loc + "px";
        }
    }
}