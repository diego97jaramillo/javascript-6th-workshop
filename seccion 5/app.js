// Ruta del archivo data.json
let reservas = [];
let capacityTypes = [];
const url = "data.json"; // Cambiar por la ruta correcta

// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos

    // ... Continuar con la lógica de la app
    while (true) {
      const userInput = prompt(
        "Ingresa la opcion que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Editar Reserva 5. Salir"
      );
      switch (userInput) {
        case "1":
          const userInput2 = prompt(
            "Ingrese el numero de habitacion a reservar: " +
              rooms
                .map((room) => {
                  return `\nRoom Number: ${room.number} (${
                    roomTypes.find((type) => type.id === room.roomTypeId).name
                  })`;
                })
                .join(", ")
          );
          if(rooms.find((room) => room.number === Number(userInput2) )){
          capacityValidation(roomTypes)
          let hayCapacidad = roomsAvailable(rooms, roomTypes);
          if (!hayCapacidad) {
            break
          }
          if(hayCapacidad.find((room) => room.number === Number(userInput2))) {
            let fechaInicio = new Date(prompt('escribe la fecha de entrada con el siguiente formato (AAAA/MM/DD): '));
            let fechaFin = new Date(prompt('escribe la fecha de salida con el siguiente formato (AAAA/MM/DD): '));
            let huesped = prompt('ingresa nombre y apellido de la persona a la cual se le asignara la reserva: ').toLowerCase();
            reservar(userInput2, fechaInicio, fechaFin, huesped);
            rooms.find((room) => room.number === Number(userInput2)).availability = false;
            console.log(reservas);
          } else {
            console.log('esa habitación no está disponible, escoge otra.');
          }
          break
          }
          console.log('no existe ese numero de habitacion');
          break;
        case "2":
          // Lógica para ver reservas actuales
          verReservas()
          break;
        case "3":
          // Lógica para cancelar reservas
          let nohay = verReservas()
          if (nohay) {
            break;
          }
          const idReserva = Number(prompt('danos el id de la reserva que deseas cancelar: '));
          cancelarReserva(idReserva);
          break;
        case "4":
          // Lógica para editar la reserva
          editarReserva()
          break;
        case "5":
          // Salir del programa
          return;
        default:
          console.log("Opción inválida. Inténtalo de nuevo.");
      }
    }
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });

const capacityValidation = (roomTypes) => {
  let personas = prompt('cuantas personas se hospedaran: ');
  if(personas > 6 ) {
    return console.log('no tenemos capacidad para tantas personas en una habitacion');
  }
  let filtered = roomTypes.filter((type) =>
    type.capacity >= Number(personas)
  )
  filtered.forEach((type) => capacityTypes.push(type.id))
}

const roomsAvailable = (rooms, roomTypes) => {
  const roomsToPick = rooms.filter((room) => capacityTypes.includes(room.roomTypeId) && room.availability === true);
  if(roomsToPick.length === 0) {
    return false
  }
  roomsToPick.map((room) => {
    console.log(`\nRoom available: ${room.number} (${
      roomTypes.find((type) => type.id === room.roomTypeId).name
    })`)
  })
  capacityTypes = []
  return roomsToPick
}

function generarGeneradorId() {
  let id = 1; // Variable id se inicializa fuera de la función interna

  return function () {
    return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
  };
}
let contador = generarGeneradorId()

const reservar = (numeroHabitacion, fechaInicio, fechaFin, huesped) => {

  let reserva = {
    id: contador(),
    numeroHabitacion,
    fechaInicio,
    fechaFin,
    huesped
  }
  reservas.push(reserva)
}

const verReservas = () => {
  let nombre = prompt('ingresa nombre y apellido').toLowerCase();
  let reservaListada = reservas.filter((reserva) => reserva.huesped === nombre);
  if (reservaListada.length === 0) {
    console.log('no hay reservas con ese nombre');
    return true
  }
  reservaListada.forEach((e) => console.log(e));
}

const cancelarReserva = (id) => {
  reservas = reservas.filter((reserva) => reserva.id !== id)
  console.log('¡Reserva cancelada!', reservas);
}

const editarReserva = () => {
  verReservas()
  const id = Number(prompt('Escribe el id del elemento que deseas modificar: '));
  const reservaEditar = reservas.find((reserva) => reserva.id === id);
  const propEditar = Number(prompt('Qué quieres editar? 1. nombre de huesped 2. fecha de inicio 3. fecha de fin'))
  console.log(reservaEditar);
  switch (propEditar) {
    case 1:
      reservaEditar.huesped = prompt('Escribe el nuevo nombre')
      break;
    case 2:
      reservaEditar.fechaInicio = new Date(prompt('escribe la nueva fecha de entrada con el siguiente formato (AAAA/MM/DD): '));
      break;
    case 3:
      reservaEditar.fechaFin = new Date(prompt('escribe la nueva fecha de salida con el siguiente formato (AAAA/MM/DD): '));
      break;
    default:
      break;
  }
}
