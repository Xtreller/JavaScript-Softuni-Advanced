function addItem() {
    let menu = document.getElementById("menu");
    let optText = document.getElementById("newItemText");
    let optVal = document.getElementById("newItemValue");
    let addBtn = document.getElementById("Add")

    if(optVal.value==="" || optText.value === ""){
        
        throw new Error("Field's must not be empty.")
    }
        let option = document.createElement("option");
        option.setAttribute("value",optVal.value);
        option.textContent = optText.value;
        menu.appendChild(option);
    
    optText.value = "";
    optVal.value = "";
    
}