function addItem() {
    let list = document.getElementById("items");
    let input = document.getElementById("newItemText")
    
    if(list===null || input === null){
        throw new Error("Missing element!");
    }
    document
    .querySelector("body > main > input[type=button]:nth-child(3)")
    .addEventListener("click",addItemToHTML("li",input.value))

    function addItemToHTML(type,content){
        console.log(content);
        
        let li = document.createElement(type,content);
        li.innerHTML = content;
        list.appendChild(li);
    }

    
}