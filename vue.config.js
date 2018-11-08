const path = require('path');
module.exports = {
    devServer: {
        port : 8000,
        proxy : {
            '/fm' : {
                target : 'https://www.missevan.com/',
                changeOrign : true,
                pathRewrite : {
                    '^/fm' : ''
                }
            },
            '/qq' : {
                target : 'https://c.y.qq.com/',
                changeOrign : true,
                pathRewrite : {
                    '^/qq' : ''
                }
            } 
        }
    },
    chainWebpack (config) {
        config
            .resolve
            .alias
            .set('@styles', path.resolve(__dirname, 'src/stylesheets'))
            .set('@c', path.resolve(__dirname, 'src/components'))
            .set('@js', path.resolve(__dirname, 'src/javascripts'))
            .set('@pages', path.resolve(__dirname, 'src/pages'))
    }
}