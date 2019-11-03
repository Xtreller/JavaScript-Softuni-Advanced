function solve(n,k){
    let arr = [1,1]
    if(arr.length<k){   
        for(let i =0;arr.length<k;i++){
        let temp = 0;
        for(let j =0;j<arr.length;j++)
        {
            temp+=Number(arr[j]);
        }        
        arr.push(temp);
        
        }
    }
    for(let i = 0;arr.length<n;i++){
        let temp = 0;
        for(let j=i;j<i+k;j++){
            temp+=arr[j];
        }
        if(arr.length===n)
        {
            break;
        }
        else{
        arr.push(temp);
        
        }
    }    
    return arr;
}
console.log(solve(9,5));
// function solve(n,k){
//     let arr = [1,1,2].slice(0,k);
//     for(let i = 0;i<n-3;i++){
//         let temp = arr.slice(i,i+k).reduce((temp,)=>());
       
//     }    
//     return arr;
// }
