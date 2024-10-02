
// LOGO DOS CLIENTES
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true, // Faz o carrossel rodar em loop
        margin: 10, // Espaço entre os itens
        nav: true, // Ativa os botões de navegação (próximo e anterior)
        autoplay: true, // Ativa o autoplay
        autoplayTimeout: 3000, // Intervalo de tempo entre as animações
        responsive: {
            0: {
                items: 1 // Quantidade de itens visíveis em telas pequenas
            },
            600: {
                items: 3 // Quantidade de itens visíveis em telas médias
            },
            1000: {
                items: 5 // Quantidade de itens visíveis em telas grandes
            }
        }
    });
  });
  

//   SITE DE EXEMPLO 
  $(document).ready(function(){
    // Carrossel da primeira fileira (esquerda para a direita)
    $('.first-row').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,        
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // Carrossel da segunda fileira (direita para a esquerda, invertido com CSS)
    $('.second-row').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
