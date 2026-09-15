const btnMenu = document.getElementById("btn_barra");
const btnFechar = document.getElementById("btn-fechar");
const menu = document.getElementById("menu-mobile");
const overlay = document.getElementById("overlay");
const linksMenuMobile = document.querySelectorAll(".menu-mobile a");

function abrirMenu() {
    menu.classList.add("abrir_menu");
    overlay.classList.add("ativo");
    btnMenu.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function fecharMenu() {
    menu.classList.remove("abrir_menu");
    overlay.classList.remove("ativo");
    btnMenu.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

btnMenu.addEventListener("click", abrirMenu);
btnFechar.addEventListener("click", fecharMenu);
overlay.addEventListener("click", fecharMenu);

linksMenuMobile.forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        fecharMenu();
    }
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    /*
       EDITE AQUI:
       coloque seu número com código do país + DDD + número,
       somente números.
       Exemplo: 5547999999999
    */
    const telefone = "554796741534";

    if (!nome || !mensagem) {
        return;
    }

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank", "noopener,noreferrer");
});

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
