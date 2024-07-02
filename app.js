//variables
let numSecreto = 0;
let intentos = 1;
let listaNumSorteados = [];
let numMaximo = 10;

function asignarTextoAElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('numUsuario').value);

    if(numUsuario === numSecreto) {
        asignarTextoAElemento('p', `Encontraste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} :D`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        
        if (numUsuario > numSecreto) {
            asignarTextoAElemento('p', 'Intenta con un número menor');
        } else {
            asignarTextoAElemento('p', 'Intenta con un número mayor');
        }

        intentos++;
    }

    limpiarInput();
    return;
}


//Funcion que genera numero aleatorio pero utilizando recursividad para evitar que en los juegos continuos se repita el número
function numAleatorio() {  
    let numGenerado = Math.floor(Math.random()*numMaximo + 1);

    console.log(numGenerado);
    console.log(listaNumSorteados);

    if(listaNumSorteados.length == numMaximo) {

        asignarTextoAElemento('p', 'Has jugado con todos los números secretos ;D');
        alert("Reinicia la página para jugar de nuevo");

    } else {

        if (listaNumSorteados.includes(numGenerado)) {

            return numAleatorio();
    
        } else {
    
            listaNumSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarInput() {
    document.querySelector('#numUsuario').value = '';
    return;
}

function condicionesIniciales() {
    asignarTextoAElemento('h1', 'Juego del número secreto :D');
    asignarTextoAElemento('p', 'Ingresa un número del 1 al 10:');
    numSecreto = numAleatorio();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiarInput-cajaapp.js
    limpiarInput();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de "nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();