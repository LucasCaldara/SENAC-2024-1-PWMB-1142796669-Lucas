document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const senha = document.getElementById('signupPassword').value;

    if (emailUnico(email)) {
        alert("Este email já é utilizado");
    } else {
        cadastrar(email, senha);
        alert("Cadastro concluído!");
        window.location.href = "index.html";
    }
});

var dados = [];

function cadastrar(email, senha) {
    const usuariosJSON = localStorage.getItem('usuario');
    if (usuariosJSON) {
        dados = JSON.parse(usuariosJSON);
    }
    const usuario = {
        email: email,
        senha: senha
    };

    dados.push(usuario);

    const addDadosJSON = JSON.stringify(dados);
    localStorage.setItem('usuario', addDadosJSON);
}

function emailUnico(email) {
    const usuariosJSON = localStorage.getItem('usuario');
    if (usuariosJSON) {
        const usuarios = JSON.parse(usuariosJSON);
        return usuarios.some(usuario => usuario.email === email);
    }
    return false;
}
