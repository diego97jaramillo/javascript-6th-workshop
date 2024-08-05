console.log('Mensaje 1: inmediatamente');

setTimeout(() => {
    console.log('Mensaje 2: con timeout de 0');
}, 0)

setTimeout(() => {
    console.log('Mensaje 3: con timeout de 1');
}, 1000)
