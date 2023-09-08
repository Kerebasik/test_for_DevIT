console.log('Task 6')

class NotificationException extends Error { // создал класс NotificationException наследующий класс Error для предотвращение ошибки в TS
    constructor() {
        super('NotificationException'); // предаю сообщение в конструктор класса родителя
    }
}

class ErrorException extends Error { // создал класс ErrorException наследующий класс Error для предотвращение ошибки в TS
    constructor() {
        super('ErrorException'); // предаю сообщение в конструктор класса родителя
    }
}

function primitiveMultiply(a:number, b:number) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if(rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

function reliableMultiply(a:number, b:number) {
    while(true){ // объявляю бесконечный цикл который будет вести постоянный подсчет пока мы его не остановим словом break
        try {// объявляю блок попытки для отлавливания ошибок которая будет выбрасывать нам функция
            return primitiveMultiply(a, b); // вызываю функцию и возвращаю ошибку или значение которое оно нам вернуло
        } catch (error){
            if(error instanceof ErrorException){ // проверяю какую ошибку нам вернула функцию если ErrorException то прекращаю цикл командой break
                break  // прекращаю цикл
            } else if(error instanceof NotificationException){// проверяю какую ошибку нам вернула функцию если NotificationException то продолжаю цикл командой continue
                continue;
            } else {
                throw error // на случай если будет какая-то другая ошибка
            }
        }
    }
}


console.log(reliableMultiply(8, 8));
