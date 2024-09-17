function compararNumeros(a,b){
    if(a>b){
        return a
    }
    return b
}

function suma1a100(){
    let suma
    for(i=1; i<100; i++){
        suma=suma+i
    }
    console.log(suma)
}

function pedraPaper(){
    for(i=1; i<20; i++){
        switch(i){
            case i % 3 ==0:
            console.log("Pedra")
            case i % 5 ==0:
            console.log("Paper")
            case i % 3 ==0 && i % 5 ==0:
            console.log("Tisores")
            default:
            console.log(i)
        }
    }
}

function esParell(){

}

function revertirCadena(cadena){

}

function factorial(n){

}

function filtrarPositius(array){

}
