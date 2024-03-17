

onResize();

function onResize() {
    var leftPanel = document.getElementById('left_panel');
    var leftPanelStyle = window.getComputedStyle(leftPanel);
    var photo = document.getElementById('photo');
    var photoStyle = window.getComputedStyle(photo);
  
    if (parseFloat(leftPanelStyle.width) < parseFloat(leftPanelStyle.getPropertyValue("--leftPanelMaxWidth"))) {
        photo.style.setProperty("width", ((document.documentElement.clientWidth / 100) * 15) + "px");
        photo.style.setProperty("height", ((document.documentElement.clientWidth / 100) * 15) + "px");
        photo.style.setProperty("left", (parseFloat(leftPanelStyle.getPropertyValue("--leftPanelWidth")) * (document.documentElement.clientWidth / 100) / 8) + "px");   
        photo.style.setProperty("top", (parseFloat(leftPanelStyle.getPropertyValue("--leftPanelWidth")) * (document.documentElement.clientWidth / 100) / 8) + "px"); 
        //console.log("A");
    }
    else {
        photo.style.setProperty("width", "200px");
        photo.style.setProperty("height", "200px");
        photo.style.setProperty("left", "25px");   
        photo.style.setProperty("top", "25px"); 
        //console.log("B");
    }
}