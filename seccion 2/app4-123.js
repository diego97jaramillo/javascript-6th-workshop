console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
  );
  try {
    console.log(funcionDeclarada());
  } catch (error) {
    console.log("Error:", error.message);
  }

  console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
  );
  try {
    console.log(funcionExpresada());
  } catch (error) {
    console.log("Error:", error.message);
  }

  // Declaración de una función declarada
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }

  // Declaración de una función expresada
  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };

  console.log("Llamando a 'funcionDeclarada' después de su declaración:");
  console.log(funcionDeclarada());

  console.log("Llamando a 'funcionExpresada' después de su declaración:");
  console.log(funcionExpresada());


//   4.2: Ejecuta el Script: Observa los resultados de los intentos de llamar a ambas funciones antes y después de su declaración.

//   4.3: Reflexión: Después de ejecutar el código, responde los siguientes puntos:

//   ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
//   al llamara la funcion declarada no se presenta ningun error porque JS le hace hoisting a la funcion y la eleva a la parte superior entonces al llamarla, ya el programa tiene conocimiento de la funcion
//   ¿Cómo difieren los resultados entre la función declarada y la función expresada?
//   difieren en que la declara es hoisteada y la otra no, ademas la expresada se debe asignar a una constante, esto es lo que evita que sea elevada y presenta un error de llamado antes de inicializacion porque JS reconoce que esa constante se va a declarar más adelante pero aun no se ha hecho, además no conoce su valor todavia.
//   ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
//   JS le hace hoisting a las funciones declaradas por la naturaleza de ser funcion pero como la expresada se asigna a una constante entonces a esta no le aplica el hoist.
