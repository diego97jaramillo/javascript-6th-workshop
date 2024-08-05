function manejarAsincronia(promesa, callback) {
    promesa.then((e) => callback(e)).catch((err) => callback(err))
}

let promesa = new Promise((res , rej) => {
    setTimeout(() => {
    if (false) {
        res('¡Promesa cumplida y callback ejecutado!')
    } else{
        rej('erroneo')
    }

}, 2000);
})

const callback = (message) => (console.log( message))

manejarAsincronia(promesa, callback)
