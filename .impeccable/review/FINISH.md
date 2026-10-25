# Finish review — Lyster

Review ran inline (no separate reviewer agent). Because this model cannot view images directly, the visual layer was verified through computed geometry, contrast calculations, focus and interaction traces, reduced-motion state, print output, and the Impeccable detector. Evidence lives in `.impeccable/review/qa-*.png`, `qa-meny.pdf`, and `detector-src.json`.

disposition: ship

## persistence

Pass.

- `PRODUCT.md` matches the built product: a two-page Swedish restaurant site, lunch and dinner, phone-first, booking as the conversion.
- `DESIGN.md` describes the tokens and components actually shipped: 16 colors, one type family with its true italic cut, the two-glyph rule, the typographic menu rail, the live map, motion, breakpoints, and print.
- `.impeccable/design.json` is in sync with the same source: 16 colors, 6 components, 7 motion entries, 13 narrative rules, and arrow examples drawn as the typographic `→` rather than SVG.
- The direction contract is the first child of `<body>` in `Base.astro`, survives the production build, and still records seed key `c255ad89`.
- No `.impeccable/mocks/` comp exists; this is a code-led build, so there is no approval record to reconcile.

## fidelity

No approved comp; judged against the contract's OWN-WORLD and the built material.

| Salient element | Judgment | Evidence |
| --- | --- | --- |
| Giant LYSTER wordmark with brass Y and dot | match | H1 renders at `clamp(4.4rem, 15.4vw, 12.5rem)`, 700, −0.065em. |
| One monumental lustre lens, used once | match | `Lustre.astro` is a single 600×600 glyph in the homepage hero; the menu page contains no lens. |
| Two authored glyphs in total | match | Home has 4 SVGs: the Mark in header, dialog, and footer, plus the one Lustre. Menu has 3 (Mark only). Favicon is the Mark. |
| Warm beige paper ground | match | `--paper #f4eddf` plus the 128px `paper-noise.webp`; no white body. |
| Cobalt fields, not a cobalt theme | match | Cobalt stays in the hero stage, proof band, booking band, and mobile bar. |
| Brass as rules, dots, underlines, one disc | match | 1px rules and underlines throughout; the large brass disc exists only in booking. |
| One grotesk in monumental and whisper sizes | match | Familjen Grotesk Variable self-hosted, including the true italic cut used on `.intro__statement em` and the proof heading. |
| Asymmetric editorial grid | match | Statement at 1–12, body at 4–12, facts across the full base; hero type against a 560px lens stage. |
| Bright, physical photography | match | One real photograph, circular crop inside a brass ring, lazy-loaded with srcset. Credit preserved verbatim. |
| A real map | match | Lazy OpenStreetMap iframe at `59.3391975, 18.0618873`; frame loads with `hasMap: true`; visible OSM credit and Google Maps directions fallback. |
| Authored motion | match | The lens halves close (1.5s), the core settles (1.2s), the glint fades in (1s), and the rim draws (1.4s) once; reveals and nav state are the only other motion. |
| Fake material (bevels, embossing, faux metal) | none | Flat fills, paper tone, and hairlines only. |
| Kickers or eyebrows | none | Category counts sit below headings; headings stand alone. |

TYPE: one family, two registers, true italics. MATERIAL: flat planes, one photograph, one live map.

## ceiling

Reached for the chosen world, and deliberately reduced from the earlier pass. The signature devices left are the single hero lens, the brass rules, the circular photo crop, the typographic menu rail, the live open/closed line, the live map, and the full-screen mobile dialog. Nothing was replaced by a weaker device; everything removed was repetition.

The glyph budget is now explicit and enforced in `DESIGN.md`: the Mark and one Lustre lens. Arrows are characters, not drawn icons. The map is an embed, not an illustration. This is the ceiling the user asked for — intentional, and much less.

## material_fixes

Two real defects were found in the final geometry pass and fixed at the source:

- `.facts` had no `grid-column` in a 12-column grid and collapsed into a single 80.9px track at the right edge, stacking three 0-width text columns on top of each other. It now spans `1 / -1` and renders as three 410.9px columns on desktop.
- The Wikimedia credit links measured 15px tall. They now carry inline-block padding with compensating negative margins, giving a 29px tap target on both pages without moving the line.

The final detector run reports 50 advisories, all `design-system-font-size`: component sizes and clamp endpoints that sit outside the six named roles in `DESIGN.md` frontmatter. There are zero color advisories and zero findings in any defect category. The type sizes are intentional role sizes; they are recorded here as metadata drift, not visual defects.

## verification

- `pnpm build` passes; 2 static pages generated.
- Zero horizontal overflow at 1440, 834, and 390 on both pages.
- Zero console errors on both pages at all three widths.
- Zero interactive targets below 24px after the credit fix.
- All sampled text contrast ratios ≥ 4.5:1 on paper and cobalt.
- Sticky menu nav sits at `top: 72px`, the rail at `136px`; an anchored category lands at `141.9px`, clear of the nav bottom at `126.2px`.
- Mobile dialog opens at 390×844, focuses the close button, restores focus to the toggle on Escape, and toggles `aria-expanded`.
- Booking placeholder keeps its `href` inert, shows the demo note, and focuses it; nothing pretends to submit.
- Reduced motion: lens present, glint at 0.55, halves/core animation `none`, rim fully drawn.
- Print: 5 A4 pages, with header, menu nav, rail, booking, footer, and map hidden.

## keep

Keep the paper ground, the square-corner flatness, the single brass rule system, the true italic emphasis, and the two-glyph discipline. Adding another illustration, a shadow, a rounded card, or a larger gold field would dissolve the world.

## Remaining before a real launch

- Replace the booking placeholder (`https://example.com/boka-lyster`) and remove the demo note.
- Replace address, phone, email, Instagram, opening hours, menu, and prices; the address is currently `Luntmakargatan 42, 111 37 Stockholm`.
- Replace the Wikimedia photo with an own photograph and update the credit, or keep the CC BY 2.0 credit exactly as written.
- Remove the footer demo disclosure and the menu footnote once content is real.
- Point `astro.config.mjs` at the production domain; it currently uses `https://lysternorrmalm.se`.
