// // vars call
// console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

// // functions call
// console.log("Resultado de funcionDeclarada:", funcionDeclarada());
// console.log("Resultado de funcionExpresada:", funcionExpresada());

// // vars declaration
// var a = 1;
// let b = 2;
// const c = 3;

// // functions declarations
// function funcionDeclarada() {
//   return "Función declarada ha sido llamada.";
// }

// const funcionExpresada = function () {
//   return "Función expresada ha sido llamada.";
// };

if (confirm(`que crees que el siguiente bloque de codigo se va a ejecutar correctamente?
    saludar();
    function saludar() {
    return 'hola';
    }
    `)) {
    console.log('correcto, como es una funcion declaradad entonces Js se lleva la funcion declarada para el principio permitiendo que la llamemos donde estamos actualmente', saludar());
    function saludar() {
        return 'hola';
}}



if (!confirm(`que crees que el siguiente bloque de codigo se va a ejecutar correctamente?
    console.log("Resultado de saludar: ", funcionAnonima());
    const funcionAnonima = function () {
    return 'soy la anonima'`)) {

    console.log('correcto, como es una funcion aninoma se debe asignar a una constante por ende JS no le hara hoist a esta constante y se debe llamar despues de ser declarada')
    const funcionAnonima = function () {
        return 'soy la anonima'
    }
    console.log("Resultado de funcionAnonima: ", funcionAnonima());
}



if(!confirm(`crees qué va a resultar un error si llamamos a la variable "a" antes de declararla?
    console.log("Resultado de 'a': ", a);
    var a = 1;`)){
    console.log('correcto, el valor es: ', a);
    var a = 1;
} else {
    console.log('incorrecto, no resulta un error porque JS le hace hoisting y se lo lleva para arriba y le asigna el valor de undefined');
}

if(confirm(`crees qué va a resultar un error si llamamos a la variable "b" antes de declararla?
    console.log("Resultado de 'b': ", b);
    let b = 2;`)) {
    console.log("correcto, si se llama antes de declararla vemos que nos dispara un error y se rompe la ejecución.");
} else {
    console.log('incorrecto, si se llama antes de declararla vemos que nos dispara un error y se rompe la ejecución.');
}


if(confirm(`crees qué va a resultar un error si llamamos a la variable "c" antes de declararla?
    console.log("Resultado de 'c': ", c);
    const c = 3;`)) {
    console.log("correcto, si se llama antes de declararla vemos que nos dispara un error y se rompe la ejecución.");
} else {
    console.log('incorrecto, si se llama antes de declararla vemos que nos dispara un error y se rompe la ejecución.');
}








