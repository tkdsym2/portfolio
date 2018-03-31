# This is fmsuvM.github.io

## Ref

* https://www.webtoolnavi.com/css-loding-animations/ ... css loading animation
* https://codepen.io/dudleystorey/pen/knqyK ... background movie code
* https://coliss.com/articles/build-websites/operation/css/fullscreen-background-video-used-html5-by-demosthenes.html ... background movie detail
* https://github.com/cosmicjs/vuejs-portfolio .. vue sample
* https://codepen.io/jmegs/pen/opbyXg?editors=1100

## memo

`localStorage.debug = "*";`

> 12-30 秒くらいがベスト

これで絵コンテを作る

## processmd memo  

markdown-it-attrsを使えるように、markdwon-itに設定する必要がある

`node_modules/processmd/index.js` の `function processmd` 内で呼び出す。

```javascript

/* 前略 */
const markdownItAttrs = require('markdown-it-attrs');

/* 中略 */
MarkdownIt.use(markdownItAttrs);

/* 後略 */
```
