document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Abre/fecha o menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // Controle de tamanho de fonte
    let tamanhoAtualFonte = 1;

    document.getElementById('aumentar-fonte').addEventListener('click', function(){
        tamanhoAtualFonte = Math.min(2, tamanhoAtualFonte + 0.1);
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    document.getElementById('diminuir-fonte').addEventListener('click', function(){
        tamanhoAtualFonte = Math.max(0.8, tamanhoAtualFonte - 0.1);
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Alterna contraste
    const alternaContraste = document.getElementById('alterna-contraste');
    alternaContraste.addEventListener('click', function(){
        // Alterna a classe de alto contraste no body
        document.body.classList.toggle('alto-contraste');
        
        // Adiciona ou remove a classe 'ativo' do botão para indicar o estado
        alternaContraste.classList.toggle('ativo');
    });

    // ScrollReveal para animações
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});
