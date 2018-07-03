var electron = require("electron");
var app = electron.app;
let dialog = electron.dialog;

let windows = {
  list: [],
  create: (file) => {
    if (file) {
        windows.list.push(file)
        dialog.showMessageBox({message: file})
    }
  }
};

let initOpenFileQueue = [];

// Attempt to bind file opening #2
app.on('will-finish-launching', () => {
  // Event fired When someone drags files onto the icon while your app is running
  app.on("open-file", (event, file) => {
    if (app.isReady() === false) {
      initOpenFileQueue.push(file);
    } else {
      windows.create(file);
    };
    event.preventDefault();
  });
});


app.on("ready", function() {
  if (initOpenFileQueue.length) {
    initOpenFileQueue.forEach((file) => windows.create(file));
  }
  
  if (windows.list.length === 0) {
    windows.create();
  }
});

app.on("window-all-closed", function() {
  // This is a Window's specific UX pattern
  if (process.platform !== "darwin")
    app.quit();
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (windows.list.length === 0)
    windows.create();
});
