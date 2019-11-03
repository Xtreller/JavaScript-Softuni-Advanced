function solve(arr) {
    let res = [];
    for(let i =0; i<arr.length;i++){
        if(arr[i]=='add'){
            res.push(i+1);
        }
        else{
            res.pop();
        }
    }
    if(res.length===0)
    {
        res.push("Empty");
    }
    return res.join("\n");    
}
console.log(solve(['add','add','remove','add','add']));