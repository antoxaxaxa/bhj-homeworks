document.addEventListener("DOMContentLoaded", function() {
    const itemDown = document.querySelectorAll(".dropdown__item");
    const value = document.querySelector(".dropdown__value");
    const list = document.querySelector(".dropdown__list");

    value.addEventListener("click", function() {
        list.classList.toggle("dropdown__list_active");
    });

    Array.from(itemDown).forEach((item) => {
        item.addEventListener("click", function(event) {
            value.textContent = item.textContent;
            list.classList.remove("dropdown__list_active");
            event.preventDefault();
        });
    });

});
