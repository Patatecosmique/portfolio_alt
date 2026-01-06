// Fonction pour le menu burger mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Basculer la navigation
        nav.classList.toggle('nav-active');

        // Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animation du bouton burger (croix)
        burger.classList.toggle('toggle');
    });
}

// Fonction pour l'animation au scroll
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Lancer les fonctions
navSlide();
window.addEventListener('scroll', scrollReveal);



function toggleAccordion(id) {
    const item = document.getElementById(id);
    const content = item.querySelector('.accordion-content');
    
    // Vérifie si l'item est déjà ouvert
    const isOpen = item.classList.contains('open');

    // Optionnel : Fermer tous les autres (Mode "Accordéon strict")
    // Si tu veux pouvoir en ouvrir plusieurs à la fois, supprime ces 4 lignes :
    document.querySelectorAll('.accordion-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.accordion-content').style.maxHeight = null;
    });

    if (!isOpen) {
        item.classList.add('open');
        // On définit la hauteur max sur la hauteur réelle du contenu
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        // Si c'était déjà ouvert, on ferme (si tu as supprimé le bloc optionnel au-dessus)
        item.classList.remove('open');
        content.style.maxHeight = null;
    }
}