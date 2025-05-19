
 // Animações de ScrollReveal
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });

// Objetos com os textos para cada idioma
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

// Adiciona o evento de clique nas bandeiras
const bandeiras = document.querySelectorAll('.bandeira');
bandeiras.forEach(bandeira => {
  bandeira.addEventListener('click', function() {
    const idioma = this.getAttribute('data-idioma');  // Obtém o idioma através do atributo data-idioma
    document.getElementById('titulo').innerText = textos[idioma].titulo;
    document.getElementById('descricao').innerText = textos[idioma].descricao;
  });
});
