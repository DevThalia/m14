function anadirElementoLista() {
    // obtener elementos del DOM
    let listaElementos = document.getElementById("listaElementos")
    let inputForm = document.getElementById("texto")
    let botonEnviar = document.getElementById("botonEnviar")

    // Evento
    botonEnviar.onclick = function() {
        // añadir li a ul
        let textoForm = inputForm.value

        let elementoLi = document.createElement("li")
        elementoLi.innerHTML = textoForm
        listaElementos.appendChild(elementoLi)

        // Crear botón eliminar
        let botonEliminar = document.createElement("button")
        botonEliminar.innerText = "Eliminar"
        botonEliminar.addEventListener("click", function() {
            elementoLi.remove()
        })
        elementoLi.appendChild(botonEliminar)

        // Crear botón marcar como hecha
        let botonRealizado = document.createElement("button")
        botonRealizado.innerText = "Marcar como hecha"
        botonRealizado.addEventListener("click", function() {
            elementoLi.style.textDecoration = "line-through"
            botonRealizado.remove() 
        })
        elementoLi.appendChild(botonRealizado)

        // Limpiar el input después de añadir el elemento
        inputForm.value = ""
    }
}
