const {app, BrowserWindow} = require('electron');

let win;

createWindow = () => {
    win = new BrowserWindow({
        webPreferences: {
            enableRemoteModule: false,
            nodeIntegration: true
        }
    });

    win.loadFile(`${__dirname}/app/index.html`);

    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
};


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
