const addTask = document.querySelector('#button-add');
const textInput = document.querySelector('#input');
const list = document.querySelector('#list');
const form = document.querySelector('#form');
const sorting = document.querySelector('.sorting');
const items = list.childNodes;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (textInput.value.trim() === '' || textInput.value === null) {
        return false
    } else {
        list.style.display = 'block';
        const item = document.createElement('li');
        const task = document.createElement('span');
        item.classList.add('item');
        task.classList.add('task');
        task.innerHTML = textInput.value;
        task.setAttribute('contenteditable', 'true')
        list.appendChild(item);
        item.appendChild(task);
        textInput.value = '';      
        
        const remove = document.createElement('span')
        remove.classList = 'button-remove';
        remove.innerHTML = '&times';
        item.appendChild(remove);
        remove.addEventListener('click', function(event) {
            if (items.length === 1) {
                list.removeChild(item);
                list.style.display = 'none';
            } else {
                list.removeChild(item);
            }
        })
    }
})

sorting.addEventListener('click', function () {
    if (sorting.className === 'sorting down') {
        sortingup();
    } else if (sorting.className === 'sorting up'){
        sortingdown() 
    } 
})

function sortingup() {
    let sorted = [];
    for (let i = 0; i < items.length; i++) {
        sorted.push(items[i]);
    }
    sorted.sort((a, b) => {
        if (a.textContent > b.textContent) {
            return 1;
        } 
        if (a.textContent < b.textContent) {
            return -1;
        }
        return 0
    });
    for (let task of sorted) {
        list.appendChild(task);
    }
    sorting.classList.replace('down', 'up');
}

function sortingdown () {
    let sorted = [];
    for (let i = 0; i < items.length; i++) {
        sorted.push(items[i]);
    }
    sorted.sort((a, b) => {
        if (a.textContent > b.textContent) {
            return -1;
        } 
        if (a.textContent < b.textContent) {
            return 1;
        }
        return 0
    });
    for (let task of sorted) {
        list.appendChild(task);
    }
    sorting.classList.replace('up', 'down');
}