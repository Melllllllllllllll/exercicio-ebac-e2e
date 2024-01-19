import LojaEbacPage from './pageObjects/lojaEbacPage';

describe('Teste E2E na Loja EBAC', () => {
  it('Deve fazer um pedido de 4 produtos', () => {
    const quantidade = 4;

    const produtos = [
      { nome: 'Ingrid Running Jacket', tamanho: 'M', cor: 'Orange' }
      // Adicione mais produtos, se necessário
    ];

    LojaEbacPage.visit();

    produtos.forEach((produto) => {
      LojaEbacPage.adicionarProdutoAoCarrinho(produto.nome, produto.tamanho, produto.cor, quantidade);
    });

    LojaEbacPage.acessarCarrinho();

    const informacoesCheckout = {
      nome: 'ANA',
      sobrenome: 'LUZ',
      endereco: 'rua 5',
      cidade: 'fortaleza',
      estado: 'Ceará',
      cep: '60861-710',
      telefone: '326545892',
      email: 'ana@ebac.com'
    };

    LojaEbacPage.preencherInformacoesCheckout(...Object.values(informacoesCheckout));

    LojaEbacPage.concordarTermosEFinalizarCompra();
  });
});

