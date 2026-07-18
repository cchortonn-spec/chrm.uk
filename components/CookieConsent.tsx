"use client";

import { useEffect, useState } from "react";
import {
  CONSENT_OPEN_EVENT,
  applyConsentMode,
  defaultConsent,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";

type CookieConsentProps = {
  onAnalyticsChange?: (granted: boolean) => void;
};

export default function CookieConsent({ onAnalyticsChange }: CookieConsentProps) {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [hydrated, setHydrated] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analyticsDraft, setAnalyticsDraft] = useState(false);

  useEffect(() => {
    const current = readConsent();
    setConsent(current);
    setAnalyticsDraft(current.analytics);
    setShowBanner(!current.decided);
    setHydrated(true);

    if (current.decided) {
      applyConsentMode(current.analytics);
      onAnalyticsChange?.(current.analytics);
    }

    const openPrefs = () => {
      const latest = readConsent();
      setConsent(latest);
      setAnalyticsDraft(latest.analytics);
      setShowPrefs(true);
      setShowBanner(false);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, openPrefs);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openPrefs);
  }, [onAnalyticsChange]);

  function persist(analytics: boolean) {
    const next = writeConsent({ analytics, decided: true });
    setConsent(next);
    setAnalyticsDraft(analytics);
    applyConsentMode(analytics);
    onAnalyticsChange?.(analytics);
    setShowBanner(false);
    setShowPrefs(false);
  }

  if (!hydrated) return null;

  return (
    <>
      {showBanner && !showPrefs ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 p-5 backdrop-blur-sm md:bottom-0 md:p-6"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="max-w-xl">
              <p className="font-heading text-lg font-medium tracking-tight text-foreground">
                We use cookies
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                We use essential cookies to make the site work, and — only with
                your permission — analytics cookies to understand how it&apos;s
                used. You can change your mind anytime via &quot;Cookie
                Settings&quot; in the footer.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => persist(true)}
                className="border border-white/25 bg-white/10 px-5 py-3 text-xs font-medium tracking-[0.1em] text-white uppercase backdrop-blur-md transition-[background-color,border-color] duration-300 hover:border-white/45 hover:bg-white/16"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={() => persist(false)}
                className="border border-border px-5 py-3 text-xs font-medium tracking-[0.1em] text-foreground uppercase transition-colors hover:border-foreground"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => {
                  setAnalyticsDraft(consent.analytics);
                  setShowPrefs(true);
                  setShowBanner(false);
                }}
                className="px-5 py-3 text-xs font-medium tracking-[0.1em] text-foreground-secondary uppercase transition-colors hover:text-foreground"
              >
                Manage Preferences
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showPrefs ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie preferences"
        >
          <div className="w-full max-w-lg border border-border bg-background p-6 md:p-8">
            <p className="font-heading text-xl font-medium tracking-tight text-foreground">
              Cookie Settings
            </p>
            <p className="mt-2 text-sm text-foreground-secondary">
              Choose which cookies we may use. Essential cookies are always on.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start justify-between gap-4 border-t border-border pt-6">
                <div>
                  <p className="text-sm font-medium text-foreground">Essential</p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground-secondary">
                    Needed for the site to function. Always on — no consent
                    required.
                  </p>
                </div>
                <span className="shrink-0 text-[10px] tracking-[0.14em] text-foreground-secondary uppercase">
                  Always on
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border-t border-border pt-6">
                <div>
                  <p className="text-sm font-medium text-foreground">Analytics</p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground-secondary">
                    Google Analytics 4 and Microsoft Clarity. Off by default —
                    only enabled if you accept.
                  </p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsDraft}
                  onClick={() => setAnalyticsDraft((v) => !v)}
                  className={`relative h-6 w-11 shrink-0 border transition-colors ${
                    analyticsDraft
                      ? "border-foreground bg-foreground"
                      : "border-border bg-background"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 bg-background transition-all ${
                      analyticsDraft
                        ? "left-6 bg-background"
                        : "left-0.5 bg-foreground"
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => persist(analyticsDraft)}
                className="border border-white/25 bg-white/10 px-5 py-3 text-xs font-medium tracking-[0.1em] text-white uppercase backdrop-blur-md transition-[background-color,border-color] duration-300 hover:border-white/45 hover:bg-white/16"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowPrefs(false);
                  if (!consent.decided) setShowBanner(true);
                }}
                className="border border-border px-5 py-3 text-xs font-medium tracking-[0.1em] text-foreground uppercase"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
