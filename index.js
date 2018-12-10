const {app, Menu, BrowserWindow, ipcMain} = require('electron')

ipcMain.on('started', () => {
  console.log('Quitting main application.\n')
  app.quit()
})

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true
  })
  mainWindow.loadFile('index.html')
})

app.on('window-all-closed', () => {
    app.quit()
})