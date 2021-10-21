# Node File Structure
## About

Node File Structure is a [Node.js](https://nodejs.org) module that allows you to easily sort all your Files in a directory.


## Installation

**Node.js 16.6.0 or newer is required.**  

```sh-session
npm i node-file-structure
```


## Example usage

Install all required dependencies:
```sh-session
npm i node-file-structure

```

## How to use the Package:

### Template

```js
let structure = require('node-file-structure');
let Folder = ['FOLDER1', 'FOLDER2']; // You can add so much Folders as you want here! e.g. ['C:/Users/admin/Pictures', 'C:/Users/admin/Downloads']
structure.sortFolder(Folder); 
```
>**_This moves all Files in Subfolders, see the graphic example below_**

## Example (graphical)
### Before:
```text
📦 path/to/specified-directory
 ┣📜 file1.png
 ┣📜 file2.exe
 ┗📜 file3.jpg
```
### After:
```text
📦 path/to/specified-directory
 ┣📂 .png
 ┃ ┗📜 file1.png
 ┣📂 .exe
 ┃ ┗📜 file2.exe
 ┗📂 .jpg
   ┗📜 file2.jpg
 
```

### Features
- ✅ Sort by file extensions
- ❌ Sort by file creation date

## Links

- [Support Discord server](https://dsc.gg/ole_is_live)
- [GitHub](https://github.com/Ole-is-live/node-file-structure)
- [NPM](https://www.npmjs.com/package/node-file-structure)

## Contributing

Before creating an issue, please ensure that it hasn't already been reported!

## Help

If you do not understand something in the documentation, if you have problems or you need support, then do not hesitate to join the official [Server](https://dsc.gg/ole_is_live).
