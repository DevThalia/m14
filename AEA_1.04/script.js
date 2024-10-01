function ejercicio1() {

    const estudiant = {
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
    
    const coordenades = [12, 5, 8];

    // Desestructura l'array aquí
    let [num1,num2,num3]=coordenades
    // Imprimeix les coordenades: "Les coordenades són x=12, y=5, z=8."
    console.log(`Les coordenades són ${num1}, ${num2}, ${num3}`);
}