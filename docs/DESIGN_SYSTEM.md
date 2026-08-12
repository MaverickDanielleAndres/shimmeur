# SHIMMEUR LANDING PAGE — DESIGN SYSTEM & FRONTEND DIRECTION

## Design objective

Create a one-page site that feels like a premium Australian property/lifestyle design brand.

It should look considered, editorial, warm and quietly confident.

The design must be recognisably Shimmeur, not a generic real-estate website and not a tech startup.

## Brand tokens

```css
:root {
  --shimmeur-navy: #0C4160;
  --shimmeur-navy-deep: #082E47;
  --shimmeur-sage: #5D7772;
  --shimmeur-sage-light: #95A58D;
  --shimmeur-stone: #DAD9D6;
  --shimmeur-cream: #F7F4EF;
  --shimmeur-white: #FFFFFF;
  --shimmeur-charcoal: #1A1A1A;
  --shimmeur-mid: #4A4A4A;
}
```

Do not introduce a second competing palette.

## Typography

Use:
- `Playfair Display` for display headings, section headings, selected italics, elegant quotes
- `DM Sans` for body copy, navigation, labels, forms, buttons

Recommended implementation:
- load both with `next/font/google`
- use moderate weights
- avoid excessive bold text
- keep line lengths readable

### Suggested scale

Desktop:
- hero display: `clamp(3.25rem, 6vw, 5.75rem)`
- major section heading: `clamp(2.3rem, 4vw, 4rem)`
- card/feature heading: `1.25rem–1.6rem`
- body lead: `1.05rem–1.2rem`
- body: `0.95rem–1.05rem`
- eyebrow: `0.68rem–0.75rem`, uppercase, generous tracking

Mobile:
- hero: roughly `2.6rem–3.5rem`
- major section heading: `2rem–2.7rem`
- preserve comfortable line height

Use visual judgement from the required taste/minimalist/redesign skills rather than forcing exact values where they harm composition.

## Layout

Use a consistent content width, around `1160–1200px`, with fluid page gutters.

Desktop horizontal gutters:
- roughly 40–56px

Tablet:
- roughly 28–36px

Mobile:
- roughly 20–24px

Section spacing should feel generous but not wasteful.

Do not create large empty mobile gaps copied from desktop.

## Shape language

Keep shapes restrained:
- subtle 2–6px radii where needed
- editorial image frames
- fine borders
- careful horizontal rules
- simple rectangular CTAs
- no excessive pills

Cards should be used only when grouping genuinely benefits understanding.

## Navigation

Single-page anchors.

Suggested anchors:
- What We Do
- Who We Help
- Our Work
- About
- Get in Touch

Desktop:
- clean, lightweight
- approved logo on left
- links in the middle/right
- CTA on right

Scrolled state may shift from transparent/dark hero treatment to warm white or cream if contrast remains strong.

Mobile:
- compact header
- accessible menu
- no full-screen animation circus
- focus trapping only if the menu is implemented as a true dialog

## Hero direction

The hero must immediately establish:
- Shimmeur
- property/lifestyle consulting and renovation/value positioning
- one emotional/editorial headline
- one concise explanation
- one primary CTA

Use navy as the dominant hero field or a client-supplied property image with an approved, readable treatment.

Do not place the logo directly over a busy photograph unless the brand rules are respected.

Avoid giant metric dashboards in the hero. If model facts are shown, keep them secondary and fully sourced.

## Section rhythm

Alternate intentionally between:
- warm white
- cream
- navy
- very controlled sage/stone accents

Do not alternate background colours mechanically every section.

Use one or two strong dark moments across the page.

## Property imagery

Priority:
1. real Shimmeur project imagery embedded in supplied files
2. supplied Natalie portraits
3. approved local brand assets

Do not use web images.

For project imagery:
- preserve aspect ratio
- avoid fake before/after pairings
- use editorial captions
- identify project location only when supported
- never use image enhancement that materially changes the property

## Natalie imagery

Two client-provided portraits are available:
- `NP Headshot.jpeg`
- `Casual compressed.jpg`

Use one primary portrait in the About section.
Use the second only if it improves the page and does not make the site feel repetitive.

Natural crops are preferred.
Do not over-retouch.

## Motion

Motion should be subtle:
- opacity + small translate on section entry
- image reveal/mask only if tasteful
- hover transitions on links/buttons
- sticky nav transition

Avoid:
- bouncing
- rotating decorative elements
- constant floating cards
- heavy scroll-jacking
- huge parallax shifts
- cursor gimmicks

Respect `prefers-reduced-motion`.

If no animation library is already installed, prefer CSS/IntersectionObserver rather than adding a large package for basic reveals.

## Buttons

Primary:
- high contrast
- rectangular/slightly softened
- calm, clear label

Secondary:
- text link or subtle outline

Do not use more than two competing CTA styles.

Suggested labels must come from client language:
- Get in Touch
- Let's Talk
- See How It Works
- See Our Work

## Forms

Keep fields minimal.

Potential fields from the prototype:
- First name
- Last name
- Email
- Phone
- Property suburb
- Situation
- Message/property details

Only keep the fields needed for a landing-page enquiry.

If no backend/form service exists, do not fake a successful submission.

A mailto fallback may be acceptable only if it fits the project/client decision.

## Footer

Use deep navy or primary navy.

Include:
- approved mark/logo
- Shimmeur
- `Signature Spaces. Lasting Impressions.`
- validated email
- phone
- website
- optional `Beauty · Passion · Connection`

No invented social links.

## Anti-template checklist

Before finishing, verify the site does NOT look like:
- a Tailwind template
- a SaaS landing page
- a generic builder site
- an Airbnb clone
- a real-estate listing portal
- a dark "luxury property" theme

The strongest visual cue should be Shimmeur's own editorial brand system.
