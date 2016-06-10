module.exports = {
  "autoprefixerConfig": [
    "> 1%",
    "last 2 versions",
    "Firefox ESR",
    "android 4"
  ],
  "postcss": [
    {
      name: 'lost',
      options: {}
    },
    {
      name: 'postcss-inline-svg',
      options: {
        path: 'markup/static/img/svg/'
      }
    }
  ],
  "svg": {
    "active": true,
    "workflow": "symbols",
    "symbolsConfig": {
      "loadingType": "inject",
      "usePolyfillForExternalSymbols": true,
      "pathToExternalSymbolsFile": "static/images/svg/"
    }
  },
  "useJsLintAndHint": true,
  "jsPathsToConcatBeforeModulesJs": [],
  "lintJsCodeBeforeModules": false,
  "jsPathsToConcatAfterModulesJs": [],
  "lintJsCodeAfterModules": false,
  "useBabel": true,
  "sourcemaps": {
    "js": {
      "active": true,
      "inline": true
    },
    "css": {
      "active": true,
      "inline": true
    }
  },
  "notifyConfig": {
    "useNotify": true,
    "title": "TARS notification",
    "sounds": {},
    "taskFinishedText": "Task finished at: "
  },
  "browserSyncConfig": {
    "baseDir": "./dev",
    "port": 3004,
    "open": true,
    "browser": "default",
    "startUrl": "/index.html",
    "useNotifyInBrowser": false,
    "injectChanges": false
  },
  "removeConsoleLog": true,
  "minifyHtml": false,
  "staticPrefix": "static/",
  "buildPath": "./builds/",
  "useBuildVersioning": true,
  "useArchiver": true,
  "ulimit": 4096,
  "moduleTemplate": "_template",
  "templater": "jade",
  "cssPreprocessor": "scss",
  "useImagesForDisplayWithDpi": [
    96,
    192
  ],
  "fs": {
    "staticFolderName": "static",
    "imagesFolderName": "img"
  }
};