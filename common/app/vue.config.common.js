const { mergeDeep } = require('@vps-common/utils');

const commonConfig = {
    configureWebpack: {
        externals: {
            vue: 'Vue',
            vuex: 'Vuex',
            'vue-router': 'VueRouter',
        },
    },
};

const mergeCommonConfig = config => mergeDeep(config, commonConfig);

module.exports = { mergeCommonConfig };