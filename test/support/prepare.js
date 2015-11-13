var options = require('./options.json');
var TestGenerator = require('./TestGenerator');
var TestGlobber = require('./TestGlobber');

var generator = new TestGenerator({
    exampleTestFilePath : options.generator.exampleTestFilePath,
    outputDir : options.generator.outputDir
});
var globber = new TestGlobber({
    searchPattern : options.globber.searchPattern,
    outputFilePath : options.globber.outputFilePath
});

generator.generate(options.testCount);
globber.run();