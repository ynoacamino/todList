function makeListCard (x, y){
    let listTasks = document.querySelector('.listTasks')
    let list = document.createElement('div')
    let circle = document.createElement('div')
    let div = document.createElement('div')
    let spanName = document.createElement('span')
    let personal = document.createElement('span')

    list.classList.add('listOne')
    list.id = y
    circle.classList.add('circle')
    personal.classList.add('personal')

    spanName.innerHTML = x
    personal.innerHTML = 'Personal'

    div.append(spanName)
    div.append(personal)
    list.append(circle) 
    list.append(div)
    listTasks.append(list)
}


function makeCard (x, y){
    let improvisado = document.getElementById('improvisado')
    let box = document.createElement('div')
    box.classList.add('boxtext')
    box.id = `4${y}`
    let details = document.createElement('div')
        let span = document.createElement('span')
        let mark  = document.createElement('span')
    let task = document.createElement('div')
        let taskName = document.createElement('div')
            let spanTaskName = document.createElement('span')
        let taskDescripcion = document.createElement('div')
            let spanTaskDescripcion = document.createElement('span')
            let spanDescripcion = document.createElement('span')
        let taskDate = document.createElement('div')
            let spanTaskDate = document.createElement('span')
            let spanDate = document.createElement('span')
        let taskNotes = document.createElement('div')
            let spanTaskNotes = document.createElement('span')
            let spanNotes = document.createElement('span')
    let remove = document.createElement('div')
        let spanRemove = document.createElement('span')


    details.classList.add('details')
        mark.classList.add('mark')
        mark.id = `2${y}`  
    task.classList.add('task')
        taskName.classList.add('taskName')
    taskDescripcion.classList.add('taskDescripcion')    
    taskDate.classList.add('taskDate')
    taskNotes.classList.add('taskNotes')
    remove.classList.add('delete')
    

    span.innerHTML = 'Task Details'
    mark.innerHTML = 'Mark as done'
    spanTaskName.innerHTML = x.nameTask
    spanTaskDescripcion.innerHTML = 'DESCRIPCION'
    spanDescripcion.innerHTML = x.descripcionTask
    spanTaskDate.innerHTML = 'DATE'
    spanDate.innerHTML = x.dateTask
    spanTaskNotes.innerHTML = 'NOTES'
    spanNotes.innerHTML = 'Aqui van notas muy chevere'

    spanRemove.innerHTML = 'Delete Task'
    spanRemove.id = `6${y}` 
    details.append(span)
    details.append(mark)

    taskName.append(spanTaskName)
    taskDescripcion.append(spanTaskDescripcion)
    taskDate.append(spanTaskDate)
    taskNotes.append(spanTaskNotes)

    task.append(taskName)    
    task.append(taskDescripcion)
    task.append(spanDescripcion)
    task.append(taskDate)
    task.append(spanDate)
    task.append(taskNotes)
    task.append(spanNotes)

    remove.append(spanRemove)

    taskDescripcion.classList.add('sub')
    taskDate.classList.add('sub')
    taskNotes.classList.add('sub')


    box.append(details)
    box.append(task)
    box.append(remove)

    improvisado.append(box)
}
function marker(x){
    let objeto = document.getElementById(x-20)
    objeto.classList.add('markList')
    let objeto2 = document.getElementById(x-(-20))
    objeto2.classList.add('markList')
    
}

export {makeListCard}
export {makeCard}
export {marker}