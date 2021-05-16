import React from 'react';
import { byID, createElement } from '../helper/dom';
import styles from './todo-list.module.css';

const TodoList = () => {
  const ref = React.useRef(null);

  function addTodo(newTodos) {
    const todosListDOM = byID('todos-list');
    const deleteBtn = createElement('span', styles.deleteBtn);
    deleteBtn.innerHTML = 'x';
    deleteBtn.onclick = function({ target }) {
      todosListDOM.removeChild(target.parentNode);
    };
    const newTodo = createElement('div', 'todo-item');
    newTodo.innerHTML = `<div class="todo-content">${newTodos}</div>`;
    newTodo.appendChild(deleteBtn);
    todosListDOM.appendChild(newTodo);
    ref.current.value = '';
  }

  /**
   * Xem có dữ liệu ở input không, và nếu người dùng ấn enter và có dữ liệu ở input thì xử lý
   * 1. Tìm DOM chứa các todos
   * 2. Tạo ra 1 cái thẻ div và append vào
   */
  const onhandleEnter = async ({ keyCode }) => {
    const dataSend = ref.current.value;
    if(keyCode === 13 && dataSend) {
      addTodo(dataSend);
    }
  };

  function saveTodos() {
    const todosListDOM = byID('todos-list');
    const allTodos = [];

    todosListDOM.querySelectorAll('.todo-content').forEach((todoDOM) => {
      allTodos.push(todoDOM.innerHTML);
    });

    console.log('all todos', allTodos);
  }

  React.useEffect(() => {
    const todosMock = ['minh duong', 'nguyen dung'];
    todosMock.forEach((todo) => {
      addTodo(todo);
    });
  }, []);

  return (
    <div>
      <h1> Todo List </h1>
      <input
        ref={ref}
        placeholder="Typing data"
        onKeyDown={onhandleEnter}
        className={styles.inputTodo}
      />
      <div id="todos-list" />
      <div className={styles.saveBtn} onClick={saveTodos}>Save</div>
    </div>
  )
}

export { TodoList };
