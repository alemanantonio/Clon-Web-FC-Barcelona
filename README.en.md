# FC Barcelona Website Clone

[Español](README.md) | [English](README.en.md)

![Website preview](assets/preview.png)

## Description

This project is a visual and responsive clone of the FC Barcelona website. It is an older project developed during 2024-2025 with HTML, CSS, and JavaScript as practice for web layout, content organization, and adaptive interface development.

The site recreates a browsing experience inspired by the club's official website and includes informational pages about the first team, news, club history, stadium, trophies, tickets, membership, and other sports sections.

## Project status

The project is preserved as a development reference and was reorganized to improve its internal structure and maintainability. The changes described in this document are part of the current working state and may not yet be included in a commit.

## Features

- Home page with a hero section and site navigation.
- Fixed header with a visual transition while scrolling.
- Navigation menu with dropdown submenus.
- Responsive mobile navigation menu.
- Current players section.
- Club legends section.
- Spotify Camp Nou information.
- Honours and trophies section.
- Individual player pages.
- News and upcoming matches pages.
- Results and standings pages.
- Sections for the women's team, basketball, and Barça Atlètic.
- History, stadium, tickets, and membership pages.
- Footer with internal and external links.
- Responsive design for different screen sizes.

## Technologies

- HTML5 for structure and content.
- CSS3 for styling, responsive design, animations, and variables.
- JavaScript for menu interaction, header behavior, and footer behavior.

## Project structure

```text
.
├── index.html                # Main page
├── README.md                 # Spanish project documentation
├── README.en.md              # English project documentation
├── assets/                   # Images, logos, and visual resources
│   ├── barca-atletic/        # Barça Atlètic resources
│   ├── basketball/           # Basketball resources
│   ├── history/              # Historical resources
│   ├── news/                 # News resources
│   ├── player-pages/         # Individual player page images
│   ├── players/              # Squad images
│   ├── stadium/              # Stadium resources
│   ├── standings/            # Competition and standings logos
│   ├── tickets/              # Ticket resources
│   ├── upcoming-matches/     # Upcoming match resources
│   ├── women/                # Women's team resources
│   └── preview.png           # Website preview
├── pages/                    # Secondary pages
│   ├── players/              # Individual player pages
│   ├── basketball.html
│   ├── barca-atletic.html
│   ├── history.html
│   ├── latest-news.html
│   ├── membership.html
│   ├── players.html
│   ├── results.html
│   ├── stadium.html
│   ├── standings.html
│   ├── tickets.html
│   ├── trophies.html
│   ├── upcoming-matches.html
│   └── women.html
├── scripts/
│   └── site.js               # General site interactions
└── styles/
    ├── base.css              # Base styles and shared components
    ├── home.css              # Home page styles
    ├── profile.css           # Profile styles
    └── pages/                # Secondary page stylesheets
```

## Changes made

### Folder reorganization

- Renamed `Img/` to `assets/`.
- Renamed `Paginas/` to `pages/`.
- Renamed `Css/` to `styles/`.
- Renamed `Js/` to `scripts/`.
- Organized assets internally by functional area.
- Separated page-specific styles into `styles/pages/`.
- Moved `icon.png` to `assets/site-icon.png`.
- Moved the documentation to the repository root.

### Name normalization

- Translated folder names into English.
- Translated and normalized HTML page names.
- Adopted lowercase, hyphen-separated names, for example:
  - `Baloncesto.html` became `basketball.html`.
  - `BarcaB.html` became `barca-atletic.html`.
  - `Clasificacion.html` became `standings.html`.
  - `ProximosPartidos.html` became `upcoming-matches.html`.
  - `UltimasNoticias.html` became `latest-news.html`.
  - `Socios.html` became `membership.html`.
  - `Titulos.html` became `trophies.html`.
- Normalized player page names, including `ter-stegen.html` and `szczesny.html`.
- Renamed stylesheets to match their corresponding pages.
- Renamed `app.js` to `site.js`.

### Code updates

- Updated internal links across all HTML pages.
- Updated image paths in HTML and CSS.
- Updated stylesheet paths.
- Updated the main script reference.
- Updated the favicon reference.
- Corrected paths to individual player pages.
- Removed references to the old folders and names.
- Preserved the existing visual content and functionality while reorganizing the structure.

## Verification

The reorganization was checked to confirm that:

- The home page loads correctly from `index.html`.
- The main stylesheets load from `styles/`.
- The general script loads from `scripts/site.js`.
- Home page images display correctly.
- No broken local references remain in the HTML and CSS files.
- No active references remain to the old `Img`, `Paginas`, `Css`, or `Js` folders.

## Running the project

The project does not require a build process. It can be opened directly by opening `index.html` in a browser.

For an experience closer to a local development environment, it can also be served with any static web server from the project root.
