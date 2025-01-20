const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
    console.log("Preparando o teste...");
    // Reinicia a sessão a cada cenário para garantir que o app começa do zero
    await browser.reloadSession();
    console.log("Sessão do navegador/inicialização do app realizada.");
});

After(async function (scenario) {
    // Verifica se o teste falhou e realiza ações de diagnóstico
    if (scenario.result?.status === 'failed') {
        console.log("Cenário falhou. Realizando captura de tela...");
        // Exemplo: capturar a tela para diagnóstico
        await browser.saveScreenshot(`./screenshots/${scenario.pickle.name}.png`);
    }

    console.log("Finalizando o teste...");
    
    // Tenta usar closeApp() para fechar o aplicativo
    try {
        await browser.closeApp(); // Fecha o aplicativo Android
        console.log("Aplicativo fechado.");
    } catch (error) {
        console.error("Erro ao fechar o aplicativo:", error);
    }

    console.log("Sessão do aplicativo encerrada.");
});
