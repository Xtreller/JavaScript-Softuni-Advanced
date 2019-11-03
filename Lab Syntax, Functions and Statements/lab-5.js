function solve(a)
{
    let result ;
    if(typeof(a) === 'number')
    {
        result = Math.pow(val,2) * Math.Pi;
        console.log(result.toFixed(2));
    }
    else    
    {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(a)}.`);
    }
    

}