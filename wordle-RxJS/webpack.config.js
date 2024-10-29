const path = require('path');
const { output } = require('../curso-rxjs/webpack.config');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development'
}