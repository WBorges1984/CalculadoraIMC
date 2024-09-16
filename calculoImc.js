export const calcularIMC = (altura, peso) => {
    const imc = (peso / (altura * altura)).toFixed(2);
    
    // Usando operador ternário para classificação
    const classificacao = 
      imc <= 18.5 ? 'Abaixo do peso' :
      imc <= 24.9 ? 'Peso normal' :
      imc < 29.9 ? 'Sobrepeso' :
      imc <= 34.9 ? 'Obesidade grau 1' :
      imc <= 39.9 ? 'Obesidade grau 2' : 'Obesidade grau 3';
      
    return { imc, classificacao };
  };