# Ayomide Ogunjobi — Product & Multidisciplinary Design Portfolio

> Modern, interactive 3D portfolio and case study platform for **Ayomide Ogunjobi**, Product & Multidisciplinary Designer based in Lagos, Nigeria.

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#)

---

## 🌟 Key Features

- **3D Continuous Cube Rotation Engine**: Smooth, low-friction transitions between main sections (*Hero*, *Works*, *About Me*, *Contact*) powered by 3D CSS transforms with an authoritative deterministic state engine.
- **Responsive Viewport-Contained Stage Framing**:
  - **Minimal Desktop Browser Frame**: Sleek top-bar with window action dots and address pill for web design and video platforms (*Faem*, *Coldstorm*).
  - **Mobile Device Bezel**: Hardware mockup with rounded corners (`border-radius: 36px`), camera notch, and 9:16 aspect ratio (*Hachi*, *Helpa Services*).
  - **Museum Matte Canvas**: Elevated card with hairline border and ambient shadow for branding, posters, and art experiments (*Ountodun*, *Champion Custard*, *Opn Wrld*, *Awaraku*).
- **Interactive Multi-Asset Stage & Thumbnail Rail**: Dynamic stage switching with next/prev arrows, active counters, and horizontal thumbnail filmstrips.
- **Fullscreen Lightbox & Zoom Viewer**: High-resolution lightbox modal with zoom toggle (Fit / 1.5x), keyboard navigation (<kbd>Esc</kbd>, <kbd>←</kbd>, <kbd>→</kbd>), and thumbnail rail.
- **Interactive Animated Typography Hero**: Morphing typography on the Contact page cycling through 9 distinct brand type personalities with interactive click-bounce physics.
- **Built-in PDF CV Viewer**: Seamless modal for previewing and downloading the official 2026 Curriculum Vitae.
- **Hash-Based Routing**: Clean browser navigation history synchronization for deep linking directly to case studies (`#/work/opn-wrld`, `#/works`, `#/about`, `#/contact`).

---

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: Vanilla CSS3 (3D Transforms, Custom Properties, CSS Grid, Flexbox, Perspective)
- **Icons & Typography**: Google Fonts (*Ojuju*, *Instrument Serif*, *Plus Jakarta Sans*, *Syne*, *Inter*, *Danfo*, *Shrikhand*, *Righteous*, *Space Grotesk*)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` or `yarn` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/Luffytheninja/ayomideogunjobi.git

# Navigate into the project folder
cd ayomideogunjobi

# Install dependencies
npm install
```

### Development

```bash
# Start the local Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicons/                    # High-res favicon assets
│   ├── works/                       # Project screenshots, videos & assets
│   └── Ayomide Ogunjobi CV 2026 PD.pdf # Curriculum Vitae
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx         # About Me editorial section
│   │   ├── CaseStudy.jsx            # Deep-dive Case Study container
│   │   ├── CaseStudyStage.jsx       # Viewport-contained dynamic framing stage
│   │   ├── ContactSection.jsx       # Contact page with animated typography
│   │   ├── CubeContainer.jsx        # Authoritative 3D Cube container
│   │   ├── HeaderNav.jsx            # Top navigation bar
│   │   ├── HeroSection.jsx          # Initial Hero introduction
│   │   ├── MediaLightboxModal.jsx   # Fullscreen pan/zoom modal
│   │   ├── PdfViewerModal.jsx       # Built-in PDF CV modal
│   │   ├── SectionFooter.jsx        # Understated coordinates & contact links
│   │   ├── Toast.jsx                # Feedback toast notifications
│   │   └── WorksSection.jsx         # Filterable Works grid & metadata card
│   ├── data.js                      # Centralized bio, timeline & case study content
│   ├── portfolio.css                # Design tokens & responsive styles
│   ├── App.jsx                      # Root application & routing
│   └── main.jsx                     # Vite React entrypoint
├── index.html                       # HTML template with SEO & OG tags
├── package.json                     # Project configuration
├── vite.config.js                   # Vite build configuration
└── README.md                        # Documentation
```

---

## 📬 Contact & Links

- **Ayomide Ogunjobi**: Founder & Product Designer, Studio AYO
- **Email**: [ayomide.gunjob@gmail.com](mailto:ayomide.gunjob@gmail.com)
- **LinkedIn**: [linkedin.com/in/ayomideogunjobi](https://linkedin.com/in/ayomideogunjobi)
- **Twitter/X**: [@luffytheninja](https://x.com/studio_ayo)
- **WhatsApp**: [+234 814 374 1574](https://wa.me/2348143741574)
