const calcas = [
    {
        id: "calca1",
        imagem: "../../../public/calcas/calcaestrelasjeans.png",
        alt: "imagem de uma calca preta com detalhes em rosa",
        preco: 37.90
    },
    {
        id: "calca2",
        imagem: "../../../public/calcas/calcajeans.png",
        alt: "imagem de uma calca branca com elementos de grafite rosa e verde",
        preco: 34.90
    },
    {
        id: "calca3",
        imagem: "../../../public/calcas/calcarosa.png",
        alt: "imagem de uma calca branca com texto escrito em preto e rosa",
        preco: 45.90
    },
    {
        id: "calca4",
        imagem: "../../../public/calcas/calca4.png",
        alt: "imagem de uma calca inteiramente branca",
        preco: 561.90
    },
    {
        id: "calca5",
        imagem: "../../../public/calcas/calca5.png",
        alt: "imagem de uma calca laranja",
        preco: 323.90
    }
];  


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('calcas-container');
    
    calcas.forEach(calca => {
        const section = document.createElement('section');
        section.className = 'fundo_calca';
        
        section.innerHTML = `
            <nav class="fundo_imagem">
                <img src="${calca.imagem}" alt="${calca.alt}" id="${calca.id}" class="calcas">
            </nav>
            <div class="espaco_preco"><h3 class="preco"> R$ ${calca.preco.toFixed(2)} </h3></div>
        `;
        
        container.appendChild(section);
    });
});