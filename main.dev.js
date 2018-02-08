const
  electron = require('electron'),
  { app, BrowserWindow } = electron,
  net = require('net');

let
  mainWindow,
  connection;

//Creates a new instance of BrowserWindow
function createWindow() {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    show: false,
    width,
    height
  });
  mainWindow.loadURL('http://localhost:4200/');
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  testConnection();
}

//Test the connection to localhost and shows the window
function testConnection() {
  connection = net.connect(4200, 'localhost', () => {
    console.log('connecting');
    mainWindow.reload();
    mainWindow.on('ready-to-show', () => {
      mainWindow.show();
    });
    connection.end();
  });

  connection.on('error', () => {
    setTimeout(testConnection, 1000);
  });

  connection.on('end', () => {
    console.log('ending connection');
  });
}

//Creates the window on ready
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

console.log('process', app);
