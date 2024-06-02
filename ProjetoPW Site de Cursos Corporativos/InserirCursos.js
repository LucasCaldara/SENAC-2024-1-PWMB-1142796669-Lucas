let idAva = null;

function inscreverUsuarioEmCurso(idAva) {
    let dadosCursos = localStorage.getItem('dadosCursos');
    if (!dadosCursos) {
        dadosCursos = { cursosInscritos: [] };
    } else {
        dadosCursos = JSON.parse(dadosCursos);
    }

    if (!dadosCursos.cursosInscritos.includes(idAva)) {
        dadosCursos.cursosInscritos.push(idAva);
        localStorage.setItem('dadosCursos', JSON.stringify(dadosCursos));
        alert("Inscrição realizada com sucesso!");
    } else {
        alert("Usuário já está inscrito neste curso!");
    }
}

function usuarioLogado() {
    return localStorage.getItem('token') !== null;
}

document.getElementById("Comm_curso_Button").addEventListener('click', function() {
    idAva = 1; 
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(idAva);
        criarCardCurso(idAva);
    } else {
        alert("Realize o login primeiramente");
    }
});

document.getElementById("gestao_tempo_Button").addEventListener('click', function() {
    idAva = 2; 
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(idAva);
        criarCardCurso(idAva);
    } else {
        alert("Realize o login primeiramente");
    }
});

document.getElementById("gestao_conflitos_Button").addEventListener('click', function() {
    idAva = 3; 
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(idAva);
        criarCardCurso(idAva);
    } else {
        alert("Realize o login primeiramente");
    }
});

document.getElementById("Tec_nego_Button").addEventListener('click', function() {
    idAva = 4; 
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(idAva);
        criarCardCurso(idAva);
    } else {
        alert("Realize o login primeiramente");
    }
});

document.getElementById("gestao_equipes_Button").addEventListener('click', function() {
    idAva = 5; 
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(idAva);
        criarCardCurso(idAva);
    } else {
        alert("Realize o login primeiramente");
    }
});

document.getElementById("OracleSQL_Button").addEventListener('click', function() {
    idAva = 6; 
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(idAva);
        criarCardCurso(idAva);
    } else {
        alert("Realize o login primeiramente");
    }
});

document.getElementById("progFront-end_Button").addEventListener('click', function() {
    idAva = 7; 
    if (usuarioLogado()) {
        inscreverUsuarioEmCurso(idAva);
        criarCardCurso(idAva);
    } else {
        alert("Realize o login primeiramente");
    }
});
