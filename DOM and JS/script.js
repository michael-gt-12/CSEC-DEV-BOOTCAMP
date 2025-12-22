// Select DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const totalCountEl = document.getElementById('totalCount');
const completedCountEl = document.getElementById('completedCount');
const clearAllBtn = document.getElementById('clearAllBtn');

let totalTodos = 0;
let completedTodos = 0;

function updateStats() {
    totalCountEl.textContent = totalTodos;
    completedCountEl.textContent = completedTodos;
}

function addTodo() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText;

    const div = document.createElement('div');
    div.classList.add('todo-actions');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.classList.add('complete-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');

    completeBtn.addEventListener('click', () => {
        span.classList.toggle('completed');
        if (span.classList.contains('completed')) {
            completedTodos++;
        } else {
            completedTodos--;
        }
        updateStats();
    });

    deleteBtn.addEventListener('click', () => {
        if (span.classList.contains('completed')) {
            completedTodos--;
        }
        totalTodos--;
        li.remove();
        updateStats();
    });

 
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(div);
    todoList.appendChild(li);

    totalTodos++;
    todoInput.value = "";
    updateStats();
}

clearAllBtn.addEventListener('click', () => {
    todoList.innerHTML = "";
    totalTodos = 0;
    completedTodos = 0;
    updateStats();
});

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});