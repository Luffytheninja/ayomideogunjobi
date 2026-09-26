export const bioData = {
  name: "AYOMIDE OGUNJOBI",
  title: "Product designer working across UX, UI and visual design.",
  heroText: "I design digital products and experiences from problem to prototype to production.",
  currently: "Founder & Product Designer, Studio AYO",
  location: "Nigeria",
  availability: "Available for Product / UI/UX / Visual Design opportunities",
  email: "ayomide@studioayo.com",
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/ayomideogunjobi" },
    { label: "Twitter/X", url: "https://x.com/studio_ayo" },
    { label: "GitHub", url: "https://github.com/ayomideogunjobi" },
    { label: "ReadCV", url: "https://read.cv/ayomide" }
  ]
};

export const caseStudies = [
  {
    id: "opn-wrld",
    number: "01",
    name: "OPN WRLD",
    date: "2026",
    roles: "Product Designer · Visual Designer · Creative Developer",
    clientFeedback: "Live digital storefront for Lagos-born streetwear label · openworlddrops.vercel.app",
    category: "UI/UX Design",
    tags: ["Streetwear", "E-Commerce", "Editorial Web", "Visual Direction", "AI-Assisted Dev", "Vercel"],
    subtitle: "Building a digital storefront for a Lagos-born streetwear label",
    website: "https://openworlddrops.vercel.app/",
    status: "Live Project · Digital Storefront",
    location: "Lagos, Nigeria",
    summary: "OPN WRLD is a Lagos-born streetwear label built around heavyweight apparel, limited drops and a visual language that feels closer to a cultural archive than a conventional fashion storefront. I designed and built its digital storefront as an extension of that identity, translating the brand into a shopping experience that feels editorial, direct and distinctly OPN WRLD. The website brings together product discovery, category browsing, checkout and brand touchpoints while leaving room for the label's drops and visual archive to evolve over time. The live experience currently includes dedicated collections for shirts, shorts, trousers and caps, alongside checkout, an archive, community links and Instagram.",
    paragraphs: [
      "OPN WRLD is a Lagos-born streetwear label built around heavyweight apparel, limited drops and a visual language that feels closer to a cultural archive than a conventional fashion storefront. I designed and built its digital storefront as an extension of that identity, translating the brand into a shopping experience that feels editorial, direct and distinctly OPN WRLD.",
      "The website brings together product discovery, category browsing, checkout and brand touchpoints while leaving room for the label's drops and visual archive to evolve over time. The live experience currently includes dedicated collections for shirts, shorts, trousers and caps, alongside checkout, an archive, community links and Instagram.",
      "More importantly, the project became a practical exploration of something I now consider fundamental to client-facing digital work: A good website shouldn't just look finished. It should be built to keep living."
    ],
    roleDetails: {
      title: "Product Designer · Visual Designer · Creative Developer",
      team: "OPN WRLD (Lagos, Nigeria)",
      scope: "Art Direction · UI/UX · E-commerce · Visual Design · Frontend Development",
      collaboration: "Ayomide Ogunjobi (Design & Engineering) · Client: OPN WRLD",
      tools: "Figma, AI-Assisted Dev, Vercel",
      website: "openworlddrops.vercel.app",
      narrative: "I wasn't only responsible for the visual layer. The project moved across the full design-to-build pipeline: Visual direction → Interface design → Responsive layouts → Frontend implementation → Content architecture → Deployment. I used AI-assisted development as part of the implementation process, treating the generated code as material to design, inspect and refine rather than as a replacement for the design process. This allowed the project to move quickly from visual decisions into a functioning storefront while keeping the interface under design control."
    },
    problem: {
      headline: "Fashion websites often fall into a familiar pattern: hero image → products → product grid → checkout.",
      description: "Fashion websites often fall into a familiar pattern: hero image → products → product grid → checkout. That structure works, but it can flatten a brand into a catalogue. For OPN WRLD, the goal was to build something that could sell clothing without making the brand feel like it existed only to sell clothing. The result needed to feel like a brand world with commerce inside it, rather than an online store with branding layered on top.",
      frictionPoints: [
        "Commerce: products needed to be easy to discover and purchase without friction.",
        "Identity: the interface needed to feel like OPN WRLD rather than a generic fashion template.",
        "Flexibility: the system needed to support future drops, content and an evolving archive."
      ],
      challenge: "How might we create an editorial shopping experience that balances commerce, brand identity, and scalable flexibility for an evolving streetwear label?"
    },
    visualDirection: {
      headline: "Restrained Digital Environment, Heavyweight Type & Large-Scale Imagery",
      tagline: "Streetwear × archive visual language born in Lagos, Nigeria.",
      description: "The visual direction started from the character of the brand itself. Rather than introducing excessive decoration, I focused on creating a restrained digital environment where typography, imagery, spacing and product presentation could carry most of the personality. Heavyweight typography gives the interface an editorial, almost poster-like quality; large-scale photography is treated as part of the brand rather than simply supporting product information; and restrained interface elements keep navigation simple so clothing and imagery remain dominant."
    },
    ecosystem: {
      userJourney: [
        { step: "01", label: "Discover", desc: "Editorial entry point establishing brand world before dense product grids" },
        { step: "02", label: "Explore", desc: "Direct garment category browsing across Shirts, Shorts, Trousers & Caps" },
        { step: "03", label: "Select", desc: "Reusable product discovery designed for the next drop, not only the current one" },
        { step: "04", label: "Purchase", desc: "Dedicated checkout route reducing friction between discovery and purchase" },
        { step: "05", label: "Archive", desc: "Explore cultural drops, past releases, community touchpoints & Instagram" }
      ],
      systems: [
        "Heavyweight Poster Typography",
        "Large-Scale Editorial Photography",
        "Restrained Navigation & Interface Elements",
        "Garment Category Architecture (Shirts · Shorts · Trousers · Caps)",
        "Dedicated Low-Friction Checkout Funnel",
        "Cultural Archive & Drops Repository",
        "Community & Instagram Hub",
        "AI-Assisted Frontend Development Pipeline",
        "Lightweight Custom CMS & Media Infrastructure"
      ]
    },
    editorialStrategy: {
      headline: "A Brand World With Commerce Inside It",
      description: "The primary navigation is intentionally straightforward. Users can move directly into Shirts · Shorts · Trousers · Caps, while the broader experience provides access to search, checkout, community, Instagram and the archive. This creates a simple hierarchy (Discover → Explore → Select → Purchase) without requiring users to learn a complicated interface. The structure also leaves room for the catalogue to expand without redesigning the entire navigation model.",
      shift: "Instead of: Hero Image → Products → Product Grid → Checkout, the experience becomes: Brand World → Editorial Entry → Category Exploration → Direct Purchase.",
      sections: [
        {
          title: "The Homepage as First Encounter",
          desc: "The homepage acts as the first encounter with the OPN WRLD world. Instead of immediately presenting a dense product catalogue, the experience establishes the brand first and then guides users toward exploration. The large visual treatment creates an editorial entry point, while the product navigation gives users a direct route into the catalogue—feeling closer to opening a fashion publication than entering a traditional e-commerce dashboard."
        },
        {
          title: "Product Discovery: Designed for the Next Drop",
          desc: "The product architecture is deliberately uncomplicated. The main categories separate the catalogue by garment type, allowing customers to quickly move between different parts of the collection. Rather than designing individual pages around a single collection, the system establishes reusable patterns that can accommodate future drops and products. Principle: Design the system for the next drop, not only the current one."
        },
        {
          title: "Commerce & Dedicated Checkout",
          desc: "The shopping experience was designed around reducing friction between discovery and purchase. The site provides a dedicated checkout route while keeping the primary navigation focused on product discovery. This separation keeps the storefront feeling like a brand environment while still providing the functional structure expected from an e-commerce experience."
        },
        {
          title: "Beyond the Store: Content System & Custom CMS",
          desc: "A fashion brand doesn't stop changing once the website goes live. New drops happen, images change, products change, stories accumulate, and the archive grows. That led me to think about OPN WRLD not simply as a website, but as a content system—exploring how the brand could manage its own products, imagery, and copy with a lightweight custom CMS and external media infrastructure."
        }
      ]
    },
    deliverables: [
      {
        title: "UI / UX & E-commerce",
        items: ["Information architecture & hierarchy", "Category navigation (Shirts, Shorts, Trousers, Caps)", "Dedicated checkout route & flow", "Responsive multi-device layouts", "Frictionless product discovery patterns"]
      },
      {
        title: "Art Direction & Visual Design",
        items: ["Heavyweight typographic system", "Large-scale editorial photography direction", "Restrained interface styling", "Poster-like editorial compositions", "Streetwear × archive visual language"]
      },
      {
        title: "Creative Development",
        items: ["Frontend implementation", "AI-assisted code development & refinement", "Component architecture for drops", "Performance & media optimization", "Vercel deployment & production domain"]
      },
      {
        title: "Content & Systems Strategy",
        items: ["Drop & collection architecture", "Cultural archive structuring", "Client ownership & custom CMS planning", "Community & Instagram integration"]
      }
    ],
    figmaToCode: {
      headline: "Full Design-to-Build Pipeline with AI-Assisted Development",
      description: "I wasn't only responsible for the visual layer. The project moved across the full design-to-build pipeline: Visual direction → Interface design → Responsive layouts → Frontend implementation → Content architecture → Deployment. I used AI-assisted development as part of the implementation process, treating the generated code as material to design, inspect and refine rather than as a replacement for the design process. This allowed the project to move quickly from visual decisions into a functioning storefront while keeping the interface under design control.",
      pipeline: [
        { stage: "01", label: "Visual Direction", detail: "Heavyweight typography, large-scale imagery & editorial streetwear aesthetic" },
        { stage: "02", label: "Interface Design", detail: "Garment categories, responsive layouts & dedicated checkout flow" },
        { stage: "03", label: "Frontend Implementation", detail: "AI-assisted code development, component refinement & styling precision" },
        { stage: "04", label: "Content & Deployment", detail: "Archive structuring, Vercel deployment & live domain at openworlddrops.vercel.app" }
      ]
    },
    lessons: [
      {
        number: "01",
        title: "A website is part of the brand system",
        desc: "The strongest fashion websites don't simply display a brand identity. They behave like the brand. Typography, navigation, image treatment, pacing and even empty space contribute to how the brand is perceived."
      },
      {
        number: "02",
        title: "Client ownership matters",
        desc: "Building the website exposed a second problem that isn't immediately visible in the final interface: How does the client operate the website after the designer leaves? That question pushed me beyond frontend implementation and into CMS architecture, media hosting and content management."
      },
      {
        number: "03",
        title: "Design and development are becoming one workflow",
        desc: "OPN WRLD reinforced my interest in working across the boundary between design and implementation. The ability to move from visual direction to interface design and then into a working product gives me much more control over the final experience."
      },
      {
        number: "04",
        title: "Design the system for the next drop, not only the current one",
        desc: "Rather than designing individual pages around a single collection, establishing reusable patterns and scalable content architecture allows the label to evolve dynamically over time."
      }
    ],
    strategy: [
      {
        number: "01",
        title: "Brand World First, Commerce Inside It",
        desc: "Established an editorial, publication-like entry point that communicates the cultural identity of OPN WRLD before guiding customers smoothly into product browsing."
      },
      {
        number: "02",
        title: "Straightforward Garment Categorization",
        desc: "Organized products cleanly by garment type (Shirts · Shorts · Trousers · Caps) to eliminate cognitive friction and make moving between collections instant."
      },
      {
        number: "03",
        title: "Separation of Discovery & Dedicated Checkout",
        desc: "Kept the primary navigation focused on immersion and product discovery while providing a dedicated, streamlined checkout funnel to maximize conversion."
      },
      {
        number: "04",
        title: "Living Content Infrastructure",
        desc: "Architected the storefront to scale with limited drops, stories, and cultural archive additions post-launch."
      }
    ],
    currentState: {
      status: "Live on Production Domain · openworlddrops.vercel.app",
      narrative: "OPN WRLD now has a live digital storefront that gives the brand a focused home for its products and future drops. The current experience presents OPN WRLD as a Lagos-based streetwear label, with product categories spanning shirts, shorts, trousers and caps, alongside checkout, community, Instagram and an archive.",
      milestones: [
        { label: "Visual Direction & Art Direction", status: "Completed" },
        { label: "UI / UX Interface Design & Flows", status: "Completed" },
        { label: "AI-Assisted Frontend Implementation", status: "Completed" },
        { label: "Vercel Production Deployment", status: "Completed" },
        { label: "Custom CMS & Media Infrastructure", status: "In Progress" }
      ]
    },
    outcomes: {
      headline: "A Good Website Shouldn't Just Look Finished. It Should Be Built to Keep Living.",
      points: [
        "OPN WRLD now has a live digital storefront that gives the brand a focused home for its products and future drops.",
        "The current experience presents OPN WRLD as a Lagos-based streetwear label, with product categories spanning shirts, shorts, trousers and caps, alongside checkout, community, Instagram and an archive.",
        "Balanced three crucial pillars: Commerce (easy to discover and buy), Identity (editorial & distinct), and Flexibility (support for future drops & evolving archive).",
        "Created a brand world with commerce inside it, rather than an online store with branding layered on top.",
        "Demonstrated a complete design-to-build workflow uniting visual direction, interface design, AI-assisted frontend development, and CMS architecture."
      ],
      metricsNote: "Live and accessible worldwide at openworlddrops.vercel.app · Lagos, Nigeria (2026)."
    },
    credits: {
      designer: "Ayomide Ogunjobi",
      client: "OPN WRLD",
      platform: "Vercel",
      year: "2026",
      location: "Lagos, Nigeria",
      liveUrl: "https://openworlddrops.vercel.app/"
    },
    reflection: [
      "A website is part of the brand system. The strongest fashion websites don't simply display a brand identity. They behave like the brand. Typography, navigation, image treatment, pacing and even empty space contribute to how the brand is perceived.",
      "Building the website exposed a second problem that isn't immediately visible in the final interface: How does the client operate the website after the designer leaves? That question pushed me beyond frontend implementation and into CMS architecture, media hosting and content management.",
      "OPN WRLD reinforced my interest in working across the boundary between design and implementation. The ability to move from visual direction to interface design and then into a working product gives me much more control over the final experience.",
      "More importantly, the project became a practical exploration of something I now consider fundamental to client-facing digital work: A good website shouldn't just look finished. It should be built to keep living."
    ],
    media: [
      { src: "/works/opn-wrld/OP1.jpg", type: "image", caption: "OPN WRLD Digital Storefront & Editorial Brand Direction" },
      { src: "/works/opn-wrld/luffy.png", type: "image", caption: "OPN WRLD Drop Identity & Graphic Direction" },
      { src: "/works/opn-wrld/Open World presents LuffySensei.jpg", type: "image", caption: "Cultural Archive & Limited Drop Showcase" },
      { src: "/works/opn-wrld/opn-wrld-crowd-poster.jpg", type: "image", caption: "Heavyweight Typographic & Poster Aesthetics" },
      { src: "/works/opn-wrld/opn-wrld-live-the-ride-poster.png", type: "image", caption: "Visual Identity & Editorial Artwork" },
      { src: "/works/opn-wrld/opn-wrld-hypedup-hillbillies-poster.png", type: "image", caption: "Streetwear × Archive Campaign Asset" },
      { src: "/works/opn-wrld/opn-wrld-ywe-poster.jpg", type: "image", caption: "Limited Edition Graphic Study" }
    ]
  },
  {
    id: "faem",
    number: "02",
    name: "Faem",
    date: "2024",
    roles: "Product Designer / Web Designer / Developer",
    clientFeedback: "Live on www.faemous010.com · Central digital home for the FāëM Afro-Electronic universe.",
    category: "Web Design",
    tags: ["Afro-Electronic", "Editorial Web", "Artist Universe", "Google Antigravity", "Vercel", "Creative Development"],
    subtitle: "Building a digital home for FāëM — an Afro-Electronic DJ and producer duo from Lagos.",
    website: "http://www.faemous010.com/",
    status: "Live Project",
    summary: "A digital experience for FāëM, a Lagos-based Afro-Electronic DJ and producer duo. FāëM is the musical project of brothers Demi and Fapelo. Their sound sits somewhere between African music and electronic music, combining their individual tastes into what they describe as Afro-Electronic fusion. The challenge was not simply to make them a website. It was to create a digital space that could hold the different sides of FāëM: the music, the people behind it, the visual world, live performances, releases, videos, press, community and future projects. So we built Faemous as a home for the FāëM universe.",
    paragraphs: [
      "FāëM is the musical project of brothers Demi and Fapelo. Their sound sits somewhere between African music and electronic music, combining their individual tastes into what they describe as Afro-Electronic fusion.",
      "The challenge was not simply to make them a website. It was to create a digital space that could hold the different sides of FāëM: the music, the people behind it, the visual world, live performances, releases, videos, press, community and future projects. So we built Faemous as a home for the FāëM universe.",
      "Faemous is now live at www.faemous010.com, bringing together their story, current releases, discography, videos, live sets, press, community, support channels, and booking access under one cohesive environment."
    ],
    roleDetails: {
      title: "Product Designer / Web Designer / Developer",
      team: "Client: FāëM (Demi & Fapelo)",
      scope: "UX, UI, Visual Direction, Responsive Web Design, Development",
      collaboration: "Demi & Fapelo (Artists) · Ayomide Ogunjobi (Design & Engineering)",
      tools: "Figma, Google Antigravity, Vercel",
      website: "www.faemous010.com",
      narrative: "My contribution covered the project across the design-to-web pipeline—translating the FāëM identity into a digital environment, balancing music, editorial content and visual media, and building a responsive live experience using Google Antigravity and Vercel."
    },
    problem: {
      headline: "Artists often end up with their identity scattered across platforms.",
      description: "Music lives on streaming services. Videos live somewhere else. Social media becomes the primary source of information. Press features disappear into timelines. Bookings happen through another channel. Each platform serves its own purpose, but none of them necessarily communicates the complete identity of the artist. FāëM needed a central place that could connect these pieces.",
      frictionPoints: [
        "Streaming platforms isolate audio without conveying artist context, narrative, or visual world",
        "Social media feeds bury milestone press features, interviews, and identity into ephemeral timelines",
        "Performance bookings and management inquiries force promoters to hunt across disparate bio links",
        "Video visualizers and live sets lack a unified, branded stage that preserves high artistic fidelity"
      ],
      challenge: "How might we create a digital space that feels less like an information directory and more like a living extension of the FāëM identity?"
    },
    ecosystem: {
      userJourney: [
        { step: "01", label: "Discover", desc: "Introduce the duo, their sound and their story" },
        { step: "02", label: "Listen", desc: "Surface releases and make it easy to move from the website into their music" },
        { step: "03", label: "Watch", desc: "Bring together music videos, visualizers and live performances" },
        { step: "04", label: "Experience", desc: "Give projects such as WAWDH? enough space to communicate their narrative" },
        { step: "05", label: "Follow", desc: "Connect visitors to FāëM's social platforms and wider ecosystem" },
        { step: "06", label: "Support", desc: "Create space for merchandise, Bandcamp, SoundCloud and direct support" },
        { step: "07", label: "Work with them", desc: "Make bookings accessible without forcing visitors to hunt through social media" }
      ],
      systems: [
        "Afro-Electronic Fusion Sound Identity",
        "WAWDH? Conceptual Release Narrative",
        "Video Visualizer & Live Set Hub (Through Time, Messiah Complex, Wakabout)",
        "Editorial Artist Storytelling & Archive",
        "Direct Performance Booking Funnel",
        "Social & Community Ecosystem Integration",
        "Bandcamp, SoundCloud & Merchandise Gateway",
        "Adaptive Video Streaming & Responsive Architecture"
      ]
    },
    editorialStrategy: {
      headline: "Giving the Music Room to Breathe",
      description: "One of the more important decisions was not treating the music section as a simple list of streaming links. FāëM's releases form part of their story, so the website gives projects context. The WAWDH? section introduces the project conceptualised in 2024 and explains the ideas behind it before directing visitors toward music and visual material.",
      shift: "Instead of: Album → Listen, the experience becomes: Idea → Context → Music → Visual experience.",
      sections: [
        {
          title: "The Homepage as an Editorial Spread",
          desc: "The homepage acts as the front door to the FāëM universe. Instead of beginning with a generic biography, the experience immediately establishes the current moment around the artist. The release WAWDH? becomes an important entry point, followed by the duo's story, sound, releases, performances, videos, press, and ways to support. It tells visitors: This is who we are. This is what we're making. This is what we're thinking about. This is where you can experience it."
        },
        {
          title: "WAWDH? Conceptual Narrative",
          desc: "The project isn't presented simply as a release. The website gives it room to explain what it means to the brothers. The writing explores individuality, uncertainty, emotion, existence, and the relationship between the individual and the larger universe. The visitor isn't only being asked to listen—they're invited into the thought process."
        },
        {
          title: "Beyond Music: Complete Ecosystem",
          desc: "FāëM's identity extends beyond recorded tracks. The site brings together music videos (Through Time, Messiah Complex, Wakabout), visualizers, live sets, listening experiences, press features, social channels, community, merchandise, direct support, and bookings. Faemous was designed to avoid becoming a glorified streaming link."
        }
      ]
    },
    visualDirection: {
      headline: "Dark, Trippy, Cinematic",
      tagline: "Afro-Electronic fusion from Lagos.",
      description: "The visual language was built around the character of FāëM rather than a conventional music-industry template. The interface needed enough restraint to let the photography, artwork, videos, and music carry the emotional weight. Rather than filling every section with decoration, the design uses the content itself as part of the visual system. The result is intended to feel cinematic, contemporary, slightly otherworldly, and rooted in the artists' identity."
    },
    lessons: [
      {
        number: "01",
        title: "The Website is Not the Music — It is the Environment Around It",
        desc: "A creative website doesn't always need to behave like a conventional product website. For an artist, it can simultaneously be an archive, portfolio, press kit, storefront, community hub, and storytelling device."
      },
      {
        number: "02",
        title: "Idea → Context → Music → Visual Experience",
        desc: "Giving releases narrative depth elevates the listener from a passive stream clicker into an engaged participant in the duo's creative philosophy."
      },
      {
        number: "03",
        title: "Living Architecture Reflects Actual State",
        desc: "Rather than manufacturing artificial content for unavailable information, the Live section communicates upcoming shows authentically. The interface reflects the real-world evolution of the artist."
      },
      {
        number: "04",
        title: "Connecting the Design-to-Code Boundary",
        desc: "Using Google Antigravity as an AI-assisted development environment allowed seamless transition from Figma wireframes to a live performant web platform deployed on Vercel."
      }
    ],
    strategy: [
      {
        number: "01",
        title: "Design an Artist's Universe, Not a Directory",
        desc: "Structured the site around 7 core interaction modes: Discover, Listen, Watch, Experience, Follow, Support, and Work with them."
      },
      {
        number: "02",
        title: "Editorial Homepage Spread",
        desc: "Established the current moment around the artists immediately with WAWDH?, pairing cinematic video visualizers with deep narrative context."
      },
      {
        number: "03",
        title: "Visual Restraint & Content-First System",
        desc: "Let photography, typography, artwork, and motion carry the emotional weight without distracting UI clutter."
      },
      {
        number: "04",
        title: "Designing for an Evolving Artist",
        desc: "Created an extensible component architecture ready for future releases, tour dates, video drops, press features, and merchandise."
      }
    ],
    figmaToCode: {
      headline: "From Figma to the Browser via Google Antigravity",
      description: "I began the project by working through the experience in Figma, using wireframes to establish the structure before moving into the visual interface. For implementation, I used Google Antigravity as an AI-assisted development environment, accelerating the transition from designed interface to functional web experience. The final site was deployed through Vercel and moved onto the project's own domain: www.faemous010.com.",
      pipeline: [
        { stage: "01", label: "Figma IA & Wireframing", detail: "Defined universe structure, user journeys & editorial layouts" },
        { stage: "02", label: "Visual System & UI", detail: "Crafted dark, cinematic styling, motion typography & responsive states" },
        { stage: "03", label: "Google Antigravity & Dev", detail: "AI-assisted frontend implementation, video streaming & interactive components" },
        { stage: "04", label: "Vercel & Domain Deployment", detail: "Production deployment with custom domain integration at www.faemous010.com" }
      ]
    },
    deliverables: [
      {
        title: "UX / Structure",
        items: ["Information architecture", "Content hierarchy", "Page and section structure", "User journeys", "Artist-content organisation"]
      },
      {
        title: "UI / Visual Design",
        items: ["Interface design", "Typography system", "Editorial layout", "Responsive behaviour", "Content presentation", "Visual hierarchy"]
      },
      {
        title: "Web Development",
        items: ["Frontend implementation", "Responsive layouts", "Interactive elements", "External platform links", "Google Antigravity workflow", "Vercel deployment"]
      },
      {
        title: "Creative Direction",
        items: ["Translating FāëM identity to web", "Balancing music, editorial & visual media", "Bespoke artist-first digital experience"]
      }
    ],
    currentState: {
      status: "Live on Production Domain",
      narrative: "Faemous is live at www.faemous010.com. The live experience now brings the major parts of the FāëM ecosystem into one place: their story, current releases, discography, videos, live performances, press, community, support channels and bookings.",
      milestones: [
        { label: "Concept & Information Architecture", status: "Completed" },
        { label: "Figma UI / UX & Visual Direction", status: "Completed" },
        { label: "Frontend Build via Google Antigravity", status: "Completed" },
        { label: "Vercel Deployment & Domain Setup (faemous010.com)", status: "Completed" },
        { label: "Living Architecture Expansion (Upcoming Shows & Merch)", status: "In Progress" }
      ]
    },
    outcomes: {
      headline: "One Website. Many Frequencies.",
      points: [
        "Faemous became a central digital home for FāëM, uniting music, visual world, live sets, press, and bookings.",
        "Created an editorial spread narrative structure (Idea → Context → Music → Visual) that gives the art room to breathe.",
        "Eliminated platform fragmentation by giving visitors a cohesive place to begin and a reason to stay.",
        "Built a living digital architecture that evolves seamlessly alongside the duo's upcoming music and tour schedule."
      ],
      metricsNote: "Live and accessible worldwide at www.faemous010.com."
    },
    reflection: [
      "Faemous changed the way I think about websites for creative people. A creative website doesn't always need to behave like a conventional product website. For an artist, the website can simultaneously be: an archive, a portfolio, a press kit, a storefront, a community hub, a storytelling device, and an invitation.",
      "The challenge is knowing when each of those roles should take the lead. For FāëM, the answer wasn't to build more pages. It was to create a system that allowed the different pieces of their identity to exist together without losing the personality that made them worth visiting in the first place.",
      "And as FāëM continues releasing music, performing, publishing visual work and building its community, Faemous has room to grow with them. One website. Many frequencies."
    ],
    media: [
      { src: "/works/faem/faem-website.mp4", type: "video", caption: "Faemous Live Digital Experience" }
    ]
  },
  {
    id: "ountodun",
    number: "03",
    name: "Ountodun",
    date: "2023",
    roles: "Brand & Graphic Designer",
    clientFeedback: "Concept store branding and packaging launch.",
    category: "Graphic Design",
    tags: ["Brand Identity", "Visual Communication", "Art Direction", "Packaging"],
    paragraphs: [
      "Ountodun needed a distinct, high-end brand identity that blends traditional motifs with contemporary design principles for their new concept store.",
      "We developed a flexible typographic system, primary brand assets, and customized editorial layouts to communicate a sense of heritage and luxury.",
      "The identity was successfully rolled out across physical shopping bags, product tags, print assets, and digital touchpoints."
    ],
    media: [
      { src: "/works/ountodun/ountodun.png", type: "image" },
      { src: "/works/ountodun/OUTD cover.webp", type: "image" },
      { src: "/works/ountodun/TXF.webp", type: "image" },
      { src: "/works/ountodun/SMT.webp", type: "image" },
      { src: "/works/ountodun/M.webp", type: "image" },
      { src: "/works/ountodun/Content.webp", type: "image" },
      { src: "/works/ountodun/CP.webp", type: "image" },
      { src: "/works/ountodun/LI.webp", type: "image" },
      { src: "/works/ountodun/PL.webp", type: "image" },
      { src: "/works/ountodun/SL.webp", type: "image" },
      { src: "/works/ountodun/T.webp", type: "image" },
    ]
  },
  {
    id: "helpa-services",
    number: "04",
    name: "Helpa Services",
    date: "2024 → In Progress",
    roles: "Product Designer / UI/UX / Frontend Prototyper",
    clientFeedback: "Live redesign in progress — core flows, design system & prototype completed.",
    category: "UI/UX Design",
    tags: ["Service Marketplace", "Design System", "Frontend Prototype", "UX Evolution"],
    subtitle: "Redesigning a service marketplace around clarity, trust, and less user effort.",
    summary: "Helpa is a service marketplace connecting people who need help with people who can provide it. I joined the team during the early product stage, helping shape the original product experience, design system and frontend prototype. As the product evolved, I returned to the experience to rethink the information architecture, user flows and interface around the friction we had uncovered.",
    paragraphs: [
      "Helpa is a service marketplace connecting people who need help with people who can provide it. I joined the team during the early product stage, helping shape the original product experience, design system and frontend prototype. As the product evolved, I returned to the experience to rethink the information architecture, user flows and interface around the friction we had uncovered.",
      "Because I had worked on the original product, I wasn't approaching the redesign as an external audit. I had context behind many of the original decisions and could identify where the product had evolved beyond the assumptions we initially designed around.",
      "This redesign is currently in progress. The core flows and interface system have been reworked and prototyped in frontend code, while engineering integration and live validation continue."
    ],
    roleDetails: {
      title: "Product Designer / UI/UX Designer / Frontend Prototyper",
      team: "Helpa Product Team",
      scope: "UX, UI, Design System, Frontend Prototyping",
      collaboration: "Product Team + Frontend Engineering",
      narrative: "I worked on Helpa from its early product stage. My first contribution was designing and prototyping the initial experience and establishing its frontend foundation. As the product matured, I returned to redesign the experience based on what we had learned from the existing product."
    },
    problem: {
      headline: "Simple-looking doesn't always mean simple to use.",
      description: "The existing interface was visually straightforward, but completing important tasks could involve too many decisions, forms, and steps. Users frequently experienced cognitive friction and ambiguity.",
      frictionPoints: [
        "What they needed to do next was not immediately obvious",
        "What information was actually required vs optional was ambiguous",
        "Whether they had successfully completed an action lacked confirmation",
        "What would happen next after submitting a form was uncertain"
      ],
      challenge: "How might we make Helpa's complexity feel simpler without removing the functionality the marketplace needs?"
    },
    ecosystem: {
      userJourney: [
        { step: "01", label: "Need Help", desc: "Recognizing a requirement for service" },
        { step: "02", label: "Post / Discover", desc: "Formulating the task or finding a provider" },
        { step: "03", label: "Match & Evaluate", desc: "Reviewing credentials, rates & ratings" },
        { step: "04", label: "Engage & Agree", desc: "Scheduling and direct communication" },
        { step: "05", label: "Complete Job", desc: "Service delivery and verification" },
        { step: "06", label: "Payment & Trust", desc: "Helpa credit release and reciprocal reviews" }
      ],
      systems: [
        "Service Discovery & Categorization",
        "Multi-step Guided Job Creation",
        "Verified Provider Profiles & Badging",
        "Identity Verification & Trust Layers",
        "Bid & Application Management",
        "Direct Messaging & Notifications",
        "Escrow & Helpa Credit Wallet",
        "Accountability & Milestone Tracking",
        "Reputation & Feedback System"
      ]
    },
    lessons: [
      {
        number: "01",
        title: "Too much information requested at once",
        desc: "Initial forms overwhelmed users with upfront inputs before establishing value or intent."
      },
      {
        number: "02",
        title: "Flows structured around system needs, not user goals",
        desc: "Screens mirrored database structures instead of the user's natural decision-making sequence."
      },
      {
        number: "03",
        title: "Important actions lacked adequate feedback",
        desc: "Submissions and status transitions needed clear, reassuring microinteractions and state cues."
      },
      {
        number: "04",
        title: "Consistency eroded as product expanded",
        desc: "Ad-hoc screens introduced subtle visual and behavioral inconsistencies that demanded a unified system."
      },
      {
        number: "05",
        title: "Design system needed to support real-world edge states",
        desc: "Components had to account for empty states, pending escrows, loading delays, and partial verifications."
      }
    ],
    strategy: [
      {
        number: "01",
        title: "Rework the Information Architecture",
        desc: "Moved critical data points closer to the decisions they support rather than burying them across auxiliary tabs."
      },
      {
        number: "02",
        title: "Simplify Flows to Single Decisions",
        desc: "Structured each step around one primary question with an obvious, unblocked next action."
      },
      {
        number: "03",
        title: "Build the System, Not Isolated Screens",
        desc: "Created a unified component library covering buttons, cards, status chips, modals, empty states, and responsive layouts."
      },
      {
        number: "04",
        title: "Design for Feedback & Transparency",
        desc: "Treated feedback as a first-class UX element (Action → Processing → Success/Error → Obvious Next Step)."
      }
    ],
    figmaToCode: {
      headline: "Design-Driven Code Prototyping",
      description: "Rather than leaving implementation to guesswork or external interpretation, I translated the design system into a working frontend prototype myself, streamlining the handoff to engineering.",
      pipeline: [
        { stage: "01", label: "Figma System", detail: "Tokens, components, auto-layout & state variants" },
        { stage: "02", label: "Frontend Prototype", detail: "Interactive React codebase with full responsive fidelity" },
        { stage: "03", label: "Engineering Handoff", detail: "Clean component architecture and documented prop contracts" },
        { stage: "04", label: "API & Backend Integration", detail: "Engineers used AI-assisted tooling to hook up live APIs" }
      ]
    },
    beforeAfter: [
      {
        id: "task-creation",
        title: "Task Creation & Guided Booking",
        beforeImg: "/works/helpa/old helpa/image 21.png",
        afterImg: "/works/helpa/new Helpa/create task.png",
        reviewImg: "/works/helpa/new Helpa/Review Task.png",
        changes: [
          "Replaced dense, intimidating all-in-one forms with progressive guided steps",
          "Added an explicit 'Review Task' preview screen to eliminate submission anxiety",
          "Integrated real-time budget and estimation feedback directly into the composer"
        ]
      },
      {
        id: "job-discovery",
        title: "Job Discovery & Active Dashboard",
        beforeImg: "/works/helpa/old helpa/image 63.png",
        afterImg: "/works/helpa/new Helpa/Available Jobs.png",
        reviewImg: "/works/helpa/new Helpa/Your Task.png",
        changes: [
          "Introduced categorized job cards with prominent budget, distance, and time tags",
          "Created a dedicated 'Your Tasks' status dashboard with instant progress indicators",
          "Reduced cognitive clutter by elevating actionable tasks above dormant history"
        ]
      },
      {
        id: "verification-trust",
        title: "Account Setup & Trust Verification",
        beforeImg: "/works/helpa/old helpa/image 10.png",
        afterImg: "/works/helpa/new Helpa/Enter Verification Code.png",
        reviewImg: "/works/helpa/new Helpa/profile page.png",
        changes: [
          "Streamlined OTP code entry with auto-focus and clear error recovery paths",
          "Redesigned provider profiles around credibility badges, reviews, and completed jobs",
          "Integrated Helpa Credit balance and transaction transparency"
        ]
      }
    ],
    currentState: {
      status: "In Progress (Mid-Redesign Phase)",
      narrative: "This redesign is currently in progress. The core flows and interface system have been reworked and prototyped in frontend code, while backend integration and user validation continue.",
      milestones: [
        { label: "Core UX Audit & Architecture", status: "Completed" },
        { label: "Design System & Component Library", status: "Completed" },
        { label: "Interactive Frontend Prototype", status: "Completed" },
        { label: "API & Backend Integration", status: "In Progress" },
        { label: "User Usability & Telemetry Validation", status: "Upcoming" }
      ]
    },
    outcomes: {
      headline: "Structural Wins & Evolution",
      points: [
        "Reduced unnecessary interaction and form friction across key booking flows",
        "Simplified the end-to-end information architecture for both clients and helpas",
        "Introduced consistent visual feedback and unambiguous status states across the app",
        "Established a scalable design system closely aligned with frontend code",
        "Bridged the gap between design and engineering with a functional code prototype"
      ],
      metricsNote: "Quantitative conversion and drop-off telemetry will be recorded upon production rollout."
    },
    reflection: [
      "Working on Helpa twice changed how I think about product design. The first version taught me how to establish a product system from the ground up. The redesign taught me something different: a product isn't finished when the screens are finished. Once people start using it, the assumptions behind those screens become visible.",
      "Returning to my own work also forced me to question decisions I had previously considered finished. Instead of defending the original design, I had to understand where it was creating friction and change it."
    ],
    media: [
      { src: "/works/helpa/new Helpa/Get Started.png", type: "image", caption: "Helpa V2 Welcome & Onboarding" },
      { src: "/works/helpa/new Helpa/Available Jobs.png", type: "image", caption: "Available Jobs Marketplace" },
      { src: "/works/helpa/new Helpa/create task.png", type: "image", caption: "Guided Task Creation Flow" },
      { src: "/works/helpa/new Helpa/Review Task.png", type: "image", caption: "Task Review & Confirmation" },
      { src: "/works/helpa/new Helpa/Your Task.png", type: "image", caption: "Active Tasks & Progress Tracking" },
      { src: "/works/helpa/new Helpa/Helpa Credit.png", type: "image", caption: "Helpa Credit Wallet & Escrow" },
      { src: "/works/helpa/new Helpa/profile page.png", type: "image", caption: "Provider Profile & Verification" },
      { src: "/works/helpa/new Helpa/Rate this job.png", type: "image", caption: "Job Rating & Feedback Modal" },
      { src: "/works/helpa/new Helpa/Notifications.png", type: "image", caption: "Notification Center" },
      { src: "/works/helpa/new Helpa/Enter Verification Code.png", type: "image", caption: "OTP Verification Screen" },
      { src: "/works/helpa/new Helpa/Welcome Stephnora,.png", type: "image", caption: "Personalized User Dashboard" },
      { src: "/works/helpa/new Helpa/splash.png", type: "image", caption: "Mobile Splash Screen" },
      { src: "/works/helpa/old helpa/image 21.png", type: "image", caption: "V1 Legacy Task Creation Screen" },
      { src: "/works/helpa/old helpa/image 63.png", type: "image", caption: "V1 Legacy Dashboard View" }
    ]
  },
  {
    id: "champion-custard",
    number: "05",
    name: "Champion Custard",
    date: "September 2023 – January 2024",
    roles: "Graphic Design · Social Media · Art Direction",
    clientFeedback: "Weekly social media graphics, creative ideation & visual storytelling for Best Selling Solutions.",
    category: "Graphic Design",
    tags: ["Graphic Design", "Social Media", "Art Direction", "Visual Storytelling", "Brand Identity", "Adobe Photoshop", "Adobe Illustrator"],
    subtitle: "Designing stories around a familiar product",
    status: "Commercial Project · Agency",
    summary: "While working as a Junior Designer at Best Selling Solutions, I was responsible for creating weekly social media graphics for Champion Custard, a Nigerian powdered custard brand. Most weeks, I wasn't working from a detailed creative brief. I was given the content or objective and had to figure out how to turn it into a visual idea that felt appropriate for the brand and understandable at a glance. That made Champion Custard an important period in my development as a designer. It pushed me to stop thinking of design as simply making something visually attractive and start thinking about how a composition can communicate an idea.",
    paragraphs: [
      "While working as a Junior Designer at Best Selling Solutions, I was responsible for creating weekly social media graphics for Champion Custard, a Nigerian powdered custard brand.",
      "Most weeks, I wasn't working from a detailed creative brief. I was given the content or objective and had to figure out how to turn it into a visual idea that felt appropriate for the brand and understandable at a glance.",
      "That made Champion Custard an important period in my development as a designer. It pushed me to stop thinking of design as simply making something visually attractive and start thinking about how a composition can communicate an idea."
    ],
    roleDetails: {
      title: "Junior Designer · Graphic Designer · Art Direction",
      team: "Best Selling Solutions (Agency) · Client: Champion Custard",
      scope: "Social Media Design, Visual Storytelling, Creative Ideation, Compositing, Art Direction",
      collaboration: "Ayomide Ogunjobi (Design & Art Direction) · Agency: Best Selling Solutions",
      tools: "Adobe Photoshop, Adobe Illustrator",
      narrative: "Champion Custard was one of the projects that helped move my design practice from execution toward visual problem-solving. I learned that a designer doesn't always need a photograph of a person, a complex illustration or an elaborate campaign to tell a story. Sometimes the story is already inside the product. My job was to find it, simplify it and make it visible."
    },
    problem: {
      headline: "How can a composition communicate an idea within the fast-paced environment of social media?",
      description: "The visual direction was relatively open, but there were clear boundaries. Most weeks, without a detailed creative brief, I had to continually find new ways to make a familiar product interesting while operating within clear commercial and cultural boundaries.",
      frictionPoints: [
        "Stay strictly within Champion Custard's signature brand colours",
        "Use friendly, approachable typography with clear hierarchy",
        "Use Black characters whenever people were represented",
        "Avoid imagery that could be interpreted as violent or aggressive",
        "Maintain a consistently positive, family-friendly tone",
        "Communicate clearly and capture attention within fast-paced social feeds"
      ],
      challenge: "How might we tell engaging product stories and communicate instantly without relying on human characters, complex illustrations, or heavy narrative copy?"
    },
    visualDirection: {
      headline: "Vibrant Brand Palette, Approachable Typography & Product-Led Concepts",
      tagline: "Social media visual storytelling for a mass-market Nigerian consumer brand.",
      description: "The visual language relied on bold, instantly recognizable brand colors paired with approachable typography and clean composition. Rather than relying on decorative clutter, the visual focus remained on the product itself—using environmental context, contrast, and playful scale to create inviting breakfast routines and culturally resonant moments."
    },
    editorialStrategy: {
      headline: "Designing Without Relying on Characters",
      description: "One of the most valuable things I learned was how to tell stories without depending on human characters. Instead of automatically putting a person into every composition, I began looking at the product itself, its environment, scale, time, sequence and surrounding objects as storytelling tools.",
      shift: "From 'what should this post look like?' toward 'what visual idea can communicate this message?' — letting ordinary objects do the storytelling.",
      sections: [
        {
          title: "The Five-Minute Story (Sequence & Time)",
          desc: "A carousel built around a bowl of custard: the first slide showed a full bowl at 7:00 AM; the next showed the same bowl completely empty at 7:05 AM. The five-minute difference became the entire story—no character explaining what happened, no complicated illustration, and no long narrative."
        },
        {
          title: "Objects as Storytelling Instruments",
          desc: "Using product tins, bowls, spoons, ingredients, time stamps, contrast, and spatial relationships to create relatable morning routines and emotional resonance."
        },
        {
          title: "Minimalism in Fast-Paced Social Feeds",
          desc: "Learning when to remove elements rather than continually adding them. A simple, restrained composition often communicated far more effectively than a crowded one."
        }
      ]
    },
    deliverables: [
      {
        title: "Social Media Campaigns & Weekly Graphics",
        items: [
          "Weekly social feed visual assets (Monday Motivation, Midweek Engagement, TGIF)",
          "Seasonal & festive holiday campaign artwork (Champion Christmas)",
          "Special occasion creatives (International Men's Day, Brand Milestones)",
          "Multi-slide carousel narratives and sequence-driven storytelling"
        ]
      },
      {
        title: "Art Direction & Digital Production",
        items: [
          "Compositing, image manipulation, retouching, and artwork generation in Adobe Photoshop",
          "Vector graphics, badge styling, and typographic construction in Adobe Illustrator",
          "Visual hierarchy, balance, and focal point management for mobile viewports",
          "Color grading and asset optimization adhering to brand guidelines"
        ]
      },
      {
        title: "Commercial & Cultural Brand Governance",
        items: [
          "Adherence to mass-market Nigerian advertising standards and cultural appropriateness",
          "Family-friendly tone preservation across all brand touchpoints",
          "Authentic Black character representation whenever people were featured",
          "Speed-of-comprehension optimization for quick social media scanning"
        ]
      }
    ],
    lessons: [
      {
        number: "01",
        title: "Typography",
        desc: "Choosing typefaces that supported the personality of the brand while maintaining readability and hierarchy."
      },
      {
        number: "02",
        title: "Composition",
        desc: "Learning how to control attention, balance elements and create a clear visual path through a social media graphic."
      },
      {
        number: "03",
        title: "Concept Development",
        desc: "Moving from 'what should this post look like?' toward 'what visual idea can communicate this message?'"
      },
      {
        number: "04",
        title: "Minimalism",
        desc: "Learning when to remove elements rather than continually adding them. A simple composition could often communicate more effectively than a crowded one."
      },
      {
        number: "05",
        title: "Visual Storytelling",
        desc: "Using products, objects, space, sequence and contrast to communicate ideas without relying on people or excessive copy."
      },
      {
        number: "06",
        title: "Commercial Design",
        desc: "Working within an existing brand personality and creating work for a specific audience rather than designing entirely according to my personal taste."
      }
    ],
    outcomes: {
      headline: "Working Within Real-World Constraints & Developing Practice",
      points: [
        "Consistently produced weekly social media graphics under tight agency turnaround schedules",
        "Pioneered character-free conceptual visual storytelling using product sequences and temporal contrast",
        "Deepened mastery of typography, composition, and visual hierarchy for digital feeds",
        "Gained practical experience navigating Nigerian advertising standards and commercial brand constraints",
        "Successfully transitioned personal design practice from purely aesthetic execution to strategic visual problem-solving"
      ],
      metricsNote: "Because Champion Custard was an outsourced social media project, I wasn't responsible for managing the account itself. As a result, I don't have access to reliable performance data such as engagement, reach or conversion figures. Instead, the value of this project is best understood through the design practice it developed."
    },
    reflection: [
      "Champion Custard was one of the projects that helped move my design practice from execution toward visual problem-solving.",
      "I learned that a designer doesn't always need a photograph of a person, a complex illustration or an elaborate campaign to tell a story.",
      "Sometimes the story is already inside the product. My job was to find it, simplify it and make it visible."
    ],
    credits: {
      designer: "Ayomide Ogunjobi (Junior Designer)",
      client: "Champion Custard",
      agency: "Best Selling Solutions",
      platform: "Social Media (Instagram / Facebook)",
      year: "September 2023 – January 2024"
    },
    media: [
      { src: "/works/champion-custard/Artboard 2.jpg", type: "image", caption: "Product-Led Visual Storytelling" },
      { src: "/works/champion-custard/Artboard 5.jpg", type: "image", caption: "Brand Campaign Artboard" },
      { src: "/works/champion-custard/Champion Christmas.jpg", type: "image", caption: "Champion Christmas Holiday Creative" },
      { src: "/works/champion-custard/IMD.jpg", type: "image", caption: "International Men's Day Celebration Post" },
      { src: "/works/champion-custard/champion 1.5.jpg", type: "image", caption: "Flavor Variant & Packaging Showcase" },
      { src: "/works/champion-custard/champion D4.jpg", type: "image", caption: "Visual Composition & Brand Color Harmony" },
      { src: "/works/champion-custard/wednesday 0.2.jpg", type: "image", caption: "Midweek Engagement Graphic" },
      { src: "/works/champion-custard/wednesday 02.1.jpg", type: "image", caption: "Minimalist Social Media Artboard" },
      { src: "/works/champion-custard/wednesday.jpg", type: "image", caption: "Midweek Brand Storytelling" },
      { src: "/works/champion-custard/monday.1.jpg", type: "image", caption: "Monday Routine & Morning Energy" },
      { src: "/works/champion-custard/monday.2.0.jpg", type: "image", caption: "Breakfast Routine Carousel Sequence" },
      { src: "/works/champion-custard/monday.3.jpg", type: "image", caption: "Product-Led Storytelling Concept" },
      { src: "/works/champion-custard/Monday 4.2.jpg", type: "image", caption: "Minimalist Product Composition" },
      { src: "/works/champion-custard/Monday 5.jpg", type: "image", caption: "Breakfast Routine Social Artboard" },
      { src: "/works/champion-custard/Monday 6.jpg", type: "image", caption: "Brand Color & Visual Consistency" },
      { src: "/works/champion-custard/TGIF  6.3.jpg", type: "image", caption: "Weekend Celebration Creative" },
      { src: "/works/champion-custard/TGIF  7.0.jpg", type: "image", caption: "TGIF Social Feed Campaign Graphic" }
    ]
  },
  {
    id: "hachi",
    number: "06",
    name: "Hachi",
    date: "2024 → Launching Soon",
    roles: "Product Designer · UX/UI · Visual Designer · Developer · Creative Lead",
    clientFeedback: "Launching-soon PWA · Working MVP built from concept to code.",
    category: "UI/UX Design",
    tags: ["Shared Grocery System", "PWA", "Product Design", "MVP Development", "Creative Direction"],
    subtitle: "A shared grocery system for people who live together.",
    summary: "Hachi is a personal product experiment built around a simple problem: When people live together, keeping track of what needs to be bought, what has already been bought, and who is responsible for it can become surprisingly messy. The information usually lives in conversations, calls, notes, memory and scattered messages. I wanted to turn that everyday friction into a simple shared experience. So I built Hachi.",
    paragraphs: [
      "Hachi is a personal product experiment built around a simple problem: When people live together, keeping track of what needs to be bought, what has already been bought, and who is responsible for it can become surprisingly messy.",
      "Existing ways of coordinating household groceries rely on tools that weren't designed for the problem—messaging apps get buried, notes don't sync state, and memory fails. Hachi focuses on one thing: making the shared household state obvious without turning grocery management into another chore.",
      "From the initial idea and research to user flows, interface design, prototyping and a working PWA MVP, I took the product from concept to something people can actually interact with on web and mobile."
    ],
    roleDetails: {
      title: "Product Designer · UI/UX Designer · Visual Designer · Developer · Creative Lead",
      team: "Personal Product / PWA",
      scope: "Product Ideation, UX/UI Design, Visual System, Frontend Development",
      collaboration: "Lanre (Visual Direction) · Ayomide (Product, UX, UI, Dev & Creative Direction)",
      narrative: "Hachi is one of the clearest examples of my multidisciplinary practice because I worked across almost every stage of the project—moving between the conceptual, visual, and technical sides from initial research to a fully working in-browser MVP."
    },
    problem: {
      headline: "When people live together, coordination around groceries becomes surprisingly messy.",
      description: "Household grocery shopping sounds simple until several people are involved. Someone notices an item is finished; someone else says they'll buy it; another goes shopping and forgets; messages get buried, and items get purchased twice. The problem isn't the shopping itself—it is the coordination around the shopping.",
      frictionPoints: [
        "Messaging apps bury crucial grocery lists inside ongoing casual conversations",
        "Personal notes apps don't naturally create or synchronize a shared household state",
        "Unclear responsibility leads to duplicate purchases or forgotten essentials",
        "Changing plans in-store aren't communicated to others in real time"
      ],
      challenge: "How might a household maintain one shared understanding of what needs to be bought without turning grocery management into another chore?"
    },
    ecosystem: {
      userJourney: [
        { step: "01", label: "Notice", desc: "Recognizing a household item is running low or finished" },
        { step: "02", label: "Quick-Add", desc: "Adding the item with minimal decision friction" },
        { step: "03", label: "Shared State", desc: "Household list synchronizes instantly for all members" },
        { step: "04", label: "Shop & Claim", desc: "Claiming, updating, or checking off items in store" },
        { step: "05", label: "Complete", desc: "Instant sync ensures no duplicate purchases occur" }
      ],
      systems: [
        "Shared Household State Sync",
        "Frictionless Item Quick-Add",
        "Multi-Member List Coordination",
        "Item Claiming & Assignment",
        "Real-Time Purchase Checkoff",
        "Offline-Ready PWA Architecture",
        "Visual Hierarchy & Status Indicators",
        "Clear State Feedback & Alerts"
      ]
    },
    lessons: [
      {
        number: "01",
        title: "Small problems contain real product opportunities",
        desc: "Grocery shopping isn't a glamorous problem, but everyday friction tolerated by millions makes for meaningful product exploration."
      },
      {
        number: "02",
        title: "Designing the system matters more than designing the screen",
        desc: "The interface is only the visible layer. The real work was figuring out how shared information exists, changes, and is understood by different people."
      },
      {
        number: "03",
        title: "Building changes how I design",
        desc: "Translating screens into a working MVP made technical constraints part of my design thinking. In a real product, states, spacing, and responsive interactions have consequences."
      },
      {
        number: "04",
        title: "Multidisciplinary doesn't mean doing everything at once",
        desc: "My role was to establish the direction, understand different disciplines, and bring visual collaboration (with Lanre) and frontend code into one coherent experience."
      }
    ],
    strategy: [
      {
        number: "01",
        title: "Make the Current State Obvious",
        desc: "Shifted from personal lists ('I added this') to shared household context ('This is something our household currently needs')."
      },
      {
        number: "02",
        title: "Streamline the Central Loop",
        desc: "Focused on making the core loop (Adding → Tracking → Updating → Completing) frictionless before considering auxiliary features."
      },
      {
        number: "03",
        title: "Balance Clarity with Visual Personality",
        desc: "Crafted a distinctive visual identity, typography, and illustration system without letting visual expression compete with immediate usability."
      },
      {
        number: "04",
        title: "Design and Development as One Continuous Loop",
        desc: "Used in-browser implementation as a live feedback loop (Think → Structure → Design → Build → Test → Adjust) to expose and solve UX problems early."
      }
    ],
    figmaToCode: {
      headline: "From Figma to a Working PWA MVP",
      description: "Building the frontend myself changed how I evaluated my own designs. In Figma, an interaction can look finished; in a working product, spacing, responsive behaviour, and interaction states become real.",
      pipeline: [
        { stage: "01", label: "Idea & Logic", detail: "Problem definition, wireframing & household state architecture" },
        { stage: "02", label: "UI & Visual System", detail: "Figma design system, art direction & responsive layouts" },
        { stage: "03", label: "PWA Frontend Build", detail: "Interactive web/mobile MVP with responsive touch states" },
        { stage: "04", label: "In-Browser Validation", detail: "Iterative testing, interaction refinements & launch prep" }
      ]
    },
    currentState: {
      status: "Working MVP · Launching Soon PWA",
      narrative: "Hachi is currently available as a working web/mobile experience being prepared for launch. The MVP represents the first practical version of the idea rather than the final version, moving the original idea through the entire chain from concept to production code.",
      milestones: [
        { label: "Idea, Research & Problem Definition", status: "Completed" },
        { label: "User Flows, IA & Wireframing", status: "Completed" },
        { label: "Visual Identity, Art Direction & UI System", status: "Completed" },
        { label: "Frontend PWA MVP Development", status: "Completed" },
        { label: "Public Beta Testing & Launch", status: "In Progress" }
      ]
    },
    outcomes: {
      headline: "Hachi in One Sentence",
      points: [
        "Hachi is a shared grocery experience designed to make the everyday coordination of household shopping simpler, clearer and more collaborative.",
        "Successfully took the product through the complete chain: Idea → Research → UX → UI → Prototype → Development → Working MVP.",
        "Eliminated buried group-chat notes in favor of a single shared household source of truth.",
        "Engineered an offline-capable PWA optimized for both quick in-store checkoffs and fast home quick-adds."
      ],
      metricsNote: "Live user adoption and shared list retention telemetry will be tracked upon public launch."
    },
    reflection: [
      "Hachi represents something important to me: an idea I didn't leave inside a notebook or Figma file. I took it through the messy middle. I researched it. Designed it. Built it. And turned it into something that exists.",
      "The next phase is about learning from real use, identifying where the experience creates genuine value, and deciding which parts of the concept deserve to become more developed."
    ],
    media: [
      { src: "/works/hachi/hachi-home-screen.png", type: "image", caption: "Hachi Shared Household Home Screen" },
      { src: "/works/hachi/hachi-sign-in-screen.png", type: "image", caption: "Sign In & Authentication Flow" },
      { src: "/works/hachi/hachi-login-screen.png", type: "image", caption: "User Login & Onboarding" },
      { src: "/works/hachi/hachi-splash-screen.png", type: "image", caption: "Mobile Splash Screen & Brand Identity" },
      { src: "/works/hachi/hachi-splash-screen-2.png", type: "image", caption: "Visual Identity & Character Illustration" }
    ]
  },
  {
    id: "coldstorm",
    number: "07",
    name: "Coldstorm",
    date: "2024",
    roles: "Product & Web Designer",
    clientFeedback: "Production platform launch for business portfolio.",
    category: "Web Design",
    tags: ["Web Design", "Responsive Layout", "Creative Development"],
    paragraphs: [
      "Coldstorm needed a high-performance web experience that showcases their creative technology capabilities and project work to prospective clients.",
      "We built a dynamic, responsive site that integrates smooth media playback, interactive project grids, and sleek transitions.",
      "The result is a professional, high-impact marketing channel that aligns with Coldstorm's innovative positioning."
    ],
    media: [
      { src: "/works/coldstorm/coldstorm-website.mp4", type: "video" }
    ]
  },
  {
    id: "awaraku",
    number: "08",
    name: "Awaraku",
    date: "2023",
    roles: "Digital Artist",
    clientFeedback: "Ongoing digital art exhibition piece and visual studies.",
    category: "Graphic Design",
    tags: ["Digital Art", "Abstract Geometry", "Visual Study", "Artwork in Progress"],
    paragraphs: [
      "Awaraku is a personal digital art exploration project that studies bold textures, minimalist framing, and abstract digital forms.",
      "Currently working on a series of visual prints and digital experiments to explore the balance of shape, space, and vibrant color tones.",
      "This is an ongoing digital art piece and visual experiment, designed to test the limits of modern software rendering for gallery exhibitions."
    ],
    media: [
      { src: "/works/awaraku/Awaraku.png", type: "image" }
    ]
  }
];

export const experienceTimeline = [
  {
    year: "2026 → Present",
    role: "Founder & Product Designer",
    company: "Studio AYO",
    description: "Leading product design, UI/UX strategy, visual identity systems, and frontend prototyping for digital products, startups, and clients."
  },
  {
    year: "2021 → Present",
    role: "Independent Product & UI/UX Designer",
    company: "Freelance",
    description: "Designing end-to-end digital products, user research, wireframing, design systems, and responsive web experiences across product, e-commerce, and digital platforms."
  },
  {
    year: "2023",
    role: "Graphic & Brand Designer",
    company: "Best Selling Solutions",
    description: "Crafted brand identity guidelines, visual marketing collateral, digital design assets, and user touchpoints for business campaigns."
  },
  {
    year: "2021 – 2022",
    role: "Administrative Intern",
    company: "NYSC",
    description: "Managed information systems, documentation workflow, and inter-departmental communication processes."
  }
];

export const skillsMatrix = [
  { category: "Product & UX Design", skills: ["User Research", "Information Architecture", "User Flows", "Wireframing", "Interactive Prototyping", "Usability Testing"] },
  { category: "UI & Visual Systems", skills: ["Design Systems", "UI Design", "Editorial Layouts", "Typography", "Micro-Interactions", "Brand Identity"] },
  { category: "Technology & Build", skills: ["Frontend Prototyping", "React / Vite", "HTML5 & CSS3 / JavaScript", "Design System Engineering", "Responsive Grids"] }
];
