# Finish review — Lyster

Review ran inline (no separate reviewer agent). Because this model cannot view images directly, the visual layer was verified through computed geometry, contrast calculations, focus and interaction traces, reduced-motion state, print output, pixel sampling, and the Impeccable detector. Evidence lives in `.impeccable/review/qa-*.png`, `qa-meny.pdf`, and `detector-src.json`.

disposition: ship

## persistence

Pass.

- `PRODUCT.md` matches the built product: a two-page Swedish restaurant site, lunch and dinner, phone-first, booking as the conversion.
- `DESIGN.md` describes the tokens and components actually shipped: 16 colors, one type family with its true italic cut, the one-glyph rule, the full-bleed hero band, the typographic menu rail, the live map, motion, breakpoints, and print.
- `.impeccable/design.json` is in sync with the same source: 16 colors, 7 components, 6 motion entries, 13 narrative rules, and arrow examples drawn as the typographic `→` rather than SVG.
- The direction contract is the first child of `<body>` in `Base.astro`, survives the production build, and still records seed key `c255ad89`.
- No `.impeccable/mocks/` comp exists; this is a code-led build, so there is no approval record to reconcile.

## fidelity

No approved comp; judged against the contract's OWN-WORLD and the built material.

| Salient element | Judgment | Evidence |
| --- | --- | --- |
| Giant LYSTER wordmark with brass Y and dot | match | H1 renders at `clamp(4.4rem, 15.4vw, 12.5rem)`, 700, −0.065em. |
| Full-bleed hero photograph band | match | `.hero__band` measures x=0, w=1440 at the 1440 viewport; a 5/7 split puts a 600px cobalt plane beside an 840px photograph and ends at y=889.4, inside the 900px fold. |
| Real photography, not illustration | match | Hero uses `hero-rum-2400.webp` / `hero-rum-1200.webp` with `srcset`, `sizes="(max-width: 900px) 100vw, 58vw"`, descriptive Swedish alt text, and `fetchpriority="high"`. The rendered photo region samples to a warm mean `#958a7a` and classifies as interior, furniture, table, and window. |
| One authored glyph in total | match | Home and menu each render 3 inline SVGs, all the Mark in header, dialog, and footer. `Lustre.astro` is deleted; the favicon is the same Mark. |
| Warm beige paper ground | match | `--paper #f4eddf` plus the 128px `paper-noise.webp`; no white body. |
| Cobalt fields, not a cobalt theme | match | Cobalt stays in the hero copy plane, proof band, and booking band. |
| Brass as rules, dots, underlines, one disc | match | 1px rules and underlines throughout; the hero band carries 1px top and bottom brass rules; the large brass disc exists only in booking. |
| One grotesk in monumental and whisper sizes | match | Familjen Grotesk Variable self-hosted, including the true italic cut used on `.about__statement em` and the proof heading. |
| Asymmetric editorial about spread | match | At 1440 the side label sits in column 1, the statement at 2–8, and the standfirst at 9–12; the statement and standfirst do not overlap, and the label is 81px wide with no clipped text. Below 900px the label steps out and the statement and standfirst stack full width. |
| Server-rendered definition of the concept | match | The `Om oss` spread sets `Det svenska köket` and `Det europeiska bordet` as equal columns on Chalk Paper, with three numbered principles beneath. Menu, hero, footer, metadata, and booking copy all state Swedish classics plus European dishes. |
| Familiar food, plain prices | match | The menu page renders 27 dishes and 6 lunch items across seven categories, including `Europas bord` with pasta, kalvschnitzel, and moules-frites. |
| A real map | match | Lazy Google Maps iframe for Luntmakargatan 42; Google attribution inside the map, plus external map and directions links. |
| Authored motion | match | The hero photograph and wordmark wipe in once via a 1000ms clip-path; copy reveals at 720ms; buttons and nav use 260–380ms state transitions. No idle loops. |
| Fake material (bevels, embossing, faux metal) | none | Flat fills, paper tone, hairlines, and a real photograph only. |
| Kickers or eyebrows | none | Category counts sit below headings; headings stand alone. The `Om oss` side label sits beside the statement, not above it. |

TYPE: one family, two registers, true italics. MATERIAL: flat planes, two real photographs, one live map.

## ceiling

Reached for the chosen world, and deliberately reduced from the lens pass. The signature devices are now the full-bleed cobalt-and-photo hero band, the editorial `Om oss` spread with its two-column definition, the circular proof photograph, the brass rules, the typographic menu rail, the live open/closed line, the live map, and the full-screen mobile dialog. Nothing was replaced by a weaker device; the abstract lens was removed rather than decorated further.

The glyph budget is explicit and enforced in `DESIGN.md`: the Mark, and nothing else drawn. Arrows are characters, photography is real, and the map is an embed. This is the ceiling the user asked for — photographic, intentional, and much less.

## material_fixes

No material defects survived the final pass. The fixed mobile booking bar and every visible photo credit, caption, and footnote were removed at the owner's request; the mobile viewport now uses the same in-page booking action as the desktop view. Licensing notes remain in `README.md`, which flags that the Wikimedia proof photo cannot ship under CC BY 2.0 without restored attribution and must be replaced or cleared before launch.

The final detector run reports 52 advisories, all `design-system-font-size`: component sizes and clamp endpoints that sit outside the six named roles in `DESIGN.md` frontmatter. There are zero color advisories and zero findings in any defect category. The new about spread contributes intentional display, label, and appendix sizes to that count; they are recorded here as metadata drift, not visual defects.

## verification

- `pnpm build` passes; 2 static pages generated.
- Zero horizontal overflow at 1440, 834, and 390 on both pages.
- Zero console errors or page errors on both pages at all three widths.
- Zero interactive targets below 24px at 390px.
- About spread: at 1440 the side label is visible at 81×237.7, the statement and standfirst do not overlap, the two-column definition renders equal widths, and all three principles sit on one row. At 834 and 390 the label is `display: none`, the statement and standfirst stack without overlap, the definition becomes one column, and the principles stack.
- Sampled contrast on the about spread passes on its real surfaces: statement italic 9.87:1, side label 5.38:1, standfirst 7.79:1, definition body on Chalk Paper 8.49:1, principle body 7.79:1.
- The `#om-oss` anchor lands with its top at 87.7px, clear of the 73px header bottom.
- Hero band is fully full-bleed at every width (x=0, width=viewport) and has no panel or copy overflow. At 834 and 390 it stacks with the photograph first: 834×384 photo above the cobalt panel, then 390×240 photo above the panel. The photo mask and the wordmark mask are both cleared under reduced motion.
- Sticky menu nav sits at `top: 72px`, the rail at `136px`; an anchored category lands at `141.9px`, clear of the nav bottom at `126.2px`.
- Mobile dialog opens at 390×844, lists `Om oss`, `Menyn`, `Hitta hit`, and `Boka bord`, focuses the close button, restores focus to the toggle on Escape, and toggles `aria-expanded`.
- Reduced motion: all 16 reveal targets are visible on load; computed clip paths resolve to `inset(0px)` or `none`, so nothing is clipped.
- Booking placeholder keeps its `href` inert, shows the demo note, and focuses it; nothing pretends to submit.
- Print: 5 A4 pages, with header, hero band, menu nav, rail, booking, footer, and map hidden. Categories stay intact, and the lunch list is complete on the final page with no orphaned dish.
- The menu page renders 27 dishes and 6 lunch items across `Tilltugg` 4, `Husmanskost` 5, `Europas bord` 3, `Från havet` 3, `Grönt` 3, `Efterrätt` 5, and `Dryck` 4.
- The hero photo's rendered region and the cobalt plane were sampled separately and the photo was classified as an interior; the split is real, not a full-bleed color field.
- The fixed mobile booking bar is absent from the DOM and no visible photo credit remains; the mobile viewport reaches the footer without a reserved bottom offset.
- The Google Maps embed returns 200, renders map tiles, and exposes Google's own attribution inside the frame. At 1440 it measures 532×399 inside the 4:3 map frame; the caption links to Google Maps and directions.

## keep

Keep the paper ground, the square-corner flatness, the single brass rule system, the true italic emphasis, the one-glyph discipline, the editorial `Om oss` spread, and the full-bleed cobalt-and-photo band. Adding another glyph, an illustration, a dark overlay on the photograph, a shadow, a rounded card, or a larger gold field would dissolve the world.

## Remaining before a real launch

- Replace the temporary Unsplash hero photograph with an own image at 2400×1800 (or wider), keep the two filenames, and update the alt text.
- Replace the booking placeholder (`https://example.com/boka-lyster`) and remove the demo note.
- Replace address, phone, email, Instagram, opening hours, all 27 dishes, 6 lunch items, and prices; the address is currently `Luntmakargatan 42, 111 37 Stockholm`.
- Replace the Wikimedia proof photo with an own photograph, or restore its CC BY 2.0 credit in the interface before launch; the visible credit was removed at the owner's request, so the current build does not satisfy that licence for the image.
- Remove the footer demo disclosure and the menu footnote once content is real.
- Decide how to handle consent for the Google Maps embed, which may set Google cookies.
- Point `astro.config.mjs` at the production domain; it currently uses `https://lysternorrmalm.se`.
