var newTask = document.getElementById('newTask');
const addTask = document.getElementById('addTask');
const list = document.getElementById('list');

addTask.addEventListener('click', function () {
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    if (newTask.value == '') {
        return;
    } else {
        li.innerHTML = `<span>${newTask.value}</span>`;
        li.className = 'myTasks'
        delBtn.innerHTML = 'Delete Task';
        delBtn.className = 'delBtn';

        list.appendChild(li);
        li.appendChild(delBtn);

        let span = document.querySelectorAll('li span');
        for(let i =0; i<span.length; i++){
            span[i].addEventListener('click', function() {
                this.classList.toggle('done');
            });
        }

        delBtn.addEventListener('click', function () {
            list.removeChild(li);
        })

    }

    newTask.value = '';

});