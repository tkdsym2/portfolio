module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'fmsuvM portfolio',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Kazuma Takada\'s Portfolio'
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: 'favicon.ico'
        }]
    },
    css: ['~/style/global.css'],
    /*
     ** Customize the progress bar color
     */
    loading: {
        color: '#3B8070'
    },
    router: {
        base: '/'
    },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['debug'],
        /*
         ** Run ESLint on save
         */
        extend(config, {
            isDev,
            isClient,
            isServer
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
            if (isServer) {
                config.externals = [
                    require('webpack-node-externals')({
                        whitelist: [/^vue-slick/]
                    })
                ];
            }
        }
    }
};