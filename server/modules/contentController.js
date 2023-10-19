const tree = require("directory-tree");
const hljs = require('highlight.js');

const folder = './static/content';

function drawTreeArray(arrFolder, enclosure = 0) {
  return arrFolder.reduce((acc, item) => {
    if (!item?.children) {
      acc.push({
        ...item,
        enclosure,
      });
    } else {
      acc.push(...drawTreeArray(item.children, enclosure + 1));
    }
    return acc;
  }, []);
}

const cnt = {
  getTree() {
    const treeFolder = tree(folder, {
      extensions: /\.(md)$/,
    });
    
    return drawTreeArray(treeFolder.children);
  },
  getFile() {
  },
};

// const md = require('markdown-it')({
//   highlight: (str, lang) => {
//     const code = lang && hljs.getLanguage(lang)
//       ? hljs.highlight(str, {
//         language: lang,
//         ignoreIllegals: true,
//       }).value
//       : md.utils.escapeHtml(str);
//     return `<pre class="hljs"><code>${code}</code></pre>`;
//   },
// });
// const fs = require('fs');
//
// function readFile(file_path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file_path, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Ошибка чтения файла.');
//         return reject(err);
//       }
//       resolve(data);
//     });
//   });
// }

  // async renderFromFile(file_name) {
  //   let md_text = 'File not exists!';
  //   const file_path = `./static/readme/${file_name}.md`;
  //   if (fs.existsSync(file_path)) {
  //     md_text = await readFile(file_path);
  //   }
  //   return md.render(md_text);
  // },

module.exports = {
  cnt,
};
