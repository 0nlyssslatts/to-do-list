const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.onclick = function (){
    taskList.insertAdjacentHTML(
        'beforeend',
        `
        <li class = "task">
            <span class = "task_text">${input.value}</span>
        </li>
        `
    )
}
