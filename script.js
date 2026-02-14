let cvData;

// Charger les données depuis cv-data.json
async function loadCVData() {
    try {
        const response = await fetch('./cv-data.json');
        cvData = await response.json();
        populateCV();
    } catch (error) {
        console.error('Erreur lors du chargement du CV:', error);
    }
}

// Remplir le CV avec les données
function populateCV() {
    // Profil
    document.getElementById('navName').textContent = cvData.profile.name;
    
    // Photo de profil
    if (cvData.profile.photo) {
        const photoElement = document.getElementById('profilePhoto');
        if (photoElement) {
            photoElement.src = cvData.profile.photo;
            photoElement.style.display = 'block';
        }
    }
    
    document.getElementById('heroName').textContent = cvData.profile.name;
    document.getElementById('heroTitle').textContent = cvData.profile.title;
    document.getElementById('heroDescription').textContent = cvData.profile.description;
    document.getElementById('footerName').textContent = cvData.profile.name;
    
    // Résumé et infos de profil
    document.getElementById('summary').innerHTML = cvData.profile.summary;
    document.getElementById('location').textContent = cvData.profile.location;
    document.getElementById('profileEmail').href = 'mailto:' + cvData.profile.email;
    document.getElementById('profileEmail').textContent = cvData.profile.email;
    document.getElementById('profileLinkedin').href = 'https://linkedin.com/' + cvData.profile.linkedin;
    document.getElementById('profileLinkedin').textContent = cvData.profile.linkedin;

    // Expérience - Détails enrichis
    const experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.innerHTML = cvData.experience.map(exp => `
        <div class="experience-item">
            <div class="exp-header">
                ${exp.logo.map(logo => `<img src="${logo}" alt="${exp.company} ${logo} logo" class="company-logo" style="width: 100px; height: 100px;object-fit: contain;flex-shrink: 0;">`).join('')}
                <div class="exp-info">
                    <h3>${exp.title}</h3>
                    <p class="company">${exp.company}</p>
                </div>
                <div class="exp-meta">
                    <span class="period">${exp.period}</span>
                    <span class="duration">${exp.duration}</span>
                    <span class="exp-location">📍 ${exp.location}</span>
                </div>
            </div>
            <p class="exp-description">${exp.description}</p>
            <p>${exp.details}</p>
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
                <strong>Localisation:</strong>
                <p>${cvData.profile.location}</p>
            </div>
            <div class="contact-item">
                <strong>LinkedIn:</strong>
                <p><a href="https://linkedin.com/${cvData.profile.linkedin}">${cvData.profile.linkedin}</a></p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    loadCVData();

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
