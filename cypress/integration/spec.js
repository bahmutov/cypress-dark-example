describe('dark theme', () => {
  it('works', () => {
    cy.wrap('foo').should('equal', 'foo')
  })

  it('computes', () => {
    cy.wrap(2 + 2).should('equal', 4)
  })
})
