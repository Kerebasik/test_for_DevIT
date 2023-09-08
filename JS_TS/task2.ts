console.log('Task 2')

function* chunkArray<T>(array:T[], chunkSize:number){//Дженерик тут для сохранения возможности взаимодействовать с разными массивами
    let index=0 //Объявляю индекс для отсчитыания чанков

    while (index<array.length){ // Объявляю цикл для отображения value пока index меньше длинны переданного массива чтобы не писать много yield
        yield array.slice(index, index + chunkSize) // Возвращаю елементы массива с элемента index по index + длинна чанка. При каждом next увеличивается раз на chunkSize
        index+=chunkSize //Увеличиваю индекс для того чтобы index в следуюший next() начинался не с 0, с последнего элемента массива прошлого чанка
    }
}

const iterator1 = chunkArray(["kelrwrw","dsfsdfs","sdfsdfs","t54t4grege",5,6,7,8,9,10,11,12,13], 4)
const iterator2 = chunkArray([1,2,3,4,5,6,7,8,9,10,11,12,13], 2)

console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())