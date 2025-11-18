document.addEventListener('DOMContentLoaded', () => {
    // 🌟 Lógica do Menu Lateral (Slide-out) - AJUSTADO PARA O LADO DIREITO 🌟
    const openMenuButton = document.getElementById('open-menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    // Mudamos o seletor para a classe 'mobile-link'
    const mobileMenuLinks = document.querySelectorAll('.mobile-link'); 

    // Função para abrir o menu
    const openMenu = () => {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden'; // Evita rolagem da página principal
    };

    // Função para fechar o menu
    const closeMenu = () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = 'auto'; // Restaura a rolagem
    };

    // Event listeners para abrir e fechar o menu
    if (openMenuButton) {
        openMenuButton.addEventListener('click', openMenu);
    }
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMenu);
    }
    
    // Fecha o menu ao clicar em qualquer link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    // ----------------------------------------------------


    // 1. Funcionalidade de Pesquisa e Filtro
    const searchInputs = document.querySelectorAll('.search-input');
    const cards = document.querySelectorAll('#books .group, #apostilas .group');

    searchInputs.forEach(input => {
        input.addEventListener('input', (event) => {
            const query = event.target.value.toLowerCase().trim();
            console.log(`Pesquisando por: ${query}`);

            cards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p:last-of-type').textContent.toLowerCase();
                const authorElement = card.querySelector('.text-gray-400');
                const author = authorElement ? authorElement.textContent.toLowerCase() : '';
                const categoryElement = card.querySelector('.rounded-full');
                const category = categoryElement ? categoryElement.textContent.toLowerCase() : '';
                
                const content = `${title} ${description} ${author} ${category}`;
                
                if (content.includes(query)) {
                    card.style.display = 'block'; 
                } else {
                    card.style.display = 'none';
                }
            });

            // Sincroniza o valor de pesquisa entre os dois campos
            searchInputs.forEach(otherInput => {
                if (otherInput !== event.target) {
                    otherInput.value = event.target.value;
                }
            });
        });
    });

    // 2. Manipuladores de Eventos para Botões (Download/Visualização)
    const downloadButtons = document.querySelectorAll('.download-button');
    const viewButtons = document.querySelectorAll('.view-button');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 
            const title = button.closest('.group').querySelector('h3').textContent;
            alert(`Ação: O download do livro "${title}" seria iniciado aqui.`);
        });
    });

    viewButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 
            const title = button.closest('.group').querySelector('h3').textContent;
            alert(`Ação: Você seria redirecionado para a Apostila "${title}".`);
        });
    });
});
