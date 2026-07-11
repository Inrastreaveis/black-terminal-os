const desktop = document.getElementById("desktop");
const terminal = document.getElementById("terminal");

const desktopUser = document.getElementById("desktop-user");
const clock = document.getElementById("clock");

const terminalIcon = document.getElementById("open-terminal");

// Mostra o Desktop
function abrirDesktop() {

    desktop.style.display = "block";

    desktopUser.textContent =
        localStorage.getItem("usuario") || "Visitante";

    atualizarRelogio();

    setInterval(atualizarRelogio, 1000);

}

// Atualiza relógio
function atualizarRelogio() {

    const agora = new Date();

    clock.textContent = agora.toLocaleTimeString("pt-BR");

}

// Abrir Terminal
terminalIcon.addEventListener("click", () => {

    terminal.style.display = "block";

    document.getElementById("command").focus();

});

