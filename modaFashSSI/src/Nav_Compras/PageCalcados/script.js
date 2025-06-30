const calcados = [
    {
        id: "calcado1",
        imagem: "../../../public/calcados/calcado1.png",
        alt: "imagem de uma calcado preta com detalhes em rosa",
        preco: 137.90
    },
    {
        id: "calcado2",
        imagem: "../../../public/calcados/calcado2.png",
        alt: "imagem de uma calcado branca com elementos de grafite rosa e verde",
        preco: 134.90
    },
    {
        id: "calcado3",
        imagem: "../../../public/calcados/calcado3.png",
        alt: "imagem de uma calcado branca com texto escrito em preto e rosa",
        preco: 451.90
    },
    {
        id: "calcado4",
        imagem: "../../../public/calcados/calcado4.png",
        alt: "imagem de uma calcado inteiramente branca",
        preco: 561.90
    },
    {
        id: "calcado5",
        imagem: "../../../public/calcados/calcado5.png",
        alt: "imagem de uma calcado laranja",
        preco: 331.90
    },
    {   
        id: "calcado6",
        imagem: "../../../public/calcados/calcado6.png",
        alt: "imagem de uma calcado",
        preco: 402.90
    }
];  


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('calcados-container');
    
    calcados.forEach(calcado => {
        const section = document.createElement('section');
        section.className = 'fundo_calcado';
        
        section.innerHTML = `
            <nav class="fundo_imagem">
                <img src="${calcado.imagem}" alt="${calcado.alt}" id="${calcado.id}" class="calcados">
            </nav>
            <div class="espaco_preco"><h3 class="preco"> R$ ${calcado.preco.toFixed(2)} </h3></div>
        `;
        
        container.appendChild(section);
    });
});