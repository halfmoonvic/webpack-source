const path = require('path');
module.exports = {
    context: __dirname,
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist')
    }
};
