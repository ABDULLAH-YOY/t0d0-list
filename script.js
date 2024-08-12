let inputBox = document.getElementById("inputBox")
let listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ""){
        alert("You should write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span)
    }
    inputBox.value ==="";
    saveData()
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
        alert("Task Removed!!")
    }
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}