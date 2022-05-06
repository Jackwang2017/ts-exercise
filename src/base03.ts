// 练习Typescript之---基本类型<object, array, tuple, enum>

let a1: object;
a1 = {};
a1 = function () {}

let b1: {name: string, age?: number}
b1 = { name: '孙悟空' }

let c1: {name: string, [propName: string]: any}
c1 = {name: '煮', age: 18, gender: 'male'}

let d1: (a:number,b:number)=>number;
d1 = function(n1, n2):number {
  return n1 + n2
}
// d1 = function(n1:string, n2:string):number {
//   return n1 + n2
// }

// let e1: Array<string>;
let e1: string[];
e1 = ['a', 'b', 'c '];

// 元组，元组就是固定长度的数组
let h: [string, string, number];
h = ['hello', 'world', 3];

// 枚举enum，
let i: {name: string, gender: 0 | 1}
i = {
  name: 'kong',
  gender: 0
}

enum Gender {
  Male,
  Female
}
let j: {name: string, gender: Gender.Male}
console.log(j.gender === Gender.Male)

// |表示或, &表示且
let k: string | number;
let l: {name: string} & {age: number}
l = {name: 'jjjj', age: 22}

let m: 1 | 2 | 3 | 4 | 5;
// type myNumber = 1 | 2 | 3 | 4 | 5;
// m = 6;
m = 4;
// 类型别名
type myType = string;
let n: myType;
