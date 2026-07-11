const explorer = document.getElementById("explorer-window");

const openExplorer = document.getElementById("open-explorer");
const closeExplorer = document.getElementById("close-explorer");

const grid = document.getElementById("wallpapers-grid");

// Abrir Explorer
openExplorer.addEventListener("click", () => {
    explorer.style.display = "block";
});

// Fechar Explorer
closeExplorer.addEventListener("click", () => {
    explorer.style.display = "none";
});

// Cria os wallpapers automaticamente
for (let i = 1; i <= 200; i++) {

    const card = document.createElement("div");
    card.className = "wallpaper";

    card.innerHTML = `
        <img src="assets/wallpapers/wallpaper${i}.png"
             alt="Wallpaper ${i}"
             onerror="this.parentElement.remove()">

        <p>Wallpaper ${i}</p>

        <a href="assets/wallpapers/wallpaper${i}.png" download>
            ⬇ Download
        </a>
    `;

    grid.appendChild(card);
}