# SHIMMEUR ONE-PAGE LANDING PAGE — MASTER BUILD PROMPT

## Mission

Build and polish the **Shimmeur** website as a **single-page landing page** in the existing **Next.js** codebase.

The Next.js boilerplate is already in place. Work inside the current project. Do not replace the project with another framework, do not scaffold a new app, and do not add unnecessary packages.

The website must feel premium, warm, design-led, calm, editorial, trustworthy, and property-focused. It should sit at the intersection of **property, lifestyle, renovation, design, and project leadership**, not look like a generic real-estate template.

## Non-negotiable source-of-truth rule

**THE LOCAL CLIENT DOCUMENTS ARE THE ONLY SOURCE OF TRUTH FOR CONTENT, BRANDING, CLAIMS, SERVICES, CONTACT DETAILS, CREDENTIALS, PROJECTS, AND VISUAL DIRECTION.**

Do not use Google, external websites, social media, generic real-estate facts, invented copy, invented credentials, invented project results, invented testimonials, or guessed business information.

Do not add anything simply because it is common on a property website.

Before writing or changing the website, inspect the complete contents of:

`C:\Users\S-300V5A\Downloads\Shimmeur\shimmeur\docs\`

Equivalent file URL:

`file:///c:/Users/S-300V5A/Downloads/Shimmeur/shimmeur/docs/`

Expected reference files include:

- `Shimmeur_Brand_Guidelines.html`
- `shimmeur-website-prototype.html`
- `Brand Colours Aug 26.pptx`
- `Shimmeur client preso.pptx`
- `Shimmeur - Creative value driven PM.pdf`
- `Natalie_Phillips_Partner_Bio Aug 26.pdf`
- `JV Partner Profiles Aug 2026.pdf`
- `Shimmeur_Proposal_Template.docx`
- `Casual compressed.jpg`
- `NP Headshot.jpeg`
- any approved Shimmeur logos, monograms, or image assets stored in the same `docs` directory

If additional client files are present in `/docs`, inspect them too before implementation.

Do not assume a file is irrelevant based only on its extension. PPTX, PDF, DOCX, HTML, JPG/JPEG, PNG, and other local client assets may contain important copy, imagery, brand rules, examples, or credentials.

## Required source hierarchy

Use sources for the role they are strongest at:

1. **`Shimmeur_Brand_Guidelines.html`**
   - Primary authority for brand identity, logo rules, typography, colour system, visual tone, photography direction, and brand applications.
   - It explicitly identifies `shimmeur-website-prototype.html` as the direct website build brief.

2. **`shimmeur-website-prototype.html`**
   - Primary authority for the one-page website's structure, information architecture, interaction concept, section order, and baseline website copy.
   - Treat it as a reference, not as code that must be copied literally.
   - Rebuild it properly in Next.js using the existing project architecture.

3. **Latest Shimmeur business documents**
   - `Shimmeur client preso.pptx`
   - `Shimmeur - Creative value driven PM.pdf`
   - `Shimmeur_Proposal_Template.docx`
   - `Natalie_Phillips_Partner_Bio Aug 26.pdf`
   - `JV Partner Profiles Aug 2026.pdf`
   - Use these to validate business positioning, services, client situations, process, founder information, project evidence, licence information, and contact details.

4. **`Brand Colours Aug 26.pptx`**
   - Supporting authority for the intended sophisticated, soft grey-green / darker green / grey-azure / light-grey brand feel.
   - When exact digital colour values are needed, use the exact tokens documented in the HTML brand guidelines.

5. **Provided photographs and embedded document imagery**
   - Use real supplied assets before considering any generated or external image.
   - Do not invent a Shimmeur renovation and present it as a real project.

### Conflict rule

The documents contain some differing versions of figures and contact copy.

When two documents conflict:
- Do not combine them into a new claim.
- Prefer the most specific, latest, clearly client-approved source when that precedence is obvious.
- If precedence is not obvious, **avoid displaying the conflicting figure** or use wording that is fully supported by both.
- Never guess.

Examples of known conflicts to handle carefully:
- Natalie profile documents contain different renovation counts.
- Some materials use different contact email copy.
- Some materials describe project/refurbishment values differently.
- The prototype contains placeholders and "coming soon" content that may have been superseded by supplied assets.

For the landing page, do not show a disputed renovation count unless you can establish the approved number from the local documents.

## Skills you MUST read and follow

Before making design or implementation decisions, read these local skill files:

1. `file:///c:/Users/S-300V5A/Downloads/Shimmeur/shimmeur/skills/taste-skill/SKILL.md`
2. `file:///c:/Users/S-300V5A/Downloads/Shimmeur/shimmeur/skills/taste-skill-v1/SKILL.md`
3. `file:///c:/Users/S-300V5A/Downloads/Shimmeur/shimmeur/skills/redesign-skill/SKILL.md`
4. `file:///c:/Users/S-300V5A/Downloads/Shimmeur/shimmeur/skills/output-skill/SKILL.md`
5. `file:///c:/Users/S-300V5A/Downloads/Shimmeur/shimmeur/skills/minimalist-skill/SKILL.md`
6. `file:///c:/Users/S-300V5A/Downloads/Shimmeur/shimmeur/skills/imagegen-frontend-web/SKILL.md`

Also inspect any supporting files those skill documents explicitly require.

### Skill precedence

The skills control **craft, layout quality, frontend execution, restraint, responsiveness, and output discipline**.

They do **not** have permission to override the client's documents.

If a skill suggests content, colours, images, sections, effects, libraries, or branding that conflict with `/docs`, the `/docs` source-of-truth rule wins.

If `imagegen-frontend-web` recommends generating imagery:
- Do not generate fake before/after projects.
- Do not generate fake property outcomes.
- Do not generate a fake portrait of Natalie.
- Do not generate any visual that could be interpreted as documented Shimmeur work.
- Prefer supplied photos and imagery embedded in the client documents.
- Generated visuals, if used at all, must be clearly decorative and must not introduce new factual claims.

## Existing technical context

- Framework: **Next.js**
- Existing boilerplate: **already installed and configured**
- Scope: **one landing page only**
- Keep dependencies lightweight.
- Prefer native CSS/Tailwind/project-existing styling over adding a UI framework unless one is already installed and useful.
- Use `next/image` for raster assets when appropriate.
- Use `next/font` for the documented typography when possible.
- Keep client-side JavaScript minimal.
- Components are welcome for maintainability, but do not over-engineer a one-page site.
- Do not add a CMS, database, authentication, dashboard, blog system, or backend unless the local documents explicitly require it.
- Do not create extra routes just to make the project feel larger.

## Brand system to preserve

From the approved brand guidelines, use the documented palette:

- Primary Navy: `#0C4160`
- Deep Navy: `#082E47`
- Sage Teal: `#5D7772`
- Light Sage: `#95A58D`
- Stone: `#DAD9D6`
- Cream: `#F7F4EF`
- White: `#FFFFFF`
- Charcoal: `#1A1A1A`
- Mid Grey: `#4A4A4A`

Use them with restraint. Navy and warm neutrals should carry most of the visual weight, with sage used as a controlled accent.

Typography from the brand guidelines:

- Display / headings: **Playfair Display**
- Body / UI: **DM Sans**
- Wordmark treatment must follow the approved logo/brand files, not a hand-made approximation.

Do not substitute trendy fonts simply because they look modern.

## Logo rules

Use only approved local Shimmeur logo assets.

Never:
- recolour the logo outside approved combinations
- rotate it
- stretch or distort it
- add glow, bevel, emboss, outline, or drop-shadow effects
- manually recreate the approved logo/wordmark
- place it over a busy image without the clean treatment required by the brand guide

Use the S monogram only in contexts allowed by the brand guidelines, such as favicon or very small applications.

## Visual direction

The site should feel like a refined design/lifestyle publication rather than a mass-market property portal.

Aim for:
- generous whitespace
- clear editorial hierarchy
- sophisticated typography
- strong but restrained navy sections
- warm cream/white breathing space
- sage accents
- high-quality real property imagery from supplied materials
- careful image crops
- clean dividers
- subtle motion only when it improves comprehension
- polished desktop composition
- equally intentional tablet and mobile layouts

Avoid:
- generic SaaS cards everywhere
- excessive rounded cards
- giant pill buttons
- glassmorphism for its own sake
- neon gradients
- blue/purple tech gradients
- crowded icon grids
- noisy patterns
- overly dark "luxury" styling
- cold blue real-estate photography
- oversaturated grass
- HDR-looking images
- fisheye/wide-angle exaggeration
- template-looking stock property imagery
- excessive parallax or animation
- animation that delays reading
- fake social proof
- fake client logos
- fake testimonials
- fake statistics

## Photography and Natalie imagery

Use the two supplied Natalie photographs where appropriate:

- `NP Headshot.jpeg`
- `Casual compressed.jpg`

Use them as real client-supplied portraits.

Follow the brand direction for portraits:
- warm
- confident
- present
- natural
- not over-filtered
- preserve natural skin tone
- avoid cold/grey treatment

For property/project imagery:
- inspect the supplied PPTX/PDF source files for embedded approved property images
- extract/reuse real embedded images if they are part of the approved documents and technically available
- do not use web images
- do not use unrelated stock imagery unless an explicit local client document authorises a specific stock source and there is no provided client image
- do not label a generated or stock image as a Shimmeur project

## Content positioning

Shimmeur's source documents support themes including:

- `Signature Spaces. Lasting Impressions.`
- unlocking property value before sale
- design-led renovations
- lifestyle properties and emotional connection
- fast, focused renovation/project execution
- end-to-end renovation management
- taking the hassle out of property preparation
- vision, scope, trusted trade teams, and project delivery
- property owners with limited time, resources, or expertise
- situations including deceased estates, divorce/separation, downsizing, and rental-property refreshes
- Natalie Phillips as Founder / Property Lifestyle Consultant
- design sensitivity combined with serious project/change leadership and commercial experience
- `Beauty · Passion · Connection`

Use exact wording from the documents where it is clearly approved. When adapting layout copy, preserve meaning and do not add new claims.

## Recommended one-page architecture

Start from the structure in `shimmeur-website-prototype.html`, then refine it using all client documents.

Recommended order:

1. **Header / navigation**
   - Shimmeur approved logo
   - anchor links only
   - primary CTA: Get in Touch / Let's Talk, using approved wording

2. **Hero**
   - strong Shimmeur positioning
   - one clear supporting paragraph
   - primary CTA
   - optional secondary anchor CTA
   - use only claims supported in `/docs`
   - avoid overloading the hero with too many statistics

3. **The opportunity / problem**
   - explain why properties can lose potential when owners lack time, expertise, resources, or bandwidth
   - keep empathetic and concise
   - avoid fear-based copy

4. **What Shimmeur does**
   - design-led property preparation / renovation
   - end-to-end management
   - relevant services supported by the documents:
     - rental refresh & rejuvenation
     - house & apartment turnovers
     - styling for sale
     - full vision & project management
     - property repositioning / focused renovation where supported

5. **How the Shimmeur model/process works**
   - use the approved process from the proposal/prototype
   - if presenting the funded-renovation partnership model, preserve the source language and include appropriate "illustrative only" context for example returns
   - do not turn an illustrative example into a promise

6. **Who Shimmeur helps**
   - deceased estates
   - divorce / separation
   - downsizers
   - long-term rental owners / rental refresh situations
   - wording should be respectful and not sensational

7. **Selected work / property experience**
   - prioritise real examples from `Shimmeur client preso.pptx`
   - examples include The Entrance, NSW and Baulkham Hills, NSW
   - use only figures and outcomes that are documented
   - if using before/after galleries, pair only genuine corresponding project images
   - if image matching is uncertain, use a simpler editorial project feature rather than making a false before/after claim

8. **About Natalie**
   - use supplied portrait
   - Founder / Property Lifestyle Consultant
   - combine design eye, project leadership, change/project background, property experience, and people-first approach
   - avoid disputed numeric claims
   - use supported credentials only

9. **Trust / surety**
   - include licence/company details only if appropriate and exactly as supplied:
     - Builders Licence 468960
     - Monistar Building Pty Ltd
     - Company Licence 478414C
   - do not imply Natalie personally holds a licence unless the source explicitly says that

10. **Contact / CTA**
    - simple, calm, inviting
    - use validated contact details
    - do not invent CRM integrations
    - if a form is used, it must be functional within the existing project capability or clearly implemented using a simple supported method
    - never show a success state for a form that does not actually submit

11. **Footer**
    - approved logo/monogram
    - tagline
    - contact details
    - `Beauty · Passion · Connection` where appropriate

## Canonical business details

Use these only after validating against the local docs during implementation:

- Brand: **Shimmeur**
- Tagline: **Signature Spaces. Lasting Impressions.**
- Founder: **Natalie Phillips**
- Role: **Founder & Property Lifestyle Consultant**
- Website: **www.shimmeur.co**
- Phone: **+61 416 254 020**
- Preferred general contact for the site: use the strongest supported current Shimmeur email from the latest approved documents. Do not use `hello@shimmeur.co` merely because it appears in the prototype if later approved documents point to a different address.
- Brand phrase: **Beauty · Passion · Connection**

Strongly supported email across the formal brand/profile/proposal material:
- `natalie@shimmeur.co`

A separate creative-property-manager flyer uses:
- `letstalk@shimmeur.co`

Do not display multiple emails without a clear reason. Resolve from the newest/most authoritative local source, otherwise default to the formal business contact consistently used in the brand/profile/proposal documents.

## Claims and numbers

Treat all numbers as sensitive factual claims.

Before displaying a number:
1. find it in the local source documents
2. confirm what it refers to
3. check for conflicting versions
4. preserve qualifiers such as "illustrative"
5. do not round or embellish unless the source already does

Never turn:
- an example uplift into a guaranteed outcome
- project spend into revenue
- corporate program size into property value
- a builder/company licence into a personal licence
- a partner profile into Shimmeur's sole-company track record without context

## Accessibility

Meet strong baseline accessibility:

- semantic HTML
- one logical H1
- meaningful heading hierarchy
- visible keyboard focus
- usable keyboard navigation
- accessible mobile menu
- alt text based only on what the supplied image actually shows
- sufficient colour contrast
- no text baked into new images when HTML text is more appropriate
- buttons must be buttons, links must be links
- forms need labels, errors, and clear states
- respect `prefers-reduced-motion`

## Responsive requirements

Test and refine at least:

- 1440px desktop
- 1280px desktop
- 1024px tablet/compact laptop
- 768px tablet
- 430px mobile
- 390px mobile
- 360px small mobile

No horizontal overflow.

Maintain intentional spacing on mobile. Do not simply stack a desktop layout with huge gaps.

Images must crop deliberately and never distort.

## Performance

Keep this landing page light:

- optimise images
- use responsive image sizes
- avoid massive uncompressed PPT-export assets in the final public bundle
- convert/export client images to appropriate web formats if needed while preserving quality
- avoid unnecessary JS
- avoid unnecessary animation libraries
- avoid loading both duplicate font systems
- lazy-load below-the-fold images where appropriate
- keep layout stable to reduce CLS

## SEO

Only use information supported by `/docs`.

Implement:
- page title
- meta description
- canonical URL for `https://www.shimmeur.co` if appropriate in the existing deployment setup
- Open Graph basics using supplied brand imagery if available
- descriptive image alt text
- semantic section copy
- LocalBusiness/ProfessionalService schema only if every field is supported by the client documents

Do not invent:
- street address
- ABN
- opening hours
- service regions beyond what is explicitly supported
- reviews
- ratings
- awards
- legal business structure

## Implementation workflow

Follow this sequence.

### Step 1 — Audit before coding

Read:
- every file in `/docs`
- every required `SKILL.md`
- current Next.js project structure
- current dependencies
- current styling setup
- current `app` or `pages` router structure

Create a private implementation checklist from the sources.

### Step 2 — Extract approved assets

Identify:
- approved Shimmeur logo files
- monogram
- Natalie portraits
- property/project images embedded in local client documents
- any approved textures or brand graphics

If necessary, extract images from PPTX/DOCX archives into an appropriate public asset directory, but do not modify the source documents.

Use sensible filenames.

### Step 3 — Build design tokens

Centralise the approved:
- colours
- typography
- spacing
- max widths
- border/radius treatment
- motion timing

Do not scatter random hex values across components.

### Step 4 — Implement the page

Build the single-page layout using semantic components.

Keep the section architecture easy to scan and easy to maintain.

### Step 5 — Validate source fidelity

Compare every visible:
- claim
- number
- service
- title
- location
- project result
- contact detail
- CTA
- brand phrase

against `/docs`.

Remove anything that cannot be sourced.

### Step 6 — Visual QA

Check:
- desktop
- tablet
- mobile
- nav states
- image crops
- font loading
- focus states
- reduced motion
- forms
- anchors
- footer
- long text wrapping
- no accidental placeholder copy
- no "coming soon" copy where a supplied asset now exists

### Step 7 — Technical QA

Run the project's available checks, for example:
- lint
- typecheck
- build
- relevant tests

Fix issues you introduced.

Do not hide errors with `any`, disabled lint rules, or broad ignores unless the existing project genuinely requires it.

## Final output expectations

Do the implementation, not just a design critique.

At completion, report concisely:

1. files changed
2. sections implemented
3. source assets used
4. any conflicting client facts you deliberately avoided
5. build/lint/typecheck status
6. anything that still requires client confirmation

Do not add out-of-scope features.

Do not use outside research.

Do not invent content.

**The client documents in `/docs` remain the final authority at every stage.**
