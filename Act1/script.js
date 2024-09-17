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
        if(i %3==0){
            console.log("Pedra")
        }else if(i %5==0){
            console.log("Paper")
        }else if(i%3==0 && i%5==0){
            console.log("Tisores")
        }else console.log(i)
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

function factorial(n) {
    if (n === 1 || n === 0) {
        console.log(n)
        return 1
    } else {
        let resultado= n * factorial(n - 1)
        console.log(resultado)
        return resultado
    }
}

function filtrarPositius(array){
    let newArray=[]
    for(i=0; i<array.length; i++){
        if(array[i]>0){
            newArray.push(array[i])
        }
    }
    console.log(newArray)
    return newArray
}
