const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/contact': { page: '/contact' }
        };
    }
})