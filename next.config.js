const basePath = '/my-base-path';

const nextConfig = {
    basePath,
    env: {
        BASE_PATH: basePath,
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
    },
    redirects: async () => ([
        {
            source: '/',
            destination: basePath,
            permanent: false,
            basePath: false,
        },
    ])
};


module.exports = nextConfig;
