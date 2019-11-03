
function solve(arr){
    let result = [];
    for(let i=0;i <arr.length; i++){
        if(arr[i]<=0)
        {
            result.unshift(arr[i]);
        }
        else
        {
            result.push(arr[i]);
        }
    }
    return result;
}
// const actions = {
//     true: "unshift",
//     false: "push"
// }
// function solve2(arr){
//     return arr.reduce((result ,x)=>{
//         result[actions[x < 0]](x);
//      return result;
//     }
//     ,[])

// }