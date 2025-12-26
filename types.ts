export interface NavLink {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  price: string;
  features: string[];
}