/**
 * 
 */
var laptop = new Computer(2016, 1300, true, 1000, 800, 'Windows 10');
var tablet = new Computer(2015, 900, true, 256, 200, 'Android 5.1');
console.log(laptop);
console.log(tablet);

console.log(laptop.useMemory(100));
console.log(laptop.useMemory(1000));
console.log(laptop);

tablet.changeOperationSystem('Windows 10');

console.log(laptop);
console.log(tablet);