const cursos = [
    { id: 1, nome: 'Técnicas de Negociação', progresso: "69% completo" },
    { id: 2, nome: 'Gestão do Tempo e Produtividade', progresso: "77% completo" },
    { id: 3, nome: 'Comunicação Eficaz no Ambiente Corporativo', progresso: "0% completo" },
    { id: 4, nome: 'Liderança e Gestão de Equipes', progresso: "55% completo" },
    { id: 5, nome: 'Alta Performance e Gestão de Conflitos', progresso: "80% completo" },
    { id: 6, nome: 'Oracle SQL', progresso: "100% completo" },
    { id: 7, nome: 'Programação front-end', progresso: "100% completo" }
];

let dadosCursos = { cursosInscritos: [] };

if (usuarioLogado()) {
    renderizarCursos();
    criarCertificados();
}

function usuarioLogado() {
    return localStorage.getItem('token') !== null;
}

function renderizarCursos() {
    const cursosDiv = document.getElementById('cursos');
    if (!cursosDiv) {
        console.error("Elemento com ID 'cursos' não encontrado.");
        return;
    }

    const cursosJSON = localStorage.getItem('dadosCursos');
    const pegar = JSON.parse(cursosJSON);

    if (pegar && pegar.cursosInscritos) {
        dadosCursos.cursosInscritos = pegar.cursosInscritos;
    }

    cursosDiv.innerHTML = '';

    dadosCursos.cursosInscritos.forEach(cursoId => {
        const curso = cursos.find(curso => curso.id === cursoId);
        if (curso) {
            const div = document.createElement('div');
            div.className = 'curso';
            div.innerHTML = `
                <h2>${curso.nome}</h2>
                <p>${curso.progresso}</p>
            `;
            cursosDiv.appendChild(div);
        }
    });
}

function contemCurso() {
    return dadosCursos.cursosInscritos.length > 0;
}

function criarCertificados() {
    if (contemCurso()) {
        const container = document.getElementById('cardContainer');
        if (!container) {
            console.error("Elemento com ID 'cardContainer' não encontrado.");
            return;
        }

        dadosCursos.cursosInscritos.forEach(cursoId => {
            const curso = cursos.find(curso => curso.id === cursoId);
            if (curso && curso.progresso === "100% completo") {
                const card = document.createElement('div');
                card.className = 'cards';

                const logo = document.createElement('img');
                logo.src = 'assets/k_logo.png';
                logo.alt = 'logo';
                logo.className = 'logo';

                const tituloEmpresa = document.createElement('h2');
                tituloEmpresa.textContent = 'SavoirPlus';

                const tituloCertificado = document.createElement('h1');
                tituloCertificado.textContent = 'CERTIFICADO DE CONCLUSÃO';

                const tituloCurso = document.createElement('h2');
                tituloCurso.innerHTML = `Curso: <p id="cursoConcluido">${curso.nome}</p>`;

                const progresso = document.createElement('p');
                progresso.textContent = `Progresso: ${curso.progresso}`;

                card.appendChild(logo);
                card.appendChild(tituloEmpresa);
                card.appendChild(tituloCertificado);
                card.appendChild(tituloCurso);
                card.appendChild(progresso);

                container.appendChild(card);
            }
        });
    } else {
        console.log('Nenhum curso encontrado no localStorage.');
    }
}
