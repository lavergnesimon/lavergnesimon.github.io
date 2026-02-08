let cvData = {
  "profile": {
    "name": "John Doe",
    "title": "Développeur Full Stack",
    "description": "Passionné par la création d'applications web innovantes avec 5+ ans d'expérience",
    "email": "john@example.com",
    "phone": "+33 6 12 34 56 78",
    "linkedin": "linkedin.com/in/johndoe",
    "location": "Paris, France",
    "summary": "Développeur Full Stack spécialisé dans la création d'applications web modernes et performantes. Fort d'une expérience en gestion de projet et de team leadership."
  },
  "experience": [
    {
      "title": "Développeur Senior",
      "company": "TechCorp",
      "period": "2021 à présent",
      "duration": "3 ans",
      "description": "Responsable du développement de solutions web complexes et du management d'équipe",
      "details": [
        "Développement d'applications web avec React et Node.js",
        "Gestion d'équipe de 5 développeurs",
        "Mise en place de bonnes pratiques et standards de code",
        "Architecture et optimisation de bases de données"
      ]
    },
    {
      "title": "Développeur Mid-level",
      "company": "WebSolutions",
      "period": "2019 à 2021",
      "duration": "2 ans",
      "description": "Développement full stack de sites web et applications",
      "details": [
        "Création de sites web responsifs",
        "Optimisation de performance",
        "Intégration d'APIs externes",
        "Déploiement sur serveurs AWS"
      ]
    },
    {
      "title": "Développeur Junior",
      "company": "StartupLab",
      "period": "2018 à 2019",
      "duration": "1 an",
      "description": "Développement frontend et support technique",
      "details": [
        "Création d'interfaces utilisateur avec HTML/CSS/JavaScript",
        "Support client et debugging",
        "Maintenance de sites web existants"
      ]
    }
  ],
  "skills": [
    {
      "category": "Frontend",
      "level": "Expert",
      "technologies": "HTML5, CSS3, JavaScript ES6+, React, Vue.js, Webpack, Sass"
    },
    {
      "category": "Backend",
      "level": "Expert",
      "technologies": "Node.js, Express, Python, Django, MongoDB, PostgreSQL, MySQL"
    },
    {
      "category": "DevOps & Outils",
      "level": "Avancé",
      "technologies": "Git, GitHub, Docker, AWS, CI/CD, Jenkins, Linux"
    },
    {
      "category": "Langages",
      "level": "Avancé",
      "technologies": "JavaScript, Python, PHP, SQL, TypeScript"
    }
  ],
  "education": [
    {
      "title": "Licence en Informatique",
      "school": "Université Paris Tech",
      "year": "2019",
      "description": "Spécialisation en Développement Web et Bases de Données"
    },
    {
      "title": "Certificat Full Stack",
      "school": "CodeAcademy",
      "year": "2018",
      "description": "Formation intensive en développement web full stack (3 mois)"
    },
    {
      "title": "Baccalauréat Scientifique",
      "school": "Lycée Saint-Louis",
      "year": "2015",
      "description": "Mention Assez Bien"
    }
  ]
};

// Remplir le CV avec les données
function populateCV() {
    // Profil
    document.getElementById('navName').textContent = cvData.profile.name;
    document.getElementById('heroName').textContent = cvData.profile.name;
    document.getElementById('heroTitle').textContent = cvData.profile.title;
    document.getElementById('heroDescription').textContent = cvData.profile.description;
    document.getElementById('footerName').textContent = cvData.profile.name;
    
    // Résumé et infos de profil
    document.getElementById('summary').textContent = cvData.profile.summary;
    document.getElementById('location').textContent = cvData.profile.location;
    document.getElementById('profileEmail').href = 'mailto:' + cvData.profile.email;
    document.getElementById('profileEmail').textContent = cvData.profile.email;
    document.getElementById('profilePhone').href = 'tel:' + cvData.profile.phone;
    document.getElementById('profilePhone').textContent = cvData.profile.phone;
    document.getElementById('profileLinkedin').href = '#';
    document.getElementById('profileLinkedin').textContent = cvData.profile.linkedin;

    // Expérience - Détails enrichis
    const experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.innerHTML = cvData.experience.map(exp => `
        <div class="experience-item">
            <div class="exp-header">
                <div>
                    <h3>${exp.title}</h3>
                    <p class="company">${exp.company}</p>
                </div>
                <div class="exp-meta">
                    <span class="period">${exp.period}</span>
                    <span class="duration">${exp.duration}</span>
                </div>
            </div>
            <p class="exp-description">${exp.description}</p>
            <ul>
                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Compétences - Avec niveau
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = cvData.skills.map(skill => `
        <div class="skill">
            <div class="skill-header">
                <h4>${skill.category}</h4>
                <span class="skill-level">${skill.level}</span>
            </div>
            <p>${skill.technologies}</p>
        </div>
    `).join('');

    // Formation - Détails enrichis
    const educationContainer = document.getElementById('educationContainer');
    educationContainer.innerHTML = cvData.education.map(edu => `
        <div class="education-item">
            <div class="edu-header">
                <h3>${edu.title}</h3>
                <span class="edu-year">${edu.year}</span>
            </div>
            <p class="school">${edu.school}</p>
            <p class="edu-description">${edu.description}</p>
        </div>
    `).join('');

    // Contact - Enrichi
    const contactContainer = document.getElementById('contactContainer');
    contactContainer.innerHTML = `
        <div class="contact-grid">
            <div class="contact-item">
                <strong>Email:</strong>
                <p><a href="mailto:${cvData.profile.email}">${cvData.profile.email}</a></p>
            </div>
            <div class="contact-item">
                <strong>Téléphone:</strong>
                <p><a href="tel:${cvData.profile.phone}">${cvData.profile.phone}</a></p>
            </div>
            <div class="contact-item">
                <strong>Localisation:</strong>
                <p>${cvData.profile.location}</p>
            </div>
            <div class="contact-item">
                <strong>LinkedIn:</strong>
                <p><a href="#">${cvData.profile.linkedin}</a></p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    populateCV();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
