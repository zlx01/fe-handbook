import {defineConfig} from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'fe-handbook',
  description: 'Front-end Developer HandBook',
  base: '/fe-handbook/',
  lastUpdated: true,
  markdown: {
    // lineNumbers: true,
  },
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/fundamentals/': sidebarFundamentals(),
      '/build-tools/': sidebarBuildTools(),
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/zlx01/fe-handbook'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present lancekee'
    },

    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: ''
    // },
  }
})

function nav() {
  return [
    {
      text: 'fundamentals',
      items: [
        {text: 'HTML', link: '/fundamentals/html/'},
        {text: 'CSS', link: '/fundamentals/css/'},
        {text: 'JavaScript', link: '/fundamentals/js/'},
      ]
    },
    {
      text: 'build-tools',
      items: [
        {
          text: 'package-manager',
          items: [
            {text: 'npm', link: '/build-tools/package-manager/npm/'},
            {text: 'yarn', link: '/build-tools/package-manager/yarn/'},
            {text: 'pnpm', link: '/build-tools/package-manager/pnpm/'},
          ]
        },
        {
          text: 'bundler',
          items: [
            {text: 'Webpack', link: '/build-tools/bundler/webpack/'},
          ]
        },
        {
          text: 'compiler',
          items: [
            {text: 'Babel', link: '/build-tools/compiler/babel/'},
          ]
        }
      ]
    },
    {
      text: 'other',
      items: [
        {text: 'Useful Libraries', link: '/other/wheel/'},
        {text: 'Code Style', link: '/other/code-style/'},
        {text: 'Polyfill vs Shim', link: '/other/polyfill-shim/'},
      ]
    }
  ]
}

function sidebarFundamentals() {
  return [
    {
      text: 'W3C',
      items: [
        {text: 'W3C标准', link: '/fundamentals/w3c/'}
      ]
    },
    {
      text: 'HTML',
      collapsible: true,
      items: [
        {text: 'HTML Notes', link: '/fundamentals/html/'},
      ]
    },
    {
      text: 'CSS',
      collapsible: true,
      items: [
        {text: 'CSS Notes', link: '/fundamentals/css/'},
      ]
    },
    {
      text: 'JavaScript',
      collapsible: true,
      items: [
        {text: 'JS Notes', link: '/fundamentals/js/'},
        {text: 'script标签', link: '/fundamentals/js/script-tag'},
        {text: '确定值的类型', link: '/fundamentals/js/determine-type'},
        {text: '类型转换', link: '/fundamentals/js/type-conversion'},
        {text: '对象属性遍历', link: '/fundamentals/js/traverse-object-keys'},
      ]
    },
  ]
}

function sidebarBuildTools() {
  return [
    {
      text: 'Build Toolchain',
      items: [
        {text: 'Introduction', link: '/build-tools/'}
      ]
    },
    {
      text: 'Package Manager',
      collapsible: true,
      items: [
        {
          text: 'npm',
          items: [
            {text: 'npm Notes', link: '/build-tools/package-manager/npm/'},
            {text: 'npx Notes', link: '/build-tools/package-manager/npm/npx'},
            {text: 'nvm Notes', link: '/build-tools/package-manager/npm/nvm'},
            {text: 'nrm Notes', link: '/build-tools/package-manager/npm/nrm'},
          ]
        },
        {
          text: 'yarn',
          items: [
            {text: 'yarn Notes', link: '/build-tools/package-manager/yarn/'},
          ]
        },
        {
          text: 'pnpm',
          items: [
            {text: 'pnpm Notes', link: '/build-tools/package-manager/pnpm/'},
          ]
        },
      ]
    },
    {
      text: 'Bundler',
      collapsible: true,
      items: [
        {
          text: 'Vite',
          items: [
            {text: 'Vite Notes', link: '/build-tools/bundler/vite/'},
          ]
        },
        {
          text: 'Webpack',
          items: [
            {text: 'Webpack Notes', link: '/build-tools/bundler/webpack/'},
          ]
        },
      ]
    },
    {
      text: 'Compiler',
      collapsible: true,
      items: [
        {
          text: 'Babel',
          items: [
            {text: 'Babel Notes', link: '/build-tools/compiler/babel/'},
          ]
        },
      ]
    },
  ]
}
