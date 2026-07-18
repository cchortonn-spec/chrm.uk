"use client";

import { openCookieSettings } from "@/lib/consent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="tracking-[0.08em] uppercase transition-colors duration-300 hover:text-foreground"
    >
      Cookie Settings
    </button>
  );
}
