function solve() {    
    
    const keys = Array.from(document.getElementsByClassName('keys'));
    const container = document.getElementById('expressionOutput');
    const result = document.getElementById('resultOutput');
    const clearBTn = document.querySelector('.clear');
    let operand;
    let firstNumber = '';
    let secondNumber = '';
     
    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };
    keys.map(x=>x.addEventListener("click",function (e) {
        const clickedBtnVal =  e.target.value ;
        
            clearBTn.addEventListener('click', () => {
                container.textContent = '';
                result.textContent = '';
                firstNumber = '';
                secondNumber = '';
                operand = '';
            })
            
            if (+clickedBtnVal || clickedBtnVal == '.' || clickedBtnVal == '0') {
                if (!operand) {
                    firstNumber += clickedBtnVal;
                    expressionOutput.textContent += clickedBtnVal;
                } else {
                    secondNumber += clickedBtnVal;
                    expressionOutput.textContent += clickedBtnVal
                }
            } else if (calculator.hasOwnProperty(clickedBtnVal)) {
                operand = clickedBtnVal;
                expressionOutput.textContent += ` ${operand} `;
            } else if (clickedBtnVal == '=') {
                if (+firstNumber && +secondNumber) { //check if both are valid nums
                    result.textContent = calculator[operand](+firstNumber, +secondNumber);
                } else {
                    result.textContent = 'NaN';
                }
            }
            
    }))
   

}
