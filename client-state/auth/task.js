document.addEventListener("DOMContentLoaded", function() {
    const signForm = document.getElementById("signin__form");
    const welcome = document.getElementById("welcome");
    const userIdElement = document.getElementById("user_id");

    const storedUserId = localStorage.getItem("user_id");

    if (storedUserId) {
        showWelcomeBlock(storedUserId);
    }

    signForm.addEventListener("submit",function (event){
        event.preventDefault();
        const login = document.querySelector('input[name="login"]').value;
        const password = document.querySelector('input[name="password"]').value;
        autorizeUser(login,password);
    });

    function autorizeUser(login,password){
        const xhr = new XMLHttpRequest();
        xhr.open("POST","https://students.netoservices.ru/nestjs-backend/auth");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 201) {
                    const response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        const userId = response.user_id;
                        console.log(userId);
                        localStorage.setItem("user_id", userId);
                        showWelcomeBlock(userId);
                    } else {
                        alert("Неверный логин/пароль");
                    }
                } else {
                    alert("Ошибка при авторизации");
                }
            }
        }
        const formData = `login=${login}&password=${password}`;
        xhr.send(formData);
    }
    function showWelcomeBlock(userId) {
        document.getElementById("signin").classList.remove("signin_active");
        welcome.classList.add("welcome_active");
       // console.log(userId.value);
        userIdElement.textContent = userId;
    }
});