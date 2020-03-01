const path = require('path');

module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        hot: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: ["src", "node_modules"]
    },

    module: {
        rules: [
            {
                loader: 'babel-loader',
                options: { cacheDirectory: true },
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        }
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    entry: path.join(__dirname, 'src', '/index.tsx'),
    output: {
        filename: 'main.js',
        publicPath: '/dist',
        path: path.join(__dirname, 'dist')
    }
};