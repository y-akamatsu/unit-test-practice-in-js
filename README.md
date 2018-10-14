# JSを使ってユニットテスト入門

## 使うライブラリ

- [mocha](https://mochajs.org/)
- [power-asswer](https://github.com/power-assert-js/power-assert)

## まず見るところ

- package.jsonの中身
  - 使われているライブラリの確認
  - devDependenciesプロパティ
    - dependenciesプロパティと何が違うか理解する
  - scriptsプロパティの使い方
    - `$npm test` とコマンドを打つことによってmochaのテストが走るのはscriptsプロパティの中にtestプロパティを定義していて値にmochaを使っているから。
    - `$npm start`と`$npm test`以外で独自のスクリプトを定義したい場合は `$npm run hoge` のように `run` というキーワードが必要となる。
- libsディレクトリ
  - 実際に実装ファイルを格納している
  - libsディレクトリ内のファイルのテストはtest/libsディレクトリ内に作る
- testディレクトリ
  - mocha.optsファイルはmochaの設定ファイル。詳しくは[ドキュメント](https://mochajs.org/#mochaopts)を参照
  - test/libsディレクトリ配下にlibsの中と同じファイル名でテストファイルを作成している。
    - しかし、`〇〇.spec.js`のようにファイル名と拡張子の間に `spec` という名前を入れている。(`spec` を入れることですぐにこのファイルがテストファイルだと判断できる)

## テストの実行方法

```js
$ npm test
```

上記コマンドでmochaによるtestディレクトリ内のテストが実行される