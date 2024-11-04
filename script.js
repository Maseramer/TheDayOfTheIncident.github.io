document.getElementById("inputField").addEventListener("input", function(event) {
    const responseDiv = document.getElementById("response");
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
        responseDiv.textContent = "https://mas.fandom.com/es/wiki/Archivo:The_animator%27s_survival_kit_pag_47.png";
    } else if (userInput === "barry") {
        responseDiv.textContent = "Por que hablar de gamer4m3r?";
    } else if (userInput === "pastel") {
        responseDiv.textContent = "https://www.youtube.com/watch?v=_pPvQ4nKJyI";
    } else if (userInput === "Nicopatty") {
        responseDiv.textContent = "T E  Q U I E R O";
    } else if (userInput === "Disney") {
        responseDiv.textContent = "que se vaya al diablo";
    } else if (userInput === "Maseramer") {
        responseDiv.textContent = "piensa en animar y grabar";
    } else if (userInput === "seek") {
        responseDiv.textContent = "I'd rather sleep than stay awake, Trees used to talk to me, Now I know what's real and what is fake, Now I know what's real, what's fake";
    } else if (userInput === "gal") {
        responseDiv.textContent = "It's good to be alive (na-na-na-na-na) I's good to be alive"
    } else if (userInput === "winter company") {
        responseDiv.textContent = "https://mas.fandom.com/es/wiki/Archivo:Ambiente-del-nivel.mp3"
    } else if (userInput === "partypooper") {
        countdownContainer.style.display = "block"; // Muestra el temporizador
});
