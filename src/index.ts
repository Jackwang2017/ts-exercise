// 练习Typescript之---声明合并
interface InfoInter {
  name: string;
  getRes(input: string): number;
}
interface InfoInter {
  name: string;
  getRes(input: number): string;
}

let infoInter: InfoInter;
infoInter = {
  name: 'limeng',
  getRes(input: any): any {
    if (typeof input === 'string') {
      return input.length
    } else {
      return String(input)
    }
  }
}
console.log(infoInter.getRes('123'))

// namespace Validations {
//   export const numberReg = /^\d+$/
//   export const checkNumber = () => {}
// }
// namespace Validations {
//   console.log(numberReg)
//   export const checkLetter = () => {}
// }

// class Validations {
//   constructor() {}
//   public checkType() {}
// }
// namespace Validations {
//   export const numberReg = /^\d+$/
// }
// console.dir(Validations.numberReg)

// function countUp() {
//   countUp.count++;
// }
// namespace countUp {
//   export let count = 0;
// }
// console.log(countUp.count)
// countUp();
// console.log(countUp.count)
// countUp();
// console.log(countUp.count)

enum Colors {
  red, green, blue
}
namespace Colors {
  export const yellow = 3
}
console.log(Colors)