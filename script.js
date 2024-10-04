function mostrarHora() {
    const fecha = new Date();
    const opciones = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const horaActual = fecha.toLocaleTimeString('es-ES', opciones);
    document.getElementById('hora').innerText = `Hora actual: ${horaActual}`;
}

function mostrarUbicacion() {
    // Simulación de ubicación, puedes reemplazar con una API si lo deseas.
    const ubicacion = "Ciudad: Madrid, País: España";
    document.getElementById('ubicacion').innerText = `Ubicación: ${ubicacion}`;
}

// Llamar a las funciones al cargar la página
window.onload = function() {
    mostrarHora();
    mostrarUbicacion();
};
