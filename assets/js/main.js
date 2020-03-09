
console.log("test")

function addNum(Zeichen) {
    if (document.getElementById("output").value == "0") {
        document.getElementById("output").value = Zeichen;
    }
    else {
        document.getElementById("output").value += Zeichen;
    }
}

function addOp(Operators) {
    let content = document.getElementById("output").value;

    if (content == "0") {
        document.getElementById("output").value;
    } else {
        document.getElementById("output").value += Operators;
    }
}

function addDot(dot) {
    let str = document.getElementById("output").value;
    let pos = str.indexOf(".");

    if (pos == true) {
        document.getElementById("output").value;
    } else {
        document.getElementById("output").value += dot;
    }
}

function clearCalc() {
    document.getElementById("output").value = "0";
}

function equals() {
    let x = document.getElementById("output").value;
    console.log(x)
    eval(x);
    console.log(eval(x));
    document.getElementById("output").value = eval(x);
}
