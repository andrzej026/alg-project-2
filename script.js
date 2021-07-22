const addTask = document.querySelector('#button-add')
const textInput = document.querySelector('#input')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const sorting = document.querySelector('.sorting')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (textInput.value.trim() === '' || textInput.value === null) {
        return false
    } else {
        list.style.border = '1px solid #C4C4C4';
        let li = document.createElement('li');
        let task = document.createElement('span')
        task.classList.add('task')
        task.innerHTML = textInput.value;
        list.appendChild(li);
        textInput.value = '';
        task.setAttribute('contenteditable', 'true')
        li.appendChild(task)

        const remove = document.createElement('span')
        remove.classList = 'button-remove';
        remove.innerHTML = '&times';
        li.appendChild(remove);
        remove.addEventListener('click', function(event) {
            list.removeChild(li);
            // console.log(list);
        })
        
        
        const items = document.querySelectorAll('#list li');
        let sorted = [...items]
        // console.log(list);
        // console.log(items);
        sorting.addEventListener('click', function() {
            list.innerHTML = '';
            sorted.sort(function(a, b) {
                console.log(items)
                if (a.innerHTML > b.innerHTML) {return 1;}
                if (a.innerHTML < b.innerHTML) {return -1;}
            });
            list.innerHTML = '';        
            sorting.setAttribute('src', 'images/Group-90.svg')
            sorting.classList.remove('down')
            sorting.classList.add('up')
            for (let task of sorted) {
                list.appendChild(task);
            }
            
        })
    }
})