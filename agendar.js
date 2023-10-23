document.addEventListener("DOMContentLoaded", function () {
    const dataInput = document.getElementById("data");
    const barbeiroInput = document.getElementById("barbeiro");
    const horarioInput = document.getElementById("horario");

    // Função para preencher os horários disponíveis
    function preencherHorarios() {
        horarioInput.innerHTML = ""; // Limpa os horários existentes

        const intervalo = 30; // Intervalo de 30 minutos
        const horasPorDia = 24;
        const minutosPorHora = 60;

        for (let hora = 9; hora <= 17; hora++) { // Alterado para 9 a 18 para limitar o horário
            for (let minuto = 0; minuto < minutosPorHora; minuto += intervalo) {
                const horaFormatada = hora.toString().padStart(2, "0");
                const minutoFormatado = minuto.toString().padStart(2, "0");
                const horario = `${horaFormatada}:${minutoFormatado}`;
                const option = document.createElement("option");
                option.value = horario;
                option.textContent = horario;
                horarioInput.appendChild(option);
            }
        }
    }

    // Quando a data ou o barbeiro são alterados, atualiza os horários disponíveis
    dataInput.addEventListener("change", preencherHorarios);
    barbeiroInput.addEventListener("change", preencherHorarios);

    // Preenche os horários iniciais
    preencherHorarios();
});
