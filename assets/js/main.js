let ergebnis = document.getElementById("output");

function numer(Num) {
  if (ergebnis.value == "0") {
    ergebnis.value = Num;
  } else ergebnis.value += Num;
}
function Reset() {
  ergebnis.value = 0;
}

function delet() {
  if (ergebnis.value.length == 1) {
    ergebnis.value = 0;
  } else
    ergebnis.value = ergebnis.innerHTML.substr(0, ergebnis.value.length - 1);
}
function punkt(Pk) {
  if (ergebnis.value.slice(-1) == ".") {
    ergebnis.value += "";
  } else ergebnis.value += Pk;
}

function operation(Op) {
  if (ergebnis.value == "0") {
    ergebnis.value = 0;
  } else if (ergebnis.value.slice(-1) == Op) {
    ergebnis.value += "";
  } else ergebnis.value += Op;
}

function equally() {
  ergebnis.value = eval(ergebnis.value);
}
