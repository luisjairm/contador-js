// Variables
const contadores = document.querySelector('#contenedor')
const nuevoContador = document.querySelector('#nuevo-contador')


// Eventos
escuchaEventos();
function escuchaEventos(){
    // Eventos de los botones
    contadores.addEventListener('click', botonesAccion)
    
    // Agrega un nueco contador
    nuevoContador.addEventListener('click', generaContador)
}

// Funciones

function generaContador(){
    const container = document.querySelector('main div.row')
    const card = document.createElement('div')
    card.classList.add('col-sm')

    card.innerHTML = `
    <div class="card w-100 card-border mb-5">
          <button type="button" class="btn btn-danger cerrar">X</button>
          <p id="card-value" class="card-text text-center h1" >0</p>
          <!-- Botones -->
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-warning text-center dism" >Disminuir -1</button>
            <button type="button" class="btn btn-outline-danger text-center reset" >Resetear </button>
            <button type="button" class="btn btn-outline-success aument text-center" >Aumentar +1 </button>
          </div>
        </div>
    `
   
    container.appendChild(card)
}

function botonesAccion(e){
    const contador = e.target.parentElement.parentElement
    
    if(e.target.classList.contains('dism')){
            disminuir( contador )
        }
    
        if(e.target.classList.contains('reset')){
            // const contador = e.target.parentElement.parentElement
            reset( contador )
        }
    
        if(e.target.classList.contains('aument')){
            // const contador = e.target.parentElement.parentElement
            aumentar( contador )
        }
        
        if(e.target.classList.contains('cerrar')){
            const card = e.target.parentElement.parentElement
            contador.parentElement.removeChild(card)
            
        }
}

function disminuir( contador ){
    
    let valor = parseInt(contador.querySelector('#card-value').textContent)
    valor--
    contador.querySelector('#card-value').textContent = valor
}

function reset( contador ){
 
    contador.querySelector('#card-value').textContent = '0'

}

function aumentar( contador ){
    let valor = parseInt(contador.querySelector('#card-value').textContent)
    valor++
    contador.querySelector('#card-value').textContent = valor
}

