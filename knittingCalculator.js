'use strict';

// Setting all variables.
const calculatorBtn = document.getElementById('btn');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');
const yourGaugeInput = document.getElementById('val1');
const targetGaugeInput = document.getElementById('val2');
const targetKnitsInput = document.getElementById('val3');
const resultInput = document.getElementById('resultInput');

// Calculator function
const gaugeCalc = function (e) {
  e.preventDefault();

  // Setting variables for use in function
  const yourGauge = parseFloat(document.getElementById('val1').value);
  const targetGauge = parseFloat(document.getElementById('val2').value);
  const targetKnits = parseFloat(document.getElementById('val3').value);
  let answer;

  // Check if any of the input fields are empty or not filled in
  if (!yourGauge || !targetGauge || !targetKnits) {
    // If any input field is not filled in, inform the user accordingly
    if (!yourGauge) {
      resultInput.value = "Please fill in the 'Your Gauge' field.";
    } else if (!targetGauge) {
      resultInput.value = "Please fill in the 'Pattern Gauge' field.";
    } else {
      resultInput.value =
        "Please fill in the 'Number of knits the pattern uses' field.";
    }
    return; // Exit the function
  }

  // Comparing gauge sizes to decide which formula to use
  if (yourGauge < targetGauge) {
    answer = (targetKnits / targetGauge) * yourGauge;
  } else if (yourGauge > targetGauge) {
    answer = (targetKnits / yourGauge) * targetGauge;
  }
  // Logic checking if calculation is necessary, if not, inform user.
  else {
    resultInput.value = 'Both gauges are the same. You can start knitting!';
    return;
  }

  // Ensuring to only display (a maximum of 2) decimals when necessary.
  if (answer % 1 !== 0) {
    answer = Number(answer).toFixed(2);
  }

  // Self explanatory answer displayer
  resultInput.value = `You need to knit ${answer} knits to match the size given in example.`;
};

// Resetting button function.
const reset = function (e) {
  e.preventDefault();

  // Reset the input values
  yourGaugeInput.value = '';
  targetGaugeInput.value = '';
  targetKnitsInput.value = '';
  resultInput.value = '';
};

// Button event Listeners
calculatorBtn.addEventListener('click', gaugeCalc);
resetBtn.addEventListener('click', reset);
