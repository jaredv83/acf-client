require('babel/polyfill');

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

function createMeta(title) {
  return {
    charSet: 'utf-8',
    property: {
      'og:site_name': title,
      'og:image': 'https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png',
      'og:locale': 'en_US',
      'og:title': title,
      'og:description': 'All the modern best practices in one example.',
      'twitter:card': 'summary',
      'twitter:site': '@ComposersForum',
      'twitter:creator': '@CAPE_io',
      'twitter:title': title,
      'twitter:description': 'In the key of now',
      'twitter:image': 'https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png',
    },
  };
}

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'dev.composersforum.us',
  apiPort: process.env.APIPORT || 80,
  app: {
    title: 'American Composers Forum',
    description: 'All the modern best practices in one example.',
    meta: createMeta('American Composers Forum'),
  },
}, environment);
