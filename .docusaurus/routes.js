
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','491'),
  exact: true,
},
{
  path: '/blog/all',
  component: ComponentCreator('/blog/all','b5f'),
  exact: true,
},
{
  path: '/blog/introducing-syrup-pool-stake-syrup-to-farm-new-tokens',
  component: ComponentCreator('/blog/introducing-syrup-pool-stake-syrup-to-farm-new-tokens','8e9'),
  exact: true,
},
{
  path: '/blog/start',
  component: ComponentCreator('/blog/start','22e'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','a25'),
  exact: true,
},
{
  path: '/blog/tags/announcement',
  component: ComponentCreator('/blog/tags/announcement','f00'),
  exact: true,
},
{
  path: '/blog/tags/chef',
  component: ComponentCreator('/blog/tags/chef','356'),
  exact: true,
},
{
  path: '/blog/tags/pancake-swap',
  component: ComponentCreator('/blog/tags/pancake-swap','16f'),
  exact: true,
},
{
  path: '/blog/tags/team',
  component: ComponentCreator('/blog/tags/team','ca4'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','8d5'),
  
  routes: [
{
  path: '/docs/en/guide',
  component: ComponentCreator('/docs/en/guide','2d3'),
  exact: true,
},
{
  path: '/docs/en/intro',
  component: ComponentCreator('/docs/en/intro','82c'),
  exact: true,
},
{
  path: '/docs/en/token',
  component: ComponentCreator('/docs/en/token','32f'),
  exact: true,
},
{
  path: '/docs/zh/guide',
  component: ComponentCreator('/docs/zh/guide','7a6'),
  exact: true,
},
{
  path: '/docs/zh/intro',
  component: ComponentCreator('/docs/zh/intro','7ec'),
  exact: true,
},
{
  path: '/docs/zh/token',
  component: ComponentCreator('/docs/zh/token','feb'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
