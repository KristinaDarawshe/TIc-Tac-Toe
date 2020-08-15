const { MultiCompiler } = require("webpack")

// webpack.config.js
module.exports = {
    entry: [
        './src/index.js',
        './src/index.css'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
            { test: /\.ts$/, use: 'ts-loader' },
        ]
    }
};






  