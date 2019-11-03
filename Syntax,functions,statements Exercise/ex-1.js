function solve (...params){
    let weightInKgs = params[1]/1000;
    let money = weightInKgs*params[2];
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKgs.toFixed(2)} kilograms ${params[0]}.`) 
}