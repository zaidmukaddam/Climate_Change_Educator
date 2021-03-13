// alert("This page has finished loading.");
function AlertIt() {
  var answer = confirm ("Please click on OK to continue.")
  if (answer)
  window.location="https://www.google.com"; // Add the Git link
}
function closeOpenedWindow() {
  openedWindow.close('index.html');
}
var name = prompt("Enter Your Name");
alert("Hey " + name + ".It's nice to meet you");
localStorage.setItem("storageName",name);

var global = prompt("Are you ready to learn?").toUpperCase();
if(global === "YES")
{
  alert("Great! Let's get started!");
}
else
{
  alert("Then come back when you are ready!");
  window.open('', '_self', '');
  window.close();
}
