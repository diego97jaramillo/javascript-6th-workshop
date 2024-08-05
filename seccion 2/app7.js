console.log(`
    console.log("Inicio del script");

    setTimeout(() => {
      console.log("Primer setTimeout");
    }, 0);

    setTimeout(() => {
      console.log("Segundo setTimeout");
    }, 0);

    Promise.resolve("Promesa resuelta").then(console.log);

    console.log("Fin del script");

    `);
let aciertos = 0;
let pregunta
let incorrecto = []

for(let i = 0; i<5; i++ ) {
    switch (i) {
        case 0:
            pregunta = Number(prompt('escribe un numero del 1 al 5 segun el orden que creas que se van a imprimir los console.log, en este caso, cual es la posicion del "inicio del script"? '))
            if (pregunta === 1) {
                aciertos ++
            } else {
                incorrecto.push(i+1)
            }
            break;
        case 1:
            pregunta = Number(prompt('¿cual es la posicion del "primer setTimeout"? '))
            if (pregunta === 3) {
                aciertos ++
            } else {
                incorrecto.push(i+1)
            }
            break;
        case 2:
            pregunta = Number(prompt('¿cual es la posicion del "segundo setTimeout"? '))
            if (pregunta === 4) {
                aciertos ++
            } else {
                incorrecto.push(i+1)
            }
            break;
        case 3:
            pregunta = Number(prompt('¿cual es la posicion del "promesa resuelta"? '))
            if (pregunta === 2) {
                aciertos ++
            } else {
                incorrecto.push(i+1)
            }
            break;
        case 4:
            pregunta = Number(prompt('¿cual es la posicion del "fin del script"? '))
            if (pregunta === 5) {
                aciertos ++
            } else {
                incorrecto.push(i+1)
            }
            break;
        default:
            break;
    }
}

if (!incorrecto.length) {
    console.log('felicitaciones');
} else if(incorrecto.length<2) {
    switch (incorrecto[0]) {
        case 1:
            console.log('incorrecta la respuesta: ' + incorrecto[0] + ' como es un mensaje entonces este se selecciona de primero en el queue del event loop para se resuelva');
            break;
        case 2:
            console.log('incorrecta la respuesta: ' + incorrecto[0] + ' como setTimeout es ejecutado en el navegador y despues su ejecucion es asignada en la cola de macro tareas, entonces esta tiene que esperar que primero se solucione todo lo que esta en call stack y en la cola de micro tareas para poder ser ejecutada');
            break;
        case 3:
            console.log('incorrecta la respuesta: ' + incorrecto[0] + ' como setTimeout es ejecutado en el navegador y despues su ejecucion es asignada en la cola de macro tareas, entonces esta tiene que esperar que primero se solucione todo lo que esta en call stack y en la cola de micro tareas para poder ser ejecutada');
            break;
        case 4:
            console.log('incorrecta la respuesta: ' + incorrecto[0] + ' como es una promesa entonces js asigna el resolve callback en el microtask queue, el cual JS le da prioridad para ejecutarlo una ves el call stack está vacio' );
            break;
        case 5:
            console.log('incorrecta la respuesta: ' + incorrecto[0] + ' como es un mensaje entonces este se añade al call stack en el orden de llegada para ser resuelto, una vez las acciones anteriores se hayan resuelto entonces este se resuelve');
            break;
        default:
            break;
    }
} else {
    console.log('te recomiendo ver este video para que entiendas como funciona el eventloop: https://www.youtube.com/watch?v=eiC58R16hb8');
}



console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");
