const addTask = document.getElementById('button-add')
const textInput = document.getElementById('input')
const list = document.getElementById('list')

addTask.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerHTML = textInput.value;
    list.appendChild(li);
    textInput.value = '';

    const remove = document.createElement('button')
    remove.classList = 'button-remove'
    remove.textContent = '-'
    li.appendChild(remove)

    remove.addEventListener('click', function() {
        list.removeChild(li)
    })
})