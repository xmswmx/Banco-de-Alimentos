///<referencetypes="Cypress"/>
context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    }) it('Unejemplo', () => {
        //completarunform
        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com') //enviarunform
        ulariocy.get('.action-form').find('[type="text"]').type('HALFOFF') cy.get('.action-form').submit().next().should('contain', 'Yourformhasbeensubmitted!')
        //presionarunboton
        cy.get('.action-btn').click()
    })
})

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://bancoalimentario.org.ar/')
    }) it('Unejemplo', () => {
        //completarunform
        cy.get('#search-4>form>div>input').type('laplata').should('have.value', 'laplata')
        //presionarunboton
        cy.get('#search-4>form>div>button').click() cy.get('#post-5085>header>h2>a').should('contain', 'CONVENIO')
    })
})