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
        page_radio: {
            title: "Reconfigurable Computing Applications in Radio Astronomy DSP",
            back: "← Back to Projects",
            overview: {
                title: "Project Overview",
                p1: "This project focuses on developing reconfigurable computing applications for digital signal processing in radio astronomy as part of the BINGO (Baryon Acoustic Oscillations in Neutral Gas Observations) radiotelescope project at the Federal University of Campina Grande (UFCG).",
                p2: "The work involves utilizing FPGA-based systems to implement real-time DSP algorithms for processing cosmological signals, enabling the study of large-scale structures in the universe through neutral hydrogen observations."
            },
            context: {
                title: "Research Context",
                position: "Position:",
                institution: "Institution:",
                period: "Period:",
                funding: "Funding:",
                desc: "The BINGO project aims to map the distribution of neutral hydrogen in the universe using intensity mapping techniques, requiring sophisticated real-time signal processing capabilities to handle the massive data throughput from the radio telescope."
            },
            tech: {
                title: "Technical Details",
                key_title: "Key Technologies",
                key_1: "FPGA Platforms: Xilinx devices for hardware acceleration",
                key_2: "Development Tools: Vivado Design Suite for HDL synthesis and implementation",
                key_3: "Programming: VHDL/Verilog for hardware description, Python/C++ for control and analysis",
                key_4: "Signal Processing: FFT, channelization, filtering, and correlation algorithms",
                focus_title: "Implementation Focus",
                focus_1: "Real-time spectral analysis of radio frequency signals",
                focus_2: "High-throughput data processing for cosmological observations",
                focus_3: "Energy-efficient computation for continuous operation",
                focus_4: "Hardware-optimized algorithms for radio interferometry"
            },
            apps: {
                title: "Applications",
                app1_title: "Intensity Mapping",
                app1_desc: "Processing signals for large-scale structure mapping of the universe through neutral hydrogen emissions",
                app2_title: "Radio Interferometry",
                app2_desc: "Real-time correlation and beamforming for multi-antenna radio telescope arrays",
                app3_title: "RFI Mitigation",
                app3_desc: "Radio frequency interference detection and suppression in real-time",
                app4_title: "Data Reduction",
                app4_desc: "On-the-fly data compression and processing to manage large data volumes"
            },
            impact: {
                title: "Research Impact",
                desc: "This work contributes to the advancement of radio astronomy instrumentation by leveraging reconfigurable computing to achieve:",
                list_1: "Significant reduction in data processing latency compared to traditional CPU-based approaches",
                list_2: "Lower power consumption for continuous astronomical observations",
                list_3: "Scalable architectures adaptable to various radio astronomy applications",
                list_4: "Enhanced signal-to-noise ratio through optimized digital filtering techniques"
            }
        },
        page_drone: {
            title: "AI-based Fault Detection in Drones Using FPGA",
            back: "← Back to Projects",
            overview: {
                title: "Project Overview",
                p1: "This project developed an embedded system for real-time failure diagnosis in drones using artificial intelligence and chaos-based detection methods (SAC-DM) implemented on FPGA platforms.",
                p2: "The system enables autonomous UAVs to detect and classify mechanical and electrical failures in real-time, improving flight safety and enabling predictive maintenance for commercial and industrial drone applications."
            },
            context: {
                title: "Research Context",
                position: "Position:",
                institution: "Institution:",
                period: "Period:",
                funding: "Funding:",
                desc: "This research focused on adaptive complex systems and reconfigurable computing, investigating how chaos theory principles can be applied to real-time fault detection in autonomous systems."
            },
            tech: {
                title: "Technical Approach",
                sacdm_title: "SAC-DM Methodology",
                sacdm_desc: "SAC-DM (Statistical Analysis of Chaos - Diagnostic Method) is a chaos theory-based approach for detecting anomalies in complex dynamic systems. The method analyzes the chaotic behavior of sensor data to identify deviations from normal operational patterns.",
                components_title: "Key Components",
                comp1: "FPGA Implementation: Hardware acceleration for real-time processing of sensor streams",
                comp2: "AI/ML Integration: Machine learning models for fault classification and prediction",
                comp3: "Chaos Analysis: Real-time calculation of Lyapunov exponents and other chaotic indicators",
                comp4: "Sensor Fusion: Integration of multiple sensor modalities (IMU, vibration, current sensors)"
            },
            faults: {
                title: "Detectable Fault Types",
                electrical: "Electrical Failures",
                mechanical: "Mechanical Failures",
                control: "Control Anomalies",
                env: "Environmental Factors"
            },
            features: {
                title: "Key Features",
                f1: "Real-time Processing: Hardware acceleration enables fault detection within milliseconds, critical for safe autonomous operation",
                f2: "High Accuracy: AI-based classification achieves robust fault identification even under varying flight conditions",
                f3: "Low Power Consumption: FPGA implementation provides efficient computation suitable for battery-powered UAVs",
                f4: "Predictive Maintenance: Early fault detection enables proactive maintenance scheduling and extends drone lifespan",
                f5: "Adaptive Learning: System can be retrained for different drone platforms and operational environments"
            },
            impact: {
                title: "Research Impact",
                desc: "This work demonstrates the viability of implementing sophisticated AI-based diagnostics on resource-constrained embedded platforms. The combination of chaos theory and machine learning provides a novel approach to fault detection that is both computationally efficient and highly accurate."
            }
        },
        page_quantum: {
            title: "Quantum Transport Simulations in Mesoscopic Systems",
            back: "← Back to Projects",
            overview: {
                title: "Project Overview",
                p1: "This project encompasses my PhD research focused on numerical simulations and statistical analysis of quantum transport phenomena in mesoscopic systems, with particular emphasis on the Altland-Zirnbauer symmetry classification.",
                p2: "The research investigated fundamental quantum properties including entanglement, conductance fluctuations, and thermodynamic uncertainty relations in nanoscale devices using advanced computational methods and random matrix theory."
            },
            thesis: {
                title: "PhD Thesis",
                venue: "Institution:",
                period: "Period:",
                advisor: "Advisor:",
                area: "Area:"
            },
            focus: {
                title: "Research Focus",
                az_title: "Altland-Zirnbauer Classification",
                az_desc: "The Altland-Zirnbauer (AZ) classification is a comprehensive framework for categorizing random matrix ensembles based on fundamental symmetries (time-reversal, particle-hole, and chiral symmetry). This classification has profound implications for understanding quantum transport in mesoscopic systems.",
                areas_title: "Key Research Areas",
                area_1: "Quantum Entanglement: Investigation of entanglement properties in open quantum systems using the Keldysh formalism",
                area_2: "Conductance Fluctuations: Statistical analysis of universal conductance fluctuations across different AZ symmetry classes",
                area_3: "Random Matrix Theory: Application of RMT to model chaotic quantum systems and predict statistical properties",
                area_4: "Thermodynamic Uncertainty Relations: Exploring fundamental limits on precision in mesoscopic devices"
            },
            master: {
                title: "Master's Thesis",
                venue: "Institution:",
                period: "Period:",
                advisor: "Advisor:",
                desc: "This work investigated how classical chaos in the underlying dynamics of quantum dots influences quantum entanglement generation. Using the Keldysh non-equilibrium Green's function formalism, the research established connections between chaos, decoherence, and quantum correlations."
            },
            contribution: {
                title: "Key Scientific Contributions",
                c1: "Universal Behavior: Demonstrated universal statistical properties across different AZ symmetry classes in mesoscopic transport",
                c2: "Entanglement-Chaos Connection: Established quantitative relationships between classical chaos and quantum entanglement generation",
                c3: "Thermodynamic Bounds: Derived and verified thermodynamic uncertainty relations in quantum transport scenarios",
                c4: "Computational Framework: Developed efficient numerical methods for large-scale quantum transport simulations"
            },
            impact: {
                title: "Research Impact",
                desc: "This work contributes to the fundamental understanding of quantum transport in nanoscale devices, with implications for:",
                list_1: "Design principles for quantum devices and quantum computing architectures",
                list_2: "Understanding decoherence mechanisms in open quantum systems",
                list_3: "Predicting performance limits of mesoscopic sensors and detectors",
                list_4: "Bridging classical chaos theory and quantum information theory"
            }
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
        page_radio: {
            title: "Computação Reconfigurável em DSP para Radioastronomia",
            back: "← Voltar aos Projetos",
            overview: {
                title: "Visão Geral do Projeto",
                p1: "Este projeto envolve o desenvolvimento de sistemas de processamento digital de sinais (DSP) de alto desempenho usando arrays de portas programáveis em campo (FPGAs) para o radiotelescópio BINGO.",
                p2: "O BINGO (Baryon Acoustic Oscillations in Neutral Gas Observations) é um radiotelescópio único projetado para mapear a intensidade do gás hidrogênio neutro em distâncias cosmológicas, lançando luz sobre a natureza da Energia Escura."
            },
            context: {
                title: "Contexto da Pesquisa",
                position: "Cargo:",
                institution: "Instituição:",
                period: "Período:",
                funding: "Financiamento:",
                desc: "Trabalhando com a colaboração BINGO para projetar e implementar os sistemas digitais de backend responsáveis ​​pelo processamento de gigabytes de dados por segundo da cadeia de receptores do telescópio."
            },
            tech: {
                title: "Detalhes Técnicos",
                key_title: "Tecnologias Chave",
                key_1: "Plataformas FPGA: Dispositivos Xilinx para aceleração de hardware",
                key_2: "Ferramentas de Desenvolvimento: Vivado Design Suite para síntese e implementação HDL",
                key_3: "Programação: VHDL/Verilog para descrição de hardware, Python/C++ para controle e análise",
                key_4: "Processamento de Sinais: FFT, canalização, filtragem e algoritmos de correlação",
                focus_title: "Foco da Implementação",
                focus_1: "Análise espectral em tempo real de sinais de radiofrequência",
                focus_2: "Processamento de dados de alta vazão para observações cosmológicas",
                focus_3: "Computação energeticamente eficiente para operação contínua",
                focus_4: "Algoritmos otimizados por hardware para radiointerferometria"
            },
            apps: {
                title: "Aplicações",
                app1_title: "Mapeamento de Intensidade",
                app1_desc: "Processamento de sinais para mapeamento de estrutura em larga escala do universo por meio de emissões de hidrogênio neutro",
                app2_title: "Radiointerferometria",
                app2_desc: "Correlação e formação de feixe em tempo real para matrizes de radiotelescópios de múltiplas antenas",
                app3_title: "Mitigação de RFI",
                app3_desc: "Detecção e supressão de interferência de radiofrequência em tempo real",
                app4_title: "Redução de Dados",
                app4_desc: "Compressão e processamento de dados on-the-fly para gerenciar grandes volumes de dados"
            },
            impact: {
                title: "Impacto da Pesquisa",
                desc: "Este trabalho contribui para o avanço da instrumentação de radioastronomia, alavancando a computação reconfigurável para alcançar:",
                list_1: "Redução significativa na latência de processamento de dados em comparação com abordagens tradicionais baseadas em CPU",
                list_2: "Menor consumo de energia para observações astronômicas contínuas",
                list_3: "Arquiteturas escaláveis adaptáveis a várias aplicações de radioastronomia",
                list_4: "Relação sinal-ruído aprimorada por meio de técnicas de filtragem digital otimizadas"
            }
        },
        page_drone: {
            title: "Detecção de Falhas em Drones Baseada em IA Usando FPGA",
            back: "← Voltar aos Projetos",
            overview: {
                title: "Visão Geral do Projeto",
                p1: "Este projeto desenvolveu um sistema embarcado para diagnóstico de falhas em tempo real em drones usando inteligência artificial e métodos de detecção baseados no caos (SAC-DM) implementados em plataformas FPGA.",
                p2: "O sistema permite que VANTs autônomos detectem e classifiquem falhas mecânicas e elétricas em tempo real, melhorando a segurança de voo e permitindo manutenção preditiva para aplicações comerciais e industriais de drones."
            },
            context: {
                title: "Contexto da Pesquisa",
                position: "Cargo:",
                institution: "Instituição:",
                period: "Período:",
                funding: "Financiamento:",
                desc: "Esta pesquisa focou em sistemas complexos adaptativos e computação reconfigurável, investigando como princípios da teoria do caos podem ser aplicados à detecção de falhas em tempo real em sistemas autônomos."
            },
            tech: {
                title: "Abordagem Técnica",
                sacdm_title: "Metodologia SAC-DM",
                sacdm_desc: "SAC-DM (Statistical Analysis of Chaos - Diagnostic Method) é uma abordagem baseada na teoria do caos para detectar anomalias em sistemas dinâmicos complexos. O método analisa o comportamento caótico dos dados do sensor para identificar desvios dos padrões operacionais normais.",
                components_title: "Componentes Principais",
                comp1: "Implementação em FPGA: Aceleração de hardware para processamento em tempo real de fluxos de sensores",
                comp2: "Integração de IA/ML: Modelos de aprendizado de máquina para classificação e previsão de falhas",
                comp3: "Análise do Caos: Cálculo em tempo real de expoentes de Lyapunov e outros indicadores caóticos",
                comp4: "Fusão de Sensores: Integração de múltiplas modalidades de sensores (IMU, vibração, sensores de corrente)"
            },
            faults: {
                title: "Tipos de Falhas Detectáveis",
                electrical: "Falhas Elétricas",
                mechanical: "Falhas Mecânicas",
                control: "Anomalias de Controle",
                env: "Fatores Ambientais"
            },
            features: {
                title: "Principais Características",
                f1: "Processamento em Tempo Real: A aceleração de hardware permite detecção de falhas em milissegundos, crítica para operação autônoma segura",
                f2: "Alta Precisão: A classificação baseada em IA alcança identificação robusta de falhas mesmo sob condições de voo variadas",
                f3: "Baixo Consumo de Energia: A implementação em FPGA fornece computação eficiente adequada para VANTs alimentados por bateria",
                f4: "Manutenção Preditiva: A detecção precoce de falhas permite agendamento proativo de manutenção e estende a vida útil do drone",
                f5: "Aprendizado Adaptativo: O sistema pode ser retreinado para diferentes plataformas de drones e ambientes operacionais"
            },
            impact: {
                title: "Impacto da Pesquisa",
                desc: "Este trabalho demonstra a viabilidade de implementar diagnósticos sofisticados baseados em IA em plataformas embarcadas com recursos limitados. A combinação de teoria do caos e aprendizado de máquina fornece uma nova abordagem para detecção de falhas que é computacionalmente eficiente e altamente precisa."
            }
        },
        page_quantum: {
            title: "Simulações de Transporte Quântico em Sistemas Mesoscópicos",
            back: "← Voltar aos Projetos",
            overview: {
                title: "Visão Geral do Projeto",
                p1: "Este projeto abrange minha pesquisa de doutorado focada em simulações numéricas e análise estatística de fenômenos de transporte quântico em sistemas mesoscópicos, com ênfase particular na classificação de simetria de Altland-Zirnbauer.",
                p2: "A pesquisa investigou propriedades quânticas fundamentais, incluindo entrelaçamento, flutuações de condutância e relações de incerteza termodinâmica em dispositivos em nanoescala usando métodos computacionais avançados e teoria de matrizes aleatórias."
            },
            thesis: {
                title: "Tese de Doutorado",
                venue: "Instituição:",
                period: "Período:",
                advisor: "Orientador:",
                area: "Área:"
            },
            focus: {
                title: "Foco da Pesquisa",
                az_title: "Classificação Altland-Zirnbauer",
                az_desc: "A classificação Altland-Zirnbauer (AZ) é uma estrutura abrangente para categorizar conjuntos de matrizes aleatórias com base em simetrias fundamentais. Esta classificação tem implicações profundas para a compreensão do transporte quântico em sistemas mesoscópicos.",
                areas_title: "Principais Áreas de Pesquisa",
                area_1: "Entrelaçamento Quântico: Investigação de propriedades de entrelaçamento em sistemas quânticos abertos usando o formalismo Keldysh",
                area_2: "Flutuações de Condutância: Análise estatística de flutuações universais de condutância em diferentes classes de simetria AZ",
                area_3: "Teoria de Matrizes Aleatórias: Aplicação de RMT para modelar sistemas quânticos caóticos e prever propriedades estatísticas",
                area_4: "Relações de Incerteza Termodinâmica: Explorando limites fundamentais na precisão em dispositivos mesoscópicos"
            },
            master: {
                title: "Dissertação de Mestrado",
                venue: "Instituição:",
                period: "Período:",
                advisor: "Orientador:",
                desc: "Este trabalho investigou como o caos clássico na dinâmica subjacente de pontos quânticos influencia a geração de entrelaçamento quântico. Usando o formalismo de função de Green de não equilíbrio de Keldysh, a pesquisa estabeleceu conexões entre caos, decoerência e correlações quânticas."
            },
            contribution: {
                title: "Principais Contribuições Científicas",
                c1: "Comportamento Universal: Demonstrou propriedades estatísticas universais em diferentes classes de simetria AZ no transporte mesoscópico",
                c2: "Conexão Entrelaçamento-Caos: Estabeleceu relações quantitativas entre caos clássico e geração de entrelaçamento quântico",
                c3: "Limites Termodinâmicos: Derivou e verificou relações de incerteza termodinâmica em cenários de transporte quântico",
                c4: "Estrutura Computacional: Desenvolveu métodos numéricos eficientes para simulações de transporte quântico em larga escala"
            },
            impact: {
                title: "Impacto da Pesquisa",
                desc: "Este trabalho contribui para o entendimento fundamental do transporte quântico em dispositivos em nanoescala, com implicações para:",
                list_1: "Princípios de design para dispositivos quânticos e arquiteturas de computação quântica",
                list_2: "Compreensão de mecanismos de decoerência em sistemas quânticos abertos",
                list_3: "Previsão de limites de desempenho de sensores e detectores mesoscópicos",
                list_4: "União entre a teoria do caos clássico e a teoria da informação quântica"
            }
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
