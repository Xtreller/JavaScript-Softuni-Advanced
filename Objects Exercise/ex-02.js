function solve(data){
    let html = ['<table>']
    data.forEach(element => {
        html.push(" <tr>")
        let obj = JSON.parse(element);
        for(let val of Object.values(obj)){
            html.push(`     <td>${val}</td>`)

        }
        html.push(" </tr>");
        
    });
    html.push("</table>");
    console.log(html.join("\n"));
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);
