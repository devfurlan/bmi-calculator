"use strict";

// CALCULATE
const form = document.getElementById('form_imc_calculator');

form.onsubmit = (event) => {
    // Prevent default form
    event.preventDefault();
    // Get params
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    // Calculate IMC
    const imc_calculate = weight / Math.pow(height, 2);
    const imc = imc_calculate.toFixed(2);

    // Show IMC result
    const result = document.getElementById('result');
    result.innerHTML = imc;

    // Hidden result descriptions
    document.getElementById('description_a').classList.add('is-hidden');
    document.getElementById('description_b').classList.add('is-hidden');
    document.getElementById('description_c').classList.add('is-hidden');
    document.getElementById('description_d').classList.add('is-hidden');
    document.getElementById('description_e').classList.add('is-hidden');
    document.getElementById('description_f').classList.add('is-hidden');

    // Show result description
    if (imc < 18.5) {
        document.getElementById('description_a').classList.remove('is-hidden');
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('description_b').classList.remove('is-hidden');
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('description_c').classList.remove('is-hidden');
    } else if (imc >= 30 && imc <= 34.9) {
        document.getElementById('description_d').classList.remove('is-hidden');
    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById('description_e').classList.remove('is-hidden');
    } else if (imc > 40) {
        document.getElementById('description_f').classList.remove('is-hidden');
    }

    // Hidden form calculate
    document.getElementById('div_calculate').classList.add('is-hidden');
    // Show div result
    document.getElementById('div_result').classList.remove('is-hidden');
};


// NEW CALCULATION
const btn_new_calculation = document.getElementById('new_calculation');

btn_new_calculation.onclick = () => {
    // Clean inputs
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';

    // Show form calculate
    document.getElementById('div_calculate').classList.remove('is-hidden');
    // Hidden div result
    document.getElementById('div_result').classList.add('is-hidden');
}


