// Array para almacenar los nombres
let nombres = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array
    nombres.push(nombre);

    // Actualizar la lista visible en el DOM
    const lista = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiar el campo de entrada y devolver el foco
    input.value = "";
    input.focus();
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSeleccionado = nombres[indiceAleatorio];

    // Mostrar el resultado en el DOM
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
}
