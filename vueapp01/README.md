# Tutorial of Vue.js version2.

Vue.js version 2 のチュートリアルです。

## 前提条件
- nodeインストール済み
- webpackインストール済み

## 準備

1. **vue**をインストール

`npm install -g vue`

2. **vue-cli**をインストール

`npm install -g vue-cli`

3. アプリケーションテンプレートを作成

`vue init webpack vueapp01`

```shell
smith:vue2-tutorial ozawa$ vue init webpack vueapp01

? Project name vueapp01
? Project description A Vue.js project
? Author supaiku2452 <supaiku2452@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Setup unit tests with Karma + Mocha? Yes
? Setup e2e tests with Nightwatch? Yes

   vue-cli · Generated "vueapp01".

   To get started:

     cd vueapp01
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack

smith:vue2-tutorial ozawa$ ll
total 16
-rw-r--r--   1 ozawa  staff  344  9 30 17:25 README.md
-rw-r--r--   1 ozawa  staff  550  9 30 17:14 package.json
drwxr-xr-x  16 ozawa  staff  544  9 30 17:27 vueapp01
```

4. **vueapp01**に移動し、必要なパッケージをインストール

`cd vueapp01`

`npm install`

5. サーバーを起動する。

`npm run dev`

## 別モジュールをインポートする

1. **App.vue**に**hello**をインポートする。

```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- Hello.vue hello -->
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
// ...
```

2. サーバーを起動する(起動済みの場合は、自動的にリロードされる)。

## v-forを使ってみる

1. **hello**コンポーネントでリストを表示する。

helloテンプレートに`v-for`を追加する。
```javascript
<template>
  <div class="hello">
  // ...
    <div>
      <ul>
        <li v-for="user in users">
          {{ user.firstname }} {{ user.lastname }}
        </li>
      </ul>
    </div>
  </div>
</template>

```

オブジェクトにデータを追加する。
```javascript
export default {
  data () {
    return {
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ]
    }
  }
}

```

2. サーバーを起動する(起動済みの場合は、自動的にリロードされる)。

## v-modelを使ってみる

1. オブジェクトに変数`input_val`を定義する。

```javascript
export default {
  // ...
  data () {
    return {
      input_val: ''
    }
  }
}
```

2. テンプレートに`input`要素を追加する。

```javascript
<template>
  <div class="hello">
    // ...
    <div>
      <input type="text" v-model="input_val" title="input_val">
    </div>
  </div>
</template>
```

3. サーバーを起動する(起動済みの場合は、自動的にリロードされる)。
実際に双方向でバインドされているかは、ディベロッパーツールを見ないとわからない。

## v-textを使ってみる

1. テンプレートに`span`要素を追加する。このとき、span要素には、`v-text`属性を追加する。

```javascript
<template>
  // ...
  <div class="hello">
    <div>
      Input Val:<span v-text="input_val"></span>
    </div>
  </div>
</template>

```

2. サーバを起動する(起動済みの場合は、自動的にリロードされる)。
先ほど用意したインプットに値を入力すると、**Input Val:**の横に入力値が表示される。
これを見ると双方向でバインドされていることがわかる。

## v-on(click)を使ってみる

1. オブジェクトにクリックカウンター用の変数を追加する。

```javascript
export default {
  data () {
    return {
      // ...
      counter: 0
    }
  }
}
```

2. テンプレートにボタンを追加する。ボタン要素には、`v-on`属性を追加する。
また、ボタンには、クリックカウンター変数の値を表示する。

```html
<template>
  <div class="hello">
    // ...
    <div>
      <button class="btn" v-on:click="counter++">
        You've clicked this button {{ counter }} times!
      </button>
    </div>
  </div>
</template>
```

3. サーバを起動する(起動済みの場合は、自動的にリロードされる)。
ボタンをクリックすると、ボタンに表示されているクリック回数がインクリメントされていることがわかる。