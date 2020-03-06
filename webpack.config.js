var path = require('path');

const commonjsConfig = {
    entry: './src/index.web',
    node: {
        fs: "empty"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.common.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"] 
            }
        }],
    }
}

const standaloneConfig = {
    entry: './src/index.web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.browser.js',
        libraryTarget: 'var',
        library: 'MvsLedger'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env"]  //Preset used for env setup
            }
        }],
    }
}

module.exports = [commonjsConfig, standaloneConfig];
