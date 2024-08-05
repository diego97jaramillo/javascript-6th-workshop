

let time = Number(prompt('escribe cuantos segundo quieres que espere para mostrar en consola'))

const promesa = async() => {
    await setTimeout(() => {
        console.log(`se imprime despues de ${time} segundos`);
    }, time*1000);
}

promesa()

fetch('https://jsonplaceholder.typicode.com/posts').then((raw) => raw.json()).then((data) => console.log(data)).catch((err) => console.error(err))
