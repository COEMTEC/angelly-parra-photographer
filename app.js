// ==========================================================================
// ANGELLY PARRA PHOTOGRAPHER — WORLD-CLASS PORTFOLIO
// Main JavaScript Logic (Vanilla + GSAP + Lenis)
// ==========================================================================

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const i18n = {
    es: {
        cursor_view: "Ver",
        nav_work: "Portafolio",
        nav_about: "Sobre Mí",
        nav_services: "Servicios",
        nav_contact: "Contacto",
        hero_subtitle: "Fotógrafa · Castellón, España",
        hero_tagline: "Capturando momentos que duran para siempre",
        scroll: "Desliza",
        marq_weddings: "Bodas",
        marq_events: "Eventos",
        marq_brands: "Marcas",
        marq_portraits: "Retratos",
        marq_love: "Historias de Amor",
        marq_celebrations: "Celebraciones",
        marq_editorial: "Editorial",
        marq_lifestyle: "Estilo de Vida",
        portfolio_title: "Trabajo Destacado",
        filter_all: "Todos",
        filter_weddings: "Bodas",
        filter_events: "Eventos",
        filter_brands: "Marcas",
        filter_portraits: "Retratos",
        about_title: "La Historia Detrás<br>del Lente",
        about_text: "Hola, soy <strong>Angelly Parra</strong>, una apasionada fotógrafa radicada en <strong>Castellón, España</strong>. Me especializo en capturar los momentos más significativos de la vida — desde las emociones íntimas del día de una boda hasta la energía vibrante de celebraciones y eventos.<br><br>Cada fotografía que tomo está impulsada por el deseo de contar historias auténticas a través de la luz, la composición y la emoción genuina. Ya sea una marca buscando identidad visual o una pareja queriendo preservar su historia de amor, aporto dedicación, creatividad y un buen ojo para los detalles en cada sesión.",
        stat_sessions: "Sesiones",
        stat_weddings: "Bodas",
        stat_clients: "Clientes Felices",
        stat_passion: "Pasión",
        services_title: "Lo que Ofrezco",
        srv_weddings_title: "Fotografía de Bodas",
        srv_weddings_desc: "Cobertura completa de tu día especial. Desde los preparativos hasta el último baile — cada emoción y detalle bellamente preservado.",
        srv_events_title: "Eventos y Celebraciones",
        srv_events_desc: "Cumpleaños, reuniones corporativas, galas y fiestas. Capturo el ambiente, la gente y la energía que hace cada evento único.",
        srv_brands_title: "Marcas y Productos",
        srv_brands_desc: "Narrativa visual para marcas. Sesiones de producto, estilo de vida y creación de contenido que eleva tu identidad visual.",
        srv_portraits_title: "Sesiones de Retrato",
        srv_portraits_desc: "Retratos profesionales, editoriales creativos y sesiones de marca personal. Adaptados para revelar tu auténtica personalidad.",
        testimonial_quote: "Angelly capturó nuestro día de bodas con muchísima emoción y arte. Cada foto se siente como revivir los momentos más hermosos de nuestras vidas. Tiene un talento increíble para encontrar la luz y el ángulo perfecto.",
        testimonial_role: "Boda · Castellón, 2024",
        contact_label: "Ponte en Contacto",
        contact_title: "Vamos a Crear Algo<br><em>Hermoso</em> Juntos",
        contact_btn: "Reserva una Sesión",
        contact_email: "Correo Electrónico",
        contact_based: "Ubicada en",
        footer_brand: "Fotógrafa",
        footer_copy: "&copy; 2026 Angelly Parra Photography. Todos los derechos reservados.",
        lb_camera: "Cámara",
        lb_settings: "Ajustes",
        lb_concept: "Concepto"
    },
    en: {
        cursor_view: "View",
        nav_work: "Work",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_subtitle: "Photographer · Castellón, Spain",
        hero_tagline: "Capturing moments that last forever",
        scroll: "Scroll",
        marq_weddings: "Weddings",
        marq_events: "Events",
        marq_brands: "Brands",
        marq_portraits: "Portraits",
        marq_love: "Love Stories",
        marq_celebrations: "Celebrations",
        marq_editorial: "Editorial",
        marq_lifestyle: "Lifestyle",
        portfolio_title: "Selected Work",
        filter_all: "All",
        filter_weddings: "Weddings",
        filter_events: "Events",
        filter_brands: "Brands",
        filter_portraits: "Portraits",
        about_title: "The Story Behind<br>the Lens",
        about_text: "Hi, I'm <strong>Angelly Parra</strong>, a passionate photographer based in <strong>Castellón, Spain</strong>. I specialize in capturing life's most meaningful moments — from the intimate emotions of a wedding day to the vibrant energy of celebrations and events.<br><br>Every photograph I take is driven by a desire to tell authentic stories through light, composition, and genuine emotion. Whether it's a brand looking for visual identity or a couple wanting to preserve their love story, I bring dedication, creativity, and a keen eye for detail to every session.",
        stat_sessions: "Sessions",
        stat_weddings: "Weddings",
        stat_clients: "Happy Clients",
        stat_passion: "Passion",
        services_title: "What I Offer",
        srv_weddings_title: "Wedding Photography",
        srv_weddings_desc: "Full-day coverage of your special day. From getting ready to the last dance — every emotion, every detail, beautifully preserved.",
        srv_events_title: "Events & Celebrations",
        srv_events_desc: "Birthdays, corporate gatherings, galas and parties. I capture the atmosphere, the people, and the energy that makes each event unique.",
        srv_brands_title: "Brand & Product",
        srv_brands_desc: "Visual storytelling for brands. Product shoots, lifestyle imagery, and content creation that elevates your visual identity.",
        srv_portraits_title: "Portrait Sessions",
        srv_portraits_desc: "Professional headshots, creative portraits, and personal branding sessions. Tailored to reveal your authentic personality.",
        testimonial_quote: "Angelly captured our wedding day with such emotion and artistry. Every photo feels like reliving the most beautiful moments of our lives. She has an incredible gift for finding the perfect light and angle.",
        testimonial_role: "Wedding · Castellón, 2024",
        contact_label: "Get in Touch",
        contact_title: "Let's Create Something<br><em>Beautiful</em> Together",
        contact_btn: "Book a Session",
        contact_email: "Email",
        contact_based: "Based in",
        footer_brand: "Photographer",
        footer_copy: "&copy; 2026 Angelly Parra Photography. All rights reserved.",
        lb_camera: "Camera",
        lb_settings: "Settings",
        lb_concept: "Concept"
    }
};

let currentLang = localStorage.getItem("lang") || "es";

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    
    // Update active button
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Update translations
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });

    // Translate dynamic categories if necessary
    // Here we mainly rely on data attributes, but we can do it if needed
}

// ─── PORTFOLIO DATA (Simulated High-End Imagery) ──────────────────────────
const portfolioData = [
    {
        id: 1,
        category: "weddings",
        title: "The Golden Hour Vows",
        subtitle: "Mediterranean Coast",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
        wide: true,
        metadata: {
            camera: "Sony A7RV",
            settings: "50mm · f/1.4 · 1/1000s · ISO 100",
            concept: "Capturing the raw emotion of the vows against the soft, warm light of the setting sun. Focus on the authentic connection and the elegance of the moment."
        }
    },
    {
        id: 2,
        category: "brands",
        title: "Noir Elegance",
        subtitle: "Jewelry Editorial",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
        wide: false,
        metadata: {
            camera: "Sony A7RV",
            settings: "90mm Macro · f/8 · 1/200s · ISO 100",
            concept: "High-contrast studio lighting to emphasize the texture and brilliance of the materials against deep shadows. Minimalist luxury."
        }
    },
    {
        id: 3,
        category: "events",
        title: "Gala Midnight",
        subtitle: "Corporate Event",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        wide: false,
        metadata: {
            camera: "Sony A7RV",
            settings: "35mm · f/1.8 · 1/160s · ISO 1600",
            concept: "Documentary approach to capture the vibrant atmosphere and sophisticated energy of the evening celebration."
        }
    },
    {
        id: 4,
        category: "portraits",
        title: "Silent Strength",
        subtitle: "Fine Art Portrait",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
        wide: false,
        metadata: {
            camera: "Sony A7RV",
            settings: "85mm · f/1.4 · 1/250s · ISO 100",
            concept: "A focus on intense eye contact and subtle lighting to convey a sense of inner resilience and natural beauty."
        }
    },
    {
        id: 5,
        category: "weddings",
        title: "First Dance",
        subtitle: "Classic Ballroom",
        image: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=800&q=80",
        wide: false,
        metadata: {
            camera: "Sony A7RV",
            settings: "35mm · f/2.0 · 1/125s · ISO 3200",
            concept: "Freezing the motion and the joy of the first dance. Utilizing ambient venue light mixed with subtle off-camera flash."
        }
    },
    {
        id: 6,
        category: "brands",
        title: "Urban Minimal",
        subtitle: "Fashion Campaign",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
        wide: true,
        metadata: {
            camera: "Sony A7RV",
            settings: "24-70mm · f/4 · 1/500s · ISO 200",
            concept: "Integrating the subject with striking architectural lines to create a modern, edgy fashion statement."
        }
    }
];

// ─── INITIALIZATION ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    initLenis();
    initPreloader();
    buildPortfolio();
    initCursor();
    initParticles();
    initNavigation();
    initAnimations();
    initLightbox();
    initMagneticButtons();
    
    // Language Init
    setLanguage(currentLang);
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
});

// ─── SMOOTH SCROLL (LENIS) ────────────────────────────────────────────────
let lenis;
function initLenis() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
}

// ─── PRELOADER ────────────────────────────────────────────────────────────
function initPreloader() {
    const preloader = document.getElementById("preloader");
    const barFill = document.getElementById("preloaderBar");
    const counter = document.getElementById("preloaderCounter");
    
    let progress = 0;
    
    // Simulate loading
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        if (progress > 100) progress = 100;
        
        barFill.style.width = `${progress}%`;
        counter.textContent = `${progress}%`;
        
        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add("hidden");
                // Trigger hero animations after preloader
                playHeroAnimations();
            }, 800);
        }
    }, 150);
}

function playHeroAnimations() {
    const tl = gsap.timeline();
    
    tl.to(".hero-title .line span", {
        y: "0%",
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
    })
    .to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
    .to(".hero-tagline", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
    .to(".hero-scroll", { opacity: 1, duration: 0.8 }, "-=0.4");
}

// ─── CUSTOM CURSOR ────────────────────────────────────────────────────────
function initCursor() {
    const dot = document.getElementById("cursorDot");
    const follower = document.getElementById("cursorFollower");
    const text = document.getElementById("cursorText");
    
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let folX = 0, folY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;
        folX += (mouseX - folX) * 0.15;
        folY += (mouseY - folY) * 0.15;

        dot.style.transform = `translate(calc(${dotX}px - 50%), calc(${dotY}px - 50%))`;
        follower.style.transform = `translate(calc(${folX}px - 50%), calc(${folY}px - 50%))`;
    });

    // Hover states
    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="link"]');
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover-link"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover-link"));
    });

    // Gallery hover
    const updateGalleryHover = () => {
        const galleryItems = document.querySelectorAll(".portfolio-item");
        galleryItems.forEach(item => {
            item.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-hover-gallery");
                text.textContent = i18n[currentLang]["cursor_view"];
            });
            item.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover-gallery");
            });
        });
    };
    
    // Initialize gallery hover after building
    setTimeout(updateGalleryHover, 100);
}

// ─── PORTFOLIO GALLERY & FILTERS ──────────────────────────────────────────
function buildPortfolio() {
    const grid = document.getElementById("portfolioGrid");
    if (!grid) return;

    // Render items
    portfolioData.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = `portfolio-item ${item.wide ? 'wide' : ''}`;
        div.dataset.category = item.category;
        div.dataset.index = index;
        
        div.innerHTML = `
            <img class="portfolio-item-img" src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-item-overlay">
                <span class="portfolio-item-category">${item.category}</span>
                <h3 class="portfolio-item-title">${item.title}</h3>
                <p class="portfolio-item-subtitle">${item.subtitle}</p>
            </div>
        `;
        
        div.addEventListener("click", () => openLightbox(index));
        grid.appendChild(div);
    });

    // Filter Logic
    const filters = document.querySelectorAll(".portfolio-filter-btn");
    const items = document.querySelectorAll(".portfolio-item");

    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            // Update active state
            filters.forEach(f => f.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            // Animate out
            gsap.to(items, {
                opacity: 0,
                scale: 0.9,
                duration: 0.4,
                stagger: 0.05,
                onComplete: () => {
                    items.forEach(item => {
                        if (filter === "all" || item.dataset.category === filter) {
                            item.style.display = "block";
                            item.classList.remove("hidden");
                        } else {
                            item.style.display = "none";
                            item.classList.add("hidden");
                        }
                    });
                    
                    // Refresh ScrollTrigger after layout change
                    ScrollTrigger.refresh();

                    // Animate in visible items
                    const visibleItems = document.querySelectorAll(".portfolio-item:not(.hidden)");
                    gsap.to(visibleItems, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power3.out"
                    });
                }
            });
        });
    });
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────
let currentImageIndex = 0;

function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    currentImageIndex = index;
    updateLightboxContent();
    
    lightbox.classList.add("active");
    lightbox.removeAttribute("aria-hidden");
    document.body.style.overflow = "hidden"; // Prevent scrolling
    if(lenis) lenis.stop(); // Stop Lenis
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if(lenis) lenis.start();
}

function updateLightboxContent() {
    const data = portfolioData[currentImageIndex];
    
    document.getElementById("lightboxImage").src = data.image;
    document.getElementById("lightboxImage").alt = data.title;
    
    document.getElementById("lbCategory").textContent = data.category;
    document.getElementById("lbTitle").textContent = data.title;
    document.getElementById("lbSubtitle").textContent = data.subtitle;
    
    document.getElementById("lbCamera").textContent = data.metadata.camera;
    document.getElementById("lbSettings").textContent = data.metadata.settings;
    document.getElementById("lbConcept").textContent = data.metadata.concept;
    
    // Animate info details
    gsap.fromTo("#lightboxInfo > *", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power2.out", overwrite: true }
    );
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % portfolioData.length;
    updateLightboxContent();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + portfolioData.length) % portfolioData.length;
    updateLightboxContent();
}

function initLightbox() {
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightboxBackdrop").addEventListener("click", closeLightbox);
    document.getElementById("lightboxNext").addEventListener("click", nextImage);
    document.getElementById("lightboxPrev").addEventListener("click", prevImage);

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        const lightbox = document.getElementById("lightbox");
        if (!lightbox.classList.contains("active")) return;
        
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
    });
}

// ─── NAVIGATION & HEADER ──────────────────────────────────────────────────
function initNavigation() {
    const header = document.getElementById("header");
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("navOverlay");
    const overlayLinks = document.querySelectorAll(".nav-overlay-link");
    
    let isMenuOpen = false;

    // Header scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Toggle Menu
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            hamburger.classList.add("active");
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
            if(lenis) lenis.stop();
        } else {
            hamburger.classList.remove("active");
            overlay.classList.remove("active");
            document.body.style.overflow = "";
            if(lenis) lenis.start();
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    // Close on link click
    overlayLinks.forEach(link => {
        link.addEventListener("click", toggleMenu);
    });
}

// ─── SCROLL ANIMATIONS (GSAP) ─────────────────────────────────────────────
function initAnimations() {
    // Parallax Hero Image
    gsap.to("#heroBgImg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Reveal elements on scroll (general .reveal-up)
    const revealElements = document.querySelectorAll(".reveal-up");
    revealElements.forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => el.classList.add("revealed"),
            once: true
        });
    });

    // Reveal scale
    const scaleElements = document.querySelectorAll(".reveal-scale");
    scaleElements.forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => el.classList.add("revealed"),
            once: true
        });
    });

    // Counter animation for stats
    const stats = document.querySelectorAll(".about-stat-number");
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.count);
        ScrollTrigger.create({
            trigger: stat,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power2.out",
                    onUpdate: function() {
                        stat.innerHTML = Math.round(this.targets()[0].innerHTML) + "+";
                    }
                });
            }
        });
    });
}

// ─── MAGNETIC BUTTONS ─────────────────────────────────────────────────────
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll("[data-magnetic]");
    
    magneticElements.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(el, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        el.addEventListener("mouseleave", () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });
}

// ─── GOLDEN PARTICLES CANVAS (Refined) ────────────────────────────────────
function initParticles() {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W, H, particles, dpr;
    const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80;

    function resize() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + "px";
        canvas.style.height = H + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    class Particle {
        constructor() { this.reset(true); }
        reset(initial = false) {
            this.x = Math.random() * W;
            this.y = initial ? Math.random() * H : H + 10;
            this.radius = Math.random() * 1.5 + 0.5;
            this.alpha = 0;
            this.targetAlpha = Math.random() * 0.4 + 0.1;
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = -(Math.random() * 0.3 + 0.1);
            this.life = 0;
            this.maxLife = Math.random() * 400 + 200;
            if (initial) {
                this.life = Math.floor(Math.random() * this.maxLife);
                this.y = H - (this.life / this.maxLife) * H;
                this.alpha = Math.sin((this.life / this.maxLife) * Math.PI) * this.targetAlpha;
            }
        }
        update() {
            this.life++;
            this.x += this.vx;
            this.y += this.vy;
            const progress = this.life / this.maxLife;
            this.alpha = Math.sin(progress * Math.PI) * this.targetAlpha;
            
            // Add slight wavering motion
            this.x += Math.sin(this.life * 0.02) * 0.2;
            
            if (this.life >= this.maxLife || this.y < -10) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 165, 85, ${this.alpha})`; // Gold
            ctx.fill();
            
            // Optional: Add subtle glow
            ctx.shadowBlur = 4;
            ctx.shadowColor = `rgba(200, 165, 85, ${this.alpha * 0.5})`;
        }
    }

    function init() {
        resize();
        particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());
    }

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p) => { p.update(); p.draw(); });
        requestAnimationFrame(loop);
    }

    window.addEventListener("resize", () => {
        resize();
        // Reposition particles within new bounds if necessary
        particles.forEach((p) => {
            if (p.x > W) p.x = Math.random() * W;
            if (p.y > H) p.y = Math.random() * H;
        });
    }, { passive: true });

    init();
    loop();
}
