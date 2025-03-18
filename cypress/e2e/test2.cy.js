// url = "https://en.wikipedia.org/wiki/Test_automation";

describe("test2_firstTestDoc", () => {

  it("It is not to much", () =>{
    expect (true).to.equal(true); 
  })

  it("docsTest", () => {
    cy.visit("https://en.wikipedia.org/wiki/Test_automation");
    cy.contains("type").click();
    cy.get("ul li:nth-child(2) b:nth-child(1) a:nth-child(1)")
    .click()
    .url()
    .should("include", "/wiki/API_testing");
    
  });
  
  it("find url", () => {
    cy.visit("https://en.wikipedia.org/wiki/Test_automation");
    cy.contains("type").click(); 
    cy.get('.sidebar-title-with-pretitle > a').click().url().should("include", "/wiki/Software_development");
  })

  it("find url", () => {
    cy.visit("https://en.wikipedia.org/wiki/Test_automation");
    cy.get('.mw-content-ltr > :nth-child(3) > .mw-redirect').click(); 
    
  })
});

