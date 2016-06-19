module.exports = {
    "postcss": [
        {
            "name": "lost",
            "options": {}
        },
        {
            "name": "postcss-inline-svg",
            "options": {
                "path": "markup/static/img/svg/"
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
    "minifyHtml": false,
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
        "imagesFolderName": "img",
        "componentsFolderName": "modules"
    },
    "js": {
        "workflow": "concat",
        "bundler": "webpack",
        "lint": true,
        "useBabel": true,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "css": {
        "workflow": "concat"
    },
    "generateStaticPath": true
};