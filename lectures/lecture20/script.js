// OOP 

// Encapsulation

/**
 * class Car {
 *      constructor() {}
 *      
 *      public start() {
 *          if (this.checkFuelLevel() === 0 || this.checkOilLevel() === 0) {
 *              throw new Error('Please, fill the tank');
 *              return;
 *          }
 *          this.startGenerator();
 *      }
 * 
 *      public drive() {
 *          this.checkABS();
 *      }
 * 
 *      private checkFuelLevel() {}
 * 
 *      private checkOilLevel() {}
 * 
 *      private startGenerator() {}
 * 
 *      private checkABS() {}
 * }
 * 
 * const myCar = new Car();
 * 
 * myCar.start();
 */


// _
class Car {
    constructor() {}

    start() {}

    drive() {}

    _checkFuelLevel() {}

    _checkOilLevel() {}
}

const myCar = new Car();

myCar._checkFuelLevel();

