let dacss = document.getElementById("DAcss");
let pcUI = document.getElementById("PCUI");
let mobileUI = document.getElementById("MobileUI");

function UIMobileversion() {
    if (window.innerHeight > window.innerWidth) {
        var ref = document.getElementById("css");
        var href = ref.getAttribute("href");
        if (href[0] != "M") {
            $(pcUI).hide();
            $(mobileUI).show();
            ref.setAttribute("href", "M" + href);
            dacss.setAttribute("href", "MStyle/DA_main.css"); 
        }
    }
    if (window.innerHeight < window.innerWidth) {
        $(pcUI).show();
        $(mobileUI).hide();
        var ref = document.getElementById("css");
        var href = ref.getAttribute("href");
        ref.setAttribute("href", href.replace("M", ""));
        dacss.setAttribute("href", "Style/DA_main.css");
}}



window.addEventListener('resize', UIMobileversion);
window.addEventListener('load', UIMobileversion);
window.addEventListener('orientationchange', UIMobileversion);
window.addEventListener('fullscreenchange', UIMobileversion);



