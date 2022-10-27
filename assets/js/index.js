const inputAmount = document.querySelector("#inputAmount");
const inputColors = document.querySelector("#inputColors");
const buttonCalculate = document.querySelector("#buttonCalculate");
const total = document.querySelector("#total");
const amountTotal = document.querySelector("#amountTotal");
const btnColor = document.querySelector("#btnColor");


buttonCalculate.addEventListener("click", () => {
    const textClient = inputAmount.value;
    amountTotal.textContent = textClient;

    const colorClient = inputColors.value;
    btnColor.style.backgroundColor = colorClient;

    const numberOne = 450000;
    const numberTwo = inputAmount.value;
    const totalResult = numberOne * numberTwo;
    total.textContent = totalResult;

    
})