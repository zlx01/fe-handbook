import {DefaultTheme, defineConfig} from 'vitepress'

const base = process.env.DEPLOY_BASE

export default defineConfig({
  lang: 'en-US',
  title: 'fe-handbook',
  description: 'Front-End Web Developer HandBook',
  base: base || '/fe-handbook/',
  head: [
    ['meta', {name: 'author', content: 'zlx'}],
    ['meta', {
      name: 'keywords',
      content: 'frontend, front-end, handbook, developer, web, html, css, javascript, typescript, vue, react'
    }],
    ['meta', {name: 'generator', content: 'vitepress'}],
  ],
  lastUpdated: true,
  markdown: {
    // lineNumbers: true,
    externalLinks: {target: '_blank', rel: 'nofollow noopener noreferrer'},
    // image: {
    //   lazyLoading: true,
    // }
  },
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
  ],
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/fundamentals/': sidebarFundamentals(),
      '/build-tools/': sidebarBuildTools(),
      '/framework/': sidebarFramework(),
      '/advance/': sidebarAdvance(),
      '/runtime/': sidebarRuntime(),
      '/server/': sidebarServer(),
      '/app/': sidebarApp(),
      '/devops/': sidebarDevOps(),
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/zlx01/fe-handbook'}
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'MIT Licensed | Copyright © 2022-present zlx'
    },

    search:{
      provider: 'algolia',
      options: {
        appId: 'D5I8QWQRGT',
        apiKey: '47979d23dd02b788a31a96a9894e6bdb',
        indexName: 'fe-handbook'
      },
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'fundamentals',
      items: [
        {text: 'HTML', link: '/fundamentals/html/'},
        {text: 'CSS', link: '/fundamentals/css/'},
        {text: 'JavaScript', link: '/fundamentals/js/'},
        {text: 'TypeScript', link: '/fundamentals/ts/'},
        {text: 'Network', link: '/fundamentals/network/'},
        {text: 'Browser', link: '/fundamentals/browser/'},
        {text: 'Git', link: '/fundamentals/git/'},
        {text: 'IDE', link: '/fundamentals/ide/'},
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
            {text: 'Webpack', link: '/build-tools/bundler/webpack/'},
            {text: 'Vite', link: '/build-tools/bundler/vite/'},
          ]
        },
        {
          text: 'Compiler',
          items: [
            {text: 'Babel', link: '/build-tools/compiler/babel/'},
            {text: 'swc', link: '/build-tools/compiler/swc'},
          ]
        },
        {
          text: 'Linter',
          items: [
            {text: 'ESLint', link: '/build-tools/linter/eslint/'},
          ]
        },
        {
          text: 'Formatter',
          items: [
            {text: 'Prettier', link: '/build-tools/formatter/prettier/'},
          ],
        },
      ]
    },
    {
      text: 'framework',
      items: [
        {text: 'Vue', link: '/framework/vue/'},
        {text: 'React', link: '/framework/react/'},
        {text: 'Nuxt', link: '/framework/nuxt/'},
        {text: 'Nextjs', link: '/framework/nextjs/'},
      ]
    },
    {
      text: 'advance',
      items: [
        {text: 'Nodejs', link: '/runtime/nodejs/'},
        {text: 'Deno', link: '/runtime/deno/'},
        {text: 'Bun', link: '/runtime/bun/'},
        {text: '渲染模式', link: '/advance/rendering-mode/' },
        {text: 'Test', link: '/advance/test/'},
        {text: 'Low Code', link: '/advance/low-code/'},
        {text: 'Micro-frontends', link: '/advance/micro-frontends/'},
        {text: 'PWA', link: '/advance/pwa/'},
        {text: 'WebGL', link: '/advance/webgl/'},
        {text: 'i18n', link: '/advance/i18n/'},
        {text: 'Web Application Security', link: '/advance/security/'},
        {text: 'WebAssembly', link: '/advance/webassembly/'},
        {
          text: 'Server',
          link: '/server/'
        },
        {
          text: 'App',
          link: '/app/',
        },
        {
          text: 'DevOps',
          link: '/devops/',
        },
      ]
    },
    {
      text: 'other',
      items: [
        {text: 'Useful Libraries', link: '/other/wheel/'},
        {text: 'Matrix', link: '/other/matrix/'},
      ]
    },
  ]
}

function sidebarFundamentals(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'W3C',
      link: '/fundamentals/w3c/',
    },
    {
      text: 'HTML',
      link: '/fundamentals/html/',
      collapsed: true,
      items: [
        {text: 'meta', link: '/fundamentals/html/meta'},
        {text: 'link', link: '/fundamentals/html/link'},
        {text: 'script', link: '/fundamentals/html/script'},
        {text: 'a', link: '/fundamentals/html/a'},
        {text: 'img', link: '/fundamentals/html/img'},
        {text: 'form', link: '/fundamentals/html/form'},
        {text: 'iframe', link: '/fundamentals/html/iframe'},
        {text: 'semantic', link: '/fundamentals/html/semantic'},
        {text: 'Canvas', link: '/fundamentals/html/canvas'},
        {text: 'SVG', link: '/fundamentals/html/svg'},
        {text: 'SEO', link: '/fundamentals/html/seo'},
        {text: 'web components', link: '/fundamentals/html/web-components/'},
        {text: 'crossorigin', link: '/fundamentals/html/html-attribute-crossorigin'},
      ]
    },
    {
      text: 'CSS',
      link: '/fundamentals/css/',
      collapsed: true,
      items: [
        {
          text: 'CSS Preprocessor',
          link: '/fundamentals/css/preprocessor/',
          collapsed: true,
          items: [
            {text: 'sass/scss', link: '/fundamentals/css/preprocessor/scss'},
            {text: 'less', link: '/fundamentals/css/preprocessor/less'},
            {text: 'stylus', link: '/fundamentals/css/preprocessor/stylus'},
            {text: 'postcss', link: '/fundamentals/css/preprocessor/postcss'},
          ]
        },
        {text: 'CSS Modules', link: '/fundamentals/css/css-modules'},
        {
          text: 'CSS in JS',
          collapsed: true,
          items: [
            {text: 'styled-jsx', link: '/fundamentals/css/css-in-js/styled-jsx'},
            {text: 'styled-components', link: '/fundamentals/css/css-in-js/styled-components'},
            {text: 'emotion', link: 'https://emotion.sh/'},
          ],
        },
        {
          text: 'CSS Framework',
          collapsed: true,
          items: [
            {text: 'tailwindcss', link: '/fundamentals/css/framework/tailwindcss'},
            {text: 'unocss', link: '/fundamentals/css/framework/unocss'},
          ],
        },
        {text: 'Animations Library', link: '/fundamentals/css/animations-lib'},
      ]
    },
    {
      text: 'JavaScript',
      link: '/fundamentals/js/',
      collapsed: true,
      items: [
        {text: '正则表达式', link: '/fundamentals/js/regular-expression'},
        {
          text: '模块化',
          link: '/fundamentals/js/modular/',
          collapsed: true,
          items: [
            {text: 'ESM vs CJS', link: '/fundamentals/js/modular/mjs-cjs'},
            {text: 'circular dependency', link: '/fundamentals/js/modular/circular-dependency'},
          ]
        },
        {
          text: '请求通信',
          collapsed: true,
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
          link: '/fundamentals/js/dom/',
          collapsed: true,
          items: [
            {text: 'Event Flow', link: '/fundamentals/js/dom/event-flow'},
            {
              text: 'properties and attributes',
              link: '/fundamentals/js/dom/difference-between-properties-and-attributes'
            },
          ]
        },
        {
          text: '实战方案',
          collapsed: true,
          items: [
            {text: '判断元素是否在视窗内', link: '/fundamentals/js/practice/intersection-detection'},
            {text: '动画实现方式', link: '/fundamentals/js/practice/perform-animation'},
          ]
        }
      ]
    },
    {
      text: 'TypeScript',
      link: '/fundamentals/ts/',
      collapsed: true,
      items: [
        {text: 'tsconfig', link: '/fundamentals/ts/tsconfig'},
        {text: 'declare', link: '/fundamentals/ts/declare'},
        {text: 'Type Search', link: 'https://www.typescriptlang.org/dt/search/?search='},
        {text: 'jsdoc', link: '/fundamentals/js/jsdoc'},
        {text: 'tsdoc', link: '/fundamentals/ts/tsdoc'},
      ],
    },
    {
      text: 'Network',
      link: '/fundamentals/network/',
      collapsed: true,
      items: [
        {text: 'IP', link: '/fundamentals/network/host-ip'},
        {text: 'Domain', link: '/fundamentals/network/domain'},
        {
          text: 'HTTP',
          link: '/fundamentals/network/http/',
          collapsed: true,
          items: [
            {text: 'HTTPS', link: '/fundamentals/network/http/https'},
            {text: 'SSL证书部署', link: '/fundamentals/network/http/ssl-cert-nginx'},
            {text: 'HTTP Caching', link: '/fundamentals/network/http/caching'},
            {text: 'Content Security Policy', link: '/fundamentals/network/http/csp'},
          ]
        },
        {text: 'Proxy', link: '/fundamentals/network/proxy'},
        {text: 'DNS', link: '/fundamentals/network/DNS'},
        {text: 'CNAME', link: '/fundamentals/network/cname'},
        {text: 'NAT', link: '/fundamentals/network/nat'},
      ]
    },
    {
      text: 'Browser',
      link: '/fundamentals/browser/',
      collapsed: true,
      items: [
        {text: 'debug', link: '/fundamentals/browser/debug'},
        {text: 'Same Origin Policy', link: '/fundamentals/browser/same-origin-policy'},
        {text: 'Event Loop', link: '/fundamentals/browser/event-loop'},
      ]
    },
    {
      text: 'Git',
      link: '/fundamentals/git/',
      collapsed: true,
      items: [
        {text: 'Installing Git', link: '/fundamentals/git/installing-git/'},
        {text: 'Operating Mechanism', link: '/fundamentals/git/operating-mechanism'},
        {text: 'Workflow', link: '/fundamentals/git/workflow'},
        {text: '.gitignore', link: '/fundamentals/git/gitignore'},
        {text: '.gitattributes', link: '/fundamentals/git/gitattributes'},
        {text: 'git-hook', link: '/fundamentals/git/git-hook'},
        {
          text: 'GitHub',
          link: '/fundamentals/git/github/',
          collapsed: true,
          items: [
            {text: 'Actions（DevOps）', link: '/devops/ci-cd/github-actions'},
            {text: 'Copilot', link: '/fundamentals/git/github/copilot'},
            {text: 'github.dev', link: '/fundamentals/git/github/github-dev'},
            {text: 'Codespaces', link: '/fundamentals/git/github/codespaces'},
          ]
        },
        {
          text: 'GitLab',
          link: '/fundamentals/git/gitlab/',
          collapsed: true,
          items: [
            {text: 'CI/CD（DevOps）', link: '/devops/ci-cd/gitlab-ci'},
          ]
        },
      ]
    },
    {
      text: 'IDE',
      link: '/fundamentals/ide/',
      collapsed: true,
      items: [
        {text: 'VSCode', link: '/fundamentals/ide/vscode'},
        {text: 'WebStorm', link: '/fundamentals/ide/webstorm'},
      ]
    },
    {
      text: 'ADE',
      link: '/fundamentals/ade/',
      collapsed: true,
      items: [
      ]
    }
  ]
}

function sidebarFramework() {
  return [
    {
      text: 'Vue',
      link: '/framework/vue/',
      collapsed: true,
      items: [
        {
          text: 'Vue2.x',
          link: '/framework/vue/v2/',
          items: [
            {text: 'TypeScript', link: '/framework/vue/v2/ts'},
            {text: 'Vue CLI', link: '/framework/vue/v2/vue-cli/'},
            {text: 'Vue Loader', link: '/framework/vue/v2/vue-loader/'},
            {text: 'Vue Router', link: '/framework/vue/v2/vue-router/'},
            {text: 'Vuex', link: '/framework/vue/v2/vuex/'},
            {text: 'Vue Test Utils', link: '/framework/vue/v2/vuex/'},
            {text: 'Source Code', link: '/framework/vue/v2/source-code/'},
          ]
        },
        {
          text: 'Vue3.x',
          link: '/framework/vue/v3/',
          items: [
            {text: 'create-vue', link: '/framework/vue/v3/create-vue/'},
            {text: 'Vue Router', link: '/framework/vue/v3/vue-router/'},
            {text: 'Pinia', link: '/framework/vue/v3/pinia/'},
            {text: 'Vue Test Utils', link: '/framework/vue/v2/vuex/'},
            {text: 'UI Library', link: '/framework/vue/v3/ui'},
          ]
        },
      ]
    },
    {
      text: 'React',
      link: '/framework/react/',
      collapsed: true,
      items: [
        {
          text: 'Create React App', link: '/framework/react/create-react-app',
        },
      ]
    },
    {
      text: 'Nuxt',
      link: '/framework/nuxt/',
      collapsed: true,
      items: []
    },
    {
      text: 'Next.js',
      link: '/framework/nextjs/',
      collapsed: true,
      items: [
      ]
    },
    {
      text: 'Svelte',
      link: '/framework/svelte/'
    },
    {
      text: 'Wxmp',
      link: '/framework/wxmp/',
      collapsed: true,
      items: [
        {text: 'miniprogram', link: '/framework/wxmp/miniprogram/'},
        {text: 'officialaccount', link: '/framework/wxmp/officialaccount/'},
      ]
    },
    {
      text: 'Other',
      link: '/framework/other',
    }
  ]
}

function sidebarBuildTools() {
  return [
    {
      text: 'Build Toolchain',
      link: '/build-tools/',
    },
    {
      text: 'VitePlus',
      link: '/build-tools/viteplus',
    },
    {
      text: 'Package Manager',
      collapsed: false,
      items: [
        {
          text: 'npm',
          link: '/build-tools/package-manager/npm/',
          items: [
            {text: 'npm cli', link: '/build-tools/package-manager/npm/cli'},
            {text: 'package.json', link: '/build-tools/package-manager/npm/package.json/'},
          ]
        },
        {
          text: 'yarn', link: '/build-tools/package-manager/yarn/',
        },
        {
          text: 'pnpm', link: '/build-tools/package-manager/pnpm/',
        },
        {
          text: 'nvm', link: '/build-tools/package-manager/nvm'
        },
        {
          text: 'nrm', link: '/build-tools/package-manager/nrm'
        },
        {
          text: 'corepack', link: '/build-tools/package-manager/corepack/',
        },
        {text: 'Verdaccio', link: '/build-tools/package-manager/verdaccio/'},
        {
          text: 'other', link: '/build-tools/package-manager/other/',
        },
      ]
    },
    {
      text: 'Bundler',
      collapsed: false,
      items: [
        {
          text: 'Webpack', link: '/build-tools/bundler/webpack/',
        },
        {
          text: 'Rspack', link: '/build-tools/bundler/rspack/',
        },
        {
          text: 'Vite', link: '/build-tools/bundler/vite/',
        },
        {
          text: 'esbuild', link: '/build-tools/bundler/esbuild'
        },
        {
          text: 'Rollup', link: '/build-tools/bundler/rollup'
        },
        {
          text: 'Rolldown', link: '/build-tools/bundler/rolldown'
        },
        {
          text: 'parcel', link: '/build-tools/bundler/parcel'
        },
        {
          text: 'turbopack', link: '/build-tools/bundler/turbopack'
        },
      ]
    },
    {
      text: 'Compiler',
      collapsed: false,
      items: [
        {
          text: 'Babel', link: '/build-tools/compiler/babel/',
        },
        {
          text: 'swc', link: '/build-tools/compiler/swc'
        },
        {
          text: 'Terser', link: '/build-tools/compiler/terser'
        },
        {
          text: 'PostCSS', link: '/build-tools/compiler/postcss'
        },
        {
          text: 'Lightning CSS', link: '/build-tools/compiler/lightning-css'
        },
        {
          text: 'Oxc', link: '/build-tools/compiler/oxc'
        },
      ]
    },
    {
      text: 'Linter',
      collapsed: false,
      items: [
        {
          text: 'ESLint', link: '/build-tools/linter/eslint/',
        },
        {
          text: 'Rslint', link: '/build-tools/linter/rslint'
        },
        {
          text: 'Oxlint', link: '/build-tools/linter/oxlint'
        },
        {
          text: 'Biome', link: '/build-tools/linter/biome'
        },
        {
          text: 'stylelint', link: 'https://stylelint.io/',
        },
      ]
    },
    {
      text: 'Formatter',
      collapsed: false,
      items: [
        {
          text: 'Prettier', link: '/build-tools/formatter/prettier/',
        },
        {
          text: 'Oxfmt', link: '/build-tools/formatter/oxfmt'
        },
        {
          text: 'Biome', link: 'https://biomejs.dev/'
        },
      ]
    },
    {
      text: 'Plugin System',
      collapsed: false,
      items: [
        {
          text: 'Unplugin', link: '/build-tools/plugin/unplugin'
        },
      ]
    },
    {
      text: 'Monorepo',
      link: '/build-tools/monorepo/',
      collapsed: false,
      items: [
        {
          text: 'Turborepo', link: '/build-tools/monorepo/turborepo'
        },
      ]
    },
  ]
}

function sidebarRuntime() {
  return [
    {
      text: 'Nodejs',
      link: '/runtime/nodejs/',
      collapsed: true,
      items: [
        {text: 'pm2', link: '/runtime/nodejs/pm2/'},
      ]
    },
    {
      text: 'Deno',
      link: '/runtime/deno/',
      collapsed: true,
      items: [
        {text: 'Package Registry', link: 'https://jsr.io/'},
        {text: 'DenoDeploy', link: 'https://deno.com/deploy'},
      ]
    },
    {
      text: 'Bun',
      link: '/runtime/bun/',
    },
    {
      text: 'Rendering Mode',
      link: '/advance/rendering-mode/',
      collapsed: true,
      items: [
        {text: 'CSR', link: '/advance/rendering-mode/csr'},
        {text: 'SSR', link: '/advance/rendering-mode/ssr'},
        {
          text: 'SSG',
          link: '/advance/rendering-mode/ssg',
          items: [
            {text: 'Hexo', link: '/advance/ssg/hexo'},
            {text: 'Hugo', link: '/advance/ssg/hugo'},
            {text: 'Jekyll', link: '/advance/ssg/jekyll'},
            {text: 'Vuepress', link: '/advance/ssg/vuepress'},
            {text: 'Vitepress', link: '/advance/ssg/vitepress'},
            {text: 'Rspress', link: '/advance/ssg/rspress'},
            {text: 'Docusaurus', link: '/advance/ssg/docusaurus'},
            {text: 'Gatsby', link: '/advance/ssg/gatsby'},
            {text: 'Astro', link: '/advance/ssg/astro'},
          ]
        },
      ]
    },
  ]
}
function sidebarAdvance() {
  return [
    {
      text: 'CSR', link: '/advance/csr/',
    },
    {
      text: 'SSR',
      link: '/advance/ssr/',
      collapsed: true,
      items: [
        {text: 'Nuxt', link: '/framework/nuxt'},
        {text: 'Next', link: '/framework/nextjs'},
      ]
    },
    {
      text: 'SSG',
      link: '/advance/ssg/',
      collapsed: true,
      items: [
        {text: 'Hexo', link: '/advance/ssg/hexo'},
        {text: 'Hugo', link: '/advance/ssg/hugo'},
        {text: 'Jekyll', link: '/advance/ssg/jekyll'},
        {text: 'Vuepress', link: '/advance/ssg/vuepress'},
        {text: 'Vitepress', link: '/advance/ssg/vitepress'},
        {text: 'Rspress', link: '/advance/ssg/rspress'},
        {text: 'Docusaurus', link: '/advance/ssg/docusaurus'},
        {text: 'Gatsby', link: '/advance/ssg/gatsby'},
        {text: 'Astro', link: '/advance/ssg/astro'},
      ]
    },
    {
      text: 'Test',
      link: '/advance/test/',
      collapsed: true,
      items: [
        {
          text: 'unit test',
          collapsed: true,
          items: [
            {text: 'Jest', link: '/advance/test/unit/jest'},
            {text: 'Mocha', link: '/advance/test/unit/mocha'},
            {text: 'Vitest', link: '/advance/test/unit/vitest'},
          ]
        },
        {
          text: 'component test',
          collapsed: true,
          items: [
            {text: 'Testing Library', link: '/advance/test/component/testing-library'},
            {text: 'vue-test-utils', link: '/advance/test/component/vue-test-utils'},
          ]
        },
        {
          text: 'e2e test',
          link: '/advance/test/e2e/',
          collapsed: true,
          items: [
            {text: 'Cypress', link: '/advance/test/e2e/cypress'},
            {text: 'Playwright', link: '/advance/test/e2e/playwright'},
            {text: 'WebdirverIO', link: 'https://webdriver.io/'},
            {text: 'Nightwatch', link: 'https://nightwatchjs.org/'},
            {text: 'TestCafe', link: '/advance/test/e2e/testcafe'},
            {text: 'Puppeteer', link: '/advance/test/e2e/puppeteer'},
          ]
        },
      ]
    },

    {text: 'Low Code', link: '/advance/low-code/'},
    {
      text: 'Micro-frontends',
      link: '/advance/micro-frontends/',
      collapsed: true,
      items: [
        {text: 'qiankun', link: '/advance/micro-frontends/qiankun'},
        {text: 'single-spa', link: '/advance/micro-frontends/single-spa'},
      ]
    },
    {text: 'PWA', link: '/advance/pwa/'},
    {
      text: 'WebGL',
      link: '/advance/webgl/',
      collapsed: true,
      items: [
        {text: 'Three.js', link: '/advance/webgl/threejs/'},
      ]
    },
    {text: 'i18n', link: '/advance/i18n/'},
    {
      text: 'Web Application Security',
      link: '/advance/security/',
    },
    {text: 'WebAssembly', link: '/advance/webassembly/'},
    {
      text: 'Extension',
      collapsed: true,
      items: [
        {text: 'Chrome Extensions', link: '/advance/extension/chrome-extensions'},
        {text: 'VS Code Extensions', link: '/advance/extension/vscode-extensions'},
      ]
    },
  ]
}

function sidebarServer() {
  return [
    {text: 'Server', link: '/server/'},
    {
      text: 'Web Framework',
      collapsed: true,
      items: [
        {text: 'Express', link: '/server/framework/express/'},
        {text: 'Koa', link: '/server/framework/koa'},
        {text: 'Egg', link: '/server/framework/egg'},
        {text: 'Nestjs', link: '/server/framework/nestjs/'},
        {text: 'hapi', link: '/server/framework/hapi'},
        {text: 'Fastify', link: '/server/framework/fastify'},
        {text: 'Hono', link: '/server/framework/hono'},
      ]
    },
    {text: 'Database', link: '/server/database/'},
    {text: 'Redis', link: '/server/redis/'},
    {text: 'MongoDB', link: '/server/mongodb/'},
    {
      text: 'BaaS',
      collapsed: true,
      items: [
        {text: 'Supabase', link: '/server/baas/supabase/'},
        {text: 'Firebase', link: '/server/baas/firebase/'},
        {text: 'Appwrite', link: '/server/baas/appwrite/'},
      ]
    },
    {
      text: 'Message Queue',
      collapsed: true,
      items: [
        {text: 'Kafka', link: '/server/mq/kafka'},
        {text: 'RabbitMQ', link: '/server/mq/rabbitmq'},
      ]
    },
    {
      text: 'OSS',
      collapsed: true,
      items: [
        {text: 'MinIO', link: '/server/oss/minio'},
        {text: 'RustFS', link: '/server/oss/rustfs'},
        {text: 'SeaweedFS', link: '/server/oss/seaweedfs'},
      ],
    },
    {text: 'Nacos', link: '/server/nacos/'},
    {
      text: 'Elastic',
      collapsed: true,
      items: [
        {text: 'Elasticsearch', link: '/server/elastic/elasticsearch'},
        {text: 'Kibana', link: '/server/elastic/kibana'},
        {text: 'Logstash', link: '/server/elastic/logstash'},
        {text: 'Beats', link: '/server/elastic/beats'},
      ]
    }
  ]
}

function sidebarApp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'APP',
      link: '/app/',
      items: [
        {
          text: 'Android',
          link: '/app/android/',
        },
        {
          text: 'iOS',
          link: '/app/ios/',
        },
        {
          text: 'Cross-platform',
          items: [
            {text: 'React Native', link: '/app/react-native/'},
            {text: 'Flutter', link: '/app/flutter/'},
            {text: 'Electron', link: '/app/electron/'},
          ]
        },
      ]
    },
  ]
}

function sidebarDevOps(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'DevOps', link: '/devops/',
    },
    {
      text: '容器',
      link: '/devops/containers/',
      collapsed: true,
      items: [
        {text: 'Docker', link: '/devops/containers/docker/'},
        {text: 'Install Docker', link: '/devops/containers/docker/install-docker'},
        {text: 'Docker Desktop', link: '/devops/containers/docker/desktop'},
        {text: 'Docker Architecture', link: '/devops/containers/docker/architecture'},
        {text: 'Docker Command', link: '/devops/containers/docker/command'},
        {text: 'Docker Network', link: '/devops/containers/docker/network'},
        {text: 'Docker Build', link: '/devops/containers/docker/build'},
        {text: 'Docker Images Explore', link: '/devops/containers/docker/image-explore'},
        {text: 'Docker Compose', link: '/devops/containers/docker/compose'},
        {text: 'Podman', link: '/devops/containers/podman/'},
      ]
    },
    {
      text: '镜像与制品仓库',
      link: '/devops/registries/',
      collapsed: false,
      items: [
        {text: 'Docker Hub', link: '/devops/registries/docker-hub'},
        {text: 'Harbor', link: '/devops/registries/harbor'},
        {text: 'Nexus Repository', link: '/devops/registries/nexus'},
        {text: 'JFrog Artifactory', link: '/devops/registries/artifactory'},
        {text: 'Distribution Registry', link: '/devops/registries/distribution'},
      ]
    },
    {
      text: 'CI/CD',
      link: '/devops/ci-cd/',
      collapsed: false,
      items: [
        {text: 'GitHub Actions', link: '/devops/ci-cd/github-actions'},
        {text: 'GitLab CI/CD', link: '/devops/ci-cd/gitlab-ci'},
        {text: 'Jenkins', link: '/devops/ci-cd/jenkins'},

      ]
    },
    {
      text: '部署与发布',
      link: '/devops/deployment/',
      collapsed: false,
      items: [
        {text: 'GitHub Pages', link: '/devops/deployment/github-pages'},
        {text: 'GitLab Pages', link: '/devops/deployment/gitlab-pages'},
        {text: 'Vercel', link: '/devops/deployment/vercel'},
        {text: 'Netlify', link: '/devops/deployment/netlify'},
      ]
    },
    {
      text: '编排与Kubernetes',
      link: '/devops/orchestration/',
      collapsed: true,
      items: [
        {text: 'Kubernetes', link: '/devops/orchestration/kubernetes/'},
        {text: 'Architecture', link: '/devops/orchestration/kubernetes/architecture'},
        {text: 'Minikube', link: '/devops/orchestration/kubernetes/minikube'},
        {text: 'kubectl', link: '/devops/orchestration/kubernetes/kubectl'},
        {text: 'Namespace', link: '/devops/orchestration/kubernetes/namespace'},
        {text: 'Configuration File', link: '/devops/orchestration/kubernetes/configuration-file'},
        {text: 'Examples', link: '/devops/orchestration/kubernetes/examples'},
        {text: 'Rancher', link: '/devops/orchestration/kubernetes/rancher'},
        {text: 'Helm、Kustomize 与 GitOps', link: '/devops/orchestration/helm-kustomize-gitops'},
      ]
    },
    {
      text: '流量治理',
      link: '/devops/networking/',
      collapsed: false,
      items: [
        {text: '流量入口与 Gateway', link: '/devops/networking/traffic-routing'},
        {text: 'Traefik', link: '/devops/networking/traefik'},
      ]
    },
    {
      text: '可观测性',
      link: '/devops/observability/',
      collapsed: true,
      items: [
        {text: '信号与告警', link: '/devops/observability/signals-and-alerting'},
        {text: 'APM', link: '/devops/observability/apm/'},
        {text: 'RUM', link: '/devops/observability/rum/'},
        {text: 'Sentry', link: '/devops/observability/rum/sentry'},
        {text: 'Grafana Faro', link: '/devops/observability/rum/grafana'},
        {text: 'Google Analytics', link: '/devops/observability/rum/google-analytics'},
      ]
    },
    {
      text: '安全与可靠性',
      link: '/devops/security-reliability/',
      collapsed: true,
      items: [
        {text: 'Secret 管理', link: '/devops/security-reliability/secrets'},
        {text: 'RBAC 与部署身份', link: '/devops/security-reliability/rbac'},
        {text: '依赖与镜像安全', link: '/devops/security-reliability/dependency-and-image-security'},
        {text: 'SBOM 与供应链证明', link: '/devops/security-reliability/sbom'},
        {text: 'SLI、SLO 与错误预算', link: '/devops/security-reliability/sli-slo'},
        {text: '事故响应', link: '/devops/security-reliability/incident-response'},
      ]
    },
  ]
}
