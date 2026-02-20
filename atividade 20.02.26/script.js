
function mostrarData() {
    const data = new Date();

    const diasSemana = [
        "domingo", "segunda-feira", "terça-feira",
        "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
    ];

    const meses = [
        "janeiro", "fevereiro", "março", "abril",
        "maio", "junho", "julho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"
    ];

    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    document.getElementById("data").innerText =
        `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

mostrarData();




let intervalo;

function atualizarRelogio() {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // EXTRA: colocar zero à esquerda
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    document.getElementById("relogio").innerText =
        `${horas}:${minutos}:${segundos}`;
}

intervalo = setInterval(atualizarRelogio, 1000);
atualizarRelogio();

function pausarRelogio() {
    clearInterval(intervalo);
}




function mostrarNome() {

    const input = document.getElementById("nomeInput");
    let nome = input.value.trim(); // manipulação de string nome

    const mensagem = document.getElementById("mensagem");

    // validacao
    if (nome === "") {
        mensagem.innerText = " Por favor, digite um nome válido.";
        mensagem.style.color = "red";
        return; // controle de fluxo
    }

    mensagem.innerText = `Olá, ${nome}! Seja bem-vindo!`;
    mensagem.style.color = "green";
}


//botao limpar

function limparNome() {
    const input = document.getElementById("nomeInput");
    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("contador");

    input.value = "";
    mensagem.innerText = "";
    contador.innerText = "0";

    document.getElementById("btnEnviar").disabled = true;
}


//contador de caracteres

function contarCaracteres() {
    const input = document.getElementById("nomeInput");
    const contador = document.getElementById("contador");
    const botao = document.getElementById("btnEnviar");

    let quantidade = input.value.length;

    contador.innerText = quantidade;

    
    if (quantidade === 0) {
        botao.disabled = true;
    } else {
        botao.disabled = false;
    }
}


// Desativar botão 
document.getElementById("btnEnviar").disabled = true;