import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'mel-silvestre-apis',
    name: 'Mel Silvestre Cru do Cerrado (Apis mellifera)',
    category: 'apis_honey',
    categoryLabel: 'Mel com Ferrão',
    beeSpecies: 'Apis mellifera (Abelha africanizada)',
    volumeOrWeight: '500g',
    price: 48.0,
    originalPrice: 56.0,
    rating: 4.9,
    reviewsCount: 142,
    description: 'Mel 100% puro e cru, colhido a frio sem pasteurização em floradas nativas do bioma Cerrado (pequizeiro, lixeira e vassourinha). Preserva todas as enzimas vivas (diastase e invertase), pólen residual e minerais essenciais.',
    inStock: true,
    stockCount: 38,
    image: '/src/assets/images/product_honey_asf_apis_1790206881987.jpg',
    features: [
      'Não pasteurizado (enzimas vivas preservadas)',
      'Índice refratométrico de umidade < 17.8%',
      'Cristalização homogênea e aveludada',
      'Certificação SIF/MAPA e rastreabilidade por lote'
    ],
    technicalSpecs: {
      botanicalSource: 'Polifloral nativo (Cerrado mineiro e goiano)',
      moisture: '17.4% (padrão premium internacional)',
      apiaryRegion: 'Serra do Espinhaço - MG',
      saspCertificate: 'SIF 4821/MG - Pureza Grau A',
      extractionMethod: 'Centrifugação mecânica a frio e decantação gravítica'
    },
    featured: true
  },
  {
    id: 'mel-laranjeira-apis',
    name: 'Mel Floral de Laranjeira Premium (Apis mellifera)',
    category: 'apis_honey',
    categoryLabel: 'Mel com Ferrão',
    beeSpecies: 'Apis mellifera',
    volumeOrWeight: '500g',
    price: 54.0,
    rating: 4.95,
    reviewsCount: 89,
    description: 'Colhido durante o auge da florada de citrus no interior de São Paulo. Apresenta coloração âmbar clara translúcida, aroma delicadamente cítrico e acidez perfeitamente balanceada.',
    inStock: true,
    stockCount: 22,
    image: '/src/assets/images/hero_apiculture_natural_1790206871626.jpg',
    features: [
      'Monofloral de florada cítrica paulista',
      'Aroma floral nobre e paladar suave',
      'Ideal para harmonização gastronômica e chás',
      'Livre de qualquer tipo de resíduo químico'
    ],
    technicalSpecs: {
      botanicalSource: 'Citrus sinensis (Flor de Laranjeira)',
      moisture: '17.2%',
      apiaryRegion: 'Bebedouro - SP',
      saspCertificate: 'SIF 3902/SP',
      extractionMethod: 'Centrifugação em aço inox 304 a frio'
    }
  },
  {
    id: 'mel-jatai-nativa',
    name: 'Mel Nobre de Abelha Jataí (Tetragonisca angustula)',
    category: 'asf_honey',
    categoryLabel: 'Abelha Sem Ferrão (ASF)',
    beeSpecies: 'Tetragonisca angustula (Jataí)',
    volumeOrWeight: '150g',
    price: 78.0,
    originalPrice: 89.0,
    rating: 5.0,
    reviewsCount: 114,
    description: 'Tesouro da meliponicultura brasileira. As abelhas Jataí produzem um mel singular, mais fluido, naturalmente acidulado e com teores extraordinários de inibina e substâncias antimicrobianas ativas. Fermentado suave natural em potes de cerume.',
    inStock: true,
    stockCount: 15,
    image: '/src/assets/images/product_honey_asf_apis_1790206881987.jpg',
    features: [
      'Espécie nativa sem ferrão 100% brasileira',
      'Sabor agridoce único com notas herbais',
      'Tradicionalmente usado para vias respiratórias e oculares',
      'Maturação lenta e refrigeração pós-colheita'
    ],
    technicalSpecs: {
      botanicalSource: 'Mata Atlântica e quintais agroflorestais',
      moisture: '23.8% (característico natural das ASF)',
      apiaryRegion: 'Vale do Paraíba - SP',
      saspCertificate: 'SIM/Meliponário Registrado Nº 112',
      extractionMethod: 'Sucção por cânula estéril a vácuo suave'
    },
    featured: true
  },
  {
    id: 'mel-urucu-amarela',
    name: 'Mel Raro de Uruçu Amarela (Melipona mondury)',
    category: 'asf_honey',
    categoryLabel: 'Abelha Sem Ferrão (ASF)',
    beeSpecies: 'Melipona mondury (Uruçu Amarela)',
    volumeOrWeight: '200g',
    price: 115.0,
    rating: 4.98,
    reviewsCount: 67,
    description: 'Um dos méis mais cobiçados da alta gastronomia mundial. A Uruçu Amarela é uma abelha nobre da Mata Atlântica que forrageia em estratos arbóreos elevados. Possui textura sedosa, notas amadeiradas e aromas de resinas nativas raras.',
    inStock: true,
    stockCount: 9,
    image: '/src/assets/images/product_honey_asf_apis_1790206881987.jpg',
    features: [
      'Produção extremamente limitada por colônia (1 a 2 kg/ano)',
      'Harmonização sublime com queijos curados e alta culinária',
      'Puro terroir de floresta primária preservada',
      'Envase em vidro farmacêutico com lacre de cera'
    ],
    technicalSpecs: {
      botanicalSource: 'Dossel de Mata Atlântica de altitude',
      moisture: '24.5%',
      apiaryRegion: 'Serra do Mar - RJ/SP',
      saspCertificate: 'SIM Meliponicultura 088',
      extractionMethod: 'Sucção a vácuo controlado e refrigeração imediata a 4°C'
    },
    featured: true
  },
  {
    id: 'mel-mandacaia',
    name: 'Mel Imperial de Mandaçaia (Melipona quadrifasciata)',
    category: 'asf_honey',
    categoryLabel: 'Abelha Sem Ferrão (ASF)',
    beeSpecies: 'Melipona quadrifasciata (Mandaçaia MQA)',
    volumeOrWeight: '180g',
    price: 96.0,
    rating: 4.92,
    reviewsCount: 53,
    description: 'Colhido em caixas modulares INPA de meliponários agroecológicos. A Mandaçaia fabrica seus potes com uma mistura rica de cera e geoprópolis, transferindo propriedades antioxidantes profundas e sabor inconfundível para o mel.',
    inStock: true,
    stockCount: 12,
    image: '/src/assets/images/product_honey_asf_apis_1790206881987.jpg',
    features: [
      'Rico em compostos fenólicos naturais',
      'Doçura equilibrada por leve acidez frutada',
      'Coleta higiênica sem contato manual',
      'Suporte direto à preservação dos polinizadores nativos'
    ],
    technicalSpecs: {
      botanicalSource: 'Floradas nativas do planalto paulista e paranaense',
      moisture: '25.0%',
      apiaryRegion: 'Campos Gerais - PR',
      saspCertificate: 'SIM/PR 029',
      extractionMethod: 'Microcânula estéril'
    }
  },
  {
    id: 'propolis-verde-alecrim',
    name: 'Extrato de Própolis Verde Alecrim-do-Campo 30ml',
    category: 'propolis',
    categoryLabel: 'Própolis & Apiterapia',
    beeSpecies: 'Apis mellifera (Coleta botânica de Baccharis dracunculifolia)',
    volumeOrWeight: '30ml',
    price: 42.0,
    originalPrice: 49.0,
    rating: 5.0,
    reviewsCount: 231,
    description: 'Extrato padronizado com 15% de extrato seco mínimo e alta concentração comprovada de Artepillina-C e flavonoides totais. Produzida no sul de Minas Gerais a partir da resina jovem do alecrim-do-campo, com reconhecimento científico global.',
    inStock: true,
    stockCount: 65,
    image: '/src/assets/images/product_propolis_royal_jelly_1790206892482.jpg',
    features: [
      'Mínimo 15% de extrato seco real (não diluído)',
      'Rico em Artepillina-C (marcador bioativo nobre)',
      'Frasco âmbar com conta-gotas de alta precisão',
      'Potente modulador da imunidade e anti-inflamatório'
    ],
    technicalSpecs: {
      botanicalSource: 'Baccharis dracunculifolia (Alecrim-do-Campo)',
      moisture: 'Veículo alcoólico neutro de cereais 70°',
      apiaryRegion: 'Sul de Minas Gerais',
      saspCertificate: 'SIF 1904/MG',
      extractionMethod: 'Macerado a frio prolongado (mínimo 60 dias) com microfiltração'
    },
    featured: true
  },
  {
    id: 'propolis-vermelha-alagoas',
    name: 'Extrato Puro de Própolis Vermelha dos Manguezais 30ml',
    category: 'propolis',
    categoryLabel: 'Própolis & Apiterapia',
    beeSpecies: 'Apis mellifera (Fonte botânica: Dalbergia ecastaphyllum)',
    volumeOrWeight: '30ml',
    price: 58.0,
    rating: 4.96,
    reviewsCount: 78,
    description: 'A jóia vermelha da apicultura brasileira com Indicação Geográfica (IG) de Alagoas. As abelhas coletam a resina escarlate do rabo-de-bugio nos manguezais, resultando em isoflavonas raras, neovestitol e vestitol com atividade antioxidante ímpar.',
    inStock: true,
    stockCount: 28,
    image: '/src/assets/images/product_propolis_royal_jelly_1790206892482.jpg',
    features: [
      'Indicação Geográfica oficial dos manguezais nordestinos',
      'Concentração bioativa de flavonoides e isoflavonas',
      'Ação antimicrobiana de amplo espectro',
      'Sabor aromático resinoso marcante'
    ],
    technicalSpecs: {
      botanicalSource: 'Dalbergia ecastaphyllum (Rabo-de-bugio)',
      moisture: 'Extrato seco 16.5%',
      apiaryRegion: 'Litoral Lagunar - AL',
      saspCertificate: 'SIF 2801/AL - Selo IG Própolis Vermelha',
      extractionMethod: 'Extração hidroalcoólica a frio com filtração dupla'
    }
  },
  {
    id: 'geleia-real-fresca',
    name: 'Geleia Real Fresca In Natura 100% Pura 30g',
    category: 'royal_jelly',
    categoryLabel: 'Geleia Real',
    beeSpecies: 'Apis mellifera (Secreção das glândulas hipofaringeanas)',
    volumeOrWeight: '30g',
    price: 85.0,
    originalPrice: 98.0,
    rating: 4.94,
    reviewsCount: 96,
    description: 'O alimento exclusivo da abelha rainha, responsável por sua longevidade e fertilidade extraordinárias. Coletada artesanalmente em cúpulas reais no terceiro dia de desenvolvimento larval. Mantida permanentemente congelada para preservar o ácido 10-HDA (mínimo 2.0%).',
    inStock: true,
    stockCount: 18,
    image: '/src/assets/images/product_propolis_royal_jelly_1790206892482.jpg',
    features: [
      '100% Pura in natura (nunca misturada com mel ou espessantes)',
      'Concentração garantida de ácido 10-hidroxi-2-decenoico (10-HDA)',
      'Acompanha espátula dosadora não-metálica de bambu',
      'Envio em embalagem térmica com gelo reciclável'
    ],
    technicalSpecs: {
      botanicalSource: 'Nutrição polínica de alta concentração',
      moisture: '65.0% - 68.0%',
      apiaryRegion: 'Região Serrana - RS',
      saspCertificate: 'SIF 3320/RS - Controle de Cadeia Fria',
      extractionMethod: 'Aspiração a vácuo estéril de cúpulas reais em 72h'
    },
    featured: true
  },
  {
    id: 'geleia-real-liofilizada',
    name: 'Geleia Real Liofilizada Concentrada (60 Cápsulas)',
    category: 'royal_jelly',
    categoryLabel: 'Geleia Real',
    beeSpecies: 'Apis mellifera',
    volumeOrWeight: '60 cápsulas (500mg)',
    price: 110.0,
    rating: 4.88,
    reviewsCount: 64,
    description: 'Toda a riqueza biológica da geleia real fresca processada por liofilização a vácuo (desidratação a frio abaixo de -40°C). Cada cápsula vegetal equivale a 1.5g de geleia real fresca, sem necessidade de refrigeração.',
    inStock: true,
    stockCount: 30,
    image: '/src/assets/images/product_propolis_royal_jelly_1790206892482.jpg',
    features: [
      'Praticidade total para viagens e rotina diária',
      'Cápsulas 100% vegetais de rápida absorção',
      '3x mais concentrada em princípios ativos por grama',
      'Estabilidade garantida em temperatura ambiente'
    ],
    technicalSpecs: {
      botanicalSource: 'Geleia real pura liofilizada',
      moisture: '< 3.0% (pó seco estabilizado)',
      apiaryRegion: 'Caxias do Sul - RS',
      saspCertificate: 'ANVISA / SIF Fracionado',
      extractionMethod: 'Liofilização criogênica a -45°C'
    }
  },
  {
    id: 'cera-alveolada-pura-1kg',
    name: 'Cera de Abelha 100% Pura Alveolada (Langstroth - 1kg)',
    category: 'beeswax',
    categoryLabel: 'Cera Alveolada',
    beeSpecies: 'Apis mellifera',
    volumeOrWeight: '1kg (~14 a 15 lâminas)',
    price: 94.0,
    originalPrice: 105.0,
    rating: 5.0,
    reviewsCount: 168,
    description: 'Lâminas de cera de abelha 100% virgem alveolada no padrão apícola Langstroth (ninho 42 x 20cm). Rigorosamente esterilizada a 125°C sob pressão para eliminar qualquer risco de esporos patogênicos. Alvéolos hexagonais perfeitamente estampados para aceitação imediata da rainha.',
    inStock: true,
    stockCount: 45,
    image: '/src/assets/images/product_beeswax_foundation_1790206901617.jpg',
    features: [
      'Pureza atestada livre de parafina, ceras vegetais ou breu',
      'Alvéolos com espessura exata para puxada rápida pelas abelhas',
      'Esterilização autoclaveada a 125°C por 45 minutos',
      'Dimensões perfeitas: 420mm x 200mm (padrão Brasil)'
    ],
    technicalSpecs: {
      botanicalSource: 'Glândulas ceríferas de Apis mellifera',
      moisture: 'Ponto de fusão 63°C - 65°C',
      apiaryRegion: 'Vale do Itajaí - SC',
      saspCertificate: 'SIF 5012/SC - Esterilização Atestada',
      extractionMethod: 'Laminagem contínua mecânica e estampagem a frio'
    },
    featured: true
  },
  {
    id: 'cera-mista-asf',
    name: 'Cera Mista Especial para Abelhas Sem Ferrão (500g)',
    category: 'beeswax',
    categoryLabel: 'Cera Alveolada & Cerume',
    beeSpecies: 'Mistura formulada para Meliponíneos',
    volumeOrWeight: '500g',
    price: 68.0,
    rating: 4.96,
    reviewsCount: 84,
    description: 'Composição balanceada de cera de abelha pura e geoprópolis bruto macerado, criando a consistência e maleabilidade ideais para Jataí, Uruçu, Mandaçaia e Tiúba construírem invólucros e potes de alimento em frações do tempo habitual.',
    inStock: true,
    stockCount: 34,
    image: '/src/assets/images/product_beeswax_foundation_1790206901617.jpg',
    features: [
      'Incentiva a postura da rainha após divisões de enxame',
      'Aroma atrativo irresistível que acelera a blindagem da caixa',
      'Lâminas finas e blocos fáceis de moldar com os dedos',
      'Livre de contaminantes e pesticidas'
    ],
    technicalSpecs: {
      botanicalSource: 'Cera virgem + Geoprópolis de Melipona',
      moisture: 'Maleabilidade natural a 26°C',
      apiaryRegion: 'Paraná / São Paulo',
      saspCertificate: 'Controle de Qualidade Meliponário Flor de Ouro',
      extractionMethod: 'Fusão térmica filtrada e homogeneização biológica'
    }
  },
  {
    id: 'kit-coletor-apitoxina',
    name: 'Coletor Eletrônico de Apitoxina Microprocessado (2 Placas)',
    category: 'equipment',
    categoryLabel: 'Equipamentos Avançados',
    beeSpecies: 'Apis mellifera',
    volumeOrWeight: 'Kit Completo 2 Placas + Central',
    price: 890.0,
    originalPrice: 990.0,
    rating: 4.95,
    reviewsCount: 39,
    description: 'Dispositivo eletrônico profissional para extração não-letal de veneno de abelha. Central microcontrolada emite pulsos elétricos de baixa amperagem (12V-15V / 20-30Hz) que estimulam a picada na placa de vidro sem que as operárias percam o ferrão. Permite produzir apitoxina farmacêutica de alto valor agregado.',
    inStock: true,
    stockCount: 8,
    image: '/src/assets/images/school_bee_inspection_1790206910367.jpg',
    features: [
      'Pulsos ajustáveis: não danifica o abdômen das abelhas',
      'Placas de vidro temperado de 4mm com fios de inox cirúrgico 316',
      'Alimentação por bateria 12V recarregável ou fonte bivolt',
      'Produção média de 1g de apitoxina cristalizada a cada 8-10 colmeias'
    ],
    technicalSpecs: {
      botanicalSource: 'Equipamento de extração apícola',
      moisture: 'Proteção IP65 contra chuva e poeira',
      apiaryRegion: 'Fabricação Nacional Especializada',
      saspCertificate: 'Garantia de 12 meses e Manual Técnico de Manejo',
      extractionMethod: 'Eletroestimulação capacitiva com pulso intermitente'
    }
  }
];
