document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. NAVIGAZIONE MOBILE (Burger Menu)
       ========================================================================== */
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        // Toggle menu e classe attiva per animare il burger
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden'); // Blocca lo scroll del body
        });

        // Chiude il menu quando viene cliccato un link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }

    /* ==========================================================================
       2. SCROLL HEADER EFFECT (Sticky Navigation)
       ========================================================================== */
    const siteHeader = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       3. INTERSECTION OBSERVER (Animazioni allo Scroll)
       ========================================================================== */
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in');

    const animationOptions = {
        root: null, // usa la viewport
        threshold: 0.15, // attiva l'animazione quando il 15% dell'elemento è visibile
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Ferma l'osservazione una volta animato
            }
        });
    }, animationOptions);

    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });

    /* ==========================================================================
       4. COPIA EMAIL NEGLI APPUNTI
       ========================================================================== */
    const btnCopyEmail = document.getElementById('btnCopyEmail');
    const copyTooltip = document.getElementById('copyTooltip');
    const emailAddress = document.querySelector('.email-address');

    if (btnCopyEmail && copyTooltip && emailAddress) {
        btnCopyEmail.addEventListener('click', () => {
            const email = emailAddress.textContent;

            navigator.clipboard.writeText(email).then(() => {
                // Modifica testo tooltip in successo
                copyTooltip.textContent = 'Copiato!';
                
                // Ripristina dopo 2 secondi
                setTimeout(() => {
                    copyTooltip.textContent = 'Copia';
                }, 2000);
            }).catch(err => {
                console.error('Errore nella copia del testo: ', err);
                copyTooltip.textContent = 'Errore';
            });
        });
    }

    /* ==========================================================================
       5. ACTIVE LINK HIGHLIGHTING
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // offset per altezza navbar
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (targetLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    targetLink.classList.add('active');
                } else {
                    targetLink.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', highlightNav);

    /* ==========================================================================
       6. INTERACTION PLACEHOLDER SHOWREEL (Simulatore Video)
       ========================================================================== */
    const showreelSection = document.querySelector('#showreel');
    const videoWrapper = showreelSection?.querySelector('.video-wrapper');
    const videoPlaceholder = showreelSection?.querySelector('.video-placeholder');

    if (videoPlaceholder && videoWrapper) {
        videoPlaceholder.addEventListener('click', () => {
            // Sostituisce il placeholder con il video Vimeo dello Showreel di Flavio Agresta
            videoWrapper.innerHTML = `
                <iframe 
                    src="https://player.vimeo.com/video/1206500437?autoplay=1" 
                    title="Flavio Agresta - Showreel" 
                    frameborder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        });
    }
});
