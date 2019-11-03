function solve(arr){
    let step = Number(arr.pop());
    let res = [];
    for(let i = 0;i<arr.length;i+=step){
        res.push(arr[i]);
    }
    return res.join("\n");
}
function solve2(arr){
    let step = arr.pop();
    let res = arr.slice();
  return res.filter((res,i)=>i%step===0).join("\n");
}

console.log(solve([ '5', '20', '31', '4', '20','2' ]));
console.log(solve2([ '5', '20', '31', '4', '20','2' ]));