function solve(...params){
    while(params[1]){
    let temp = params[1];
    params[1] = params[0]%params[1];
    params[0]= temp;
    }
    return params[0];
}