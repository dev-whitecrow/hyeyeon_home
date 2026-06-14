# Plan: Open Your Art — Premium Single-Page Scroll Website

## Context

Building a full editorial-quality single-page scroll website for "Open Your Art", an art & wellness culture brand. The client has provided:
- A typography reference (Helvetica Neue + color blocks)
- A hero concept mockup ("welo" brand: large pastel serif letterforms behind a meditation photo)
- A brand color palette swatch with exact hex values and serif numbered sections

The design language is: **editorial magazine / high-end wellness**, with large overlapping serif type on photography, generous whitespace, and a strict 5-color brand system.

---

## Aesthetic Decisions

**Stance:** Editorial wellness magazine — asymmetric type compositions, photography-driven hero, serif numbers as structural elements (like the palette swatch image shows 01–05)

**Typography:**
- `Playfair Display` (Google Fonts) — headings, hero quote, giant program numbers, logo
- `"Helvetica Neue", Arial, Helvetica, sans-serif` — body text, nav links, captions, labels (system stack, no import needed)

**Palette (from brand swatch):**
| Token | Color | Use |
|---|---|---|
| `--background` | `#F4F2DC` (Beige) | Page bg, header bg |
| `--foreground` | `#022226` (Daintree navy) | Default text |
| `--card` | `#ffffff` | About section bg |
| `--primary` | `#022226` | Footer bg, CTAs |
| `--primary-foreground` | `#F4F2DC` | Footer text |
| `--accent` | `#AAD8D8` (Sinbad blue) | Service cards, accents |
| `--accent-foreground` | `#022226` | Text on accent |
| `--secondary` | `#F7E28B` (Sweet Corn yellow) | Program card accent |
| `--secondary-foreground` | `#022226` | Text on secondary |
| `--muted` | `#2A2A2A` | Body text on white sections |
| `--muted-foreground` | `#666` | Captions, metadata |
| `--border` | `rgba(2,34,38,0.12)` | Hairline rules |

---

## Files to Modify

### 1. `src/styles/fonts.css`
Add Google Fonts import for Playfair Display (400, 400i, 700):
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
```

### 2. `src/styles/theme.css`
Update `:root` token values to brand palette. Preserve `.dark` block and `@theme inline` mapping intact.

### 3. `src/app/App.tsx`
Complete single-file React implementation. Import the two usable images from `src/imports/`:
- `48665a210917495.67196934036ca.jpeg` → hero background (meditation woman)
- `56993a210917495.67196a4296fc6.jpeg` → typography/branding visual (used in about section as decorative)

---

## Section-by-Section Implementation

### Section 1: Sticky Header
- `position: sticky; top: 0; z-index: 50`
- Background: `#F4F2DC`, thin bottom border in `rgba(2,34,38,0.1)`
- Left: "Open Your Art" in Playfair Display 400, ~1.25rem
- Right: "ABOUT  CONTENT  CONTACT" in Helvetica Neue, ~0.7rem, letter-spacing wide, uppercase
- Smooth scroll anchors via `href="#about"` etc.

### Section 2: Hero
- Full viewport height, full-width background using the meditation photo (`48665a...jpeg`)
- Dark overlay: `rgba(2,34,38,0.35)` so brand quote reads clearly
- **Key design move (from "welo" reference):** Giant Playfair Display text (10–15vw) that overlaps and bleeds — place the brand name "Open Your Art" as a massive background letterform in pastel blue (#AAD8D8), semi-transparent
- Quote overlay centered or bottom-left aligned (editorial placement):
  > "Your abundance is not measured by what you have, it is created by what you share."
  > — 'Savor Every Moment'
- Typography: Quote in Playfair Display italic ~1.5rem–2rem, attribution in Helvetica Neue small caps

### Section 3: About & Services
- Background: `#ffffff`
- Two-column grid: left = Korean body text block, right = decorative type visual
- Korean copy: "당신의 이야기를 들려주세요. Open Your Art 가 당신의 이야기를 예술로 만들어 드립니다..."
- Below: 3 service placeholder cards — alternating `#AAD8D8` and `#F7E28B` backgrounds, minimal labels in Helvetica Neue uppercase

### Section 4: Content (Programs)
- Background: `#F4F2DC` (beige)
- Three program entries in a stacked or asymmetric grid layout
- Each entry: giant serif number (01, 02, 03) in `#AAD8D8` or `#F7E28B` tint, ~12vw, behind the text
- Program titles in Playfair Display, descriptions in Helvetica Neue
  1. 현대인 프로그램 (Modern People Program)
  2. 청소년 프로그램 (Youth Program)
  3. 시니어 프로그램 (Senior Program)
- Thin horizontal hairline rules separating entries

### Section 5: Contact & Footer
- Background: `#022226` (Daintree navy)
- Text: `#F4F2DC` (beige)
- Top: Minimal inquiry area — email input + send button (accent blue #AAD8D8)
- Bottom grid: brand quote left, business info right
  - 사업자등록번호: 459-09-00957
  - Email: oa@openyourart.co.kr
  - Hours: Working day. 10:00 – 18:00
- Brand quote in Playfair Display italic

---

## Responsive Behavior
- Nav collapses to hamburger below ~768px (or simply hides nav links, keeps logo)
- Hero quote scales down with `clamp()`
- Program section stacks vertically on mobile
- Footer grid collapses to single column

---

## Verification
1. All 5 sections visible on scroll
2. Sticky header stays fixed while scrolling
3. Hero photo loads (imported via Vite asset import)
4. Korean text renders correctly (system font stack handles CJK)
5. Anchor links (#about, #content, #contact) scroll to correct sections
6. Color tokens compile: `bg-background`, `text-foreground`, `bg-primary`, `border-border` all resolve
7. Playfair Display loads from Google Fonts (check in browser devtools → Network → Fonts)
