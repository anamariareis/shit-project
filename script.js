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
 ScrollReveal().reveal('#galeria', { delay: 500 });

 const textos = {
  pt: {
    titulo: "Conexão Campo-Cidade",
    descricao: "Aprendendo juntos como o campo e a cidade se completam"
  },
  en: {
    titulo: "Countryside-City Connection",
    descricao: "Learning together how rural and urban life complete each other"
  },
  es: {
    titulo: "Conexión Campo-Ciudad",
    descricao: "Aprendiendo juntos cómo el campo y la ciudad se complementan"
  },
  pl: {
    titulo: "Połączenie Wieś-Miasto",
    descricao: "Uczymy się razem, jak wieś i miasto się uzupełniają"
  }
};

document.getElementById('idioma').addEventListener('change', function () {
  const lang = this.value;
  document.getElementById('titulo').innerText = textos[lang].titulo;
  document.getElementById('descricao').innerText = textos[lang].descricao;
});