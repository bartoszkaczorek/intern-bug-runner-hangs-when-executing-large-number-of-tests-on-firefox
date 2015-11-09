var util = require('util');
var glob = require('glob');
var path = require('path');
var mkpath = require('mkpath');
var fs = require('fs');

function TestsGlobber(config){

    this._config = config;

    this.run = function() {

        var files = glob.sync(this._config.searchPattern).map(function (filename) {
            return filename.replace(/\.js$/, '');
        });

        var content = util.format('define(%s);\n', JSON.stringify(files, null, 4));
        mkpath.sync(path.dirname(this._config.outputFilePath));

        fs.writeFileSync(this._config.outputFilePath, content, {
            encoding : 'utf-8'
        });

        console.log('File saved to: %s', this._config.outputFilePath);
    };

}

module.exports = TestsGlobber