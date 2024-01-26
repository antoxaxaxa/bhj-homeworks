document.addEventListener('DOMContentLoaded', function () {
    let tasksList = document.getElementById("tasks__list");
    let input = document.getElementById("task__input");

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask(input.value);
            input.value = '';
        }
    });

    function addTask(taskTitle) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('task__title');
        titleDiv.textContent = taskTitle;

        const removeButton = document.createElement('a');
        removeButton.href = '#';
        removeButton.classList.add('task__remove');
        removeButton.textContent = '×';

        removeButton.addEventListener('click', function () {
            tasksList.removeChild(taskDiv);
        });

        taskDiv.appendChild(removeButton);
        taskDiv.appendChild(titleDiv);
        tasksList.appendChild(taskDiv);
    }
});
