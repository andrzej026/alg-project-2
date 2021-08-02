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
        list.style.display = 'block';
        const item = document.createElement('li');
        const task = document.createElement('span')
        item.classList.add('item')
        task.classList.add('task')
        task.innerHTML = textInput.value;
        task.setAttribute('contenteditable', 'true')
        list.appendChild(item);
        item.appendChild(task)
        textInput.value = '';

        
        const items = document.querySelectorAll('.item')
        const remove = document.createElement('span')
        remove.classList = 'button-remove';
        remove.innerHTML = '&times';
        item.appendChild(remove);
        remove.addEventListener('click', function(event) {
            
            console.log(items.length);
            if (items.length === 1) {
                // console.log(items);
                list.removeChild(item);
                // list.style.display = 'none';
            } else {
                console.log(item);
                // console.log(items);
                list.removeChild(item);
            }
        })

        
        
        // console.log(list);
        // console.log(items);
        sorting.addEventListener('click', function() {
            let sorted = [];
            for (let i = 0; i < items.length; i++) {
                // console.log(items);
                sorted.push(items[i]);
            }
            sorted.sort(function(a, b) {
                // console.log(items);
                if (a.textContent > b.textContent) {return 1;}
                if (a.textContent < b.textContent) {return -1;}
            });
            sorted.forEach(task => list.appendChild(task));
            sorting.setAttribute('src', 'images/Group-90.svg');
            sorting.classList.replace('down', 'up');
            console.log(sorted);
            // list.innerHTML = ''
            // for (let task of sorted) {
            //     list.appendChild(task);
            // } 
        })
    }
})
