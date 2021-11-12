// OOP 

// Наследование (Inheritance)

// Vehicle (wheels, fuel, color, startEngine(), stopEngine(), beep())
//      |
//      |-> Car (wheels = 4)
//          |
//          |-> ElectroCar (fuel = 'electricity')
//      |-> Bicycle
//          |
//          |-> BMXBicycle
//      |-> Moto
//
// const myCar = new ElectroCar();

// Prototype

// function Vehicle() {
//     this.wheels = 2;
//     this.fuelLevel = 50;
//     this.fuel = 'gas';
//     this.color = 'transparent';

//     this.startEngine = function () {
//         if (this.fuelLevel > 0) {
//             console.log(`Vehicle started`);
//         } else {
//             console.log(`Out of ${this.fuel}`);
//         }

//         const startLevel = this.fuelLevel;
//         for (let i = 0; i < startLevel; i++) {
//             this.fuelLevel--;
//             console.log(`${this.fuel} is running`);
//         }
//         console.log(`Out of ${this.fuel}`);
//     };

//     this.beep = function () {
//         console.log('Vehicle is beeping');
//     }

//     this.getBoartInfo = function () {
//         const info = {
//             wheels: this.wheels,
//             color: this.color,
//             fuel: this.fuel,
//             fuelLevel: this.fuelLevel
//         };
//         console.table([info]);
//     }
// }

// const myVehicle = new Vehicle();
// myVehicle.beep();
// myVehicle.startEngine();

// function Car() {
//     this.wheels = 4;
// }
// Car.prototype = new Vehicle();

// const myCar = new Car();
// myCar.getBoartInfo();


// function ElectroCar() {
//     this.fuel = 'electricity';
// }
// ElectroCar.prototype = new Car();

// Car:Vehicle{} (<-object)
//    |
//    |-> ElectroCar:Car{} (<-object)
//          |-> new ElectroCar()
//          |-> new ElectroCar()
//          |-> new ElectroCar()
//          |-> new ElectroCar()

// class Vehicle {
//     constructor() {
//         this.wheels = 2;
//         this.fuelLevel = 50;
//         this.fuel = 'gas';
//         this.color = 'transparent';
//     }

//     startEngine() {
//         if (this.fuelLevel > 0) {
//             console.log(`Vehicle started`);
//         } else {
//             console.log(`Out of ${this.fuel}`);
//         }

//         const startLevel = this.fuelLevel;
//         for (let i = 0; i < startLevel; i++) {
//             this.fuelLevel--;
//             console.log(`${this.fuel} is running`);
//         }
//         console.log(`Out of ${this.fuel}`);
//     };

//     beep() {
//         console.log('Vehicle is beeping');
//     }

//     getBoartInfo() {
//         const info = {
//             wheels: this.wheels,
//             color: this.color,
//             fuel: this.fuel,
//             fuelLevel: this.fuelLevel
//         };
//         console.table([info]);
//     }
// }

// class Car extends Vehicle {
//     constructor() {
//         super(); // this & super 
//         this.wheels = 4;
//     }
// } 

// const myCar = new Car();
// myCar.getBoartInfo();

function Student(name, faculty, marks = []) {
    this.name = name;
    this.faculty = faculty;
    this.marks = marks;
}

Student.prototype.someProp = 'test';

Student.prototype.getMax = function () {
    return Math.max(...this.marks);
};

Student.prototype.getMin = function () {
    return Math.min(...this.marks);
};

Student.prototype.getAvg = function () {
    return this.marks.reduce((acc, e) => acc + e, 0) / this.marks.length;
};

Student.prototype.getSum = function () {
    return this.marks.reduce((acc, e) => acc + e, 0);
};

Student.prototype.getInfo = function () {
    return `
    Student name: ${this.name}
    Faculty: ${this.faculty}
    Avg. : ${this.getAvg()}
    `;
};

const someStudent = new Student('John', 'math', [12, 2, 3, 8, 12]);
const secondStudent = new Student('John', 'math', [12, 2, 3, 8, 12]);
const thirdStudent = new Student('John', 'math', [12, 2, 3, 8, 12]);

// console.log(someStudent.getInfo()); 

console.log(someStudent, secondStudent, thirdStudent);

// hasOwnProperty - seeks just own props
console.log(someStudent.hasOwnProperty('name')); // true
console.log(someStudent.hasOwnProperty('someProp')); // false

// in - uses prototype
console.log('name' in someStudent); // true
console.log('someProp' in someStudent); // true