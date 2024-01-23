// Função para fazer a requisição e manipular os dados recebidos
async function obterDadosDaAPI() {
    // Opções para a chamada da API
    const options = {
        endpoint: 'Product/GetAllProducts', // Substitua com o seu endpoint real
        method: 'GET' // Método GET para obter dados
    };

    // Chama a função 'api' para fazer a requisição à API
    api(options, data => {
        // Manipula os dados recebidos
        exibirDadosNoFrontend(data);
    });
}


//Chamar tua api para listar os produtos e preencher o que eu comentei

  //No  teu result da api você vai preencher esse objeto para mostrar no teu front
  //Implementar regra para quebra de linha


  //fazer .map para percorrer teu resultado da api e adicionar os itens no elemento que eu criei
  var element = document.getElementById("gridcards")
  element.innerHTML += `
  <div class="cardcontent">
    <h1>${productName}</h1>
    <p>${ProductDescription}</p>
    
    <button class="botaoCard" id="tenhointeressebtn"> Tenho interesse. </button>
  </div>
  `;

  





























// // Função para exibir os dados no frontend
// function exibirDadosNoFrontend(dados) {
//     // Supondo que você tenha um elemento no HTML para exibir os dados (por exemplo, um elemento com o ID "conteudo")
//     const container = document.getElementById('containerdireito');

//     // Limpa o conteúdo atual do container
//     container.innerHTML = '';

    
//     // Itera sobre os dados e cria elementos para exibição
//     dados.forEach(produto => {
//         const card = document.createElement('div');
//         card.classList.add('cardProduto');

//         const conteudoCard = `
//             <div class="imagemProduto">
//                 <img src="${produto.caminhoImagem}" alt="${produto.nome}">
//             </div>
//             <div class="informacoesProduto">
//                 <h2>${produto.nome}</h2>
//                 <p>${produto.descricao}</p>
//                 <p>Quantidade: ${produto.quantidade}</p>
//             </div>`;

//         card.innerHTML = conteudoCard;

//         container.appendChild(card);
//     });
// }

// // Função para fazer a requisição à API
// const api = async (options, callback) => {
//     const { endpoint, method } = options;

//     try {
//         const response = await fetch(`https://localhost:7109/${endpoint}`, {
//             method: method || "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await response.json(); // Extrai os dados JSON da resposta
//         callback(data); // Chama o callback com os dados da API
//     } catch (error) {
//         console.error(error);
//         callback(error, null); // Chama o callback com o erro, se houver
//     }
// };

// // Chama a função para obter dados quando a página é carregada
// document.addEventListener('DOMContentLoaded', obterDadosDaAPI);