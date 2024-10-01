const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


addButton.onclick = function (){

    if(input.value.length != 0){
        taskList.insertAdjacentHTML(
            'beforeend',
            `
            <li class = "task">
                <span class = "task_text">${input.value}</span>
                <button class = "done_button">Done</button>
                <button class = "del_button">Del</button>
            </li>
            `
        )
    }
    
}
