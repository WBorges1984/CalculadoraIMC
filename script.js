import { calcularIMC } from "./calculoImc.js";


document.getElementById('imcForm').addEventListener('submit', (event) => {
    event.preventDefault();
  

    const [altura, peso] = [
      parseFloat(document.getElementById('altura').value),
      parseFloat(document.getElementById('peso').value)
    ];
  
    if (isNaN(altura) || isNaN(peso)) {
      document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
      return;
    }
  
    const { imc, classificacao } = calcularIMC(altura, peso);
    
    document.getElementById('resultado').innerText = `Seu IMC é ${imc} (${classificacao}).`;
  });