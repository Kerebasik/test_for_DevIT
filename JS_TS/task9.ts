type AddFunction = {
    (x: number): AddFunction;
    valueOf: () => number;
};

function add(x: number): AddFunction {
    let sum = x; //Создаю переменную для хранения суммы

    function addNext(y: number): AddFunction { // определяю функцию которая будет складывать значения
        sum += y; // прибавляю к сумме новое значение
        return <AddFunction>addNext; // возвращаю функцию
    }

    addNext.valueOf = function (): number { // устанавливаю свойство valueOf чтобы получить текущее значение
        return sum;
    };

    return <AddFunction>addNext;
}

console.log(Number(add(1)(2)(8)));
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));
