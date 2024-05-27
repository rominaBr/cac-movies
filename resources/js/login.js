document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-login");
    const errorMessage = document.querySelector("#error-message");
    console.log(form.email.value.trim());

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const email = form.email.value.trim();        
        const password = form.password.value.trim();

        errorMessage.textContent = "";

        if (email === "" || password === "") {
            errorMessage.textContent = "Los campos no puede estar vacios.";
            return;
        }
        
        const users = JSON.parse(localStorage.getItem("users")) || [];

        
        const existingUser = users.find((user) => user.email === email);

        if (existingUser && existingUser.password === password) {            
            window.location.href = "../index.html";
        } else {
            errorMessage.textContent = "Correo electrónico o contraseña incorrectos.";
        }
    });
});
