function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  if(input === null || output ===null){
    throw new Error("Field is empty.");
  }
  
  let sentence =input.innerHTML.split(".").filter(x=>x!=="");
  for(let i = 0; i< sentence.length;i+=3){
    let p = document.createElement("p");
    let str = "";
    for(let j = 0;j < 3;j++){
     if(j+3 > sentence.length){
     str+=sentence[i+j] + ".";
    }
    }

    output.appendChild(p);
  }

    

}