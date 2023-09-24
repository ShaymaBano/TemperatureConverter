document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convert");
    const celsiusInput = document.getElementById("celsius");
    const resultText = document.getElementById("result-text");

    convertButton.addEventListener("click", function (){
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultText.textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
        } else {
            resultText.textContent = "Please enter a valid temperature in Celsius.";
        }
    });
});
