import { Todo } from "./Todo.js";

const kanban = new Todo(
    '#kanban', 
    ['Backlog','Todo', 'In progress', 'Done']
    );

    kanban.addTask({
        columnIndex: 0,
        title: 'Pirma užduotis',
        desc: 'Pirm. užd. aprašas  dfslkgdflg ;dlsdfgh ;dsafh g;lasdh ;laksdfl hsad;fh sadf',
        createdOn: '2023-11-08 09:03:15',
        deadline: '2023-12-25 00:00:00',
        tags: [
            {text: 'Design', color: '#333'}
        ],
    });

    kanban.addTask({
        columnIndex: 1,
        title: 'Antra užduotis',
        desc: 'Antra užd. aprašas  dfslkgdflg ;dlsdfgh ;dsafh g;lasdh ;laksdfl hsad;fh sadf',
        createdOn: '2023-11-08 09:03:15',
        deadline: '2023-12-25 00:00:00',
        tags: [
            {text: 'UX', color: '#f00'},
            {text: 'UI', color: '#090'},
        ],
    });

    kanban.addTask({
        columnIndex: 0,
        title: 'Trečia užduotis',
        desc: 'Trečia užd. aprašas  dfslkgdflg ;dlsdfgh ;dsafh g;lasdh ;laksdfl hsad;fh sadf',
        createdOn: '2023-11-08 09:03:15',
        deadline: '2023-12-25 00:00:00',
        tags: [
            {text: 'Development', color: '#00c'}
        ],
    });

    console.log(kanban);