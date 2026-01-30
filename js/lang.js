// ==========================
// lang.js - Gestion des traductions FR/EN
// ==========================

const translations = {
  fr: {
    header_feature: "Curieux et Polyvalent",
    menu_feature: "Curieux et Polyvalent",
    citation:
      "Améliorer l'existant,<br>Remettre en question,<br>Optimiser les performances.",
    mindset:
      "Je suis toujours à la recherche de nouvelles façons de rendre les choses plus simples et plus efficaces.",
    about_title: "À propos de moi",
    certificat_tittle: "Mes certificats & Permis",
    about_text:
      "Étudiant motivé, j’aime analyser, comprendre et améliorer l’existant. Curieux par nature, je m’adapte rapidement à de nouveaux environnements et j’apprends vite de nouvelles compétences. Mon objectif est de toujours progresser, de relever des défis et de trouver des solutions innovantes.",
    contact_title: "Me contacter",
    contact_intro:
      "N’hésitez pas à me contacter pour toute question, opportunité ou collaboration.",
    contact_location: "Amiens, France",
    Diplome_BAC: "Baccalauréat (mention bien).",
    btn_download_BAC: "Afficher le Diplôme",
    btn_download_toeic: "Afficher le Certificat",
    certificate_TOEIC: "Certification TOEIC validé (B2+).",
    certificate_permis: "Permis voiture Français et véhiculé.",
    certificate_secourisme: "Formation aux premiers secours (PSC1).",

    // ✅ NAVIGATION
    nav_home: "Accueil",
    nav_experiences: "Expériences",
    nav_projects: "Projets",
    nav_skills: "Aptitudes",
    nav_certificate: "Certificat & Permis",
    nav_contact: "Contact",

    // ✅ BOUTONS
    btn_download_cv: "Télécharger mon CV",
    btn_contact: "Me contacter",
  },
  en: {
    header_feature: "Curious and Versatile",
    menu_feature: "Curious and Versatile",
    citation:
      "Improve the existing,<br>Question things,<br>Optimize performance.",
    mindset:
      "I am always looking for new ways to make things simpler and more efficient.",
    about_title: "About me",
    certificat_tittle: "My Certificates & Licenses",
    about_text:
      "Motivated student, I like to analyze, understand, and improve existing processes. Curious by nature, I adapt quickly to new environments and quickly learn new skills. My goal is to always progress, take on challenges, and find innovative solutions.",
    contact_title: "Contact me",
    contact_intro:
      "Feel free to contact me for any questions, opportunities, or collaborations.",
    contact_location: "Amiens, France",
    Diplome_BAC: "Baccalauréat, with honors (Good).",
    btn_download_BAC: "View Diploma",
    btn_download_toeic: "View Certificate",
    certificate_TOEIC: "TOEIC Certification achieved (B2+).",
    certificate_permis: "French driving license with own vehicle.",
    certificate_secourisme: "First Aid Training (PSC1).",

    // ✅ NAVIGATION
    nav_home: "Home",
    nav_experiences: "Experiences",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_certificate: "Certificate & License",
    nav_contact: "Contact",

    // ✅ BOUTONS
    btn_download_cv: "Dowload my resume",
    btn_contact: "Contact me",
  },
};

const defaultLang = "fr";

// Fonction pour appliquer la langue sur la page
function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    // Si l'élément a la classe i18n-text, on change seulement son contenu
    if (el.classList.contains("i18n-text") && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // texte + accents + <br> OK
    }
  });

  // Mettre en surbrillance le drapeau actif
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// Charger la langue au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || defaultLang;
  setLanguage(savedLang);

  // Ajouter les événements aux boutons de langue
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});
