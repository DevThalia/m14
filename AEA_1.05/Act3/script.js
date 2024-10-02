function init() {
    let boton = document.getElementById("botonEnviar")
    boton.onclick = function () {
        let inputText = document.getElementById("Texto")
        let listaElementos = document.getElementsByTagName("ul")[0]
        let elemento = document.createElement("li")
        texto = inputText.value
        elemento.innerHTML = texto
        listaElementos.appendChild(elemento)
        inputText.value = ""
    }
}