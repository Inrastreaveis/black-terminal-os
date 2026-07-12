    const input = document.getElementById("command");
    const output = document.getElementById("output");

    // Arquivos fictícios
    const arquivos = {
        "sobre.txt": `BlackTerminal OS

    Projeto criado para aprender
    HTML, CSS e JavaScript.`,

        "projetos.txt": `Projetos

    - BlackTerminal OS
    - Portfolio
    - Em breve...`
    };

    input.addEventListener("keydown", function (e) {

        if (e.key !== "Enter") return;

        const cmd = input.value.trim();

        if (cmd === "") return;

        const usuario = localStorage.getItem("usuario") || "user";

        output.innerHTML += `<span style="color:#00ff66;">root@${usuario}:~$</span> ${cmd}\n`;

        switch (cmd.toLowerCase()) {

            case "help":

                output.innerHTML += `
    ═══════════════════════════════

    COMANDOS DISPONÍVEIS

    help       → Lista comandos
    whoami     → Mostra usuário
    date       → Data atual
    time       → Hora atual
    clear      → Limpa terminal
    about      → Sobre o sistema
    neofetch   → Informações do sistema
    echo       → Escreve um texto
    ls         → Lista arquivos
    pwd        → Diretório atual
    cat        → Lê um arquivo
    logout     → Sai da sessão

    ═══════════════════════════════

    `;

                break;

            case "whoami":

                output.innerHTML += `
    Usuário : ${usuario}
    Sistema : BlackTerminal OS
    Status  : Online

    `;

                break;

            case "date":

                output.innerHTML += new Date().toLocaleDateString() + "\n\n";

                break;

            case "time":

                output.innerHTML += new Date().toLocaleTimeString() + "\n\n";

                break;

            case "about":

                output.innerHTML += `
    BlackTerminal OS

    Projeto criado para estudo de HTML, CSS e JavaScript.

    Versão: 1.0

    `;

                break;

            case "neofetch":

                output.innerHTML += `
    ██████╗ ██╗      █████╗  ██████╗██╗  ██╗
    ██╔══██╗██║     ██╔══██╗██╔════╝██║ ██╔╝
    ██████╔╝██║     ███████║██║     █████╔╝
    ██╔══██╗██║     ██╔══██║██║     ██╔═██╗
    ██████╔╝███████╗██║  ██║╚██████╗██║  ██╗
    ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝

    Sistema : BlackTerminal OS
    Versão  : 1.0
    Usuário : ${usuario}
    Status  : Online
    Motor   : JavaScript
    Tema    : Neon Green

    `;

                break;

            case "ls":

                output.innerHTML += Object.keys(arquivos).join("\n") + "\n\n";

                break;

            case "pwd":

                output.innerHTML += `/home/${usuario}\n\n`;

                break;

            case "echo":

                output.innerHTML += `
    Uso:

    echo sua mensagem

    `;

                break;

            case "logout":

                location.reload();

                break;

            case "clear":

                output.innerHTML = "";

                input.value = "";

                return;

            default:

                if (cmd.startsWith("echo ")) {

                    output.innerHTML += cmd.substring(5) + "\n\n";

                }

                else if (cmd.startsWith("cat ")) {

                    const nome = cmd.substring(4);

                    if (arquivos[nome]) {

                        output.innerHTML += arquivos[nome] + "\n\n";

                    } else {

                        output.innerHTML += "Arquivo não encontrado.\n\n";

                    }

                }

                else {

                    output.innerHTML +=
                        "Comando desconhecido.\nDigite help\n\n";

                }

        }

        output.scrollTop = output.scrollHeight;

        input.value = "";

    });
    const closeTerminal = document.getElementById("close-terminal");

closeTerminal.addEventListener("click", () => {
    terminal.style.display = "none";
});