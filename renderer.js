const {remote, ipcRenderer} = require('electron')
const remoteConsole = remote.getGlobal('console')
const isWebGLSupported = require('./is-webgl-supported');

remoteConsole.log('Renderer started! WebGL:', isWebGLSupported());

ipcRenderer.send('started');
