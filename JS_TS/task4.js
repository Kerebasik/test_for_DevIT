console.log('Task 4')

// type arrayToObjectProps = ([string, string] | [string, number] | [string, arrayToObjectProps])[];

function arrayToObject(array){
    const object={} // Создаю объект который будет наполняться значениями

    if(!Array.isArray(array)){ //Делаю проверку является ли переденный массив масивом
        throw new Error('Arguments must be an array')//Пробрасываю ошибку в случае если это не массив
    }

    for (const [key, value] of array){ // Перебераю ключи и значения массива
        if(Array.isArray(value)){ //Смотрю если значение массива является массивом
            object[key]=arrayToObject(value) //Пробрасываю это значение снова в функцию если оно массив
        } else{
            object[key]=value //Создаю ключ и значение если value не массив
        }
    }

    return object // возвращаю объект который получился чтобы он наполнился из рекурсивных фукнций

}



console.log( arrayToObject([
    ['name', 'developer'],
    ['age', 5],
    ['skills', [
        ['html', 4],
        ['css', 5],
        ['js', 5]]
    ]]
    )
);