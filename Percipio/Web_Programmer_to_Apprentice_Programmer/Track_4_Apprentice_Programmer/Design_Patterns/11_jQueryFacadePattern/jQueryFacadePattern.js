$(document).ready(function() {

    function display1(response) {
        $('<p>')
            .text(JSON.stringify(response))
            .addClass("box")
            .appendTo("#req1");
    }

    function display2(response) {
        $('<p>')
            .text(JSON.stringify(response))
            .addClass("box")
            .appendTo("#req2");
    }

    function display3(response) {
        $('<p>')
            .text(JSON.stringify(response))
            .addClass("box")
            .appendTo("#req3");
    }

    function display4(response) {
        $('<p>')
            .text(JSON.stringify(response))
            .addClass("box")
            .appendTo("#req4");
    }

    function display5(response) {
        $('<p>')
            .text(JSON.stringify(response))
            .addClass("box")
            .appendTo("#req5");
    }

    function display6(response) {
        $('<p>')
            .text(JSON.stringify(response))
            .addClass("box")
            .appendTo("#req6");
    }

    // This is an HTTP request using AJAX but withou the facade that jQuery provides.
    // All the complexity of the request is exposed to the client

    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/2",
        async: true,
    }).done(display1);

 
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/20",
        async: true,
        dataType: "json"
    }).done(display2);
 

    var new_post = {
        "userId": 1234,
        "title": "Some title",
        "body": "Some text"
    }
 
    $.ajax({
        type: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        async: true,
        dataType: "json",
        data:new_post
    }).done(display3);



    // With this implementation, we're only interacting with jQuery's Facade to the .ajax methods
    $.get("https://jsonplaceholder.typicode.com/posts/2", "json", display4);
    $.getJSON("https://jsonplaceholder.typicode.com/posts/2", display5);
    $.post("https://jsonplaceholder.typicode.com/posts", new_post, display6);

});