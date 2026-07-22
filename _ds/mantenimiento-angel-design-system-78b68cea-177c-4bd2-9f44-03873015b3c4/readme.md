# Mantenimiento Ángel — Design System

A design system for **Mantenimiento Ángel**, a firm offering integral maintenance for homes and buildings (mantenimiento integral para casas y edificios) in Mexico City. This system powers the marketing website and any client-facing surface.

> **North star:** the site should feel like a *well-maintained building*. Calm, solid, documented. Nothing broken, nothing flashy, everything in its place. The artifact must embody the standard it sells. Competence is **shown** (a dated before/after, a scope of work, the report we sent), never **claimed**.

The whole system is the act of holding the center between two enemies:
- **The panic handyman** — red everything, "24/7 EMERGENCY!", clip-art tools. Signals desperation. We are the opposite.
- **The cold starchitect** — silent hero images, no prices, no people, no documentation. Useless when the roof leaks. We are also the opposite.

**Two audiences, one site.** The *homeowner* wants relief and skims — design a fast, honest, skimmable surface. The *building administrator / HOA board* wants accountability and reads — give them a documented depth underneath. Every page: relief on top, accountability below.

## Sources
Built from a written brand brief (no external codebase or Figma was attached). If a codebase or Figma later exists, record its links here so future iterations can reconcile against the real product.

---

## Content fundamentals — how copy is written

**Language:** Spanish (Mexico), addressing the reader as **usted** (formal you) in customer-facing prose. Internal labels stay short and plain.

**Voice:** Calm, plain, specific. Numbers over adjectives. Never alarmist. Verb-first, present tense: *Inspeccionamos. Reparamos. Documentamos.* Name what we'll do, when, and what it costs to find out — the reader always knows the next step.

- ❌ "Somos apasionados por entregar soluciones de excelencia en cuidado integral del hogar."
- ✅ "Inspeccionamos el edificio, le decimos qué encontramos, lo reparamos y le enviamos el reporte."

**Rules:**
- **Banned words:** soluciones, sinergia, apasionados, de clase mundial, de vanguardia, potenciar (solutions, synergy, passionate, world-class, cutting-edge, leverage). Filler the eye skips.
- **State costs and timelines** wherever possible. "La visita de diagnóstico cuesta $650. Respondemos en menos de 24 horas." Honesty about money is the strongest trust signal a maintenance firm has.
- **One idea per sentence.** The reader is often stressed (something is broken).
- **The emergency seam:** you may offer urgent service, but frame it as *preparedness*, not panic — "¿Problema urgente? Así respondemos y en cuánto tiempo." Never a flashing red banner. The calm firm is the one you trust in an actual emergency.

**Emoji:** none. **Casing:** sentence case for headings; UPPERCASE only for small structural labels (with letter-spacing). The mono layer never shouts.

---

## Visual foundations

**Palette — drawn from building materials, not invented.** Slate, plaster, stone, patina, ochre, brick. This is why it coheres: it has a source. A page is ~90% slate-on-plaster; loud color appears *only where it means something.*
- Structure: Blueprint slate `#1C2B3A`, Mid slate `#3D5266`.
- Surfaces: Warm plaster `#F4F1EC` (page — not clinical white), Deeper stone `#E8E3DA` (panels), Near-white `#FCFBF9` (cards).
- **Signal (rare by design):** Patina green `#2F7A52` (done / the one CTA), Ochre `#B8761D` (genuine attention), Brick red `#B23A2E` (true error / destruction only). **Red is never a theme or decoration color** — a "no emergencies" brand cannot theme itself in alarm-red. Don't color every "OK" green either; calm is the default, signal is the exception.

**Type — one humanist sans + one mono.** IBM Plex Sans (the spine; everything human-facing) and IBM Plex Mono (the documentary layer). **Signature move:** mono carries the records — dates, folio numbers, addresses, specs, quantities. `Visita registrada · 2026-03-14 · Folio MTO-0412 · Av. Insurgentes 1247` does more for trust than a paragraph. Max two weights per view (Regular + Semibold). Body never below 16px (buyers are often 55+); err larger.

**Spacing & layout.** Single modular scale: 4 / 8 / 16 / 24 / 40 / 64. Every gap is a value on the scale, never eyeballed. The layout must look *maintained* — perfect alignment, consistent gaps, no orphaned elements. This is self-referential: a misaligned card advertises a tolerated loose gutter. Phone-first (a stressed homeowner holds a phone). Container max 1120px.

**Backgrounds.** Flat warm neutrals. No gradients, no textures, no full-bleed silent heroes. One dark ink section (`#1C2B3A`) is allowed for the administrator/contract pitch — used as contrast, not decoration.

**Corners & elevation.** Restrained radii (3 / 6 / 10px) — crisp like cut stone, not pillowy. Cards: near-white surface, hairline slate-alpha border, soft low shadow (`0 2px 8px rgba(28,43,58,.05)`). Never neon glow.

**Borders.** Hairlines are slate at low alpha (`rgba(28,43,58,.10–.32)`) — never invented greys.

**Motion — near-zero.** Calm is stillness. Transitions only to orient (a panel opening, a confirmation appearing), 120–200ms, standard ease. No parallax, no scroll animation, no bounce. Restraint is the thesis, not laziness. Respect `prefers-reduced-motion`.

**Hover / press.** Hover darkens fill slightly (patina → `#256340`) or firms a border; no lift, no glow. Press is a quiet color shift. Focus is a visible 2px slate outline (accessibility is the market, not politeness).

**Photography & evidence — the heart of the site.** Real work, real people, real buildings — dated, often annotated. The aesthetic is *documentation, not advertising.* A dated, captioned photo outperforms a styled shot because it is evidence. **The Before/After is a first-class component** (paired images, same angle, dated, one sentence of scope) — reuse it everywhere. **Forbidden without exception:** stock handshakes, models in clean hard hats, generic houses you didn't work on. One fake photo says you might fake other things. Respect resident privacy: frame tightly on the work.

---

## Iconography

Deliberately minimal. The brand's restraint extends to icons — there is **no decorative icon set, no emoji, no clip-art tools** (the panic handyman's tells). Where a mark is needed:
- The wordmark uses a small inline SVG: a blueprint-slate rounded square enclosing a roofline, with a single patina-green dot — a maintained structure. It lives in `ui_kits/website/Homepage.jsx` (`Logo`).
- Inline status uses the `StatusBadge` dot + mono label, not pictograms.
- Checks/markers in lists are simple typographic `✓` / `—` in semantic colors, not an icon font.

If a richer UI later needs line icons, use a quiet, even-stroke set (e.g. **Lucide**, 1.5px stroke, via CDN) to match the hairline weight of the system — and flag the addition. Never hand-roll decorative SVGs or use emoji as icons.

---

## Index — what's in this system

**Foundations (root + `tokens/`)**
- `styles.css` — the entry point consumers link (imports only).
- `tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css`, `base.css` — CSS custom properties + base element defaults.

**Components (`components/`)** — reusable primitives, namespace `MantenimientoAngelDesignSystem_*`:
- `core/` — `Button`, `Card`
- `forms/` — `Field` (labeled input/textarea, calm errors)
- `records/` — `FolioLine` (the mono documentary line), `StatusBadge`
- `evidence/` — `BeforeAfter` (the flagship)
- `marketing/` — `ServiceCard` (scope + honest exclusions), `TrustStrip`

**UI kit (`ui_kits/website/`)** — interactive homepage recreation composing all primitives (hero, trust band, services, contract pitch, named testimonial, conversion form).

**Specimen cards (`guidelines/`)** — foundation cards rendered in the Design System tab (Colors, Type, Spacing, Brand).

**`SKILL.md`** — makes this folder usable as a downloadable Agent Skill.

---

> When the rules fight the promise, the promise wins. Before every decision, ask automatically: **would a well-maintained building feel like this?**
