export interface Provider {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  logo_url?: string;
  website?: string;
  email: string;
  phone?: string;
  address?: string;
  categories: string[];
  tags: string[];
  verified: boolean;
  featured: boolean;
  rating?: number;
  review_count?: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  author: string;
  category: string;
  published_at: string;
  read_time: number;
}

export interface QuoteRequest {
  id?: string;
  provider_id: string;
  name: string;
  email: string;
  company: string;
  message: string;
  created_at?: string;
}

export interface ProviderApplication {
  id?: string;
  company_name: string;
  contact_name: string;
  email: string;
  website?: string;
  phone?: string;
  description: string;
  categories: string[];
  created_at?: string;
  status?: "pending" | "approved" | "rejected";
}

export const PROVIDER_CATEGORIES = [
  "KI-Entwicklung",
  "KI-Beratung",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Prozessautomatisierung",
  "Datenanalyse",
  "KI-Tools & Software",
] as const;
