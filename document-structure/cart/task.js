document.addEventListener('DOMContentLoaded', function () {

    let minus_var = document.querySelectorAll(".product__quantity-control_dec");
    let plus_var = document.querySelectorAll(".product__quantity-control_inc");
    let product = document.querySelectorAll(".product");
    let add = document.querySelectorAll(".product__add");

    // Сохранение суммы для каждого элемента
    let summaPerProduct = {};

    function show(click_value, productElement) {
        let quantityValue = productElement.querySelector(".product__quantity-value");
        quantityValue.textContent = click_value;
    }

    function findCartProductByImage(imageSrc) {
        let cartProducts = document.querySelectorAll(".cart__product");
        for (let cartProduct of cartProducts) {
            let cartImageSrc = cartProduct.querySelector(".cart__product-image").getAttribute("src");
            if (cartImageSrc === imageSrc) {
                return cartProduct;
            }
        }
        return null;
    }

    function show_image(productElement) {
        let imageSrc = productElement.querySelector(".product__image").getAttribute("src");
        let productCount = parseInt(productElement.querySelector(".product__quantity-value").textContent);

        // Ищем элемент корзины с таким же изображением
        let existingCartProduct = findCartProductByImage(imageSrc);

        if (existingCartProduct) {
            // Если продукт уже в корзине, увеличиваем количество
            let cartProductCount = existingCartProduct.querySelector(".cart__product-count");
            summaPerProduct[imageSrc] += productCount;
            cartProductCount.textContent = summaPerProduct[imageSrc];
        } else {
            // Создаем элемент для корзины
            let cartProduct = document.createElement("div");
            cartProduct.classList.add("cart__product");

            // Добавляем изображение в элемент корзины
            let cartProductImage = document.createElement("img");
            cartProductImage.classList.add("cart__product-image");
            cartProductImage.setAttribute('src', imageSrc);
            cartProduct.appendChild(cartProductImage);

            let cartProductCount = document.createElement("div");
            cartProductCount.classList.add("cart__product-count");

            summaPerProduct[imageSrc] = productCount;
            cartProductCount.textContent = summaPerProduct[imageSrc];

            cartProduct.appendChild(cartProductCount);

            // Добавляем элемент корзины в корзину
            let cart = document.querySelector(".cart");
            cart.appendChild(cartProduct);
        }
    }

    function addToCartHandler() {
        add.forEach(function (checkbox, index) {
            checkbox.addEventListener('click', function () {
                show_image(product[index]);
            });
        });
    }

    function minus() {
        minus_var.forEach(function (element, index) {
            element.addEventListener("click", function () {
                let value = parseInt(product[index].querySelector(".product__quantity-value").textContent);
                value = Math.max(0, value - 1);
                show(value, product[index]);
            });
        });
    }

    function plus() {
        plus_var.forEach(function (element, index) {
            element.addEventListener("click", function () {
                let value = parseInt(product[index].querySelector(".product__quantity-value").textContent);
                value++;
                show(value, product[index]);
            });
        });
    }

    // Вызываете функции, чтобы они начали работу
    addToCartHandler();
    minus();
    plus();
});
