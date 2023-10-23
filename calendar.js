// Referências aos elementos do calendário
const btnPrev = document.getElementById('btn_prev');
const btnNext = document.getElementById('btn_next');
const btnPrevYear = document.getElementById('btn_prev_year');
const btnNextYear = document.getElementById('btn_next_year');
const mesElement = document.getElementById('mes');
const diasElement = document.getElementById('dias');

// Variável para controlar o mês e o ano atual
let mesAtual = 3; // Abril (índice 3)
let anoAtual = new Date().getFullYear(); // Obtém o ano atual

// Função para atualizar o calendário com base no mês e ano atuais
function atualizarCalendario() {
    // Atualiza o nome do mês e ano
    mesElement.textContent = meses[mesAtual] + ' ' + anoAtual;

    // Limpa os dias anteriores
    diasElement.innerHTML = '';

    // Preenche o calendário com os dias
    for (const semana of calendarioData) {
        const tr = document.createElement('tr');
        for (const dia of semana) {
            const td = document.createElement('td');
            td.textContent = dia;
            tr.appendChild(td);
        }
        diasElement.appendChild(tr);
    }

    // Destacar o dia atual (você pode personalizar isso)
    const diaAtual = new Date().getDate();
    const celulas = document.querySelectorAll('#dias td');
    celulas.forEach((celula, index) => {
        if (index + 1 === diaAtual) {
            celula.classList.add('dia-atual');
        }
    });
}

// Inicializa o calendário
atualizarCalendario();

// Evento para ir para o mês anterior
btnPrev.addEventListener('click', () => {
    mesAtual = (mesAtual - 1 + 12) % 12;
    if (mesAtual === 11) {
        anoAtual -= 1; // Diminui o ano quando voltamos para janeiro
    }
    atualizarCalendario();
});

// Evento para ir para o próximo mês
btnNext.addEventListener('click', () => {
    mesAtual = (mesAtual + 1) % 12;
    if (mesAtual === 0) {
        anoAtual += 1; // Aumenta o ano quando avançamos para janeiro
    }
    atualizarCalendario();
});

// Evento para ir para o ano anterior
btnPrevYear.addEventListener('click', () => {
    anoAtual -= 1;
    atualizarCalendario();
});

// Evento para ir para o próximo ano
btnNextYear.addEventListener('click', () => {
    anoAtual += 1;
    atualizarCalendario();
});
