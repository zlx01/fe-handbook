const fs = require('fs');

const testDeployBase = '';
const DEPLOY_BASE = process.env.DEPLOY_BASE || testDeployBase;

function replaceContent() {
  if (!DEPLOY_BASE) {
    return;
  }

  const filePath = './node_modules/vitepress/dist/client/theme-default/components/VPAlgoliaSearchBox.vue';
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) throw err;
    let base
    if (DEPLOY_BASE === '/') {
      base = '';
    } else {
      base = DEPLOY_BASE;
      if (base.endsWith('/')) {
        base = base.slice(0, -1);
      }
    }
    const modifiedData = data.replace(/getRelativePath\(item\.url\)/, `getRelativePath(item.url).replace(/\\/fe-handbook/, '${base}')`);

    fs.writeFile(filePath, modifiedData, 'utf-8', (err) => {
      if (err) throw err;
      console.log('文件已经修改');
    });
  });
}

replaceContent();
