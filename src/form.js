function viewForm(){
    let fondoForm = document.getElementById('screen')
    fondoForm.classList.add('screen')
    
    let form = document.querySelector('.simodal')
    form.classList.remove('nomodal')

}

function hidenForm(){
    let fondoForm = document.getElementById('screen')
    fondoForm.classList.remove('screen')

    let form = document.querySelector('.simodal')
    form.classList.add('nomodal')
}

function addInfoForm(){
    let nameTask = document.getElementById('nameTask').value
    let descripcionTask = document.getElementById('descripcionTask').value
    let dateTask = document.getElementById('dateTask').value

    return{
        nameTask,
        descripcionTask,
        dateTask
    }
}

function cleanerForm(){
    document.getElementById('nameTask').value = ''
    document.getElementById('descripcionTask').innerHTML =''
    document.getElementById('descripcionTask').value =''
    document.getElementById('dateTask').value = ''
}

export {viewForm}
export {hidenForm}
export {addInfoForm}
export {cleanerForm}