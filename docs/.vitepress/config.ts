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
      '/framework/': sidebarFramework(),
      '/server/': sidebarServer(),
      '/advance/': sidebarAdvance(),
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/zlx01/fe-handbook'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present lancekee'
    },

    algolia: {
      appId: 'D5I8QWQRGT',
      apiKey: '47979d23dd02b788a31a96a9894e6bdb',
      indexName: 'fe-handbook'
    },
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
        {text: 'HTTP', link: '/fundamentals/http/'},
        {text: 'Network', link: '/fundamentals/network/'},
      ]
    },
    {
      text: 'build-tools',
      items: [
        {
          text: 'Package-manager',
          items: [
            {text: 'npm', link: '/build-tools/package-manager/npm/'},
            {text: 'yarn', link: '/build-tools/package-manager/yarn/'},
            {text: 'pnpm', link: '/build-tools/package-manager/pnpm/'},
          ]
        },
        {
          text: 'Bundler',
          items: [
            {text: 'Vite', link: '/build-tools/bundler/vite/'},
            {text: 'Webpack', link: '/build-tools/bundler/webpack/'},
          ]
        },
        {
          text: 'Compiler',
          items: [
            {text: 'Babel', link: '/build-tools/compiler/babel/'},
          ]
        }
      ]
    },
    {
      text: 'framework',
      items: [
        {text: 'Vue', link: '/framework/vue/'},
        {text: 'React', link: '/framework/react/'},
      ]
    },
    {
      text: 'server',
      items: [
        {text: 'Nodejs', link: '/server/nodejs/'},
        {text: 'SSR', link: '/server/ssr/'},
        {text: 'Nginx', link: '/server/nginx/'},
        {text: 'CDN', link: '/server/cdn/'},
        {text: 'DevOps', link: '/server/DevOps/'},
      ]
    },
    {
      text: 'advance',
      items: [
        {text: 'Security', link: '/advance/security/'},
        {text: 'Test', link: '/advance/test/'},
        {text: 'Event Tracking', link: '/advance/event-tracking/'},
        {text: 'Micro-frontends', link: '/advance/micro-frontends/'},
        {text: 'WebGL', link: '/advance/webgl/'},
      ]
    },
    {
      text: 'other',
      items: [
        {text: 'Useful Libraries', link: '/other/wheel/'},
        {text: 'Code Style', link: '/other/code-style/'},
        {text: 'Personal Website', link: '/other/personal-website/'},
        {text: 'i18n', link: '/other/i18n/'},
        {text: 'Matrix', link: '/other/matrix/'},
        {text: 'Future', link: '/other/future/'},
      ]
    },
    {
      text: 'new world',
      items: [
        {text: 'Desktop App', link: '/new-world/desktop-app/'},
        {text: 'Mobile App', link: '/new-world/mobile-app/'},
        {text: 'MiniProgram', link: '/new-world/miniprogram/'},
        {text: 'WeChat', link: '/new-world/wechat/'},
        {text: 'PWA', link: '/new-world/pwa/'},
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
        {text: 'Canvas', link: '/fundamentals/html/canvas'},
        {text: 'SVG', link: '/fundamentals/html/svg/'},
        {text: 'SEO', link: '/fundamentals/html/seo/'},
        {text: '移动端适配', link: '/fundamentals/html/mobile-device-adaptation'},
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
        {
          text: '模块化',
          items: [
            {text: 'CommonJS', link: '/fundamentals/js/modular/commonjs'},
            {text: 'ESM', link: '/fundamentals/js/modular/esm'},
            {text: 'AMD', link: '/fundamentals/js/modular/amd'},
            {text: 'UMD', link: '/fundamentals/js/modular/umd'},
          ]
        },
        {
          text: '请求通信',
          items: [
            {text: '数据交换格式', link: '/fundamentals/js/request/data-type-format'},
            {text: 'XMLHttpRequest', link: '/fundamentals/js/request/xhr'},
            {text: 'fetch', link: '/fundamentals/js/request/fetch'},
            {text: 'WebSocket', link: '/fundamentals/js/request/websocket'},
            {text: 'axios', link: '/fundamentals/js/request/axios'},
          ]
        },
        {
          text: 'DOM',
          items: [
            {text: '', link: '/fundamentals/js/dom/'}
          ]
        },
        {
          text: '实战方案',
          items: [
            {text: '判断元素是否在视窗内', link: '/fundamentals/js/practice/intersection-detection'},
            {text: '动画实现方式', link: '/fundamentals/js/practice/perform-animation'},
          ]
        }
      ]
    },
    {
      text: 'HTTP',
      collapsible: true,
      items: [
        {text: 'HTTP Notes', link: '/fundamentals/http/'},
        {text: 'HTTP Caching', link: '/fundamentals/http/caching'},
        {text: 'Content Security Policy', link: '/fundamentals/http/csp'},
        {text: 'Proxy', link: '/fundamentals/http/proxy'},
      ]
    },
    {
      text: 'Network',
      collapsible: true,
      items: [
        {text: 'Network Notes', link: '/fundamentals/network/'},
        {text: '公网ip', link: '/fundamentals/network/host-ip'},
        {text: 'CNAME', link: '/fundamentals/network/domain-cname'},
        {text: 'NAT', link: '/fundamentals/network/nat'},
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

function sidebarFramework() {
  return [
    {
      text: 'MVVM',
      collapsible: true,
      items: [
        {text: 'MVC MVP MVVM', link: '/framework/mvvm/mvc-mvp-mvvm'}
      ]
    },
    {
      text: 'Vue',
      collapsible: true,
      items: [
        {
          text: 'Introduction', link: '/framework/vue/'
        },
        {
          text: 'Vue2.x',
          items: [
            {text: 'Vue2 Notes', link: '/framework/vue/v2/'},
            {text: 'Vue CLI', link: '/framework/vue/v2/vue-cli/'},
            {text: 'Vue Loader', link: '/framework/vue/v2/vue-loader/'},
          ]
        },
        {
          text: 'Vue3.x',
          items: [
            {text: 'Vue3 Notes', link: '/framework/vue/v3/'},
            {text: 'create-vue', link: '/framework/vue/v3/create-vue/'},
            {text: 'Pinia', link: '/framework/vue/v3/pinia/'},
          ]
        },
        {
          text: 'UI', link: '/framework/vue/ui'
        },
      ]
    },
    {
      text: 'React',
      collapsible: true,
      items: [
        {
          text: 'React',
          items: [
            {text: 'React Notes', link: '/framework/react/'},
          ]
        },
        {
          text: 'UI', link: '/framework/react/ui'
        },
      ]
    },
    {
      text: 'Other',
      collapsible: true,
      items: [
        {text: 'Svelte', link: '/framework/other/svelte'},
        {text: 'Angular', link: '/framework/other/angular'},
        {text: 'Bootstrap', link: '/framework/other/bootstrap'},
        {text: 'uiverse', link: '/framework/other/uiverse'},
      ]
    }
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
            {text: 'ESM vs CJS', link: '/server/nodejs/mjs-cjs'},
            {text: 'V8', link: '/server/nodejs/v8/'},
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
    {
      text: 'DevOps',
      collapsible: true,
      items: [
        {
          text: 'Introduction', link: '/server/DevOps/'
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
      text: 'Micro-frontends',
      collapsible: true,
      items: [
        {text: 'Introduction', link: '/advance/micro-frontends/'},
        {text: 'qiankun', link: '/advance/micro-frontends/qiankun'},
        {text: 'single-spa', link: '/advance/micro-frontends/single-spa'},
      ]
    },
    {
      text: 'WebGL',
      collapsible: true,
      items: [
        {text: 'Introduction', link: '/advance/webgl/'},
        {text: 'Three.js', link: '/advance/webgl/threejs/'},
      ]
    }
  ]
}
