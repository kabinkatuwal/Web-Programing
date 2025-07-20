function convertTemperature(){
    const inputValue = parseFloat(document.getElementById('temp-input').value);
    const unit = document.getElementById('temp-unit').value;
    const celsiusDisplay = document.getElementById('celsius-display');
    const fahrenheitDisplay = document.getElementById('fahrenheit-display');
    const kelvinDisplay = document.getElementById('kelvin-display');
    const errorMessage = document.getElementById('temp-error');

    celsiusDisplay.textContent = '';
    fahrenheitDisplay.textContent = '';
    kelvinDisplay.textContent = '';
    errorMessage.textContent = '';

    if(isNaN(inputValue)){
        errorMessage.textContent = 'Please enter a valid number.';
        return;
    }
    if(unit === 'kelvin' && inputValue < 0){
        errorMessage.textContent = 'Kelvin temperature cannot be negative.';
        return;
    }

    let celsius, fahrenheit , kelvin;

    if(unit === 'celsius'){
        celsius = inputValue;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    }
    else if(unit === 'fahrenheit'){
        celsius = (inputValue -32) * 5/9;
        fahrenheit = inputValue;
        kelvin = celsius + 273.15;
    }
    else{
        celsius = inputValue - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = inputValue;
    }
    celsiusDisplay.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    fahrenheitDisplay.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    kelvinDisplay.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
