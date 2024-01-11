document.addEventListener("DOMContentLoaded", function() {
    let chat_widget_side = document.querySelector(".chat-widget__side");
    let chat_widget = document.querySelector(".chat-widget");
    let chat_message = document.getElementById("chat-widget__messages");
    let user_input = document.getElementById("chat-widget__input")

    chat_widget_side.addEventListener("click", function () {   //открытие вкладки
        chat_widget.classList.toggle("chat-widget_active");
    });

    function addMessage(text, isClient = false){                  //создание
        const messageDiv = document.createElement('div');           //block
        messageDiv.classList.add('message');
        const textDiv = document.createElement('div');              //soobshenie_text
        textDiv.classList.add('message__text');
        textDiv.innerHTML = text;
        const timeDiv = document.createElement('div');              //soobshenie_time
        timeDiv.classList.add('message__time');
        timeDiv.textContent = getCurrentTime();

        if (isClient) {
            messageDiv.classList.add('message_client');
        }

        messageDiv.appendChild(textDiv);                             //pomesharm odno v drygoe
        messageDiv.appendChild(timeDiv);
        chat_message.appendChild(messageDiv);


    }

    function getCurrentTime() {                                          //prekrasnoe daleko
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        return hours + ':' + minutes;
    }


    function initChat() {
        addMessage('Добрый день! Как я могу вам помочь?');
        let Responses = [                                  //ne ponial zadanie (napoishu sam)
            'Что, опять вы?',
            'У вас все хорошо, а у меня голова болит',
            'Не могли бы вы быть чуть менее раздражительными?',
            'Вы всегда такие нудные?',
        ]

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const userInput = user_input.value;
            addMessage(userInput, true);

            const randomIndex = Math.floor(Math.random() * Responses.length);
            const Response = Responses[randomIndex];
            addMessage(Response);

            user_input.value = '';
        }
    });
    }
    initChat();
});