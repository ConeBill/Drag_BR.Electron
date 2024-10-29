let rpm = 0;
let velocidade = 0;
let marcha = 1;
const maxRPM = 8000;
const incrementoRPM = 500;
const potenciaMotor = 2;
const incrementoVelocidade = 10 * potenciaMotor;

const rpmDisplay = document.getElementById('rpm');
const velocidadeDisplay = document.getElementById('velocidade');
const marchaDisplay = document.getElementById('marcha');
const carroElemento = document.getElementById('carro');
let posicaoCarro = 0;

function atualizarDisplay() {
    rpmDisplay.innerText = rpm;
    velocidadeDisplay.innerText = `${velocidade} km/h`;
    marchaDisplay.innerText = marcha;
    console.log(`Atualização do Display - RPM: ${rpm}, Velocidade: ${velocidade}, Marcha: ${marcha}`);
}

function atualizarPosicaoCarro() {
    posicaoCarro += velocidade / 10; // Ajuste a divisão para calibrar a velocidade na pista
    carroElemento.style.left = `${posicaoCarro}px`;
    if (posicaoCarro > 600) posicaoCarro = 0; // Reseta posição ao chegar no final da pista
}

function acelerar() {
    if (rpm < maxRPM) {
        rpm += incrementoRPM;
        velocidade += incrementoVelocidade * marcha;
        console.log("Acelerando... RPM atual:", rpm, "Velocidade atual:", velocidade);
        atualizarDisplay();
        atualizarPosicaoCarro();
    }
}

function trocarMarcha() {
    if (marcha < 5) {
        marcha += 1;
        rpm = rpm / 2;
        console.log("Trocando para marcha:", marcha);
        atualizarDisplay();
    }
}

function reduzirMarcha() {
    if (marcha > 1) {
        marcha -= 1;
        rpm = Math.min(rpm * 2, maxRPM);
        console.log("Reduzindo para marcha:", marcha);
        atualizarDisplay();
    }
}

document.addEventListener('keydown', (event) => {
    console.log("Tecla pressionada:", event.key);
    switch (event.key) {
        case 'ArrowUp': // Acelerar
            acelerar();
            break;
        case 'ArrowRight': // Trocar marcha para cima
            trocarMarcha();
            break;
        case 'ArrowLeft': // Reduzir marcha para baixo
            reduzirMarcha();
            break;
        default:
            console.log("Tecla não mapeada.");
    }
});

atualizarDisplay();
