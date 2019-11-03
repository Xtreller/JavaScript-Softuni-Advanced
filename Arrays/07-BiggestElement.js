function solve(arr){
    return arr.flat().sort((a,b)=>b-a).shift();

}