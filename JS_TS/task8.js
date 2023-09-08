console.log('Task 8')

function combos(num) {
    const results = []; // инициализирую массив для хранения результатов

    function generateCombinations(currentCombo, remainingSum, start) { //
        if (remainingSum === 0) { // проверяю не равняется ли числа комбинаций 0. Так как если равняется, то мы завершили поиск комбинации
            results.push([...currentCombo]);//пушу переданную сюда комбинацию в результат
            return;//заканчиваю выполнение функции
        }

        if (remainingSum < 0 || start > num) { // проверка не является ли стартовое число числа которое мы передали в функцию, нужно для предовтращения повторений таких как [1,2] [2,1]
            return; // заканчиваю функцию
        }

        for (let i = start; i <= num; i++) { // прохожусь по числам которые идут итеррационно к числу которое мы передаем
            currentCombo.push(i); // добавляю число в текущую комбинацию.
            generateCombinations(currentCombo, remainingSum - i, i); // рекурсивно вызываю с уменьшенной суммой и новым начальным числом.
            currentCombo.pop(); // Убираем последний добавленный элемент для создания других комбинаций.
        }
    }

    generateCombinations([], num, 1); // начинаю генерацию комбинаций с пустой комбинации и начальным числом 1.

    return results; // возвращаю результат
}

console.log(combos(3));
console.log(combos(10));