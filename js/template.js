$(document).ready(function() {
    // Inicializa a aplicação quando o documento estiver pronto
    runApp();
});

function runApp() {
    // Ajusta o menu ao carregar a página
    resizeMenu();

    // Ajusta o menu ao redimensionar a janela
    $(window).resize(resizeMenu);

    // Alterna a visibilidade do menu ao clicar no botão
    $('#toggleMenu').click(toggleMenu);
}

function resizeMenu() {
    // Mostra ou esconde o menu com base na largura da janela
    if (window.innerWidth >= 640) {
        showMenu(true);
    } else {
        hideMenu();
    }
}

function toggleMenu() {
    // Alterna a visibilidade do menu ao clicar no botão
    if ($('#wrap>nav').is(':visible')) {
        hideMenu();
    } else {
        showMenu();
    }
    return false; // Previne o comportamento padrão do clique
}

function showMenu(noSmoke) {
    // Mostra o menu
    $('#wrap>nav').show('fast');

    if (noSmoke) {
        // Esconde o fundo escuro e permite rolagem
        $('#menuSmoke').hide('fast');
        $('body').css('overflow', 'auto');
    } else {
        // Mostra o fundo escuro e desabilita rolagem
        $('#menuSmoke').show('fast');
        $('body').css('overflow', 'hidden');
    }
}

function hideMenu() {
    // Esconde o menu e o fundo escuro, permite rolagem
    $('#wrap>nav').hide('fast');
    $('#menuSmoke').hide('fast');
    $('body').css('overflow', 'auto');
}
