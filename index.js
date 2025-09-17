const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');

    // Task Text
    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    // ✅ Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✓';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function () {
      span.classList.toggle('completed');
    };

    // ❌ Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      li.remove();
    };

    // Button Container
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(deleteBtn);

    // Add to list item
    li.appendChild(span);
    li.appendChild(btnGroup);

    // Add to task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  }
});

// Pressing Enter = Add Task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

// Clear all tasks
clearBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
});
