function solve(arr){
    let firstDSum=0;    
    let secondDSum=0;    
    for(let row = 0 ;row<arr.length;row++){

        firstDSum+= arr[row][row];
        secondDSum+= arr[row][arr.length-1-row];
    }
    return firstDSum + " " + secondDSum; 
}
function solve2(InputArr){
    return InputArr.reduce( 
        (result,row,i,arr)=>{
            result[0]+=arr[row]
            result[1]+=arr[arr.length-1-i];
},[0,0])
}