console.log('Task 5')


// type objectToArrayArg = {
//     [key:string]:string | number | objectToArrayArg;
// }

function objectToArray(object){
    const array=[]; // создаю массив куда буду добавлять значения

    for (let key in object){ // перебераю ключи переданного объекта
        if(object[key] instanceof Object){ // проверяю является ли значение ключа объектом
            array.push(
                objectToArray(object[key])
            ) // Прокидую объект-значение ключе в функцию и пушу потом потом в массив, тот массив который вернула функция
        } else {
            array.push([key, object[key]]) // пушу массив состоящий из двух элементов [ключ объекта, значение объекта]
        }
    }

    return array // возвращаю массив массивов значений
}

const obj= {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
}

console.log(
    objectToArray(obj)
)
