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
  brass-wash: "#e7d3a8"
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
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Familjen Grotesk Variable, Familjen Grotesk, Helvetica Neue, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  flat: "0"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4.2vw, 4.5rem)"
  section: "clamp(5rem, 11vw, 10rem)"
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

The system is deliberately undecorated. There are no shadows, gradients, rounded cards, or glass. Depth comes from flat tonal layers — paper against cobalt against brass — and from objects overlapping like printed sheets. Type carries most of the personality: one Swedish grotesk in monumental and whisper sizes, with tight negative tracking on the large end and generous letterspacing on the small end. Layout is asymmetric and editorial, but always readable as a restaurant site first.

Motion is precise and editorial: a plate assembles once, a brass line draws, a category plate swaps with a short cross-fade. Nothing floats, bounces, or loops. If motion cannot clarify a change of state, it is left out.

**Key Characteristics:**
- Warm beige paper ground with a subtle 128px noise texture.
- Cobalt is a room you walk into (hero plate stage, proof band, booking band), not a global theme.
- Brass appears as 1px rules, small dots, underlines, and one large disc.
- Square corners everywhere; the only curves are circles (plates, photo crop, discs, mark).
- One typeface, used from 0.6875rem labels to a 12.5rem wordmark.
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
- **Brass Wash** (#e7d3a8): The thin inset underline beneath emphasized words.

### Tertiary

- **Lingon** (#8c3a36), **Dill** (#3f5f49), **Crust** (#8a5a3b), **Light Crust** (#a9744c): Ingredient colors. They belong inside plate illustrations and in the small dietary tags on the menu. They never become buttons, backgrounds, or section fields.

### Neutral

- **Warm Paper** (#f4eddf): The default page ground. Every page starts here and returns here.
- **Sun-Bleached Paper** (#eadfcb): Second paper tone for inset panels, the illustrated map ground, and quiet blocks.
- **Chalk Paper** (#fbf7ee): Lightest paper for text on cobalt and for small raised pieces.
- **Ink Black** (#1b1a17): Primary text and the skip link field.
- **Soft Ink** (#4d483f): Secondary body copy.
- **Faint Ink** (#726b5f): Metadata, captions, and quiet labels.

### Named Rules

**The Paper Ground Rule.** Pages rest on Warm Paper. Cobalt is entered as a distinct band or stage; it never becomes the global page background.

**The Brass Line Rule.** Brass is a rule, a dot, an underline, a small inset panel, or one disc. It is not a body-copy color and not a page background.

**The Ingredient Only Rule.** Lingon, dill, and crust colors are confined to food illustrations and dietary tags. If a color could be eaten, it does not style chrome.

## Typography

**Display Font:** Familjen Grotesk Variable (self-hosted via `@fontsource-variable/familjen-grotesk`, fallback Helvetica Neue, sans-serif)
**Body Font:** Familjen Grotesk Variable (same family)
**Label Font:** Familjen Grotesk Variable, uppercase at small sizes

**Character:** One contemporary Swedish grotesk for everything. At monumental sizes it is tight, flat, and slightly severe; at label sizes it becomes a quiet printed caption. The contrast between those two registers is the typographic idea.

### Hierarchy

- **Wordmark** (700, `clamp(4.4rem, 15.4vw, 12.5rem)`, 0.78, −0.065em): The LYSTER logotype only. Uppercase, no tracking relief; the Y and trailing dot are brass.
- **Display** (500, `clamp(2.6rem, 6vw, 5.75rem)`, 0.94, −0.05em): Page-defining statements such as "Boka ett bord." and the menu's largest headings.
- **Headline** (600, `clamp(2.1rem, 4.5vw, 4.25rem)`, 0.98, −0.045em): Section headings.
- **Title** (600, 1.12rem, 1.15, −0.015em): Dish names, card titles, footer column headings.
- **Body** (400, 1.0625rem, 1.55): Running copy. Measure is capped at 38–46ch for side-by-side text and 65–75ch for full-width prose.
- **Label** (600, 0.6875rem, 0.16em, uppercase): Meta rows, category counts, opening hours, captions. Brass Ink on paper, Pale Brass on cobalt.

### Named Rules

**The Two Registers Rule.** Type is either monumental (display and headline) or a printed whisper (label). Mid-sized decorative type is not part of the system.

**The No-Kicker Rule.** A heading stands alone. No uppercase eyebrow label sits above an h1 or h2 to explain it; the heading and the surrounding copy do that work.

## Layout

A 12-column editorial grid inside a 1560px shell. Gutters are `clamp(1.25rem, 4.2vw, 4.5rem)` and section rhythm is `clamp(5rem, 11vw, 10rem)`, with a tight variant at `clamp(3.5rem, 7vw, 6rem)`.

Compositions rarely fill all twelve columns symmetrically. The hero pairs a wide type block with a 560px plate stage; the intro sets a statement against a narrower body column; the proof band puts a circular photo at columns 1–5 and copy at 7–12; the menu page keeps a sticky plate at 1–5 and dishes at 7–12. Asymmetry is structural, not decorative: one side carries the object, the other carries the reading.

The sticky system is explicit. The header is 72px. The menu category nav sticks directly beneath it at `top: var(--header-h)`, and the aside plate sticks at `header + 64px`. Anchor scroll margins clear both (`header + 16px` for page sections, `header + 70px` for menu categories and lunch).

Breakpoints are coarse and content-led:

- **1100px:** hero plate and proof image begin to shrink; side-by-side proportions loosen.
- **900px:** the 12-column grid collapses to stacked blocks; the menu aside plate leaves the viewport; the mobile booking bar appears.
- **640px:** type steps down, the wordmark takes over the viewport width, the mobile navigation opens as a full-screen `<dialog>`, and dense meta rows wrap.

### Named Rules

**The One Object Rule.** Each composition has one dominant object — a plate, a photograph, a statement — and gives it real space. Do not fill the remaining columns with decoration.

**The Clear The Header Rule.** Anything sticky or anchored must account for the 72px header plus the 64px menu nav; content never lands underneath them.

## Elevation & Depth

There are no shadows and no gradients. The system is flat by doctrine. Depth is conveyed by three devices only: tonal layering (paper, cobalt, brass), overlapping flat shapes (a cobalt disc behind a plate, a brass ring around a photograph), and the page's own scroll order. The one inset effect is a `0.12em` brass underline beneath emphasized words, which reads as a printed highlight rather than elevation.

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
- **Primary:** Cobalt fill, Chalk Paper text. On hover, a Polished Brass plane wipes in from the left (`transform: scaleX(0)` → `1`, 380ms) and the label turns ink. Arrow sits at the end and shifts 2px on hover.
- **Gold:** Brass fill, Chalk Paper text. Reserved for the booking CTA inside the cobalt band.
- **Ghost:** Transparent with a 1px ink-mix border. Used for the secondary "Läs menyn" action beside the primary booking button.
- **Focus:** Global `:focus-visible` outline, 2px solid brass, 3px offset. Never removed.

### Links

Text links use a 1px underline with 0.18em offset. Hover turns the underline brass. Arrow links ("Hela menyn", "Se hela menyn") pair a label with a 24px stroke arrow that travels 3–4px on hover. Tap targets are padded to at least 2.5–3rem without changing the visual line.

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
- **Menu page:** a second sticky nav under the header lists all categories. The active category is brass-underlined; the track scrolls horizontally on narrow screens and keeps the active link in view.

### Dish Row

A dish is a single row: name and dietary tags on the left, a dotted leader, price on the right, description underneath in Soft Ink. The leader is a 1px dotted rule that aligns prices without a table. Prices are tabular where they stack. Category counts sit below the category heading, not above it.

### Plate Illustration

The signature component: a 600×600 SVG plate with a cobalt rim, Chalk Paper well, and flat ingredient planes in lingon, dill, crust, brass, and paper tones. Seven variants exist (meatballs, herring, celeriac, cheesecake, drink, starter, pea soup). The plate is decorative in compositions, labeled when it carries meaning, and animates once on the homepage by assembling rings and ingredients with staggered transforms. On the menu page the plate cross-fades between categories (500ms opacity, 700ms transform).

### Booking Band

Late Cobalt field with a large brass disc cropped at the right edge. Copy and actions sit at columns 1–8; a smaller aside at the right handles large parties. The external booking link is visibly a placeholder; clicking it reveals a status note with the phone number instead of navigating. The note is announced with `role="status"` and receives focus.

### Illustrated Map

A flat overhead map drawn in SVG on Sun-Bleached Paper: paper blocks, cobalt streets, brass route line, and a marked restaurant block. It links to Google Maps and carries a caption with a map link. No live map embed, no third-party tile scripts.

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
- **Do** give the mobile viewport the same hierarchy: one idea, one object, one primary action per screen.

### Don't:

- **Don't** use a dark, moody food-photo hero or dim the paper ground to signal premium.
- **Don't** add `box-shadow`, blur, glass, gradient fills, or rounded cards.
- **Don't** use thick one-sided accent borders (side tabs) on notes, cards, or callouts.
- **Don't** let ingredient colors (lingon, dill, crust) escape illustrations and dietary tags into buttons, fields, or section backgrounds.
- **Don't** fill large areas with brass; it loses its function as a rule.
- **Don't** add a kicker or uppercase eyebrow above a heading.
- **Don't** invent testimonials, awards, press logos, or a booking form that pretends to submit.
- **Don't** remove the demo disclosure or the photo credit until real content replaces them.
