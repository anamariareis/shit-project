const bandeiras = document.querySelectorAll('.bandeira');

// Objeto com todos os textos para cada idioma
const textos = {
    pt: {
        titulo: "Conexão Campo-Cidade",
        descricao: "Aprendendo juntos como o campo e a cidade se completam",
        botoes: {
            inicio: "Início",
            artigos: "Artigos",
            galeria: "Galeria"
        },
        artigos: {
            titulo: "Artigos",
            artigo1: {
                titulo: "Alimentação",
                artigo1Texto: "A alimentação é muito mais do que o ato de comer. É um elo que nos liga diretamente ao campo, onde tudo começa. Celebrar a conexão entre campo e cidade é reconhecer que, antes de chegar à nossa mesa, cada alimento percorre um longo caminho: é plantado, cuidado, colhido e transportado com dedicação por trabalhadores rurais que muitas vezes vivem longe dos centros urbanos, mas tão próximos do nosso cotidiano. Valorizar essa conexão é também valorizar a agricultura familiar, responsável por grande parte dos alimentos frescos que consumimos. São pequenos produtores que mantêm tradições, respeitam a natureza e promovem diversidade alimentar. Nas cidades, movimentos como feiras locais, hortas urbanas e programas de alimentação escolar com produtos do campo são exemplos de como podemos estreitar esses laços. Quando entendemos de onde vem nossa comida e quem está por trás dela, passamos a fazer escolhas mais conscientes e sustentáveis. Alimentar-se, nesse contexto, é também um ato de reconhecimento, gratidão e celebração dessa parceria essencial entre campo e cidade.",
            },
            artigo2: {
                titulo: "Inovação",
                artigo2Texto: "A conexão entre campo e cidade está sendo cada vez mais fortalecida pela inovação. Tecnologias que antes pareciam distantes da realidade rural agora fazem parte do dia a dia de muitos produtores. Drones, sensores de umidade no solo, sistemas de irrigação inteligentes e aplicativos de gestão agrícola são ferramentas que aumentam a produtividade, reduzem desperdícios e respeitam o meio ambiente. Ao mesmo tempo, as cidades se beneficiam dessas inovações. A rastreabilidade dos alimentos, por exemplo, garante mais segurança e qualidade ao consumidor urbano. Plataformas digitais de compra direta do produtor permitem que as pessoas da cidade tenham acesso a alimentos frescos e saudáveis, enquanto apoiam os trabalhadores do campo. Mas a inovação vai além da tecnologia: ela também está na maneira como organizamos a produção, o consumo e a educação. Escolas que levam os alunos para conhecer plantações, projetos urbanos que estimulam a compostagem e feiras colaborativas são exemplos de como ideias simples podem transformar realidades. Inovar é construir pontes. E, quando essas pontes conectam o campo e a cidade, todos ganham: o produtor, o consumidor e o planeta.",
            },
            artigo3: {
                titulo: "Sustentabilidade",
                artigo3Texto: "Falar em sustentabilidade é falar sobre equilíbrio — entre o que produzimos e o que consumimos, entre o que a terra oferece e o que devolvemos a ela. E é justamente na conexão entre campo e cidade que esse equilíbrio pode ser fortalecido. O campo é responsável por fornecer alimentos, água, energia e matérias-primas. A cidade, por sua vez, concentra tecnologia, conhecimento e consumo. Quando esses dois espaços se unem com responsabilidade, é possível criar soluções que beneficiam a todos: agricultura de baixo impacto ambiental, transporte inteligente, redução de embalagens, uso consciente da água e energia limpa são apenas alguns exemplos. A sustentabilidade também está na educação: ensinar crianças e jovens sobre a importância da natureza, da produção local e do consumo consciente é preparar cidadãos mais atentos e comprometidos com o futuro. Quando a cidade reconhece o valor do campo e retribui com respeito, parceria e inovação, estamos promovendo não só uma relação sustentável, mas uma forma de vida mais justa e equilibrada. Celebrar essa conexão é plantar as sementes de um mundo melhor."
            }
        }
    },
    en: {
        titulo: "Countryside-City Connection",
        descricao: "Learning together how rural and urban life complete each other",
        botoes: {
            inicio: "Home",
            artigos: "Articles",
            galeria: "Gallery"
        },
        artigos: {
            titulo: "Articles",
            artigo1: {
                titulo: "Food",
                artigo1Texto: "Food is much more than just the act of eating. It is a link that connects us directly to the countryside, where everything begins. Celebrating the connection between the countryside and the city means recognizing that, before reaching our table, each food item travels a long way: it is planted, cared for, harvested and transported with dedication by rural workers who often live far from urban centers, but are so close to our daily lives. Valuing this connection also means valuing family farming, which is responsible for much of the fresh food we consume. These are small producers who maintain traditions, respect nature and promote food diversity. In cities, movements such as local markets, urban gardens and school feeding programs with rural products are examples of how we can strengthen these ties. When we understand where our food comes from and who is behind it, we start to make more conscious and sustainable choices. Eating, in this context, is also an act of recognition, gratitude and celebration of this essential partnership between the countryside and the city.",
            },
            artigo2: {
                titulo: "Innovation",
                artigo2Texto: "The connection between the countryside and the city is increasingly strengthened by innovation. Technologies that once seemed distant from rural reality are now part of the daily lives of many producers. Drones, soil moisture sensors, smart irrigation systems and agricultural management apps are tools that increase productivity, reduce waste and respect the environment. At the same time, cities benefit from these innovations. Food traceability, for example, ensures greater safety and quality for urban consumers. Digital platforms for purchasing directly from producers allow city dwellers to have access to fresh and healthy food, while supporting farm workers. But innovation goes beyond technology: it is also present in the way we organize production, consumption and education. Schools that take students to see plantations, urban projects that encourage composting and collaborative fairs are examples of how simple ideas can transform realities. Innovation is about building bridges. And when these bridges connect the countryside and the city, everyone wins: the producer, the consumer and the planet.",
            },
            artigo3: {
                titulo: "Sustainability",
                artigo3Texto: "To talk about sustainability is to talk about balance — between what we produce and what we consume, between what the land offers and what we give back to it. And it is precisely in the connection between the countryside and the city that this balance can be strengthened. The countryside is responsible for providing food, water, energy and raw materials. The city, in turn, concentrates technology, knowledge and consumption. When these two spaces come together responsibly, it is possible to create solutions that benefit everyone: low-impact agriculture, smart transportation, reduced packaging, conscious use of water and clean energy are just a few examples. Sustainability is also in education: teaching children and young people about the importance of nature, local production and conscious consumption is preparing citizens who are more attentive and committed to the future. When the city recognizes the value of the countryside and reciprocates with respect, partnership and innovation, we are promoting not only a sustainable relationship, but a more fair and balanced way of life. Celebrating this connection is planting the seeds of a better world."
            }
        }
    },
    es: {
        titulo: "Conexión Campo-Ciudad",
        descricao: "Aprendiendo juntos cómo el campo y la ciudad se complementan",
        botoes: {
            inicio: "Inicio",
            artigos: "Artículos",
            galeria: "Galería"
        },
        artigos: {
            titulo: "Artículos",
            artigo1: {
                titulo: "Alimentación",
                artigo1Texto: "La comida es mucho más que el acto de comer. Es un vínculo que nos conecta directamente con el campo, donde todo comienza. Celebrar la conexión entre el campo y la ciudad es reconocer que, antes de llegar a nuestra mesa, cada alimento recorre un largo camino: es plantado, cuidado, cosechado y transportado con dedicación por trabajadores rurales que muchas veces viven lejos de los centros urbanos, pero tan cerca de nuestra vida cotidiana. Valorar esta conexión significa también valorar la agricultura familiar, responsable de gran parte de los alimentos frescos que consumimos. Son pequeños productores que mantienen las tradiciones, respetan la naturaleza y promueven la diversidad alimentaria. En las ciudades, movimientos como ferias locales, huertos urbanos y programas de alimentación escolar con productos rurales son ejemplos de cómo podemos fortalecer estos lazos. Cuando entendemos de dónde proviene nuestra comida y quién está detrás de ella, empezamos a tomar decisiones más conscientes y sostenibles. Comer, en este contexto, es también un acto de reconocimiento, gratitud y celebración de esta asociación esencial entre el campo y la ciudad.",
            },
            artigo2: {
                titulo: "Innovación",
                artigo2Texto: "La conexión entre el campo y la ciudad se fortalece cada vez más gracias a la innovación. Tecnologías que antes parecían alejadas de la realidad rural hoy forman parte de la vida cotidiana de muchos productores. Los drones, los sensores de humedad del suelo, los sistemas de riego inteligentes y las aplicaciones de gestión agrícola son herramientas que aumentan la productividad, reducen los residuos y respetan el medio ambiente. Al mismo tiempo, las ciudades se benefician de estas innovaciones. La trazabilidad de los alimentos, por ejemplo, garantiza mayor seguridad y calidad para los consumidores urbanos. Las plataformas digitales de compra directa a la granja permiten a los habitantes de las ciudades acceder a alimentos frescos y saludables y, al mismo tiempo, apoyan a los trabajadores agrícolas. Pero la innovación va más allá de la tecnología: está también en la forma en que organizamos la producción, el consumo y la educación. Escuelas que llevan a los alumnos a ver plantaciones, proyectos urbanos que fomentan el compostaje y ferias colaborativas son ejemplos de cómo ideas simples pueden transformar realidades. Innovar es construir puentes. Y cuando estos puentes conectan el campo y la ciudad, todos ganan: el productor, el consumidor y el planeta.",
            },
            artigo3: {
                titulo: "Sostenibilidad",
                artigo3Texto: "Hablar de sostenibilidad significa hablar de equilibrio: entre lo que producimos y lo que consumimos, entre lo que la tierra nos ofrece y lo que le devolvemos. Y es precisamente en la conexión entre el campo y la ciudad donde este equilibrio puede fortalecerse. El campo es responsable de proporcionar alimentos, agua, energía y materias primas. La ciudad, a su vez, concentra tecnología, conocimiento y consumo. Cuando estos dos espacios se unen de manera responsable, es posible crear soluciones que benefician a todos: agricultura de bajo impacto, transporte inteligente, reducción de envases, uso consciente del agua y energía limpia son solo algunos ejemplos. La sostenibilidad también forma parte de la educación: enseñar a niños y jóvenes la importancia de la naturaleza, la producción local y el consumo consciente es preparar ciudadanos más atentos y comprometidos con el futuro. Cuando la ciudad reconoce el valor del campo y responde con respeto, asociación e innovación, estamos promoviendo no sólo una relación sostenible, sino una forma de vida más justa y equilibrada. Celebrar esta conexión es plantar las semillas de un mundo mejor."
            }
        }
    },
    pl: {
        titulo: "Połączenie Wieś-Miasto",
        descricao: "Uczymy się razem, jak wieś i miasto się uzupełniają",
        botoes: {
            inicio: "Początek",
            artigos: "Artykuły",
            galeria: "Galeria"
        },
        artigos: {
            titulo: "Artykuły",
            artigo1: {
                titulo: "Żywność",
                artigo1Texto: "Jedzenie to coś więcej niż tylko czynność jedzenia. Jest to ogniwo łączące nas bezpośrednio z polem, gdzie wszystko się zaczyna. Celebrowanie związku wsi z miastem oznacza uznanie, że zanim produkt spożywczy trafi na nasz stół, pokonuje długą drogę: jest sadzony, pielęgnowany, zbierany i transportowany z oddaniem przez pracowników wiejskich, którzy często mieszkają daleko od ośrodków miejskich, ale tak blisko naszego codziennego życia. Docenianie tej więzi oznacza również docenianie rolnictwa rodzinnego, które w dużej mierze odpowiada za świeżą żywność, którą spożywamy. Są to drobni producenci, którzy kultywują tradycje, szanują przyrodę i promują różnorodność żywności. Przykładami sposobów zacieśniania tych więzi w miastach są inicjatywy takie jak lokalne jarmarki, miejskie ogrody i programy żywienia w szkołach produktami wiejskimi. Gdy zrozumiemy, skąd pochodzi nasza żywność i kto za nią stoi, zaczniemy podejmować bardziej świadome i zrównoważone wybory. W tym kontekście jedzenie jest również wyrazem uznania, wdzięczności i celebracji tej istotnej współpracy między wsią a miastem.",
            },
            artigo2: {
                titulo: "Innowacja",
                artigo2Texto: "Powiązania między wsią i miastem są coraz bardziej wzmacniane dzięki innowacjom. Technologie, które kiedyś wydawały się odległe od wiejskiej rzeczywistości, dziś stanowią część codziennego życia wielu producentów. Drony, czujniki wilgotności gleby, inteligentne systemy nawadniające i aplikacje do zarządzania rolnictwem to narzędzia, które zwiększają produktywność, ograniczają ilość odpadów i przyczyniają się do ochrony środowiska. Jednocześnie miasta czerpią korzyści z tych innowacji. Przykładowo możliwość śledzenia żywności gwarantuje większe bezpieczeństwo i jakość dla konsumentów w miastach. Cyfrowe platformy zakupów bezpośrednio do gospodarstw rolnych zapewniają mieszkańcom miast dostęp do świeżej, zdrowej żywności, a jednocześnie wspierają pracowników rolnych. Ale innowacja wykracza poza technologię: dotyczy również sposobu, w jaki organizujemy produkcję, konsumpcję i edukację. Szkoły, w których uczniowie mogą zobaczyć plantacje, projekty miejskie zachęcające do kompostowania oraz targi współpracy to przykłady tego, jak proste pomysły mogą zmienić rzeczywistość. Innowacja polega na budowaniu mostów. A kiedy mosty te połączą wieś z miastem, wszyscy na tym zyskują: producent, konsument i planeta.",
            },
            artigo3: {
                titulo: "Zrównoważony rozwój",
                artigo3Texto: "Mówiąc o zrównoważonym rozwoju, mówimy o równowadze – między tym, co produkujemy, a tym, co konsumujemy, między tym, co oferuje nam ziemia, a tym, co jej oddajemy. Właśnie w powiązaniu wsi i miasta równowaga ta może zostać wzmocniona. Obszar ten jest odpowiedzialny za dostarczanie żywności, wody, energii i surowców. Miasto z kolei koncentruje technologię, wiedzę i konsumpcję. Gdy te dwie przestrzenie łączą się w sposób odpowiedzialny, możliwe jest stworzenie rozwiązań, które przynoszą korzyści wszystkim: rolnictwo o niskim wpływie na środowisko, inteligentny transport, redukcja opakowań, świadome zużycie wody i czysta energia to tylko kilka przykładów. Zrównoważony rozwój jest również częścią edukacji: ucząc dzieci i młodzież o znaczeniu przyrody, lokalnej produkcji i świadomej konsumpcji przygotowujemy obywateli, którzy są bardziej uważni i zaangażowani w przyszłość. Kiedy miasto dostrzega wartość terenów wiejskich i odwzajemnia się szacunkiem, partnerstwem i innowacyjnością, promujemy nie tylko zrównoważone relacje, ale także bardziej sprawiedliwy i zrównoważony sposób życia. Świętowanie tego związku jest sadzeniem nasion lepszego świata."
            }
        }
    }
};

// Função para alterar todos os textos de acordo com o idioma
function alterarTextoIdioma(idioma) {
    // Títulos principais
    document.getElementById('titulo').innerText = textos[idioma].titulo;
    document.getElementById('descricao').innerText = textos[idioma].descricao;

    // Botões
    document.getElementById('botao-inicio').innerText = textos[idioma].botoes.inicio;
    document.getElementById('botao-artigos').innerText = textos[idioma].botoes.artigos;
    document.getElementById('botao-galeria').innerText = textos[idioma].botoes.galeria;

    // Artigos
    document.getElementById('titulo-artigos').innerText = textos[idioma].artigos.titulo;

    document.getElementById('titulo-artigo-1').innerText = textos[idioma].artigos.artigo1.titulo;
    document.getElementById('texto-artigo-1').innerText = textos[idioma].artigos.artigo1.texto;

    document.getElementById('titulo-artigo-2').innerText = textos[idioma].artigos.artigo2.titulo;
    document.getElementById('texto-artigo-2').innerText = textos[idioma].artigos.artigo2.texto;

    document.getElementById('titulo-artigo-3').innerText = textos[idioma].artigos.artigo3.titulo;
    document.getElementById('texto-artigo-3').innerText = textos[idioma].artigos.artigo3.texto;
}

// Adicionar evento de clique para cada bandeira
bandeiras.forEach(bandeira => {
    bandeira.addEventListener('click', function() {
        // Pega o idioma de cada bandeira através do atributo data-idioma
        const idioma = this.getAttribute('data-idioma');
        alterarTextoIdioma(idioma);
    });
});
