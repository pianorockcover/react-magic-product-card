const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");
const { theme } = require("./theme");

const isProd = process.env.NODE_ENV === "production";

const classPrefix = "rsp-product";

const config = {
    mode: isProd ? "production" : "development",
    entry: {
        index: "./src/demo.tsx",
    },
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader", options: { url: false } },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                relativeUrls: false,
                                modifyVars: {
                                    classPrefix,
                                    ...theme,
                                }
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            classPrefix: JSON.stringify(classPrefix),
        }),
        new HtmlWebpackPlugin({
            template: "./static/index.html",
            filename: "index.html",
            inject: "body",
        }),
        new MiniCssExtractPlugin({
            filename: `./css/index.css`,
        }),
    ],
};

if (isProd) {
    config.optimization = {
        minimizer: [
            new TerserWebpackPlugin(),
        ],
    };
} else {
    config.devServer = {
        port: 5000,
    };
}

module.exports = config;