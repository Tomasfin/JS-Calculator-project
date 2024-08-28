const calcButtons = document.querySelectorAll('.calc-buttons')
const textBox = document.getElementById('calculator-text-box')
let math

calcButtons.forEach(function(button){
    button.addEventListener('click', calcInput)
})
function calcInput(event){
    let buttontype = event.target.id;
    if (textBox.value.includes('=')){
        textBox.value = "" }
    switch(buttontype) {
        case '0':
            textBox.value += '0';
            break;
        case '1':
            textBox.value += '1';
            break;
        case '2':
            textBox.value += '2';
            break;
        case '3':
            textBox.value += '3';
            break;
        case '4':
            textBox.value += '4';
            break;
        case '5':
            textBox.value += '5';
            break;
        case '6':
            textBox.value += '6';
            break;
        case '7':
            textBox.value += '7';
            break;
        case '8':
            textBox.value += '8';
            break;
        case '9':
            textBox.value += '9';
            break;
        case '+':
            textBox.value += '+';
            break;
        case '-':
            textBox.value += '-';
            break;
        case '*':
            textBox.value += '*';
            break
        case '/':
            textBox.value += '/';
            break;
        case '=':
            calculate();
            break;
        case 'backspace':
            textBox.value = textBox.value.slice(0, -1);
            break;
        
    }}
function calculate() {
    textBox.value = "=" + eval(textBox.value)
}