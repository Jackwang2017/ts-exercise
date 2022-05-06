// 练习Typescript之---基本类型<string,number,boolean>
let a: number;
a = 10;
a = 22;
let b: string;
b = 'llllll';
// b = 55;

// let c: boolean = false;
let c = false;
c = true;

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(123,456));
// console.log(sum(123,'456'));

function sum(a: number, b: number):number {
  return a + b;
}
console.log(sum(123, 200))
