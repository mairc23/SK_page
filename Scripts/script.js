window.onscroll = function() { stickyHeader() };

var header = document.querySelector(".header");

function stickyHeader() {
    console.log(window.scrollY);
    if (window.scrollY >= 250) {
        header.style.backgroundColor = "white";
        header.style.padding = ".1em";
    }
}