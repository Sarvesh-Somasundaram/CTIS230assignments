// This line gets the text element by its id "firsttest" and sets myitem to that element
myitem = document.getElementById("firsttest");

// This line adds a listener for an onClick method to the myitem element
myitem.addEventListener("click", onClick);

// This line adds a mouseout event listener to the myitem element
myitem.addEventListener("mouseout", mouseOut)

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