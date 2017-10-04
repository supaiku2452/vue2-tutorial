# Vue.js チュートリアル

Vue.jsのチュートリアルです。基本的には、[Vue.js 公式ページ(日本)](https://jp.vuejs.org/)を参考にしています。

## 準備(パッケージとwebpack)

1. **vue.js**をインストールする。

`npm install --save vue`

2. **webpack**をインストールする。

`npm install --save webpack`

3. **babel-loader babel-core babel-preset-es2015**をインストールする。

`npm install --save babel-loader babel-core babel-preset-es2015`

4. **webpack.config.js**を作成し、vueをバンドルできるようにする。
webpackで事前にコンパイルする場合は、エイリアスに完全ビルドされたvue.jsを指定しなければならない。
デフォルトは、ランタイム限定ビルドされたvue.jsが読み込まれる。
[ここのサイトの解説がわかりやすい](https://aloerina01.github.io/javascript/vue/2017/03/08/1.html)

```javascript
const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] }
                }]
            }
        ]
    },
    // aliasを追加する
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
```

## シンプルなオブジェクトを作ってみる

1. **src/app.js**を作成し、**Vue**オブジェクトを定義する。

```javascript
import Vue from 'vue';

new Vue({
   el: '#app',
   data: {
       message: 'Hello Vue!!!'
   }
});
```

2. **index.html**を作成し、jsを読み込む。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue.js Tutorial</title>
</head>
<body>
    <div id="app">
        {{ message }}
    </div>
    <script type="text/javascript" src="dist/app.bundle.js"></script>
</body>
</html>
```
