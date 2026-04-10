function convertir() {
  let c = document.getElementById("temp").value;

  if (isNaN(c) || c === "") {
    document.getElementById("resultado").innerText = "Error";
    return;
  }

  c = Number(c);

  let k = c + 273.15;
  let f = (c * 9/5) + 32;

  document.getElementById("resultado").innerText =
    "Grados Kelvin: " + k + "\nGrados Fahrenheit: " + f;
}