function toggle() {
    const textField = document.getElementById("extra");
    const btn = document.getElementsByTagName("span")[0];
    
    
       if(btn.textContent ==="More"){
           textField.style.display = 'block';
           btn.textContent = "Less";
       }
       else{
           textField.style.display = 'none';
           btn.textContent ="More";

       }
    

}