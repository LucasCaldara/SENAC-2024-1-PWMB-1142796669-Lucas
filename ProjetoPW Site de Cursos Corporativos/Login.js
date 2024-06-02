document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginSenha = document.getElementById('loginPassword').value;

    if (contemCadastro()) {
        const usuariosJSON = localStorage.getItem('usuario');
        const usuarios = JSON.parse(usuariosJSON);
        const acharConta = usuarios.find(usuario => usuario.email === loginEmail && usuario.senha === loginSenha);

        if (acharConta) {
            const usuarioAdm = document.getElementById('loginEmail').value;
            if(usuarioAdm === 'adm@email.com'){
            const token = gerarToken();
            localStorage.setItem('admtoken', token);
            alert("Login feito!");
            window.location.href = "index.html";
            } else {
                const token = gerarToken();
                localStorage.setItem('token', token);
                alert("Login feito!");
                window.location.href = "index.html";
            }
        } else {
            alert("Usuário não encontrado!");
        }
    } 
});

function contemCadastro() {
    const usuariosJSON = localStorage.getItem('usuario');
    return usuariosJSON !== null;
}
function gerarToken() {
    return 'token_' + Date.now();
}

