function solve(arr){
    let res = arr.slice();
  return res.filter((res,i)=>i%2!=0).map(element=>element*2).reverse();
}
console.log(solve([10,15,20,25]));
console.log(solve([3,0,10,4,7,3]));