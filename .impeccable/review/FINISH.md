# Finish review — Lyster

Review ran inline (no separate reviewer agent). Because this model cannot view images directly, the visual layer was verified through computed geometry, contrast calculations, focus and interaction traces, reduced-motion state, print output, pixel sampling, and the Impeccable detector. Evidence lives in `.impeccable/review/qa-*.png`, `qa-meny.pdf`, and `detector-src.json`.

disposition: ship

## persistence

Pass.

- `PRODUCT.md` matches the built product: a two-page Swedish restaurant site, lunch and dinner, phone-first, booking as the conversion.
- `DESIGN.md` describes the tokens and components actually shipped: 16 colors, one type family with its true italic cut, the one-glyph rule, the full-bleed hero band, the typographic menu rail, the live map, motion, breakpoints, and print.
- `.impeccable/design.json` is in sync with the same source: 16 colors, 6 components, 6 motion entries, 13 narrative rules, and arrow examples drawn as the typographic `→` rather than SVG.
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
| One grotesk in monumental and whisper sizes | match | Familjen Grotesk Variable self-hosted, including the true italic cut used on `.intro__statement em` and the proof heading. |
| Asymmetric editorial grid | match | Hero splits 5/7 around the photograph; statement at 1–12, body at 4–12, facts across the full base; proof photo at 1–5 with copy at 7–12. |
| A real map | match | Lazy OpenStreetMap iframe at `59.3391975, 18.0618873`; visible OSM credit and Google Maps directions fallback. |
| Authored motion | match | The hero photograph and wordmark wipe in once via a 1000ms clip-path; copy reveals at 720ms; buttons and nav use 260–380ms state transitions. No idle loops. |
| Fake material (bevels, embossing, faux metal) | none | Flat fills, paper tone, hairlines, and a real photograph only. |
| Kickers or eyebrows | none | Category counts sit below headings; headings stand alone. |

TYPE: one family, two registers, true italics. MATERIAL: flat planes, two real photographs, one live map.

## ceiling

Reached for the chosen world, and deliberately reduced from the lens pass. The signature devices are now the full-bleed cobalt-and-photo hero band, the circular proof photograph, the brass rules, the typographic menu rail, the live open/closed line, the live map, and the full-screen mobile dialog. Nothing was replaced by a weaker device; the abstract lens was removed rather than decorated further.

The glyph budget is explicit and enforced in `DESIGN.md`: the Mark, and nothing else drawn. Arrows are characters, photography is real, and the map is an embed. This is the ceiling the user asked for — photographic, intentional, and much less.

## material_fixes

No material defects survived the final pass. The fixed mobile booking bar and every visible photo credit, caption, and footnote were removed at the owner's request; the mobile viewport now uses the same in-page booking action as the desktop view. Licensing notes remain in `README.md`, which flags that the Wikimedia proof photo cannot ship under CC BY 2.0 without restored attribution and must be replaced or cleared before launch.

The final detector run reports 48 advisories, all `design-system-font-size`: component sizes and clamp endpoints that sit outside the six named roles in `DESIGN.md` frontmatter. There are zero color advisories and zero findings in any defect category. The type sizes are intentional role sizes; they are recorded here as metadata drift, not visual defects. Removing the mobile bar and credit styles also removed four off-ramp font sizes.

## verification

- `pnpm build` passes; 2 static pages generated.
- Zero horizontal overflow at 1440, 834, and 390 on both pages.
- Zero console errors or page errors on both pages at all three widths.
- Zero interactive targets below 24px at 390px.
- All sampled text contrast ratios pass on their real surfaces: hero lead 10.76:1, hero body 8.1:1, hero status and meta 6.95:1, ghost menu link 10.76:1, gold CTA ink 4.74:1, footer demo 5.71:1.
- Hero band is fully full-bleed at every width (x=0, width=viewport) and has no panel or copy overflow. At 834 and 390 it stacks with the photograph first: 834×384 photo above the cobalt panel, then 390×240 photo above the panel. The photo mask and the wordmark mask are both cleared under reduced motion.
- Sticky menu nav sits at `top: 72px`, the rail at `136px`; an anchored category lands at `141.9px`, clear of the nav bottom at `126.2px`.
- Mobile dialog opens at 390×844, focuses the close button, restores focus to the toggle on Escape, and toggles `aria-expanded`.
- Booking placeholder keeps its `href` inert, shows the demo note, and focuses it; nothing pretends to submit.
- Print: 4 A4 pages, with header, hero band, menu nav, rail, booking, footer, and map hidden.
- The hero photo's rendered region and the cobalt plane were sampled separately and the photo was classified as an interior; the split is real, not a full-bleed color field.
- The fixed mobile booking bar is absent from the DOM and no visible photo credit remains; the mobile viewport reaches the footer without a reserved bottom offset.

## keep

Keep the paper ground, the square-corner flatness, the single brass rule system, the true italic emphasis, the one-glyph discipline, and the full-bleed cobalt-and-photo band. Adding another glyph, an illustration, a dark overlay on the photograph, a shadow, a rounded card, or a larger gold field would dissolve the world.

## Remaining before a real launch

- Replace the temporary Unsplash hero photograph with an own image at 2400×1800 (or wider), keep the two filenames, and update the alt text.
- Replace the booking placeholder (`https://example.com/boka-lyster`) and remove the demo note.
- Replace address, phone, email, Instagram, opening hours, menu, and prices; the address is currently `Luntmakargatan 42, 111 37 Stockholm`.
- Replace the Wikimedia proof photo with an own photograph, or restore its CC BY 2.0 credit in the interface before launch; the visible credit was removed at the owner's request, so the current build does not satisfy that licence for the image.
- Remove the footer demo disclosure and the menu footnote once content is real.
- Point `astro.config.mjs` at the production domain; it currently uses `https://lysternorrmalm.se`.
