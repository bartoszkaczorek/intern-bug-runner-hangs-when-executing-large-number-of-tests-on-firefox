define(['intern/dojo/text!./intern.json'], function (configJson) {
    var config = JSON.parse(configJson);
    config.excludeInstrumentation = new RegExp(config.excludeInstrumentation);
    return config;
});