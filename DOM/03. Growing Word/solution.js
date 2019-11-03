
  let colors = ["#A40014","#8FF897","#5B88BD"]
  let state = 0;
function growingWord() {
  let word = document.getElementById("growingWord");
  if(word === null){
    throw new Error("Word is Empty");
  }
  let fontSize = window
  .getComputedStyle(word)
  .fontSize
  .replace("px","")
  if(state >=colors.length){
    state=0;
  }
  word.style.color = colors[state];
  state++;
  word.style.fontSize=(fontSize==="0"?"2":fontSize*2)+"px";

}