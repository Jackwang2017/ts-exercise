// 练习Typescript之---基本类型<字面量，any，unknown，void, never>
let aa: 10;
aa = 10;
let bb: "male" | "female";
bb = "male";
bb = "female";

let cc: boolean | string;
cc = true;
cc = 'world';

// let d: any;

let d;
d = 10;
d = 'ehllo';
d = true;

let e: unknown;
e = 10;
e = 'hello';
e = true;

let s: string;
// d的类型是any,可以赋值给任意变量
// s = d;
e = 'hellp';
// s = e;
// unknown实际上是一个类型安全的any, unknown类型的变量，不能直接赋值给其他变量
if (typeof e === 'string') {
  s = e;
}

// 类型断言, 告诉解析器变量的实际类型
// <类型>变量
s = e as string;
s = <string>e;

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {

}

// never表示永远不会返回结果, 一般用来报错
function fn2(): never {
  throw new Error('有错')
}