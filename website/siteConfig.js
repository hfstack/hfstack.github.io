/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/blog/img/docusaurus.svg',
    infoLink: 'https://www.baidu.com',
    pinned: true,
  },
];

const siteConfig = {
  title: '个人博客' /* title for your website */,
  tagline: 'A website for personal blog',
  url: 'https://hfstack.github.io' /* your website url */,
  baseUrl: '/blog/' /* base url for your project */,
  headerLinks: [
    {doc: 'doc1', label: '博客'},
    {doc: 'doc4', label: '开源项目'},
    {page: 'help', label: '帮助'},
    {blog: true, label: '简历'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'hfstack',
  organizationName: 'hfstack', // or set an env variable ORGANIZATION_NAME
  projectName: 'blog', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/hfstack/hfstack.github.io',
};

module.exports = siteConfig;
