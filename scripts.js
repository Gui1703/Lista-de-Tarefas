let input = document.getElementById("main-input")
let button = document.getElementById("button-add")
let task = document.getElementById("task-name-id")
let Fulllist = document.getElementById("tasks")
let ArrayOfTasks = []
ReloadTasks()

function ShowTasks() {
    let NewLi = ""
    ArrayOfTasks.forEach((task, index) => {
        NewLi = NewLi + `
        <li class="task-item ${task.status == true ? "concluded" : "" }">
            <button class="rocket-button" onclick="CompleteTask(${index})">
                <i class="fas fa-rocket"></i>
            </button>
            <p class="task-name ${task.status == true ? "concluded" : "" }" id="task-name-id">${task.task}</p>
            <button class="trash" onclick="DeleteTask(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </li>`
    })
    Fulllist.innerHTML = NewLi
    localStorage.setItem("list", JSON.stringify(ArrayOfTasks))
}

function DeleteTask(index) {
    ArrayOfTasks.splice(index, 1)
    ShowTasks()
}

function AddTask() {
    ArrayOfTasks.push({
        task: input.value,
        status: false
    })
    ShowTasks()
}

function CompleteTask(index) {
    ArrayOfTasks[index].status = !ArrayOfTasks[index].status
    ShowTasks()
}
function ReloadTasks() {
    let MyTasks = localStorage.getItem("list")
    ArrayOfTasks = JSON.parse(MyTasks)
   
    if (ArrayOfTasks == null) {
        ArrayOfTasks = [{tarefa: 'Seja bem vindo', status: false}]
        ShowTasks()
    
    } else{
        ShowTasks()
    }
}

button.addEventListener("click", AddTask)
