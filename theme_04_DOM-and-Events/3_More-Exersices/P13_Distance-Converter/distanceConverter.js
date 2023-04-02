function attachEventsListeners() {
    const inputDistance = document.getElementById("inputDistance");
    const outputDistance = document.getElementById("outputDistance");
    const inputUnits = document.getElementById("inputUnits");
    const outputUnits = document.getElementById("outputUnits");
        const btn = document.getElementById("convert");
    btn.addEventListener("click", convertHandler);

    const conversionRatesToMeter = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function convertHandler() {
        const number = Number(inputDistance.value);
        const fromUnits = inputUnits.value;
        const toUnits = outputUnits.value;
        let result = number * (conversionRatesToMeter[fromUnits]) / (conversionRatesToMeter[toUnits]);
        outputDistance.value = result;
    }
}