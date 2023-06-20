describe('todo list', () => {
  it('add item', () => {
    cy.visit('http://localhost:3000/todo-app');
    cy.get('input[placeholder]').type('First note{Enter}');
    cy.get('input[placeholder]').type('Second note{Enter}');

    const list = cy.get('ul > li');
    list.should('have.length', 2);
    list.should('contain.text', 'First note');
    list.should('contain.text', 'Second note');
    cy.get('input[placeholder]').should('have.value', '');
    list.get('input[type="checkbox"]').should('have.all.not.be.checked');
  });
  it('check item', () => {
    cy.visit('http://localhost:3000/todo-app');
    cy.addNotes(['First note', 'Second note']);
    cy.get('label').contains('First note').click();
    cy.get('label').contains('First note').get('input[type="checkbox"]').should('be.checked');
  });
  it('remove item', () => {
    cy.visit('http://localhost:3000/todo-app');
    cy.addNotes(['First note', 'Second note']);
    const firstNote = cy.get('li').contains('First note');
    firstNote.should('exist');
    firstNote.get('input[type="button"]').should('not.exist');
    cy.get('li').contains('First note').trigger('mouseover');
    cy.get('li').contains('First note').get('input[type="button"]').click();
    cy.get('li').contains('First note').should('not.exist');
  });
  it('display items left', () => {
    cy.visit('http://localhost:3000/todo-app');
    cy.addNotes(['First note', 'Second note', 'Third note']);
    cy.get('span').contains('3 items left').should('exist');
    cy.get('li').contains('First note').click();
    cy.get('li').contains('Third note').click();
    cy.get('span').contains('1 items left').should('exist');
  });
  it('filter items', () => {
    cy.visit('http://localhost:3000/todo-app');
    cy.addNotes(['First note', 'Second note', 'Third note']);
    cy.get('li').contains('First note').click();
    cy.get('li').contains('Third note').click();

    // Active
    cy.get('label').contains('Active').click();
    cy.get('li').contains('First note').should('not.exist');
    cy.get('li').contains('Second note').should('exist');
    cy.get('li').contains('Third note').should('not.exist');

    // Completed
    cy.get('label').contains('Completed').click();
    cy.get('li').contains('First note').should('exist');
    cy.get('li').contains('Second note').should('not.exist');
    cy.get('li').contains('Third note').should('exist');

    // All
    cy.get('label').contains('All').click();
    cy.get('li').contains('First note').should('exist');
    cy.get('li').contains('Second note').should('exist');
    cy.get('li').contains('Third note').should('exist');
  });
  it('clear completed notes', () => {
    cy.visit('http://localhost:3000/todo-app');
    cy.addNotes(['First note', 'Second note', 'Third note']);
    cy.get('li').contains('First note').click();
    cy.get('li').contains('Third note').click();

    cy.get('button[type="button"]').contains('Clear completed').click();

    cy.get('li').contains('First note').should('not.exist');
    cy.get('li').contains('Second note').should('exist');
    cy.get('li').contains('Third note').should('not.exist');
  });
});
