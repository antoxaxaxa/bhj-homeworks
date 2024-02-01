document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("subscribe-modal");
    let closeButton = document.querySelector(".modal__close");

    const isModalClosed = getCookie("modalClosed");

    if (!isModalClosed) {
        showModal("subscribe-modal");
    }
    if(closeButton){
        closeButton.addEventListener("click", function (){
            closeModal("subscribe-modal");

            setCookie("modalClosed", "true", 5);
        });
    }

});

function showModal(Id) {
    let modal = document.getElementById(Id);
    modal.classList.add("modal_active");
}

function closeModal(Id) {
    let modal = document.getElementById(Id);
    modal.classList.remove("modal_active");
}
function setCookie(name, value, sec) {
    const expires = new Date();
    expires.setTime(expires.getTime() + sec * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`; //настройка куки
}

// Функция для получения cookie
function getCookie(name) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    if (match) return match[2];
}