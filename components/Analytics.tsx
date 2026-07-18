"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import { applyConsentMode, readConsent } from "@/lib/consent";

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

/**
 * Loads GA4/GTM after Consent Mode defaults (set in layout).
 * Clarity only injects when analytics consent is granted.
 */
export default function Analytics() {
  const [analyticsGranted, setAnalyticsGranted] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing.decided) {
      applyConsentMode(existing.analytics);
      setAnalyticsGranted(existing.analytics);
    }
  }, []);

  const onAnalyticsChange = useCallback((granted: boolean) => {
    setAnalyticsGranted(granted);
  }, []);

  return (
    <>
      {gtmId ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}

      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {gtmId ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      ) : null}

      {clarityId && analyticsGranted ? (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");`}
        </Script>
      ) : null}

      <CookieConsent onAnalyticsChange={onAnalyticsChange} />
    </>
  );
}
