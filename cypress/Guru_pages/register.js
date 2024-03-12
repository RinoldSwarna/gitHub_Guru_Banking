class registerPage
{
    weblocators =
    {
        username:'#message23',
        password:'#message18',
        login:'btnLogin'
    }


enterLoginDetails(uname)
{
    cy.get(this.weblocators.username).type(unameame)
}

enterPassword(pwd)
{
    cy.get(this.weblocators.password).type(pwd)
}

clickLogin(UName)
{
    cy.get(this.weblocators.login).click
}
}
