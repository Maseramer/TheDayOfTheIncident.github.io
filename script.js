document.getElementById("inputField").addEventListener("input", function(event) {
    const responseDiv = document.getElementById("response");
    const userInput = event.target.value.toLowerCase();

    if (userInput === "clave") {
        responseDiv.textContent = "¡Correcto! Has ingresado la palabra secreta.";
    } else {
        responseDiv.textContent = "";  // Limpia el mensaje si la palabra es incorrecta
    }
});

if (userInput === "misterio") {
    responseDiv.textContent = "¡Has descubierto un misterio oculto!";
    document.body.style.backgroundColor = "#333";
}