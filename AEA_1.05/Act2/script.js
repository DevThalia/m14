function init(){
    cambiarEstilo()
}

function cambiarEstilo(){
    let paragrafo=document.getElementById("contenedorTexto")
    paragrafo.onclick=function(){
        paragrafo.style.color="red"
        paragrafo.style.fontSize="10px"
    }
}