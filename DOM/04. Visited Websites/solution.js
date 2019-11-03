function solve(){const template = x=>`visited ${x} times`;
 const affiliatesLinks = {
    "Google":2,
    "YouTube":4,
    "Gmail":7,
    "Wikipedia":4,
    "SoftUni":1,
    "stackoverflow":7
  }
  document.addEventListener("click",(e)=>{
    if(e.target.nodeName==="A"){
      e.target.nextElementSibling.innerHTML = template(affiliatesLinks[e.target.textContent.trim()]++)}
  })}