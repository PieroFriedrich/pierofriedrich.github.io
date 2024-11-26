let typingAnimation; // Declare a global variable for the animation
const currentYear = new Date().getFullYear();

function changeLanguage(lang) {
  const typingArea = document.getElementById("typingArea");

  // Stop the ongoing animation if it exists
  if (typingAnimation) {
    clearTimeout(typingAnimation);
    typingAnimation = null;
  }

  // Reset the typing area
  typingArea.textContent = "P";

  // Update the page content based on the selected language
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
    document.getElementById("currentProject").textContent =
      "Projeto mais recente";
    document.getElementById("autoMarketplaceDescription").textContent =
      "Um marketplace responsável por conectar compradores e vendedores de automóveis. O website disponibiliza todos os carros disponíveis para compra, com opções de filtros para especificar preço, marca, dentro outras propriedades. O vendedor pode preencher um formulário para armazenar seu carro na base de dados para que ele seja visualizado por outros usuários.";
    document.getElementById("latestProject").textContent = "Projeto Web";
    document.getElementById("gamingSpot").innerHTML = `<a
    href="https://htmlpreview.github.io/?https://github.com/PieroFriedrich/GamingSpot/blob/main/index.html"
    target="_blank"
    >Gaming Spot - Loja de Video-Games</a
  >`;
    document.getElementById("gamingSpotDescription").textContent =
      "Gaming Spot é um website onde você encontrará diversos jogos de PlayStation, Xbox e Nintendo Switch. O website consiste em uma página home, um catálogo de games para cada console, uma página para jogos em promoção e uma página de contato para interagir com o cliente. A Gaming Spot foi desenvolvida para diferentes dispositivos para possibilitar o maior número de acessos possível aos produtos da loja.";
    document.getElementById("technologies").textContent =
      "Tecnologias utilizadas incluem:";
    document.getElementById("gameProject").textContent = "Projeto de Jogo";
    document.getElementById("wordGuesserDescription").textContent =
      "Word Guesser consiste em um jogo onde o jogador precisa adivinhar a palavra do dia, escolhida aleatoriamente por uma API. O jogador tem 6 tentativas para escolher uma palavra válida no dicionário inglês e receber diferentes cores como dicas para o próximo turno. O jogo foi inspirado no famoso Wordle, atualmente pertencente ao The New York Times.";
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
    document.getElementById("currentProject").textContent = "Last Project";
    document.getElementById("autoMarketplaceDescription").textContent =
      "A marketplace responsible for connecting car buyers and sellers. The website displays all cars available for purchase, allowing the customer to filter by price, brand and other properties. The seller can process a form to store their cars into the database and display to other users.";

    document.getElementById("latestProject").textContent = "Web Project";
    document.getElementById("gamingSpot").innerHTML = `<a
    href="https://htmlpreview.github.io/?https://github.com/PieroFriedrich/GamingSpot/blob/main/index.html"
    target="_blank"
    >Gaming Spot - Video Game Store</a
  >`;
    document.getElementById("gamingSpotDescription").textContent =
      "Gaming Spot is a website where you will find lots of games from PlayStation, XBox and Nintendo Switch. The website consists on a homepage, a game catalog for each console, a page for games on sale and a contact page to interact with the customer. The Gaming Spot was developed for different devices to enable the highest number of customers to access the store products.";
    document.getElementById("technologies").textContent =
      "Technologies used include:";
    document.getElementById("gameProject").textContent = "Game Project";
    document.getElementById("wordGuesserDescription").textContent =
      "Word Guesser consists of a game where the player needs to guess the right word of the day,chosen randomly by an API. The player has 6 attempts to choose a valid English word and receive different colors as hints for the next turn. The game was inspired in the famous Wordle game, currently owned by The New York Times.";
    document.getElementById("contactMe").textContent = "Contact me";
    document.getElementById("contactInfo").textContent =
      "I'm always interested in hearing about new opportunities.";
    document.getElementById("emailMe").textContent = "Email me";
    document.getElementById("reference").innerHTML =
      "Piero Friedrich &middot; Software Developer";
    document.getElementById("copyrights").innerHTML =
      `&copy; ${currentYear} Piero Friedrich. All rights reserved.`;
  }

  // Restart the animation
  startTypingAnimation();
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
    typingAnimation = setTimeout(animateName, isDeleting ? 100 : 200); // Assign the timeout to the global variable
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

  // Start the typing animation when the page loads
  startTypingAnimation();
});

changeLanguage("English");
