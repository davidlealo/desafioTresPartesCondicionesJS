let primerSelect = 0;
let segundoSelect = 0;
let tercerSelect = 0;

function resultadoSelect(){
    let primerSelect = document.querySelector('#claveUsuario1').value;
    let segundoSelect = document.querySelector('#claveUsuario2').value;
    let tercerSelect = document.querySelector('#claveUsuario3').value;
    let resultadoSelects = (primerSelect + segundoSelect + tercerSelect);

    let imprimirResultadoSelects = document.querySelector('#textoResultado');
   

    if (resultadoSelects === "911"){
        imprimirResultadoSelects.innerHTML = "password 1 correcto";
    } else if (resultadoSelects === "714"){
        imprimirResultadoSelects.innerHTML = "password 2 correcto";
    } else {
        imprimirResultadoSelects.innerHTML = "password incorrecto";
    }
}