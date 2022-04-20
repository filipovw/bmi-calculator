const result = document.querySelector("#result");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

let bmi, height1, weight1;
document.querySelector("#btn").addEventListener("click", function () {
  weight1 = parseFloat(weight.value);
  height1 = parseFloat(height.value / 100);
  bmi = weight1 / (height1 * height1);
  result.textContent = bmi.toFixed(1);
});
