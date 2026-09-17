function abrirModal() {
    fetch("../html/telaCriarPublicacao.html")
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Erro ao carregar o arquivo");
            } return resposta.text();
        })
        .then(conteudo => {
            document.getElementById("conteudoModal").innerHTML = conteudo;
            document.getElementById("modal").style.display = "flex";
        })
        .catch(erro => {
            console.error(erro);
            document.getElementById("conteudoModal").innerHTML =
            "<p>Erro ao carregar a tela.</p>";
    });
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}