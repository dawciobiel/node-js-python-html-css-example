const { ipcRenderer } = require('electron');

document.getElementById('fetchData').addEventListener('click', () => {
    ipcRenderer.invoke('get-data').then((data) => {
        document.getElementById('dataOutput').innerText = data;
    });
});

