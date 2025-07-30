let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero brooo en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`)
        document.getElementById('reiniciar').removeAttribute('disabled');

        //El usuario no acerto
    }else{
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor kp')
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor kp kore')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros esto es lo que pasara!
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{
//Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }

    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Bienvenido al juego kp');
    asignarTextoElemento('p',`Decime un numero del 1 al ${numeroMaximo} o ropikata`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //lista de cosas que hara esta funcion

    //limpiar la caja
    limpiarCaja();

    //indicar mensaje de intervalo de numeros o sea del 1 al 10 otv
    //generar un nunmero numero secreto aleatorio para el juego
    //inicializar de vuelta el contador de intentos

    condicionesIniciales();

    //deshabilitar el boton de nuevo juego al dar nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

    

    
}
condicionesIniciales();

