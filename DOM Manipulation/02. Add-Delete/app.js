function addItem() {
    
    let list = document.getElementById("items");
    let input = document.getElementById("newText")
    
    if(list===null || input === null){
        throw new Error("Missing element!");
    }
    const clickHandlers = {        
        CTAdelete: listClickHandler.bind(undefined, list),
    }
    document
    .querySelector("body > main > input[type=button]:nth-child(3)")
    .addEventListener("click",addItemToHTML("li",input.value));
    
    list.addEventListener("click", clickHandlers.CTAdelete);

    function addItemToHTML(type,content){
        console.log(content);
        let li = document.createElement(type);
        let a = document.createElement("a");
        a.setAttribute("href","javascript:;")
        a.setAttribute("data-action", "CTAdelete");

        a.appendChild(document.createTextNode("[Delete]"))
        li.appendChild(document.createTextNode(`${content} `))
        li.appendChild(a);
        list.appendChild(li);
    }
    
    function removeFromHTMLByIndex(parent, index) {
        return parent.removeChild(parent.children[index]);
    }
    function listClickHandler(list, e) {
        if (e.target.nodeName === "A") {
            return removeItem(
                removeFromHTMLByIndex.bind(undefined, list),
                findChildIndexByRef.bind(undefined, list.children),
                e.target.parentNode
            )
        }
        return;
    }
    function findChildIndexByRef(children, child) {
        return Array.prototype.findIndex.call(children,x => x === child)
    }
    function removeItem(output, elementLocator, element) {
        return output(elementLocator(element));
    }
    
    
    

    
}