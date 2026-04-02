let typingAnimation;
const currentYear = new Date().getFullYear();

const translations = {
  English: {
    projectsNav: "Projects",
    aboutNav: "About",
    contactNav: "Contact",
    resumeNav: "Resume",
    profession: "Software Developer",
    paragraph1:
      "I develop responsive websites, focusing on user experience, accessibility and functionalities.",
    projectHeader: "Projects",
    readingBreakLabel: "Most Recent Project",
    readingBreakDescription:
      "A book tracking website where you can explore new books, set reading goals, find trending books and check your progress.",
    lastProject: "Featured Project",
    currentProject: "Web Marketplace Project",
    infiniteThreadDescription:
      "A Tech Forum where users can log in through Google to socialize, collaborate in projects, make questions and help each other through the same platform.",
    autoMarketplaceDescription:
      "A marketplace responsible for connecting car buyers and sellers. The website displays all cars available for purchase, allowing the customer to filter by price, brand and other properties. The seller can process a form to store their cars into the database and display to other users.",
    contactMe: "Contact me",
    contactInfo: "I'm always interested in hearing about new opportunities.",
    emailMe: "Email me",
  },
  French: {
    projectsNav: "Projets",
    aboutNav: "À propos",
    contactNav: "Contact",
    resumeNav: "CV",
    profession: "Développeur Logiciel",
    paragraph1:
      "Je développe des sites web responsifs, en me concentrant sur l'expérience utilisateur, l'accessibilité et les fonctionnalités.",
    projectHeader: "Projets",
    readingBreakLabel: "Projet le plus récent",
    readingBreakDescription:
      "Un site web de suivi de lecture où vous pouvez explorer de nouveaux livres, définir des objectifs de lecture, trouver des livres tendance et suivre votre progression.",
    lastProject: "Projet en vedette",
    currentProject: "Projet de Marketplace Web",
    infiniteThreadDescription:
      "Un forum tech où les utilisateurs peuvent se connecter via Google pour socialiser, collaborer sur des projets, poser des questions et s'entraider sur la même plateforme.",
    autoMarketplaceDescription:
      "Un marketplace responsable de la mise en relation des acheteurs et vendeurs de voitures. Le site affiche toutes les voitures disponibles à l'achat, permettant au client de filtrer par prix, marque et autres propriétés. Le vendeur peut remplir un formulaire pour stocker ses voitures dans la base de données et les afficher aux autres utilisateurs.",
    contactMe: "Contactez-moi",
    contactInfo: "Je suis toujours intéressé par de nouvelles opportunités.",
    emailMe: "Envoyez-moi un e-mail",
  },
  Portuguese: {
    projectsNav: "Projetos",
    aboutNav: "Sobre",
    contactNav: "Contato",
    resumeNav: "Currículo",
    profession: "Desenvolvedor de Software",
    paragraph1:
      "Eu desenvolvo websites responsivos com foco em experiência do usuário, acessibilidade e funcionalidades.",
    projectHeader: "Projetos",
    readingBreakLabel: "Projeto mais recente",
    readingBreakDescription:
      "Um website de rastreamento de leitura onde você pode explorar novos livros, definir metas de leitura, encontrar livros em tendência e acompanhar seu progresso.",
    lastProject: "Projeto em Destaque",
    currentProject: "Projeto de Marketplace Web",
    infiniteThreadDescription:
      "Um Forum Tech onde usuários podem logar através do Google para socializar, colaborar em projetos, fazer perguntas e se ajudarem dentro da mesma plataforma.",
    autoMarketplaceDescription:
      "Um marketplace responsável por conectar compradores e vendedores de automóveis. O website disponibiliza todos os carros disponíveis para compra, com opções de filtros para especificar preço, marca, dentro outras propriedades. O vendedor pode preencher um formulário para armazenar seu carro na base de dados para que ele seja visualizado por outros usuários.",
    contactMe: "Contate-me",
    contactInfo: "Estou sempre interessado em ouvir sobre novas oportunidades.",
    emailMe: "Me mande um e-mail",
  },
};

function changeLanguage(lang) {
  if (typingAnimation) {
    clearTimeout(typingAnimation);
    typingAnimation = null;
  }

  const t = translations[lang];

  Object.entries(t).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  const technologiesLabel = {
    English: "Technologies used include:",
    French: "Les technologies utilisées comprennent :",
    Portuguese: "Tecnologias utilizadas incluem:",
  };
  document.querySelectorAll(".technologies").forEach((el) => {
    el.textContent = technologiesLabel[lang];
  });

  const myNameIntro = {
    English: "Hi, my name is",
    French: "Bonjour, je m'appelle",
    Portuguese: "Olá, meu nome é",
  };
  document.getElementById("myName").innerHTML =
    `${myNameIntro[lang]} <br /><span id='typingArea'>P</span>`;

  const developerTitle = {
    English: "Software Developer",
    French: "Développeur Logiciel",
    Portuguese: "Desenvolvedor de Software",
  };
  document.getElementById("reference").innerHTML =
    `Piero Friedrich &middot; ${developerTitle[lang]}`;

  const allRights = {
    English: "All rights reserved.",
    French: "Tous droits réservés.",
    Portuguese: "Todos os direitos reservados.",
  };
  document.getElementById("copyrights").innerHTML =
    `&copy; ${currentYear} Piero Friedrich. ${allRights[lang]}`;

  setTimeout(startTypingAnimation, 100);
}

function startTypingAnimation() {
  const nameText = "Piero Friedrich";
  const typingArea = document.getElementById("typingArea");
  let index = 1;
  let isDeleting = false;

  function animateName() {
    if (isDeleting) {
      typingArea.textContent = "P" + nameText.slice(1, index--);
      if (index < 1) {
        isDeleting = false;
      }
    } else {
      typingArea.textContent = "P" + nameText.slice(1, index++);
      if (index > nameText.length) {
        isDeleting = true;
        setTimeout(animateName, 1000);
        return;
      }
    }
    typingAnimation = setTimeout(animateName, isDeleting ? 100 : 200);
  }

  animateName();
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section-content");

  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("visible");
      }
    });
  }

  checkScroll();

  window.addEventListener("scroll", checkScroll);

  changeLanguage("English");
});
