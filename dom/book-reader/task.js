document.addEventListener("DOMContentLoaded", function() {
    let fontButtons = document.querySelectorAll('.font-size');
    let book = document.querySelector(".book");

    fontButtons.forEach(function(button, index) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            changeFontSize(index);
        });
    });

    function changeFontSize(index) {
        fontButtons.forEach(button => button.classList.remove("font-size_active"));
        fontButtons[index].classList.add("font-size_active");
        book.classList.remove("book_fs-big", "book_fs-small");
        if (index === 0) {
            book.classList.add("book_fs-small");
        } else if (index === 2) {
            book.classList.add("book_fs-big");
        }
    }
});