
"use strict";

/* CONFIGURAÇÕES */

const CONFIG = {
  instagram: "", // Insira seu @ sem o símbolo
  whatsapp: "",  // Número com DDD, opcional
  whatsappAvailable: false
};

/* TRADUÇÕES */

const translations = {
  pt: {
    pageTitle: "Caio Sohn — Digital Studio",
    pageDescription: "Desenvolvimento de sites, inteligência artificial e automações.",
    navAbout: "SOBRE",
    navServices: "SERVIÇOS",
    navProjects: "PROJETOS",
    navContact: "CONTATO",
    system: "DIGITAL STUDIO / SISTEMA ONLINE",
    heroTitle: "CRIANDO O<br>FUTURO DIGITAL<span class='period'>.</span>",
    heroDescription: "Sites, inteligência artificial e automações. Tecnologia e design a serviço de novas ideias.",
    viewProjects: "VER PROJETOS",
    contactButton: "ENTRAR EM CONTATO",
    scroll: "EXPLORAR",

    aboutLabel: "APRESENTAÇÃO",
    aboutTitle: "TECNOLOGIA<br>COM <em>PROPÓSITO.</em>",
    aboutText1: "Desenvolvo experiências digitais que conectam design, tecnologia e estratégia.",
    aboutText2: "Meu trabalho é focado na criação de sites, landing pages, aplicações com inteligência artificial e automações que simplificam processos e apresentam negócios de forma profissional.",
    exploreServices: "EXPLORAR SERVIÇOS",

    servicesLabel: "O QUE EU DESENVOLVO",
    servicesTitle: "SOLUÇÕES<br>DIGITAIS<span class='period'>.</span>",
    servicesIntro: "Desenvolvimento focado em funcionalidade, clareza e identidade visual.",
    service1Title: "SITES & LANDING PAGES",
    service1Desc: "Desenvolvimento de experiências web responsivas, modernas e orientadas à apresentação e conversão.",
    service2Title: "INTELIGÊNCIA ARTIFICIAL",
    service2Desc: "Desenvolvimento de soluções que utilizam inteligência artificial para criar novas possibilidades de interação e atendimento.",
    service3Title: "AUTOMAÇÕES & SISTEMAS",
    service3Desc: "Integrações e processos automatizados para organizar informações, conectar ferramentas e reduzir tarefas repetitivas.",

    projectsLabel: "TRABALHOS SELECIONADOS",
    projectsTitle: "PROJETOS<br>EM DESTAQUE<span class='period'>.</span>",
    projectsIntro: "Conceitos que demonstram minha abordagem de desenvolvimento e design.",
    project1Desc: "Landing page conceitual para estética automotiva, com identidade premium, apresentação de serviços e orçamento.",
    project2Desc: "Conceito de interface conversacional para uma aplicação com inteligência artificial.",
    projectDisclaimer: "Projetos conceituais apresentados como demonstrações, não como trabalhos de clientes.",

    contactLabel: "INICIAR UMA CONVERSA",
    contactBadge: "CONTATO PROFISSIONAL",
    contactTitle: "VAMOS CRIAR<br>ALGO <em>NOVO.</em>",
    contactDescription: "Tem um projeto em mente? Entre em contato para conversar sobre sua ideia.",
    accessProfile: "ACESSAR PERFIL ↗",
    profilePending: "PERFIL EM CONFIGURAÇÃO",
    whatsappUnavailable: "TEMPORARIAMENTE INDISPONÍVEL",
    backTop: "VOLTAR AO TOPO ↑"
  },

  en: {
    pageTitle: "Caio Sohn — Digital Studio",
    pageDescription: "Website development, artificial intelligence and automation.",
    navAbout: "ABOUT",
    navServices: "SERVICES",
    navProjects: "PROJECTS",
    navContact: "CONTACT",
    system: "DIGITAL STUDIO / SYSTEM ONLINE",
    heroTitle: "BUILDING THE<br>DIGITAL FUTURE<span class='period'>.</span>",
    heroDescription: "Websites, artificial intelligence and automation. Technology and design bringing new ideas to life.",
    viewProjects: "VIEW PROJECTS",
    contactButton: "GET IN TOUCH",
    scroll: "EXPLORE",

    aboutLabel: "INTRODUCTION",
    aboutTitle: "TECHNOLOGY<br>WITH <em>PURPOSE.</em>",
    aboutText1: "I develop digital experiences that connect design, technology and strategy.",
    aboutText2: "My work focuses on creating websites, landing pages, AI-powered applications and automation solutions that simplify processes and give businesses a professional digital presence.",
    exploreServices: "EXPLORE SERVICES",

    servicesLabel: "WHAT I DEVELOP",
    servicesTitle: "DIGITAL<br>SOLUTIONS<span class='period'>.</span>",
    servicesIntro: "Development focused on functionality, clarity and visual identity.",
    service1Title: "WEBSITES & LANDING PAGES",
    service1Desc: "Modern, responsive web experiences designed to showcase businesses and turn visitors into commercial opportunities.",
    service2Title: "ARTIFICIAL INTELLIGENCE",
    service2Desc: "AI-powered solutions that create new possibilities for digital interaction and customer service.",
    service3Title: "AUTOMATION & SYSTEMS",
    service3Desc: "Integrations and automated workflows that organize information, connect tools and reduce repetitive tasks.",

    projectsLabel: "SELECTED WORK",
    projectsTitle: "FEATURED<br>PROJECTS<span class='period'>.</span>",
    projectsIntro: "Concepts that demonstrate my approach to development and design.",
    project1Desc: "A conceptual automotive detailing landing page featuring premium branding, service presentation and quote requests.",
    project2Desc: "A conversational interface concept for an artificial intelligence application.",
    projectDisclaimer: "Conceptual projects are presented as demonstrations, not as client work.",

    contactLabel: "START A CONVERSATION",
    contactBadge: "PROFESSIONAL INQUIRIES",
    contactTitle: "LET'S BUILD<br>SOMETHING <em>NEW.</em>",
    contactDescription: "Have a project in mind? Get in touch to discuss your idea.",
    accessProfile: "VISIT PROFILE ↗",
    profilePending: "PROFILE NOT CONFIGURED",
    whatsappUnavailable: "TEMPORARILY UNAVAILABLE",
    backTop: "BACK TO TOP ↑"
  },

  es: {
    pageTitle: "Caio Sohn — Estudio Digital",
    pageDescription: "Desarrollo web, inteligencia artificial y automatizaciones.",
    navAbout: "SOBRE MÍ",
    navServices: "SERVICIOS",
    navProjects: "PROYECTOS",
    navContact: "CONTACTO",
    system: "ESTUDIO DIGITAL / SISTEMA EN LÍNEA",
    heroTitle: "CREANDO EL<br>FUTURO DIGITAL<span class='period'>.</span>",
    heroDescription: "Sitios web, inteligencia artificial y automatizaciones. Tecnología y diseño al servicio de nuevas ideas.",
    viewProjects: "VER PROYECTOS",
    contactButton: "CONTACTAR",
    scroll: "EXPLORAR",

    aboutLabel: "PRESENTACIÓN",
    aboutTitle: "TECNOLOGÍA<br>CON <em>PROPÓSITO.</em>",
    aboutText1: "Desarrollo experiencias digitales que conectan diseño, tecnología y estrategia.",
    aboutText2: "Mi trabajo se centra en la creación de sitios web, landing pages, aplicaciones con inteligencia artificial y automatizaciones que simplifican procesos y presentan negocios de forma profesional.",
    exploreServices: "EXPLORAR SERVICIOS",

    servicesLabel: "LO QUE DESARROLLO",
    servicesTitle: "SOLUCIONES<br>DIGITALES<span class='period'>.</span>",
    servicesIntro: "Desarrollo enfocado en funcionalidad, claridad e identidad visual.",
    service1Title: "SITIOS WEB & LANDING PAGES",
    service1Desc: "Experiencias web modernas y adaptables, diseñadas para presentar negocios y convertir visitantes en oportunidades comerciales.",
    service2Title: "INTELIGENCIA ARTIFICIAL",
    service2Desc: "Soluciones basadas en inteligencia artificial que crean nuevas posibilidades de interacción y atención al cliente.",
    service3Title: "AUTOMATIZACIONES & SISTEMAS",
    service3Desc: "Integraciones y procesos automatizados para organizar información, conectar herramientas y reducir tareas repetitivas.",

    projectsLabel: "TRABAJOS SELECCIONADOS",
    projectsTitle: "PROYECTOS<br>DESTACADOS<span class='period'>.</span>",
    projectsIntro: "Conceptos que demuestran mi enfoque de desarrollo y diseño.",
    project1Desc: "Landing page conceptual para estética automotriz, con identidad prémium, presentación de servicios y solicitud de presupuestos.",
    project2Desc: "Concepto de interfaz conversacional para una aplicación de inteligencia artificial.",
    projectDisclaimer: "Los proyectos conceptuales se presentan como demostraciones, no como trabajos realizados para clientes.",

    contactLabel: "INICIAR UNA CONVERSACIÓN",
    contactBadge: "CONTACTO PROFESIONAL",
    contactTitle: "CREEMOS<br>ALGO <em>NUEVO.</em>",
    contactDescription: "¿Tienes un proyecto en mente? Ponte en contacto para hablar sobre tu idea.",
    accessProfile: "VISITAR PERFIL ↗",
    profilePending: "PERFIL SIN CONFIGURAR",
    whatsappUnavailable: "TEMPORALMENTE NO DISPONIBLE",
    backTop: "VOLVER ARRIBA ↑"
  }
};

/* IDIOMAS */

const languages = {
  pt: "pt-BR",
  en: "en",
  es: "es"
};

let currentLanguage = "pt";

const instagramLink = document.querySelector("#instagramLink");
const instagramLabel = document.querySelector("#instagramLabel");

function updateContact() {
  const dictionary = translations[currentLanguage];

  if (CONFIG.instagram.trim()) {
    const username = CONFIG.instagram
      .trim()
      .replace(/^@/, "");

    instagramLink.href =
      `https://www.instagram.com/${encodeURIComponent(username)}/`;

    instagramLink.classList.remove("disabled");
    instagramLink.removeAttribute("aria-disabled");
    instagramLabel.textContent = dictionary.accessProfile;
  } else {
    instagramLink.removeAttribute("href");
    instagramLink.removeAttribute("target");
    instagramLink.classList.add("disabled");
    instagramLink.setAttribute("aria-disabled", "true");
    instagramLabel.textContent = dictionary.profilePending;
  }

  const whatsappNumber = document.querySelector("#whatsappNumber");

  if (CONFIG.whatsapp) {
    whatsappNumber.textContent = CONFIG.whatsapp;
  } else {
    whatsappNumber.textContent = "";
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLanguage = lang;
  const dictionary = translations[lang];

  document.documentElement.lang = languages[lang];
  document.title = dictionary.pageTitle;

  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", dictionary.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  // Apenas textos HTML previamente definidos
  // no próprio objeto de traduções.

  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    const key = element.dataset.i18nHtml;

    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === lang;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  updateContact();

  try {
    localStorage.setItem("caio-portfolio-lang", lang);
  } catch (_) {
    // O site continua funcionando sem armazenamento.
  }
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

let savedLanguage = "pt";

try {
  const stored = localStorage.getItem("caio-portfolio-lang");

  if (translations[stored]) {
    savedLanguage = stored;
  }
} catch (_) {}

setLanguage(savedLanguage);

/* MENU */

const header = document.querySelector("#header");
const navigation = document.querySelector("#navigation");
const menuToggle = document.querySelector("#menuToggle");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, {
  passive: true
});

updateHeader();

function closeMenu() {
  navigation.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) closeMenu();
});

/* ANIMAÇÕES */

const revealElements = document.querySelectorAll(".reveal");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -30px 0px"
  });

  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}

/* ANO */

document.querySelector("#year").textContent =
  new Date().getFullYear();

// Dentro de pt:
sendDirect: "ENVIE SUA DÚVIDA ↗",

// Dentro de en:
sendDirect: "SEND ME A MESSAGE ↗",

// Dentro de es:
sendDirect: "ENVÍAME TU CONSULTA ↗",

