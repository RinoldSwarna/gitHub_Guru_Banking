describe('Test Suite 1',()=>{
    it('Test Suite 1-a',()=> {

        cy.log("=====test Suite 1 a ");

    })
    it('Test Suite 1-B',()=> {

        cy.log("=====test Suite 1--B ");

    })
})

describe('Test Suite 2',()=>{
    it('Test Suite 2-a',()=> {

        cy.log("=====test Suite 2 a  ");

    })
    it('Test Suite 1-B',()=> {

        cy.log("=====test Suite 2--B ");

    })
})

describe('Test Suite 3',()=>{
    it.skip('Test Suite 3-a',()=> {

        cy.log("=====test Suite 3 a  ");

    })
    it('Test Suite 3-B',()=> {

        cy.log("=====test Suite 3--B ");

    })
})

//like .skip we can also pass .only in it as well as describe 

describe('Test Suite 4',()=>{

    it.skip('Test Suite 4-a',()=> {

        cy.log("=====test Suite 4 a  ");

    })
    it('Test Suite 4-B',()=> {

        cy.log("=====test Suite 4--B ");

    })
})

//beforeEach() can be used outside the describe and in side the describe 

//afterEach() can also be used 