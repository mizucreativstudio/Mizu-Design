# MIZU Creative Studio — HIGH-END Website

## Zwei eigenständige Styles
- `index.html` = **Serious / Premium Creative Studio**
- `esports.html` = **Esports / Gaming Division**

Oben auf beiden Seiten kannst du zwischen Studio und Esports wechseln.

## Einfach bearbeiten

### 1. Texte, E-Mail, Instagram
Öffne:
`config.js`

Dort sind alle wichtigen Inhalte zentral kommentiert:
- Studio-Name
- E-Mail
- Instagram
- Hero-Texte
- Services
- Portfolio-Projekte

Du musst für normale Textänderungen **nicht** in HTML oder CSS suchen.

### 2. Eigene Bilder
Für Portfolio-Arbeiten:

`assets/portfolio/`

Für Esports-Arbeiten:

`assets/esports/`

Lege dort deine JPG/PNG/WebP-Dateien ab und ändere anschließend in `config.js` beim jeweiligen Projekt z. B.:

`image: "assets/portfolio/mein-projekt.jpg"`

Die mitgelieferten MIZU-Dateien liegen direkt unter `assets/`.

### 3. Design ändern
- `styles.css` = Farben, Typografie, Abstände, Animationen, Responsive Design
- ganz oben findest du die wichtigsten CSS-Variablen
- Esports nutzt automatisch eine orange/warme Accent-Farbe

## GitHub Pages
1. ZIP entpacken.
2. Inhalt in dein GitHub-Repository hochladen.
3. GitHub → Settings → Pages.
4. `Deploy from a branch`.
5. `main` + `/root`.
6. Speichern.

## Neue Portfolio-Karte hinzufügen

In `config.js` innerhalb von `portfolio`:

{
  title: "Mein neues Projekt",
  category: "Brand Design",
  image: "assets/portfolio/mein-projekt.jpg"
}

Für Esports entsprechend `esportsPortfolio`.

## High-End Effekte
Enthalten sind u. a.:
- animiertes Ambient-Particle-Canvas
- Custom Cursor auf Desktop
- Magnetic Buttons
- 3D-Tilt bei Portfolio-Karten
- Scroll-Reveal Animationen
- animierte Orbit-Ringe
- schwebendes Hero-Logo
- Marquee/Ticker
- Glass-/Blur Header beim Scrollen
- responsive Mobile-Version
- zwei getrennte Design-Modi
