function sumar(m) {
    let total = m
    return function (n){
        console.log(total);
        total += n
    }
}
let respuesta
const contador = sumar(Number(prompt('escribe el numero con el cual deba iniciar el contador')))
while(true){
    respuesta = prompt('escribe "si" si quieres agregar más al contador o "no" si no lo deseas: ')
    if (respuesta==='si') {
        contador(Number(prompt('Cuanto le deseas sumar al contador')))
    } else{
        contador(0)
        break
    }
}
