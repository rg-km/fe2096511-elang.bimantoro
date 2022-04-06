//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    document.getElementById('input').value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    const input = document.getElementById('input');
    switch (operator) {
        case 'Del':
        var del = input.value.slice(0, -1);
        input.value = del;
        break;
        case 'AC':
        input.value = '';
        break;
        default:
        input.value += operator;    
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    const input = document.getElementById('input');
    if (input.value[input.value.length - 1] ==
        Number(input.value[input.value.length - 1])
        ) {
    input.value = eval(input.value);
        }
}