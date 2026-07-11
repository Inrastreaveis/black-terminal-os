const username = document.getElementById("username");
const password = document.getElementById("password");

const botao = document.getElementById("mainButton");

const titulo = document.getElementById("form-title");

const link = document.getElementById("changeMode");

const mostrarSenha = document.getElementById("showPassword");

let modoLogin = false;

// Mostrar senha
mostrarSenha.addEventListener("change", () => {

    password.type = mostrarSenha.checked ? "text" : "password";

});

// Alternar Cadastro/Login
link.addEventListener("click", (e) => {

    e.preventDefault();

    modoLogin = !modoLogin;

    if (modoLogin) {

        titulo.textContent = "Entrar";

        botao.textContent = "Login";

        link.textContent = "Criar conta";

        document.getElementById("switchForm").childNodes[0].textContent =
            "Ainda não possui uma conta? ";

    } else {

        titulo.textContent = "Crie sua conta";

        botao.textContent = "Criar Conta";

        link.textContent = "Entrar";

        document.getElementById("switchForm").childNodes[0].textContent =
            "Já possui uma conta? ";

    }

});

// Botão principal
botao.addEventListener("click", () => {

    const usuario = username.value.trim();

    const senha = password.value.trim();

    if (!usuario || !senha) {

        alert("Preencha todos os campos.");

        return;

    }

    // Cadastro
    if (!modoLogin) {

        salvarUsuario(usuario, senha);

        alert("Conta criada com sucesso!");

        link.click();

        return;

    }

    // Login
    if (
        usuario === obterUsuario() &&
        senha === obterSenha()
    ) {
        document.querySelector(".container").style.display = "none";
        document.getElementById("matrix").style.display = "none";
        document.querySelector(".overlay").style.display = "none";

        abrirDesktop();

        document.getElementById("prompt").textContent =
            `root@${usuario}:~$`;

        // Toca a música
        const musica = document.getElementById("music");
        musica.volume = 0.3;
        musica.play().catch((erro) => {
            console.log("Erro ao tocar música:", erro);
        });
    } else {
        alert("Usuário ou senha incorretos.");
    }

});

// Se já existir conta
if (existeConta()) {

    link.click();

}