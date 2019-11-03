// function solve() {
//   let correctAnswersCount = 0; 
//   let answer = document.getElementById("answer-text").addEventListener("click",nextQuestion)

//   function nextQuestion(){

//   }
  
// }
function solve(){
  let correctAnswrs = 0;
  let answers = [...document
  .querySelectorAll('.quiz-answer')]
  .map(x=>x.addEventListener("click",function nextQuestion(e){
    if(e.target.innerText === 'onclick'
    || e.target.innerText === 'JSON.stringify()'
    || e.target.innerText ==='A programming API for HTML and XML documents'){
      correctAnswrs++;}
  
  let currentSection = document.querySelectorAll('section')[tempIndex];
  currentSection.style.display = 'none';
  currentSection.classList.add('hidden');
  
  let nextSection = document.querySelectorAll('section')[tempIndex+1];
  if(nextSection){
    nextQuestion.classList.remove('hidden');
  }  
  else{
    showResult(correctAnswrs);
  }
  nextSection.style.display = 'block';
  tempIndex++; 
  
}));
function showResult(correctAnswrs){
  document.querySelector('#result').style.display = 'block';
  if(correctAnswrs===3){
    document.querySelector('#results>li>h1').innerText =  "You are recognized as top JavaScript fan!";
  }else{
    document.querySelector('#results>li>h1').innerText = `You have ${correctAnswrs} right answers".`;
  }
}
};