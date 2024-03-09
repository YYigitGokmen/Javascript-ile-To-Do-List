
const INPUTBOX = document.getElementById("task");

const LISTCONTAINER = document.getElementById("list");


function newElement(){

    if(INPUTBOX.value === ``){
        alert("Bu Alan Boş Bırakılamaz!");
    }
    else{
        let li = document.createElement(("li"));
        li.innerHTML = INPUTBOX.value;
        LISTCONTAINER.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    INPUTBOX.value= ""
    saveData();
}

LISTCONTAINER.addEventListener("click", function(e)

{if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
}
else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}

}, false);


function saveData(){
    localStorage.setItem("data", LISTCONTAINER.innerHTML);
}

function showTask(){
    LISTCONTAINER.innerHTML = localStorage.getItem("data");
}
showTask();

























