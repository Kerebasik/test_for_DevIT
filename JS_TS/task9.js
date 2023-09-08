"use strict";
function add(x) {
    let sum = x; //Создаю переменную для хранения суммы
    function addNext(y) {
        sum += y; // прибавляю к сумме новое значение
        return addNext; // возвращаю функцию
    }
    addNext.valueOf = function () {
        return sum;
    };
    return addNext;
}
console.log(Number(add(1)(2)(8)));
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));
