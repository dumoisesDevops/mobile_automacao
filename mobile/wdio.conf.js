exports.config = {
    runner: 'local',

    logLevel: 'trace',  // Garante logs detalhados

    outputDir: './logs',  // Cria uma pasta 'logs' para armazenar os logs detalhados

    framework: 'cucumber',
    
    specs: [
        './features/**/*.feature'  // Caminho para as features
    ],
    
    capabilities: [
        {
            "platformName": "Android",
            "appium:deviceName": "Android Emulator",
            "appium:app": "apk/android.wdio.native.app.v1.0.8.apk",
            "appium:automationName": "UiAutomator2",
            "appium:platformVersion": "11.0",
            "appium:udid": "emulator-5554",
            "appium:newCommandTimeout": 300000,  // Aumentado para 5 minutos
            "webSocketUrl": false,  // Desabilitando o BiDi
            "unhandledPromptBehavior": "ignore",
            "appium:noReset": false  // Corrigido o espaço extra removido
        }
    ],
    
    services: ['appium'],

    appium: {
        command: 'appium',
        args: {
            address: '127.0.0.1',  // Endereço IP para o Appium
            port: 4723             // Porta padrão do Appium
        }
    },

    cucumberOpts: {
        require: [
            './features/step-definitions/**/*.js',  // Caminho para os arquivos de step definitions
            './features/support/**/*.js'            // Incluindo arquivos de suporte, como hooks
        ],
        backtrace: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        timeout: 60000,  // Aumentado para 60 segundos
        ignoreUndefinedDefinitions: false
    }
};
