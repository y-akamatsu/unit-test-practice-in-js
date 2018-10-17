const math = {
  add: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('数値以外のものが引数に含められています');
    }

    return a + b;
  },

  // 引き算用のsubメソッドを作成して、テストも用意する。(引数は2つでどちらも数値を受け取るものとする)
  sub: (a, b) => {
    // aが数値型かつｂが数値型でない場合エラーを発生させる(throw)
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('数値以外のものが引数に含められています');
    }

    return a - b;
  },
  // 掛け算のmulメソッドを作成して、テストも用意する。(引数は2つでどちらも数値を受け取るものとする)
  mul: (a, b) => {
   if (typeof a !== 'number' || typeof b !== 'number') {
     throw new Error('数値以外のものが引数に含められています');
   } 

   return a * b;
  },
  // 割り算用のdivメソッドを作成して、テストも用意する。(引数は2つでどちらも数値を受け取るものとする)
  div: (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('数値以外のものが引数に含められています');
    } 
 
    return a / b;
   },
};

module.exports = math;
