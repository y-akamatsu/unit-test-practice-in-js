const assert = require('power-assert');
const math = require('../../libs/math');

describe('mathオブジェクトに実装されているメソッドのテスト', () => {
  describe('addメソッドのテスト', () => {
    it('addメソッドの型はfunctionである', () => {
      assert.equal(typeof math.add, 'function');
    });

    it('正しく足し算ができる', () => {
      assert.equal(math.add(1, 2), 3);
      assert.equal(math.add(-99, -99), -198);
      assert.equal(math.add(100000, -1), 99999);
      assert.equal(math.add(0, 1), 1);
    });

    it('数値以外がセットされたらエラーを返す', () => {
      const invalidValueList = ['a', {}, [], null, undefined];
      invalidValueList.forEach(invalidValue => {
        let error = null;
        try {
          math.add('a', 2);
        } catch (err) {
          error = err;
        }
        assert.equal(error.message, '数値以外のものが引数に含められています');
      });
    });
  });

  /***********************************
   * 上記addメソッドを元に以下の3つのテストを作成してください
   *
   * 1. subメソッドのテスト(引き算)
   * 2. mulメソッドのテスト(掛け算)
   * 3. divメソッドのテスト(割り算)
   *
   * 上記3つのメソッドのテストには必ず以下のテストを含めてください
   *
   * 1. メソッドの型が `function` 型であることを確認するテスト
   * 2. 計算が正しく行われているかのテスト
   * 3. 引数に数値以外が渡ってきたら例外処理が発生しているかのテスト
   ***********************************/

  // 引き算のsub関数のテストを作成

  // 掛け算のmul関数のテストを作成

  // 割り算のdiv関数のテストを作成
});
