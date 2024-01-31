document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const progressBar = document.getElementById('progress');
    const fileInput = document.getElementById('file');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const file = fileInput.files[0];

        if (file) {
            sendFile(file);
        } else {
            alert('Выберите файл для отправки.');
        }
    });

    function sendFile(file) {
        const xhr = new XMLHttpRequest();
        const formData = new FormData();

        formData.append('file', file);

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

        xhr.upload.addEventListener('progress', function (event) {
            if (event.lengthComputable) {            // измерение прогресса загрузки
                const percentComplete = (event.loaded / event.total) * 100;
                progressBar.value = percentComplete;
            }
        });

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                alert('Файл успешно загружен!');
                }
            else {
                console.error('Произошла ошибка при загрузке файла. Код состояния:', xhr.status);
                alert('Произошла ошибка при загрузке файла.');
            }
        };

        xhr.onerror = function () {
            console.error('Произошла ошибка сети.');
            alert('Произошла ошибка сети. Подробности смотрите в консоли браузера.');
        };

        xhr.send(formData);
    }
});
