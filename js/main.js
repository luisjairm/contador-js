// Variables
const buttons = document.querySelector('.btn-group')
const cardValue = document.querySelector('#card-value')


// Eventos
escuchaEventos();
function escuchaEventos(){
    buttons.addEventListener('click', botonesAccion)
}

function botonesAccion(e){
    if(e.target.classList.contains('dism')){
        let value = parseInt(cardValue.textContent)
        value--
        cardValue.textContent = value
    }
    if(e.target.classList.contains('reset')){
        
        cardValue.textContent = 0
    }
    if(e.target.classList.contains('aument')){
        let value = parseInt(cardValue.textContent)
        value++
        cardValue.textContent = value
    }
}