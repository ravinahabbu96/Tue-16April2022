import { Given ,Then  } from "cypress-cucumber-preprocessor/steps";

Given('I open Facebook page',()=>{
    cy.visit('https://en-gb.facebook.com/')
})

Then('I see {string} in the title',(title)=>{
    cy.title().should('include',title)

})
