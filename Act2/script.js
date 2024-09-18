const arrayTareas = []

function crearTarea(array, elementoNuevo) {
    console.log("entra en crear tarea")
    if (comprobarTarea(array, elementoNuevo) == true) {
        alert = "La tarea que quieres añadir ya existe"
    } else {
        array.push(elementoNuevo)
        mostrarTareas(array)
    }
    return array
}


function mostrarTareas(array) {
    let contenedorTareas = document.getElementById("contenedor-tareas")
    contenedorTareas.innerHTML = ""
    array.forEach((tarea, index) => {
        let elemento = document.createElement("li")
        elemento.classList.add("tarea")
        elemento.innerHTML = tarea
        let botonBorrar = document.createElement("button")
        botonBorrar.innerHTML = "Borrar"
        botonBorrar.classList.add("boton-borrar")
        botonBorrar.addEventListener("click", () => {
            eliminarTarea(array, tarea)
        })
        elemento.appendChild(botonBorrar)
        contenedorTareas.appendChild(elemento)
    })
}


function eliminarTarea(array, tareaEliminar) {
    let index = array.indexOf(tareaEliminar)
    if (index > -1) {
        array.splice(index, 1)
    }
}

function comprobarTarea(array, tarea) {
    return array.includes(tarea)
}