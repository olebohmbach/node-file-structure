// Require FS and PATH and CHALK
var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = {


    sortFolder: function (Folder) {

        // Set Intervall
        var interval = setInterval(function () {
            sortFolder(Folder)
        }, 1000);

        async function sortFolder(Folder) {

            Folder.forEach(folder => {
                fs.readdirSync(folder).forEach(file => {
                    var isFolder = fs.statSync(path.join(folder, file)).isDirectory();
                    if (isFolder) return;
                    let extennsion = path.extname(file);
                    let newFolder = folder + '/' + extennsion
                    let oldPath = folder + '/' + file
                    let newPath = newFolder + '/' + file
                    createFolder(newFolder)
                    moveFile(oldPath, newPath)
                });
            });

        }

        async function createFolder(folder) {
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder, { recursive: true });
            }
        }

        async function moveFile(oldPath, newPath) {
            fs.rename(oldPath, newPath, function (err) {
                if (err) {
                    chalk.cyan(`[Sort Folder]`) + chalk.red(` ${err} `)
                } else {
                    console.log(chalk.cyan(`[Sort Folder]`) + chalk.yellow(` ${oldPath} `) + chalk.cyan(` moved to `) + chalk.yellow(newPath));
                }
            });
        }



    }
}