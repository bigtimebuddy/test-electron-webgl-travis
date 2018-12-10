const {remote, ipcRenderer} = require('electron')
const remoteConsole = remote.getGlobal('console')

remoteConsole.log('Renderer started!');

ipcRenderer.send('started');
