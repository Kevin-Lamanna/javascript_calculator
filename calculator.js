function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    if (y == 0) {
        throw "Cannot divide by zero";
    }
    try {
        return x / y;
    } catch (error) {
        document.getElementById("my_error").innerHTML = error.message;
    }
};

function reciprocol(x) {
    if (x == 0) {
        throw "Cannot divide by zero";
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
    const newSlicedCalculation = document.getElementById("calculation").innerHTML.slice(0, -1);
    document.getElementById("calculation").innerHTML = newSlicedCalculation;
}

function percent() {
    document.getElementById("result").innerHTML /= 100;
}

function showNum(num) {
    document.getElementById("calculation").innerHTML += num;
    console.log(document.getElementById("calculation").innerHTML);
}


// const nums = document.querySelectorAll('.calNum');
// nums.forEach(num => num.addEventListener('click', showNum(num.innerHTML)));

// const CE = document.getElementById('ceBtn');
// CE.addEventListener('onclick', clear());

// const C = document.getElementById('clearBtn');
// C.addEventListener('onclick', clear());

