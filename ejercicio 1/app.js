// Global Scope
var globalVariable = "Soy una variable global.";
let Respuesta1
let Respuesta2
let Respuesta3


function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";
  Respuesta1 = confirm('aca puedo acceder a la variable "bloqueVariable?') //Respuesta correcta es: false

  if (true) {
    // Block Scope
    var blockVariable = "Soy una variable de bloque.";
    Respuesta2 = confirm('acá podemos acceder a todas las variables?') //Respuesta es true
    console.log(`Dentro del bloque puedes acceder a: ${globalVariable} ${functionVariable} ${blockVariable}` );
  }
  console.log("Dentro de la función:", functionVariable);
  if (!Respuesta1 && Respuesta2 && !Respuesta3) {
    console.log('enhorabuena, has completado todas las respuestas correctas');
    } else if (Respuesta1 && Respuesta2 && !Respuesta3) {
        console.log('has tenido conseguido dos preguntas correctas, la primera y la ultima');
        console.log('recuerda que los scopes solo tienes acceso a los padres del bloque en el que estas situado actualmente');
    } else if (!Respuesta1 && !Respuesta2 && !Respuesta3){
        console.log('has tenido conseguido las dos primeras preguntas correctas');
        console.log('recuerda que como estamos en el local del bloque, este puede acceder a todos los contextos globales');
    } else if (!Respuesta1 && Respuesta2 && Respuesta3) {
        console.log('has tenido conseguido las dos ultimas preguntas correctas');
    } else if (Respuesta1 && !Respuesta2 && !Respuesta3) {
        console.log('has tenido conseguido la primer pregunta correcta');
    } else if (!Respuesta1 && !Respuesta2 && Respuesta3) {
        console.log('has tenido conseguido la segunda pregunta correcta');
    } else if (Respuesta1 && Respuesta2 && Respuesta3) {
        console.log('has tenido conseguido la ultima pregunta correcta');
    }
}

Respuesta3 = confirm('podemos acceder a las functionVariable?')
console.log("Fuera de la función:");




testScope();




// Interacción del Usuario: El script solicitará, a través de un prompt, que el usuario adivine si es posible acceder a cada una de las variables (globalVariable, functionVariable, blockVariable) en diferentes partes del código.

// Respuesta del Usuario: Deberás ingresar tus respuestas en el prompt() indicando si crees que el acceso a cada variable es posible y por qué.

// Validación de Respuestas: Después de ingresar tus respuestas, el script evaluará y mostrará si cada una de ellas es correcta o incorrecta, y proporcionará una explicación detallada de los resultados.
