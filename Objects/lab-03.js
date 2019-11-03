function solve(arr){
  for (let json of arr) {
    for (let object in JSON.parse(json)) {
        console.log(object)
      
    }
    console.log("---")
      
  }
}
solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])