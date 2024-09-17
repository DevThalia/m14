const arrayTareas=[]

function crearTarea(array,elementoNuevo){
    console.log("entra en crear tarea")
    if(comprobarTarea(array,elementoNuevo)==true){
        let elemento=document.createElement("p")
        elemento.innerHTML="La tarea que quieres añadir ya existe"
        document.body.appendChild(elemento)
    }else{
        array.push(elementoNuevo)
        //mostrarTareas(array)
    }
    return array
}

function mostrarTareas(array){
    console.log("entra en mostrar tareas")
    array.forEach(tarea => {
        let elemento = document.createElement("p");
        elemento.classList.add("tarea");
        elemento.innerHTML = tarea;
        document.body.appendChild(elemento);
    });
}

function eliminarTarea(array,tareaEliminar){
    let index=array.indexOf(tareaEliminar)
    if(index>-1){
        array.splice(index,1)
    }else{
        let elemento = document.createElement("p");
        elemento.innerHTML = "No es posible eliminar";
        document.body.appendChild(elemento);
    }
}

function comprobarTarea(array,tarea){
    return array.includes(tarea)
}