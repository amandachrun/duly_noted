
// Selecting 
const taskInput = document.querySelector('.textTask');
const btnTask = document.querySelector('.btnTask');
const taskList = document.querySelector('.taskList');
const btnLogin = document.querySelector('.btnLogin');
var count = 0;

btnTask.addEventListener('click', addTask);
taskList.addEventListener('click', deleteComplete);
btnLogin.addEventListener('click', login);

function pageLoad() {
    var lblshow = "Number of completed tasks: " + count;
    document.getElementById("lblcount").innerHTML = lblshow;
}

function addTask(event) {
    event.preventDefault();     //so it doesn't submit
    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('taskItem');
    
    taskDiv.appendChild(newTask);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    taskDiv.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);

    taskInput.value = "";

}

function deleteComplete (e) {
    const item = e.target;
    if(item.classList[0] === 'delete-btn') {
        if(confirm("Are you sure you want to delete it?")) {
            const task = item.parentElement;
            task.remove();
        }
    }

    if(item.classList[0] === 'complete-btn') {
        const task = item.parentElement;
        task.classList.toggle("completed");
        count++;

        var lblshow = "Number of completed tasks: " + count;
        document.getElementById("lblcount").innerHTML = lblshow;
    }
}



