let zoomImage = document.getElementById("cookie");
let click = document.getElementById("clicker__counter");
let click_out = 0;
let isZoom = false;

zoomImage.addEventListener("click", function() {
    isZoom = !isZoom;

    if (isZoom) {
        zoomImage.classList.add("zoomed");
    } else {
        zoomImage.classList.remove("zoomed");
    }
})
document.getElementById("cookie").addEventListener("click", function() {
    click_out++;
    click.innerHTML=click_out;
})
