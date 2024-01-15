describe('Teste E2E na Loja EBAC', () => {
  it('Deve fazer um pedido de 4 produtos', () => {
    // Acessar a Loja EBAC
    cy.visit('http://lojaebac.ebaconline.art.br/');

    // Fazer escolha de 4 produtos
   
    const quantidade = 4

    cy.contains('a', 'Ingrid Running Jacket').click();
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Orange').click()

    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
 // Adicionar ao carrinho
   cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
   cy.get('.woocommerce-message').should('contain',  quantidade + ' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')
   cy.get('.dropdown-toggle > .text-skin').click()
   cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
    
         

    // Preencher todas as opções no checkout (simplificado para fins de exemplo)
    cy.get('#billing_first_name').type('ANA');
    cy.get('#billing_last_name').type('LUZ');
    cy.get('#select2-billing_country-container').click()
    cy.contains('li','Brasil').click()
    cy.get('#billing_address_1').type('rua 5');
    cy.get('#billing_city').type('fortaleza');
    cy.get('#select2-billing_state-container').click()
    cy.contains('li','Ceará').click()
    cy.get('#billing_postcode').type('60861-710')
    cy.get('#billing_phone').type('326545892');
    cy.get('#billing_email').type('ana@ebac.com')
  

    // Validar a compra ao final
    cy.get('#terms').click()
    cy.get('#place_order').contains('Finalizar compra').click()
    cy.get('.page-title').contains('Pedido recebido')

  
  });
});

