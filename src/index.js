import {makeListCard, marker} from './maker.js'
import {makeCard} from './maker.js'
import {removeCard} from './eliminator' 
import {removeList} from './eliminator'
import {viewForm} from './form'
import {hidenForm} from './form'
import {addInfoForm} from './form'
import {cleanerForm} from './form'
console.log('hola Diego')

let numberTasks = []
class admin {}
let allTasks = new admin

window.addEventListener('click',(e)=>{
  observerId(e.target.id)
  observerClass(e.srcElement.className, e.target.id)
})

function observerId(e){
  switch(e){
    case 'addInfo':
        viewForm()
        break;
    case 'screen':
        hidenForm()
        cleanerForm()
        break;
    case 'submiTask':
        reciverInfo()
        hidenForm()
        cleanerForm()
        makeListCard(allTasks['task'+`${numberTasks.length -1}`].nameTask, numberTasks.length-1)
        break;
  }
}

function observerClass(e, id){
  switch(e){
    case 'listOne':
      removeCard()
      makeCard(allTasks['task'+`${id}`], id)
      break;
    case 'mark':
      marker(id)
      console.log(id)
      break;
    case 'delete':
      removeCard()
      removeList(id)
  }
}



function reciverInfo (){
  let i = numberTasks.length
  allTasks['task'+`${i}`] = addInfoForm()
  numberTasks.push('a')
}


//console.log(document.getElementById('nameTask').value)