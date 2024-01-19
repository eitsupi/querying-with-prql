// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Querying with PRQL",
  tagline: "Data transformation with PRQL and DuckDB",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://eitsupi.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/querying-with-prql/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "eitsupi", // Usually your GitHub org/user name.
  projectName: "querying-with-prql", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: 'https://github.com/eitsupi/querying-with-prql/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Quering with PRQL",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/eitsupi/querying-with-prql",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "PRQL",
            items: [
              {
                label: "Website",
                href: "https://prql-lang.org/",
              },
              {
                label: "GitHub",
                href: "https://github.com/PRQL/prql",
              },
              {
                label: "Language book",
                href: "https://prql-lang.org/book/",
              },
              {
                label: "Playground",
                href: "https://prql-lang.org/playground/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @eitsupi. Built with Quarto and Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["bash", "python", "sql", "r", "elm"],
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
      },
    ],
  ],
};

module.exports = config;
