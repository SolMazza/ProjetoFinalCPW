const vestidos = [
    {
        id: "vestido1",
        imagem: "../../../public/vestidos/vestidoamarelo.png",
        alt: "imagem de um vestido ",
        preco: 37.90
    },
    {
        id: "vestido2",
        imagem: "../../../public/vestidos/vestidomorango.png",
        alt: "imagem de um vestido",
        preco: 80.90
    },
    {
        id: "vestido3",
        imagem: "../../../public/vestidos/vestidobranco.png",
        alt: "imagem de um vestido",
        preco: 45.90
    },
    {
        id: "vestido4",
        imagem: "../../../public/vestidos/vestidobranco2.png",
        alt: "imagem de um vestido",
        preco: 56.90
    },
    {
        id: "vestido5",
        imagem: "../../../public/vestidos/vestidocinza.png",
        alt: "imagem de um vestido",
        preco: 22.90
    },
    {   
        id: "vestido6",
        imagem: "../../../public/vestidos/vestidoverde.png",
        alt: "imagem de um vestido",
        preco: 40.92
    }
];  


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('vestidos-container');
    
    vestidos.forEach(vestido => {
        const section = document.createElement('section');
        section.className = 'fundo_vestido';
        
        section.innerHTML = `
            <nav class="fundo_imagem">
                <img src="${vestido.imagem}" alt="${vestido.alt}" id="${vestido.id}" class="vestidos">
            </nav>
            <div class="espaco_preco"><h3 class="preco"> R$ ${vestido.preco.toFixed(2)} </h3></div>
        `;
        
        container.appendChild(section);
    });
});