'use strict';

const calculatorBtn = document.getElementById('btn');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

const gaugeCalc = function () {
  event.preventDefault();

  let yourGauge = document.getElementById('val1').value;
  let targetGauge = document.getElementById('val2').value;
  let targetKnits = document.getElementById('val3').value;

  let answer;

  if (yourGauge < targetGauge) {
    answer = (targetKnits / targetGauge) * yourGauge;
  } else if (yourGauge > targetGauge) {
    answer = (targetKnits / yourGauge) * targetGauge;
  } else {
    answer = 'the same amount of';
  }

  if (answer % 1 !== 0) {
    answer = answer.toFixed(2);
  }

  resultInput.value = `You need to knit ${answer} knits to match the size given in example.`;
};

calculatorBtn.addEventListener('click', gaugeCalc);

const reset = function () {
  event.preventDefault();

  let yourGauge = (document.getElementById('val1').value = '');
  let targetGauge = (document.getElementById('val2').value = '');
  let targetKnits = (document.getElementById('val3').value = '');
};
resetBtn.addEventListener('click', reset);
