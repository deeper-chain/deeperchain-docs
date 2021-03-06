const MainNav = {
  global: () => {
    const site = process.env.GATSBY_IO_URL
    return [
      {
        name: `Participate coding`,
        subMenu: [
          {
            linkTitle: `Github`,
            link: `https://github.com/deeper-chain`,
            external: true,
          },
          {
            linkTitle: `Forum`,
            link: `https://deepernetwork.cc/`,
            external: true,
          },
          {
            linkTitle: `Contribute-to-earn DPR`,
            link: `https://apps-dev.deeper.network/#/treasury/tips`,
            external: true,
          },
          {
            linkTitle: `Website`,
            link: `https://www.deeper.network/`,
            external: true,
          },
          {
            linkTitle: `Join the conversation`,
            link: `https://discord.com/invite/EWUyAJyH2B`,
            external: true,
          },
        ],
      },
      {
        name: `Developers`,
        subMenu: [
          {
            linkTitle: `Home`,
            link: `/`,
            external: false,
          },
          {
            linkTitle: `Docs`,
            link: `/v3`,
            external: false,
          },
          {
            linkTitle: `How-to Guides`,
            link: `/how-to-guides`,
            external: false,
          },
          {
            linkTitle: `JSON-RPC Interfaces`,
            link: `/v3/contribute/style-guide`,
            external: false,
          },
          {
            linkTitle: `DeeperChain FAQ`,
            link: `/v3/contribute/writing`,
            external: false,
          },
          {
            linkTitle: `Tutorials`,
            link: `/tutorials`,
            external: false,
          },
          {
            linkTitle: `Rust Docs`,
            link: `/rustdocs/`,
            external: false,
          },
        ],
      },
     
      {
        name: `Ecosystem`,
        subMenu: [
          {
            linkTitle: 'DeeperNetwork documentation',
            link: `https://deeper-network-inc.gitbook.io/deeper-connect-knowledge-base/`,
            external: true,
          },

          {
            linkTitle: `Seminar`,
            link: ``,
            external: true,
          },
          {
            linkTitle: `shop`,
            link: `https://shop.deeper.network/`,
            external: true,
          },
        
        ],
      },
    ]
  },
}

export default MainNav
