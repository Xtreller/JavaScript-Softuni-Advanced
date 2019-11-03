function solve() {
   const sendBtn = document.getElementById("send");
   let messageContainer = document.getElementById("chat_input");
   sendBtn.addEventListener("click",sendMessage);
   let messages = document.getElementById("chat_messages");
   
   function sendMessage(){
      let message = messageContainer.value;
      let newMssg = document.createElement("div");
      newMssg.classList.add("message","my-message");
      newMssg.textContent =message;
      document.getElementById("chat_messages").appendChild(newMssg);
      
      messageContainer.value = '';
      
   }
   
}


