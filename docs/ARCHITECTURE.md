# Portfolio System Architecture & Technical Documentation

This document outlines the architectural blueprint, design tokens, graphics pipeline, and deployment workflow for **Vishal Baruah's LiquidGL Portfolio**.

---

## 1. High-Level Architecture

```
[ Browser Client ]
        │
        ├── [ HTML5 / index.html ] ── JSON-LD Structured Graph (Google SEO / AI Citations)
        │
        └── [ React 18 Application Root ]
                ├── [ Scroll Progress Bar ] ── Real-time viewport scroll progress
                ├── [ Global Background Caustics ] ── 3D dynamic fluid mesh blobs
                ├── [ Navigation System ] ── VisionOS floating pill dock & mobile sheet
                ├── [ Hero 3D Stage ] ── Three.js / R3F MeshTransmissionMaterial
                ├── [ Bento Project Engine ] ── Filterable dynamic card architecture
                ├── [ Experience Timeline ] ── Alternating spill-out scroll reveal (NRL July 2026)
                ├── [ Skill Matrix ] ── Category tab router & level indicators
                └── [ Education & Certifications ] ── Grid layout & verification badges
```

---

## 2. 3D WebGL Liquid Transmission Pipeline

The centerpiece floating liquid crystal slab uses `@react-three/fiber` and `@react-three/drei`'s `MeshTransmissionMaterial`:

* **Optical Refraction & IOR**: Index of refraction set to `1.45`, simulating high-clarity synthetic crystal.
* **Chromatic Dispersion**: Aberration factor `0.04` produces subtle edge rainbow splitting without washing out foreground text.
* **Sub-surface Scattering**: Soft internal glow driven by multi-directional lights (`#00F0FF`, `#6366F1`, `#8B5CF6`).
* **Physics & Cursor Interaction**: Mouse movement coordinates normalize to `[-1, 1]` and interpolate smoothly via linear interpolation (lerp) within the `useFrame` render loop.

---

## 3. SEO & Structured Data Graph

Located in `index.html`, the JSON-LD `@graph` connects the following schema nodes:

1. **`Person`**:
   - Declares official identity, verified educational institutions, industrial internship (`Numaligarh Refinery Limited`), and recognized skill taxonomy.
2. **`WebSite`**:
   - Declares domain authority, site title, and authorship links.
3. **`ProfilePage`**:
   - Associates the web document directly with the `Person` entity for search engine knowledge graph integration.

---

## 4. Deployment Pipeline

The portfolio is deployed directly to **GitHub Pages** via the GitHub Actions workflow in `.github/workflows/deploy.yml`:

1. Triggered on push to `main`.
2. Sets up Node.js environment.
3. Runs `npm ci` and `npm run build` with Vite.
4. Uploads the `dist/` directory as a GitHub Pages artifact.
5. Deploys live to `https://vishal-baruah.github.io/`.
