"use strict";

var decCount = 0;

window.onload = function() {
    var incButton = document.getElementById("incButton");
    var incCount = 0;
    
    var decButton = document.getElementById("decButton");
    decButton.onclick = countDec;

    incButton.onclick = function () {
        incCount++;
        var incCountMessage = document.getElementById("incCount");
        incCountMessage.innerHTML = "Increment counter = " + incCount;
    }
    
}

function countDec() {
    decCount--;
    var decCountMessage = document.getElementById("decCount");
    decCountMessage.innerHTML = "Decrement counter = " + decCount;

}