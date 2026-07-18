# CHRM UK — Legal Copy & Cookie Consent

Not legal advice — solid working draft. Recommend a solicitor pass
before this goes live, particularly on the vehicle-photo/gallery
consent wording and the dealership-facing terms.

---

## Privacy Policy

*Last updated: [DATE]*

### Who we are
CHRM UK ("we," "us," "our") provides mobile chrome delete services for
vehicles, based in South Yorkshire, operating across the UK. This
policy explains what personal data we collect through chrmuk.com, why,
and what rights you have over it.

Contact for any privacy query: **info@chrmuk.com**

### What we collect

**When you contact us** (WhatsApp, contact form, or email): your name,
phone number, email address, any message or vehicle details you send,
and any photos you send us of your vehicle.

**When you browse the site**: standard analytics data via Google
Analytics 4 and Microsoft Clarity — pages visited, approximate
location (town/city level, from IP address), device type, and how you
interact with the site. This is only collected if you consent to
analytics cookies (see Cookies, below).

**Vehicle photos and number plates**: photos you send us to get a
quote may show your vehicle's number plate. A number plate can be used
to identify a vehicle's registered keeper, so we treat these images as
personal data. We use quote photos only to prepare your quote and
carry out the work you've asked for.

**Before/after photos in our gallery**: we may want to use photos of
completed work in our gallery or on social media. We will not do this
without asking first — if you'd rather your vehicle wasn't shown
publicly, or you'd like a photo removed after it's posted, just tell
us and we'll sort it.

### Why we collect it
- To respond to your enquiry and provide a quote
- To carry out and manage a booked job
- To understand how people use the site and improve it (analytics —
  only with consent)
- To meet our legal and accounting obligations

### Who we share it with
- **Resend** — the service that delivers contact form emails to our
  inbox
- **Google** (Analytics, Search Console) — if you've consented to
  analytics cookies
- **Microsoft** (Clarity) — if you've consented to analytics cookies

We don't sell your data, and we don't share it with anyone for their
own marketing purposes.

### How long we keep it
Enquiry and job data is kept for as long as needed to provide the
service and meet accounting/legal requirements (typically up to 6
years for financial records). Analytics data is retained per Google
Analytics' and Microsoft Clarity's standard retention settings.

### Your rights
Under UK GDPR, you can ask us to:
- Confirm what data we hold about you and give you a copy
- Correct inaccurate data
- Delete your data (subject to legal/accounting requirements to retain
  some records)
- Restrict or object to how we use your data
- Move your data to another provider

To exercise any of these, email **info@chrmuk.com**. You can also
complain to the Information Commissioner's Office (ICO) at ico.org.uk
if you think we've mishandled your data.

### Changes to this policy
We'll update the date at the top of this page when this policy
changes. Significant changes will be flagged clearly on the site.

---

## Terms of Website Use

*Last updated: [DATE]*

### About us
This website is operated by CHRM UK, based in South Yorkshire, England.

### Using this site
This site is for finding out about our chrome delete services and
getting in touch for a quote. You agree not to misuse the site,
attempt to access it in unauthorised ways, or use it for any unlawful
purpose.

### Quotes and pricing
Prices shown on this site are indicative and based on typical jobs.
Your actual quote is confirmed after we've seen photos or inspected
your vehicle, and may vary based on vehicle size, condition, and the
work involved. A quote isn't a binding contract until you've confirmed
a booking with us.

### Content and intellectual property
All content on this site — text, images, logo, and design — belongs
to CHRM UK unless otherwise stated, and shouldn't be copied or reused
without permission.

### Liability
We provide this website "as is" and take reasonable care to keep
information accurate and the site working properly, but don't
guarantee it will always be error-free or uninterrupted. Nothing in
these terms limits our liability where it can't legally be limited
(e.g. for negligence causing personal injury).

*Note: these are website terms only, covering use of chrmuk.com. Your
separate terms of business (covering the actual paid work — deposits,
cancellations, guarantees, liability for the physical job) should be
a distinct document, given to customers and dealership clients at the
point of booking — worth drafting alongside this, not instead of it.*

### Third-party links
This site may link to third-party sites (e.g. our Google Business
Profile, social media). We're not responsible for the content of sites
we don't control.

### Governing law
These terms are governed by the law of England and Wales.

### Contact
Questions about these terms: **info@chrmuk.com**

---

## Cookie Consent

### Banner copy
> **We use cookies**
> We use essential cookies to make the site work, and — only with your
> permission — analytics cookies to understand how it's used. You can
> change your mind anytime via "Cookie Settings" in the footer.
>
> [Accept All] [Reject Non-Essential] [Manage Preferences]

### Preference centre categories
- **Essential** (always on, can't be turned off) — needed for the site
  to function, no consent required
- **Analytics** (off by default) — Google Analytics 4, Microsoft
  Clarity. Only enabled once explicitly accepted.

### Technical requirement — important
Under UK PECR, analytics cookies (GA4, Clarity) **must not fire until
consent is given** — no pre-ticked boxes, no "continuing to browse
counts as consent." This means the GA4/GTM scripts in the scaffold
need to sit behind a consent check, not load unconditionally in the
root layout as originally scaffolded. Practically: use Google
Consent Mode v2 (GTM supports this natively) so GA4 stays in a
consent-pending state until the visitor accepts, rather than firing
immediately then trying to retroactively respect a rejection.

Footer needs a persistent **"Cookie Settings"** link so visitors can
change their choice at any time, not just on first visit.
