function compararNumeros() {
  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  let num3 = parseFloat(prompt("Ingresa el tercer número:"));

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultadoDiv.innerHTML = "<p>Por favor, ingresa solo números válidos.</p>";
    console.warn("Entrada inválida: uno o más valores no son números.");
    return;
  }

  if (num1 === num2 && num2 === num3) {
    const mensaje = `Los tres números son iguales: ${num1}, ${num2}, ${num3}`;
    resultadoDiv.innerHTML = `<p>${mensaje}</p>`;
    console.log(mensaje);
  } else {
    let numeros = [num1, num2, num3];

    let descendente = [...numeros].sort((a, b) => b - a);
    let ascendente = [...numeros].sort((a, b) => a - b);

    let mayor = descendente[0];
    let medio = descendente[1];
    let menor = descendente[2];

    resultadoDiv.innerHTML = `
      <p><strong>Ordenados de mayor a menor:</strong> ${descendente.join(", ")}</p>
      <p><strong>Ordenados de menor a mayor:</strong> ${ascendente.join(", ")}</p>
      <p><strong>Mayor:</strong> ${mayor}, <strong>Medio:</strong> ${medio}, <strong>Menor:</strong> ${menor}</p>
    `;

    console.log("Ordenados de mayor a menor:", descendente);
    console.log("Ordenados de menor a mayor:", ascendente);
    console.log(`Mayor: ${mayor}, Medio: ${medio}, Menor: ${menor}`);
  }
}