# Site CV en Ligne - Documentation Complète

## Vue d'ensemble
Ce projet est un site web de présentation de CV en ligne. Il affiche dynamiquement les informations professionnelles d'une personne avec une interface moderne et responsive.

## Architecture du Projet

### Structure des fichiers
```
Scripts/
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS pour la mise en page
├── script.js           # Logique JavaScript et données
├── cv-data.json        # Données du CV (optionnel)
└── README.md           # Cette documentation
```

## Description des fichiers

### 1. index.html
**Rôle:** Structure et contenu de la page

**Sections principales:**
- **Header (Navigation):** Barre de navigation sticky avec logo et liens vers les sections
- **Hero Section:** Affichage du nom, titre professionnel et description
- **À propos:** Résumé professionnel et informations de contact (localisation, email, téléphone, LinkedIn)
- **Expérience Professionnelle:** Liste des emplois précédents avec détails
- **Compétences:** Catégories de compétences avec niveau de maîtrise
- **Formation:** Diplômes et certifications
- **Contact:** Informations de contact regroupées

**Éléments clés:**
- IDs uniques pour chaque élément à remplir dynamiquement
- Conteneurs vides (`id="*Container"`) pour insertion JavaScript
- Structure sémantique avec `<section>`, `<header>`, `<main>`, `<footer>`

### 2. styles.css
**Rôle:** Présentation visuelle et responsive design

**Fonctionnalités:**
- Design moderne avec gradient (bleu/violet)
- Thème couleurs: #667eea (bleu) et #2c3e50 (gris foncé)
- Navigation sticky (reste visible au scroll)
- Grid layout pour les compétences et contact
- Design responsive pour mobile (media query à 768px)
- Animations: transitions au hover, smooth scrolling
- Badges pour niveaux de compétences
- Ombres et bordures pour profondeur

**Sections stylisées:**
- `.navbar` - Barre de navigation
- `.hero` - Section d'accueil
- `.section` - Sections de contenu
- `.experience-item` - Chaque emploi
- `.skill` - Carte de compétence
- `.education-item` - Formation
- `.contact-grid` - Grille de contact

### 3. script.js
**Rôle:** Logique dynamique et remplissage des données

**Données intégrées:**
L'objet `cvData` contient:
- **profile:** Informations personnelles (nom, titre, email, téléphone, localisation, LinkedIn, résumé)
- **experience:** Tableau d'emplois précédents avec période, durée et détails
- **skills:** Catégories de compétences avec niveau et technologies
- **education:** Formations avec année et description

**Fonction principale: `populateCV()`**
Remplit chaque élément HTML avec les données JSON:

1. **Profil:**
   - Met à jour le nom partout (header, hero, footer)
   - Affiche le titre et description professionnels
   - Remplit la section "À propos" avec le résumé

2. **Infos de contact:**
   - Email (lien mailto)
   - Téléphone (lien tel)
   - Localisation
   - LinkedIn

3. **Expérience:**
   - Pour chaque emploi, crée une div avec:
     - Titre et entreprise
     - Période et durée
     - Description
     - Liste à puces des réalisations

4. **Compétences:**
   - Pour chaque catégorie, crée une carte avec:
     - Nom de la catégorie
     - Badge de niveau (Expert/Avancé)
     - Liste des technologies

5. **Formation:**
   - Pour chaque diplôme, affiche:
     - Titre
     - École
     - Année
     - Description du programme

6. **Contact:**
   - Crée une grille avec 4 cartes:
     - Email avec lien
     - Téléphone avec lien
     - Localisation
     - LinkedIn

**Événements:**
- `DOMContentLoaded`: Déclenche `populateCV()` au chargement
- Smooth scrolling: Les clics sur les liens d'ancre scroll vers les sections

### 4. cv-data.json (optionnel)
**Rôle:** Données externalisées (non utilisé actuellement à cause de CORS)

Format JSON avec la même structure que l'objet `cvData` dans script.js.
Peut être utilisé si vous configurez un serveur local.

## Comment ça fonctionne

### Flux de chargement
1. HTML charge le DOM avec les IDs des éléments
2. CSS applique la mise en page et les styles
3. JavaScript s'exécute au `DOMContentLoaded`:
   - Les données `cvData` sont présentes en mémoire
   - `populateCV()` remplit chaque élément avec les données
   - Event listeners pour le smooth scrolling sont ajoutés

### Liaison données-Vue
- Chaque élément du HTML a un `id` spécifique
- JavaScript utilise `document.getElementById()` pour accéder aux éléments
- `innerHTML` ou `textContent` insère les données dynamiquement
- Les templates string JS (backticks) créent du HTML à partir des données

## Personnalisation

### Modifier le CV
1. Ouvrez `script.js`
2. Modifiez l'objet `cvData` avec vos informations:
   - `profile.*` pour infos personnelles
   - `experience[]` pour ajouter/modifier emplois
   - `skills[]` pour compétences
   - `education[]` pour formations

### Modifier les styles
- Éditez `styles.css`
- Couleurs principales: `#667eea`, `#2c3e50`
- Fonts: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`

### Ajouter des sections
1. Ajoutez une `<section>` avec un `id` dans HTML
2. Ajoutez un conteneur vide (`<div id="containerName"></div>`)
3. Ajoutez une fonction de remplissage dans `script.js`
4. Appelez-la depuis `populateCV()`

## Déploiement

### Local
- Ouvrez simplement `index.html` dans un navigateur
- Les données sont inline dans script.js (pas de fetch nécessaire)

### En ligne
1. Téléchargez tous les fichiers sur un serveur web
2. Aucune configuration spéciale requise
3. Le site fonctionne partout (statique)

## Technologies utilisées
- **HTML5:** Structure sémantique
- **CSS3:** Grid, Flexbox, Gradients, Media queries
- **JavaScript (ES6+):** Template strings, Arrow functions, DOM manipulation

## Améliorations possibles
1. Ajouter une langue toggle (FR/EN)
2. Ajouter des projets avec galerie d'images
3. Intégrer un formulaire de contact fonctionnel
4. Ajouter des animations au scroll (AOS)
5. Créer une version PDF à télécharger
6. Ajouter un dark mode
7. Utiliser un CMS pour gérer le contenu

## Support
Pour modifier le contenu, éditez simplement l'objet `cvData` dans `script.js`.
Les changements s'afficheront automatiquement au rechargement de la page.