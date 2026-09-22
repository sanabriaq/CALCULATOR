//CALCULADORA IPHONE
const display = document.getElementById("display"); //adiciona uma referência ao elemento de exibição da calculadora
function appendToDisplay(input) { //adiciona o valor do botão clicado ao display da calculadora
    display.value += input; //adiciona o valor do botão clicado ao display da calculadora
}

function clearDisplay() { //limpa o display da calculadora
    display.value = ""; //limpa o display da calculadora
}

function calculate() { //realiza o cálculo da expressão no display da calculadora 
    try {
        display.value = eval(display.value); // mostra o resultado do cálculo no display da calculadora
    }
    catch (error) { //caso ocorra algum erro na avaliação da expressão, exibe "Error" no display da calculadora
        display.value = "Error"; // exbe "Error" no display da calculadora
    }
}