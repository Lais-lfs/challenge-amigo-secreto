let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById("amigo").value;

    if (nome == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        limparCampo();
        exibirLista(amigos);
    }
}

function limparCampo() {
    document.getElementById("amigo").value = "";
}

function exibirLista(amigos) {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for (let index = 0; index < amigos.length; index++) {
        const linha = document.createElement('li');
        listaAmigos.appendChild(linha);
        linha.innerText = amigos[index];
    }
}

function sortearAmigo() {

    if (amigos.length == 0) {
        alert("Por favor, insira os nomes para sorteá-los.")
    } else {
        const numeroAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[numeroAleatorio]

        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;

        zerarLista();
    }
}

function zerarLista() {
    amigos = [];
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}
