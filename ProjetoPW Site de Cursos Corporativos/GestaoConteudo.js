let exemploConteudo = [
    { id: 1, title: 'Curso Interativo 1', teams: ['teamA'] },
    { id: 2, title: 'Documento 1', teams: ['teamA', 'teamB'] },
    { id: 3, title: 'Apresentação 1', teams: ['teamC'] },
    { id: 4, title: 'Vídeo 1', teams: ['teamB'] },
];

function colocarArquivos() {
    const arquivosInput = document.getElementById('arquivosInput');
    const selecionarTime = document.getElementById('selecionarTime');
    const time = selecionarTime.value;

    if (arquivosInput.files.length > 0 && time) {
        const novoItem = {
            id: exemploConteudo.length + 1,
            title: arquivosInput.files[0].name,
            teams: [time]
        };
        exemploConteudo.push(novoItem);
        mostrar();
    } else {
        alert('Por favor, selecione uma equipe e um arquivo.');
    }
}

function mostrar() {
    const selecionarTime = document.getElementById('selecionarTime');
    const time = selecionarTime.value;
    const containerTime = document.getElementById('containerTime');
    containerTime.innerHTML = '';

    if (time) {
        const conteudosTime = exemploConteudo.filter(content => content.teams.includes(time));
        conteudosTime.forEach(content => {
            const timeItem = document.createElement('div');
            timeItem.classList.add('team-item');
            timeItem.innerHTML = `
                <strong>${content.title}</strong>
                <div class="buttons">
                    <button onclick="tirarConteudo(${content.id}, '${time}')">Remover</button>
                </div>
            `;
            containerTime.appendChild(timeItem);
        });
    }
}

function tirarConteudo(contentId, team) {
    const conteudo = exemploConteudo.find(c => c.id === contentId);
    if (conteudo) {
        conteudo.teams = conteudo.teams.filter(t => t !== team);
        mostrar();
    }
}

mostrar();
