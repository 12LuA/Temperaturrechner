document.getElementById('temperature').addEventListener('input', function() {
    const submitButton = document.getElementById('submitButton');
    if (this.value.trim() !== '') {
        submitButton.classList.add('enabled');
        submitButton.disabled = false;
    } else {
        submitButton.classList.remove('enabled');
        submitButton.disabled = true;
    }
});

document.getElementById('submitButton').addEventListener('mouseover', function() {
    if (!this.disabled) {
        this.style.cursor = 'pointer';
    }
});

document.getElementById('submitButton').addEventListener('mouseout', function() {
    this.style.cursor = 'not-allowed';
});

document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    switch(unit) {
        case 'celsius':
            result = {
                celsius: Math.round(temperature),
                fahrenheit: Math.round((temperature * 9/5) + 32),
                kelvin: Math.round(temperature + 273.15)
            };
            break;
        case 'fahrenheit':
            result = {
                celsius: Math.round((temperature - 32) * 5/9),
                fahrenheit: Math.round(temperature),
                kelvin: Math.round((temperature - 32) * 5/9 + 273.15)
            };
            break;
        case 'kelvin':
            result = {
                celsius: Math.round(temperature - 273.15),
                fahrenheit: Math.round((temperature - 273.15) * 9/5 + 32),
                kelvin: Math.round(temperature)
            };
            break;
        default:
            result = {};
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>In Celsius: ${result.celsius || ''}</p>
                               <p>In Fahrenheit: ${result.fahrenheit || ''}</p>
                               <p>In Kelvin: ${result.kelvin || ''}</p>`;
    resultElement.style.display = 'block'; // Zeige das Ergebnisfeld an
    resultElement.scrollTop = resultElement.scrollHeight; // Scrollen zum unteren Rand, falls das Ergebnisfeld zu groß wird
});
