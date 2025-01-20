class HomePage {

    // Seletor para o menu de login
    get loginMenu() {
        return $(`android=new UiSelector().text("Login")`);
    }

    // Função para clicar no menu de login
    async loginSelectMenu() {
        await this.loginMenu.click();                // Clica no botão de login
    }

    // Seletor para o menu  home
    get loginMenuHome() {
        return $(`android=new UiSelector().text("Home")`);
    }

    // Função para clicar no menu de home
    async loginSelectMenuHome() {
        await this.loginSelectMenuHome.click();
    }

    // Seletor para o menu  webview
    get loginSelectMenuWebview() {
        return $(`android=new UiSelector().text("Webview")`);
    }

    // Função para clicar no menu de webview
    async loginSelectMenuWebview() {
        await this.loginSelectMenuWebview.click();
    }
    // Seletor para o menu Forms
    get loginSelectMenuForms() {
        return $(`android=new UiSelector().text("Forms")`);
    }

    // Função para clicar no menu de Forms
    async loginSelectMenuForms() {
        await this.loginSelectMenuForms.click();
    }
    // Seletor para o menu Swipe
    get loginSelectMenuSwipe() {
        return $(`android=new UiSelector().text("Swipe")`);
    }

    // Função para clicar no menu de Swipe
    async loginSelectMenuSwipe() {
        await this.loginSelectMenuSwipe.click();
    }




}



module.exports = new HomePage();  // Exporta a instância da classe
