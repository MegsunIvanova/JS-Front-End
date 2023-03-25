function attachEvents() {
    const URL_LOCATIONS = "http://localhost:3030/jsonstore/forecaster/locations";
    const BASE_URL_CURRENT = "http://localhost:3030/jsonstore/forecaster/today/";
    const BASE_URL_UPCOMING = "http://localhost:3030/jsonstore/forecaster/upcoming/";

    const submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", forecastHandler);

    const locationInput = document.getElementById("location");
    const forecastContainer = document.getElementById("forecast");
    const currentContainer = document.getElementById("current");
    const upcomingContainer = document.getElementById("upcoming");
    let forecastContainers = [];


    let weatherSymbols = {
        "Sunny": "\&#x2600",
        "Partly sunny": "\&#x26C5",
        "Overcast": "\&#x2601",
        "Rain": "\&#x2614",
        "Degrees": "\&#176",

    }

    async function forecastHandler() {
        try {
            if (forecastContainer.style.display === 'block') {
                document.getElementById("current-for-remove").remove();
                document.getElementById("upcoming-for-remove").remove();
            }

            const city = locationInput.value;
            const respLocations = await fetch(URL_LOCATIONS);
            const locationsData = await respLocations.json();

            const locationCode = (locationsData.find((location) => location.name === city)).code;

            forecastContainer.style.display = 'block';

            const respCurrent = await fetch(`${BASE_URL_CURRENT}${locationCode}`);
            const currentData = await respCurrent.json();
            createCurrentForecastElement(currentData);

            const respUpcoming = await fetch(`${BASE_URL_UPCOMING}${locationCode}`);
            const upcomingData = await respUpcoming.json();
            createUpcomingForecastElement(upcomingData);

        }

        catch (err) {
            forecastContainer.innerHTML = "";
            forecastContainer.textContent = "Error"
            forecastContainer.style.display = "block";
        }
    }


    function createCurrentForecastElement({ forecast, name }) {
        let { condition, high, low } = forecast;

        const forecastContainer = document.createElement("div");
        const symbolSpan = document.createElement("span");
        const detailsContainerSpan = document.createElement("span");
        const locationSpan = document.createElement("span");
        const temperaturesSpan = document.createElement("span");
        const conditionSpan = document.createElement("span");

        forecastContainer.classList.add("forecasts");
        forecastContainer.id = "current-for-remove";
        symbolSpan.classList.add("condition");
        symbolSpan.classList.add("symbol");
        detailsContainerSpan.classList.add("condition");
        locationSpan.classList.add("forecast-data");
        temperaturesSpan.classList.add("forecast-data");
        conditionSpan.classList.add("forecast-data");

        symbolSpan.innerHTML = weatherSymbols[condition];
        locationSpan.textContent = name;
        temperaturesSpan.innerHTML += low;
        temperaturesSpan.innerHTML += weatherSymbols.Degrees;
        temperaturesSpan.innerHTML += "/";
        temperaturesSpan.innerHTML += high;
        temperaturesSpan.innerHTML += weatherSymbols.Degrees;;
        conditionSpan.textContent = condition;

        detailsContainerSpan.appendChild(locationSpan);
        detailsContainerSpan.appendChild(temperaturesSpan);
        detailsContainerSpan.appendChild(conditionSpan);
        forecastContainer.appendChild(symbolSpan);
        forecastContainer.appendChild(detailsContainerSpan);
        currentContainer.appendChild(forecastContainer);

    }

    function createUpcomingForecastElement(upcomingData) {
        const forecastContainer = document.createElement("div");
        forecastContainer.classList.add("forecast-info");
        forecastContainer.id = "upcoming-for-remove";

        for (const { condition, high, low } of upcomingData.forecast) {
            const detailsSpan = document.createElement("span");
            const symbolSpan = document.createElement("span");
            const temperaturesSpan = document.createElement("span");
            const conditionSpan = document.createElement("span");

            detailsSpan.classList.add("upcoming");
            symbolSpan.classList.add("symbol");
            temperaturesSpan.classList.add("forecast-data");
            conditionSpan.classList.add("forecast-data");

            symbolSpan.innerHTML = weatherSymbols[condition];
            temperaturesSpan.innerHTML += low;
            temperaturesSpan.innerHTML += weatherSymbols.Degrees;
            temperaturesSpan.innerHTML += "/";
            temperaturesSpan.innerHTML += high;
            temperaturesSpan.innerHTML += weatherSymbols.Degrees;;
            conditionSpan.textContent = condition;

            detailsSpan.appendChild(symbolSpan);
            detailsSpan.appendChild(temperaturesSpan);
            detailsSpan.appendChild(conditionSpan);
            forecastContainer.appendChild(detailsSpan);
        }

        upcomingContainer.appendChild(forecastContainer);
    }

}

attachEvents();