const Obra = require("./obraModel")
const mongoose = require('mongoose')

mongoose.connect("",{
    dbName:""
})
.then(() =>{
    const aPersistenciaDaMemoria = new Obra({
        nomeObra:'A Persistência da Memória',
        fk_nomeArtista:'Salvador Dalí',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://uploads5.wikiart.org/images/salvador-dali/the-persistence-of-memory-1931.jpg",
        ano:1931,
        descricao:"Uma das obras mais icônicas de Dalí, conhecida por seus relógios derretidos em um cenário deserto, evocando uma sensação de tempo distorcido e sonho.",
        index:28
    })

    const cisnesRefletindoElefantes = new Obra({
        nomeObra:'Cisnes Refletindo Elefantes',
        fk_nomeArtista:'Salvador Dalí',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://pt.wahooart.com/A55A04/w.nsf/O/BRUE-5ZKF5R/$File/Salvador+Dali+-+Swans+Reflecting+Elephants+1937+.JPG",
        ano:1937,
        descricao:"Pintura surrealista que desafia a percepção da realidade. A imagem retrata cisnes na água, cujos reflexos se transformam em elefantes. Dalí utiliza esta representação para explorar o conceito de dualidade e ilusão.",
        index:29
    })

    const oGrandeMasturbador = new Obra({
        nomeObra:'O Grande Masturbador',
        fk_nomeArtista:'Salvador Dalí',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://uploads1.wikiart.org/images/salvador-dali/the-great-masturbator-1929.jpg",
        ano:1929,
        descricao:"Nesta obra, uma figura central e simbólica representa a sexualidade, com elementos fálicos e sensuais presentes de maneira enigmática. A paisagem que a rodeia é um cenário onírico e perturbador, característico do estilo surrealista de Dalí.",
        index:30
    })

    const oElefanteCelebes = new Obra({
        nomeObra:'O Elefante Celebes',
        fk_nomeArtista:'Max Ernst',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://uploads5.wikiart.org/images/max-ernst/the-elephant-celebes-1921.jpg",
        ano:1921,
        descricao:"Pintura surrealista intrigante que desafia a percepção. Nela, uma figura distorcida e enigmática, algumas vezes interpretada como um elefante, é apresentada de forma altamente simbólica e ilógica. Ernst brinca com a dualidade da realidade e do mundo dos sonhos, convidando o espectador a explorar o inesperado e o surreal.",
        index:31
    })

    const oOlhoDoSilencio = new Obra({
        nomeObra:'O Olho do Silêncio',
        fk_nomeArtista:'Max Ernst',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://arteeartistas.com.br/wp-content/uploads/2023/04/O-Olho-do-Silencio.-Max-Ernst.-1943.jpg",
        ano:1943,
        descricao:"Esta obra abstrata apresenta uma composição complexa de formas e cores, na qual elementos orgânicos e inorgânicos se mesclam de maneira enigmática. A ausência de uma representação figurativa clara convida o espectador a explorar a obra de forma subjetiva, experimentando uma interação única com a pintura.",
        index:32
    })

    const florestaEPomba = new Obra({
        nomeObra:'Floresta e Pomba',
        fk_nomeArtista:'Max Ernst',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://uploads0.wikiart.org/images/max-ernst/forest-and-dove-1927.jpg",
        ano:1927,
        descricao:"Nesta obra, Ernst combina elementos naturais e simbólicos em um cenário enigmático. A imagem apresenta uma paisagem de floresta com uma pomba, que é um símbolo universal de paz e liberdade. No entanto, a representação da pomba é altamente distorcida e abstrata, desafiando a percepção tradicional.",
        index:33
    })

    const oCarnavalDeArlequim = new Obra({
        nomeObra:'O Carnaval de Arlequim',
        fk_nomeArtista:'Joan Miró',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://arteref.com/wp-content/uploads/2019/06/harlequins-carnival.jpg",
        ano:1925,
        descricao:"Pintura icônica de Joan Miró que encapsula a essência do surrealismo. Embora o título faça referência ao personagem Arlequim da commedia dell'arte, a obra não inclui uma representação literal do personagem. Em vez disso, Miró cria uma cena caótica e vibrante, onde cores ousadas e formas distorcidas se unem para criar um mundo de imaginação e fantasia.",
        index:34
    })
    
    const oNascimentoDoMundo = new Obra({
        nomeObra:'O Nascimento do Mundo',
        fk_nomeArtista:'Joan Miró',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://artsdot.com/ADC/Art-ImgScreen-4.nsf/O/A-5ZKCUS/$FILE/Joan-miro-the-birth-of-the-world.Jpg",
        ano:1925,
        descricao:"Obra surrealista altamente abstrata. A pintura apresenta um cenário de formas orgânicas e geométricas em harmonia, criando uma atmosfera onírica e poética. Não há uma representação literal de figuras ou objetos reconhecíveis na pintura. Em vez disso, Miró usa elementos abstratos e simbólicos para criar uma sensação de mistério e imaginação, convidando os espectadores a interpretar livremente as formas e cores presentes na obra.",
        index:35
    })

    const cachorroLatindoparaALua = new Obra({
        nomeObra:'Cachorro Latindo para a Lua',
        fk_nomeArtista:'Joan Miró',
        fk_nomeMovimento:'Surrealismo',
        linkFoto:"https://wahooart.com/Art.nsf/O/8EWKYE/$File/Joan-Miro-Perro-ladrando-a-la-luna.JPG",
        ano:1926,
        descricao:"Obra que evoca uma cena onírica e enigmática. Apresenta um cão estilizado que parece latir em direção à lua. A pintura mescla elementos abstratos e figurativos de forma harmoniosa, desafiando a realidade convencional e convidando a interpretação criativa.",
        index:36
    })

    const aNoiteEstrelada = new Obra({
        nomeObra:'A Noite Estrelada',
        fk_nomeArtista:'Vincent van Gogh',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/2560px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        ano:1889,
        descricao:"Pintura que apresenta um cenário noturno hipnotizante, onde um céu estrelado turbulento se mistura com elementos naturais e urbanos. As pinceladas audaciosas e as cores vibrantes capturam a intensidade emocional do artista, enquanto as estrelas parecem dançar no firmamento. Esta obra é um exemplo notável da expressão individual e da busca de Van Gogh por transmitir a profundidade de sua experiência pessoal.",
        index:37
    })

    const aCasaAmarela = new Obra({
        nomeObra:'A Casa Amarela',
        fk_nomeArtista:'Vincent van Gogh',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/2560px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg",
        ano:1888,
        descricao:"Uma representação vívida da residência de Vincent van Gogh em Arles, França. O amarelo brilhante e a pincelada ousada destacam a casa, criando uma sensação de calor e vitalidade. Van Gogh captura a beleza da vida cotidiana e a harmonia da natureza e da arquitetura. Esta obra reflete a paixão de Van Gogh pelo uso expressivo da cor e sua habilidade em transformar o comum em algo extraordinário.",
        index:38
    })

    const terracoDoCafe = new Obra({
        nomeObra:'Terraço do Café à Noite',
        fk_nomeArtista:'Vincent van Gogh',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg",
        ano:1888,
        descricao:"Pintura que retrata um café iluminado sob o céu noturno estrelado, onde figuras humanas se reúnem. Van Gogh utiliza cores vivas e pinceladas ousadas para criar uma sensação de calor e vitalidade. Esta obra é um exemplo marcante do pós-impressionismo de Van Gogh, destacando seu talento em transmitir a atmosfera e a emoção de uma cena noturna.",
        index:39
    })

    const osJogadoresDeCartas = new Obra({
        nomeObra:'Os Jogadores de Cartas',
        fk_nomeArtista:'Paul Cézanne',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://uploads5.wikiart.org/images/paul-cezanne/the-card-players-1892.jpg!Large.jpg",
        ano:1892,
        descricao:"Cézanne retrata os jogadores em meio a uma partida de cartas, explorando o tema de maneira intensa e introspectiva. Sua abordagem pós-impressionista é evidente nas formas geométricas das figuras, na estrutura da composição e no uso sutil da cor. Cézanne busca mais do que simplesmente representar a cena; ele mergulha na complexidade psicológica e na profundidade das relações humanas.",
        index:40
    })

    const floresta = new Obra({
        nomeObra:'Floresta',
        fk_nomeArtista:'Paul Cézanne',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://uploads8.wikiart.org/images/paul-cezanne/forest.jpg!Large.jpg",
        ano:1890,
        descricao:"Nesta obra, as árvores são representadas de forma simplificada e estilizada. Cézanne emprega cores e formas que destacam a estrutura das árvores de maneira única, evocando uma sensação de abstração. Essa obra exemplifica a transição de Cézanne do impressionismo para o pós-impressionismo, marcando sua contribuição à evolução da arte moderna.",
        index:41
    })

    const cestaDeMacas = new Obra({
        nomeObra:'Cesta de Maçãs',
        fk_nomeArtista:'Paul Cézanne',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://uploads1.wikiart.org/images/paul-cezanne/still-life-with-bottle-and-apple-basket-1894.jpg!Large.jpg",
        ano:1895,
        descricao:"Uma pintura que retrata uma cena simples, mas com uma abordagem artística única. Cézanne simplifica as formas das maçãs e da cesta, destacando-as com pinceladas ousadas e cores vívidas. Sua representação enfatiza a estrutura e a composição, tornando a obra um exemplo marcante do pós-impressionismo. A obra de Cézanne continua a influenciar a arte moderna.",
        index:42
    })

    const oPintorDeGirassois = new Obra({
        nomeObra:'O Pintor de Girassóis',
        fk_nomeArtista:'Paul Gauguin',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Paul_Gauguin_-_Vincent_van_Gogh_painting_sunflowers_-_Google_Art_Project.jpg/2560px-Paul_Gauguin_-_Vincent_van_Gogh_painting_sunflowers_-_Google_Art_Project.jpg",
        ano:1888,
        descricao:"Retrato do pintor holandês Vincent van Gogh (1853 - 1890), com quem Gauguin chegou a travar amizade. Na tela, o pós-impressionista é representado trabalhando, concentrado no seu ofício. Do lado estão os icônicos girassóis que marcam presença em vários quadros seus, como Doze Girassóis numa Jarra.",
        index:43
    })

    const quandoVoceCasa = new Obra({
        nomeObra:'Quando Você Casa?',
        fk_nomeArtista:'Paul Gauguin',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/6/61/Paul_Gauguin%2C_Nafea_Faa_Ipoipo%3F_1892%2C_oil_on_canvas%2C_101_x_77_cm.jpg",
        ano:1892,
        descricao:"Inspirada no período que o artista viveu no Taiti, podemos ver nesta obra duas jovens nativas com vestes que misturam trajes tradicionais com roupas de denotam a influência europeia, tema que se repete na pintura de Gauguin. Pelo título e a flor no cabelo, percebemos que uma dela está procurando marido. Uma das críticas que o artista tem recebido é exatamente o modo como representava as mulheres daquela cultura, sempre com foco na busca de um casamento ou nas relações íntimas.",
        index:44
    })

    const mulheresDoTaiti = new Obra({
        nomeObra:'Mulheres do Taiti',
        fk_nomeArtista:'Paul Gauguin',
        fk_nomeMovimento:'Pós-Impressionismo',
        linkFoto:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Paul_Gauguin_056.jpg/2560px-Paul_Gauguin_056.jpg",
        ano:1891,
        descricao:"Obra pintada no período em que o artista passou no Taiti, tendo se inspirado profundamente no país e na sua cultura. Com cores fortes e vivas, a tela retrata as jovens olhando para o nada, como se estivessem perdidas nos próprios pensamentos. Uma delas segura as fibras que irá usar para tecer cestos, algo que fazia parte das tradições do povo.",
        index:45
    })
    
    aPersistenciaDaMemoria.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    cisnesRefletindoElefantes.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    oGrandeMasturbador.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    oElefanteCelebes.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    oOlhoDoSilencio.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    florestaEPomba.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    oCarnavalDeArlequim.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    oNascimentoDoMundo.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    cachorroLatindoparaALua.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    aNoiteEstrelada.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    aCasaAmarela.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    terracoDoCafe.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    osJogadoresDeCartas.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    floresta.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    cestaDeMacas.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    oPintorDeGirassois.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    quandoVoceCasa.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))

    mulheresDoTaiti.save()
    .then(() => console.log("Salvo com sucesso"))
    .catch((err) => console.log(err))
})
