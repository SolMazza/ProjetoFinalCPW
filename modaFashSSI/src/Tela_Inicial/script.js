const produtos = [
    {
        id: "produto1",
        imagem: "../../../public/vestidos/vestidomorango.png",
        alt: "imagem de um vestido",
        nome: "VESTIDOS",
        href: "../Nav_Compras/PageVestidos/index.html"
    },
    {
        id: "produto2",
        imagem: "../../../public/calcas/calcarosa.png",
        alt: "imagem de uma calça",
        nome: "CALÇAS",
        href: "../Nav_Compras/PageCalcas/index.html"
    },
    {
        id: "produto3",
        imagem: "../../../public/camisa-3.png",
        alt: "imagem de uma camisa branca com texto escrito em preto e rosa",
        nome: "CAMISAS",
        href: "../Nav_Compras/PageCamisas/index.html"
    },
    {
        id: "produto4",
        imagem: "../../public/calcados/calcado1.png",
        alt: "imagem de um calçado",
        nome: "CALÇADOS",
        href: "../Nav_Compras/PageCalcados/index.html"
    }
];


document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('produtos-container');

    produtos.forEach(produto => {
        const section = document.createElement('section');
        section.className = 'fundo_produto';

        section.innerHTML = `
        
            <nav class="fundo_imagem">
            
            <img  src="${produto.imagem}" alt="${produto.alt}" id="${produto.id}" class="produtos">
            
            </nav>
            <button class="espaco_nome" onclick="window.location.href='${produto.href}'">
            <h3 class="nome">${produto.nome}</h3>
            </button>
           
            `;

        container.appendChild(section);
    });
});