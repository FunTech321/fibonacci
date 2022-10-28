'use strict';
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    //例えばfib(4)を実行すると、fib(3)とfib(2) を実行し、1 or 0まで実行する
    return fib(n - 1) + fib(n - 2);
}
//40までの数を使ってfib関数を実行する
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
