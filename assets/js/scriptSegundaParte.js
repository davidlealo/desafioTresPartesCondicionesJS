let primerNumero = 0;
let segundoNumero = 0;
let tercerNumero = 0;


function entregaResultado(){
    let primerNumero = document.querySelector('#dogFirst').value;
    let segundoNumero = document.querySelector('#dogSecond').value;
    let tercerNumero = document.querySelector('#dogThird').value;

    const totalStickers = Number(primerNumero) + Number(segundoNumero) + Number(tercerNumero);
    console.log(totalStickers)

    let imprimirResultado = document.querySelector('#resultadoPerros');
    

   if (totalStickers <= 0){
    imprimirResultado.innerHTML = "No llevas ningún sticker, recuerda que puedes pedir un máximo de 10";
   } else if (totalStickers <= 10){
    imprimirResultado.innerHTML = `Llevas un total de ${totalStickers} stickers. Muchas gracias por usar este sitio`;
   } else {
    imprimirResultado.innerHTML = `No puedes llevar ${totalStickers} Stickers, son demasiados. Recueda que el número máximo posible es de 10 stickers`;
   }
}
