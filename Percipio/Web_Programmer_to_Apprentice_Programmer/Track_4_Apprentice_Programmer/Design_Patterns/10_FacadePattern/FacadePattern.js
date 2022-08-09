var currenttimeComponent = <CurrentTimeComponent />

var textComponent = <TextComponent />

var imageComponent1 = <ImageComponent image="images/rain1.jpg"/>

var imageComponent2 = <ImageComponent image="images/rain2.jpg"/>

var count = 1;

function addRenderCompleteListener() {

    window.addEventListener("mounted", function(e) {
        console.log('Window mounted listener', count++);
        console.log("Component name: ", e.detail);
    });

    window.addEventListener("completed", function(e) {
        console.log('Window completed listener', count++);
        console.log("Component name: ", e.detail);
    });

    document.addEventListener("completed", function(e) {
        console.log('Document completed listener', count++);
        console.log("Component name: ", e.detail);
    });

    document.addEventListener("mounted", function(e) {
        console.log('Document mounted listener', count++);
        console.log("Component name: ", e.detail);
    });
}    

addRenderCompleteListener();

ReactDOM.render(currenttimeComponent, 
    document.getElementById('time-id'));

ReactDOM.render(textComponent, 
    document.getElementById('text-id'));

ReactDOM.render(imageComponent1, 
    document.getElementById('image-id1'));

ReactDOM.render(imageComponent2, 
    document.getElementById('image-id2'));


















