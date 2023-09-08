console.log('Task 3')

async function bulkRun(functions) {
    const results = []; // инициализрую массив куда буду складывать результаты

    for (const [func, args] of functions) { // прохожусь по массиву с массивами [функциями,  значениями] которые передали
        const result = await new Promise((resolve) => { // создаю промис для выполенения функции
            const callback = (res) => resolve(res); // создаю коллбек который будет резолвить промис
            func(...args, callback); // передаю в функцию аргументы которые мы получили и колбек для выполнения промиса
        });

        results.push(result); //результат пушу в массив
    }

    return results;// возвращаю результать в место вызова
}
const f1 = (cb) => {cb(1)};
const f2 = (a, cb) => {cb(a)};
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)};

bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]]
]).then(console.log);