const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

function changeLanguage(lang) {
  /* PORTUGUESE MODE */
  if (lang === "Portuguese") {
    lang = "Portuguese";
    document.getElementById("projectsNav").innerHTML = "Projetos";
    document.getElementById("aboutNav").innerHTML = "Sobre";
    document.getElementById("contactNav").innerHTML = "Contato";
    document.getElementById("resumeNav").innerHTML = "Currículo";
    document.getElementById("myName").innerHTML =
      "Olá, meu nome é <span>Piero Friedrich</span>";
    document.getElementById("profession").innerHTML =
      "Desenvolvedor de Software";
    document.getElementById("paragraph1").innerHTML =
      "Eu desenvolvo websites responsivos com foco em experiência do usuário, acessibilidade e funcionalidades.";
    document.getElementById("paragraph2").innerHTML =
      "Sou estudante me especializando em Desenvolvimento Web Full-Stack, atualmente estudando Computer Studies na Langara College, em Vancouver, Canadá.";
    document.getElementById("projectHeader").innerHTML =
      "Projetos dos quais me orgulho";
    document.getElementById("currentProject").innerHTML =
      "Projeto atual em progresso";
    document.getElementById("autoMarketplaceDescription").innerHTML =
      "Um marketplace responsável por conectar compradores e vendedores de automóveis. O website disponibiliza todos os carros disponíveis para compra, com opções de filtros para especificar preço, marca, dentro outras propriedades. O vendedor pode preencher um formulário para armazenar seu carro na base de dados para que ele seja visualizado por outros usuários.";
    document.getElementById("latestProject").innerHTML = "Projeto mais recente";
    document.getElementById("gamingSpot").innerHTML =
      "Gaming Spot - Loja de Vídeo Games";
    document.getElementById("gamingSpotDescription").innerHTML =
      "Gaming Spot é um website onde você encontrará diversos jogos de PlayStation, Xbox e Nintendo Switch. O website consiste em uma página home, um catálogo de games para cada console, uma página para jogos em promoção e uma página de contato para interagir com o cliente. A Gaming Spot foi desenvolvida para diferentes dispositivos para possibilitar o maior número de acessos possível aos produtos da loja.";
    document.getElementById("technologies").innerHTML =
      "Tecnologias utilizadas incluem:";
    document.getElementById("gameProject").innerHTML = "Projeto de Jogo";
    document.getElementById("wordGuesserDescription").innerHTML =
      "Word Guesser consiste em um jogo onde o jogador precisa adivinhar a palavra do dia, escolhida aleatoriamente por uma API. O jogador tem 6 tentativas para escolher uma palavra válida no dicionário inglês e receber diferentes cores como dicas para o próximo turno. O jogo foi inspirado no famoso Wordle, atualmente pertencente ao The New York Times.";
    document.getElementById("contactMe").innerHTML = "Contate-Me";
    document.getElementById("contactInfo").innerHTML =
      "Estou sempre interessado em ouvir sobre novas oportunidades relacionadas a desenvolvimento web e de software.";
    document.getElementById("emailMe").innerHTML = "Me mande um e-mail";
    document.getElementById("reference").innerHTML =
      "Piero Friedrich &middot; Desenvolvedor de Software";
    document.getElementById(
      "copyrights"
    ).innerHTML = `&copy; ${currentYear} Piero Friedrich. Todos os direitos reservados.`;
    document.getElementById("essentialProject").innerHTML = "Projeto Essencial";
    document.getElementById("iosCalculator").innerHTML = "Calculadora IOS";
    document.getElementById("iosCalculatorDescription").innerHTML =
      'Uma implementação web do modelo IOS de calculadora, com as mesmas funcionalidades e características do famoso design da Apple. Ela pode ser acessada através deste <a href="https://htmlpreview.github.io/?https://github.com/PieroFriedrich/IosCalculator/blob/main/index.html" target="_blank">link</a>.';
    /* ENGLISH MODE */
  } else {
    document.getElementById("projectsNav").innerHTML = "Projects";
    document.getElementById("aboutNav").innerHTML = "About";
    document.getElementById("contactNav").innerHTML = "Contact";
    document.getElementById("resumeNav").innerHTML = "Resume";
    document.getElementById("myName").innerHTML =
      "Hi, my name is <span>Piero Friedrich</span>";
    document.getElementById("profession").innerHTML = "Software Developer";
    document.getElementById("paragraph1").innerHTML =
      "I develop responsive websites, focusing on user experience, accessibility and functionalities.";
    document.getElementById("paragraph2").innerHTML =
      "I'm a student specializing in Full-Stack Web Development, currently studying Computer Studies in Langara College.";
    document.getElementById("projectHeader").innerHTML =
      "Projects I'm proud of";

    document.getElementById("currentProject").innerHTML =
      "Current On-Going Project";
    document.getElementById("autoMarketplaceDescription").innerHTML =
      "A marketplace responsible for connecting car buyers and sellers. The website displays all cars available for purchase, allowing the customer to filter by price, brand and other properties. The seller can process a form to store their cars into the database and display to other users.";

    document.getElementById("latestProject").innerHTML = "Latest Project";
    document.getElementById("gamingSpot").innerHTML =
      "Gaming Spot - Video Game Store";
    document.getElementById("gamingSpotDescription").innerHTML =
      "Gaming Spot is a website where you will find lots of games from PlayStation, XBox and Nintendo Switch. The website consists on a homepage, a game catalog for each console, a page for games on sale and a contact page to interact with the customer. The Gaming Spot was developed for different devices to enable the highest number of customers to access the store products.";
    document.getElementById("technologies").innerHTML =
      "Technologies used include:";
    document.getElementById("gameProject").innerHTML = "Game Project";
    document.getElementById("wordGuesserDescription").innerHTML =
      "Word Guesser consists of a game where the player needs to guess the right word of the day,chosen randomly by an API. The player has 6 attempts to choose a valid English word and receive different colors as hints for the next turn. The game was inspired in the famous Wordle game, currently owned by The New York Times.";
    document.getElementById("contactMe").innerHTML = "Contact me";
    document.getElementById("contactInfo").innerHTML =
      "I'm always interested in hearing about new web and software development opportunities.";
    document.getElementById("emailMe").innerHTML = "Email me";
    document.getElementById("reference").innerHTML =
      "Piero Friedrich &middot; Software Developer";
    document.getElementById(
      "copyrights"
    ).innerHTML = `&copy; ${currentYear} Piero Friedrich. All rights reserved.`;
    document.getElementById("essentialProject").innerHTML = "Essential Project";
    document.getElementById("iosCalculator").innerHTML = "IOS Calculator";
    document.getElementById("iosCalculatorDescription").innerHTML =
      "A Web implementation of a calculator in the IOS Model, with the same functionalities and features of Apple's famous design.";
  }
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

  // Initial check when page loads
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);
});
