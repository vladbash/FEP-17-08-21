// context, closures, arrays
const poll = [
    {
        question: `Какой контекст будет у функции foo.bind(obj1).call(obj2, null)?`,
        options: {
            0: 'obj1',
            1: 'null',
            2: 'obj2',
            3: 'window'
        }
    },
    {
        question: `Какой метод массива используется для превращения его в строку с заданным разделителем между элементами?`,
        options: {
            0: 'arr.makeString("_")',
            1: 'arr.convertToString("_")',
            2: 'arr.join("_")',
            3: 'arr.toString()'
        }
    },
    {
        question: `В чем разница между функциями isNaN и Number.isNaN?`,
        options: {
            0: 'isNaN - возвращает true на все кроме чисел, а Number.isNaN только на NaN',
            1: 'это функции синонимы - одна ссылается на другую',
            2: 'isNaN используется только для строк, а Number.isNaN для чисел',
            3: 'нет правильного ответа'
        }
    },
    {
        question: `Как в ES6 реализовать наследование одного класса от другого?`,
        options: {
            0: 'с помощью ключевого слова prototype',
            1: 'через ключевое слово extends',
            2: 'вручную переопределять свойство __proto__ у объектов',
            3: 'через замыкания'
        }
    },
    {
        question: `В чем отличие между DOM Node и DOM Element?`,
        options: {
            0: 'в Node могут хранится только комментарии',
            1: 'DOM Node - это конструкция для работы на сервере, а DOM Element для работы в браузере',
            2: 'DOM Element - это дочерний класс DOM Node',
            3: 'они никак не связаны'
        }
    },
];