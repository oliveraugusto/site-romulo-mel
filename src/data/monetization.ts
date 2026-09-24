import { MonetizationPillar } from '../types';

export const MONETIZATION_PILLARS: MonetizationPillar[] = [
  {
    id: 'produtos-colmeia',
    title: 'Produtos Nobres da Colmeia',
    subtitle: 'Méis puros, méis de ASF nativas, própolis verde/vermelha, geleia real e apitoxina',
    profitPotential: 'Margem de 45% a 82%',
    paybackPeriod: '8 a 14 meses',
    ticketMedio: 'R$ 45 a R$ 380 por unidade',
    description: 'A base tradicional e mais líquida do negócio apícola. A transição de vender mel a granel (commodity barata a R$ 12/kg) para a comercialização de produtos fracionados com marca própria, selo de inspeção e foco em floradas nobres ou abelhas nativas multiplica o faturamento em até 8 vezes.',
    lucroEstimado: 'R$ 60.000 a R$ 240.000/ano para apiário de 100 a 200 colmeias',
    subcategories: [
      {
        name: 'Mel Nobre de Abelhas Sem Ferrão (Jataí, Uruçu, Mandaçaia)',
        marketPrice: 'R$ 180,00 a R$ 350,00 / kg (em frascos de 100g a 200g)',
        productionMargin: '75% a 85%',
        details: 'Alta demanda em empórios gourmet e restaurantes estrelados. Embora a produção anual por caixa seja de 1 a 2,5 kg, o preço por grama supera o mel convencional em até 10 vezes.'
      },
      {
        name: 'Extratos Padronizados de Própolis Verde & Vermelha',
        marketPrice: 'R$ 38,00 a R$ 65,00 por frasco de 30ml',
        productionMargin: '65% a 78%',
        details: '1kg de própolis bruta (R$ 220,00) rende aproximadamente 35 a 40 frascos de 30ml após maceração hidroalcoólica e filtragem, gerando um faturamento de R$ 1.500,00 a R$ 2.200,00 por kg beneficiado.'
      },
      {
        name: 'Apitoxina Cristalizada Grau Farmacêutico',
        marketPrice: 'R$ 250,00 a R$ 450,00 por GRAMA seca',
        productionMargin: '85% a 92%',
        details: 'O produto com maior densidade de valor do agronegócio mundial. Um apiário com 100 colmeias de Apis operando coletores modernos gera de 8 a 12 gramas por mês, totalizando R$ 2.400 a R$ 4.800 mensais com baixíssimo custo de insumo.'
      },
      {
        name: 'Geleia Real Fresca In Natura',
        marketPrice: 'R$ 1.200,00 a R$ 1.800,00 / kg (fracionada em potes de 30g a R$ 75-95)',
        productionMargin: '70% a 80%',
        details: 'Exige manejo intensivo de enxertia larval e colheita a cada 72 horas, mas oferece fluxo de caixa semanal com clientes recorrentes da terceira idade, atletas e clínicas de saúde integrativa.'
      },
      {
        name: 'Cera Alveolada 100% Pura & Lâminas Filtradas',
        marketPrice: 'R$ 90,00 a R$ 130,00 / kg',
        productionMargin: '55% a 65%',
        details: 'Venda de cera para outros apicultores e meliponicultores. A cera pura certificada livre de parafina tem escassez permanente no mercado nacional.'
      }
    ],
    regulatoryNotes: 'Exige registro no SIM (Serviço de Inspeção Municipal), SIE (Estadual) ou SIF (Federal). Para meliponicultura, diversos estados já contam com resoluções simplificadas para abelhas nativas (ex: Resolução SIM/SP, Portaria IAP/PR e IDAF/ES).'
  },
  {
    id: 'cosmeticos-apiterapia',
    title: 'Cosméticos & Apiterapia de Alto Valor',
    subtitle: 'Pomadas de própolis, cremes tensores com apitoxina, saboaria nobre e velas de cera pura',
    profitPotential: 'Margem de 65% a 88%',
    paybackPeriod: '4 a 8 meses',
    ticketMedio: 'R$ 32 a R$ 195 por produto',
    description: 'Transformação dos excedentes apícolas em cosméticos artesanais certificados e biocosméticos de luxo. A união da cera virgem, mel cru, própolis antioxidante e o potente efeito rejuvenescedor da apitoxina (chamada de "botox natural das abelhas") atrai um público de alto poder aquisitivo disposto a pagar prêmios elevados.',
    lucroEstimado: 'R$ 40.000 a R$ 160.000/ano em escala de ateliê artesanal',
    subcategories: [
      {
        name: 'Sérum Facial & Creme Tensor com Apitoxina (Efeito Lifting Natural)',
        marketPrice: 'R$ 120,00 a R$ 220,00 por frasco 30g',
        productionMargin: '80% a 88%',
        details: 'A melitina e a apamina presentes no veneno estimulam a microcirculação sanguínea dérmica e a síntese natural de colágeno e elastina. Cada frasco leva apenas frações de miligrama de apitoxina pura.'
      },
      {
        name: 'Pomadas Medicinais & Bálsamos Cicatrizantes de Própolis',
        marketPrice: 'R$ 38,00 a R$ 58,00 por lata 40g',
        productionMargin: '72% a 82%',
        details: 'Feitas à base de cera de abelha pura, óleo vegetal prensado a frio e extrato concentrado de própolis verde. Excelente indicação para queimaduras leves, fissuras cutâneas e dermatites.'
      },
      {
        name: 'Saboaria Artesanal Saponificada a Frio (Cold Process)',
        marketPrice: 'R$ 22,00 a R$ 34,00 por barra de 100g',
        productionMargin: '68% a 75%',
        details: 'Sabonetes nutritivos com mel cru, argilas e raspas de favo. Elevado apelo de presente corporativo e lembrança afetiva ecológica.'
      },
      {
        name: 'Velas Aromáticas de Pura Cera de Abelha (Zero Parafina)',
        marketPrice: 'R$ 45,00 a R$ 90,00 por vela',
        productionMargin: '70% a 80%',
        details: 'A combustão da cera de abelha pura queima liberando íons negativos e aroma natural suave de mel, sem liberar toxinas de derivados de petróleo como o tolueno e benzeno.'
      }
    ],
    regulatoryNotes: 'Cosméticos artesanais podem ser comercializados sob registro de grau 1 na ANVISA ou em parceria terceirizada com laboratórios cosméticos certificados com P&D.'
  },
  {
    id: 'polinizacao-assistida',
    title: 'Serviços de Polinização Assistida de Culturas',
    subtitle: 'Contratos de locação de colmeias para fazendas de café, maçã, morango, abacate e melão',
    profitPotential: 'Margem líquida de 75% a 90%',
    paybackPeriod: 'Imediato (fluxo de caixa por contrato)',
    ticketMedio: 'R$ 120 a R$ 220 por colmeia / ciclo de florada',
    description: 'A fronteira mais rentável e com maior impacto agronômico da apicultura moderna. Em vez de depender apenas do clima para colheita de mel, o produtor fecha contratos sazonais para alugar colmeias saudáveis para fazendas comerciais. A polinização por abelhas aumenta a produtividade agrícola em até 30% e melhora a densidade e simetria dos frutos.',
    lucroEstimado: 'R$ 30.000 a R$ 120.000 por temporada (2 a 3 safras ao ano)',
    subcategories: [
      {
        name: 'Cafeicultura Comercial (Café Arábica e Conilon)',
        marketPrice: 'R$ 140,00 a R$ 190,00 por colmeia por ciclo (15 a 25 dias)',
        productionMargin: '85%',
        details: 'Estudos da Embrapa e Unicamp comprovam aumento de 18% a 28% no pegamento de chumbinhos de café, além de redução de grãos chochos (moca) e incremento de até 2 pontos na qualidade da bebida (grãos especiais).'
      },
      {
        name: 'Pomaress de Maçã, Pera e Pêssego (Região Sul)',
        marketPrice: 'R$ 160,00 a R$ 220,00 por colmeia (3 a 5 colmeias por hectare)',
        productionMargin: '82%',
        details: 'Culturas autoincompatíveis que exigem fecundação cruzada obrigatória. Frutos bem polinizados apresentam conformação esférica uniforme de calibre exportação.'
      },
      {
        name: 'Fruticultura Irrigada (Melão e Melancia no Vale do São Francisco)',
        marketPrice: 'R$ 130,00 a R$ 180,00 por colmeia instalada',
        productionMargin: '80%',
        details: 'Ciclos curtos de 20 a 30 dias com alta rotação de colmeias ao longo do ano em áreas irrigadas com até 3 safras anuais.'
      },
      {
        name: 'Culturas Protegidas em Estufas com Abelhas Sem Ferrão (Morangos e Tomate)',
        marketPrice: 'R$ 90,00 a R$ 140,00 por caixa de ASF (Jataí e Manduri)',
        productionMargin: '90%',
        details: 'Como não ferroam, as abelhas nativas são perfeitas para trabalho seguro de colaboradores dentro de estufas fechadas de morango hidropônico, eliminando frutos deformados.'
      }
    ],
    regulatoryNotes: 'Exige contrato formal de prestação de serviços com cláusula de suspensão ou restrição severa de pulverização de defensivos agrícolas (inseticidas neonicotinoides) durante a presença das colmeias.'
  },
  {
    id: 'venda-matrizes-equipamentos',
    title: 'Multiplicação de Matrizes & Fabricação de Caixas',
    subtitle: 'Comercialização legalizada de enxames matrizes, ninhos-isca e caixas padrão INPA',
    profitPotential: 'Margem de 60% a 78%',
    paybackPeriod: '6 a 10 meses',
    ticketMedio: 'R$ 140 a R$ 1.200 por enxame/caixa',
    description: 'A meliponicultura urbana e rural vive uma explosão de novos praticantes no Brasil. Quem domina a técnica de multiplicação de enxames e marcenaria de precisão atende a uma fila de espera constante de hobbistas, agricultores familiares e condomínios que buscam sustentabilidade.',
    lucroEstimado: 'R$ 25.000 a R$ 90.000/ano como atividade complementar',
    subcategories: [
      {
        name: 'Enxames Matrizes Estabelecidos de Jataí (Tetragonisca angustula)',
        marketPrice: 'R$ 250,00 a R$ 420,00 por caixa povoada',
        productionMargin: '75%',
        details: 'Espécie dócil, rústica e com enorme apelo para ambientes urbanos, varandas e escolas. Multiplicação simples e rápida adaptação.'
      },
      {
        name: 'Enxames Matrizes de Mandaçaia e Uruçu',
        marketPrice: 'R$ 650,00 a R$ 1.200,00 por matriz com postura confirmada',
        productionMargin: '80%',
        details: 'Abelhas de grande porte com alta capacidade de produção de mel nobre. Uma única matriz pode gerar até 2 novos enxames filhotes por ano sem comprometer a saúde da colônia.'
      },
      {
        name: 'Caixas Racionais Modulares Padrão INPA em Madeira Nobre',
        marketPrice: 'R$ 110,00 a R$ 180,00 por caixa completa',
        productionMargin: '60%',
        details: 'Fabricadas em cedro, louro ou eucalipto tratado com espessura de 2,5cm a 3,0cm para isolamento térmico impecável. Acabamento artesanal sem cola química interna.'
      }
    ],
    regulatoryNotes: 'A comercialização de abelhas nativas requer cadastro no CTF/IBAMA (Cadastro Técnico Federal) e autorização do órgão ambiental estadual competente (ex: SIMA/SP, IAT/PR, INEA/RJ).'
  }
];

export interface RoiSimulationParams {
  apisCount: number;
  asfCount: number;
  enableHoney: boolean;
  enablePropolis: boolean;
  enableApitoxin: boolean;
  enablePollination: boolean;
  enableCosmetics: boolean;
}

export function calculateRoi(params: RoiSimulationParams) {
  // Production benchmarks per hive/year
  const honeyPerApisKg = 25; // kg/ano
  const honeyPriceApis = 45; // R$/kg
  
  const honeyPerAsfKg = 1.8; // kg/ano
  const honeyPriceAsf = 220; // R$/kg

  const propolisPerApisKg = 0.8; // kg/ano
  const propolisTinctureBottlesPerKg = 30; // frascos de 30ml
  const propolisBottlePrice = 42; // R$/frasco

  const apitoxinGramsPerApis = 0.8; // gramas/colmeia/ano (com coletor de pulso moderno)
  const apitoxinPricePerGram = 320; // R$/grama

  const pollinationContractsPerApis = 1.5; // safras/ano alugadas
  const pollinationPricePerHive = 160; // R$/colmeia/ciclo

  const cosmeticsMultiplier = 0.35; // receita adicional sobre mel e cera

  let annualRevenue = 0;
  let breakdown: { category: string; amount: number; percentage: number }[] = [];

  // Honey
  let honeyRevenue = 0;
  if (params.enableHoney) {
    honeyRevenue += params.apisCount * honeyPerApisKg * honeyPriceApis;
    honeyRevenue += params.asfCount * honeyPerAsfKg * honeyPriceAsf;
    annualRevenue += honeyRevenue;
  }

  // Propolis
  let propolisRevenue = 0;
  if (params.enablePropolis) {
    const rawPropolisKg = params.apisCount * propolisPerApisKg;
    propolisRevenue = rawPropolisKg * propolisTinctureBottlesPerKg * propolisBottlePrice;
    annualRevenue += propolisRevenue;
  }

  // Apitoxin
  let apitoxinRevenue = 0;
  if (params.enableApitoxin) {
    const totalGrams = params.apisCount * apitoxinGramsPerApis;
    apitoxinRevenue = totalGrams * apitoxinPricePerGram;
    annualRevenue += apitoxinRevenue;
  }

  // Pollination
  let pollinationRevenue = 0;
  if (params.enablePollination) {
    pollinationRevenue = params.apisCount * pollinationContractsPerApis * pollinationPricePerHive;
    // ASF in greenhouse
    pollinationRevenue += params.asfCount * 0.5 * 110;
    annualRevenue += pollinationRevenue;
  }

  // Cosmetics
  let cosmeticsRevenue = 0;
  if (params.enableCosmetics && params.enableHoney) {
    cosmeticsRevenue = honeyRevenue * cosmeticsMultiplier;
    annualRevenue += cosmeticsRevenue;
  }

  // Operating Costs (Cera nova, alimentação na entressafra, embalagens de vidro com tampa, rótulos, transporte, manutenção de caixas)
  const totalHives = params.apisCount + params.asfCount;
  const costPerHivePerYear = 110; // R$/colmeia/ano
  const packagingCostRatio = 0.12; // 12% da receita bruta em vidros, rótulos e caixas térmicas
  const operatingCosts = (totalHives * costPerHivePerYear) + (annualRevenue * packagingCostRatio);

  const netProfit = Math.max(0, annualRevenue - operatingCosts);
  const netMargin = annualRevenue > 0 ? (netProfit / annualRevenue) * 100 : 0;

  // Estimated initial CAPEX (colmeias, indumentária, coletores, centrífuga básica)
  const estimatedCapex = (params.apisCount * 380) + (params.asfCount * 280) + 
    (params.enableApitoxin ? 1800 : 0) + 2500; // equipamentos fixos básicos

  const paybackMonths = netProfit > 0 ? Math.ceil((estimatedCapex / (netProfit / 12))) : 0;

  if (annualRevenue > 0) {
    if (honeyRevenue > 0) breakdown.push({ category: 'Méis (Apis & ASF)', amount: honeyRevenue, percentage: (honeyRevenue / annualRevenue) * 100 });
    if (propolisRevenue > 0) breakdown.push({ category: 'Extratos de Própolis', amount: propolisRevenue, percentage: (propolisRevenue / annualRevenue) * 100 });
    if (apitoxinRevenue > 0) breakdown.push({ category: 'Apitoxina Cristalizada', amount: apitoxinRevenue, percentage: (apitoxinRevenue / annualRevenue) * 100 });
    if (pollinationRevenue > 0) breakdown.push({ category: 'Serviços de Polinização', amount: pollinationRevenue, percentage: (pollinationRevenue / annualRevenue) * 100 });
    if (cosmeticsRevenue > 0) breakdown.push({ category: 'Cosméticos & Pomadas', amount: cosmeticsRevenue, percentage: (cosmeticsRevenue / annualRevenue) * 100 });
  }

  return {
    annualRevenue,
    operatingCosts,
    netProfit,
    monthlyNetProfit: netProfit / 12,
    netMargin,
    estimatedCapex,
    paybackMonths,
    breakdown
  };
}
