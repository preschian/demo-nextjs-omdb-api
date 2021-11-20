it('should display search result', () => {
  cy.visit('/');

  cy.get('[data-testid="search-input"]').type('dragon{enter}');
  cy.get('[data-testid="movie-card"] a').should('contain', 'Dragon');
  cy.get('[data-testid="search-autocomplete"] a').should('have.length', 3);

  // cy.get('[data-testid="search-input"]').type('dragon');

  // cy.get('[data-testid="search-input"]').type('{selectall}{backspace}');
  // cy.get('[data-testid="search-autocomplete"] a:first-child').click();
});
