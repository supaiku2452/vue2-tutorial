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

3. webpackを実行する。

4. index.htmlを表示して、画面にメッセージが表示されることを確認する。

## ディレクティブを使ってみる

1. **src/app.js**に新しいオブジェクトを追加する。

```javascript
new Vue({
   el: '#app-2',
   data: {
       message: 'You loaded this page on ' + new Date().toLocaleString()
   }
});
```

2. **index.html**に新しい要素(app-2)を追加する。

```html
    <div id="app-2">
        <span v-bind:title="message">
            Hover your mouse over me for a few seconds to see my dynamically bound title.
        </span>
    </div>
```

3. webpackを実行する。

4. index.htmlを表示して、メッセージが表示されることを確認する。次に、メッセージにマウスを数秒あてると別のメッセージが表示されることを確認する。

## v-ifを使ってみる

1. **src/app.js**に新しいオブジェクトを追加する。

```javascript
new Vue({
   el: '#app-3',
   data: {
       seen: true
   }
});
```

2. **index.html**に新しい要素(app-3)を追加する。

```html
    <div id="app-3">
        <span v-if="seen">
            Now you see me.
        </span>
    </div>
```

3. webpackを実行する。

4. index.htmlを表示して、メッセージ(Now you see me)が表示されることを確認する。

![実行結果](https://github.com/supaiku2452/images/blob/master/vue2-tutorial/vueapp02/image-1.png?raw=true)

## v-forを使ってみる

1. **src/app.js**に新しいオブジェクトを追加する。データ部分に、配列とマップの二つを定義する。

```javascript
new Vue({
   el: '#app-4',
   data: {
       todos: [
           { text: 'Learn JavaScript' },
           { text: 'Learn Vue' },
           { text: 'Build something awesome' }
       ],
       fruits: [
           "banana", "apple", "strawberry"
       ]
   }
});
```

2. **index.html**に新しい要素(app-4)を追加する。

マップにアクセスする場合は、keyを指定すれば値が表示される。配列の場合は、そのままfruitを指定すればOK

```html
    <div id="app-4">
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <ol>
            <li v-for="fruit in fruits">
                {{ fruit }}
            </li>
        </ol>
    </div>
```

3. webpackを実行する。

4. index.htmlを表示して、todoリストが表示されていることを確認する。

![実行結果](https://github.com/supaiku2452/images/blob/master/vue2-tutorial/vueapp02/image-2.png?raw=true)

## v-onを使ってみる

1. **scr/app.js**に新しいオブジェクトを追加する。メソッドとして、引数を受け取らない*reverseMessage*と引数を受け取る*upperMessage*を追加する。

```javascript
new Vue({
    el: '#app-5',
    data: {
       message: 'Hello Vue.js!',
    },
    methods: {
        reverseMessage: function() {
           this.message = this.message.split('').reverse().join('');
        },
        upperMessage: function(message) {
           alert(message.toUpperCase());
        }
    }
});
```

2. **index.html**に新しい要素(app-5)を追加する。

```html
    <div id="app-5">
        <p>
            {{ message }}
        </p>
        <button v-on:click="reverseMessage">Reverse Message</button>

        <button v-on:click="upperMessage('click me!')">click me!</button>
    </div>
```

3. webpackを実行する

4. 表示されたボタンの挙動を確認する。

reverseMessageボタンをクリックすると、Hello Vue.js!が反転する。
upperMessageボタンをクリックすると、大文字でCLICK MEと描画されたアラートメッセージが表示される。

![実行結果](https://github.com/supaiku2452/images/blob/master/vue2-tutorial/vueapp02/image-3.png?raw=true)

## v-modelを使ってみる。

1. **src/app.js**に新しいオブジェクトを追加する。今回は、メッセージを持つシンプルなオブジェクトで良い。

```javascript
new Vue({
   el: '#app-6',
   data: {
       message: 'Hello Vue.js!'
   }
});
```

2. **index.html**に新しい要素(app-6)を追加する。v-modelに、messageを定義することで、html側とvue側の双方向でバインドすることが可能となる。

```html
    <div id="app-6">
        <p>
            {{ message }}
        </p>
        <input v-model="message">
    </div>
```

3. webpackを実行する

4. 表示された画面を確認し、入力項目の内容が表示されることを確認する。

![実行結果](https://github.com/supaiku2452/images/blob/master/vue2-tutorial/vueapp02/image-4.png?raw=true)
