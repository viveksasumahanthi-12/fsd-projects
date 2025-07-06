let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert("Please enter a task!");
        return;
    }

    todos.push(todoText);
    todoInput.value = '';
    renderTodos();
}

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.innerText = todo;
        li.appendChild(span);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.onclick = () => editTodo(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.className = 'delete';
        deleteBtn.onclick = () => deleteTodo(index);

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(actionsDiv);
        todoList.appendChild(li);
    });
}

function editTodo(index) {
    const newTodo = prompt("Edit your task:", todos[index]);
    if (newTodo !== null && newTodo.trim() !== '') {
        todos[index] = newTodo.trim();
        renderTodos();
    }
}

function deleteTodo(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        todos.splice(index, 1);
        renderTodos();
    }
}
