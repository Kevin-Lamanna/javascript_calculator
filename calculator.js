function divide(x, y) {
    if (y == 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
};

function reciprocol(x) {
    if (x == 0) {
        throw new Error("Cannot divide by zero");
    }
    try {
        return 1 / x;
    } catch (error) {
        document.getElementById("my_error").innerHTML = error.message;
    }

}

// Math.sqrt()
// Math.pow(x, y)

function clearCalc() {
    document.getElementById("calculation").innerHTML = "";
    document.getElementById("result").innerHTML = 0;
    console.log("Cleared");
}

function backRemove() {
    if (document.getElementById("result").innerHTML != "Cannot divide by zero") {
        const newSlicedCalculation = document.getElementById("calculation").innerHTML.slice(0, -1);
        document.getElementById("calculation").innerHTML = newSlicedCalculation;
    }
    else {
        document.getElementById("calculation").innerHTML = "";
        document.getElementById("result").innerHTML = 0;
    }

}

function percent() {
    document.getElementById("result").innerHTML /= 100;
}

function showNum(num) {
    document.getElementById("calculation").innerHTML += num;
    console.log(document.getElementById("calculation").innerHTML);
}

function showOperation(op) {
    const op_arr = ['+', '-', 'x', '÷'];
    const last_input = document.getElementById("calculation").innerHTML.slice(-1);
    if (last_input == '=') {
        document.getElementById("calculation").innerHTML = document.getElementById("result").innerHTML;
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
    for (let i = 0; i < op_arr.length; i++) {
        if (calculationStr.includes(op_arr[i])) {
            return op_arr[i];
        };

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