const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://learn.arbootcamp.com',
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
      '/snapchat-intermediate',
      '/snapchat-advanced',
      '/instagram-beginner',
      '/instagram-intermediate',
      '/privacy',
    ],
    collapsedNav: [
      '/snapchat-intermediate',
      '/snapchat-advanced',
      '/instagram-beginner',
      '/instagram-intermediate',
    ],
    links: [
      { text: 'Main Page', link: 'https://arbootcamp.com' },
      { text: 'Lens Studio', link: 'https://lensstudio.snapchat.com/' },
      { text: 'Spark AR', link: 'https://sparkar.facebook.com/ar-studio/' },
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
    favicon: '/icon.png',
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
          src: 'src/icon.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
