"use strict";

var jsTitle = document.getElementById('jstitle');
console.log("Content of the jstitle: ", jsTitle);

var bTags = document.getElementsByTagName('b');
console.log("Content with <b>: ", bTags);
console.log("The first <b>: ",bTags[0].innerHTML);

var jsText = document.getElementById('jstext');
console.log("Content of the jstext: ", jsText);

console.log("<b>s inside the jstext: ", jsText.getElementsByTagName('b'));

var jsDesc = document.getElementsByClassName('jsdescription');
console.log("Content of the jsDesc: ", jsDesc);
console.log("First element of the jsDesc: ", jsDesc[0]);

var select = document.querySelectorAll('i.jsdescription');
console.log("Content of the select: ", select);
console.log("using the CSS selector i.jsdescription: ", select[0].innerHTML);

var data = document.getElementById('jstitle');
console.log("\nModifying the inner HTML:");
console.log("Old data : ", data.innerHTML);

var newData = data.innerHTML = "Programming with JS";
console.log("New Data: ", newData);

var list = document.getElementById("list");
console.log("Content of list: ", list);

var listChild = document.getElementById("list").childNodes;
console.log("Content of listChild: ", listChild);

var listItem1 = document.createElement('li');
listItem1.textContent = "MatLAB";

var listItem2 = document.createElement('li');
var text2 = document.createTextNode("Lisp");
listItem2.appendChild(text2);

list.prepend(listItem1);
list.append(listItem2);

var h4 = document.createElement('h4');
h4.textContent= "List of programming languages";
document.body.insertBefore(h4, list);

var h3 = document.createElement('h3');
h3.textContent= "End of list";
document.body.insertBefore(h4, list.nextSibling);

function removeMe() {
    jsTitle.remove();
}

function removeFirstChildElement() {
    var firstElementChild = list.firstElementChild;
    list.removeChild(firstElementChild);
}

function replace() {
    var listReplacer = document.createElement('li');
    listReplacer.textContent = 'Go';
    var listReplaced = list.lastElementChild;
    list.replaceChild(listReplacer, listReplaced);
}
