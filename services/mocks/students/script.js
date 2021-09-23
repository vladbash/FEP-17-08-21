// console.log(studentsMock.getStudentList(10));

const someArray = [12, 33, 45, 42, 33, 12, 45, 90, 12, 66];

function getMidValue(numbers) {
    let median, medianRepeats = 0;
    for(let i = 0; i < numbers.length; i++) {
        let repeats = 0;
        for (let j = 0;j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                repeats++;
                if (repeats > medianRepeats) {
                    medianRepeats = repeats;
                    median = numbers[i];
                }
            }
        }
    }
    return median;
}

