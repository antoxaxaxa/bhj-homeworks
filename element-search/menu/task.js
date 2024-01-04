document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll(".menu__link");

    Array.from(menuLinks).forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); //запрет переход по ссылке

            const menuItem = link.closest(".menu__item");
            const menu = menuItem.querySelector(".menu_sub");

            Array.from(document.querySelectorAll(".menu__item")).forEach(item => {
                if (menuItem !== item) {
                    const otherMenu = item.querySelector(".menu");
                    if (otherMenu && otherMenu.classList.contains("menu_active")) {
                        otherMenu.classList.remove("menu_active");
                    }
                }
            });

            if (menu && menu.classList.contains("menu")) {
                menu.classList.toggle("menu_active");
            }
        });
    });
});
