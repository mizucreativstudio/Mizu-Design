/*
========================================================
 MIZU CREATIVE STUDIO — EINFACH ÄNDERN
========================================================
Du kannst hier Texte, E-Mail, Instagram und Seitentitel ändern.
Speichere die Datei danach und lade sie wieder zu GitHub hoch.

Bilder:
- Portfolio-Bilder kommen in: assets/portfolio/
- Esports-Bilder kommen in: assets/esports/
- Ersetze die Beispiel-Dateien/Platzhalter durch deine eigenen Bilder.
========================================================
*/
const MIZU_CONFIG = {
  studioName: "MIZU.",
  studioTagline: "Creative Studio",

  email: "Mizu.creativstudio@gmail.com",
  instagramUrl: "https://www.instagram.com/made.bymizu/",
  instagramHandle: "@made.bymizu",

  serious: {
    label: "Creative Studio",
    title: "Ideas into",
    accent: "Identity.",
    intro: "Digital Artist & Designer für starke Marken, visuelle Identitäten, Social Media und Print.",
  },

  esports: {
    label: "Esports Division",
    title: "Built to",
    accent: "Compete.",
    intro: "High-impact Esports Design für Teams, Creator, Organisationen und Gaming Brands.",
  },

  services: [
    ["01", "Logo & Identity", "Logos, Symbole, Wortmarken und visuelle Systeme."],
    ["02", "Brand Design", "Farbwelt, Typografie, Layout und Brand Assets."],
    ["03", "Social Media", "Posts, Storys, Banners und Kampagnen-Visuals."],
    ["04", "Esports Design", "Team Identity, Jerseys, Match Graphics und Social Assets."],
    ["05", "Print & More", "Poster, Flyer, Cards, Merch und druckfertige Medien."]
  ],

  // Hier kannst du Portfolio-Projekte ergänzen/ändern.
  portfolio: [
    {
      title: "Signature Identity",
      category: "Logo Design",
      image: "assets/mizu-logo-lion.png"
    },
    {
      title: "MIZU Monogram",
      category: "Brand Mark",
      image: "assets/mizu-logo-monogram.png"
    },
    {
      title: "Pattern Language",
      category: "Visual System",
      image: "assets/mizu-pattern.webp"
    }
  ],

  esportsPortfolio: [
    {
      title: "Team Identity",
      category: "Esports Branding",
      image: "assets/mizu-logo-lion.png"
    },
    {
      title: "Competition Mark",
      category: "Logo System",
      image: "assets/mizu-logo-monogram.png"
    },
    {
      title: "Arena Visuals",
      category: "Social / Campaign",
      image: "assets/mizu-pattern.webp"
    }
  ]
};

window.MIZU_CONFIG = MIZU_CONFIG;
