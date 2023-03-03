const { parsed: localEnv1 } = require('dotenv').config({});
const { parsed: localEnv2 } = require('dotenv').config({
  path: `.env.${process.env.ENVIRONEMENT}`,
});

module.exports = {
  eslint: {
    dirs: ['pages'],
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
  },
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.EnvironmentPlugin({ ...localEnv1, ...localEnv2 }),
    );
    config.module.rules.push({
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      use: {
        loader: 'url-loader',
      },
    });
    // config.plugins.push(new options.webpack.IgnorePlugin(/\/__tests__\//));
    /* config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,

      use:
        // [// options.defaultLoaders.babel,
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['date-fns'],
          },
        },
      // ],
    }); */

    return config;
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    // localeDetection: false,
    locales: ['en_us', 'pt_br'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'pt_br',
    localeDetection: true,
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'http://localhost:3000/en/',
    //     defaultLocale: 'en-US',
    //     http: true,
    //   },
    //   {
    //     domain: 'http://localhost:3000/pt/',
    //     defaultLocale: 'pt-PT',
    //     http: true,
    //   },
    // ],
  },
};
