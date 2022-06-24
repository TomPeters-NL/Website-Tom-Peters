module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/img");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addWatchTarget("./src/media");
    eleventyConfig.addPassthroughCopy("./src/media");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};