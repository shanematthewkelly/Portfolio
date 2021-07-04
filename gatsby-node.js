const path = require("path");
// const spline = require("./node_modules/react-spline");
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@styles": path.resolve(__dirname, "src/styles"),
                "@pages": path.resolve(__dirname, "src/pages"),
                "@sections": path.resolve(__dirname, "src/pages/sections"),
                "@images": path.resolve(__dirname, "src/images"),
                "@scenes": path.resolve(__dirname, "src/scenes"),
                "@animations": path.resolve(__dirname, "src/animations"),
                "@fonts": path.resolve(__dirname, "src/fonts")
            }
        }
    });
}