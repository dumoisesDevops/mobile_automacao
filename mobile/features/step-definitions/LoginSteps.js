const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../../page-objects/LoginPage');
const homePage = require('../../page-objects/HomePage');
const { expect } = require('chai');

// Cenário 1: Login com credenciais válidas
Given('I am on the login page', async () => {
    await homePage.loginSelectMenu();  // Clica no botão de login
});

When('I enter valid credentials', async () => {
    await loginPage.login('eduardo.moisesqa@hotmail.com', 'Deus370750');  // Preenche os campos de nome de usuário e senha
});

Then('I should be logged in', async () => {
    await loginPage.loggedMessage.waitForDisplayed();  // Espera pela mensagem de login
    const message = await loginPage.loggedMessage.getText();
    expect(message).to.equal('You are logged in!');
});

// Cenário 2: Login com credenciais inválidas
When('I enter invalid credentials', async () => {
    await loginPage.login('teste@teste.com.br ', 'Teste@1213 ');  // Preenche os campos de nome de usuário e senha com dados inválidos
});
Then('I should see an error message saying',async () => {
    const errorMessage = await $('android=new UiSelector().text("Please enter a valid email address")');
    await errorMessage.waitForDisplayed({ timeout: 5000 });
    const message = await errorMessage.getText();
    expect(message).to.equal('Please enter a valid email address');
    
});
