function solve() {
    const busContainer = document.querySelector("#info > span");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const BASE_URL = "http://localhost:3030/jsonstore/bus/schedule/";
    let nextStopId = "depot";

    let stopName = "Error";


    function depart() {
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch(`${BASE_URL}${nextStopId}`)
            .then((rsp) => rsp.json())
            .then((nextStopInfo) => {
                const { name, next } = nextStopInfo;
                busContainer.textContent = `Next stop ${name}`;
                nextStopId = next;
                stopName = name;

            })
            .catch((err) => {
                busContainer.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            })
    }

    async function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        busContainer.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();