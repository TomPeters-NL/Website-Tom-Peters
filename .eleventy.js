module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/js");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/img");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addWatchTarget("./src/media");
    eleventyConfig.addPassthroughCopy("./src/media");

    eleventyConfig.addCollection('projectsByPosition', function (collectionApi) {
        return collectionApi.getFilteredByTag('projects').sort(function (a, b) {
            return b.data.position - a.data.position;
        });
    });

    eleventyConfig.addNunjucksFilter('repeat', function (string, count) {
        return string.repeat(count);
    });

    eleventyConfig.addNunjucksFilter('mysqlRow', function (name, commandLength) {
        const prefix = '| ';
        const suffix = '|';

        const characterCount = prefix.length + suffix.length + name.length;

        return prefix + name + '&nbsp;'.repeat(commandLength - characterCount) + suffix;
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};