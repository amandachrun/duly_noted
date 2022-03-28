
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

    //saveLocally(taskInput.value);

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


function saveLocally(task) {
    let tasks;
    if(localStorage.getItem('tasks' === null)) {
        tasks = [];
        tasks.push(task);
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function login(event) {
    //event.preventDefault();
    
    document.getElementById('overlays').style.display="none";
    document.getElementsById('form-popup').style.display="none";
    document.getElementsById('form-container').style.display="none";


    
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }