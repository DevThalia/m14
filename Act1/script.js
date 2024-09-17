function compararNumeros(a,b){
    if(a>b){
        console.log(a)
    }
    console.log(b)
}

function suma1a100(){
    let suma=0
    for(i=0; i<100; i++){
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

function esParell(num){
    if(num %2==0){
        console.log("True")
    }else
    console.log("False")
}

function revertirCadena(cadena){
    let cadenaFinal=cadena.split('').reverse().join('')
    console.log(cadenaFinal)
}

function factorial(n){
    if(n>0){
        console.log(n)
    }else {
        return factorial(n*(n-1))
    }
}

function filtrarPositius(array){
    for(i=0; i<array.length; i++){
        if(array[i]<0){
            array.pop(i)
        }
        return array
    }
    console.log(array)
    
}
