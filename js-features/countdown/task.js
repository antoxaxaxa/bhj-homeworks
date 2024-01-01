let a = document.getElementById("timer");
let b = parseInt(a.innerHTML);

function time(b) {
    let timer = setInterval(function() {
        a.innerHTML = b;
        if (b <= 0) {
            clearInterval(timer);
            alert("Вы победили в конкурсе!");
        } else {
            b--;
        }
    }, 100);
}

// Вызов функции с начальным значением
time(b);


