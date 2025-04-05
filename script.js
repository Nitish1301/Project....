const input = document.querySelector("#textbox");
const addbutton = document.querySelector(".add");
const list = document.querySelector(".todo-list");
const listcontainer = document.querySelector(".list");

addbutton.addEventListener("click",()=>{
    if(input.value === ''){
        alert("You must write something!");
    }
    else{
    let li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    li.appendChild(span);
    }
    saveData();
})

listcontainer.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){  
      event.target.classList.toggle("checked");  //if we use add in place of toggle then after click -> checked class are add but in another click it does  not remove but in toggle if second time click on this then it remove checked class
      saveData();
    }
    else if(event.target.tagName === "I"){
        event.target.parentElement.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();//from this funtion [savedata() & savetask()] data are save not new after refresh or close the website