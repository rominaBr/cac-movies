document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-registro");
    const errorMessage = document.querySelector("#error-message");    
    form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const email = form.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password = form.password.value;
    const fechanac = form.fechanac.value;
    const pais = form.pais.value;
    const terminos = form.terminos.checked;
    
            
    if (nombre === "" || apellido === "" || email === "") {
        errorMessage.textContent = "Los campos no puede estar vacios.";
        return;
    }

    if (!emailRegex.test(email)){
        errorMessage.textContent = "El formato del email es incorrecto."
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "El password debe tener al menos seis digitos.";
        return;
    }   


    if (fechanac === "" || pais === "") {
        errorMessage.textContent = "Los campos no puede estar vacios.";
        return;
    }

    if(!terminos){
        errorMessage.textContent = "Debe aceptar los términos y condiciones.";
        return;
    }

    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        errorMessage.textContent = "El email de este usuario ya se encuentra registrado.";
        return;
    }
    
    const newUser = {
        email,
        password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "login.html";

  });

});
