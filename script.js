const agendamentos = [
    { nome: 'Agendamento 1', tempoTotal: 30 * 60, tempoRestante: 30 * 60, cronometroID: 'cronometro1' },
    { nome: 'Agendamento 2', tempoTotal: 30 * 60, tempoRestante: 45 * 60, cronometroID: 'cronometro2' },
    { nome: 'Agendamento 3', tempoTotal: 30 * 60, tempoRestante: 30 * 60, cronometroID: 'cronometro3' }
];

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return `${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
}

function atualizarContagem() {
    const segundosRestantes = agendamentos.reduce((total, agendamento) => total + agendamento.tempoRestante, 0);
    document.getElementById('contagem').textContent = formatarTempo(segundosRestantes);
}

function atualizarCronometros() {
    agendamentos.forEach(agendamento => {
        const cronometro = document.getElementById(agendamento.cronometroID);
        cronometro.textContent = formatarTempo(agendamento.tempoRestante);
    });
}

function iniciarCronometro() {
    function atualizarCronometro() {
        if (agendamentos[0].tempoRestante > 0) {
            agendamentos[0].tempoRestante--;
        } else if (agendamentos[1].tempoRestante > 0) {
            agendamentos[1].tempoRestante--;
        } else if (agendamentos[2].tempoRestante > 0) {
            agendamentos[2].tempoRestante--;
        }
        atualizarCronometros();
        atualizarContagem();
    }

    const interval = setInterval(atualizarCronometro, 1000);

    // Você pode parar o intervalo quando desejar (por exemplo, quando um agendamento é concluído).
    // clearInterval(interval);
}

// Atualize a contagem e os cronômetros inicialmente
atualizarContagem();
atualizarCronometros();

// Inicie o cronômetro automaticamente
iniciarCronometro();
