const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://arbootcamp.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '/',
    title: "<a href='/'>AR Bootcamp</a>",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: false,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'ARBootcamp',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/snapchat-beginner',
    ],
    collapsedNav: [],
    links: [
      { text: 'Main Page', link: 'https://arbootcamp.com' },
      { text: 'Lens Studio', link: 'https://lensstudio.snapchat.com/' },
    ],
    frontline: false,
    ignoreIndex: true,
    title: 'Table of contents',
  },
  siteMetadata: {
    title: 'AR Bootcamp',
    description: 'The best way to learn how to create augmented reality lenses and filters',
    ogImage: null,
    docsLocation: 'https://learn.arbootcamp.com',
    favicon: 'src/pwa-512.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'AR Bootcamp',
      short_name: 'AR Bootcamp',
      start_url: '/',
      background_color: '#005fff',
      theme_color: '#005fff',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
