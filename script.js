const calcButtons = document.querySelectorAll('.calc-buttons')
const textBox = document.getElementById('calculator-text-box')
const allButtons = document.querySelectorAll('button')
const buttonColorPicker = document.getElementById('button-color-picker')
const textColorPicker = document.getElementById('text-color-picker')


calcButtons.forEach(function(button){
    button.addEventListener('click', calcInput)
})
function calcInput(event){
    let buttontype = event.target.id;
    if (textBox.value.includes('=') || textBox.value.includes('Error')){
        textBox.value = "" }
        switch(buttontype) {
            case 'factorial':
                textBox.value += '!';
                break;
            case 'left-bracket':
                textBox.value += '(';
                break;
            case 'right-bracket':
                textBox.value += ')';
                break;
            case '%':
                textBox.value += '%';
                break;
            case 'backspace':
                textBox.value = textBox.value.slice(0, -1); 
                break;
            case 'nat-logarithm':
                textBox.value += 'ln(';
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
            case '/':
                textBox.value += '/';
                break;
            case 'logarithm':
                textBox.value += 'log(';
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
            case '*':
                textBox.value += '*';
                break;
            case 'sqrt':
                textBox.value += '√';
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
            case '-':
                textBox.value += '-';
                break;
            case 'squared':
                textBox.value += "^";
                break;
            case '0':
                textBox.value += '0';
                break;
            case '.':
                textBox.value += '.';
                break;
            case '=':
                calculate();
                break;
            case '+':
                textBox.value += '+';
                break;
        }
        
    }
function calculate() {
    let expression = textBox.value
    .replace(/log\(/g, 'Math.log10(')
    .replace(/ln\(/g, 'Math.log(')
    .replace(/\^/g, '**')
    .replace(/√(\d+)/g, 'Math.sqrt($1)')
    .replace(/(\d+)!/g,  'factorial($1)')
    .replace(/(\d+)%/g, '$1 / 100'
    )
    if (expression.includes('(') && (!expression.includes(')'))){
        expression += ')'}
    try{
        textBox.value = "=" + eval(expression)}
    catch {
        textBox.value = 'Error'
    }
}
function factorial(num){
    if (num <= 1){
        return num
    }
    else{
        return num * factorial(num - 1)
    }
}
buttonColorPicker.addEventListener("input", function() {
    const color = this.value;
    allButtons.forEach(button => {
        button.style.backgroundColor = color;

    });
});

textColorPicker.addEventListener("input", function() {
    const color = this.value;
    allButtons.forEach(button => {
        button.style.color = color;
    });
});
