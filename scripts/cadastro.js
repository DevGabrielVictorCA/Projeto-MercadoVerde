document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("register-form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const citySelect = document.getElementById("city");
    const neighborhoodSelect = document.getElementById("neighborhood");

    // Dados de bairros por cidade
    const neighborhoods = {
        SaoPaulo: [
            "Vila Mariana",
            "Pinheiros",
            "Santana",
            "Tatuapé",
            "Itaim Bibi",
            "Mooca"
        ],
        RibeiraoPreto: [
            "Centro",
            "Jardim Paulista",
            "Vila Tibério",
            "Ribeirânia",
            "Nova Ribeirânia",
            "Sumarezinho"
        ]
    };

    // Atualiza os bairros com base na cidade selecionada
    citySelect.addEventListener("change", () => {
        const city = citySelect.value;
        neighborhoodSelect.innerHTML = '<option value="">Selecione seu bairro</option>';

        if (neighborhoods[city]) {
            neighborhoods[city].forEach((neighborhood) => {
                const option = document.createElement("option");
                option.value = neighborhood;
                option.textContent = neighborhood;
                neighborhoodSelect.appendChild(option);
            });
        }
    });

    // Validação de senhas
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
