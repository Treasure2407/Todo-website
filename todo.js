class Task {
    constructor(description){
        this.description = description;
        this.completed = false;
    }


    toggleComplete(){
        this.completed = !this.completed;
    }

}


let tasks = [] 


const input = document.getElementById("todo-input")
const addButton = document.getElementById("add-btn")
const todoList = document.getElementById("todo-list")



function addTask(){
    let task = input.value

    if(task !== ""){
        const newTask = new Task(task);
        tasks.push(newTask)
        input.value = ""
        renderTask();
    }

}

function renderTask() {
    todoList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){

        const taskItem = document.createElement('li')

        const taskText  = document.createTextNode(tasks[i].description)
        taskItem.appendChild(taskText)

        //complete button
        const completeButton= document.createElement('button')
        completeButton.innerText = tasks[i].completed ? 'Undo' : 'Completed'
        completeButton.onclick = () => toggleTask(i)
        taskItem.append(completeButton)


        //delete button
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete';
        deleteButton.onlcick= () => deleteTask(i)
        taskItem.append(deleteButton)

    todoList.appendChild(taskItem)

    }

}


function toggleTask(index){
    tasks[index].toggleComplete();
    renderTask();
}

function deleteTask(index){
    tasks.splice(index, 1);
    console.log(index, "index")
    renderTask()
}


addButton.addEventListener('click', addTask)
