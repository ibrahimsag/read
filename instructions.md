# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive digital presentation of Euclid's Elements, featuring synchronized prose and geometric figure highlighting. Users can step through propositions while the corresponding parts of the geometric figures are highlighted dynamically.

## Build and Development Commands

```bash
# Install dependencies
npm install

# Build both main app and elements
sh build.sh
sh build-elements.sh

# Start local development server (serves at http://localhost:3000)
node local.js

# Watch mode for development (auto-rebuild on changes)
rollup -c -w
```

## Architecture

### Entry Points
- `src/main.js` - Main application entry, handles presentation logic, DOM updates, color themes, keyboard navigation, and figure rendering using rough.js for hand-drawn style SVG
- `src/content.js` - Content bundler that imports prose from `src/en/` and `src/tr/` directories
- `src/experiment.js` - Experimental features for home page

### Key Modules
- `src/html.js` - HTML template generation for cover, table of contents, and section views
- `src/style.js` - JSS style definitions with dark/light/solarized color themes
- `src/figures/*.js` - Geometric figure definitions (Books 1-13), each exports point coordinates, shapes, and letter positions
- `src/vec2.js`, `src/vec3.js` - 2D/3D vector math utilities

### Content Structure
- `src/en/` and `src/tr/` - English and Turkish prose content organized by book (1-13)
- Prose uses markup: `{AB}` for line references, `{ABC polygon}` for shapes, `{figure 1}` for figure switches
- `\\ A-α, B-β` syntax maps display letters to internal figure point names

### Build Outputs
- `build/elements.js` - Main bundled app
- `build/elements-content.js` - Bundled content
- `public/` - Static assets for home page
- `elements-public/` - Static assets for elements reader

### Rollup Configurations
- `rollup.config.js` - Development builds with sourcemaps
- `rollup.min.config.js` - Production build for home/experiment
- `rollup.min.elements.config.js` - Production build for elements reader

## Turkish Translation Guide

### Prose Markup Format

The markup format is: `{<VISIBLE_LETTERS> <shape> <arguments>}`

- **VISIBLE_LETTERS**: The only part shown to readers (e.g., "AB", "ABC", "D")
- **shape**: Type identifier for figure synchronization (`line`, `point`, `polygon`, `angle`, `circle`, `arc`, `arcc`, `given`)
- **arguments**: Additional identifiers for figure highlighting

Examples:
- `{AB line}` → displays "AB"
- `{ABC polygon}` → displays "ABC"
- `{D point}` → displays "D"
- `{ABC circle O}` → displays "ABC"

### Turkish Suffix Rules (Vowel Harmony)

Suffixes must be based on the **VISIBLE_LETTERS only**, not the shape type.

**Turkish letter pronunciation (for vowel harmony):**

Letters ending in vowels (need buffer 'y' for accusative/dative):

| Last Letter | Pronunciation | Vowel Type | Accusative | Dative | Ablative | Locative |
|-------------|---------------|------------|------------|--------|----------|----------|
| A | "a" | Back | 'yı | 'ya | 'dan | 'da |
| E | "e" | Front | 'yi | 'ye | 'den | 'de |
| I (as ı) | "ı" | Back | 'yı | 'ya | 'dan | 'da |
| O | "o" | Back | 'yu | 'ya | 'dan | 'da |
| U | "u" | Back | 'yu | 'ya | 'dan | 'da |
| B | "be" | Front | 'yi | 'ye | 'den | 'de |
| C | "ce" | Front | 'yi | 'ye | 'den | 'de |
| D | "de" | Front | 'yi | 'ye | 'den | 'de |
| F | "fe" | Front | 'yi | 'ye | 'den | 'de |
| G | "ge" | Front | 'yi | 'ye | 'den | 'de |
| H | "he" | Front | 'yi | 'ye | 'den | 'de |
| K | "ke" | Front | 'yi | 'ye | 'den | 'de |
| L | "le" | Front | 'yi | 'ye | 'den | 'de |
| M | "me" | Front | 'yi | 'ye | 'den | 'de |
| N | "ne" | Front | 'yi | 'ye | 'den | 'de |
| P | "pe" | Front | 'yi | 'ye | 'den | 'de |
| R | "re" | Front | 'yi | 'ye | 'den | 'de |
| S | "se" | Front | 'yi | 'ye | 'den | 'de |
| T | "te" | Front | 'yi | 'ye | 'den | 'de |
| Q | "ku" | Back | 'yu | 'ya | 'dan | 'da |
| W | "ve" | Front | 'yi | 'ye | 'den | 'de |
| Z | "ze" | Front | 'yi | 'ye | 'den | 'de |

Letters ending in consonants (no buffer 'y' needed, note consonant mutation):

| Last Letter | Pronunciation | Vowel Type | Accusative | Dative | Ablative | Locative |
|-------------|---------------|------------|------------|--------|----------|----------|
| X | "iks" | Front | 'i | 'e | 'ten | 'te |

Note: X ends in voiceless 's', so ablative/locative use 't' instead of 'd'.

**Examples:**
- `{AB line}'ye eşittir` - ends in B (be) → front → dative 'ye
- `{BA line}'ya eşittir` - ends in A → back → dative 'ya
- `{ABC polygon}'ye` - ends in C (ce) → front → dative 'ye
- `{DEF angle}'den` - ends in F (fe) → front → ablative 'den
- `{E point}'yi kessin` - ends in E → front → accusative 'yi
- `{CA line}'yı kessin` - ends in A → back → accusative 'yı
- `{X point}'i kessin` - ends in X (iks) → consonant ending → accusative 'i (no buffer)
- `{Q point}'yu kessin` - ends in Q (ku) → back → accusative 'yu

### List Suffix Rule

For lists of items, use a **single suffix at the end**, not on each item:

**Correct:**
```
{BK polygon}, {DL polygon} ve {EH polygon}'ye eşittir.
```

**Wrong:**
```
{BK polygon}'e, {DL polygon}'e ve {EH polygon}'e eşittir.
```

### Common Translation Patterns

| English | Turkish |
|---------|---------|
| "Let ... have been drawn" | "... çizilmiş olsun" |
| "Let ... have been joined" | "... birleştirilmiş olsun" |
| "is equal to" | "eşittir" or "... -e/-a eşittir" |
| "Thus" | "Böylece" |
| "Therefore" | "Dolayısıyla" |
| "So" | "O halde" or "Böylece" |
| "For" (because) | "Çünkü" |
| "(Which is) the very thing it was required to do" | "(Yapılması gereken tam olarak budur.)" |
| "(Which is) the very thing it was required to show" | "(Gösterilmesi gereken tam olarak budur.)" |
| "I say that" | "Diyorum ki" |
| "So it is required to" | "Böylece ... gerekiyor" |

### Geometric Terms

| English | Turkish |
|---------|---------|
| straight-line | düz çizgi |
| circle | çember |
| triangle | üçgen |
| square | kare |
| rectangle | dikdörtgen |
| parallelogram | paralelkenar |
| pentagon | beşgen |
| hexagon | altıgen |
| angle | açı |
| right angle | dik açı |
| diameter | çap |
| radius | yarıçap |
| circumference | çevre |
| segment | parça |
| arc | yay |
| tangent | teğet |
| perpendicular | dik |
| parallel | paralel |
| center | merkez |
| base | taban |
| vertex/vertices | köşe/köşeler |
| equilateral | eşkenar |
| equiangular | eşaçılı |
| isosceles | ikizkenar |
| inscribed | içyazılmış |
| circumscribed | çevreleyerek yazılmış |
