let victories = 0;
let defeats = 0;

function resetStatistics() {
    victories = 0;
    defeats = 0;
    updateStatistics();
}

function handleHoleClick(event) {
    const clickedHole = event.target;
    const deadSpan = document.getElementById("dead");
    const lostSpan = document.getElementById("lost");

    if (clickedHole.classList.contains("hole_has-mole")) {
        victories++;
    }
    else {
        defeats++;
    }

    if (victories === 10){
        deadSpan.innerHTML = victories;
        alert("Победа!");
        resetStatistics()
    }
    if (defeats === 5){
        lostSpan.innerHTML = defeats;
        alert("Поражение!");
        resetStatistics()
    }

    updateStatistics();
}

function updateStatistics() {
    const deadSpan = document.getElementById("dead");
    const lostSpan = document.getElementById("lost");
    deadSpan.innerHTML = victories;
    lostSpan.innerHTML = defeats;
}

function registerEventHandlers() {
    const holes = document.querySelectorAll(".hole");
    holes.forEach(hole => {
        hole.addEventListener("click", handleHoleClick);
    });
}

// Вызываем функции для начальной установки и регистрации обработчиков событий
resetStatistics();
registerEventHandlers();