function ejercicio1() {

    let estudiant = {
        nom: 'Joan',
        edat: 20,
        notes: {
            matematiques: 8,
            programacio: 9,
            fisica: 7
        }
    }

    // Desestructura l'objecte aquí
    let { nom, edat, notes: { matematiques, programacio, fisica } } = estudiant

    // Imprimeix: "Joan té 20 anys i ha tret un 8 en matemàtiques."
    console.log(`En ${nom} té ${edat} i ha tret un ${matematiques} en matemàtiques`)
}

function ejercicio2() {

    let coordenades = [12, 5, 8];

    // Desestructura l'array aquí
    let [num1, num2, num3] = coordenades

    // Imprimeix les coordenades: "Les coordenades són x=12, y=5, z=8."
    console.log(`Les coordenades són ${num1}, ${num2}, ${num3}`)
}

function ejercicio3() {

    let preus = [100, 200, 300, 400];

    // Aplica el mètode map per incrementar els preus en un 10%
    let newArray = preus.map(function (num) {
        return (num * 0.1) + num;
    })

    // Imprimeix el nou array de preus
    console.log(newArray)
}

function ejercicio4() {

    let edats = [16, 21, 18, 24, 12, 30];

    // Utilitza el mètode filter per obtenir les edats majors de 18
    let newArray = edats.filter(function (num) {
        return num > 18
    })
    // Imprimeix el nou array
    console.log(newArray)
}

function ejercicio5() {
    let notes = [7, 9, 5, 10, 8];

    // Utilitza reduce per calcular la mitjana

    let newArray = notes.reduce(function (suma, num) {
        return suma + num
    })

    let media = newArray / notes.length

    // Imprimeix el resultat
    console.log(media)
}

function ejercicio6() {
    // Escriu la funció per crear l'objecte producte
    let product= new Object({
        nom:"Portàtil",
        preu:950,
        quantitat:3
    })
    // Exemple de sortida: { nom: "Portàtil", preu: 950, quantitat: 3 }
    console.log(product);
}

function ejercicio7() {
    let cotxe = {
        marca: 'Tesla',
        model: 'Model S',
        preu: 80000
    }
    // Afegeix la propietat 'any' aquí
    //cotxe['any']=1998
    Object.assign(cotxe,{any:2023})
    // Imprimeix l'objecte actualitzat
    console.log(cotxe);
}   