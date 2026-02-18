document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("pedidoForm");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const musica = document.getElementById("musica").value;

        let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

        pedidos.push({
            nome: nome,
            musica: musica,
            data: new Date().toLocaleString()
        });

        localStorage.setItem("pedidos", JSON.stringify(pedidos));

        // 🔥 MOSTRA MENSAGEM
        mensagem.innerHTML = "✅ Pedido enviado com sucesso!";
        mensagem.style.display = "block";

        // Limpa formulário
        form.reset();

        // Esconde depois de 3 segundos
        setTimeout(() => {
            mensagem.style.display = "none";
        }, 3000);
    });

});

