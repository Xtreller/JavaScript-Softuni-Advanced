function solve(...params){
    let str = params.toString().split("");
    let firstDigit = str[0];
    let check = true;
    str.forEach(element => {if(firstDigit!=element){
        check = false;
    }
    });
    let sum = 0;
    let value= parseInt(params);
    while (value){
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    // sum = str.map(Number).reduce((acc,curr)=>acc+curr);   
    console.log(check);
    console.log(sum);
}
