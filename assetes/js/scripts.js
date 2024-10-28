// Aguarda o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // 1. Validação do Formulário de Contato
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Validação simples
            if (!name || !email || !message) {
                alert("Por favor, preencha todos os campos.");
                event.preventDefault(); // Impede o envio do formulário
            } else {
                alert("Mensagem enviada com sucesso!");
            }
        });
    }

    // 2. Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 3. Botão "Voltar ao topo"
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = "Voltar ao topo";
    backToTopButton.className = "back-to-top";
    backToTopButton.style.display = "none"; // Inicialmente escondido
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.zIndex = "1000";
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block"; // Mostra o botão
        } else {
            backToTopButton.style.display = "none"; // Esconde o botão
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Mensagens de sucesso e erro (exemplo)
    function showMessage(type, message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = type === 'success' ? 'alert alert-success' : 'alert alert-danger';
        messageDiv.textContent = message;
        document.body.insertBefore(messageDiv, document.body.firstChild);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000); // Remove a mensagem após 3 segundos
    }

    // Exemplo de uso:
    // showMessage('success', 'Seu formulário foi enviado com sucesso!');
    // showMessage('error', 'Ocorreu um erro ao enviar o formulário.');

    // 5. Efeitos de animação ao passar o mouse sobre os cartões (se aplicável)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.2s";
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = "scale(1)";
        });
    });

    // 6. Carregamento dinâmico de conteúdo (exemplo para blog)
    /*
    fetch('posts.json')
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.querySelector('.blog-container');
            data.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `<h2>${post.title}</h2><p>${post.summary}</p>`;
                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Erro ao carregar os posts:', error));
    */
});
