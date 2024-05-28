document.getElementById("btn").addEventListener("click", calculateBMI);

function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = weight / (height * height);

  document.getElementById("bmi-result").value = bmi.toFixed(2);

  const condition = getCondition(bmi);
  document.getElementById("weight-condition").innerText = condition;
}

function getCondition(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi <= 24.9) return "Normal weight";
  if (bmi <= 29.9) return "Overweight";
  return "Obesity";
}
