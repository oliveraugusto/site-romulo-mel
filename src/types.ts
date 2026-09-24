export type ProductCategory = 
  | 'all' 
  | 'apis_honey' 
  | 'asf_honey' 
  | 'propolis' 
  | 'royal_jelly' 
  | 'beeswax' 
  | 'equipment';

export interface TechnicalSpecs {
  botanicalSource: string;
  moisture: string;
  apiaryRegion: string;
  saspCertificate: string;
  extractionMethod: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'apis_honey' | 'asf_honey' | 'propolis' | 'royal_jelly' | 'beeswax' | 'equipment';
  categoryLabel: string;
  beeSpecies: string;
  volumeOrWeight: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  inStock: boolean;
  stockCount: number;
  image: string;
  features: string[];
  technicalSpecs: TechnicalSpecs;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface TutorialStep {
  title: string;
  duration: string;
  description: string;
  technicalTips: string[];
  safetyWarning?: string;
  toolsNeeded: string[];
}

export interface TutorialTrack {
  id: string;
  title: string;
  subtitle: string;
  category: 'manejo' | 'captura' | 'multiplicacao' | 'apitoxina';
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Especialista';
  estimatedTime: string;
  coverImage?: string;
  summary: string;
  practicalOutcome: string;
  steps: TutorialStep[];
  faq: { question: string; answer: string }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MonetizationPillar {
  id: string;
  title: string;
  subtitle: string;
  profitPotential: string;
  paybackPeriod: string;
  ticketMedio: string;
  description: string;
  lucroEstimado: string;
  subcategories: {
    name: string;
    marketPrice: string;
    productionMargin: string;
    details: string;
  }[];
  regulatoryNotes: string;
}
