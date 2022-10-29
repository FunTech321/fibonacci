'use strict';
//一度計算した結果を保存しておく方法を「メモ化」という
const memo = new Map();
//左キーには順番を、右値には答えを入れる（0と1は定義済み）
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    //nをキーとしたエントリーを持っていれば、そのまま値を呼ぶ
    if (memo.has(n)) {
        return memo.get(n);
    }
    //そうでなければnを引数に再帰関数に入れて、Mapに値を入れてから返す
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
//40までの数を使ってfib関数を実行する
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}