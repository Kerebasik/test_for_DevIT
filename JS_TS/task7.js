console.log('Task 7')



function mapObject(object, parentKey=''){ // parentKey для понимаю откуда мы изначально пришли
    const  result = {} //Создаю начальный объект который буду изменять
    for (const key in object){ //прохожу по ключам объекта
        const newKey = parentKey ? `${parentKey}/${key}` : key; // Проходим по ключам объекта
        if(object[key] instanceof Object && !Array.isArray(object[key]) && object[key]!==null ){ //проверяю значение ключа является ли оно именно объектом
            Object.assign(result, mapObject(object[key], newKey)) //переношу значения которые возвращает рекурсивная функция в объект result при этом в функцию пробрасываю путь родителя
        } else {
            result[newKey] = object[key] // Создаю ключ в объекте со значением пути родителя. Value = значению ключа
        }
    }

    return result
}

const objectExam = {
    a: {
        b: {
            c: 12,
            d: 'Hello World'
        },
        e: [1,2,3]
    }
};

console.log(mapObject(objectExam))