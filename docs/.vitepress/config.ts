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
      text: 'advance',
      items: [
        {text: 'Nodejs', link: '/advance/nodejs/'},
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
      ]
    },
    {
      text: 'CSS',
      link: '/fundamentals/css/',
      collapsed: true,
      items: [
        {text: 'CSS Preprocessor', link: '/fundamentals/css/preprocessor/'},
        {text: 'CSS Framework', link: '/fundamentals/css/framework/'},
        {text: 'Animations Library', link: '/fundamentals/css/animations-lib'},
      ]
    },
    {
      text: 'JavaScript',
      link: '/fundamentals/js/',
      collapsed: true,
      items: [
        {text: '确定值的类型', link: '/fundamentals/js/determine-type'},
        {text: '类型转换', link: '/fundamentals/js/type-conversion'},
        {text: '对象属性遍历', link: '/fundamentals/js/traverse-object-keys'},
        {text: '正则表达式', link: '/fundamentals/js/regular-expression'},
        {text: 'JSON', link: '/fundamentals/js/JSON'},
        {
          text: '模块化',
          items: [
            {text: 'CommonJS', link: '/fundamentals/js/modular/commonjs'},
            {text: 'ESM', link: '/fundamentals/js/modular/esm'},
            {text: 'ESM vs CJS', link: '/fundamentals/js/modular/mjs-cjs'},
            {text: 'AMD', link: '/fundamentals/js/modular/amd'},
            {text: 'UMD', link: '/fundamentals/js/modular/umd'},
            {text: 'circular dependency', link: '/fundamentals/js/modular/circular-dependency'},
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
          collapsed: true,
          items: [
            {text: 'Dom notes', link: '/fundamentals/js/dom/'},
            {text: 'Event Flow', link: '/fundamentals/js/dom/event-flow'},
            {
              text: 'properties and attributes',
              link: '/fundamentals/js/dom/difference-between-properties-and-attributes'
            },
          ]
        },
        {
          text: '实战方案',
          items: [
            {text: '位运算符的应用', link: '/fundamentals/js/bit-op'},
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
        {text: 'SSL证书部署', link: '/fundamentals/network/ssl-cert-nginx'},
      ]
    },
    {
      text: 'Browser',
      link: '/fundamentals/browser/',
      collapsed: true,
      items: [
        {text: 'debug', link: '/fundamentals/browser/debug'},
        {text: 'Same Origin Policy', link: '/fundamentals/browser/same-origin-policy'},
      ]
    },
  ]
}

function sidebarFramework() {
  return [
    {
      text: 'Vue',
      link: '/framework/vue/',
      collapsed: false,
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
            // {text: 'Source Code', link: '/framework/vue/v2/source-code/'},
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
        {
          text: 'interview', link: '/framework/vue/interview'
        },
      ]
    },
    {
      text: 'React',
      collapsed: false,
      items: [
        {
          text: 'React Notes', link: '/framework/react/',
        },
        {
          text: 'Create React App', link: '/framework/react/create-react-app',
        },
      ]
    },
    {
      text: 'Nuxt',
      collapsed: true,
      items: [
        {text: 'Introduction', link: '/framework/nuxt/'},
      ]
    },
    {
      text: 'Next.js',
      collapsed: true,
      items: [
        {text: 'Nextjs Notes', link: '/framework/nextjs/'},
      ]
    },
    {
      text: 'Other',
      collapsed: true,
      items: [
        {text: 'Svelte', link: '/framework/other/svelte'},
        {text: 'Storybook', link: '/framework/other/storybook'},
        {text: 'miniprogram', link: '/framework/other/miniprogram/'},
        {text: 'officialaccount', link: '/framework/other/officialaccount/'},
      ]
    }
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
      collapsed: false,
      items: [
        {
          text: 'npm',
          items: [
            {text: 'npm Notes', link: '/build-tools/package-manager/npm/'},
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
          text: 'lerna', link: '/build-tools/package-manager/lerna/',
        },
        {text: 'nvm', link: '/build-tools/package-manager/nvm'},
        {text: 'nrm', link: '/build-tools/package-manager/nrm'},
        {
          text: 'corepack', link: '/build-tools/package-manager/corepack/',
        },
        {
          text: 'registry',
          items: [
            {text: 'Verdaccio', link: '/build-tools/package-manager/verdaccio/'},
            {text: 'Nexus', link: '/build-tools/package-manager/nexus/'},
          ]
        },
        {
          text: 'lerna', link: '/build-tools/package-manager/lerna/',
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
          text: 'Rspack', link: '/build-tools/bundler/rspack/',
        },
        {
          text: 'Rsbuild', link: '/build-tools/bundler/Rsbuild/',
        },
        {
          text: 'snowpack', link: '/build-tools/bundler/snowpack'
        },
        {
          text: 'parcel', link: '/build-tools/bundler/parcel'
        },
        {
          text: 'turbopack', link: '/build-tools/bundler/turbopack'
        },
        {
          text: 'turborepo', link: '/build-tools/bundler/turborepo'
        },
        {
          text: 'out-of-date', link: '/build-tools/bundler/out-of-date'
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
        }
      ]
    },
  ]
}

function sidebarAdvance() {
  return [
    {
      text: 'Nodejs',
      collapsed: false,
      items: [
        {
          text: 'Nodejs',
          items: [
            {text: 'Nodejs Notes', link: '/advance/nodejs/'},
            {text: 'V8', link: '/advance/nodejs/v8/'},
          ]
        },
        {
          text: 'Web Framework',
          items: [
            {text: 'Express', link: '/advance/nodejs/express/'},
            {text: 'Koa', link: '/advance/nodejs/koa/'},
            {text: 'Egg', link: '/advance/nodejs/egg/'},
          ]
        },
        {
          text: 'Templating Language',
          items: [
            {text: 'ejs', link: '/advance/nodejs/ejs/'},
          ]
        },
        {
          text: 'Communication',
          items: [
            {text: 'socket.io', link: '/advance/nodejs/socket-io/'},
          ]
        },
      ]
    },
    {
      text: 'SSR',
      collapsed: false,
      items: [
        {
          text: 'Introduction', link: '/advance/ssr/'
        },
        {
          text: 'Framework',
          items: [
            {text: 'Nuxt', link: '/advance/ssr/nuxtjs/'},
            {text: 'Next', link: '/advance/ssr/nextjs/'},
          ]
        },
      ]
    },
    {text: 'SSG', link: '/advance/ssg/'},
    {
      text: 'Test',
      collapsed: false,
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
          text: 'e2e test', link: '/advance/test/e2e/',
        },
      ]
    },
    {
      text: 'Micro-frontends',
      collapsed: false,
      items: [
        {text: 'Introduction', link: '/advance/micro-frontends/'},
        {text: 'qiankun', link: '/advance/micro-frontends/qiankun'},
        {text: 'single-spa', link: '/advance/micro-frontends/single-spa'},
      ]
    },
    {
      text: 'WebGL',
      collapsed: false,
      items: [
        {text: 'Introduction', link: '/advance/webgl/'},
        {text: 'Three.js', link: '/advance/webgl/threejs/'},
      ]
    },
    {
      text: 'Web Application Security',
      link: '/advance/security/',
    }
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
        }
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
