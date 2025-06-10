document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-treino");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const objetivo = document.getElementById("objetivo").value;
        const nivel = document.getElementById("nivel").value;
        const dias = document.getElementById("dias").value;

        const usuario = {
            nome,
            objetivo,
            nivel,
            dias
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "treino.html"; // Página onde exibiremos o treino gerado
    });
});
