// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PHP User Group Metropolregion Rhein-Neckar',
  url: 'https://www.phpugmrn.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'phpugmrn', // Usually your GitHub org/user name.
  projectName: 'phpugmrn.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PHP User Group Metropolregion Rhein-Neckar',
        items: [
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Unsere Community',
            items: [
              {
                label: 'Meetup',
                href: 'https://www.meetup.com/de-DE/PHPUG-Rhein-Neckar/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/phpugmrn',
              },
              {
                label: '#phpugmrn PHP UG Slack',
                href: 'https://phpug.slack.com/',
              },
            ],
          },
          {
            title: 'Unsere Sponsoren',
            items: [
              {
                label: 'bitExpert AG',
                href: 'https://www.bitExpert.de',
              },
              {
                label: 'Dots United',
                href: 'https://www.dotsunited.de',
              },
            ],
          },
          {
            title: 'Mehr',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/phpugmrn',
              },
              {
                label: 'Vortrag vorschlagen',
                href: 'https://github.com/phpugmrn/talk-proposals',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PHP User Group Metropolregion Rhein-Neckar. Gebaut mit Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
    }),
};

module.exports = config;
