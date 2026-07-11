const playerWindow = document.getElementById("player-window");
const openPlayer = document.getElementById("open-player");
const closePlayer = document.getElementById("close-player");

const audio = document.getElementById("music");
const playBtn = document.getElementById("playMusic");
const prevBtn = document.getElementById("prevMusic");
const nextBtn = document.getElementById("nextMusic");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const title = document.getElementById("music-title");
const list = document.getElementById("music-list");
const capa = document.getElementById("album-cover");

// =====================
// PLAYLIST
// =====================

const playlist = [
    {
        nome: "Consume",
        arquivo: "assets/music/Consume.mp3"
    },
    {
        nome: "hey come",
        arquivo: "assets/music/hey come.mp3"
    },
    {
        nome: "Meant To Be",
        arquivo: "assets/music/Meant To Be.mp3"
    },
    {
        nome: "Misery",
        arquivo: "assets/music/misery.mp3"
    }
];

let atual = 0;

// =====================
// CARREGA MÚSICA
// =====================

function carregarMusica() {

    audio.src = playlist[atual].arquivo;

    title.textContent = playlist[atual].nome;

}

carregarMusica();

// =====================
// CRIA PLAYLIST
// =====================

playlist.forEach((musica, index) => {

    const li = document.createElement("li");

    li.textContent = "🎵 " + musica.nome;

    li.style.cursor = "pointer";

    li.style.padding = "10px";

    li.onclick = () => {

        atual = index;

        carregarMusica();

        audio.play();

        playBtn.textContent = "⏸️";

        capa.classList.add("girando");

    };

    list.appendChild(li);

});

// =====================
// ABRIR PLAYER
// =====================

openPlayer.onclick = () => {

    playerWindow.style.display = "block";

};

// =====================
// FECHAR PLAYER
// =====================

closePlayer.onclick = () => {

    playerWindow.style.display = "none";

};

// =====================
// PLAY / PAUSE
// =====================

playBtn.onclick = () => {

    if (audio.paused) {

        audio.play();

        playBtn.textContent = "⏸️";

        capa.classList.add("girando");

    } else {

        audio.pause();

        playBtn.textContent = "▶️";

        capa.classList.remove("girando");

    }

};

// =====================
// PRÓXIMA
// =====================

nextBtn.onclick = () => {

    atual++;

    if (atual >= playlist.length)
        atual = 0;

    carregarMusica();

    audio.play();

    playBtn.textContent = "⏸️";

    capa.classList.add("girando");

};

// =====================
// ANTERIOR
// =====================

prevBtn.onclick = () => {

    atual--;

    if (atual < 0)
        atual = playlist.length - 1;

    carregarMusica();

    audio.play();

    playBtn.textContent = "⏸️";

    capa.classList.add("girando");

};

// =====================
// VOLUME
// =====================

volume.oninput = () => {

    audio.volume = volume.value;

};

// =====================
// BARRA DE PROGRESSO
// =====================

audio.ontimeupdate = () => {

    if (!audio.duration) return;

    progress.value =
        (audio.currentTime / audio.duration) * 100;

};

// =====================
// AVANÇAR NA MÚSICA
// =====================

progress.oninput = () => {

    if (!audio.duration) return;

    audio.currentTime =
        (progress.value / 100) * audio.duration;

};

// =====================
// QUANDO A MÚSICA ACABAR
// =====================

audio.onended = () => {

    capa.classList.remove("girando");

    nextBtn.click();

};

audio.volume = 0.30;

// ===============================
// JANELA ARRASTÁVEL
// ===============================

let movendo = false;

let offsetX = 0;
let offsetY = 0;

const header = document.getElementById("player-header");

header.addEventListener("mousedown", (e) => {

    movendo = true;

    offsetX = e.clientX - playerWindow.offsetLeft;
    offsetY = e.clientY - playerWindow.offsetTop;

});

document.addEventListener("mousemove", (e) => {

    if (!movendo) return;

    playerWindow.style.left =
        (e.clientX - offsetX) + "px";

    playerWindow.style.top =
        (e.clientY - offsetY) + "px";

});

document.addEventListener("mouseup", () => {

    movendo = false;

});