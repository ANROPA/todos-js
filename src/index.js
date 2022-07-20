import './styles.css';
import {Todo, TodoList} from './classes'
import { crearTodoHtml } from './js/componentes';


export const todosList = new TodoList();
// const tarea = new Todo('Aprender Javascript');
// todosList.nuevoTodo(tarea);

// console.log(todosList);

// crearTodoHtml(tarea);

// localStorage.setItem('mi-key','ABC123');
// sessionStorage.setItem('mi-key','ABC123');
// setTimeout(() => {
//     localStorage.removeItem('mi-key'); 
// }, 1500);

// todosList.todos.array.forEach(todo => crearTodoHtml(todo)); 
todosList.todos.array.forEach(crearTodoHtml); 