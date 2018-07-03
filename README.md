# Example application with MacOS file association

## Setup

```
npm install
npm start
```

## Packaging

Two examples are provided:

electron-package
```
npm install -g electron-packager
npm run package
```

electron-builder
```
npm install -g electron-builder
npm run package2
```

After that you should be able to drag a .txt file into the application .app and the icon in the dock.