// Attach an event handler to the button
var btn = document.getElementById("button");
btn.onclick = search;
let output = document.getElementById("output");
output.innerText="";

$.getJSON("data.json",function(search)
{


});