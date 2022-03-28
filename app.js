
// Selecting 
const taskInput = document.querySelector('.textTask');
const btnTask = document.querySelector('.btnTask');
const taskList = document.querySelector('.taskList');

btnTask.addEventListener('click', addTask);
taskList.addEventListener('click', deleteComplete);

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
    if(item.classList[0] === 'delete-btn')
}
