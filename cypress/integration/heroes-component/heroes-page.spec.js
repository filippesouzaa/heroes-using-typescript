describe("My First Test", () => {
  it("Should return true when title component was correct", () => {
    cy.visit("/");
    cy.contains("Busca de personagens").should("to.have.length", 1);
  });
  it("should appear an image", () => {
    cy.visit("/");
    cy.contains("Data").should("to.have.length", 1);
    cy.contains("Personagem").should("to.have.length", 1);
    cy.contains("Sinopse").should("to.have.length", 1);
    cy.get("[data-cy=table-heroes]").should("to.have.length", 10);
    cy.contains("Thor").click(); // Click on first el containing 'Welcome'
  });
  // it("should show a hero", () => {
  //   cy.visit("/");
  //   cy.get("[data-cy=input-hero]").type("avengers");
  // });
});
