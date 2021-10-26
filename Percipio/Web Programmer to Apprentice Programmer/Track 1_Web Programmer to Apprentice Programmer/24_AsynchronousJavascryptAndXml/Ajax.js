"use strict";

const IMG_URL = "https://images.pexels.com/photos/9830909/pexels-photo-9830909.jpeg";

let fetchImage = async () => {
    var imgResp = await fetch(IMG_URL);
    console.log("image response:\n", imgResp.blob())
};

function ajaxRequest() {
    
    function reqHandler () {
        console.log(this.response);
    }
    
    var xmlRequest = new XMLHttpRequest();

    xmlRequest.addEventListener("load", reqHandler.bind(xmlRequest));
    xmlRequest.open("GET", IMG_URL);
    xmlRequest.send();
};
