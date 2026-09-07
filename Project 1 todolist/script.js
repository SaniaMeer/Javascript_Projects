/* without array
let btn = document.getElementById("btn")
let list = document.getElementById("list")
let inputbox = document.getElementById("addtask")
load();
function save() {
    localStorage.setItem("tasks", list.innerHTML)
}

function load() {
    let data = localStorage.getItem("tasks");
    list.innerHTML = data;
}

function addtask() {
    if (inputbox.value === "" || inputbox.value === " ") {
        alert("you must write something")
    } else {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let li = document.createElement("li");
        let delbtn = document.createElement("button")
        delbtn.innerHTML = "x"
        delbtn.classList.add("delbtn");

        li.appendChild(checkbox);
        li.append(inputbox.value)
        list.appendChild(li);
        li.appendChild(delbtn);
        save();

        checkbox.addEventListener("click", e => {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
            save();


        })
        delbtn.addEventListener("click", e => {
            li.remove();
            save();

        })
    }

    inputbox.value = ""
    save();
}


btn.addEventListener("click", e => {
    addtask();
})

inputbox.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        addtask();
    }

})
*/



//with arrays
let btn = document.getElementById("btn")
let list = document.getElementById("list")
let inputbox = document.getElementById("addtask")

let tasks = [];
load();
function save() {
    localStorage.setItem("tasksarr", JSON.stringify(tasks))

}

function load() {
    let data = JSON.parse(localStorage.getItem('tasksarr'))

    if (data === null) {
        tasks = []
    } else {
        tasks = data;
        tasks.forEach(task => {
            createtask(task);
        });

    }

}
function createtask(task) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let li = document.createElement("li");
    let delbtn = document.createElement("button")
    delbtn.innerHTML = "x"
    delbtn.classList.add("delbtn");

    li.appendChild(checkbox);
    li.append(task.text)
    list.appendChild(li);
    li.appendChild(delbtn);
    save();
    if (task.completed) {
        checkbox.checked = true
        li.style.textDecoration = "line-through";
    }
    checkbox.addEventListener("click", e => {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            task.completed = true;
        } else {
            li.style.textDecoration = "none";
            task.completed = false;
        }
        save();


    })
    delbtn.addEventListener("click", e => {
        li.remove();
        let index = tasks.indexOf(task)
        tasks.splice(index, 1);
        save();

    })

}
function addtask() {
    if (inputbox.value === "" || inputbox.value === " ") {
        alert("you must write something")
    } else {

        let task = {
            text: inputbox.value,
            completed: false
        }
        tasks.push(task)
        save();
        createtask(task);

    }

    inputbox.value = ""
    save();
}


btn.addEventListener("click", e => {
    addtask();
})

inputbox.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        addtask();
    }

})




