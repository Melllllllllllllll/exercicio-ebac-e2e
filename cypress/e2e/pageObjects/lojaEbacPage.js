class LojaEbacPage {
    visit() {
      cy.visit('http://lojaebac.ebaconline.art.br/');
    }
  
    adicionarProdutoAoCarrinho(produto, tamanho, cor, quantidade) {
      cy.contains('a', produto).click();
      cy.get(`.button-variable-item-${tamanho}`).click();
      cy.get(`.button-variable-item-${cor}`).click();
      cy.get('.input-text').clear().type(quantidade);
      cy.get('.single_add_to_cart_button').click();
    }
  
    acessarCarrinho() {
      cy.get('.dropdown-toggle > .text-skin').click();
      cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click();
    }
  
    preencherInformacoesCheckout(nome, sobrenome, endereco, cidade, estado, cep, telefone, email) {
      cy.get('#billing_first_name').type(nome);
      cy.get('#billing_last_name').type(sobrenome);
      cy.get('#select2-billing_country-container').click();
      cy.contains('li', 'Brasil').click();
      cy.get('#billing_address_1').type(endereco);
      cy.get('#billing_city').type(cidade);
      cy.get('#select2-billing_state-container').click();
      cy.contains('li', estado).click();
      cy.get('#billing_postcode').type(cep);
      cy.get('#billing_phone').type(telefone);
      cy.get('#billing_email').type(email);
    }
  
    concordarTermosEFinalizarCompra() {
      cy.get('#terms').click();
      cy.get('#place_order').contains('Finalizar compra').click();
      cy.get('.page-title').contains('Pedido recebido');
    }
  }
  
  export default new LojaEbacPage();
  