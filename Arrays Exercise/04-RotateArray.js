function solve(arr) {
    let rotateCnt =Number(arr.pop());
    for(let i=1;i<=rotateCnt;i++){
        arr.unshift(arr[arr.length-1]);
        arr.pop();
    }
    return arr.join(" ");
}

// console.log(solve([ '1', '2', '3', '4', '2' ]));