function create(words) {
   words.forEach(section => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = section;  
      p.style.display = "none";    
      div.appendChild(p);
      div.addEventListener("click",()=>p.style.display = "block")
       let content = document.getElementById("content");      
      content.appendChild(div);
   });
  
}
