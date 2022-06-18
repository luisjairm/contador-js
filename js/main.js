const contador = document.querySelector('main.container .contador');
const contadorValue = document.querySelector('main.container .contador p.contador-value')

let cont = 1
escuchaEventos();
function escuchaEventos(){
    contador.addEventListener('click', accionesBtn)
}


function accionesBtn(e){
    
    if(e.target.classList.contains('aumentar')){
        let value = parseInt(contadorValue.textContent)
        value++
        contadorValue.textContent = value
    }
    if(e.target.classList.contains('resetear')){
        
        contadorValue.textContent = 0
    }
    if(e.target.classList.contains('disminuir')){
        let value = parseInt(contadorValue.textContent)
        value--
        contadorValue.textContent = value
    }

}

function generaContador(){
    const container = document.querySelector('main.container')

    const genContador = document.createElement('div')
    genContador.classList.add('contador')

    const estructura = `
        <button class=" btn cerrar"> X </button>
        <p class="contador-value data-id${cont}">0</p>
        <div class="container-buttons"> 
            <button class="btn aumentar"> +1 </button>
            <button class="btn resetear"> 0 </button>
            <button class="btn disminuir"> -1 </button>
        </div>
    `
    genContador.innerHTML = estructura
    container.appendChild(genContador)
    cont++
    return container
    
}