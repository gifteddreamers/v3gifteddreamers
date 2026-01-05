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
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  
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

  window.Givebutter = window.Givebutter || function(...args: any[]) {
    (window.Givebutter.q = window.Givebutter.q || []).push(args);
  };
  (window.Givebutter as any)('setOptions', { accountId: 'PWF9tXFflbTG12rU' });

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
 */
function loadClarity() {
  if (document.querySelector('script[src*="clarity.ms"]')) return;

  (function(c: any, l: Document, a: string, r: string, i: string, t: any, y: any) {
    c[a] = c[a] || function(...args: any[]) {
      (c[a].q = c[a].q || []).push(args);
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', 'uk53w4bsjz');
}

/**
 * Load all analytics scripts
 */
export function loadAnalytics() {
  if (consentGiven) return;
  consentGiven = true;

  loadGoogleAnalytics();
  loadGivebutter();
  loadDoubleDonation();
  loadClarity();
}

/**
 * Load analytics after user interaction (scroll, click, touch)
 * This provides a fallback if consent banner isn't shown
 */
export function loadAnalyticsOnInteraction() {
  if (hasConsent() || consentGiven) {
    loadAnalytics();
    return;
  }

  let interacted = false;
  const loadOnInteraction = () => {
    if (!interacted) {
      interacted = true;
      loadAnalytics();
      // Remove listeners after first interaction
      window.removeEventListener('scroll', loadOnInteraction, { capture: true } as any);
      window.removeEventListener('click', loadOnInteraction, { capture: true } as any);
      window.removeEventListener('touchstart', loadOnInteraction, { capture: true } as any);
    }
  };

  // Load after 2 seconds OR on first user interaction
  setTimeout(() => {
    if (!hasConsent() && !interacted) {
      loadAnalytics();
    }
  }, 2000);

  window.addEventListener('scroll', loadOnInteraction, { once: true, passive: true, capture: true });
  window.addEventListener('click', loadOnInteraction, { once: true, capture: true });
  window.addEventListener('touchstart', loadOnInteraction, { once: true, passive: true, capture: true });
}

