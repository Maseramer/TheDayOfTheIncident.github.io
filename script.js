document.getElementById("inputField").addEventListener("input", function(event) {
    const responseDiv = document.getElementById("response");
    const responseImage = document.getElementById("responseImage");
    const userInput = event.target.value.toLowerCase();

    // Restablece el contenido y oculta la imagen por defecto
    responseDiv.textContent = "";
    responseImage.style.display = "none";

    if (userInput === "rodaminA lE") {
        responseDiv.textContent = "Lamento lo que te hice";
    } else if (userInput === "blixer") {
        responseDiv.textContent = "el que lo inicio todo";
    } else if (userInput === "toon comic") {
        responseDiv.textContent = "Culpable de que te trajera aqui";
    } else if (userInput === "el animador") {
        responseDiv.textContent = ""; // Opcional: puedes dejar esto vacío
        responseImage.src = "the animator's survival kit pag 47.png";
        responseImage.style.display = "block"; // Muestra la imagen
    }
});

