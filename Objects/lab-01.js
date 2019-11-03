// const isNotEmptyString = ;
// const parse = x => Number(x)?Math.floor(x*100)/100:x;
// const trimString = x => x.trim();

function deserializeStringToArrayOfValue(str){
    return str
    .split("|")
    .filter(x => x !== "")
    .map(x => x.trim())
    .map(x => Number(x)?Math.floor(x*100)/100:x)
}
function solve(data){
    let keys = deserializeStringToArrayOfValue(data[0]);
    return data.slice(1)
    .map(deserializeStringToArrayOfValue)
    .map(x=>x.reduce((res,val,i)=>{
        res[keys[i]] = val;
        return res;
    },{}))
}
data = ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'];

console.log(solve(data));