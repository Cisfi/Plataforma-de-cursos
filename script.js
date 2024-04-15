// Variáveis globais para controle do slideshow
var currentIndex = 0; // Índice da imagem atual
var images = document.querySelectorAll('.slideshow-image'); // Lista de imagens do slideshow
var intervalId; // ID do intervalo para trocar as imagens automaticamente

// Função para iniciar o slideshow
function startSlideshow() {
    // Mostra a primeira imagem
    showImage(currentIndex);
    
    // Inicia o intervalo para trocar as imagens automaticamente
    intervalId = setInterval(nextImage, 3000);
}

// Função para mostrar uma imagem específica
function showImage(index) {
    // Esconde todas as imagens
    hideAllImages();
    
    // Exibe a imagem no índice especificado
    images[index].style.display = 'block';
    
    // Atualiza o índice da imagem atual
    currentIndex = index;
}

// Função para esconder todas as imagens
function hideAllImages() {
    images.forEach(function(image) {
        image.style.display = 'none';
    });
}

// Função para avançar para a próxima imagem
function nextImage() {
    // Incrementa o índice e mostra a próxima imagem
    showImage((currentIndex + 1) % images.length);
}

// Função para retroceder para a imagem anterior
function prevImage() {
    // Calcula o índice anterior e mostra a imagem
    var prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
}

// Função para pausar o slideshow
function pauseSlideshow() {
    clearInterval(intervalId); // Limpa o intervalo para pausar
}

// Função para continuar o slideshow
function continueSlideshow() {
    // Reinicia o intervalo para continuar
    intervalId = setInterval(nextImage, 3000);
}

// Associando eventos aos botões
document.getElementById('prevButton').addEventListener('click', prevImage);
document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('pauseButton').addEventListener('click', pauseSlideshow);
document.getElementById('continueButton').addEventListener('click', continueSlideshow);

// Iniciar o slideshow quando a página carregar
window.onload = startSlideshow;
