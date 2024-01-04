document.addEventListener("DOMContentLoaded", function(x) {
    showModal("modal_main");

    let successButton = document.querySelector(".show-success");
    if (successButton) {
        successButton.addEventListener("click", function() {
            closeModal('modal_main');
            showModal('modal_success');
        });
    }
    document.addEventListener("click", function (x) {
        if (x.target.classList.contains("modal__close")) {
            let modalId = x.target.closest(".modal").id;
            //console.log(modalId);
            if (modalId === "modal_success") {
                closeModal(modalId);
            }
        }
    });
});

function showModal(Id) {
    let modal = document.getElementById(Id);
    modal.classList.add("modal_active");
}

function closeModal(Id) {
    let modal = document.getElementById(Id);
    modal.classList.remove("modal_active");
}

/*document.addEventListener("click", function (x){
    if (x.target.classList.contains("modal__close")){
        closeModal("modal_main");
        closeModal("modal_success");
    }
})*/