document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('new-task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const title = document.getElementById('task-title').value;
        const deadline = document.getElementById('task-deadline').value;
        const priority = document.getElementById('task-priority').value;
        const label = document.getElementById('task-label').value;
        
        addTask(title, deadline, priority, label);
        
        taskForm.reset();
    });

    function addTask(title, deadline, priority, label) {
        const li = document.createElement('li');
        li.classList.add('task-item');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        const taskTitle = document.createElement('span');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = title;

        const taskPriority = document.createElement('span');
        taskPriority.classList.add('task-priority', priority);
        taskPriority.textContent = priority;

        const taskDeadline = document.createElement('span');
        taskDeadline.classList.add('task-deadline');
        taskDeadline.textContent = `Due: ${deadline}`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-task');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskDetails.appendChild(taskTitle);
        taskDetails.appendChild(taskPriority);
        taskDetails.appendChild(taskDeadline);
        taskDetails.appendChild(removeButton);

        li.appendChild(taskDetails);

        if (label) {
            const taskLabel = document.createElement('div');
            taskLabel.classList.add('task-label');
            taskLabel.textContent = `Label: ${label}`;
            li.appendChild(taskLabel);
        }

        taskList.appendChild(li);
    }
});

