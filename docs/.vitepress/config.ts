import {DefaultTheme, defineConfig} from 'vitepress'
import container from 'markdown-it-container'
import {renderSandbox} from 'vitepress-plugin-sandpack'

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
    config(md) {
      md.use(container, 'sandbox', {
        render(tokens, idx) {
          return renderSandbox(tokens, idx, 'sandbox')
        },
      })
    },
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
      '/advance/app/': sidebarApp(),
      '/advance/devops/': sidebarDevOps(),
      '/other/git/': sidebarGit(),
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
        {text: 'Nodejs', link: '/advance/nodejs/'},
        {text: 'Deno', link: '/advance/deno/'},
        {text: 'Bun', link: '/advance/Bun/'},
        {text: 'SSR', link: '/advance/ssr/'},
        {text: 'SSG', link: '/advance/ssg/'},
        {text: 'Test', link: '/advance/test/'},
        {text: 'APM', link: '/advance/apm/'},
        {text: 'RUM', link: '/advance/rum/'},
        {text: 'Low Code', link: '/advance/low-code/'},
        {text: 'Micro-frontends', link: '/advance/micro-frontends/'},
        {text: 'PWA', link: '/advance/pwa/'},
        {text: 'WebGL', link: '/advance/webgl/'},
        {text: 'i18n', link: '/advance/i18n/'},
        {text: 'APP', link: '/advance/app/'},
        {text: 'DevOps', link: '/advance/devops/'},
        {text: 'Database', link: '/advance/database/'},
        {text: 'Web Application Security', link: '/advance/security/'},
      ]
    },
    {
      text: 'other',
      items: [
        {text: 'Useful Libraries', link: '/other/wheel/'},
        {text: 'Code Style', link: '/other/code-style/'},
        {text: 'Matrix', link: '/other/matrix/'},
        {text: 'Git', link: '/other/git/'},
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
    },
    {
      text: 'HTTP',
      link: '/fundamentals/http/',
      collapsed: true,
      items: [
        {text: 'HTTPS', link: '/fundamentals/http/https'},
        {text: 'SSL证书部署', link: '/fundamentals/http/ssl-cert-nginx'},
        {text: 'HTTP Caching', link: '/fundamentals/http/caching'},
        {text: 'Content Security Policy', link: '/fundamentals/http/csp'},
        {text: 'Proxy', link: '/fundamentals/http/proxy'},
      ]
    },
    {
      text: 'Network',
      link: '/fundamentals/network/',
      collapsed: true,
      items: [
        {text: '公网ip', link: '/fundamentals/network/host-ip'},
        {text: 'NAT', link: '/fundamentals/network/nat'},
        {text: 'Domain', link: '/fundamentals/network/domain'},
        {text: 'DNS', link: '/fundamentals/network/DNS'},
        {text: 'CNAME', link: '/fundamentals/network/cname'},
        {text: 'Proxy', link: '/fundamentals/network/proxy'},
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
  ]
}

function sidebarAdvance() {
  return [
    {
      text: 'Nodejs',
      link: '/advance/nodejs/',
      collapsed: true,
      items: [
        {
          text: 'Web Framework',
          collapsed: true,
          items: [
            {text: 'Express', link: '/advance/nodejs/express/'},
            {text: 'Koa', link: '/advance/nodejs/koa/'},
            {text: 'Egg', link: '/advance/nodejs/egg/'},
          ]
        },
        {
          text: 'Templating Language',
          collapsed: true,
          items: [
            {text: 'ejs', link: '/advance/nodejs/ejs/'},
          ]
        },
        {
          text: 'Communication',
          collapsed: true,
          items: [
            {text: 'socket.io', link: '/advance/nodejs/socket-io/'},
          ]
        },
      ]
    },
    {
      text: 'Deno',
      link: '/advance/deno/',
    },
    {
      text: 'Bun',
      link: '/advance/bun/',
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
    {text: 'SSG', link: '/advance/ssg/'},
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
            {text: 'vue-test-utils', link: '/advance/test/component/vue-test-utils'},
          ]
        },
        {
          text: 'e2e test', link: '/advance/test/e2e/',
        },
      ]
    },
    {text: 'APM', link: '/advance/apm/'},
    {text: 'RUM', link: '/advance/rum/'},
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
    {text: 'APP', link: '/advance/app/'},
    {text: 'Database', link: '/advance/database/'},
    {
      text: 'Web Application Security',
      link: '/advance/security/',
    }
  ]
}

function sidebarApp(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'APP',
      link: '/advance/app/',
      items: [
        {
          text: 'Android',
          link: '/advance/app/android/',
        },
        {
          text: 'iOS',
          link: '/advance/app/ios/',
        },
        {
          text: 'Cross-platform',
          items: [
            {text: 'React Native', link: '/advance/app/react-native/'},
            {text: 'Flutter', link: '/advance/app/flutter/'},
            {text: 'Electron', link: '/advance/app/electron/'},
          ]
        },
      ]
    },
  ]
}

function sidebarDevOps(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'DevOps',
      link: '/advance/devops/',
      collapsed: false,
      items: [
        {
          text: 'Docker',
          link: '/advance/devops/docker/',
          items: [
            {text: 'Install Docker', link: '/advance/devops/docker/install-docker'},
            {text: 'Docker Architecture', link: '/advance/devops/docker/architecture'},
            {text: 'Docker Command', link: '/advance/devops/docker/command'},
            {text: 'Docker Build', link: '/advance/devops/docker/build'},
            {text: 'Docker Compose', link: '/advance/devops/docker/compose'},
            {text: 'Docker Network', link: '/advance/devops/docker/network'},
            {text: 'Docker Desktop', link: '/advance/devops/docker/desktop'},
            {text: 'Docker Hub', link: '/advance/devops/docker/hub'},
            {text: 'Docker Images Explore', link: '/advance/devops/docker/image-explore'},
          ]
        },
        {
          text: 'Podman',
          link: '/advance/devops/podman/',
        },
        {
          text: 'Kubernetes',
          link: '/advance/devops/kubernetes/',
          items: [
            {text: 'Kubernetes Architecture', link: '/advance/devops/kubernetes/architecture'},
            {text: 'kubectl', link: '/advance/devops/kubernetes/kubectl'},
            {text: 'Minikube', link: '/advance/devops/kubernetes/minikube'},
            {text: 'Namespace', link: '/advance/devops/kubernetes/namespace'},
            {text: 'Configuration File', link: '/advance/devops/kubernetes/configuration-file'},
            {text: 'Examples', link: '/advance/devops/kubernetes/examples'},
            {text: 'Rancher', link: '/advance/devops/kubernetes/rancher'},
          ]
        },
      ]
    }
  ]
}

function sidebarGit(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Git',
      link: '/other/git/',
      collapsed: false,
      items: [
        {text: 'Installing Git', link: '/other/git/installing-git/'},
        {text: 'Operating Mechanism', link: '/other/git/operating-mechanism'},
        {text: 'Workflow', link: '/other/git/workflow'},
        {text: '.gitattributes', link: '/other/git/gitattributes'},
        {
          text: 'GitHub',
          link: '/other/git/github/',
          items: [
            {text: 'Actions', link: '/other/git/github/actions'},
            {text: 'Pages', link: '/other/git/github/pages'},
            {text: 'Copilot Prompts', link: '/other/git/github/copilot-prompts'},
            {text: 'github.dev', link: '/other/git/github/github-dev'},
            {text: 'Codespaces', link: '/other/git/github/codespaces'},
            {text: 'Packages', link: '/other/git/github/packages'},
            {text: 'CLI', link: '/other/git/github/cli'},
            {text: 'MCP', link: '/other/git/github/mcp'},
          ]
        },
        {
          text: 'GitLab',
          link: '/other/git/gitlab/',
          items: [
            {text: 'CI/CD', link: '/other/git/gitlab/ci-cd'},
          ]
        },
      ]
    }
  ]
}
