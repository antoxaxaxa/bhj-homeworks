document.addEventListener("DOMContentLoaded", function () {
    let title = document.getElementById("poll__title");
    let answers = document.getElementById("poll__answers");

    async function fetchData() {
        try {
            const response = await fetch("https://students.netoservices.ru/nestjs-backend/poll");
            const data = await response.json();
            return data;
        }
        catch (error){
            throw error;
        }
    }


    function displayData(data) {
        title.innerHTML = data.data.title;
        answers.innerHTML = "";

        for (let i = 0; i < data.data.answers.length; i++) {
            const answerContainer = document.createElement("button");
            answerContainer.classList.add("poll__answer");
            answerContainer.textContent = data.data.answers[i];

            answerContainer.addEventListener("click", function () {
                alert("Спасибо, ваш голос засчитан!")
                vote(data.id, i);
            });

            answers.appendChild(answerContainer);
        }

        answers.classList.add("poll__answers_active");
    }

    function vote(id,answer){
        const xhr = new XMLHttpRequest;
        xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
        xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        const params = `vote=${id}&answer=${answer}` ;
        xhr.onreadystatechange = function () {
            console.log(`Ready state: ${xhr.readyState}, Status: ${xhr.status}`);
            if (xhr.readyState === 4) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);
                showResults(response.stat);
            }
        }


        xhr.send(params);
    }

    function showResults(results) {
        const resultsString = results.map(item => `${item.answer}: ${item.votes} `).join('\n');
        alert(resultsString);
    }

    fetchData()
        .then(displayData);



});