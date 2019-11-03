function solve(x,y){
    let speed = Number(x);
    const speeding = 20;
    const excessiveSpeeding = 40;
    const limts = {"motorway":130,"interstate":90,"city":50,"residential":20}
    if( y === "residential"){
        if(speed-20<=speeding){
            console.log("speeding");
        }
        if(speed-2>speeding && speed-20<=excessiveSpeeding)
        {
            console.log("excessive speeding");
        }
        else
        {
            console.log("reckless driving");
        }

    }
    else if( y === "city"){
        if(speed-50<=speeding){
            console.log("speeding");
        }
        else if(speed-50>speeding && speed-50<=excessiveSpeeding)
        {
            console.log("excessive speeding");
        }
        else
        {
            console.log("reckless driving");
        }

    } 
    else if( y === "interstate"){
        if(speed-90<=speeding){
            console.log("speeding");
        }
        else if(speed-90>speeding && speed-90<=excessiveSpeeding)
        {
            console.log("excessive speeding");
        }
        else
        {
            console.log("reckless driving");
        }

    }  

    else if( y === "motorway"){
        if(speed-130<=speeding){
            console.log("speeding");
        }
        else if(speed-130>speeding && speed-130<=excessiveSpeeding)
        {
            console.log("excessive speeding");
        }
        else
        {
            console.log("reckless driving");
        }
        

    }
}
solve(21,'residential');