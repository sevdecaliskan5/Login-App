describe('Login Page Tests', () => {
  
    it('should allow the user to log in with valid credentials', () => {
      cy.visit('http://localhost:5175'); 
  
      cy.get('input[name="email"]').type('test@example.com'); 
      cy.get('input[name="password"]').type('ValidPassword123'); 
      cy.get('input[type="checkbox"]').check(); 
      cy.get('button[type="submit"]').click(); 
  
      cy.url().should('include', '/success'); 
    });
  
    it('should show an error for invalid credentials', () => {
      cy.visit('http://localhost:5173');
  
      cy.get('input[name="email"]').type('invalid@example.com');
      cy.get('input[name="password"]').type('WrongPassword');
      cy.get('button[type="submit"]').click();
  
      cy.get('.error-message').should('be.visible'); 
    });
  });
  