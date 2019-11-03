function subtract() {
    let firstNumb = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let result = document.getElementById("result");

    result.textContent = Number(firstNumb.value-secondNumber.value);


}