const cursosComNotas = [
    { id: 1, nome: 'Técnicas de Negociação', notas: [3, 8, 6] },
    { id: 2, nome: 'Gestão do Tempo e Produtividade', notas: [2, 5, 7, 6] },
    { id: 3, nome: 'Comunicação Eficaz no Ambiente Corporativo', notas: ["Nenhuma avaliação realizada"] },
    { id: 4, nome: 'Liderança e Gestão de Equipes', notas: [8, 6] },
    { id: 5, nome: 'Alta Performance e Gestão de Conflitos', notas: [1, 6, 7, 8] },
    { id: 6, nome: 'Oracle SQL', notas: [6, 6, 8, 9, 5] },
    { id: 7, nome: 'Programação Front-end', notas: [8, 9, 7, 8, 9] },
];

const cursosInscritosComProgresso = [
    { id: 1, nome: 'Técnicas de Negociação', progresso: "69% completo" },
    { id: 2, nome: 'Gestão do Tempo e Produtividade', progresso: "77% completo" },
    { id: 3, nome: 'Comunicação Eficaz no Ambiente Corporativo', progresso: "0% completo" },
    { id: 4, nome: 'Liderança e Gestão de Equipes', progresso: "55% completo" },
    { id: 5, nome: 'Alta Performance e Gestão de Conflitos', progresso: "80% completo" },
    { id: 6, nome: 'Oracle SQL', progresso: "100% completo" },
    { id: 7, nome: 'Programação Front-end', progresso: "100% completo" },
];

// Função para criar e inserir o card do curso
function criarCardCurso(idAva) {
    const curso = cursosComNotas.find(curso => curso.id === idAva);
    if (!curso) {
        console.error('Curso não encontrado');
        return;
    }

    const container = document.getElementById('cardContainer');

    const card = document.createElement('div');
    card.className = 'cards';

    const logo = document.createElement('img');
    logo.src = 'assets/k_logo.png';
    logo.alt = 'logo';
    logo.className = 'logo';

    const tituloCurso = document.createElement('h2');
    tituloCurso.innerHTML = `Curso: <p id="cursoConcluido">${curso.nome}</p>`;

    const listaNotas = document.createElement('ul');
    listaNotas.textContent = 'Notas das Provas:';
    curso.notas.forEach(nota => {
        const itemNota = document.createElement('li');
        itemNota.textContent = nota;
        listaNotas.appendChild(itemNota);
    });

    card.appendChild(logo);
    card.appendChild(tituloCurso);
    card.appendChild(listaNotas);

    container.appendChild(card);
}

// Função para gerar cartões de todos os cursos inscritos
function gerarCertificados() {
    const dadosCursos = JSON.parse(localStorage.getItem('dadosCursos'));
    if (!dadosCursos || !dadosCursos.cursosInscritos) {
        console.error('Nenhum curso inscrito encontrado.');
        return;
    }

    dadosCursos.cursosInscritos.forEach(idAva => criarCardCurso(idAva));
}

// Chamando a função para gerar certificados
gerarCertificados();
