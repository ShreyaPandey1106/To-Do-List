let input = document.getElementById("input");
let form = document.querySelector("form");
let ul_list= document.querySelector("ul");

function saveTask(e){
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = input.value
    li.className = "list-group-item fs-4"
    let delBtn = document.createElement("button")
    delBtn.className = "btn delete btn-danger rounded-0 float-end"
    delBtn.innerText = "X"
    li.appendChild(delBtn)
    let ul = document.querySelector("ul")
    ul.appendChild(li)
    form.reset()
}

form.addEventListener("submit",saveTask);

function deleteTask(e){
    if(e.target.className.includes("delete"))  
     {
        let deleteLi= e.target.parentElement
        ul_list.removeChild(deleteLi);
     }
     form.reset();
}
ul_list.addEventListener("click",deleteTask)

// Dark Mode

let dMode= document.querySelector("#mode");
let todo= document.querySelector("span");
let btnColor= document.querySelector(".main-button");
function darkTheme(){
    if(dMode.innerText=== "Dark Mode")
    {dMode.innerText= "Light Mode";
     dMode.className="btn btn-light rounded-0 w-20";
     todo.className="navbar-brand mb-0 h1 mx-auto fs-1 text-light";
     btnColor.className="btn btn-dark rounded-0 w-100 main-button";
    }
    else
    {dMode.innerText= "Dark Mode";
    dMode.className="btn btn-dark rounded-0 w-20";
    todo.className="navbar-brand mb-0 h1 mx-auto fs-1 text-dark";
    btnColor.className="btn btn-primary rounded-0 w-100 main-button";
    }
    let element = document.querySelector(".hero");
   element.classList.toggle("dark");
   
   
    
}

dMode.addEventListener("click",darkTheme)