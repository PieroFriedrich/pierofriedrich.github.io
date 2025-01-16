let typingAnimation;
const currentYear = new Date().getFullYear();

function changeLanguage(lang) {
  const typingArea = document.getElementById("typingArea");

  if (typingAnimation) {
    clearTimeout(typingAnimation);
    typingAnimation = null;
  }

  typingArea.textContent = "P";

  if (lang === "Portuguese") {
    document.getElementById("projectsNav").textContent = "Projetos";
    document.getElementById("aboutNav").textContent = "Sobre";
    document.getElementById("contactNav").textContent = "Contato";
    document.getElementById("resumeNav").textContent = "Currículo";
    document.getElementById("myName").innerHTML =
      "Olá, meu nome é <br /><span id='typingArea'>P</span>";
    document.getElementById("profession").textContent =
      "Desenvolvedor de Software";
    document.getElementById("paragraph1").textContent =
      "Eu desenvolvo websites responsivos com foco em experiência do usuário, acessibilidade e funcionalidades.";
    document.getElementById("projectHeader").textContent = "Projetos";
    document.getElementById("lastProject").textContent = "Projeto mais recente";
    document.getElementById("currentProject").textContent =
      "Projeto de Marketplace Web";
    document.getElementById("infiniteThreadDescription").textContent =
      "Um Forum Tech onde usuários podem logar através do Google para socializar, colaborar em projetos, fazer perguntas e se ajudarem dentro da mesma plataforma.";
    document.getElementById("autoMarketplaceDescription").textContent =
      "Um marketplace responsável por conectar compradores e vendedores de automóveis. O website disponibiliza todos os carros disponíveis para compra, com opções de filtros para especificar preço, marca, dentro outras propriedades. O vendedor pode preencher um formulário para armazenar seu carro na base de dados para que ele seja visualizado por outros usuários.";
    document.querySelectorAll(".technologies").forEach((element) => {
      element.textContent = "Tecnologias utilizadas incluem:";
    });
    document.getElementById("contactMe").textContent = "Contate-me";
    document.getElementById("contactInfo").textContent =
      "Estou sempre interessado em ouvir sobre novas oportunidades.";
    document.getElementById("emailMe").textContent = "Me mande um e-mail";
    document.getElementById("reference").innerHTML =
      "Piero Friedrich &middot; Desenvolvedor de Software";
    document.getElementById("copyrights").innerHTML =
      `&copy; ${currentYear} Piero Friedrich. Todos os direitos reservados.`;
  } else {
    document.getElementById("projectsNav").textContent = "Projects";
    document.getElementById("aboutNav").textContent = "About";
    document.getElementById("contactNav").textContent = "Contact";
    document.getElementById("resumeNav").textContent = "Resume";
    document.getElementById("myName").innerHTML =
      "Hi, my name is <br /><span id='typingArea'>P</span>";
    document.getElementById("profession").textContent = "Software Developer";
    document.getElementById("paragraph1").textContent =
      "I develop responsive websites, focusing on user experience, accessibility and functionalities.";
    document.getElementById("projectHeader").textContent = "Projects";
    document.getElementById("currentProject").textContent =
      "Web Marketplace Project";
    document.getElementById("infiniteThreadDescription").textContent =
      "A Tech Forum where users can log in through Google to socialize, collaborate in projects, make questions and help each other through the same platform.";
    document.getElementById("autoMarketplaceDescription").textContent =
      "A marketplace responsible for connecting car buyers and sellers. The website displays all cars available for purchase, allowing the customer to filter by price, brand and other properties. The seller can process a form to store their cars into the database and display to other users.";
    document.querySelectorAll(".technologies").forEach((element) => {
      element.textContent = "Technologies used include:";
    });
    document.getElementById("contactMe").textContent = "Contact me";
    document.getElementById("contactInfo").textContent =
      "I'm always interested in hearing about new opportunities.";
    document.getElementById("emailMe").textContent = "Email me";
    document.getElementById("reference").innerHTML =
      "Piero Friedrich &middot; Software Developer";
    document.getElementById("copyrights").innerHTML =
      `&copy; ${currentYear} Piero Friedrich. All rights reserved.`;
  }

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

  startTypingAnimation();
});

changeLanguage("English");
