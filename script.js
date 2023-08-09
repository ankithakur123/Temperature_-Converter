function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unitFrom = document.getElementById("unitFrom").value;
  const unitTo = document.getElementById("unitTo").value;
  let result;

  if (unitFrom === "celsius") {
    if (unitTo === "fahrenheit") {
      result = (temperature * 9) / 5 + 32;
    } else if (unitTo === "kelvin") {
      result = temperature + 273.15;
    } else {
      result = temperature;
    }
  } else if (unitFrom === "fahrenheit") {
    if (unitTo === "celsius") {
      result = ((temperature - 32) * 5) / 9;
    } else if (unitTo === "kelvin") {
      result = ((temperature - 32) * 5) / 9 + 273.15;
    } else {
      result = temperature;
    }
  } else if (unitFrom === "kelvin") {
    if (unitTo === "celsius") {
      result = temperature - 273.15;
    } else if (unitTo === "fahrenheit") {
      result = ((temperature - 273.15) * 9) / 5 + 32;
    } else {
      result = temperature;
    }
  }

  document.getElementById(
    "result"
  ).textContent = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
}
