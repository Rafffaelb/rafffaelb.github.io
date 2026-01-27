// Comprehensive translations for English and Portuguese
const translations = {
    en: {
        nav: {
            about: "About",
            education: "Education",
            research: "Research",
            projects: "Projects",
            publications: "Publications",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            greeting: "Hello, I'm",
            subtitle: "Postdoc Researcher · Signal Processing · Reconfigurable Computing · Real‑time Systems",
            stats: {
                research: "Years Research",
                postdocs: "Postdocs",
                publications: "Publications"
            },
            buttons: {
                viewWork: "View Work",
                downloadCV: "Download CV",
                cvPublications: "CV + Publications"
            }
        },
        about: {
            title: "About Me",
            intro: "I'm a postdoctoral researcher and applied physicist working at the intersection of physics, real‑time digital signal processing, and hardware acceleration.",
            journey: "My research journey began in quantum physics, where I focused on numerical simulations and statistical analysis of quantum transport in mesoscopic systems during my PhD at the Federal University of Paraíba (UFPB).",
            transition: "I've since transitioned to applied engineering, concentrating on adaptive complex systems and reconfigurable computing. My work has spanned from real-time fault detection in drones using chaos theory at TU Dresden to FPGA-based digital signal processing for radio astronomy at the BINGO radiotelescope at UFCG.",
            interestsTitle: "Research Interests"
        },
        education: {
            title: "Education"
        },
        research: {
            title: "Research Experience"
        },
        projects: {
            title: "Projects"
        },
        publications: {
            title: "Publications"
        },
        skills: {
            title: "Skills & Expertise"
        },
        contact: {
            title: "Contact",
            description: "Feel free to reach out for collaborations, research opportunities, or engineering work. I'm always open to discussing new projects and ideas."
        },
        footer: {
            copyright: "© 2026 Rafael A. Batista · Built with HTML + CSS"
        }
    },
    pt: {
        nav: {
            about: "Sobre",
            education: "Formação",
            research: "Pesquisa",
            projects: "Projetos",
            publications: "Publicações",
            skills: "Habilidades",
            contact: "Contato"
        },
        hero: {
            greeting: "Olá, eu sou",
            subtitle: "Pesquisador Pós-doc · Processamento de Sinais · Computação Reconfigurável · Sistemas Tempo Real",
            stats: {
                research: "Anos de Pesquisa",
                postdocs: "Pós-doutorados",
                publications: "Publicações"
            },
            buttons: {
                viewWork: "Ver Trabalhos",
                downloadCV: "Baixar CV",
                cvPublications: "CV + Publicações"
            }
        },
        about: {
            title: "Sobre Mim",
            intro: "Sou um pesquisador de pós-doutorado e físico aplicado trabalhando na interseção entre física, processamento digital de sinais em tempo real e aceleração de hardware.",
            journey: "Minha jornada de pesquisa começou em física quântica, onde me concentrei em simulações numéricas e análise estatística de transporte quântico em sistemas mesoscópicos durante meu doutorado na Universidade Federal da Paraíba (UFPB).",
            transition: "Desde então, fiz a transição para engenharia aplicada, concentrando-me em sistemas complexos adaptativos e computação reconfigurável. Meu trabalho abrangeu desde detecção de falhas em tempo real em drones usando teoria do caos na TU Dresden até processamento digital de sinais baseado em FPGA para radioastronomia no radiotelescópio BINGO na UFCG.",
            interestsTitle: "Interesses de Pesquisa"
        },
        education: {
            title: "Formação Acadêmica"
        },
        research: {
            title: "Experiência em Pesquisa"
        },
        projects: {
            title: "Projetos"
        },
        publications: {
            title: "Publicações"
        },
        skills: {
            title: "Habilidades e Expertise"
        },
        contact: {
            title: "Contato",
            description: "Sinta-se à vontade para entrar em contato para colaborações, oportunidades de pesquisa ou trabalho em engenharia. Estou sempre aberto a discutir novos projetos e ideias."
        },
        footer: {
            copyright: "© 2026 Rafael A. Batista · Construído com HTML + CSS"
        }
    }
};

// Get user's preferred language from localStorage or browser
function getPreferredLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved) return saved;

    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('pt') ? 'pt' : 'en';
}

// Set language
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;

    // Update nav links
    document.querySelectorAll('[data-i18n-nav]').forEach(el => {
        const key = el.getAttribute('data-i18n-nav');
        if (translations[lang].nav[key]) {
            el.textContent = translations[lang].nav[key];
        }
    });

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            if (value[k]) {
                value = value[k];
            }
        }

        if (typeof value === 'string') {
            el.textContent = value;
        }
    });

    // Update stats labels
    const statsLabels = document.querySelectorAll('.stat-label');
    if (statsLabels.length >= 3) {
        statsLabels[0].textContent = translations[lang].hero.stats.research;
        statsLabels[1].textContent = translations[lang].hero.stats.postdocs;
        statsLabels[2].textContent = translations[lang].hero.stats.publications;
    }

    // Update flag button active states
    document.querySelectorAll('.lang-flag').forEach(flag => {
        const flagLang = flag.getAttribute('data-lang');
        if (flagLang === lang) {
            flag.classList.add('active');
        } else {
            flag.classList.remove('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
    const preferredLang = getPreferredLanguage();
    setLanguage(preferredLang);

    // Language toggle - click on individual flags
    document.querySelectorAll('.lang-flag').forEach(flag => {
        flag.addEventListener('click', function () {
            const newLang = this.getAttribute('data-lang');
            setLanguage(newLang);
        });
    });
});
