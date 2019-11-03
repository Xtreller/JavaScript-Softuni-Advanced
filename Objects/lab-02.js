function JsonToHtml(data){
    let arr = JSON.parse(data);
    let outputArr = ["<table>\n"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj)=>outputArr.push(makeValueRow(arr)));
    outputArr.push("<table>");
    function makeKeyRow(arr){
        let row = ` <tr><th>name</th><th>score</th></tr>`;
        return row;
    }
    function makeValueRow(arr){
        let row ;
        for(let line of arr)
            row +=` <tr><td>${escapeHTML(line.name)}</td><td>${+line.score}</td></tr>`;
            return row;
        }
        function escapeHTML(str) {
            "use strict";
            str = str.replace(/&/g, "&amp;")
                .replace(/>/g, "&gt;")
                .replace(/</g, "&lt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");
            return str;
        }
        console.log(outputArr);

    }

 data = ['[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]'];
 JsonToHtml(data);
//  function solve(input) {
 
//     String.prototype.htmlEscape = function(){
//         return this.replace(/&/g, '&amp;')
//             .replace(/</g, '&lt;')
//             .replace(/>/g, '&gt;')
//             .replace(/"/g, '&quot;')
//             .replace(/'/g, '&#39;');
//     };
 
//     let result = "<table>\n  <tr><th>name</th><th>score</th></tr>\n";
//     let table = JSON.parse(input);
 
//     for (let record of table) {
//         result += `  <tr><td>${record.name.htmlEscape()}</td><td>${record.score}</td></tr>\n`;
//     }
 
//     result += "</table>";
//     return result;
// }