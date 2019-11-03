function solve() {
    var selectMenuTo = document.getElementById("selectMenuTo");
    
    document.querySelector("#container > button").addEventListener("click",convert)

    function convert(){
        let number = Number(document.getElementById("input").value);
        let result ;
        if(selectMenuTo.value === "binary"){
          result = (number >>>0).toString(2);
        }
        else if(selectMenuTo.value === "hexadecimal"){
            result = number.toString(16).toUpperCase();
        }
        let output = document.getElementById("result").value = result;
    }
    function createOption(){
        let binaryOpt = document.createElement('option');
        binaryOpt.textContent = 'Binary';
        binaryOpt.value = 'binary';
        let hexdecOpt = document.createElement('option');
        hexdecOpt.textContent = 'Hexadecimal';
        hexdecOpt.value = 'hexadecimal';
        selectMenuTo.appendChild(binaryOpt)
        selectMenuTo.appendChild(hexdecOpt)
    }
    createOption();
}