const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry:{
        main:"./src/main.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist"),
        clean:true
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist"
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    }
}