describe("firstTest", () => {
  it("test1", () => {
    cy.visit("https://nodejs.org/en");
    cy.get(".special");
  });
});
