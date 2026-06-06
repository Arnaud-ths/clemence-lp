# Clémence Creative Studio — Design System

A design system + brand toolkit for **Clémence Creative Studio**, a freelance **Social Media Manager** based in Paris with five years' experience, working with lifestyle artisan brands across **fashion, jewellery, décor and publishing** (mode, bijou, décoration, édition).

The brand is soft, warm and feminine with a *cottagecore* sensibility: a cream paper backdrop, sage-and-forest greens, a signature **vichy (gingham) check**, watercolour seasonal illustrations, and a retro-elegant display type. The whole identity shifts through **four seasonal palettes** (spring / summer / autumn / winter) while keeping the same bones.

> **Working language is French.** All product copy, UI labels and templates are written in French. Keep it that way unless asked otherwise.

---

## Sources

This system was decoded from materials owned by the studio. You may not have access — they are recorded here in case you do.

- **GitHub — primary source:** [`Arnaud-ths/clemence-creative-studio`](https://github.com/Arnaud-ths/clemence-creative-studio)
  Contains the master `playbook.html` (26-slide 16:9 deck), `brand-system.md`, `accessibility.md`, design tokens, and all exported assets. **Explore this repo further to build higher-fidelity work** — it has the full brand playbook, the seasonal asset library, and the WCAG audit.
- **Canva charte originale:** `DAHFg4y11js` (20 pages — colours, logos, type, seasonal worlds)
- **Canva post présentation:** `DAHFhr6dBb4`
- Brand contact: `clemence.creativestudio@outlook.com`

### Extraction status (from the source repo)
| Asset | Status |
|---|---|
| Base colours (hex written in charte) | ✅ exact |
| Spring palette (hex written) | ✅ exact |
| Summer / autumn / winter palettes | 🟡 ~95%, read off PNG exports |
| Type families (names) | ✅ exact |
| Logos | ✅ 6 PNG variants (transparent), not isolated as SVG |
| Vichy motif | ✅ recreated as pure CSS |
| Seasonal watercolour illustrations | ✅ ~18 transparent PNGs imported |

---

## Type stack

| Role | Font | Source | Usage |
|---|---|---|---|
| **Display / headings** | **Pompiere** | self-hosted + Google Fonts | All titles, eyebrows, labels |
| **Body** | **EB Garamond** | Google Fonts | Paragraphs, ledes, captions, italic accents |
| **Signature (rare)** | **Meow Script** | self-hosted | Covers, the name *Clémence*, one hero accent — never body |

> **Font substitution flag.** The charte's original body face is **CMU Serif**, which is not free/web-available. The master playbook uses **EB Garamond** as the substitute (≈95% match) — that's what this system ships. The repo's `tokens.css` experimented with **Fraunces** instead; I chose EB Garamond to match the finished playbook. If you have the licensed CMU Serif woff2, drop it in `fonts/` and point `--serif-body` at it for 100% fidelity.

## Palette

```
Crème        #F8F3E3   primary background
Crème clair  #FDF6E1   surfaces
Terre        #8B725D   warm brown · meta
Forest       #457D58   accent · headings · CTA
Sauge        #9BBF9F   soft decorative green
```
Plus three accessible **"deep"** variants (`earth-deep #705846`, `forest-deep #2D523C`, `sage-deep #527958`) that carry text / borders at WCAG AA+, and four **seasonal** accent sets. Full tokens live in [`colors_and_type.css`](colors_and_type.css).

---

## CONTENT FUNDAMENTALS

How the brand writes. Voice is summarised in three words: **doux · complice · affirmé** (gentle · close · self-assured).

- **Language:** French, always. No marketing anglicisms ("growth-hack", "engagement-boost" → banned).
- **Address:** the informal **tutoiement** ("tu", "raconte-moi", "garde-le"). Speaks *to* the reader as a friend, never *at* an audience. **"je" / "tu"**, rarely "nous".
- **Sentence shape:** short, breathing sentences. Soft punctuation. Frequent single-line fragments used as emphasis ("sans renier leur ADN.", "Doux. Complice. Affirmé.").
- **Casing:** sentence case for body and most titles. Eyebrows/labels are the exception — UPPERCASE with wide letter-spacing (e.g. `01 · DIRECTION ARTISTIQUE`). Section dividers number parts `01 / 02 / 03`.
- **Affective vocabulary:** *pépite* (gem), *vibe*, *moment*, *raconte-moi*, *coulisses*, *douillet*. Warm, tactile, never corporate.
- **Stance:** affirmed, no magic promises. States convictions plainly; owns one vertical, one audience, one rhythm.
- **Emoji:** used sparingly and only delicate ones — 🤍 ✿ ✨ ✦. Never loud emoji (no 🔥🚀💯). Often replaced by the daisy/floral illustration instead.
- **CTA library (one per post, rotated):**
  - Discussion → *« Tu vois les choses différemment ? Raconte-moi. »*
  - Like → *« Tu te reconnais là-dedans ? »*
  - Save → *« Garde-le dans un coin, tu me remercieras plus tard. »*
  - Share → *« T'as pensé à quelqu'un en lisant ça ? »*
  - Follow → *« Reste dans le coin, j'ai d'autres pépites à venir. »*

**Vibe in one line:** a Parisian friend who happens to be brilliant at Instagram — warm, precise, never pushy.

---

## VISUAL FOUNDATIONS

- **Colour vibe:** warm, sun-faded, *paper* — everything sits on cream `#F8F3E3`, never pure white. Greens are muted and herbal (sage → forest), browns are warm terracotta-leaning. Seasonal palettes recolour the accents but the cream base persists (winter swaps to snow `#FAF3DF`).
- **Backgrounds:** cream solid fields + the signature **vichy/gingham** check. Gingham is **recreated in pure CSS** (two 45%-opacity stripe layers crossing) — see `.gingham` in `colors_and_type.css`; transparent PNG tiles also live in `assets/patterns/vichy/`. No photographic backgrounds in the brand layer; no gradients beyond optional soft protection overlays.
- **Imagery:** hand-painted **watercolour illustrations**, cottagecore bestiary by season (muguet, abeille, marguerite / coquillage, corail, étoile de mer / citrouilles, feuilles, pomme de pin / bonhomme de neige, flocons). Soft edges, transparent PNGs, gentle warm-cool tilt per season. Photography (when used) is bright, natural-light, lifestyle — never moody.
- **Type motifs:** retro condensed display (Pompiere) for size; classic serif (EB Garamond) for reading; cursive (Meow Script) used *once* per layout as a flourish — typically the name "Clémence". Italic EB Garamond carries ledes.
- **Corner radii:** generously soft. Cards `16–24px`, chips `8px`, pills `999px`. Nothing sharp-cornered.
- **Cards:** cream-light surface, **very soft brown/green shadow** (`--shadow-soft` / `--shadow-card`), optional 1px `sage-deep` border. Never heavy borders, never hard drop shadows.
- **Borders:** hairline. Visible borders use `sage-deep #527958` (sage itself is too light to read — banned for borders). Editorial lists use a single top `border-top` hairline between rows rather than boxes.
- **Shadows:** soft, low, tinted (brown `rgba(139,114,93,.08)` or green `rgba(69,125,88,.10)`). No black shadows. No inner shadows.
- **Transparency / blur:** used lightly — translucent dark nav pill with `backdrop-filter: blur` in the playbook; over sage surfaces, a `forest-deep` 35–45% overlay sits behind text to lift it to AA.
- **Layout rules:** very generous margins (≈7% horizontal). Two-column editorial splits (text + logo/illustration). Curved hand-drawn arrows point from caption to subject in social posts. The **CCS monogram always sits at the bottom as a signature**.
- **Motion:** soft and slow. Eases `--ease-soft` (settle) and `--ease-bloom` (gentle overshoot, "blooming"). Durations 150–680ms. Fades and gentle rises; one playful bloom on key reveals. Respects `prefers-reduced-motion`. No bounces, no spins.
- **Hover states:** primary buttons darken `forest → forest-deep`; links shift `forest-deep → earth-deep`; cards lift with a slightly deeper soft shadow. Subtle, never scaling up loudly.
- **Press states:** brief darken; optional 1–2px settle. No aggressive shrink.
- **Accessibility:** body ≥16px (default 18px), line-height 1.65, always-visible focus ring (`forest-deep`, AAA). Sage is decorative-only — never text or load-bearing borders.

---

## ICONOGRAPHY

The brand is **illustration-led, not icon-led.** There is **no built-in icon font** and there are **no custom SVG icons** in the source.

- **Primary "icons" = watercolour illustrations.** Floral and seasonal motifs (daisies with coloured centres, muguet, bees, shells, pumpkins, snowflakes) do the work icons would elsewhere. These are real PNG assets in `assets/illustrations/` — **use them, don't redraw them.**
- **The daisy** (cream petals, single coloured centre — green / blue / pink / orange to match seasonal palettes) is the recurring decorative bullet/accent, seen scattered down the side of charte pages.
- **Hand-drawn curved arrows** are a signature graphic device in Instagram posts (caption → subject).
- **Logo / monogram = CCS** (a large serif **C**, an overlapping cursive **e**, a superscript **S**) over a vichy square, plus "Creative Studio" beneath. Six PNG variants ship in `assets/logos/`.
- **UI chrome icons:** the brand ships none. When an interface genuinely needs functional UI glyphs (search, menu, close, social), use **[Lucide](https://lucide.dev)** from CDN at a thin stroke (`1.5`) to match the delicate line quality — **this is a documented substitution, not a brand asset.** Prefer an illustration or a typographic mark whenever one will do.
- **Emoji:** only the delicate set 🤍 ✿ ✨ ✦, sparingly. Unicode flourishes like `·` and `→` appear in eyebrows and CTAs.

---

## Index / manifest

Root files:
- **`README.md`** — this file: context, sources, content + visual foundations, iconography.
- **`colors_and_type.css`** — all design tokens (colour, type scale, space, radius, shadow, motion) + semantic classes (`.h1`, `.p`, `.eyebrow`, `.gingham`, seasonal themes). Import this into any artifact.
- **`SKILL.md`** — Agent-Skill manifest for using this system in Claude Code.
- **`fonts/`** — self-hosted Pompiere + Meow Script (woff2/ttf).
- **`assets/`** — `logos/` (6 PNG variants), `patterns/vichy/` (seasonal gingham tiles), `illustrations/` (watercolour bestiary by season), `charte/` (HD reference pages from the original Canva), `tokens/` (source tokens.css/json).
- **`preview/`** — design-system cards (colours, type, components) shown in the Design System tab.

UI kits — high-fidelity recreations of the brand's two surfaces:
- **`ui_kits/website/`** — the freelance portfolio / landing site (hero, services, about, contact).
- **`ui_kits/instagram/`** — the Instagram feed + post templates (4:5 carousels, the studio's core deliverable).

Slides:
- **`slides/`** — `playbook.html` (the **full 20-slide brand playbook**: DA, social strategy, accessibility) + `index.html` (a 7-slide sample). Both in the master playbook style, on the deck-stage shell.

---

*Decoded May 2026. Seasonal colours for summer/autumn/winter are pixel-estimates — validate with the studio for a perfect match.*
