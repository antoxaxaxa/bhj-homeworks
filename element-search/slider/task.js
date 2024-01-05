document.addEventListener("DOMContentLoaded", function() {
    const sliderItems = document.querySelectorAll(".slider__item");
    const prevArrow = document.querySelector(".slider__arrow_prev");
    const nextArrow = document.querySelector(".slider__arrow_next");
    const dots = document.querySelectorAll(".slider__dot");
    let slideIndex = 0;

    function showModal(Id) {
        sliderItems.forEach(item => item.classList.remove("slider__item_active"));
        sliderItems[Id].classList.add("slider__item_active");
        dots.forEach(dot => dot.classList.remove("slider__dot_active"));
        dots[Id].classList.add("slider__dot_active");
    }

    Array.from(dots).forEach((dot, index) => {
        dot.addEventListener("click", function() {
            slideIndex = index;
            showModal(slideIndex);
        });
    });

    function next(){
        slideIndex=(slideIndex+1) % sliderItems.length;
        showModal(slideIndex);
    }
    function prev(){
        slideIndex=(slideIndex-1 + sliderItems.length) % sliderItems.length;
        showModal(slideIndex);
    }


    nextArrow.addEventListener("click", next);
    prevArrow.addEventListener("click", prev);

    showModal(slideIndex);
});


