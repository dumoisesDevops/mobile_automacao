class LoginPage {
    // Seletor para o botão de login
    get loginButton() {
        return $(`android=new UiSelector().description("button-LOGIN")`);
    }

    // Seletor para o campo de senha
    get passwordField() {
        return $('android=new UiSelector().text("Password")');
    }

    // Seletor para o campo de nome de usuário
    get usernameField() {
        return $('android=new UiSelector().text("Email")');
    }

    // Pegando o texto da mensagem
    // Localizando o elemento da mensagem
    get loggedMessage() {
        return $('android=new UiSelector().resourceId("android:id/message")');
    }

    get loggedMessageError() {
        return $('amdroid=new UiSelector().text("Please enter a valid email address")');
    }


    // Função para preencher os campos de login
    async login(username, password) {
        await this.usernameField.setValue(username);  // Preenche o campo de nome de usuário
        await this.passwordField.setValue(password);  // Preenche o campo de senha
        await this.loginButton.click();                // Clica no botão de login
    }
    
}

module.exports = new LoginPage();  // Exporta a instância da classe
