function calcularResultado() {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const categoria = parseFloat(document.getElementById("catego").value);
  
    let porcentaje = 0;
  
    if (!isNaN(cantidad) && !isNaN(categoria)) {
      if (categoria === 1) { // Estudiante
        porcentaje = 0.2;
      } else if (categoria === 2) { // Trainee
        porcentaje = 0.5;
      } else if (categoria === 3) { // Junior
        porcentaje = 0.85;
      }
  
      const resultado = cantidad * 200 * porcentaje;
      document.getElementById("resultado").innerText = `Total a pagar: $ ${resultado}`;
    } else {
      alert("Por favor, ingrese valores numéricos válidos en los campos.");
    }
  }
 


  