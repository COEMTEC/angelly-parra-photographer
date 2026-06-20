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
        hero_tagline: "Haz que tus momentos duren para siempre.",
        scroll: "Desliza",
        marq_weddings: "Bodas",
        marq_events: "Eventos",
        marq_brands: "Quinceañeras",
        marq_portraits: "Deportes",
        marq_love: "Baby Showers",
        marq_celebrations: "Fiestas",
        marq_editorial: "Cumpleaños",
        marq_lifestyle: "Artistas",
        portfolio_title: "Trabajo Destacado",
        filter_all: "Todos",
        filter_weddings: "Bodas",
        filter_quince: "15 Años",
        filter_baby: "Baby Showers",
        filter_parties: "Cumpleaños",
        filter_events: "Eventos y Artistas",
        filter_sports: "Deportes",
        about_title: "La Historia Detrás<br>del Lente",
        about_text: "Hola, soy <strong>Angelly Parra</strong>, una apasionada fotógrafa radicada en <strong>Castellón, España</strong>. Me especializo en capturar los momentos más significativos de la vida — desde las emociones íntimas del día de una boda hasta la energía vibrante de celebraciones, fiestas y conciertos.<br><br>Cada fotografía que tomo está impulsada por el deseo de contar historias auténticas a través de la luz, la composición y la emoción genuina. Aporto dedicación, creatividad y un buen ojo para los detalles en cada sesión.",
        stat_sessions: "Sesiones",
        stat_weddings: "Bodas",
        stat_clients: "Clientes Felices",
        stat_passion: "Pasión",
        services_title: "Lo que Ofrezco",
        srv_weddings_title: "Bodas",
        srv_weddings_desc: "Cobertura completa de tu día especial. Desde los preparativos hasta el último baile — cada emoción y detalle bellamente preservado.",
        srv_quince_title: "Quinceañeras",
        srv_quince_desc: "Sesiones mágicas para celebrar tus 15 años. Destacamos tu personalidad y belleza en este cambio de etapa tan especial.",
        srv_baby_title: "Baby Showers",
        srv_baby_desc: "Guardamos los recuerdos de la dulce espera. Fotos llenas de ternura y alegría junto a familiares y amigos.",
        srv_parties_title: "Cumpleaños",
        srv_parties_desc: "Cobertura completa de tus celebraciones para que tú solo te preocupes por disfrutar con tus invitados.",
        srv_events_title: "Eventos y Conciertos",
        srv_events_desc: "Fotografía dinámica para artistas, DJs y eventos en vivo. Capturamos la energía y la vibración del escenario.",
        srv_sports_title: "Deportes",
        srv_sports_desc: "Acción, movimiento y pasión deportiva congelados en imágenes de alto impacto visual y perfecta nitidez.",
        ig_title: "Sígueme en Instagram",
        testimonial_quote: "Angelly capturó nuestro día de bodas con muchísima emoción y arte. Cada foto se siente como revivir los momentos más hermosos de nuestras vidas. Tiene un talento increíble para encontrar la luz y el ángulo perfecto.",
        testimonial_role: "Boda · Castellón, 2024",
        contact_label: "Ponte en Contacto",
        contact_title: "Vamos a Crear Algo<br><em>Hermoso</em> Juntos",
        contact_btn: "Reserva una Sesión",
        contact_email: "Correo Electrónico",
        contact_based: "Ubicada en",
        footer_brand: "Fotógrafa",
        footer_copy: "&copy; 2026 Angelly Parra Photography. Todos los derechos reservados.",
        lb_camera: "Categoría",
        lb_settings: "Iluminación",
        lb_concept: "Concepto",
        service_areas_title: "Zonas de Cobertura",
        service_areas_desc: "Ofreciendo servicios de fotografía profesional en Castellón de la Plana, Vila-real, Benicàssim, Burriana, Almassora, Onda, Oropesa del Mar, Valencia y toda la Comunidad Valenciana."
    },
    en: {
        cursor_view: "View",
        nav_work: "Work",
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_subtitle: "Photographer · Castellón, Spain",
        hero_tagline: "Make your moments last forever.",
        scroll: "Scroll",
        marq_weddings: "Weddings",
        marq_events: "Events",
        marq_brands: "Sweet 15s",
        marq_portraits: "Sports",
        marq_love: "Baby Showers",
        marq_celebrations: "Parties",
        marq_editorial: "Birthdays",
        marq_lifestyle: "Artists",
        portfolio_title: "Selected Work",
        filter_all: "All",
        filter_weddings: "Weddings",
        filter_quince: "Sweet 15s",
        filter_baby: "Baby Showers",
        filter_parties: "Birthdays",
        filter_events: "Events & Artists",
        filter_sports: "Sports",
        about_title: "The Story Behind<br>the Lens",
        about_text: "Hi, I'm <strong>Angelly Parra</strong>, a passionate photographer based in <strong>Castellón, Spain</strong>. I specialize in capturing life's most meaningful moments — from the intimate emotions of a wedding day to the vibrant energy of celebrations, parties and concerts.<br><br>Every photograph I take is driven by a desire to tell authentic stories through light, composition, and genuine emotion. I bring dedication, creativity, and a keen eye for detail to every session.",
        stat_sessions: "Sessions",
        stat_weddings: "Weddings",
        stat_clients: "Happy Clients",
        stat_passion: "Passion",
        services_title: "What I Offer",
        srv_weddings_title: "Weddings",
        srv_weddings_desc: "Full-day coverage of your special day. From getting ready to the last dance — every emotion, every detail, beautifully preserved.",
        srv_quince_title: "Sweet 15s",
        srv_quince_desc: "Magical sessions to celebrate your 15th birthday. We highlight your personality and beauty in this special stage.",
        srv_baby_title: "Baby Showers",
        srv_baby_desc: "We keep the memories of the sweet wait. Photos full of tenderness and joy with family and friends.",
        srv_parties_title: "Birthdays",
        srv_parties_desc: "Complete coverage of your celebrations so you only worry about enjoying with your guests.",
        srv_events_title: "Events & Concerts",
        srv_events_desc: "Dynamic photography for artists, DJs, and live events. We capture the energy and vibration of the stage.",
        srv_sports_title: "Sports",
        srv_sports_desc: "Action, movement, and sports passion frozen in high-impact visual images with perfect sharpness.",
        ig_title: "Follow me on Instagram",
        testimonial_quote: "Angelly captured our wedding day with such emotion and artistry. Every photo feels like reliving the most beautiful moments of our lives. She has an incredible gift for finding the perfect light and angle.",
        testimonial_role: "Wedding · Castellón, 2024",
        contact_label: "Get in Touch",
        contact_title: "Let's Create Something<br><em>Beautiful</em> Together",
        contact_btn: "Book a Session",
        contact_email: "Email",
        contact_based: "Based in",
        footer_brand: "Photographer",
        footer_copy: "&copy; 2026 Angelly Parra Photography. All rights reserved.",
        lb_camera: "Category",
        lb_settings: "Lighting",
        lb_concept: "Concept",
        service_areas_title: "Service Areas",
        service_areas_desc: "Offering professional photography services in Castellón de la Plana, Vila-real, Benicàssim, Burriana, Almassora, Onda, Oropesa del Mar, Valencia, and the entire Valencian Community."
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

    // Update Document Title for SEO/AIO multi-language support
    if (lang === "es") {
        document.title = "Angelly Parra | Fotógrafa en Castellón — Bodas, 15 Años y Eventos";
    } else {
        document.title = "Angelly Parra | Professional Photographer in Castellón — Weddings, Sweet 15s & Events";
    }
}

// ─── PORTFOLIO DATA (Simulated High-End Imagery) ──────────────────────────
const portfolioData = [
    {
        "id": 1,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/1383D354-8042-4783-B592-FC57BDB07824.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 2,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/16282EC0-407E-4726-9B32-E674ADF1AD5E.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 3,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/1E94AE71-B733-4B42-A712-6D8D5DB5A3AD.webp",
        "wide": true,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 4,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/3231E239-C8F7-42E1-A926-8D1B0745D19E.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 5,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/36C0D88A-2AE1-4261-9FD1-F9221B726E02.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 6,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/3D74B947-4A9F-4C70-9DFD-1410ED6B1935.webp",
        "wide": true,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 7,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/48017653-5729-4D8B-89B9-42333D45BE5B.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 8,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/49134A6F-0E5F-414E-8395-57F1A0C0C9BC.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 9,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/4A04FF7F-916C-4B22-BF6A-3E45E1101D33.webp",
        "wide": true,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 10,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/5861F8A8-9923-413E-ADAF-EDC58361B605.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 11,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/59710885-F3CD-4B1C-8862-F977FEFB24E0.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 12,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/6916C601-7D3D-43D6-AC86-9353D5B84D66.webp",
        "wide": true,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 13,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/8619576A-3715-4DEC-B43C-6FCDDEF65C5E.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 14,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/917F1D95-F880-4382-A0A6-A6DF134D2A08.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 15,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/D9777026-C922-4C7C-B901-79E49349DAC4.webp",
        "wide": true,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 16,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/DB4C3CC3-261F-4619-A882-C791460E47AA.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 17,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/E1C5B233-D321-447B-AD6B-44255554267C.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 18,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/E76547F2-ED0B-43F3-90D0-1C5694BDAA5B.webp",
        "wide": true,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 19,
        "category": "quinceaneras",
        "title": "Angelly Parra - 15 Años",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/15 años_/F2B46D39-435E-46E3-B80A-68D2CAA62FC4.webp",
        "wide": false,
        "metadata": {
            "camera": "15 Años",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 20,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/16F22965-5DBB-4041-B79A-93F844CF7AB9.webp",
        "wide": false,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 21,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/26321E9F-07D1-4083-A34D-73339A2CA5B6.webp",
        "wide": true,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 22,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/265AE582-BCC0-4071-9622-EB848AC4808F.webp",
        "wide": false,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 23,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/380CF530-497F-4823-A683-B3A3AA9A345B.webp",
        "wide": false,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 24,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/7A036D12-39AA-4636-88BB-AE75A9B924EF.webp",
        "wide": true,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 25,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/A8044BBE-32A6-4610-B2A6-00A000C54279.webp",
        "wide": false,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 26,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/AB4E729E-8F0D-476B-9E44-53148C299378.webp",
        "wide": false,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 27,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/BA9E5F52-E241-4C48-8D4C-22EC4F9FC9B7.webp",
        "wide": true,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 28,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/DC4EF904-6C6B-4CCD-A063-ADE9EF49AC7E.webp",
        "wide": false,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 29,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/DDC40A36-18C8-4130-8561-EDDA91D8EBA7.webp",
        "wide": false,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 30,
        "category": "bodas",
        "title": "Angelly Parra - Bodas",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Bodas_/FEDCDC3C-ADF2-45C3-BEF2-FDB631015607.webp",
        "wide": true,
        "metadata": {
            "camera": "Bodas",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 31,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/0BF11A5C-D751-4246-85B9-F525C76C001F.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 32,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/1CF90047-320B-4EFC-BC37-12B8A130ED99.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 33,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/35AC0E01-D1C3-4CEE-81A3-50327E1D8058.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 34,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/5D8BE743-84A7-4391-B82C-F782510A39CE.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 35,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/83A859D4-122A-47FC-8102-F2E6814AB0F3.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 36,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/B1E725CE-FC54-48A0-89BF-27191A1B9643.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 37,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/IMG_2972.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 38,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/IMG_2973.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 39,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/IMG_2974.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 40,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/IMG_2976.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 41,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/PHOTO-2026-06-08-16-45-50(2).webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 42,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/PHOTO-2026-06-08-16-45-50(8).webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 43,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/PHOTO-2026-06-08-16-45-51(5).webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 44,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Eventos_/PHOTO-2026-06-08-17-58-18(2).webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 45,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Foto dj_/4BA9E5FB-84F5-47C5-8906-E60AE6C241ED.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 46,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Foto dj_/AA586514-2CD4-4B99-B615-EEB432DE5639.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 47,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Foto dj_/B478E68E-CC7D-4D9D-9BF4-EFD9D796B1A1.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 48,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Foto dj_/CDC90FFF-E8EA-4B10-93AE-C5ED5A10471B.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 49,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos artistas_/da098474-cb13-40e5-9031-2ace5648c277.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 50,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos artistas_/IMG_2993.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 51,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos artistas_/IMG_2994.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 52,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos artistas_/IMG_3073.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 53,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos artistas_/IMG_3076.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 54,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos fútbol_/175F8C56-85C9-4C9A-85B2-63AE956A465A.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 55,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos fútbol_/5A26B270-C635-4FE5-897F-31AD93F6A132.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 56,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos fútbol_/8604D419-EB13-4254-93CE-32AF4923C959.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 57,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Fotos fútbol_/E04F9582-B937-45A4-A29C-B33DF8E39E66.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 58,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/69ebf24b-3caa-4e26-a435-df25c56637e1.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 59,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/6D7A3BA7-39C0-44B2-A804-85F026B04CAE(1).webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 60,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/760DD066-471D-4B20-9CA8-E7CCBB43B538.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 61,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/A36A6085-79F7-4ECC-8DA5-16A878C910A0.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 62,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/B5664045-C499-47B8-B6F5-37517831BD39.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 63,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/b740aec8-8ee9-4115-b7a5-408653e55b7b.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 64,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/F409D1D1-5B65-44DA-8958-68A1B860FD67.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 65,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/F5456135-CB83-445C-BD4C-B58C2211A16C.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 66,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/IMG_3095.webp",
        "wide": true,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 67,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/IMG_3096.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
        }
    },
    {
        "id": 68,
        "category": "eventos",
        "title": "Angelly Parra - Eventos",
        "subtitle": "Fotografía Profesional",
        "image": "./Fotos Angelly/Variadas_/IMG_3097.webp",
        "wide": false,
        "metadata": {
            "camera": "Eventos",
            "settings": "Iluminación Profesional",
            "concept": "Capturando momentos únicos y energía genuina."
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
    let isLoaded = false;
    
    window.addEventListener('load', () => { isLoaded = true; });
    
    // Simulate loading, but wait for actual load before finishing
    const interval = setInterval(() => {
        if (progress < 90) {
            progress += Math.floor(Math.random() * 10) + 5;
            if (progress > 90) progress = 90;
        } else if (isLoaded) {
            progress = 100;
        }
        
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

    // Shuffle portfolioData
    portfolioData.sort(() => Math.random() - 0.5);

    // Format Category
    const formatCategory = (cat) => {
        const map = {
            'bodas': 'Bodas',
            'quinceaneras': '15 Años',
            'babyshowers': 'Baby Showers',
            'eventos': 'Eventos y Cumpleaños',
            'deportes': 'Deportes',
            'fiestas': 'Eventos y Cumpleaños'
        };
        return map[cat] || cat;
    };

    // Render items
    portfolioData.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = `portfolio-item ${item.wide ? 'wide' : ''}`;
        div.dataset.category = item.category === 'fiestas' ? 'eventos' : item.category;
        div.dataset.index = index;
        
        div.innerHTML = `
            <img class="portfolio-item-img" src="${item.image}" alt="${item.title}" loading="lazy">
            <div class="portfolio-item-overlay">
                <span class="portfolio-item-category">${formatCategory(item.category)}</span>
                <h3 class="portfolio-item-title">${item.title}</h3>
                <p class="portfolio-item-subtitle">${item.subtitle}</p>
            </div>
        `;
        
        div.addEventListener("click", () => openLightbox(index));
        grid.appendChild(div);
    });

    let currentLimit = 12;
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const items = document.querySelectorAll(".portfolio-item");

    // Helper to apply filter and limit
    const applyFilterAndLimit = (filter, animate = true) => {
        let visibleCount = 0;
        let totalMatched = 0;
        
        const updateDOM = () => {
            items.forEach(item => {
                const matchCategory = filter === "all" || item.dataset.category === filter;
                if (matchCategory) {
                    totalMatched++;
                    if (visibleCount < currentLimit) {
                        item.style.display = "inline-block";
                        item.classList.remove("hidden");
                        visibleCount++;
                    } else {
                        item.style.display = "none";
                        item.classList.add("hidden");
                    }
                } else {
                    item.style.display = "none";
                    item.classList.add("hidden");
                }
            });
            
            if (totalMatched > currentLimit) {
                loadMoreBtn.style.display = "inline-block";
            } else {
                loadMoreBtn.style.display = "none";
            }
            
            ScrollTrigger.refresh();
            
            if (animate) {
                const visibleItems = document.querySelectorAll(".portfolio-item:not(.hidden)");
                gsap.to(visibleItems, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power2.out",
                    overwrite: true
                });
            }
        };

        if (animate) {
            gsap.to(items, {
                opacity: 0,
                scale: 0.9,
                duration: 0.4,
                overwrite: true,
                onComplete: updateDOM
            });
        } else {
            updateDOM();
        }
    };

    // Initial render setup (hidden initially so applyFilterAndLimit handles animation)
    items.forEach(item => {
        item.style.opacity = "0";
        item.style.display = "none";
        item.classList.add("hidden");
    });
    
    // Initial display
    applyFilterAndLimit("all", true);

    // Filter Logic
    const filters = document.querySelectorAll(".portfolio-filter-btn");

    filters.forEach(btn => {
        btn.addEventListener("click", () => {
            filters.forEach(f => f.classList.remove("active"));
            btn.classList.add("active");
            
            currentLimit = 12; // Reset limit on category change
            const filter = btn.dataset.filter;
            applyFilterAndLimit(filter, true);
        });
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            currentLimit += 12;
            const activeFilter = document.querySelector(".portfolio-filter-btn.active").dataset.filter;
            applyFilterAndLimit(activeFilter, false);
            
            // Animate just the newly added items
            setTimeout(() => {
                const visibleItems = document.querySelectorAll(".portfolio-item:not(.hidden)");
                gsap.to(visibleItems, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power2.out",
                    overwrite: true
                });
            }, 50);
        });
    }
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
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxCounter = document.getElementById("lightboxCounter");
    
    // Crossfade animation for image
    gsap.to(lightboxImage, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            lightboxImage.src = data.image;
            lightboxImage.alt = data.title;
            gsap.to(lightboxImage, { opacity: 1, duration: 0.3 });
        }
    });
    
    // Format category
    const formatCategory = (cat) => {
        const map = {
            'bodas': 'Bodas',
            'quinceaneras': '15 Años',
            'babyshowers': 'Baby Showers',
            'eventos': 'Eventos y Cumpleaños',
            'deportes': 'Deportes',
            'fiestas': 'Eventos y Cumpleaños'
        };
        return map[cat] || cat;
    };
    
    if(lightboxCounter) {
        lightboxCounter.textContent = `${currentImageIndex + 1} / ${portfolioData.length}`;
    }
    document.getElementById("lbCategory").textContent = formatCategory(data.category);
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

    // Touch swipe navigation
    let touchStartX = 0;
    let touchEndX = 0;
    
    const lightbox = document.getElementById("lightbox");
    
    lightbox.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (!lightbox.classList.contains("active")) return;
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextImage(); // Swipe left -> next
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            prevImage(); // Swipe right -> prev
        }
    }
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
    const PARTICLE_COUNT = window.innerWidth < 768 ? 80 : 200;

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
            this.radius = Math.random() * 2.0 + 0.5;
            this.alpha = 0;
            this.targetAlpha = Math.random() * 0.4 + 0.1; // Reduced opacity
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
            ctx.fillStyle = `rgba(232, 145, 178, ${this.alpha})`; // Pink
            ctx.fill();
            
            // Optional: Add subtle glow
            ctx.shadowBlur = 4;
            ctx.shadowColor = `rgba(232, 145, 178, ${this.alpha * 0.5})`;
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
