let count = 0
const button = document.getElementById('button')
const logo = document.getElementById('logoMA')
const message = document.getElementById('message')
const messCard = document.getElementById('messageCard')

let messages = ['Estas situado sobre el logo de Mario',"You are located on the Mario 's Logo","Vous êtes localisé sur le logo Mario","Sie befinden sich auf dem Mario-Logo"]

const getRandomIndex = (listLen) => {
    let min = Math.ceil(0);
    let max = Math.floor(listLen);
    let index = Math.floor(Math.random() * (max - min) + min)
    return index;
  }


logo.onmouseover=()=>{showMessage()}

const clickCounter = ()=>{
    count++
    console.log(count)
}

const showMessage = ()=>{
    message.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
  ${messages[getRandomIndex(messages.length)]}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
}

document.addEventListener('keydown',(evento)=>{
    evento.preventDefault();
    const {key,code} = evento;   
    
    const number= parseInt(key)
    
    if(number){
        messCard.innerHTML=`Presionaste la tecla ${key}. Su doble es: ${number*2} `
    }else{
        messCard.innerHTML=`La tecla presionada no es un numero. `

    }
})