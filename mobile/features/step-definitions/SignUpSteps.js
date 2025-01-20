const { Given, When, Then } = require('@cucumber/cucumber');
const fs = require('fs');
const homePage = require('../../page-objects/HomePage');
const SignupPage = require('../../page-objects/SignUpPage');


// Função para pegar um usuário aleatório do arquivo JSON
function getRandomUser() {
    const data = JSON.parse(fs.readFileSync('./fixtures/users.json', 'utf-8')); // Lê o arquivo JSON
    const randomIndex = Math.floor(Math.random() * data.length); // Seleciona um índice aleatório
    return data[randomIndex]; // Retorna o usuário aleatório
}

// Dado que o usuário está na página de cadastro
Given('I am on the sign-up page', async () => {
    await homePage.loginSelectMenu();  // Clica no botão de login
    await SignupPage.clickSignupButtonHome();  // Clica no botão de cadastro para navegar até a página de cadastro
});

// Quando o usuário preenche os campos de cadastro com dados válidos
When('I enter valid sign-up details', async () => {
    const user = getRandomUser(); // Pega um usuário aleatório
    await SignupPage.enterEmail(user.email); // Preenche o email com o valor do usuário
    await SignupPage.enterPassword(user.password); // Preenche a senha com o valor do usuário
    await SignupPage.enterConfirmPassword(user.password); // Preenche a confirmação de senha com o valor do usuário
    await SignupPage.clickSignupButton(); // Clica no botão de cadastro
});



// Então o sistema deve registrar o usuário com sucesso
Then('I should be successfully signed up', async () => {
    console.log('User should be successfully signed up');
});
