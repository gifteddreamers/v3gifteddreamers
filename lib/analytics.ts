/**
 * Google Analytics Event Tracking Utilities
 *
 * This module provides helper functions for tracking conversion events
 * in Google Analytics 4 (GA4) for Google Ad Grants compliance.
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set',
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Track a contact form submission (primary conversion)
 * @param formType - Type of form submitted (contact, booking, etc.)
 * @param organization - Organization name if provided
 */
export function trackFormSubmission(formType: string = 'contact', organization?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'Conversion',
      event_label: formType,
      value: 1,
      organization: organization || 'not_provided',
    });

    console.log(`[Analytics] Form submission tracked: ${formType}`);
  }
}

/**
 * Track a donation button click event
 * @param amount - The donation amount selected
 * @param location - Where the button was clicked (e.g., 'hero', 'footer', 'gruhp')
 */
export function trackDonationClick(amount: number, location: string = 'unknown') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'donate_click', {
      event_category: 'Conversion',
      event_label: location,
      value: amount,
      currency: 'USD',
    });

    console.log(`[Analytics] Donation click tracked: $${amount} from ${location}`);
  }
}

/**
 * Track a volunteer form submission
 * @param skills - Array of selected skills
 */
export function trackVolunteerSubmission(skills: string[]) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'volunteer_signup', {
      event_category: 'Conversion',
      event_label: skills.join(', '),
      value: 1,
    });

    console.log(`[Analytics] Volunteer signup tracked: ${skills.join(', ')}`);
  }
}

/**
 * Track outbound link clicks (e.g., to Substack, Givebutter)
 * @param url - The destination URL
 * @param label - A descriptive label for the link
 */
export function trackOutboundLink(url: string, label: string = 'unknown') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'Outbound Link',
      event_label: label,
      transport_type: 'beacon',
      link_url: url,
    });

    console.log(`[Analytics] Outbound link tracked: ${url} (${label})`);
  }
}

/**
 * Track page views (for SPA navigation)
 * @param pagePath - The page path
 * @param pageTitle - The page title
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });

    console.log(`[Analytics] Page view tracked: ${pagePath}`);
  }
}

/**
 * Track section views (for scroll-based engagement)
 * @param sectionName - Name of the section viewed
 */
export function trackSectionView(sectionName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'section_view', {
      event_category: 'Engagement',
      event_label: sectionName,
    });

    console.log(`[Analytics] Section view tracked: ${sectionName}`);
  }
}

/**
 * Track service page interest (for Ad Grants keyword tracking)
 * @param serviceName - Name of the service viewed
 */
export function trackServiceInterest(serviceName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      event_category: 'Engagement',
      event_label: serviceName,
      items: [{ item_name: serviceName }],
    });

    console.log(`[Analytics] Service interest tracked: ${serviceName}`);
  }
}

/**
 * Track CTA button clicks
 * @param ctaName - Name/label of the CTA
 * @param location - Page or section where CTA was clicked
 */
export function trackCTAClick(ctaName: string, location: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'Engagement',
      event_label: ctaName,
      location: location,
    });

    console.log(`[Analytics] CTA click tracked: ${ctaName} on ${location}`);
  }
}

/**
 * Track a generic event
 * @param eventName - The name of the event
 * @param params - Additional parameters for the event
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);

    console.log(`[Analytics] Event tracked: ${eventName}`, params);
  }
}
