// This line gets the text element by its id "firsttest" and sets myitem to that element
myitem = document.getElementById("firsttest");
thebutton = document.getElementById("thebutton");  
textitem = document.getElementById("buttontest");
lightmodebutton = document.getElementById("lightmode");
darkmodebutton = document.getElementById("darkmode");
picturepagebackground = document.getElementById("picturespage");
textentry = document.getElementById("myinput");  

// This line adds a listener for an onClick method to the myitem element
myitem.addEventListener("click", onClick);

// This line adds a mouseout event listener to the myitem element
myitem.addEventListener("mouseout", mouseOut)

thebutton.addEventListener("click", onButtonClick);

lightmodebutton.addEventListener("click", lightModeClick);

textentry.addEventListener("change", onChange);

darkmodebutton.addEventListener("click", darkModeClick);



// This is the actual onClick function which is called on when the myitem element is clicked
// It turns the text color of the myitem element to lightblue, increases the text size, and adds a border
function onClick() {  
    myitem.style.color = "lightblue";  
    myitem.style.fontSize = "1.5em";
    myitem.style.border = "2px solid red";
}

function mouseOut() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
    myitem.style.border = "";
}

function onButtonClick() {  
    textitem.style.color = "red";  
}

function lightModeClick() {
    picturepagebackground.style.backgroundColor = "white";
    picturepagebackground.style.color = "black";
}

function darkModeClick() {
    picturepagebackground.style.backgroundColor = "";
    picturepagebackground.style.color = "blanchedalmond";
}

function onChange() {  
    newtext = myinput.value;  
    textitem.innerHTML = newtext;  
}