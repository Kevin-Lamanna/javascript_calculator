function divide(x, y) {
    if (y == 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
};

window.reciprocol = function () {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);

    const exType = expressType();
    const calculationStr = document.getElementById("calculation").innerHTML;

    const calcArray = calculationStr.split(exType);

    let num1 = parseFloat(calcArray[0]);
    let num2 = parseFloat(calcArray[1]);

    const num = parseFloat(document.getElementById("result").innerHTML);
    if (num == 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
        throw new Error("Cannot divide by zero");
    }
    document.getElementById("result").innerHTML = 1 / num;

    if (num_arr.includes(last_input)) {
        document.getElementById("result").innerHTML = 1 / num;
        num2 = document.getElementById("result").innerHTML;
        document.getElementById("calculation").innerHTML = num1 + expressType() + num2;
    }
    else if (last_input == '=') {
        document.getElementById("result").innerHTML = 1 / num;
        document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
    }

}

window.squared = function () {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);

    const exType = expressType();
    const calculationStr = document.getElementById("calculation").innerHTML;

    const calcArray = calculationStr.split(exType);

    let num1 = parseFloat(calcArray[0]);
    let num2 = parseFloat(calcArray[1]);

    const num = parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = Math.pow(num, 2);

    if (num_arr.includes(last_input)) {
        document.getElementById("result").innerHTML = Math.pow(num, 2);
        num2 = document.getElementById("result").innerHTML;
        document.getElementById("calculation").innerHTML = num1 + expressType() + num2;
    }
    else if (last_input == '=') {
        document.getElementById("result").innerHTML = Math.pow(num, 2);
        document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
    }
}

window.plusMinusNum = function () {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);

    const exType = expressType();
    const calculationStr = document.getElementById("calculation").innerHTML;

    const calcArray = calculationStr.split(exType);

    let num1 = parseFloat(calcArray[0]);
    let num2 = parseFloat(calcArray[1]);

    const num = parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = num * (-1);

    if (num_arr.includes(last_input)) {
        document.getElementById("result").innerHTML = num * (-1);
        num2 = document.getElementById("result").innerHTML;
        document.getElementById("calculation").innerHTML = num1 + expressType() + num2;
    }
    else if (last_input == '=') {
        document.getElementById("result").innerHTML = num * (-1);
        document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
    }
}

window.squareRoot = function () {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);

    const exType = expressType();
    const calculationStr = document.getElementById("calculation").innerHTML;

    const calcArray = calculationStr.split(exType);

    let num1 = parseFloat(calcArray[0]);
    let num2 = parseFloat(calcArray[1]);

    const num = parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = Math.sqrt(num);
    if (num < 0) {
        document.getElementById("result").innerHTML = "Invalid input";
        throw new Error("Invalid input");
    }

    if (num_arr.includes(last_input)) {
        document.getElementById("result").innerHTML = Math.sqrt(num);
        num2 = document.getElementById("result").innerHTML;
        document.getElementById("calculation").innerHTML = num1 + expressType() + num2;
    }
    else if (last_input == '=') {
        document.getElementById("result").innerHTML = Math.sqrt(num);
        document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
    }

}

window.clearCalc = function () {
    document.getElementById("calculation").innerHTML = "";
    document.getElementById("result").innerHTML = 0;
    console.log("Cleared");
}

window.backRemove = function () {
    const op_arr = ['+', '-', 'x', '÷'];
    const result = document.getElementById("result").innerHTML;
    const calculationStr = document.getElementById("calculation").innerHTML;
    if (result != "Cannot divide by zero" && result != "Invalid input") {
        if (document.getElementById("calculation").innerHTML != '') {
            if (result.length == 1) {
                document.getElementById("result").innerHTML = 0;
                if (op_arr.includes(calculationStr.slice(-1))) {
                    document.getElementById("calculation").innerHTML = calculationStr;
                }
                else {
                    const newSlicedCalculation = document.getElementById("calculation").innerHTML.slice(0, -1);
                    document.getElementById("calculation").innerHTML = newSlicedCalculation;
                }
            }
            else if (calculationStr.slice(-1) == '=') {
                document.getElementById("calculation").innerHTML = '';
            }
            else {
                const newSlicedCalculation = document.getElementById("calculation").innerHTML.slice(0, -1);
                document.getElementById("calculation").innerHTML = newSlicedCalculation;
            }
        }
        else if (result.length == 1) {
            document.getElementById("result").innerHTML = 0;
        }
        else {
            document.getElementById("result").innerHTML = result.slice(0, -1);
        }
    }
    else {
        document.getElementById("calculation").innerHTML = "";
        document.getElementById("result").innerHTML = 0;
    }

}

window.percentDivide = function () {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);

    const exType = expressType();
    const calculationStr = document.getElementById("calculation").innerHTML;

    const calcArray = calculationStr.split(exType);

    let num1 = parseFloat(calcArray[0]);
    let num2 = parseFloat(calcArray[1]);

    if (num_arr.includes(last_input)) {
        document.getElementById("result").innerHTML /= 100;
        num2 = document.getElementById("result").innerHTML;
        document.getElementById("calculation").innerHTML = num1 + expressType() + num2;
    }
    else if (last_input == '=') {
        document.getElementById("result").innerHTML /= 100;
        document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
    }
    else {
        clearCalc();
    }
}

window.showNum = function (num) {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);
    const result = document.getElementById("result").innerHTML;

    if (op_arr.includes(last_input) && result.slice(0) == 0) {
        document.getElementById("calculation").innerHTML += num;
        document.getElementById("result").innerHTML = num;
    }
    else if (op_arr.includes(last_input) && document.getElementById("result").innerHTML != 0) {
        document.getElementById("calculation").innerHTML += num;
        document.getElementById("result").innerHTML = num;

    }
    else if (document.getElementById("result").innerHTML == 0 || op_arr.includes(last_input)) {
        document.getElementById("result").innerHTML = num;

    }

    else if (num_arr.includes(result.slice(-1)) && result != 0) {
        document.getElementById("result").innerHTML += num;
        if (document.getElementById("calculation").innerHTML != '') {
            document.getElementById("calculation").innerHTML += num;
        }

    }

    console.log(document.getElementById("calculation").innerHTML);
};

window.showOperation = function (op) {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);
    if (last_input == '=') {
        document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
    }
    if (!num_arr.includes(last_input) && last_input != '=' && !op_arr.includes(last_input)) {
        document.getElementById("calculation").innerHTML += document.getElementById("result").innerHTML;
    }
    if (!op_arr.includes(last_input)) {
        document.getElementById("calculation").innerHTML += op;
    }
    else {
        document.getElementById("calculation").innerHTML = document.getElementById("calculation").innerHTML.slice(0, -1);
        document.getElementById("calculation").innerHTML += op;
    }
}

function expressType() {
    const op_arr = ['+', '-', 'x', '÷'];
    const calculationStr = document.getElementById("calculation").innerHTML;

    for (let i = 0; i < calculationStr.length; i++) {

        if (calculationStr[i] == '-') {
            if (!(i == 0 || op_arr.includes(calculationStr[i - 1]))) {
                return calculationStr[i];
            }
        }
        else if (op_arr.includes(calculationStr[i])) {
            return calculationStr[i];
        }

    }

}

window.evaluateCalc = function () {
    const exType = expressType();
    const calculationStr = document.getElementById("calculation").innerHTML;

    const calcArray = calculationStr.split(exType);

    let num1 = parseFloat(calcArray[0]);
    let num2 = parseFloat(calcArray[1]);


    if (exType == '+') {
        document.getElementById("result").innerHTML = num1 + num2;
    }
    if (exType == '-') {
        document.getElementById("result").innerHTML = num1 - num2;
    }
    if (exType == 'x') {
        document.getElementById("result").innerHTML = num1 * num2;
    }
    if (exType == '÷') {
        try {
            document.getElementById("result").innerHTML = divide(num1, num2);
        }
        catch (error) {
            document.getElementById("result").innerHTML = error.message;
        }

    }

    //document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
    document.getElementById("calculation").innerHTML += '=';
}