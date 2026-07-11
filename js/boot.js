const bootText = document.getElementById("boot-text");
const bootScreen = document.getElementById("boot");

const mensagens = `

BLACK TERMINAL OS v1.0

Inicializando sistema...

Carregando módulos...

Verificando memória...

Conectando ao servidor...

Criptografando conexão...

Acesso concedido!

`;

let i = 0;

function boot() {

    if (i < mensagens.length) {

        bootText.textContent += mensagens.charAt(i);

        i++;

        setTimeout(boot, 30);

    } else {

        setTimeout(() => {

            bootScreen.style.opacity = "0";

            setTimeout(() => {

                bootScreen.style.display = "none";

            }, 700);

        }, 1000);

    }

}

boot();