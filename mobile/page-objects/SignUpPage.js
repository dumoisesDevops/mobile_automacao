class SignUpPage {
    // Seletor para o campo de email
    get emailField() {
        return $(`android=new UiSelector().text("Email")`);
    }

    // Seletor para o campo de senha
    get passwordField() {
        return $(`android=new UiSelector().text("Password")`);
    }

    // Seletor para o campo de confirmação de senha
    get confirmPasswordField() {
        return $(`android=new UiSelector().text("Confirm Password")`);
    }

    // Seletor para o botão de cadastro
    get signupButton() {
        return $(`android=new UiSelector().text("SIGN UP")`);
    }
    // Seletor para o botão "Sign up"
    get signUpButtonHome() {
        return $('android=new UiSelector().text("Sign up")');
    }

    // Método para preencher o email
    async enterEmail(email) {
        await this.emailField.setValue(email);
    }

    // Método para preencher a senha
    async enterPassword(password) {
        await this.passwordField.setValue(password);
    }

    // Método para preencher a confirmação de senha
    async enterConfirmPassword(confirmPassword) {
        await this.confirmPasswordField.setValue(confirmPassword);
    }

    // Método para clicar no botão de cadastro
    async clickSignupButton() {
        await this.signupButton.click();
    }
      // Método para clicar no botão de cadastro
      async clickSignupButtonHome() {
        await this.signUpButtonHome.click();
    }
}


module.exports = new SignUpPage();
