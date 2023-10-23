var textArea = document.getElementById("text-field");

document.body.addEventListener("keypress", function (event) {
    switch (event.key) {
        case '1':
            textArea.value += '1';
            break;

        case '2':
            textArea.value += '2';
            break;

        case '3':
            textArea.value += '3';
            break;

        case '4':
            textArea.value += '4';
            break;

        case '5':
            textArea.value += '5';
            break;

        case '6':
            textArea.value += '6';
            break;

        case '7':
            textArea.value += '7';
            break;

        case '8':
            textArea.value += '8';
            break;

        case '9':
            textArea.value += '9';
            break;

        case '+':
            textArea.value += '+';
            break;

        case '-':
            textArea.value += '-';
            break;

        case '*':
            textArea.value += '*';
            break;

        case '/':
            textArea.value += '/';
            break;

        case '=':
        case 'Enter':
            textArea.value = eval(textArea.value);
            break;

        case 'c':
        case 'C':
            textArea.value = "";
            break;

    }
});



