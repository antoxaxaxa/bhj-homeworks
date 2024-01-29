document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const items = document.getElementById("items");

    // Функция для отправки GET-запроса
    async function fetchData() {
        try {
            const response = await fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }


    function displayData(data) {
        items.innerHTML = "";

        for (const key in data.response.Valute) {
            const valute = data.response.Valute[key];

            const itemContainer = document.createElement("div");
            itemContainer.classList.add("item");

            const itemCode = document.createElement("div");
            itemCode.classList.add("item__code");
            itemCode.textContent = valute.CharCode;

            const itemValue = document.createElement("div");
            itemValue.classList.add("item__value");
            itemValue.textContent = valute.Value;

            const itemCurrency = document.createElement("div");
            itemCurrency.classList.add("item__currency");
            itemCurrency.textContent = "руб.";

            itemContainer.appendChild(itemCode);
            itemContainer.appendChild(itemValue);
            itemContainer.appendChild(itemCurrency);

            items.appendChild(itemContainer);

        }


        loader.classList.remove("loader_active");
    }

    fetchData()
        .then(displayData)

});
