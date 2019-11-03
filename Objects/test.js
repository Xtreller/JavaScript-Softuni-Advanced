function solve(data){
        let parsed = JSON.parse(data);
        let html = ["<table>\n"];
        for(let k of parsed){
            Object.keys(k).forEach(element => {
                html+="<tr>";
                html+=`<th>${element}</th>`;
                html+=`</tr>`;
            });
        }
        console.log(html);
        
}
solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
function solve2(keys){
for(let i = 0;i<Object.keys(keys).length;i++){
    html+=`<th>${element}</th>`

}
}