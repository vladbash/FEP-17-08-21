const poll = [
    {
        question: `Что будет результатом команды typeof []?`,
        options: {
            0: 'string',
            1: 'array',
            2: 'object',
            3: 'window'
        }
    },
    {
        question: `Что выведется в консоль?`,
        payload: () => {
            const getName = function stubName() {
                return 'John';
            };

            console.log(stubName());
            const greeting = `Hello, ${getName()}`;
        },
        options: {
            0: 'John',
            1: '',
            2: 'undefined',
            3: 'Hello, John',
            4: 'Error'
        }
    },
    {
        question: `* Какой будет результат операции?`,
        payload: () => {
            console.log(parseInt('574kfj44'));
            console.log(Number('574kfj44'));
        },
        options: {
            0: NaN,
            1: undefined,
            2: 0,
            3: 574
        }
    },
    {
        question: `Что выведется в консоли?`,
        payload: () => {
            function foo() {
                var a = b = 'hello';
                a = 'bye';
            }
            
            foo();
            
            console.log(b);
        },
        options: {
            0: undefined,
            1: 'Error',
            2: 'hello',
            3: 'bye'
        }
    },
    {
        question: `Какая команда в git отвечает за создание новой ветки?`,
        options: {
            0: 'git create branch branch_name',
            1: 'git commit --branch branch_name',
            2: 'git checkout -b branch_name',
            3: 'git push origin master'
        }
    }
];