const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');

    
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function () {
      span.classList.toggle('completed');
    };

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      li.remove();
    };

    
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    
    li.appendChild(span);
    li.appendChild(btnGroup);

    
    taskList.appendChild(li);

    
    taskInput.value = '';
  }
});

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});


clearBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});
