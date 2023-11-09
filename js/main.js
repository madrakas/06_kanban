import { Todo } from "./Todo.js";

// localStorage.setItem('labas', 'rytas');

const kanban = new Todo('#kanban', ['Backlog','Todo', 'In progress', 'Done']);
const addTaskBtnDOM = document.getElementById('add_task');
const asideDOM = document.getElementById('aside');
const asideBackgroundDOM = asideDOM.querySelector('.aside-bg');
const asideCloseBtnDOM = asideDOM.querySelector('.aside-header button');

if (addTaskBtnDOM && asideDOM){
    
    addTaskBtnDOM.addEventListener('click', () => {
        asideDOM.classList.add('show');

    });
    
    asideCloseBtnDOM.addEventListener('click', () => {
        asideDOM.classList.remove('show');
    });
    
    asideBackgroundDOM.addEventListener('click', () => {
        asideDOM.classList.remove('show');
    });

    window.addEventListener('keyup', (event) => {
        if(event.key === 'Escape'){
            asideDOM.classList.remove('show');
        }
        
    });
}

const formDOM = document.getElementById('task_form');
const formTitleDom = document.getElementById('title');
const formDescDOM = document.getElementById('desc');
const formDeadlineDOM = document.getElementById('deadline');
const formTagsDOM = document.getElementById('tags');
if (formDOM) {
    
    formDOM.addEventListener('submit', (event) => {
        event.preventDefault();

        kanban.addTask(
            {
            columnIndex: 0,
            title: formTitleDom.value,
            desc: formDescDOM.value,
            createdOn: '2023-11-08 09:03:15',
            deadline: formDeadlineDOM.value,
            tags: formTagsDOM.value
                .split(',')
                .filter(txt => txt !=='')
                .map(txt => ({text: txt.trim(), color: '#f33'})),
            }
        );
        
        formTitleDom.value = '';
        formDescDOM.value = '';
        formDeadlineDOM.value = '';
        formTagsDOM.value = '';

    });
}

console.log(kanban);