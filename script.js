// Mostrar la tarjeta "¿Quienes somos?" cuando se hace clic en el enlace
document.getElementById("quienesSomosLink").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el enlace navegue
    document.getElementById("quienesSomosCard").classList.remove("hidden"); // Muestra la tarjeta
});

// Ocultar la tarjeta "¿Quiénes somos?" cuando se hace clic en "Cerrar"
document.getElementById("closeCardBtn").addEventListener("click", function () {
    document.getElementById("quienesSomosCard").classList.add("hidden"); // Oculta la tarjeta
});

// Mostrar la tarjeta de "Próximamente" al hacer clic
document.getElementById("consultaVirtualLink").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el enlace navegue
    document.getElementById("proximamenteCard").classList.remove("hidden"); // Muestra la tarjeta
});

// Cerrar la tarjeta de "Próximamente"
document.getElementById("closeProximamenteBtn").addEventListener("click", function () {
    document.getElementById("proximamenteCard").classList.add("hidden"); // Oculta la tarjeta
});

// Lógica para cerrar sesión
document.getElementById("logoutBtn").addEventListener("click", function () {
    alert("Has cerrado sesión."); // Muestra un mensaje de alerta
    window.location.href = "index.html"; // Redirige a la página de inicio de sesión
});
