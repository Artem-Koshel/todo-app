Cypress.Commands.add('addNotes', (notes) => {
  notes.forEach((note) => {
    cy.get('input[placeholder]').type(`${note}{Enter}`);
  });
});
