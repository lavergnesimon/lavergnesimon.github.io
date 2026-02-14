# Site CV en Ligne - Documentation Complète

## Vue d'ensemble
Ce projet est un site web de présentation de CV en ligne moderne et responsive. Il charge dynamiquement les informations professionnelles depuis un fichier JSON, permettant une gestion facile du contenu sans modification du code.

## Architecture du Projet

### Structure des fichiers
```
Scripts/
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS pour la mise en page et responsive design
├── script.js           # Logique JavaScript pour charger et afficher les données
├── cv-data.json        # Données du CV (source unique d'informations)
├── photo.jpg           # Photo de profil (optionnelle)
├── logo/               # Dossier contenant les logos d'entreprises
│   ├── wavestone.webp
│   ├── engie.svg
│   └── ...
└── README.md           # Cette documentation
```

## Description des fichiers

### 1. cv-data.json
**Rôle:** Fichier de configuration contenant TOUTES les données du CV

**Structure JSON:**
```json
{
  "profile": {
    "name": "Nom complet",
    "title": "Titre professionnel",
    "description": "Description courte",
    "email": "email@example.com",
    "linkedin": "https://linkedin.com/...",
    "location": "Ville, Pays",
    "summary": "Résumé professionnel détaillé (HTML accepté)",
    "photo": "./photo.jpg"
  },
  "experience": [
    {
      "title": "Titre du poste",
      "company": "Nom de l'entreprise",
      "logo": ["logo/logo1.webp", "logo/logo2.svg"],
      "location": "Localisation",
      "period": "Mois Année à Mois Année",
      "duration": "X ans et Y mois",
      "description": "Résumé court",
      "details": "Description détaillée (HTML accepté)"
    }
  ],
  "skills": [
    {
      "category": "Nom de la compétence",
      "level": "Expert/Avancé/Intermédiaire",
      "technologies": "Tech1, Tech2, Tech3"
    }
  ],
  "education": [
    {
      "title": "Nom du diplôme",
      "school": "Nom de l'établissement",
      "year": "Année",
      "description": "Description du programme"
    }
  ]
}
```

### 2. index.html
**Rôle:** Structure et conteneurs HTML vides pour remplissage dynamique

**Sections principales:**
- **Header (Navigation):** Barre de navigation sticky avec nom du profil et liens vers les sections
- **Hero Section:** Photo de profil, nom, titre professionnel et description
- **À propos:** Résumé professionnel et informations de contact (localisation, email, LinkedIn)
- **Expérience Professionnelle:** Liste des emplois avec logos, période, durée, localisation et détails
- **Compétences:** Catégories de compétences avec niveau de maîtrise et technologies
- **Formation:** Diplômes et certifications
- **Contact:** Grille de contact avec liens email

**Éléments clés:**
- IDs uniques pour chaque élément (`id="navName"`, `id="experienceContainer"`, etc.)
- Conteneurs vides (`id="*Container"`) définissant où insérer les listes dynamiques
- Structure sémantique avec `<section>`, `<header>`, `<main>`, `<footer>`

### 3. styles.css
**Rôle:** Présentation visuelle et responsive design

**Fonctionnalités:**
- Design moderne avec gradient (bleu/violet)
- Thème couleurs: #667eea (bleu) et #2c3e50 (gris foncé)
- Navigation sticky (reste visible au scroll)
- Flexbox et Grid layout pour les sections
- Design responsive pour mobile (media query à 768px)
- Animations: transitions au hover, smooth scrolling
- Support des logos d'entreprises avec dimensions ajustées
- Photo de profil circular avec bordure et ombre
- Badges pour niveaux de compétences

**Sections stylisées:**
- `.navbar` - Barre de navigation
- `.hero` - Section d'accueil avec photo
- `.section` - Sections de contenu
- `.experience-item` - Chaque emploi avec logos
- `.skill` - Carte de compétence
- `.education-item` - Formation
- `.contact-grid` - Grille de contact

### 4. script.js
**Rôle:** Chargement des données JSON et injection dans le DOM

**Fonction principale: `loadCVData()`**
- Charge les données depuis `cv-data.json` via fetch (asynchrone)
- Appelle `populateCV()` une fois les données chargées
- Gère les erreurs de chargement

**Fonction principale: `populateCV()`**
Remplit chaque élément HTML avec les données JSON:

1. **Profil:**
   - Affiche la photo de profil (si présente dans cv-data.json)
   - Met à jour le nom partout (header, hero, footer)
   - Affiche le titre et description professionnels
   - Remplit la section "À propos" avec le résumé (HTML accepté)

2. **Infos de contact:**
   - Email avec lien mailto
   - Localisation
   - LinkedIn

3. **Expérience:**
   - Pour chaque emploi, crée une div avec:
     - Logo(s) de l'entreprise (multiples logos supportés)
     - Titre, entreprise, localisation
     - Période et durée
     - Description et détails enrichis (HTML accepté)

4. **Compétences:**
   - Pour chaque catégorie, crée une carte avec:
     - Nom de la compétence
     - Badge de niveau (Expert/Avancé/Intermédiaire)
     - Liste des technologies

5. **Formation:**
   - Pour chaque diplôme, affiche:
     - Titre du diplôme
     - École
     - Année
     - Description du programme

6. **Contact:**
   - Crée une grille avec 3 cartes:
     - Email avec lien
     - Localisation
     - LinkedIn

**Événements:**
- `DOMContentLoaded`: Déclenche `loadCVData()` au chargement de la page
- Smooth scrolling: Les clics sur les liens d'ancre scroll vers les sections

## Comment ça fonctionne

### Flux de chargement
1. Le navigateur charge `index.html` (structure vide avec IDs)
2. CSS applique la mise en page et les styles
3. JavaScript s'exécute au `DOMContentLoaded`:
   - `loadCVData()` charge `cv-data.json` via fetch asynchrone
   - `populateCV()` remplit chaque élément du DOM avec les données
   - Event listeners pour le smooth scrolling sont ajoutés

### Liaison données-Vue
- Chaque élément du HTML a un `id` spécifique correspondant à une propriété des données
- JavaScript utilise `document.getElementById()` pour accéder aux éléments
- `innerHTML` ou `textContent` insère les données dynamiquement
- Les template strings JS (backticks) créent du HTML à partir des données JSON

## Personnalisation

### Modifier le CV (méthode simple)
1. Ouvrez `cv-data.json`
2. Modifiez directement les données JSON:
   - `profile.*` pour infos personnelles (email, LinkedIn, localisation)
3. Rechargez le navigateur - les changements s'affichent automatiquement

### Ajouter une photo de profil
1. Placez votre photo dans le dossier racine (ex: `photo.jpg`)
2. Dans `cv-data.json`, mettez à jour: `"photo": "./photo.jpg"`
3. Assurez-vous que `index.html` a l'élément `<img id="profilePhoto">`

### Ajouter des logos d'entreprises
1. Créez un dossier `logo/` et placez-y vos logos (WebP, SVG, PNG)
2. Dans `cv-data.json`, pour chaque expérience, complétez le tableau `logo`:
   ```json
   "logo": ["logo/entreprise1.webp", "logo/entreprise2.svg"]
   ```
3. Les logos s'affichent automatiquement dans la section expérience

### Modifier les styles
- Éditez `styles.css`
- Couleurs principales: `#667eea` (bleu), `#2c3e50` (gris foncé)
- Fonts: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Breakpoint responsive: 768px

### Enrichir le contenu
- Les champs `summary` et `details` dans JSON acceptent du **HTML**:
  ```json
  "summary": "Texte avec <strong>gras</strong> et <ul><li>listes</li></ul>"
  ```

## Déploiement

### En local
1. Ouvrez simplement `index.html` dans un navigateur
2. Les données se chargent depuis `cv-data.json` via fetch
3. **Important:** Si vous ouvrez directement le fichier HTML (protocole `file://`), le fetch peut être bloqué par CORS
   - Solution: Utilisez un serveur local (Python, Node.js, Live Server VS Code, etc.)

### Serveur local (Python)
```bash
python -m http.server 8000
# Puis visitez http://localhost:8000
```

### Serveur local (Node.js)
```bash
npx http-server
# Puis visitez http://localhost:8080
```

### En ligne (GitHub Pages, Netlify, Vercel, etc.)
1. Téléchargez tous les fichiers sur votre serveur/plateforme
2. Aucune configuration spéciale requise (site 100% statique)
3. Le site fonctionne partout sans backend

## Technologies utilisées
- **HTML5:** Structure sémantique
- **CSS3:** Flexbox, Grid, Gradients, Media queries, Animations
- **JavaScript (ES6+):** Fetch API, Template strings, Arrow functions, DOM manipulation
- **JSON:** Format de sérialisation des données

## Structure des données - Exemples

### Profile
```json
"profile": {
  "name": "Simon LAVERGNE",
  "title": "Data Scientist AI / GenAI",
  "description": "Ingénieur spécialisé...",
  "email": "lavergnesimon.pro@gmail.com",
  "linkedin": "https://linkedin.com/in/lavergnesimon/",
  "location": "Paris, France",
  "summary": "Texte avec <strong>HTML</strong> accepté...",
  "photo": "./photo.jpg"
}
```

### Experience
```json
"experience": [
  {
    "title": "Expert IA & Chef de projet",
    "company": "Wavestone / ENGIE",
    "logo": ["logo/wavestone.webp", "logo/engie.svg"],
    "location": "La Défense, France",
    "period": "Juin 2024 à Janvier 2026",
    "duration": "1 an et 7 mois",
    "description": "Résumé court...",
    "details": "Description détaillée avec <ul><li>listes</li></ul>..."
  }
]
```

## Améliorations implémentées ✅
- ✅ Photo de profil circulaire
- ✅ Logos d'entreprises multiples
- ✅ Localisation avec icône emoji
- ✅ HTML enrichi dans les descriptions
- ✅ Chargement asynchrone des données depuis JSON
- ✅ Design responsive mobile

## Améliorations possibles 🔮
1. Ajouter une langue toggle (FR/EN)
2. Ajouter une section Projets avec galerie d'images
3. Intégrer un formulaire de contact fonctionnel (backend requis)
4. Ajouter des animations au scroll (AOS library)
5. Créer une version PDF à télécharger
6. Dark mode toggle
7. Système de thèmes personnalisés
8. Versioning/historique du CV
9. Intégration avec une API (portfolios, Github, etc.)
10. Archivage en PDF côté client (pdfkit)