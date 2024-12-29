const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require('axios');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Read the HTML file
    mainWindow.loadFile('index.html');
});

// Frontend - Backend communication
ipcMain.handle('get-data', async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/data');
        return response.data.message;
    } catch (error) {
        return 'Error: Backend data could not be downloaded.';
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

