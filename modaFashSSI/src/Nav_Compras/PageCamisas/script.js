const camisas = [
    {
        id: "camisa1",
        imagem: "../../../public/camisa-1.png",
        alt: "imagem de uma camisa preta com detalhes em rosa",
        preco: 37.90
    },
    {
        id: "camisa2",
        imagem: "../../../public/camisa-2.png",
        alt: "imagem de uma camisa branca com elementos de grafite rosa e verde",
        preco: 34.90
    },
    {
        id: "camisa3",
        imagem: "../../../public/camisa-3.png",
        alt: "imagem de uma camisa branca com texto escrito em preto e rosa",
        preco: 45.90
    },
    {
        id: "camisa4",
        imagem: "../../../public/camisa4.png",
        alt: "imagem de uma camisa inteiramente branca",
        preco: 56.90
    },
    {
        id: "camisa5",
        imagem: "../../../public/camisa5.png",
        alt: "imagem de uma camisa laranja",
        preco: 33.90
    },
    {   
        id: "camisa6",
        imagem: "../../../public/camisa6.png",
        alt: "imagem de uma camisa branca com um desenho azul",
        preco: 40.90
    }
];  


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('camisas-container');
    
    camisas.forEach(camisa => {
        const section = document.createElement('section');
        section.className = 'fundo_camisa';
        
        section.innerHTML = `
            <nav class="fundo_imagem">
                <img src="${camisa.imagem}" alt="${camisa.alt}" id="${camisa.id}" class="camisas">
            </nav>
            <div class="espaco_preco"><h3 class="preco"> R$ ${camisa.preco.toFixed(2)} </h3></div>
        `;
        
        container.appendChild(section);
    });
});