document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            alert("As senhas não coincidem. Por favor, verifique.");
            return;
        }

        alert("Cadastro realizado com sucesso!");
        form.reset(); // Limpa os campos do formulário
    });
});
