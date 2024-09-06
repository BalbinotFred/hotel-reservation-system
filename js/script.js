// Função que lida com o clique dos botões
function showService(event) {
    // Oculta todas as divs de serviço
    var services = document.querySelectorAll('.service-display');
    services.forEach(function(service) {
        service.style.display = 'none';
    });

    // Mostra a div correspondente ao botão clicado
    var target = event.target.getAttribute('data-target');
    var serviceDiv = document.getElementById(target);
    if (serviceDiv) {
        serviceDiv.style.display = 'block';
    }
}

// Adiciona o evento de clique para todos os botões de serviço
var buttons = document.querySelectorAll('.service-btn');
buttons.forEach(function(button) {
    button.addEventListener('click', showService);
});
