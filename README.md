# Documentação do Projeto - Calculadora de IMC
Introdução
Este projeto consiste em uma calculadora de Índice de Massa Corporal (IMC) implementada utilizando as tecnologias HTML, CSS e JavaScript. A calculadora permite ao usuário inserir seus dados de peso e altura e, com base nesses valores, calcular o IMC e fornecer uma classificação de acordo com os níveis estabelecidos pela OMS.
Funcionalidades Implementadas
1. Formulário de entrada para peso e altura.
2. Validação de dados de entrada (peso e altura).
3. Cálculo do IMC com base nos dados fornecidos.
4. Exibição do resultado do IMC e classificação de acordo com os intervalos:
   - Abaixo do peso: IMC <= 18.5
   - Peso normal: IMC entre 18.6 e 24.9
   - Sobrepeso: IMC entre 25 e 29.9
   - Obesidade Grau 1: IMC entre 30 e 34.9
   - Obesidade Grau 2: IMC entre 35 e 39.9
   - Obesidade Grau 3: IMC >= 40

Processo de Desenvolvimento
O desenvolvimento foi dividido em três partes principais:

1. **HTML**: Definimos a estrutura básica da página com um formulário para receber o peso e a altura do usuário, e um espaço para exibir o resultado do IMC.

2. **CSS**: Estilizamos a página para que a interface fosse amigável e funcional, utilizando um layout simples e centralizado com botões e campos de texto.

3. **JavaScript**: Implementamos a lógica para calcular o IMC, realizar a validação dos valores inseridos e apresentar o resultado e a classificação correspondente. Também foi adicionada a prevenção do envio do formulário padrão, para garantir que o cálculo seja feito sem recarregar a página.
Instruções para Uso
1. Baixe os arquivos `index.html`, `styles.css` e `script.js` e coloque-os no mesmo diretório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Insira seu peso em quilogramas (kg) no campo 'Peso'.
4. Insira sua altura em metros (m) no campo 'Altura'.
5. Clique no botão 'Calcular' para ver o resultado do IMC e a classificação correspondente.
