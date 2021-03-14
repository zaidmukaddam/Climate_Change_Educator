function AlertIt() {
  var answer = confirm ("Please click on OK to continue to Page two.")
  if (answer)
  window.location="https://zaidmukaddam.github.io/Climate_Change_Educator_Page2/"; 
}

var openedWindow=window.open('','_self','');
function closeOpenedWindow() {
  openedWindow.close();
}

var name = prompt("Enter Your Name");

alert("Hey " + name + ". It's nice to meet you!");

localStorage.setItem("storageName",name);

var global = prompt("Are you ready to learn? Yes/No").toUpperCase();

if(global === "YES")
{
  alert("Great! Let's get started!");
}
else
{
  alert("Then come back when you are ready!");
  closeOpenedWindow();
}
