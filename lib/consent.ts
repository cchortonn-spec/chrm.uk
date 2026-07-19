export const CONSENT_STORAGE_KEY = "rign-cookie-consent";
export const CONSENT_OPEN_EVENT = "rign-open-cookie-settings";

export type ConsentState = {
  /** Essential cookies — always true, cannot be turned off */
  essential: true;
  /** Analytics (GA4, Clarity) — off until explicitly accepted */
  analytics: boolean;
  /** Whether the visitor has made a choice */
  decided: boolean;
};

export const defaultConsent: ConsentState = {
  essential: true,
  analytics: false,
  decided: false,
};

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return defaultConsent;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return {
      essential: true,
      analytics: Boolean(parsed.analytics),
      decided: Boolean(parsed.decided),
    };
  } catch {
    return defaultConsent;
  }
}

export function writeConsent(next: Omit<ConsentState, "essential">) {
  const state: ConsentState = {
    essential: true,
    analytics: next.analytics,
    decided: next.decided,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(
    new CustomEvent("rign-consent-updated", { detail: state })
  );
  return state;
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

type GtagFn = (
  command: string,
  action: string | Date,
  params?: Record<string, unknown>
) => void;

/** Apply Google Consent Mode v2 update */
export function applyConsentMode(analyticsGranted: boolean) {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  };

  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = ((command, action, params) => {
      w.dataLayer!.push([command, action, params]);
    }) as GtagFn;
  }

  w.gtag("consent", "update", {
    ad_storage: analyticsGranted ? "granted" : "denied",
    ad_user_data: analyticsGranted ? "granted" : "denied",
    ad_personalization: analyticsGranted ? "granted" : "denied",
    analytics_storage: analyticsGranted ? "granted" : "denied",
  });
}
