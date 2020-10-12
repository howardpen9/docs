export default {
  title: "PancakeSwap",
  tagline: "Make Something Happended.",
  url: "https://pancakeswap.finance",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/pancake.png",
  organizationName: "pancakeswap",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "PanCake Swap",
      logo: {
        alt: "My",
        src: "img/pancake.png",
      },
      items: [
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
        {
          search: true,
          position: "left",
        },
        {
          href: "https://github.com/pancakeswap",
          label: "GitHub",
          position: "right",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
      links: [
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
          title: "Telegram",
          items: [
            {
              label: "Officail Announcement",
              href: "https://t.me/PancakeSwapAnn",
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
        alt: "Facebook Open Source Logo12134",
        src: "img/oss_logo.png",
        href: "https://opensource.facebook.com",
      },
      copyright: "Copyright. © 2020 Facebook, Inc. Built with Docusaurus.",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: "🌜",
        darkIconStyle: {},
        lightIcon: "🌞",
        lightIconStyle: {},
      },
    },
    metadatas: [],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("../sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("../src/css/custom.css"),
        },
      },
    ],
  ],
  onDuplicateRoutes: "warn",
  customFields: {},
  plugins: [],
  themes: [],
  titleDelimiter: "|",
};
