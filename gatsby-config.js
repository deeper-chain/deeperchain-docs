/* read the `.env.*` files, gatsby builtin */
// eslint-disable-next-line
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Deeper_',
    siteUrl: `${process.env.GATSBY_DOCS_URL || 'https://docs.substrate.io'}`,
    image_og: `${process.env.GATSBY_DOCS_URL}/img/substrate_og.png`,
    description:
      'Substrate enables developers to quickly and easily build future-proof blockchains optimized for any use case.',
    keywords: [
      'Blockchain',
      'Polkadot',
      'Substrate',
      'Web3.0',
      'Parity Technologies',
      'Technology',
      'Decentralization',
      'Build',
    ],
    author: 'Parity/Web3F WebDev Team',
    pressEmail: 'press@parity.io',
    email: 'info@parity.io',
    twitter: 'https://twitter.com/deeper_network',
    linkedIn: 'https://www.linkedin.com/company/paritytech',
    element: 'https://join.slack.com/share/enQtMjcwNDczMjU1NDA5OC02YzNlNzY3MDRmMTU4MTM3N2I4NzI0ODZmMWExNTE0MDBiN2JmMDQ1MTIwYzJmMjcyMjIxMDkzMGI1NGU1Yjlj',
    github: 'https://github.com/deeper-chain/deeper-chain',
    telegram: 'https://t.me/parity_technologies',
    gitter: 'https://gitter.im/paritytech/parity',
    stackOverflow: 'https://deepernetwork.cc/',
    privacy: '',
    terms: '',
    youtube: 'https://www.youtube.com/channel/UC9lqgUL1MgWXx1wj4FaTE7A',
    crowdcast: 'https://www.crowdcast.io/e/substrate-seminar-2',
    substrateIO: `${process.env.GATSBY_IO_URL}`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    // SOURCE FOLDERS FOR DOCUMENTATIONS
    //*********************************//
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/docs`,
        name: `kbV3`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/how-to-guides`,
        name: `htg`,
      },
    },
    //TUTORIALS//
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/01-create-your-first-substrate-chain`,
        name: `create-your-first-substrate-chain`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/02-proof-of-existence`,
        name: `proof-of-existence`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/03-permissioned-network`,
        name: `permissioned-network`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/04-forkless-upgrades`,
        name: `forkless-upgrades`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/05-private-network`,
        name: `private-network`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/06-node-metrics`,
        name: `node-metrics`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/07-add-a-pallet`,
        name: `add-a-pallet`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/08-ink-workshop/`,
        name: `ink-workshop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/09-cumulus/`,
        name: `cumulus`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/10-frontier-workshop/`,
        name: `frontier`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/v3/tutorials/11-kitties-workshop/`,
        name: `kitties`,
      },
    },
    //*********************************//
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs/`,
        },
      },
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        mode: 'render-blocking',
        enableListener: false,
        preconnect: ['https://fonts.gstatic.com'],
        web: [
          {
            name: 'Karla',
            file: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800',
          },
          {
            name: 'Poppins',
            file: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800',
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
      },
    },
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        locales: `en`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/react-intl/en.json`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 100,
          breakpoints: [640, 768, 1024, 1280],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg className="fill-current text-substrateDark dark:text-white" aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: false,
              removeAccents: false,
              isIconAfterHeader: false,
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.tsx`),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        options: {
          emitWarning: false,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-postcss',
    /* use tailwindcss, used sass instead of css */
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          /* Load custom Tailwind CSS configuration, used to purge
             "unused" tailwind classes */
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Substrate Documentation`,
        short_name: `Substrate Docs`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#55B9E0`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-simple-analytics',
      options: {
        domain: 'api-sa.substrate.io',
        eventsGlobal: 'sa',
        events: true,
        trackPageViews: true,
      },
    },
    {
      resolve: `gatsby-plugin-force-trailing-slashes`,
      options: {
        excludedPaths: [`/404.html`],
      },
    },
  ],
}
