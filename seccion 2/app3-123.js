// ejercicio 3.1
function crearSumador(n) {
    let total = n
    return function (m

    ) {
        console.log(total)
        total += m
    }
}


// ejercicio 3.2
const sumarCinco = crearSumador(5)
sumarCinco(3);


// ejercicio 3.3
sumarCinco(3);
sumarCinco(4);
sumarCinco(6);
