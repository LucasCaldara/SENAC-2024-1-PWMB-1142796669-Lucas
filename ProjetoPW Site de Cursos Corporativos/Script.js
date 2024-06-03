document.getElementById('loginButton').addEventListener('click', function () {
    window.location.href = 'login_cadastro.html';
});

document.getElementById('cadastroButton').addEventListener('click', function () {
    window.location.href = 'cadastro.html';
});

document.getElementById('cursosButton').addEventListener('click', function () {
    window.location.href = 'cursos_lista.html';
});
document.getElementById('ac_progressoButton').addEventListener('click', function () {
    window.location.href = 'ac_progresso.html';
});
document.getElementById('certificadosButton').addEventListener('click', function () {
    window.location.href = 'certificado.html';
});
document.getElementById('desempenhoButton').addEventListener('click', function () {
    window.location.href = 'desempenhoAva.html';
});
document.getElementById('relatorioButton').addEventListener('click', function () {
    window.location.href = 'relatorios.html';
});
document.getElementById('gestaoButton').addEventListener('click', function () {
    window.location.href = 'gestao_conteudo.html';
});
document.getElementById('sobreButton').addEventListener('click', function () {
    window.location.href = 'sobre.html';
});
document.getElementById('contatoButton').addEventListener('click', function () {
    window.location.href = 'contato.html';
});

if (usuarioLogado() || usuarioADM()) {
    substituirBotoes();
}

function usuarioLogado() {
    return localStorage.getItem('token') !== null;
}
function usuarioADM() {
    return localStorage.getItem('admtoken') !== null;
}

function substituirBotoes() {
    const botoes = document.getElementById('loginCheck');
    while (botoes.firstChild) {
        botoes.removeChild(botoes.firstChild);
    }

    const botaoSair = document.createElement('button');
    botaoSair.textContent = 'Sair da Conta';
    botaoSair.classList.add('button-50');
    botaoSair.addEventListener('click', function () {
        fazerLogout();
        window.location.reload(); // Recarrega a página para refletir as alterações
    });

    botoes.appendChild(botaoSair);

    if(usuarioLogado()){
        const botoesAdm = document.getElementById('botoesADM');
        while (botoesAdm.firstChild) {
            botoesAdm.removeChild(botoesAdm.firstChild);
        }
    }
}

function fazerLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('admtoken');
    limparCursosInscritos();
}


document.getElementById("Comm_curso_Button").addEventListener('click', function () {
    const novoCursoId = 1;
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(novoCursoId);
    } else {
        alert("Realize o login primeiramente");
    }
});
document.getElementById("gestao_tempo_Button").addEventListener('click', function () {
    const novoCursoId = 2;
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(novoCursoId);
    } else {
        alert("Realize o login primeiramente");
    }
});
document.getElementById("gestao_conflitos_Button").addEventListener('click', function () {
    const novoCursoId = 3;
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(novoCursoId);
    } else {
        alert("Realize o login primeiramente");
    }
});
document.getElementById("Tec_nego_Button").addEventListener('click', function () {
    const novoCursoId = 4;
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(novoCursoId);
    } else {
        alert("Realize o login primeiramente");
    }
});
document.getElementById("gestao_equipes_Button").addEventListener('click', function () {
    const novoCursoId = 5;
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(novoCursoId);
    } else {
        alert("Realize o login primeiramente");
    }
});


function inscreverUsuarioEmCurso(cursoId) {
    let dadosCursos = localStorage.getItem('dadosCursos');
    if (!dadosCursos) {
        dadosCursos = { cursosInscritos: [] };
    } else {
        dadosCursos = JSON.parse(dadosCursos);
    }

    if (!dadosCursos.cursosInscritos.includes(cursoId)) {
        dadosCursos.cursosInscritos.push(cursoId);
        localStorage.setItem('dadosCursos', JSON.stringify(dadosCursos));
        alert("Inscrição realizada com sucesso!");
    } else {
        alert("Usuário já está inscrito neste curso!");
    }
}

function limparCursosInscritos() {
    localStorage.setItem('dadosCursos', []);
}

