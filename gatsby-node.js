const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@styles": path.resolve(__dirname, "src/styles"),
                "@pages": path.resolve(__dirname, "src/pages"),
                "@images": path.resolve(__dirname, "src/images")
            }
        }
    });
}