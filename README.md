# Example application with macOS file association

An example application showing how to associate a file type with an Electron application in macOS. Shows both electron-builder and electron-packager.

## Setup

```
npm install
npm start
```

## Packaging

Two examples are provided:


### electron-package

This requires a plist file to passed as CLI arg. See `extra.plist`.

```
npm install -g electron-packager
npm run package
```

### electron-builder

This is configurable in the config JSON file. See `fileAssociations` in `electron-builder-config.json` 

```
npm install -g electron-builder
npm run package2
```

After that you should be able to drag a .txt file into the application .app and the icon in the dock.