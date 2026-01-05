/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_N8N_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Extend Window interface for third-party scripts
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    Givebutter?: {
      q?: any[];
      (...args: any[]): void;
    };
    DDCONF?: {
      API_KEY: string;
    };
    doublethedonation?: any;
    clarity?: (...args: any[]) => void;
  }
}
