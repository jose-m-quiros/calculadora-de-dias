// Función para calcular los días transcurridos desde la fecha actual
function calcularDiasTranscurridos(fecha) {
    const hoy = new Date();
    const fechaIngreso = new Date(fecha);
    const diferencia = hoy - fechaIngreso; // Diferencia en milisegundos
    return Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Convertir milisegundos a días
}

// Función para calcular la fecha futura sumando días
function calcularFechaFutura(dias) {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + dias);
    return hoy.toLocaleDateString("es-ES");
}

document.addEventListener("DOMContentLoaded", () => {
    // Calcular los días transcurridos desde la fecha actual
    const fechaIngreso = "2024-11-16"; // Esta sería la fecha ingresada, puedes cambiarla según lo necesario
    const diasTranscurridos = calcularDiasTranscurridos(fechaIngreso);
    document.getElementById("dias-transcurridos").textContent = `Días transcurridos: ${diasTranscurridos}`;

    // Calcular la fecha futura sumando una cantidad de días
    document.getElementById("calcularFechaFutura").addEventListener("click", () => {
        const diasInput = parseInt(document.getElementById("dias").value);
        if (!isNaN(diasInput)) {
            const fechaFutura = calcularFechaFutura(diasInput);
            document.getElementById("fecha-futura").textContent = `Fecha futura: ${fechaFutura}`;
        } else {
            alert("Por favor, ingresa un número válido de días.");
        }
    });
});
