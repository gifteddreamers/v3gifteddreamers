/**
 * Analytics Loader - Loads analytics scripts only after user consent
 */

let analyticsLoaded = false;
let consentGiven = false;

/**
 * Check if user has given consent for analytics
 */
export function hasConsent(): boolean {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cookie-consent');
  return consent === 'accepted';
}

/**
 * Load Google Analytics 4 (GA4)
 */
function loadGoogleAnalytics() {
  if (analyticsLoaded) return;

  // Load GA4 script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6X01DRJBC0';
  document.head.appendChild(script);

  // Initialize GA4
  const win = window as any;
  if (!win.dataLayer) {
    win.dataLayer = [];
  }
  function gtag(...args: any[]) {
    win.dataLayer.push(args);
  }
  win.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', 'G-6X01DRJBC0');
  gtag('config', 'GT-KD7JXRM8');
  gtag('config', 'AW-17711415748');

  analyticsLoaded = true;
}

/**
 * Load Givebutter widgets
 */
function loadGivebutter() {
  if (document.querySelector('script[src*="js.givebutter.com"]')) return;

  const win = window as any;
  if (!win.Givebutter) {
    win.Givebutter = function(...args: any[]) {
      if (!win.Givebutter.q) {
        win.Givebutter.q = [];
      }
      win.Givebutter.q.push(args);
    };
  }
  win.Givebutter('setOptions', { accountId: 'PWF9tXFflbTG12rU' });

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://js.givebutter.com/elements/latest.js';
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.async = true;
  script2.src = 'https://widgets.givebutter.com/latest.umd.cjs?acct=PWF9tXFflbTG12rU&p=other';
  document.body.appendChild(script2);
}

/**
 * Load Double the Donation widget
 */
function loadDoubleDonation() {
  if (document.querySelector('script[src*="doublethedonation.com"]')) return;

  (window as any).DDCONF = { API_KEY: '6HMm5sEaYqgnLZmU' };
  const script = document.createElement('script');
  script.src = 'https://doublethedonation.com/api/js/ddplugin.js';
  script.async = true;
  document.body.appendChild(script);
}

/**
 * Load Microsoft Clarity Analytics
 * IMPORTANT: Only call this after explicit user consent
 */
function loadClarity() {
  // Double-check consent before loading Clarity (it sets cookies)
  if (!hasConsent()) {
    console.warn('Clarity load attempted without consent - blocking');
    return;
  }

  if (document.querySelector('script[src*="clarity.ms"]')) return;

  // Add DNS prefetch now that we have consent
  const dnsPrefetch = document.createElement('link');
  dnsPrefetch.rel = 'dns-prefetch';
  dnsPrefetch.href = 'https://www.clarity.ms';
  document.head.appendChild(dnsPrefetch);

  (function(c: any, l: Document, a: string, r: string, i: string) {
    c[a] = c[a] || function(...args: any[]) {
      if (!c[a].q) {
        c[a].q = [];
      }
      c[a].q.push(args);
    };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = 'https://www.clarity.ms/tag/' + i;
    const y = l.getElementsByTagName(r)[0];
    if (y && y.parentNode) {
      y.parentNode.insertBefore(t, y);
    } else {
      l.head.appendChild(t);
    }
  })(window, document, 'clarity', 'script', 'uk53w4bsjz');
}

/**
 * Load all analytics scripts
 * IMPORTANT: Only call this after user has explicitly consented
 */
export function loadAnalytics() {
  // Double-check consent before loading
  if (!hasConsent()) {
    console.warn('Analytics load attempted without consent - blocking');
    return;
  }

  if (consentGiven) return;
  consentGiven = true;

  loadGoogleAnalytics();
  loadGivebutter();
  loadDoubleDonation();
  loadClarity();
}

/**
 * Load analytics after user interaction (scroll, click, touch)
 * ONLY if user has given consent - prevents third-party cookies without consent
 */
export function loadAnalyticsOnInteraction() {
  // Only load if consent was given - don't load automatically
  if (!hasConsent()) {
    return;
  }

  if (consentGiven) {
    loadAnalytics();
    return;
  }

  // Load after user interaction (only if consent given)
  let interacted = false;
  const loadOnInteraction = () => {
    if (!interacted && hasConsent()) {
      interacted = true;
      loadAnalytics();
      // Remove listeners after first interaction
      window.removeEventListener('scroll', loadOnInteraction, { capture: true } as any);
      window.removeEventListener('click', loadOnInteraction, { capture: true } as any);
      window.removeEventListener('touchstart', loadOnInteraction, { capture: true } as any);
    }
  };

  window.addEventListener('scroll', loadOnInteraction, { once: true, passive: true, capture: true });
  window.addEventListener('click', loadOnInteraction, { once: true, capture: true });
  window.addEventListener('touchstart', loadOnInteraction, { once: true, passive: true, capture: true });
}

