/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: "PancakeSwap",
  tagline: "Make Something Happended.",
  url: "https://pancakeswap.finance",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/pancake.png",
  organizationName: "pancakeswap", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PanCake Swap",
      logo: {
        alt: "My",
        src: "img/pancake.png",
      },
      items: [
        ////////////////// Content //////////////
        // Top bar Navigation
        {
          to: "docs/en/intro",
          activeBasePath: "123",
          label: "Doc",
          position: "left",
        },
        {
          to: "blog",
          activeBasePath: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://pancakeswap.info/",
          activeBasePath: "analytics",
          label: "Analytics",
          position: "left",
        },
        ///////////
        { search: true }, //TODO
        {
          href: "https://github.com/pancakeswap",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Telegram",
          items: [
            {
              label: "Officail Announcement",
              href: "https://t.me/PancakeSwapAnn",
              // to: 'blog',
            },
            {
              label: "PancakeSwap(EN)",
              href: "https://t.me/PancakeSwap",
            },
            {
              label: "PancakeSwap(中文)",
              href: "https://t.me/PancakeSwap_CN",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/pancakeswap",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Medium",
              href: "https://medium.com/@pancakeswap",
            },
          ],
        },
        {
          title: "Learn",
          items: [
            {
              label: "Guide",
              to: "docs/",
            },
          ],
        },

        {
          title: "Product",
          items: [
            {
              label: "Pancake Swap",
              href: "https://pancakeswap.finance",
            },
            {
              label: "Pancake Farm",
              href: "https://pancakeswap.finance/farms",
            },
            {
              label: "Pancake Stakig",
              href: "https://pancakeswap.finance/staking",
            },
            {
              label: "Pancake Voting",
              href: "https://voting.pancakeswap.info",
            },
            {
              label: "Pancake Lottery",
              href: "https://pancakeswap.finance/lottery",
            },
          ],
        },
      ],
      logo: {
        //TODO
        alt: "Facebook Open Source Logo12134",
        src: "img/oss_logo.png",
        href: "https://opensource.facebook.com",
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright. © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
