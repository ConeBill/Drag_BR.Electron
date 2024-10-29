const { app, BrowserWindow } = require('electron');

function criarJanelaPrincipal() {
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    janela.loadFile('index.html');
    janela.webContents.openDevTools();
}

app.whenReady().then(criarJanelaPrincipal);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});