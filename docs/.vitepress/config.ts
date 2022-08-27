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
      '/server/': sidebarServer(),
      '/build-tools/': sidebarBuildTools(),
      '/advance/': sidebarAdvance(),
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
        {text: 'Browser', link: '/fundamentals/browser/'},
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
            {text: 'Vite', link: '/build-tools/bundler/vite/'},
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
      text: 'server',
      items: [
        {text: 'Nodejs', link: '/server/nodejs/'},
        {text: 'SSR', link: '/server/ssr/'},
        {text: 'Nginx', link: '/server/nginx/'},
        {text: 'CDN', link: '/server/cdn/'},
      ]
    },
    {
      text: 'advance',
      items: [
        {text: 'Test', link: '/advance/test/'},
        {text: 'micro-frontends', link: '/advance/micro-frontends/'},
      ]
    },
    {
      text: 'other',
      items: [
        {text: 'Useful Libraries', link: '/other/wheel/'},
        {text: 'Code Style', link: '/other/code-style/'},
        {text: '埋点和监控', link: '/other/event-tracking/'},
        {text: 'Personal Website', link: '/other/personal-website/'},
      ]
    }
  ]
}

function sidebarFundamentals() {
  return [
    {
      text: 'W3C',
      collapsible: true,
      items: [
        {text: 'W3C标准', link: '/fundamentals/w3c/'}
      ]
    },
    {
      text: 'HTML',
      collapsible: true,
      items: [
        {text: 'HTML Notes', link: '/fundamentals/html/'},
        {text: 'SEO', link: '/fundamentals/html/seo/'},
      ]
    },
    {
      text: 'CSS',
      collapsible: true,
      items: [
        {text: 'CSS Notes', link: '/fundamentals/css/'},
        {text: 'CSS Preprocessor', link: '/fundamentals/css/preprocessor/'},
        {text: 'Animations Library', link: '/fundamentals/css/animations-lib'},
        {
          text: 'CSS Framework',
          items: [
            {
              text: 'tailwindcss',
              link: '/fundamentals/css/framework/tailwindcss'
            },
            {
              text: 'styled-components',
              link: '/fundamentals/css/framework/styled-components'
            },
            {
              text: 'styled-jsx',
              link: '/fundamentals/css/framework/styled-jsx'
            },
            {
              text: 'css-modules',
              link: '/fundamentals/css/framework/css-modules'
            },
          ]
        },
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
        {text: '位运算符的应用', link: '/fundamentals/js/bit-op'},
      ]
    },
    {
      text: 'Browser',
      collapsible: true,
      items: [
        {text: 'Browser Notes', link: '/fundamentals/browser/'},
        {text: 'debug', link: '/fundamentals/browser/debug'},
      ]
    },
  ]
}

function sidebarServer() {
  return [
    {
      text: 'Nodejs',
      collapsible: true,
      items: [
        {
          text: 'Nodejs',
          items: [
            {text: 'Nodejs Notes', link: '/server/nodejs/'},
          ]
        },
        {
          text: 'Web Framework',
          items: [
            {text: 'Express', link: '/server/nodejs/express/'},
            {text: 'Koa', link: '/server/nodejs/koa/'},
            {text: 'Egg', link: '/server/nodejs/egg/'},
          ]
        },
        {
          text: 'Templating Language',
          items: [
            {text: 'ejs', link: '/server/nodejs/ejs/'},
          ]
        },
        {
          text: 'Communication',
          items: [
            {text: 'socket.io', link: '/server/nodejs/socket-io/'},
          ]
        },
      ]
    },
    {
      text: 'SSR',
      collapsible: true,
      items: [
        {
          text: 'Introduction', link: '/server/ssr/'
        },
        {
          text: 'Framework',
          items: [
            {text: 'Nuxt', link: '/server/ssr/nuxtjs/'},
            {text: 'Next', link: '/server/ssr/nextjs/'},
          ]
        },
      ]
    },
    {
      text: 'Nginx',
      collapsible: true,
      items: [
        {
          text: 'Nginx Notes', link: '/server/nginx/'
        },
      ]
    },
    {
      text: 'CDN',
      collapsible: true,
      items: [
        {
          text: 'Service Provider', link: '/server/cdn/'
        },
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
        {
          text: 'Rollup', link: '/build-tools/bundler/rollup/'
        },
        {
          text: 'esbuild', link: '/build-tools/bundler/esbuild/'
        },
        {
          text: 'snowpack', link: '/build-tools/bundler/snowpack/'
        },
        {
          text: 'parcel', link: '/build-tools/bundler/parcel/'
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
            {text: 'Polyfill vs Shim', link: '/build-tools/compiler/polyfill-shim/'},
          ]
        },
      ]
    },
  ]
}

function sidebarAdvance() {
  return [
    {
      text: 'Test',
      collapsible: true,
      items: [
        {text: 'Introduction', link: '/advance/test/'},
        {
          text: 'unit test',
          items: [
            {text: 'Jest', link: '/advance/test/unit/jest'},
            {text: 'Mocha', link: '/advance/test/unit/mocha'},
            {text: 'Vitest', link: '/advance/test/unit/vitest'},
          ]
        },
        {
          text: 'component test',
          items: [
            {text: 'vue-test-utils', link: '/advance/test/component/vue-test-utils'},
          ]
        },
        {
          text: 'e2e test',
          items: [
            {text: 'Cypress', link: '/advance/test/e2e/cypress'},
            {text: 'Puppeteer', link: '/advance/test/e2e/puppeteer'},
            {text: 'TestCafe', link: '/advance/test/e2e/testcafe'},
          ]
        },
      ]
    },
    {
      text: 'micro-frontends',
      collapsible: true,
      items: [
        {text: 'Introduction', link: '/advance/micro-frontends/'},
        {text: 'qiankun', link: '/advance/micro-frontends/qiankun'},
        {text: 'single-spa', link: '/advance/micro-frontends/single-spa'},
      ]
    }
  ]
}
