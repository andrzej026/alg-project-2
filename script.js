const addTask = document.querySelector('#button-add')
const textInput = document.querySelector('#input')
const list = document.querySelector('#list')
const form = document.querySelector('#form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    list.style.display = 'block';
    const li = document.createElement('li');
    li.innerHTML = textInput.value;
    list.appendChild(li);
    textInput.value = '';

    const remove = document.createElement('span')
    remove.classList = 'button-remove';
    remove.textContent = '-';
    li.appendChild(remove);
    remove.addEventListener('click', function(event) {
        list.removeChild(li);

    })
    const sorting = document.querySelector('.sorting')
    const items = document.querySelectorAll('#list li');
    sorting.addEventListener('click', sortedElements())

    function sortedElements() {
        let sorted = [...items].sort(function(a, b) {
            if (a.innerHTML > b.innerHTML) {return 1;}
            if (a.innerHTML < b.innerHTML) {return -1;}
        });
        list.innerHTML = '';
        for (let li of sorted) {
            list.appendChild(li);
        }
    }
})