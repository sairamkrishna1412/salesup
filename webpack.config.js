const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    mode : "development",
    entry : [
        '/src/js/index.js'
    ],
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : 'js/bundle.js'
    },
    devServer : {contentBase: path.join(__dirname, 'dist')},
    //always specify contentbase field for devserver
    plugins : [
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ]
};