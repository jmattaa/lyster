---
name: Lyster
description: A warm paper-and-ink world for modern husmanskost — flat planes, cobalt fields, brass rules.
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

**Creative North Star: "The Printed Plate"**

Lyster looks like a menu printed on good paper and laid on a plain table: warm beige ground, one confident cobalt field, a brass rule holding the line. Familiar Swedish food is drawn as a few flat ingredient planes with no outlines, so a plate can be read before it can be named. The page is bright and airy, never solemn; the luxury is in the craft, not in the lighting.

The system is deliberately undecorated. There are no shadows, gradients, rounded cards, or glass. Depth comes from flat tonal layers — paper against cobalt against brass — and from objects overlapping like printed sheets. Type carries most of the personality: one Swedish grotesk in monumental and whisper sizes, with true italics for emphasis, tight negative tracking on the large end, and generous letterspacing on the small end. Layout is asymmetric and editorial, but always readable as a restaurant site first.

Motion is precise and editorial: the single plate draws its ring and settles once, section copy reveals as it enters, and the menu rail marks the current category. Nothing floats, bounces, or loops. If motion cannot clarify a change of state, it is left out.

**Key Characteristics:**
- Warm beige paper ground with a subtle 128px noise texture.
- Cobalt is a room you walk into (hero plate stage, proof band, booking band), not a global theme.
- Brass appears as 1px rules, small dots, underlines, and one large disc.
- Square corners everywhere; the only curves are circles (the plate, the photo crop, the discs, the mark).
- One typeface, used from 0.68rem captions to a 12.5rem wordmark, with a real italic cut.
- Exactly two authored glyphs: the brand Mark and one meatball Plate, used once. Everything else is type, photography, rule, and a live map.
- Flat at rest: no box-shadows, no gradients, no glass, no rounded cards.

## Colors

A warm paper neutral, one deep cobalt, and a brass accent, with ingredient colors reserved for illustrations and small menu tags.

### Primary

- **Cobalt Field** (#1e3a5f): Primary brand field. It fills the proof band, the booking band, the mobile booking bar, and primary buttons. White-on-cobalt is the default high-contrast pairing.
- **Late Cobalt** (#142a45): The darkest field, used for the booking band and mobile bar where the gold disc and gold button need more separation.

### Secondary

- **Brass Rule** (#a97e34): The signature accent. Gold appears as 1px rules, the wordmark's Y and dot, focus outlines, scrollbar thumb, underlines, and the large booking disc. It is also the fill of the single most important CTA ("Boka bord" in the booking band).
- **Deep Brass Ink** (#7d5a1e): Accessible brass text on paper; used for small meta labels and category counts.
- **Polished Brass** (#c49a4a): Hover fill for primary buttons and the bright center of the mark.
- **Pale Brass** (#eed8a7): Light brass for rules and text on cobalt, and for the small tasting panel.

### Tertiary

- **Lingon** (#8c3a36), **Dill** (#3f5f49), **Crust** (#8a5a3b), **Light Crust** (#a9744c): Ingredient colors. They belong inside the one plate glyph and in the small dietary tags on the menu. They never become buttons, backgrounds, or section fields.

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

**The Ingredient Only Rule.** Lingon, dill, and crust colors are confined to the food glyph and dietary tags. If a color could be eaten, it does not style chrome.

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

**The No-Kicker Rule.** A heading stands alone. No uppercase eyebrow label sits above an h1 or h2 to explain it; the heading and the surrounding copy do that work.

## Layout

A 12-column editorial grid inside a 1560px shell. Gutters are `clamp(1.25rem, 4.2vw, 4.5rem)` and section rhythm is `clamp(5.5rem, 11vw, 10.5rem)`.

Compositions rarely fill all twelve columns symmetrically. The hero pairs a wide type block with a 560px plate stage; the intro sets a statement against a narrower body column; the proof band puts a circular photo at columns 1–5 and copy at 7–12. The menu page opens with a typographic hero: the title sits low at left, the introduction and service facts occupy the right column, and the two align on their bottom edge. Below it, a type-only rail at columns 1–3 faces the dishes at columns 5–12. Asymmetry is structural, not decorative: one side carries the object or the navigation, the other carries the reading.

The sticky system is explicit. The header is 72px. The menu category nav sticks directly beneath it at `top: var(--header-h)`, and the menu rail sticks at `header + 64px`. Anchor scroll margins clear both (`header + 16px` for page sections, `header + 70px` for menu categories and lunch).

Breakpoints are coarse and content-led:

- **1100px:** hero plate and proof image begin to shrink; side-by-side proportions loosen.
- **900px:** the 12-column grid collapses to stacked blocks; the menu rail leaves the viewport and dishes run full width; the mobile booking bar appears.
- **640px:** type steps down, the wordmark takes over the viewport width, the mobile navigation opens as a full-screen `<dialog>`, and dense meta rows wrap.

### Named Rules

**The One Object Rule.** Each composition has one dominant object — the plate, the photograph, a statement — and gives it real space. Do not fill the remaining columns with decoration, and do not repeat the object to create rhythm.

**The Two Glyphs Rule.** The site authors exactly two glyphs: the brand Mark and the meatball Plate. The Plate appears once, in the homepage hero. Arrows are typographic characters, the map is a live embed, and no other hand-drawn illustration is added.

**The Clear The Header Rule.** Anything sticky or anchored must account for the 72px header plus the 64px menu nav; content never lands underneath them.

## Elevation & Depth

There are no shadows and no gradients. The system is flat by doctrine. Depth is conveyed by three devices only: tonal layering (paper, cobalt, brass), overlapping flat shapes (a cobalt disc behind the plate, a brass ring around a photograph), and the page's own scroll order. Emphasis is typographic: a true italic and a color shift, not an inset highlight or elevation.

### Named Rules

**The Flat Plane Rule.** No `box-shadow`, no blur, no glass, no gradient fills. If a surface needs separation, change its paper tone or put a 1px rule next to it.

**The Printed Overlap Rule.** Objects may overlap like misregistered print, but they stay flat. The plate sits on the disc; the photo sits inside the ring; neither casts anything.

## Shapes

Square corners are the default; `border-radius: 0` is the unstated rule for buttons, fields, bands, and cards. The only curves are complete circles: the 600×600 plate system, the hero and booking discs, the circular photo crop, and the brand mark. Circular forms are always objects, never containers for text.

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

### Dish Row

A dish is a single row: name and dietary tags on the left, a dotted leader, price on the right, description underneath in Soft Ink. The leader is a 1px dotted rule that aligns prices without a table. Prices are tabular where they stack. Category counts sit below the category heading, not above it.

### Plate Glyph

The single food glyph: a 600×600 SVG plate with a flat Chalk Paper well, a brass ring, and three simplified meatballs with lingon and dill planes. It is used exactly once, in the homepage hero, where the ring draws and the food settles on first paint. It has no variants and no labels; the caption beneath the plate carries the description in type. Under reduced motion the plate is simply present, fully drawn.

### Brand Mark

The only other authored glyph: a 64×64 circle split into cobalt, brass, and chalk fields with a small bright centre. It appears in the header, mobile dialog, and footer, and doubles as the favicon. It is decorative wherever the wordmark already names the restaurant.

### Booking Band

Late Cobalt field with a large brass disc cropped at the right edge. Copy and actions sit at columns 1–8; a smaller aside at the right handles large parties. The external booking link is visibly a placeholder; clicking it reveals a status note with the phone number instead of navigating. The note is announced with `role="status"` and receives focus.

### Map

A live, lazy-loaded OpenStreetMap embed centred on Luntmakargatan 42, held in a 4:3 frame with a 1px rule and a restrained paper-toned filter. The visible caption credits OpenStreetMap and links to Google Maps directions, so the location remains usable if the embed is blocked or the visitor prefers another map. There is no hand-drawn map and no third-party tracking script.

### Footer

Four-column paper footer: brand and tagline, contact, hours, and follow links. Below a hairline, a demo disclosure and the photo credit. Footer headings are titles, not labels; the disclosure is the only place where the demo status is stated in full.

## Do's and Don'ts

### Do:

- **Do** keep the page on Warm Paper (#f4eddf) with the 128px paper-noise texture; the ground should feel physical, not flat white.
- **Do** use cobalt as a full-width band or a contained stage, and pair it with Chalk Paper text.
- **Do** draw brass as a 1px rule, a dot, an underline, a small inset panel, or the single booking disc.
- **Do** keep corners square and separation flat; change tone or add a hairline instead of a shadow.
- **Do** use the circular plate and circular photo crop as the only curved containers.
- **Do** set headings without eyebrow labels, and let the copy beneath them carry the explanation.
- **Do** use the real italic cut for emphasis inside headings, in cobalt on paper or pale brass on cobalt.
- **Do** keep the glyph count at two: the Mark and the single hero Plate. Let type, photography, rules, and the map do the rest.
- **Do** give the mobile viewport the same hierarchy: one idea, one object, one primary action per screen.

### Don't:

- **Don't** use a dark, moody food-photo hero or dim the paper ground to signal premium.
- **Don't** add `box-shadow`, blur, glass, gradient fills, or rounded cards.
- **Don't** use thick one-sided accent borders (side tabs) on notes, cards, or callouts.
- **Don't** let ingredient colors (lingon, dill, crust) escape illustrations and dietary tags into buttons, fields, or section backgrounds.
- **Don't** fill large areas with brass; it loses its function as a rule.
- **Don't** add a kicker or uppercase eyebrow above a heading.
- **Don't** invent testimonials, awards, press logos, or a booking form that pretends to submit.
- **Don't** add another plate variant, decorative food glyph, or hand-drawn map.
- **Don't** remove the demo disclosure or the photo credit until real content replaces them.
