function salvarUsuario(usuario, senha) {

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

}

function obterUsuario() {

    return localStorage.getItem("usuario");

}

function obterSenha() {

    return localStorage.getItem("senha");

}

function existeConta() {

    return obterUsuario() !== null;

}

function apagarConta() {

    localStorage.removeItem("usuario");
    localStorage.removeItem("senha");

}function salvarUsuario(usuario, senha) {

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

}

function obterUsuario() {

    return localStorage.getItem("usuario");

}

function obterSenha() {

    return localStorage.getItem("senha");

}

function existeConta() {

    return obterUsuario() !== null;

}

function apagarConta() {

    localStorage.removeItem("usuario");
    localStorage.removeItem("senha");

}