// =========================================================
// Conversor de Temperatura: Celsius → Fahrenheit y Kelvin
// =========================================================

/**
 * Convierte grados Celsius a Fahrenheit.
 * @param {number} celsius
 * @returns {number}
 */
function celsiusAFahrenheit(celsius) {
  return parseFloat(((celsius * 9 / 5) + 32).toFixed(2));
}

/**
 * Convierte grados Celsius a Kelvin.
 * @param {number} celsius
 * @returns {number}
 */
function celsiusAKelvin(celsius) {
  return parseFloat((celsius + 273.15).toFixed(2));
}

/**
 * Valida que el valor ingresado sea de tipo number válido.
 * @param {string} raw - Valor crudo del input
 * @returns {{ valido: boolean, valor: number|null, mensaje: string }}
 */
function validarEntrada(raw) {
  if (raw === '') {
    return { valido: false, valor: null, mensaje: 'Error: el campo está vacío. Ingresa un número.' };
  }

  const numero = Number(raw);

  if (isNaN(numero)) {
    return { valido: false, valor: null, mensaje: 'Error: el dato ingresado no es de tipo number. Intenta de nuevo.' };
  }

  return { valido: true, valor: numero, mensaje: '' };
}

/**
 * Función principal. Lee el input, valida, convierte y actualiza el DOM.
 */
function convertir() {
  const input     = document.getElementById('tempInput');
  const errorMsg  = document.getElementById('errorMsg');
  const results   = document.getElementById('results');

  const raw = input.value.trim();
  errorMsg.textContent = '';

  const { valido, valor: celsius, mensaje } = validarEntrada(raw);

  if (!valido) {
    errorMsg.textContent = mensaje;
    results.style.display = 'none';
    input.value = '';
    input.focus();
    return;
  }

  const fahrenheit = celsiusAFahrenheit(celsius);
  const kelvin     = celsiusAKelvin(celsius);

  // Actualizar DOM
  document.getElementById('fahrenheitVal').textContent = fahrenheit;
  document.getElementById('kelvinVal').textContent     = kelvin;
  document.getElementById('consoleLog').textContent =
    `> Entrada: ${celsius} °C\n` +
    `> Grados Fahrenheit: ${fahrenheit} °F\n` +
    `> Grados Kelvin: ${kelvin} K`;

  results.style.display = 'block';

  // Imprimir en consola del navegador
  console.log(`Entrada: ${celsius} °C`);
  console.log(`Grados Fahrenheit: ${fahrenheit}`);
  console.log(`Grados Kelvin: ${kelvin}`);
}

// Permitir convertir con la tecla Enter
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('tempInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') convertir();
  });
});
