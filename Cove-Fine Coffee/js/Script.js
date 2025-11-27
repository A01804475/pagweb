function menu() {
    var x = document.getElementById("navega");
    if (x.className === "navega") {
        x.className += ".mobile";
    } else {
        x.className = "navega";
    }
}