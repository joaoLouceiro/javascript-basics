// $ - references the jQuery object
// $() - Selects the DOM we're interested in
// $(document) - Selects the document object of our DOM
// $(document).ready(<function handler>) - wires an event handler to the document ready event
// This code will only exetuce when the DOM is ready
$(document).ready(function() {

    // We can see that this is a way of creating objects typical of the Builder Pattern
    $('<p>')
    .text("Hello World")
    .attr({"id": "paragraph-id", "style": "color: red"})
    .css({"background-color": "yellow"})
    .addClass("style-paragraph")
    .appendTo("#root");
        
    $('<p>')
    .html("<b>Hello World</b>")
    .appendTo("#root");
});