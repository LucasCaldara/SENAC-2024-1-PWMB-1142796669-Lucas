const dadosTimes = {
    time1: {
        antes: [50, 55, 60, 62, 64, 65, 70, 72, 74, 75, 80, 85],
        depois: [60, 65, 70, 75, 80, 85, 90, 92, 94, 95, 100, 105]
    },
    time2: {
        antes: [20, 25, 30, 35, 50, 52, 55, 58, 60, 65, 70, 75],
        depois: [50, 55, 60, 65, 70, 75, 80, 82, 84, 90, 95, 100]
    },
    time3: {
        antes: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        depois: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]
    }
};

let tabela;

function atualiTab() {
    const time = document.getElementById('selecionar_time').value;
    const novaTabela = document.getElementById('tabela').getContext('2d');

    if (tabela) {
        tabela.destroy();
    }

    if (time) {
        const dadosAntes = dadosTimes[time].antes;
        const dadosDepois = dadosTimes[time].depois;

        tabela = new Chart(novaTabela, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [
                    {
                        label: 'Antes do Curso',
                        data: dadosAntes,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Depois do Curso',
                        data: dadosDepois,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}