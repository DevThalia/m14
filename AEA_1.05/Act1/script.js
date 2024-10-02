function cambiarTitulo() {

    let titulo = document.getElementsByTagName("h1")[0]
    let nuevoTitulo = "Título cambiado"
    titulo.innerHTML = nuevoTitulo

}

function anadirElemento() {

    let listaElementos = document.getElementsByClassName("lista")[0]
    let nuevoElemento = document.createElement("li")
    nuevoElemento.innerHTML = "Elemento 4"
    listaElementos.appendChild(nuevoElemento)


}

function modificarParagrafo() {

    let boton = document.getElementById("canviText")
    boton.onclick = function () {
        let paragrafo = document.getElementById("paragrafo")
        let nuevoTexto = "Este es el nuevo texto del parágrafo"
        paragrafo.innerHTML = nuevoTexto
    }

}

function init(){
    cambiarTitulo()
    anadirElemento()
    modificarParagrafo()
}