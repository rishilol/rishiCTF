function checkInput() {
    const inputBox = document.getElementById("inputBox");
    const input = inputBox.value;
    const message = document.getElementById("message");
    const fireworks = document.getElementById("fireworks");
    const body = document.body;
    
    if (input === "Error") {
        message.classList.remove("hidden");
        inputBox.classList.remove("wrong");
        inputBox.classList.add("success");
        body.style.backgroundColor = "#00ff00";
        fireworks.classList.remove("hidden");
        setTimeout(() => {
            fireworks.classList.add("hidden");
            body.style.backgroundColor = "#1a1a1a";
        }, 3000);
    } else {
        inputBox.classList.add("wrong");
        setTimeout(() => inputBox.classList.remove("wrong"), 500);
    }
}