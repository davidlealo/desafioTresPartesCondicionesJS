function bordeDesafio(){
    documento = document.querySelector('#imagen');
    if (documento.style.border === "none"){
        documento.style.border = "2px solid red";
    } else {
        documento.style.border = "none"
    }
}