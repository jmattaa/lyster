# Lyster

Statisk demowebbplats för den fiktiva restaurangen **Lyster** — modern husmanskost i Stockholm. Byggd med Astro som ren statisk HTML/CSS/JS, utan backend, formulär eller tredjepartsspårning.

Sidan finns i två versioner:

- `/` — startsida med koncept, utvalda rätter, foto, karta och bokning.
- `/meny` — full meny med kategorier, lunch, provsmakningsmeny och utskriftsvänlig layout.

Allt innehåll är på svenska. Meny, priser, öppettider, adress och kontaktuppgifter är **exempeldata** och måste ersättas innan en riktig lansering.

## Kom igång

Krav: Node.js 20.3 eller senare och pnpm 11. Aktivera gärna pnpm via Corepack:

```bash
corepack enable
pnpm install
pnpm dev        # http://localhost:4321
```

## Bygg och publicera

```bash
pnpm build      # bygger till dist/
pnpm preview    # förhandsgranskar den byggda sajten
```

`dist/` innehåller bara statiska filer och kan läggas på valfri statisk host (Netlify, Vercel, Cloudflare Pages, S3, Nginx, Go-server med mera). `build.format: 'directory'` innebär att menysidan blir `dist/meny/index.html` och nås på `/meny/`.

Sajten använder absoluta sökvägar (`/meny`, `/images/...`). Publiceras den under en underkatalog måste `base` sättas i `astro.config.mjs` och de absoluta länkarna ses över.

### Domän

`astro.config.mjs` anger `site: 'https://lysternorrmalm.se'`. Det styr canonical- och Open Graph-URL:er. Ändra till den riktiga domänen vid lansering. `Base.astro` har samma adress som fallback.

## Innehåll som ska ersättas

### Kontakt och adress

| Fält | Demovärde | Var |
| --- | --- | --- |
| Restaurangnamn | Lyster | `src/layouts/Base.astro`, `Header.astro`, `Footer.astro` |
| Adress | Luntmakargatan 42, 111 37 Stockholm | `Footer.astro`, `Header.astro`, `index.astro`, `Map.astro` |
| Telefon (visning) | 08–123 45 678 | `Header.astro`, `Footer.astro`, `Booking.astro`, `index.astro` |
| Telefon (länk) | `+46812345678` | samma filer |
| E-post | hej@lyster.se | `Header.astro`, `Footer.astro`, `Booking.astro`, `index.astro` |
| Instagram | @lystersthlm / `instagram.com/lystersthlm` | `Header.astro`, `Footer.astro`, `index.astro` |
| Kartlänk | OpenStreetMap-embed på adressen; Google Maps för vägbeskrivning | `Map.astro`, `index.astro` |

### Öppettider

| Period | Värde |
| --- | --- |
| Tisdag–fredag | 11.30–23.00 |
| Lördag | 12.00–23.00 |
| Söndag–måndag | Stängt |
| Lunch | Tisdag–fredag 11.30–14.00 |
| Köket stänger | 22.30 |

Öppettiderna finns i `Footer.astro`, `index.astro` samt i schemat i `src/scripts/site.js` (öppet/stängt-status, `Europe/Stockholm`). Ändra alla tre så stämmer de.

### Bokning

Bokningsknappen pekar på `https://example.com/boka-lyster` i `src/components/Booking.astro`. Länken är medvetet markerad som platshållare:

- Den har attributen `data-booking-link` och `data-booking-placeholder`.
- Klick avbryts och en statusruta visar telefonnumret i stället.
- Footern visar en demotext om att bokningslänken inte är kopplad.

Vid riktig bokningslänk: byt `href`, ta bort `data-booking-placeholder` och statusrutan `.booking__note`, samt uppdatera demotexten i `Footer.astro`. Internt går alla "Boka bord"-knappar till `#boka` och kan lämnas som de är.

### Meny och priser

Menyn är data-driven och ligger i `src/pages/meny.astro` i arrayerna `courses` och `lunch`. Alla 22 rätter, 5 lunchrätter och priser är exempel.

| Kategori | Rätter | Priser |
| --- | --- | --- |
| Tilltugg | Toast med räkor; Löjrom med gräddfil; Krondillsinlagd gurka (vegetarisk) | 145 / 165 / 75 kr |
| Husmanskost | Köttbullar; Wallenbergare; Kalops; Stekt fläsk med löksås; Isterband | 265 / 285 / 255 / 245 / 235 kr |
| Från havet | Stekt strömming; Gravad lax; Fiskgryta | 245 / 245 / 275 kr |
| Grönt | Ugnsbakad rotselleri (vegetarisk); Böngryta (vegansk); Rödbetor med getost (vegetarisk) | 225 / 215 / 155 kr |
| Efterrätt | Ostkaka (glutenfri); Varm äppelkaka; Kanelbulle med glass; Blåbärssoppa (glutenfri) | 115 / 105 / 95 / 85 kr |
| Dryck | Lyster lager; Gammeldags snaps; Äpple och fläder (alkoholfri); Kaffe | 75 / 65 / 55 / 35 kr |

Övriga exempelvärden:

- Provsmakningsmeny **"Tre rätt, ett bord"**: 495 kr (`meny.astro`).
- Lunch: 145 kr, dagens gröna 135 kr. Lunchrätterna är Köttbullar (tis), Stekt strömming (ons), Ärtsoppa med fläsk (tors) och Kalops (fre).
- Säsongsrad: **Höstmeny 2026**.
- Startsidans utvalda rätter och priser: Köttbullar 265 kr, Stekt strömming 245 kr, Ugnsbakad rotselleri 225 kr.

### Demo- och platshållartexter

Sök efter följande innan lansering:

- `Demowebbplats.` i `src/components/Footer.astro` — hela demodeklarationen ska bort eller skrivas om.
- `data-booking-placeholder`, `data-booking-note` och `example.com` i `Booking.astro`.
- `Menyn är ett exempel i den här demon` i `meny.astro` (fotnot under menyn).

## Bild och licens

### Hero (tillfällig platshållare)

Startsidans fullbreddsband använder just nu ett tillfälligt platshållarfoto från Unsplash:

- **Filer:** `public/images/hero-rum-1200.webp` (1200×900) och `public/images/hero-rum-2400.webp` (2400×1800).
- **Källa:** Unsplash, `photo-1567521464027-f127ff144326`, licensierad under Unsplash License. Bilden är endast en platshållare och ska ersättas med ett eget foto före lansering.
- **Byt:** ersätt båda filerna med eget foto i samma filnamn och storlekar och justera `alt` i `index.astro` så den beskriver den nya bilden. Fotot bör vara ljust dagsljus, liggande 4:3 eller 3:2, minst 2400 px brett, med motivet centrerat eller till höger.

### Köttbullar i proof-sektionen

Fotot i "Inga genvägar på tallriken" är ett illustrationsfoto:

- **Fil:** `public/images/kottbullar-720.webp` (720×661) och `public/images/kottbullar-1280.webp` (1280×1174).
- **Upphov:** [tuey / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Swedish.food-K%C3%B6ttbullar_med_lingon-01.jpg), CC BY 2.0.
- **Lanseringsblockerare:** bilden kräver synlig attribution enligt CC BY 2.0. Den crediteringen har tagits bort från gränssnittet på beställning, så bilden får inte användas vid en riktig lansering som den är. Ersätt den med ett eget foto, eller återställ crediteringen i anslutning till bilden, innan sajten publiceras.

### Fotokrediteringar i gränssnittet

Sajten visar medvetet inga fotokrediteringar, bildtexter eller fotnoter vid bilderna. Licens- och upphovsinformation hålls i stället i den här filen. Det innebär att bilder som kräver attribution — som Wikimedia-fotot ovan — måste bytas ut eller crediteras innan publicering.

Övriga filer:

- `public/images/paper-noise.webp` — subtil papperstextur, 128×128 px, används som bakgrund.
- `src/components/Mark.astro` är den enda handritade SVG-formen. Den används i header, mobilmeny och footer, och är favicon. Det finns inga andra illustrerade glyfer.
- `src/components/Map.astro` är en lazy-laddad OpenStreetMap-iframe med synlig kartcreditering och en Google Maps-länk för vägbeskrivning. Ingen handritad karta.
- Pilarna i knappar och länkar är typografiska `→`, inte SVG-ikoner.
- Typsnittet **Familjen Grotesk** är self-hosted via `@fontsource-variable/familjen-grotesk`, inklusive den äkta kursiva skärningen (SIL Open Font License 1.1).

## Struktur

```
src/
  components/    Header, Footer, Booking, Map, Mark, Arrow
  layouts/       Base.astro (metadata, kontrakt, skal)
  pages/         index.astro, meny.astro
  scripts/       site.js (mobilnav, reveals, öppettider, menyns kategorisynk)
  styles/        global.css (tokens, komponenter, responsivt, print)
public/
  images/        foto och papperstextur
  favicon.svg
PRODUCT.md       produktunderlag
DESIGN.md        designsystem (tokens, regler, komponenter)
.impeccable/     riktningsval, design-sidecar och QA-underlag
```

## Funktioner

- Responsivt från 390 px till breda skärmar, med 72 px header och bokning i sidans innehåll i stället för en fast rad.
- Fullbredds heroband med cobalt kopieplan och foto; under 900 px staplas fotografiet överst och kopian under.
- Fullskärmig mobilnavigation som `<dialog>` med fokusfångst och Escape-stängning.
- Öppet/stängt-status som räknas om varje minut i `Europe/Stockholm`.
- Scroll-reveals och ett fullbredds heroband där fotografiet vecklas fram en gång med en clip-path-mask; rubriken använder samma mask.
- Menyns kategorinav synkas vid scroll; kategorierna kan också klickas. Den sticky menyn är typografisk, utan illustration.
- Karta i form av ett lazy-laddat OpenStreetMap-embed med vägbeskrivning till Google Maps.
- `prefers-reduced-motion` stänger av rörelse och visar allt innehåll direkt.
- Utskrift av `/meny` ger en läsbar pappersmeny (5 sidor vid A4) utan navigation, bokning, karta eller footer.

## Tillgänglighet och kvalitet

- Skip-link, synlig fokusmarkering (2 px guld), semantiska rubriker och `aria-current` i navigationen.
- Ingen horisontell scroll vid 1440, 834 eller 390 px.
- Kontrast kontrollerad för brödtext, metadata, knappar och bokningsnotis.
- Inga externa skript, cookies eller analytics. OpenStreetMap-embedden laddas lazy och är den enda externa resursen som laddas automatiskt; Google Maps och Instagram öppnas först vid klick.
- QA-underlag, skärmbilder och utskrifts-PDF finns i `.impeccable/review/`.

## Design

Se `DESIGN.md` för den fullständiga visuella specifikationen: pappersgrund, koboltfält, mässingsregler, typografiska regler, de två glyferna, komponenter och förbud. Maskinläsbara tillägg (rörelse, brytpunkter, tonala ramper) ligger i `.impeccable/design.json`.
