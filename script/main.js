const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


const tasks = [
    {
        title:'Сделать',
        completed: false
    },
    {
        title:'Надо',
        completed: true
    }
]

function render() {
    taskList.innerHTML = ''
    for(let i = 0; i < tasks.length; i++) {
        taskList.insertAdjacentHTML('beforeend', getTask(tasks[i], i))
    }

}

function getTask(task, id){
    return(
        `
        <li class = "task">

            <span class = "task_text  ${task.completed ? 'done' : ''}">${task.title}</span>

            <button 
            class = "done_button${task.completed ? '_success' : ''}"
            data-index="${id}"
            data-type = "switch"
            >Done</button>

            <button 
            class = "del_button" 
            data-index="${id}"
            data-type = "remove"
            >Del</button>
        </li>
        `
    )
}


addButton.onclick = function (){

    if(input.value.length != 0){

        const newTask = {
            title: input.value,
            completed: false
        }

        input.value = ''

        tasks.push(newTask)

        render()
    }
    
}
render()

taskList.onclick = function(event){
    //console.log(event.target.dataset)
    if(event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === "switch"){
            tasks[index].completed = !tasks[index].completed
        }
        else if (type === "remove"){
            tasks.splice(index, 1)
        }
        render()
    }
}


