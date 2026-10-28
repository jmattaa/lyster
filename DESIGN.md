---
name: Lyster
description: A warm paper-and-ink world for modern husmanskost — Swedish classics and a European table, flat planes, cobalt fields, brass rules.
colors:
  paper: "#f4eddf"
  paper-shade: "#eadfcb"
  paper-light: "#fbf7ee"
  ink: "#1b1a17"
  ink-soft: "#4d483f"
  ink-faint: "#726b5f"
  cobalt: "#1e3a5f"
  cobalt-deep: "#142a45"
  brass: "#a97e34"
  brass-ink: "#7d5a1e"
  brass-bright: "#c49a4a"
  brass-pale: "#eed8a7"
  lingon: "#8c3a36"
  dill: "#3f5f49"
  crust: "#8a5a3b"
  crust-light: "#a9744c"
typography:
  wordmark:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(4.4rem, 15.4vw, 12.5rem)"
    fontWeight: 700
    lineHeight: 0.78
    letterSpacing: "-0.065em"
  display:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.75rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.1rem, 4.5vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "0.14em"
rounded:
  flat: "0"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4.2vw, 4.5rem)"
  section: "clamp(5.5rem, 11vw, 10.5rem)"
  section-tight: "clamp(3.5rem, 7vw, 6rem)"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.flat}"
    padding: "0.7rem 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.brass-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.flat}"
  button-gold:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.flat}"
    padding: "0.7rem 1.5rem"
    height: "3rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.flat}"
    padding: "0.7rem 1.5rem"
    height: "3rem"
---

# Design System: Lyster

## Overview

**Creative North Star: "The Printed Room"**

Lyster looks like a menu printed on good paper and laid on a plain table: warm beige ground, one confident cobalt field, a brass rule holding the line. The room is not illustrated; it is photographed. The homepage opens with a full-bleed band split between a cobalt copy plane and a real, daylight photograph of the dining room. The page is bright and airy, never solemn; the luxury is in the craft, not in the lighting.

The about spread carries the restaurant's definition. A side label and a monumental statement sit against a tall standfirst; beneath them, two equal columns on Chalk Paper set the Swedish kitchen beside the European table, and three numbered principles close the spread. It reads as a printed editorial page, not a card grid.

The system is deliberately undecorated. There are no shadows, gradients, rounded cards, or glass. Depth comes from flat tonal layers — paper against cobalt against brass — and from planes meeting on clean edges, like printed sheets laid side by side. Type carries most of the personality: one Swedish grotesk in monumental and whisper sizes, with true italics for emphasis, tight negative tracking on the large end, and generous letterspacing on the small end. Layout is asymmetric and editorial, but always readable as a restaurant site first.

Motion is precise and editorial: the hero photograph wipes into place once, section copy reveals as it enters, and the menu rail marks the current category. Nothing floats, bounces, or loops. If motion cannot clarify a change of state, it is left out.

**Key Characteristics:**
- Warm beige paper ground with a subtle 128px noise texture.
- Cobalt is a room you walk into (hero band, proof band, booking band), not a global theme.
- Brass appears as 1px rules, small dots, underlines, and one large disc.
- Square corners everywhere; the only curves are circles (the proof photo crop, the booking disc, the mark).
- One typeface, used from 0.68rem captions to a 12.5rem wordmark, with a real italic cut.
- Exactly one authored glyph: the brand Mark. Everything else is type, photography, rule, and a live map.
- Real photography, never illustration: a full-bleed band in the hero and a circular crop in the proof.
- Flat at rest: no box-shadows, no gradients, no glass, no rounded cards.

## Colors

A warm paper neutral, one deep cobalt, and a brass accent, with ingredient colors reserved for menu language and small dietary tags.

### Primary

- **Cobalt Field** (#1e3a5f): Primary brand field. It fills the hero copy plane, the proof band, the booking band, and primary buttons. White-on-cobalt is the default high-contrast pairing.
- **Late Cobalt** (#142a45): The darkest field, used for the booking band where the gold disc and gold button need more separation.

### Secondary

- **Brass Rule** (#a97e34): The signature accent. Gold appears as 1px rules, the wordmark's Y and dot, focus outlines, scrollbar thumb, underlines, and the large booking disc. It is also the fill of the single most important CTA ("Boka bord" in the booking band).
- **Deep Brass Ink** (#7d5a1e): Accessible brass text on paper; used for small meta labels and category counts.
- **Polished Brass** (#c49a4a): Hover fill for primary buttons and the bright center of the mark.
- **Pale Brass** (#eed8a7): Light brass for rules and text on cobalt, and for the small tasting panel.

### Tertiary

- **Lingon** (#8c3a36), **Dill** (#3f5f49), **Crust** (#8a5a3b), **Light Crust** (#a9744c): Ingredient accents. Dill marks the small dietary tags on the menu; the rest stay available for ingredient detail. They never become buttons, backgrounds, or section fields.

### Neutral

- **Warm Paper** (#f4eddf): The default page ground. Every page starts here and returns here.
- **Sun-Bleached Paper** (#eadfcb): Second paper tone for inset panels and quiet blocks.
- **Chalk Paper** (#fbf7ee): Lightest paper for text on cobalt and for small raised pieces.
- **Ink Black** (#1b1a17): Primary text and the skip link field.
- **Soft Ink** (#4d483f): Secondary body copy.
- **Faint Ink** (#726b5f): Metadata, captions, and quiet labels.

### Named Rules

**The Paper Ground Rule.** Pages rest on Warm Paper. Cobalt is entered as a distinct band or stage; it never becomes the global page background.

**The Brass Line Rule.** Brass is a rule, a dot, an underline, a small inset panel, or one disc. It is not a body-copy color and not a page background.

**The Ingredient Only Rule.** Lingon, dill, and crust are ingredient accents, not brand chrome. Dill marks dietary tags; the others stay available for ingredient detail. If a color could be eaten, it does not style buttons, fields, or section backgrounds.

**The Italic Emphasis Rule.** Emphasis inside a heading is a true italic of the same family, usually in cobalt or pale brass. It is never a highlighter wash, fake oblique, or second typeface.

## Typography

**Display Font:** Familjen Grotesk Variable (self-hosted via `@fontsource-variable/familjen-grotesk`, fallback Helvetica Neue, sans-serif), with the true italic cut from `wght-italic.css`
**Body Font:** Familjen Grotesk Variable (same family)
**Label Font:** Familjen Grotesk Variable, uppercase at small sizes

**Character:** One contemporary Swedish grotesk for everything. At monumental sizes it is tight, flat, and slightly severe; at label sizes it becomes a quiet printed caption. A genuine italic, not a synthesised slant, carries emphasis without adding another voice. The contrast between those registers is the typographic idea.

### Hierarchy

- **Wordmark** (700, `clamp(4.4rem, 15.4vw, 12.5rem)`, 0.78, −0.065em): The LYSTER logotype only. Uppercase, no tracking relief; the Y and trailing dot are brass.
- **Display** (500, `clamp(2.6rem, 6vw, 5.75rem)`, 0.94, −0.05em): Page-defining statements such as "Boka ett bord." Individual statements may run larger or tighter (the booking heading reaches 6.5rem) while keeping the same weight and optical tracking.
- **Headline** (500, `clamp(2.1rem, 4.5vw, 4.25rem)`, 0.98, −0.045em): Section headings.
- **Title** (600, 1.15rem, 1.15, −0.015em): Dish names, card titles, footer column headings.
- **Body** (400, 1.0625rem, 1.62): Running copy. Measure is capped at 34–46ch for side-by-side text and up to 52ch for dish descriptions.
- **Supporting** (400–600, 0.68–0.95rem): Captions, meta rows, nav labels, dish descriptions, and legal copy. These are functional steps, not display sizes; keep them on the documented roles rather than inventing new near-duplicates.
- **Label** (600, 0.72rem, 1.45, 0.14em, uppercase): Meta rows, category counts, opening hours, captions. Brass Ink on paper, Pale Brass on cobalt.

### Named Rules

**The Two Registers Rule.** Type is either monumental (display and headline) or a printed whisper (label and supporting). Mid-sized decorative type is not part of the system.

**The Real Italic Rule.** Emphasis uses Familjen Grotesk's italic cut. Never fake it with `transform: skew`, and never introduce a second family for contrast.

**The No-Kicker Rule.** A heading stands alone. No uppercase eyebrow label sits above an h1 or h2 to explain it; the heading and the surrounding copy do that work. A side label in the margin beside a statement is not a kicker; the about spread uses one.

## Layout

A 12-column editorial grid inside a 1560px shell. Gutters are `clamp(1.25rem, 4.2vw, 4.5rem)` and section rhythm is `clamp(5.5rem, 11vw, 10.5rem)`.

Compositions rarely fill all twelve columns symmetrically. The homepage opens with the wordmark, then a full-bleed band: a cobalt copy plane on the left and a photograph on the right, split roughly 5/7. The about spread sets a side label in column 1, a monumental statement at columns 2–8, and a standfirst at 9–12 aligned to the statement's baseline; beneath it, a two-column definition on Chalk Paper gives the Swedish kitchen and the European table equal width, and three principles run across the full base. The proof band puts a circular photo at columns 1–5 and copy at 7–12. The menu page opens with a typographic hero: the title sits low at left, the introduction and service facts occupy the right column, and the two align on their bottom edge. Below it, a type-only rail at columns 1–3 faces the dishes at columns 5–12. Asymmetry is structural, not decorative: one side carries the photograph or the navigation, the other carries the reading.

The sticky system is explicit. The header is 72px. The menu category nav sticks directly beneath it at `top: 72px`, and the menu rail sticks at `top: 136px`. Anchor scroll margins clear both (`header + 70px` for menu categories and lunch; 134px on mobile, where the header is 64px).

Breakpoints are coarse and content-led:

- **1100px:** the hero band keeps its 5/7 split but tightens; the proof image begins to shrink and side-by-side proportions loosen.
- **900px:** the 12-column grid collapses to stacked blocks; the about side label steps out, the statement and standfirst run full width, and the two-column definition becomes one; the hero band stacks with the photograph above the cobalt copy; the menu rail leaves the viewport and dishes run full width.
- **640px:** type steps down, the wordmark takes over the viewport width, the mobile navigation opens as a full-screen `<dialog>`, and dense meta rows wrap. Booking stays inside the page; there is no fixed bottom bar.

### Named Rules

**The One Object Rule.** Each composition has one dominant object — the photograph, a statement — and gives it real space. Do not fill the remaining columns with decoration, and do not repeat the object to create rhythm.

**The One Glyph Rule.** The site authors exactly one glyph: the brand Mark. The photograph is real, not drawn. Arrows are typographic characters, the map is a live embed, and no other hand-drawn illustration is added.

**The Clear The Header Rule.** Anything sticky or anchored must account for the 72px header plus the 64px menu nav; content never lands underneath them.

## Elevation & Depth

There are no shadows and no gradients. The system is flat by doctrine. Depth is conveyed by three devices only: tonal layering (paper, cobalt, brass), flat planes meeting on clean edges (the cobalt copy plane against the hero photograph, the brass ring around a photograph), and the page's own scroll order. Emphasis is typographic: a true italic and a color shift, not an inset highlight or elevation.

### Named Rules

**The Flat Plane Rule.** No `box-shadow`, no blur, no glass, no gradient fills. If a surface needs separation, change its paper tone or put a 1px rule next to it.

**The Printed Overlap Rule.** Objects may overlap like misregistered print, but they stay flat. The proof photo sits inside its ring; the cobalt copy plane and the hero photograph meet on a clean edge; neither casts anything.

## Shapes

Square corners are the default; `border-radius: 0` is the unstated rule for buttons, fields, bands, and cards. The only curves are complete circles: the brand mark, the booking disc, and the circular proof photo crop. Circular forms are always objects, never containers for text.

Borders are thin and purposeful: 1px for rules, dividers, focus outlines, and the brass ring; 2px for the menu category head rule and the cobalt category underline. Thick one-sided accent borders are forbidden — they read as a card template, not a printed page. The clay-colored side tab that once marked the booking note has been replaced by a 1px brass top rule.

### Named Rules

**The Square Card Rule.** Cards are rectangles with no radius. If a shape needs to feel softer, use more space, not a corner radius.

**The No Side Tab Rule.** Never mark a card or note with a thick colored border on one side. Use a full-width hairline rule above it instead.

## Components

### Buttons

- **Shape:** Square, no radius. Minimum height 3rem; padding 0.7rem 1.5rem.
- **Primary:** Cobalt fill, Chalk Paper text. On hover, a Polished Brass plane wipes in from the left (`transform: scaleX(0)` → `1`, 380ms) and the label turns ink. A typographic arrow sits at the end and shifts 2px on hover.
- **Gold:** Brass fill, Chalk Paper text. Reserved for the booking CTA inside the cobalt band.
- **Ghost:** Transparent with a 1px ink-mix border. Used for the secondary "Läs menyn" action beside the primary booking button.
- **Focus:** Global `:focus-visible` outline, 2px solid brass, 3px offset. Never removed.

### Links

Text links use a 1px underline with 0.22em offset. Hover turns the underline brass. Arrow links ("Hela menyn") pair a label with a typographic `→` that travels 3–4px on hover; the arrow is a character, not a drawn icon. Inline-block padding keeps standalone text links at a comfortable tap size without changing the visual line.

### Cards / Containers

- **Corner Style:** None (0 radius).
- **Backgrounds:** Paper, Sun-Bleached Paper, Cobalt, or Late Cobalt. No card shadows.
- **Border:** 1px ink-mix or brass-mix rules; 2px cobalt under category headings.
- **Internal Padding:** Section-scale `clamp(1.5rem, 3vw, 2.25rem)` for inset blocks; text blocks rely on grid gutters rather than card padding.

### Inputs / Fields

There are no form fields in the product. Booking is an external link; the demo never fakes a submission. If a field is added later, it should be a square, 1px ink-mix outline on paper, with the brass focus outline and no fill change.

### Navigation

- **Desktop:** 72px header on paper, wordmark left, three text links right, brass-filled "Boka bord" button far right. Links are 0.9rem, quiet; hover draws a brass underline. Active page is marked with `aria-current` and a brass underline.
- **Mobile:** below 900px the links collapse into a full-screen dark `<dialog>` with large stacked links, contact details, and Instagram. Index numbers were removed: the links are the navigation, not a numbered list. Focus moves to the close button on open and returns to the toggle on close.
- **Menu page:** a second sticky nav under the header lists all categories. The active category is brass-underlined; the track scrolls horizontally on narrow screens and keeps the active link in view. Beneath it, a typographic rail carries service hours and a note instead of a sticky illustration.

### About Spread

The homepage's `Om oss` section is an editorial spread rather than a card grid. A 1px ink rule opens it; the `Om oss` label sits in column 1 as a side label, the statement runs at 2–8 in the Display register with a cobalt italic close, and the standfirst sits at 9–12 on its own 1px rule, bottom-aligned to the statement. Below, a Chalk Paper block with a 2px brass top rule splits into two equal columns — `Det svenska köket` and `Det europeiska bordet` — separated by a 1px ink-mix vertical rule; each column closes with a `På menyn` example list pushed to the shared baseline. A final 1px rule introduces three numbered principles across the full base. On Chalk Paper, body copy and examples are Soft Ink; labels and numbers are Deep Brass Ink. Below 900px the side label steps out, the statement and standfirst stack full width, the definition becomes one column with a horizontal rule instead of the vertical one, and the principles stack.

### Dish Row

A dish is a single row: name and dietary tags on the left, a dotted leader, price on the right, description underneath in Soft Ink. The leader is a 1px dotted rule that aligns prices without a table. Prices are tabular where they stack. Category counts sit below the category heading, not above it.

### Hero Band

The homepage's full-bleed photograph band. On desktop it is a 5/7 split: a Cobalt Field copy plane on the left and a real dining-room photograph on the right, edge to edge, framed top and bottom by a 1px brass rule. The panel carries the promise, a Gold primary "Boka bord", a quiet ghost "Läs menyn", and the live open status above the full address. The photograph fills its side with `object-fit: cover` and a slight `saturate(0.95) contrast(1.02)` grade, never a dark overlay. Below 900px the band stacks, photograph first at `clamp(15rem, 54vw, 24rem)` tall, cobalt copy beneath; the photo wipes open once on entry and is static under reduced motion. No caption, footnote, or credit text sits under the band.

The band is designed to accept the owner's own photograph without layout changes. Supply a bright, daylight landscape at least 2400px wide (4:3 or 3:2), with the room's focal point around the centre-right, and export WebP at 2400px and 1200px. Replace `hero-rum-2400.webp` and `hero-rum-1200.webp`, keep the same filenames, and update the alt text. Do not substitute an illustration, a dark food still, or a photo with baked-in text.

### Brand Mark

The only authored glyph: a 64×64 circle split into cobalt, brass, and chalk fields with a small bright centre. It appears in the header, mobile dialog, and footer, and doubles as the favicon. It is decorative wherever the wordmark already names the restaurant.

### Booking Band

Late Cobalt field with a large brass disc cropped at the right edge. Copy and actions sit at columns 1–8; a smaller aside at the right handles large parties. The external booking link is visibly a placeholder; clicking it reveals a status note with the phone number instead of navigating. The note is announced with `role="status"` and receives focus.

### Map

A live, lazy-loaded Google Maps embed centred on Luntmakargatan 42, held in a 4:3 frame with a 1px rule and a restrained paper-toned filter. Google's own attribution and controls stay inside the frame; the caption labels Google Maps and links to the map and to directions, so the location remains usable if the embed is blocked. There is no hand-drawn map. The embed is the only third-party frame that loads automatically; its consent and cookie implications are documented in `README.md`.

### Footer

Four-column paper footer: brand and tagline, contact, hours, and follow links. Below a hairline, the demo disclosure and the copyright line. Footer headings are titles, not labels; the disclosure is the only place where the demo status is stated in full. No photo credit appears here or anywhere else in the interface; licensing lives in `README.md`.

## Do's and Don'ts

### Do:

- **Do** keep the page on Warm Paper (#f4eddf) with the 128px paper-noise texture; the ground should feel physical, not flat white.
- **Do** use cobalt as a full-width band or a contained stage, and pair it with Chalk Paper text.
- **Do** draw brass as a 1px rule, a dot, an underline, a small inset panel, or the single booking disc.
- **Do** keep corners square and separation flat; change tone or add a hairline instead of a shadow.
- **Do** use the brand mark and the circular proof photo as the only curved forms.
- **Do** set headings without eyebrow labels above them, and let the copy beneath them carry the explanation; a side label beside a statement is allowed.
- **Do** use the real italic cut for emphasis inside headings, in cobalt on paper or pale brass on cobalt.
- **Do** use a real, bright photograph for the hero and keep the full-bleed band free of overlays and decoration.
- **Do** keep the glyph count at one: the Mark. Let type, photography, rules, and the map do the rest.
- **Do** give the mobile viewport the same hierarchy: one idea, one object, one primary action per screen.

### Don't:

- **Don't** use a dark, moody food-photo hero or dim the paper ground to signal premium.
- **Don't** add `box-shadow`, blur, glass, gradient fills, or rounded cards.
- **Don't** use thick one-sided accent borders (side tabs) on notes, cards, or callouts.
- **Don't** let ingredient colors (lingon, dill, crust) escape menu language and dietary tags into buttons, fields, or section backgrounds.
- **Don't** fill large areas with brass; it loses its function as a rule.
- **Don't** add a kicker or uppercase eyebrow above a heading.
- **Don't** invent testimonials, awards, press logos, or a booking form that pretends to submit.
- **Don't** add another glyph, decorative food glyph, or hand-drawn map.
- **Don't** turn the hero photograph into an illustration or replace it with a dark, moody food still.
- **Don't** remove the demo disclosure until real content replaces it.
- **Don't** add photo credits, captions, or footnotes to photographic surfaces; licensing is documented in `README.md`, and any image that requires attribution must be replaced or cleared before launch.
