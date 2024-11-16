document.addEventListener("DOMContentLoaded", function () {
    // Mostrar la fecha actual automáticamente
    const fechaActual = new Date();
    const fechaActualFormateada = formatearFecha(fechaActual);
    document.getElementById("fecha-actual").textContent = `Fecha Actual: ${fechaActualFormateada}`;

    // Función para calcular la fecha futura
    document.getElementById("calcularFechaFutura").addEventListener("click", function () {
        const diasInput = document.getElementById("dias").value;

        if (diasInput && diasInput > 0) {
            const diasFuturos = parseInt(diasInput, 10);
            const fechaFutura = new Date();
            fechaFutura.setDate(fechaFutura.getDate() + diasFuturos); // Sumamos los días

            // Formateamos la fecha futura
            const fechaFuturaFormateada = formatearFecha(fechaFutura);
            document.getElementById("fecha-futura").textContent = `Fecha Futura: ${fechaFuturaFormateada}`;
        } else {
            alert("Por favor, ingresa un número válido de días.");
        }
    });

    // Función para formatear fecha con mayúscula inicial
    function formatearFecha(fecha) {
        return fecha.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).replace(/\b\w+/g, function (palabra) {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        });
    }
});
