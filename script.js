// Função para criar um slideshow de imagens
function startSlideshow() {
    // Lista de imagens do slideshow
    var images = document.querySelectorAll('.slideshow-img');
    var currentImageIndex = 0;
    var interval = 3000; // Tempo em milissegundos (3 segundos)
    var isPlaying = true; // Indica se o slideshow está reproduzindo ou pausado

    // Função para exibir a próxima imagem
    function showNextImage() {
        // Esconde a imagem atual
        images[currentImageIndex].style.display = 'none';
        // Avança para a próxima imagem
        currentImageIndex = (currentImageIndex + 1) % images.length;
        // Exibe a próxima imagem
        images[currentImageIndex].style.display = 'block';
    }

    // Função para exibir a imagem anterior
    function showPreviousImage() {
        // Esconde a imagem atual
        images[currentImageIndex].style.display = 'none';
        // Retrocede para a imagem anterior
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        // Exibe a imagem anterior
        images[currentImageIndex].style.display = 'block';
    }

    // Função para pausar o slideshow
    function pauseSlideshow() {
        isPlaying = false;
    }

    // Função para reproduzir o slideshow
    function playSlideshow() {
        isPlaying = true;
    }

    // Exibe a primeira imagem
    images[currentImageIndex].style.display = 'block';

    // Define o intervalo para mudar as imagens
    var slideshowInterval = setInterval(function() {
        if (isPlaying) {
            showNextImage();
        }
    }, interval);

    // Event listener para pausar o slideshow ao clicar em um botão
    document.getElementById('pauseButton').addEventListener('click', pauseSlideshow);

    // Event listener para reproduzir o slideshow ao clicar em um botão
    document.getElementById('playButton').addEventListener('click', playSlideshow);

    // Event listener para avançar para a próxima imagem ao clicar em um botão
    document.getElementById('nextButton').addEventListener('click', function() {
        showNextImage();
    });

    // Event listener para retroceder para a imagem anterior ao clicar em um botão
    document.getElementById('prevButton').addEventListener('click', function() {
        showPreviousImage();
    });
}

// Função para outras funcionalidades
function otherFunctionalities() {
    // Aqui você pode adicionar outras funcionalidades JavaScript
    // Esta função será chamada quando a página for carregada
}

// Função principal para inicializar as funcionalidades
function initialize() {
    startSlideshow(); // Inicia o slideshow
    otherFunctionalities(); // Inicia outras funcionalidades
}

// Chama a função initialize quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initialize);
