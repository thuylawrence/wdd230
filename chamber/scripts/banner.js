const abanner = document.querySelector(".mybanner");
var d = new Date();
var n = d.getDay();
if(n == 1 || n == 2 || n == 3){
    mybanner();
    console.log(mybanner);
}

var running = true;
function mybanner(){
    var banner = document.createElement("div");

    banner.setAttribute("class", "meeting-banner");
    banner.innerHTML = "MEET AND GREET ON WEDNESDAY AT 7:00 PM";
    banner.id = "meeting-banner";
    banner.addEventListener("click", function(){
        removeBanner();
    });
    abanner.appendChild(banner);

    setTimeout(function(){
        removeBanner();
    }, 5000);
}
function removeBanner(){
    if(running) return;
    var banner = document.getElementById("meeting-banner");
    var top = parseFloat(window.getComputedStyle(banner).getPropertyValue("top"));
    if(top < -window.getComputedStyle(banner).getPropertyValue("height")){
        banner.remove();
        running = false;
        return;
    }
    banner.style.top  = top - 5 + "px";
    setTimeout(function(){
        removeBanner();
    }, 5);
}