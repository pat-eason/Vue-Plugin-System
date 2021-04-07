const { mergeDeep } = require('@vps-common/utils');

const isProduction = process.env.NODE_ENV === 'production';

const typingsEmitFix = {
    chainWebpack: config => {
        if(isProduction) {
            config.module.rule('ts').uses.delete('cache-loader');
            config.module
                .rule('ts')
                .use('ts-loader')
                .loader('ts-loader')
                .tap(opts => {
                    opts.transpileOnly = false;
                    opts.happyPackMode = false;
                    return opts;
                });
        }
    },
    configureWebpack: config => {
        config.output.libraryExport = 'default';
    },
    parallel: false,
};

const commonConfig = {
    ...typingsEmitFix,
};

const mergeCommonConfig = config => mergeDeep(config, commonConfig);

module.exports = { mergeCommonConfig };