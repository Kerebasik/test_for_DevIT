"use strict";
console.log('Task 1');
function deepEqual(firstObject, secondObject) {
    if (typeof firstObject !== 'object' || typeof secondObject !== 'object') { //Перепроверяю являются ли объекты объектами на тот случай если TS пропустит не объекты
        return false;
    }
    const keysFirstObject = Object.keys(firstObject); // Получаю ключи из Первого объекта
    const keysSecondObject = Object.keys(secondObject); // Получаю ключи из Второго объекта
    if (keysFirstObject.length !== keysSecondObject.length) { // Сравниваю их количество
        return false;
    }
    for (const key of keysFirstObject) { // Перебераю ключи первого объекта
        if (!keysSecondObject.includes(key) || firstObject[key] !== secondObject[key]) { // Проверяю есть ли ключ первого объекта во втором объекту. И проверяю значения ключей объектов равны или нет
            return false;
        }
    }
    return true;
}
console.log(deepEqual({ name: 'test' }, { name: 'test' }));
console.log(deepEqual({ name: 'test' }, { name: 'test1' }));
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } }));
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 }));
