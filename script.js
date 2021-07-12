const addTask = document.getElementById('button-add')
const textInput = document.getElementById('input')
const list = document.getElementById('list')
const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
    list.style.display = 'block';
    const li = document.createElement('li');
    li.innerHTML = textInput.value;
    list.appendChild(li);
    textInput.value = '';

    const remove = document.createElement('button')
    remove.classList = 'button-remove';
    remove.textContent = '-';
    li.appendChild(remove);
    remove.addEventListener('click', function(event) {
        console.log(event);
        // list.removeChild(li);
        // console.log(event.target.innerHTML);
    })
})
