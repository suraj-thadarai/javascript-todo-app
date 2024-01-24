document.addEventListener('DOMContentLoaded', function () {
    console.log('dom content loaded')
    const addTodoButton = document.querySelector('#add-todo')
    let count = 0;

    addTodoButton.addEventListener('click', function () {


        let oldValue = document.querySelector('#todo').value;

        if (oldValue == "") {
            alert('Please Enter Todo')
        } else {
            const todoAppContainer = document.querySelector('.todo-app-container')

            document.querySelector('#todo').value = ''

            const todoList = document.createElement('div')
            todoList.classList.add('todo-list')
            todoList.setAttribute('id', `${count++}`)

            const todoTask = document.createElement('div')
            todoTask.setAttribute('id', 'todo-task')

            const pelement = document.createElement('p')

            const todoTaskAction = document.createElement('div')
            todoTaskAction.setAttribute('id', 'todo-task-action')

            const editButton = document.createElement('button')
            const deleteButton = document.createElement('button')

            pelement.innerHTML = oldValue;

            todoTask.appendChild(pelement)

            todoList.appendChild(todoTask)

            todoTask.parentNode.appendChild(todoTaskAction)

            editButton.textContent = "Edit"
            deleteButton.textContent = 'Delete'

            todoTaskAction.appendChild(editButton)
            editButton.parentNode.appendChild(deleteButton)

            todoAppContainer.appendChild(todoList)

            editButton.addEventListener('click', function () {

                // when i click on this button p element inside todo-task should be replaced with input element
                const inputElement = document.createElement('input') 
                inputElement.setAttribute('type', 'text')
                inputElement.value = oldValue;
                todoTask.replaceChild(inputElement, pelement)                
                const saveButton = document.createElement('button')
                saveButton.textContent = 'Save'
                todoTaskAction.replaceChild(saveButton, editButton)
                console.log(`oldValue: ${oldValue} `)

                saveButton.addEventListener('click', function () {
                    const newValue = inputElement.value;
                    pelement.innerHTML = newValue;
                    console.log(`oldValue: ${oldValue} and newValue: ${newValue}`)
                    todoTask.replaceChild(pelement, inputElement)
                    oldValue = newValue;
                    todoTaskAction.replaceChild(editButton, saveButton)
                })


            })

            deleteButton.addEventListener('click', function () {
                console.log('todoApp Container children', todoAppContainer.children)
                const childrensList = Array(todoAppContainer.children)
                console.log('childrensList is', childrensList)
                console.log('deleteButton.parentNode.parentNode is', deleteButton.parentNode.parentNode)
                todoAppContainer.removeChild(deleteButton.parentNode.parentNode)
            })
        }




    })
})