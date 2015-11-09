var TestGenerator = require('./TestGenerator');
var TestGlobber = require('./TestGlobber');

var generator = new TestGenerator({
    exampleTestFilePath : 'test/resources/exampleTests.js',
    outputDir : 'test/unit'
});
var globber = new TestGlobber({
    searchPattern : 'test/unit/**/*Tests.js',
    outputFilePath : 'test/config/.generated/all.js'
});

generator.generate(2000);
globber.run();