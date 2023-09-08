function changeLanguage(lang) {
        /* PORTUGUESE MODE */
        if (lang === "Portuguese") {
            lang = "Portuguese";
            document.getElementById("projectsNav").innerHTML = "Projetos";
            document.getElementById("aboutNav").innerHTML = "Sobre";
            document.getElementById("contactNav").innerHTML = "Contato";
            document.getElementById("resumeNav").innerHTML = "Currículo";
            document.getElementById("myName").innerHTML = "Olá, meu nome é <span>Piero Friedrich</span>";
            document.getElementById("profession").innerHTML = "Desenvolvedor de Software";
            document.getElementById("paragraph1").innerHTML = "Eu desenvolvo websites responsivos com foco em experiência do usuário, acessibilidade e funcionalidades.";
            document.getElementById("paragraph2").innerHTML = "Sou estudante me especializando em Desenvolvimento Web Full-Stack, atualmente estudando Computer Studies na Langara College, em Vancouver, Canadá.";
            document.getElementById("projectHeader").innerHTML = "Projetos dos quais me orgulho";
            document.getElementById("latestProject").innerHTML = "Projeto mais recente";
            document.getElementById("gamingSpot").innerHTML = "Gaming Spot - Loja de Vídeo Games";
            document.getElementById("gamingSpotDescription").innerHTML = 'Gaming Spot é um website onde você encontrará diversos jogos de PlayStation, Xbox e Nintendo Switch. O website consiste em uma página home, um catálogo de games para cada console, uma página para jogos em promoção e uma página de contato para interagir com o cliente. A Gaming Spot foi desenvolvida para diferentes dispositivos para possibilitar o maior número de acessos possível aos produtos da loja. Gaming Spot pode ser acessada usando este <a href="#" target="_blank">link</a>.';
            document.getElementById("technologies1").innerHTML = "Tecnologias utilizadas incluem:";
            document.getElementById("gameProject").innerHTML = "Projeto de Jogo";
            document.getElementById("wordGuesserDescription").innerHTML = 'Word Guesser consiste em um jogo onde o jogador precisa adivinhar a palavra do dia, escolhida aleatoriamente por uma API. O jogador tem 6 tentativas para escolher uma palavra válida no dicionário inglês e receber diferentes cores como dicas para o próximo turno. O jogo foi inspirado no famoso Wordle, atualmente pertencente ao The New York Times. Ele pode ser jogado clicando neste <a href="../IntroToWebDev/Servers/Wordle/index.html" target="_blank">link</a>.';
            document.getElementById("technologies2").innerHTML = "Tecnologias utilizadas incluem:";
            document.getElementById("contactMe").innerHTML = "Contate-Me";
            document.getElementById("contactInfo").innerHTML = "Estou sempre interessado em ouvir sobre novas oportunidades relacionadas a desenvolvimento web e de software.";
            document.getElementById("emailMe").innerHTML = "Me mande um e-mail";
            document.getElementById("reference").innerHTML = "Piero Friedrich &middot; Desenvolvedor de Software";
            document.getElementById("copyrights").innerHTML = "2023 Piero Friedrich. Todos os direitos reservados.";
            document.getElementById("essentialProject").innerHTML = "Projeto Essencial";
            document.getElementById("iosCalculator").innerHTML = "Calculadora IOS";
            document.getElementById("iosCalculatorDescription").innerHTML = 'Uma implementação web do modelo IOS de calculadora, com as mesmas funcionalidades e características do famoso design da Apple. Ela pode ser acessada através deste <a href="https://htmlpreview.github.io/?https://github.com/PieroFriedrich/IosCalculator/blob/main/index.html" target="_blank">link</a>.';
            document.getElementById("technologies3").innerHTML = "Tecnologias utilizadas incluem:";

        /* ENGLISH MODE */
        } else {
            document.getElementById("projectsNav").innerHTML = "Projects";
            document.getElementById("aboutNav").innerHTML = "About";
            document.getElementById("contactNav").innerHTML = "Contact";
            document.getElementById("resumeNav").innerHTML = "Resume";
            document.getElementById("myName").innerHTML = "Hi, my name is <span>Piero Friedrich</span>";
            document.getElementById("profession").innerHTML = "Software Developer";
            document.getElementById("paragraph1").innerHTML = "I develop responsive websites, focusing on user experience, accessibility and functionalities.";
            document.getElementById("paragraph2").innerHTML = "I'm a student specializing in Full-Stack Web Development, currently studying Computer Studies in Langara College.";
            document.getElementById("projectHeader").innerHTML = "Projects I'm proud of";
            document.getElementById("latestProject").innerHTML = "Latest Project";
            document.getElementById("gamingSpot").innerHTML = "Gaming Spot - Video Game Store";
            document.getElementById("gamingSpotDescription").innerHTML = 'Gaming Spot is a website where you will find lots of games from PlayStation, XBox and Nintendo Switch. The website consists on a homepage, a game catalog for each console, a page for games on sale and a contact page to interact with the customer. The Gaming Spot was developed for different devices to enable the highest number of customers to access the store products. It can be accessed using this <a href="#" target="_blank">link</a>.'
            document.getElementById("technologies1").innerHTML = "Technologies used include:"
            document.getElementById("gameProject").innerHTML = "Game Project";
            document.getElementById("wordGuesserDescription").innerHTML = 'Word Guesser consists of a game where the player needs to guess the right word of the day,chosen randomly by an API. The player has 6 attempts to choose a valid English word and receive different colors as hints for the next turn. The game was inspired in the famous Wordle game, currently owned by The New York Times. It can be played clicking on this <a href="../IntroToWebDev/Servers/Wordle/index.html" target="_blank">link</a>.';
            document.getElementById("technologies2").innerHTML = "Technologies used include:";
            document.getElementById("contactMe").innerHTML = "Contact me";
            document.getElementById("contactInfo").innerHTML = "I'm always interested in hearing about new web and software development opportunities.";
            document.getElementById("emailMe").innerHTML = "Email me";
            document.getElementById("reference").innerHTML = "Piero Friedrich &middot; Software Developer";
            document.getElementById("copyrights").innerHTML = "2023 Piero Friedrich. All rights reserved.";
            document.getElementById("essentialProject").innerHTML = "Essential Project";
            document.getElementById("iosCalculator").innerHTML = "IOS Calculator";
            document.getElementById("iosCalculatorDescription").innerHTML = 'A Web implementation of a calculator in the IOS Model, with the same functionalities and features of Apple\'s famous design. It can be accessed through this <a href="https://htmlpreview.github.io/?https://github.com/PieroFriedrich/IosCalculator/blob/main/index.html" target="_blank">link</a>.';
            document.getElementById("technologies3").innerHTML = "Technologies used include:";
        }
}