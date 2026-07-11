// =====================
// TELA DE BOOT
// =====================

const bootMensagem = `

HACKER TERMINAL v1.0

Inicializando sistema...

Carregando módulos...

Verificando memória...

Conectando...

Criptografando conexão...

Acesso concedido.

`;

const boot = document.getElementById("boot");
const bootText = document.getElementById("boot-text");

let bootIndex = 0;

function escreverBoot() {

    if (bootIndex < bootMensagem.length) {

        bootText.textContent += bootMensagem.charAt(bootIndex);

        bootIndex++;

        setTimeout(escreverBoot, 30);

    } else {

        setTimeout(() => {

            boot.style.display = "none";

            escrever(); // Só começa o texto principal depois da tela de boot

        }, 1200);

    }

}

escreverBoot();


// =====================
// TEXTO PRINCIPAL
// =====================

const texto = `

> Inicializando sistema...

> Carregando protocolos...

> Conectando ao servidor...

> Acesso concedido.

> Bem-vindo.

`;

let i = 0;

function escrever() {
    if (i < texto.length) {
        document.getElementById("typing").textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 40);
    }
}


// =====================
// MÚSICA E BOTÃO
// =====================

const music = document.getElementById("music");
const terminal = document.getElementById("terminal");

document.getElementById("enter").onclick = () => {

    music.play();

    terminal.style.display = "block";

    document.getElementById("command").focus();

};


// =====================
// TERMINAL
// =====================

const input = document.getElementById("command");
const output = document.getElementById("output");

input.addEventListener("keydown", function (e) {

    if (e.key !== "Enter") return;

    const cmd = input.value.toLowerCase();

    output.innerHTML += `> ${cmd}\n`;

    switch (cmd) {

        case "help":
            output.innerHTML += `Comandos disponíveis

help
clear
whoami
date
github

`;
            break;

        case "whoami":
            output.innerHTML += "Visitante\n\n";
            break;

        case "date":
            output.innerHTML += new Date().toString() + "\n\n";
            break;

        case "github":
            output.innerHTML += "Em breve...\n\n";
            break;

        case "clear":
            output.innerHTML = "";
            break;

        default:
            output.innerHTML += "Comando desconhecido.\nDigite help\n\n";
    }

    input.value = "";

});