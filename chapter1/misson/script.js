document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const completedList = document.getElementById('completedList');

    // 입력 필드에서 Enter 키를 눌렀을 때 할 일 추가 함수 실행
    todoInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter' && todoInput.value.trim() !== '') {
            addTodo(todoInput.value);
            todoInput.value = '';  // 입력창 비우기
        }
    });

    // 해야 할 일 추가 함수
    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const completeButton = document.createElement('button');
        completeButton.textContent = '완료';
        completeButton.addEventListener('click', function () {
            completeTask(li);
        });

        li.appendChild(completeButton);
        todoList.appendChild(li);
    }

    // 해야 할 일을 해낸 일로 이동하는 함수
    function completeTask(task) {
        task.removeChild(task.lastChild);  // '완료' 버튼 삭제

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', function () {
            task.remove();
        });

        task.appendChild(deleteButton);
        completedList.appendChild(task);
    }
});