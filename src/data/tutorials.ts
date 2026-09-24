import { TutorialTrack, QuizQuestion } from '../types';

export const TUTORIAL_TRACKS: TutorialTrack[] = [
  {
    id: 'manejo-estacional',
    title: 'Manejo Prático & Nutrição na Entressafra',
    subtitle: 'Protocolo de alimentação artificial energética e proteica, troca de cera e sanidade',
    category: 'manejo',
    level: 'Iniciante',
    estimatedTime: '35 min de leitura técnica + prática',
    coverImage: '/src/assets/images/school_bee_inspection_1790206910367.jpg',
    summary: 'Aprenda como manter colônias de Apis mellifera e meliponíneos vigorosas durante os períodos de escassez floral, evitando abandono e declínio populacional.',
    practicalOutcome: 'Capacidade de formular xaropes estimulantes, bifes proteicos e planejar o cronograma anual de trocas de favos velhos.',
    steps: [
      {
        title: 'Diagnóstico das Reservas da Colmeia',
        duration: '10 min por colmeia',
        description: 'Durante a inspeção pré-inverno ou seca, avalie os quadros laterais do ninho. Uma colônia de Apis forte precisa de no mínimo 2 a 3 quadros cheios de mel operculado e 1 quadro de pólen estocado (pão de abelha). Para abelhas sem ferrão (ASF), verifique se há pelo menos 6 a 10 potes de alimento intactos.',
        technicalTips: [
          'Nunca alimente colmeias no meio do dia com abelhas em voo para não desencadear pilhagem.',
          'Em ASF, nunca fure potes de alimento durante o manejo frio para evitar atração imediata do forídeo.',
          'Inspeções devem ocorrer preferencialmente entre 10h e 14h em dias ensolarados e sem vento forte.'
        ],
        safetyWarning: 'Use macacão completo, máscara com boa visibilidade e botas vedadas ao manusear colmeias de Apis.',
        toolsNeeded: ['Fumegador com maravalha ou folhas secas', 'Formão apícola em inox', 'Alimentador Boardman ou cobertura']
      },
      {
        title: 'Preparo do Xarope Energético de Invertose (1:1 e 2:1)',
        duration: '20 min de preparo',
        description: 'Para manutenção na escassez, utilize a proporção 2:1 (2 partes de açúcar cristal para 1 parte de água fervida). Para estimulação de postura pré-safra, use 1:1. Adicione 1g de ácido cítrico por kg de açúcar para quebrar a sacarose em glicose e frutose (invertase caseira), reduzindo a energia gasta pelas abelhas.',
        technicalTips: [
          'Deixe o xarope esfriar completamente até temperatura ambiente antes de servir.',
          'Acrescente 2 a 3 gotas de óleo essencial de capim-limão para estimular a aceitação e atuar como antifúngico intestinal.',
          'Ofereça apenas a quantidade que o enxame consome em até 24 a 48 horas para evitar fermentação.'
        ],
        safetyWarning: 'Não ferva o açúcar em temperaturas extremas para não formar HMF (hidroximetilfurfural), substância altamente tóxica para as abelhas.',
        toolsNeeded: ['Panela de inox ou vidro', 'Açúcar cristal de boa qualidade', 'Ácido cítrico ou limão fresco']
      },
      {
        title: 'Formulações de Bife Proteico para Criação',
        duration: '15 min de preparo',
        description: 'Sem proteína (pólen), a rainha cessa a postura e as nutrizes não desenvolvem as glândulas hipofaringeanas para produzir geleia real. Misture: 40% de levedura de cana-de-açúcar inativa, 20% de farinha de soja desengordurada micronizada e 40% de xarope denso ou mel com SIF certificado.',
        technicalTips: [
          'A consistência ideal é similar a uma massa de modelar macia que não escorre entre os quadros.',
          'Coloque porções de 100g a 150g diretamente sobre os cabezais dos quadros centrais de cria, envolvidas em papel manteiga com fendas.',
          'Em abelhas sem ferrão, forneça em pequenas tampinhas de garrafa no sobre-ninho.'
        ],
        toolsNeeded: ['Balança de precisão', 'Espátula de inox', 'Papel manteiga vegetal']
      },
      {
        title: 'Troca de Cera Velha e Manejo Higiênico',
        duration: '15 min por caixa',
        description: 'Favos de cera com mais de 2 anos tornam-se escuros, acumulam resíduos e reduzem o tamanho corporal das abelhas que nascem. Substitua anualmente 30% a 40% dos quadros velhos por quadros armados com lâminas novas de cera 100% pura alveolada.',
        technicalTips: [
          'Desloque os quadros velhos vazios gradualmente para as extremidades do ninho antes de retirá-los.',
          'Insira as lâminas novas de cera alveolada na posição 3 ou 7, intercaladas entre quadros de cria aberta e alimento.',
          'Cera alveolada bem fixada com arame e esticador evita empenamento e alvéolos de zangão indesejados.'
        ],
        toolsNeeded: ['Incrustador de cera elétrico ou carretilha', 'Arame de inox 0.45mm', 'Esticador de arame']
      }
    ],
    faq: [
      {
        question: 'Posso usar mel de origem desconhecida para alimentar as abelhas?',
        answer: 'Jamais! O mel de fontes não sanitárias pode conter esporos de Cria Pútrida Americana (Paenibacillus larvae), que devastam apiários inteiros. Use sempre xarope de açúcar ou mel do seu próprio apiário comprovadamente sadio.'
      },
      {
        question: 'Com que frequência devo fornecer o xarope na entressafra?',
        answer: 'Para manutenção simples, 1 a 2 vezes por semana em volumes de 500ml a 1L por colmeia. Para estímulo pré-safra (45 dias antes da florada principal), 500ml a cada 2 ou 3 dias para simular fluxo contínuo de néctar.'
      }
    ]
  },
  {
    id: 'captura-ninhos-isca',
    title: 'Captura Eficiente por Ninhos-Isca (PET)',
    subtitle: 'A fórmula do atrativo hidroalcoólico potente, montagem térmica e pontos de instalação',
    category: 'captura',
    level: 'Intermediário',
    estimatedTime: '40 min de preparo técnico',
    coverImage: '/src/assets/images/school_bee_inspection_1790206910367.jpg',
    summary: 'Guia completo para multiplicar meliponários de forma sustentável através da atração de enxames silvestres voadores em garrafas PET, sem agredir o meio ambiente.',
    practicalOutcome: 'Montagem de iscas de alta taxa de ocupação para Jataí, Iraí, Mandaçaia, Mirim e Tubuna.',
    steps: [
      {
        title: 'A Fórmula do Atrativo Hidroalcoólico Superconcentrado',
        duration: '10 min preparo + 30 dias de maceração',
        description: 'O sucesso da atração depende de uma mistura rica em feromônios e compostos resinosos da espécie-alvo. Em um pote de vidro de 1L, adicione: 150g de própolis de Apis ou geoprópolis de Melipona, 100g de cerume velho de abelha sem ferrão e 700ml de álcool etílico de cereais ou 70°.',
        technicalTips: [
          'Deixe macerar em local escuro por 30 a 45 dias, agitando diariamente o frasco.',
          'Quanto mais escuro e aromático o atrativo ficar, maior será a resposta das abelhas batedoras.',
          'Você pode adicionar 1 colher de sopa de resina fresca de aroeira ou pinho para enriquecer o buquê terpênico.'
        ],
        toolsNeeded: ['Frasco de vidro com fecho hermético', 'Própolis e cerume maduros', 'Álcool de cereais ou 70°']
      },
      {
        title: 'Montagem do Ninho-Isca Térmico em Garrafa PET',
        duration: '15 min por garrafa',
        description: 'Utilize garrafas PET limpas de 2L (para Jataí e Mirim) ou 3L a 5L (para Mandaçaia e Uruçu). Banhe o interior da garrafa com 30ml do atrativo concentrado e escorra o excesso. Instale um cotovelo de mangueira preta de 1/2 polegada no bocal para servir de túnel de entrada.',
        technicalTips: [
          'Envolva a garrafa com 5 a 6 folhas grossas de jornal: o isolamento térmico é decisivo para a escolha do enxame.',
          'Cubra externamente com um saco plástico preto grosso e feche hermeticamente com fita adesiva larga.',
          'Deixe apenas o orifício do cotovelo acessível e passe um pouco de cera/atrativo na ponta do bico para guia olfativo.'
        ],
        safetyWarning: 'A isca deve ser 100% impermeável. Qualquer entrada de água de chuva apodrecerá o ninho e atrairá formigas.',
        toolsNeeded: ['Garrafas PET 2L/3L/5L', 'Jornal ou papelão ondulado', 'Saco de lixo preto resistente', 'Fita crepe larga', 'Cotovelos plásticos de 1/2"']
      },
      {
        title: 'Posicionamento Estratégico na Mata e Época de Instalação',
        duration: 'Variável',
        description: 'A época áurea de enxameação ocorre na primavera e início do verão (setembro a dezembro no Centro-Sul). Instale as iscas em troncos de árvores robustas com casca rugosa, a uma altura de 1,5m a 2,20m do solo, em local sombreado e protegido de ventos fortes.',
        technicalTips: [
          'Aponte a entrada do bocal para o sol nascente (Leste ou Nordeste), facilitando o aquecimento matinal das operárias.',
          'Mantenha distância mínima de 50 metros de formigueiros visíveis e aplique graxa atóxica na corda de fixação.',
          'Lugares ideais: capões de mata, bordas de fragmentos florestais, pomares agroecológicos e chácaras.'
        ],
        toolsNeeded: ['Fita isolante ou arame fino encapado', 'Graxa atóxica de vaselina para repelência']
      },
      {
        title: 'Monitoramento de Batedoras e Resgate Seguro',
        duration: '5 min de inspeção semanal',
        description: 'Observe o comportamento no bocal. A presença de 2 a 5 abelhas voando em volta e limpando o interior indica batedoras. Quando houver deposição de cera na entrada e fluxo de operárias trazendo pólen nas corbículas, o enxame está instalado!',
        technicalTips: [
          'Aguarde pelo menos 60 a 90 dias após a ocupação antes de transferir para a caixa racional definitiva.',
          'Esse tempo garante que os discos de cria já subiram e a rainha está em plena postura estabilizada.',
          'Faça o transporte da isca sempre à noite com a entrada vedada com tela mosquiteira respirável.'
        ],
        toolsNeeded: ['Tela mosquiteira metálica fina', 'Caixa térmica para transporte veicular']
      }
    ],
    faq: [
      {
        question: 'Quanto tempo uma garrafa isca pode ficar instalada sem estragar?',
        answer: 'Se bem envelopada contra umidade e raios UV, a isca pode durar de 6 a 12 meses na mata. Recomenda-se renovar a aplicação de algumas gotas de atrativo no bocal a cada 30 dias na temporada de primavera.'
      },
      {
        question: 'Posso capturar abelhas Apis mellifera com garrafa PET?',
        answer: 'Apis mellifera requer volumes muito maiores (caixas de madeira ou ninhos-isca de papelão resinado de 20L a 40L de capacidade volumétrica com 5 quadros de ninho). A garrafa PET de 2 a 5L é focada em abelhas sem ferrão (ASF).'
      }
    ]
  },
  {
    id: 'multiplicacao-enxames',
    title: 'Multiplicação de Enxames ASF (Divisão por Módulos)',
    subtitle: 'Técnica passo a passo em caixas INPA, identificação de discos maduros e realeiras',
    category: 'multiplicacao',
    level: 'Avançado',
    estimatedTime: '45 min de procedimento',
    coverImage: '/src/assets/images/school_bee_inspection_1790206910367.jpg',
    summary: 'Aprenda a multiplicar colônias matrizes de Jataí, Uruçu e Mandaçaia com 100% de sobrevivência, utilizando a anatomia vertical das caixas INPA e respeitando o ciclo da rainha.',
    practicalOutcome: 'Execução de divisão de colônias matrizes sem perdas por ataque de forídeos ou morte de crias.',
    steps: [
      {
        title: 'Avaliação da Matriz: Critérios de Elegibilidade',
        duration: '10 min',
        description: 'Uma colônia só deve ser dividida se apresentar: postura ativa preenchendo ninho e sobre-ninho, pelo menos 6 a 8 discos de cria vigorosos, abundância de abelhas jovens (nutrizes) e potes cheios de alimento. Nunca divida enxames fracos ou debilitados.',
        technicalTips: [
          'Escolha um dia quente (> 22°C), sem ameaça de chuva e com boa atividade forrageira.',
          'Tenha a nova caixa INPA totalmente higienizada, seca e flambada previamente.',
          'Passe fita adesiva em todas as junções externas de módulos para evitar infiltração de pragas.'
        ],
        safetyWarning: 'Forídeos (*Pseudohypocera kerteszi*) são a maior causa de morte pós-divisão. Qualquer gota de mel derramada atrai as moscas em minutos.',
        toolsNeeded: ['Caixa padrão INPA nova completa', 'Fita crepe larga', 'Espátula fina esterilizada']
      },
      {
        title: 'Reconhecimento de Discos Maduros vs Discos Novos',
        duration: '10 min',
        description: 'Os discos novos (recentes) têm cor marrom-escura e paredes delgadas: neles os ovos e larvas ainda estão flutuando em alimento larval líquido e são extremamente sensíveis. Os discos maduros (prontos para nascer) são claros, bege-amarelados ou esbranquiçados, com pupas formadas.',
        technicalTips: [
          'Transfira sempre discos maduros para a caixa-filha! Abelhas prontas para nascer assumem imediatamente o cuidado e defesa da nova colônia.',
          'Para espécies como Mandaçaia e Uruçu, localize a célula real (realeira maior) ou garanta que haja discos com tamanho suficiente para diferenciação de nova princesa.',
          'Nunca vire os discos de cabeça para baixo; mantenha estritamente a orientação gravitacional original.'
        ],
        toolsNeeded: ['Espátula não-cortante de bambu ou inox', 'Separador de módulos']
      },
      {
        title: 'Montagem da Caixa-Filha e Doação de Campeiras',
        duration: '15 min',
        description: 'Coloque os discos maduros sobre pequenos pedaços de cera de apoio no ninho da caixa-filha para garantir ventilação basal. Forneça uma pequena bolinha de cera mista amolecida para que as jovens comecem a erguer pilares de sustentação.',
        technicalTips: [
          'MÉTODO DO LUGAR: Coloque a caixa-filha no lugar EXATO onde ficava a caixa-mãe. As abelhas campeiras adultas que retornarem do campo entrarão na caixa-filha, garantindo uma poderosa guarnição de defesa!',
          'Desloque a caixa-mãe (que mantém a rainha poedeira e os discos jovens) para outro ponto do meliponário, a pelo menos 3 a 5 metros de distância.',
          'A caixa-mãe se recuperará em 15 a 20 dias graças à rainha ativa.'
        ],
        toolsNeeded: ['Cera mista moldada', 'Suporte nivelado para caixas']
      },
      {
        title: 'Fechamento Hermético, Alimentação e Quarentena',
        duration: '10 min',
        description: 'Vede todas as frestas entre os módulos da caixa-filha com fita crepe impermeável. Não abra a caixa nos primeiros 7 a 10 dias. Se necessário, alimente por sistema externo (alimentador capilar) com xarope enriquecido.',
        technicalTips: [
          'Instale uma armadilha anti-forídeo dentro da tampa (pequeno potinho com vinagre de maçã e tampa furada).',
          'Ao completar 15 dias, faça uma inspeção rápida para verificar se a nova princesa já realizou o voo nupcial e iniciou a postura em espiral.',
          'Uma rainha nova fecundada dobra a velocidade de crescimento do enxame.'
        ],
        toolsNeeded: ['Armadilha anti-forídeo com vinagre de maçã', 'Alimentador externo dosador']
      }
    ],
    faq: [
      {
        question: 'O que fazer se uma caixa dividida for atacada por forídeos?',
        answer: 'Abra a caixa em ambiente fechado, aspire todas as moscas adultas com aspirador de baixa sucção, retire discos apodrecidos com pinça, aplique terra de diatomáceas nas frestas e troque todo o cerume úmido por cera pura fresca.'
      },
      {
        question: 'Quantas vezes no ano posso dividir uma mesma matriz de Mandaçaia?',
        answer: 'Em regiões com boa florada e manejo nutricional adequado, uma matriz saudável pode ser dividida de 1 a 2 vezes por ano (geralmente uma no início da primavera e outra no meio do verão).'
      }
    ]
  },
  {
    id: 'extracao-apitoxina',
    title: 'Extração Avançada de Apitoxina (Veneno de Abelha)',
    subtitle: 'Tecnologia de eletroestimulação segura, raspagem asséptica e purificação comercial',
    category: 'apitoxina',
    level: 'Especialista',
    estimatedTime: '50 min de protocolo operacional',
    coverImage: '/src/assets/images/school_bee_inspection_1790206910367.jpg',
    summary: 'A apitoxina é o produto de maior valor agregado da colmeia (R$ 250 a R$ 450 por grama). Domine a tecnologia de pulso elétrico suave que preserva a vida das abelhas e gera produto com pureza farmacêutica.',
    practicalOutcome: 'Capacidade de instalar coletores eletrônicos, desidratar e beneficiar apitoxina seca com padrão exportação.',
    steps: [
      {
        title: 'Princípio do Coletor de Pulso e Biossegurança das Abelhas',
        duration: '15 min de calibração',
        description: 'O coletor de apitoxina moderno consiste em uma placa de vidro liso sobreposta por fios de aço cirúrgico eletrificados. A central emite pulsos de baixa voltagem (12V a 18V contínuos, com corrente de ~30 a 50mA e frequência modulada de 20 a 30 Hz).',
        technicalTips: [
          'Ao encostar nos fios, a abelha sofre uma microdescarga inofensiva que ativa o reflexo de ferroar.',
          'Como o vidro é liso e impenetrável, o ferrão serreado desliza na superfície sem se prender. A abelha NÃO perde o ferrão nem o saco de veneno e permanece totalmente viva!',
          'A gota de veneno translúcida é depositada na lâmina de vidro e seca em contato com o ar ambiente.'
        ],
        safetyWarning: 'A apitoxina é um produto biológico potente. O operador NUNCA deve tocar no produto sem máscara N95/PFF3 e luvas de nitrilo, pois a inalação do pó de veneno causa reações alérgicas severas.',
        toolsNeeded: ['Central eletrônica microprocessada', 'Bateria selada 12V', 'Placas coletoras com vidro temperado']
      },
      {
        title: 'Instalação na Colmeia e Janela de Extração',
        duration: '25 min por sessão',
        description: 'Instale a placa coletora no alvado (entrada da colmeia) ou sobre os quadros superiores do ninho abaixo da tampa invertida. O melhor horário para extração é pela manhã, entre 8h30 e 11h, quando a população de campeiras maduras (com maior carga de veneno) está ativa.',
        technicalTips: [
          'Opere a sessão de eletroestimulação por no máximo 20 a 25 minutos por colmeia.',
          'Alterne ciclos de pulso: 3 segundos de emissão por 2 segundos de pausa para evitar estresse excessivo no enxame.',
          'Intervalo obrigatório: espere pelo menos 14 a 21 dias antes de realizar uma nova extração na mesma colmeia para reposição biológica da melitina.'
        ],
        safetyWarning: 'Durante a sessão, o enxame libera feromônio de alarme (acetato de isopentila). Mantenha outros animais e pessoas a pelo menos 30 metros do apiário.',
        toolsNeeded: ['Placa coletora com trava de alvado', 'Temporizador digital']
      },
      {
        title: 'Secagem e Raspagem Asséptica da Lâmina',
        duration: '20 min em laboratório',
        description: 'Após a sessão, retire a placa de vidro com cuidado e transporte-a em uma caixa estanque protegida da luz solar direta. Em ambiente com ar-condicionado e baixa umidade (< 45%), aguarde o veneno cristalizar em forma de cristais esbranquiçados/translúcidos.',
        technicalTips: [
          'Utilize uma lâmina de barbear de aço inoxidável ou bisturi cirúrgico esterilizado em ângulo de 45° para raspar suavemente o pó seco.',
          'Evite raspar poeira ou resíduos de cera: a pureza visual e química define o preço pago pela indústria farmacêutica.',
          'Em média, 10 a 12 colmeias fortes produzem 1 grama de apitoxina cristalizada pura por ciclo.'
        ],
        toolsNeeded: ['Lâminas de barbear descartáveis em inox', 'Placa de Petri estéril', 'Higrômetro digital']
      },
      {
        title: 'Acondicionamento Criogênico e Conservação Bioquímica',
        duration: '10 min',
        description: 'A apitoxina seca é extremamente higroscópica e sensível à luz e calor. O marcador nobre melitina (peptídeo com 26 aminoácidos) e a fosfolipase A2 degradam-se rapidamente se expostos à umidade ambiente.',
        technicalTips: [
          'Transfira o pó raspado imediatamente para frascos de vidro âmbar selados com sílica-gel em sachê.',
          'Conserve os frascos em freezer doméstico a -18°C ou preferencialmente em ultrafreezer a -20°C a -80°C.',
          'Com esse protocolo, a apitoxina mantém 98% de sua atividade biológica intacta por até 5 anos.'
        ],
        toolsNeeded: ['Frascos âmbar borossilicato com tampa rosca', 'Sachês de sílica-gel indicadora', 'Freezer']
      }
    ],
    faq: [
      {
        question: 'A extração de apitoxina reduz a produção de mel da colmeia?',
        answer: 'Estudos da Embrapa e universidades mostram que, respeitado o intervalo de 15 a 21 dias e sessões de 25 minutos, não há redução significativa na colheita de mel, pois apenas uma pequena fração do feromônio e energia é mobilizada.'
      },
      {
        question: 'Quem compra a apitoxina pura no Brasil e no mundo?',
        answer: 'Laboratórios de imunoterapia, indústrias de dermocosméticos (para cremes anti-idade com efeito tensor), centros de pesquisa biotecnológica e clínicas de apiterapia credenciadas na Europa, Ásia e Américas.'
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Por que o coletor de apitoxina moderno com placa de vidro não mata as abelhas operárias durante a extração?',
    options: [
      'Porque a voltagem é tão alta que paralisa o ferrão antes da picada.',
      'Porque a superfície lisa do vidro impede que as farpas do ferrão se prendam, permitindo que a abelha descarregue o veneno e voe ilesa.',
      'Porque as abelhas utilizadas na extração não possuem ferrão anatômico.',
      'Porque as operárias liberam apenas feromônios gasosos estimulados pelo som.'
    ],
    correctIndex: 1,
    explanation: 'Correto! O ferrão serreado da abelha fica preso apenas quando penetra tecidos moles e elásticos (como a pele de mamíferos). No vidro temperado plano e rígido, o ferrão desliza sem sofrer avulsão, mantendo a operária 100% viva e saudável.'
  },
  {
    id: 2,
    question: 'Ao multiplicar uma colônia de abelhas sem ferrão (ASF) em caixas modulares INPA, que tipo de discos de cria devem ser transferidos para a caixa-filha?',
    options: [
      'Discos novos e escuros contendo ovos recém-postos.',
      'Apenas potes de mel fermentado sem discos de cria.',
      'Discos maduros e claros (esbranquiçados/amarelados), onde as operárias estão formadas e prestes a nascer.',
      'Qualquer disco, pois a idade da cria não influencia na taxa de sucesso da divisão.'
    ],
    correctIndex: 2,
    explanation: 'Exato! Os discos maduros possuem pupas formadas que nascerão nos dias seguintes, assumindo de imediato o aquecimento do ninho, alimentação da princesa e blindagem contra pragas como o forídeo.'
  },
  {
    id: 3,
    question: 'Qual é o maior predador/praga oportunista que pode destruir uma divisão recente de Abelha Sem Ferrão caso haja derramamento de alimento?',
    options: [
      'O forídeo (Pseudohypocera kerteszi), cujas larvas devoram pólen e crias em 48 horas.',
      'A lagarta da cera maior (Galleria mellonella).',
      'O ácaro Varroa destructor.',
      'A formiga-cortadeira saúva.'
    ],
    correctIndex: 0,
    explanation: 'Exatamente! O forídeo é uma mosca diminuta atraída pelo cheiro de vinagre e potes rompidos. Suas larvas devoram o enxame em dias se a caixa não estiver perfeitamente vedada com fita.'
  },
  {
    id: 4,
    question: 'Qual é o principal marcador químico e substância de maior interesse farmacológico na Própolis Verde brasileira?',
    options: [
      'Capsaicina vegetal pura.',
      'Artepillina-C (ácido fenólico extraído da resina do alecrim-do-campo).',
      'Sulfato de condroitina marinho.',
      'Glicose invertida apícola.'
    ],
    correctIndex: 1,
    explanation: 'Correto! A Artepillina-C é a assinatura química exclusiva da própolis verde de Baccharis dracunculifolia, responsável por sua consagrada atividade imunomoduladora e antitumoral reconhecida mundialmente, especialmente no Japão.'
  },
  {
    id: 5,
    question: 'Por que o mel de abelhas nativas sem ferrão (como Jataí e Uruçu) possui maior umidade (22% a 26%) que o mel de Apis (< 20%)?',
    options: [
      'Porque é adulterado com água da chuva durante a coleta.',
      'Porque as abelhas sem ferrão armazenam o mel em potes de cerume com leveduras simbióticas que promovem fermentação branda e preservam acidez protetora.',
      'Porque o néctar das flores nativas não possui açúcares solúveis.',
      'Porque os meliponicultores não utilizam centrífugas aquecidas.'
    ],
    correctIndex: 1,
    explanation: 'Corretíssimo! A ecologia das ASF envolve estocagem em potes de cerume (cera + resinas) com microflora simbiótica fermentativa natural. Por isso, seu mel é naturalmente mais fluido, gastronômico e preservado sob refrigeração.'
  }
];
