function removeList (id){
    let listTasks = document.querySelector('.listTasks')
    let list = document.getElementById(id-60)
    listTasks.removeChild(list)
}

function removeCard (){
    let box = document.getElementById('improvisado')
    box.innerHTML = ''
}
export {removeCard}
export {removeList}