document.addEventListener("DOMContentLoaded", function() {
    let revealElements = document.querySelectorAll(".reveal");
    document.addEventListener('scroll', function (){
        revealElements.forEach(function(element) {
            if (isInViewport(element)) {
                element.classList.add("reveal_active");
            }
        });
    });
    function isInViewport(element) {
        let rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight) &&
            rect.right <= (window.innerWidth)
        );
    }
});