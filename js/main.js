const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const downloadBtn = document.getElementById("downloadBtn");
const langButtons = document.querySelectorAll(".lang-switch button");

let currentLang = localStorage.getItem('lang') || 'fr';

// Ouvrir / fermer menu
menuBtn?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Fermer menu si clic en dehors
document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    navMenu.classList.remove("active");
    }
});

// Effet de transition sur tous les boutons
const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .nav-link a");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    const href = button.getAttribute("data-href") || button.getAttribute("href");
    const isExternal = button.getAttribute("target") === "_blank";
    if (href && !isExternal) {
        button.classList.add("zoom-out");
        setTimeout(() => {
        navMenu?.classList.remove("active");
        window.location.href = href;
        }, 450);
        e.preventDefault();
    }
    });
});

// Gestion du changement de langue
langButtons.forEach(btn => {
btn.addEventListener('click', () => {
    currentLang = btn.getAttribute('data-lang');
    localStorage.setItem('lang', currentLang);
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
});
});

// Restaurer la langue au chargement
langButtons.forEach(btn => {
if (btn.getAttribute('data-lang') === currentLang) {
    btn.classList.add('active');
} else {
    btn.classList.remove('active');
}
});

// Télécharger le CV correspondant à la langue
downloadBtn?.addEventListener('click', () => {
    let file = currentLang === 'fr' ? 'assets/CV_FR.pdf' : 'assets/CV_EN.pdf';
    const a = document.createElement('a');
    a.href = file;
    a.download = file.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});