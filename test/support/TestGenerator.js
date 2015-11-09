var util = require('util');
var fse = require('fs-extra');
var pad = require('underscore.string/pad');

function ExampleGenerator(config) {

    this.generate = function(count) {
        var self = this;
        fse.emptyDirSync(config.outputDir);
        for (var i=1; i<=count; i++) {
            var fileName = util.format('example%sTests.js', pad(i, 5, '0'));
            var outputFilePath = config.outputDir + '/' + fileName;
            fse.copySync(config.exampleTestFilePath, outputFilePath);
        }
    };

};

module.exports = ExampleGenerator;