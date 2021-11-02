function Student(name, faculty, marks = []) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;

    this.getMax = () => {
        return Math.max(...this.marks);
    };

    this.getMin = () => {
        return Math.min(...this.marks);
    };

    this.getAvg = () => {
        return this.marks.reduce((acc, e) => acc + e, 0) / this.marks.length;
    };

    this.getSum = () => {
        return this.marks.reduce((acc, e) => acc + e, 0);
    };

    this.getInfo = () => {
        return `
        Student name: ${this.name}
        Faculty: ${this.faculty}
        Avg. : ${this.getAvg()}
        `;
    };
}

// class Student {
//     constructor(name, faculty, marks = []) {
//         this.name = name;
//         this.faculty = faculty;
//         this.marks = marks;
//     }

//     getMax() {
//         return Math.max(...this.marks);
//     }
// }

const studentA = new Student('Bob Doe', 'Philosophy', [12, 10, 11, 8, 10, 5]);
const studentB = new Student('John Cooper', 'Math', [6, 7, 3, 8, 12, 5]);

console.log(studentA.getMax());
console.log(studentB.getMax());

const group = [
    new Student('Bob Doe', 'Philosophy', [12, 10, 11, 8, 10, 5]),
    new Student('John Cooper', 'Math', [6, 7, 3, 8, 12, 5])
];