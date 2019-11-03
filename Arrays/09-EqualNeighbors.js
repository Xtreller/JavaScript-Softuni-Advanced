function main(arr){
    function intresect(a,b){
        return a.filter((element,index)=>b[index]===element).length;
    }
    function solve(arr){
        let result = 0;
        for(let i=0;i<arr.length - 1; i ++){
            result += intresect(arr[i],arr[i+1]);
        }
        return result;
    }
}
