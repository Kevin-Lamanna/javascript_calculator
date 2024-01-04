function divide(x, y) {
    if (y == 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
};

function reciprocol() {
    const num = parseFloat(document.getElementById("result").innerHTML);
    if (num == 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero";
        throw new Error("Cannot divide by zero");
    }

    document.getElementById("result").innerHTML = 1 / num;

}

function squared() {
    const num = parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = Math.pow(num, 2);
}

function plusMinusNum() {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const last_input = document.getElementById("result").innerHTML;
    const result_num = parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = result_num * (-1);
    document.getElementById("calculation").innerHTML = result_num * (-1);
}

function squareRoot() {
    const num = parseFloat(document.getElementById("result").innerHTML);
    if (num < 0) {
        document.getElementById("result").innerHTML = "Invalid input";
        throw new Error("Invalid input");
    }
    document.getElementById("result").innerHTML = Math.sqrt(num);
}

function clearCalc() {
    document.getElementById("calculation").innerHTML = "";
    document.getElementById("result").innerHTML = 0;
    console.log("Cleared");
}

function backRemove() {
    const result = document.getElementById("result").innerHTML;
    if (result != "Cannot divide by zero" && result != "Invalid input") {
        const newSlicedCalculation = document.getElementById("calculation").innerHTML.slice(0, -1);
        document.getElementById("calculation").innerHTML = newSlicedCalculation;
    }
    else {
        document.getElementById("calculation").innerHTML = "";
        document.getElementById("result").innerHTML = 0;
    }

}

function percentDivide() {
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

function showNum(num) {
    const op_arr = ['+', '-', 'x', '÷'];
    const num_arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);
    const result = document.getElementById("result").innerHTML;

    // if ((last_input == 0 || result.slice(-1) == 0) && num == '.') {
    //     document.getElementById("result").innerHTML += '.';
    //     document.getElementById("calculation").innerHTML += '.';
    // }
    if (op_arr.includes(last_input) && document.getElementById("result").innerHTML != 0) {
        document.getElementById("calculation").innerHTML += num;
        document.getElementById("result").innerHTML = num;

    }
    else if (document.getElementById("result").innerHTML == 0 || op_arr.includes(last_input)) {
        document.getElementById("result").innerHTML = num;

    }
    // else if (num == 0 && (last_input != '' || !op_arr.includes(last_input))) {
    //     document.getElementById("calculation").innerHTML += num;

    // }
    else if (num_arr.includes(result.slice(-1)) && result != 0) {
        document.getElementById("result").innerHTML += num;
        if (document.getElementById("calculation").innerHTML != '') {
            document.getElementById("calculation").innerHTML += num;
        }

    }
    // else if (!op_arr.includes(last_input) && document.getElementById("result").innerHTML != 0) {
    //     document.getElementById("calculation").innerHTML += num;
    // }

    console.log(document.getElementById("calculation").innerHTML);
};

function showOperation(op) {
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

function evaluateCalc() {
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