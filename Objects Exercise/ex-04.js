function solve(input){
    let catalogue = {};
    for (let line of input) {
        let[name,price] = line.split(" : ");
        price  = Number(price);
        let initial = name[0];
        if(!catalogue.hasOwnProperty(initial)){
        catalogue[initial] = {};
        }
    }
    let sortedInitials = Object.keys(catalogue).sort((a,b)=>a.localeCompare.b);
    for (let initial of sortedInitials) {
        console.log(initial);        
        let products = catalogue[initial]; 
        let sortedProdcts = Object.keys(products).sort((a,b)=>a.localeCompare.b);
        for (let p of sortedProdcts) {
            console.log(` ${p}=>${products[p]}`);
        }
    }


}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

)