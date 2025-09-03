document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('click', function (){
     botaoDeAcessibilidade.classList.toggle('rotacao-botao');
     opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
 
     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
     botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   
    })
 
     const aumentaFonteBotao = document.getElementById('aumentar-fonte');
     const diminuiFonteBotao = document.getElementById('diminuir-fonte');
     
     const alternaContraste = document.getElementById('alterna-contraste')
 
     let tamanhoAtualFonte = 1;
 
     aumentaFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte += 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuiFonteBotao.addEventListener('click', function(){
         tamanhoAtualFonte -= 0.1;
         document.body.style.fontSize = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener('click', function(){
         document.body.classList.toggle('alto-contraste')
     })
 
 
 })
 
 ScrollReveal().reveal('#inicio', { delay: 500 });
 ScrollReveal().reveal('#tropicalia', { delay: 500 });
 ScrollReveal().reveal('#galeria', { delay: 500 });
 ScrollReveal().reveal('#contato', { delay: 500 });
 document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao-acessibilidade");
  const menu  = document.getElementById("opcoes-acessibilidade");

  // Abre/fecha menu
  botao.addEventListener("click", () => {
    const aberto = botao.getAttribute("aria-expanded") === "true";
    botao.setAttribute("aria-expanded", String(!aberto));
    menu.hidden = aberto;
  });

  // Controle de fonte
  let tamanho = 1;
  document.getElementById("aumentar-fonte").addEventListener("click", () => {
    tamanho = Math.min(2, tamanho + 0.1);
    document.body.style.fontSize = `${tamanho}rem`;
  });

  document.getElementById("diminuir-fonte").addEventListener("click", () => {
    tamanho = Math.max(0.8, tamanho - 0.1);
    document.body.style.fontSize = `${tamanho}rem`;
  });

  // Contraste
  document.getElementById("alterna-contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
  });
});
