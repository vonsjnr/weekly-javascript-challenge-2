var unitObj = {
    "kilometr": 1,
    "metr": 1000,
    "centymetr": 100000
};

function calculator() {
    var inputValue = document.getElementById("inputField").value;
    var inputUnit = document.getElementById("inputUnit");
    var outputUnit = document.getElementById("outputUnit");

    document.getElementById("outputField").textContent = inputValue * (unitObj[outputUnit.value]/unitObj[inputUnit.value]);
}
function validator() {
    var inputValue = document.getElementById("inputField").value;

    if (inputValue <=0) {
        document.getElementById("outputField").textContent = "Wprowadź prawidłową wartość!";
    }
}
function mainFunction() {
    calculator();
    validator();
}

document.getElementById("inputUnit").addEventListener("change", mainFunction);
document.getElementById("outputUnit").addEventListener("change", mainFunction);
document.getElementById("inputField").addEventListener("input", mainFunction);