var infoInter;
infoInter = {
    name: 'limeng',
    getRes: function (input) {
        if (typeof input === 'string') {
            return input.length;
        }
        else {
            return String(input);
        }
    }
};
console.log(infoInter.getRes('123'));
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
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 1] = "green";
    Colors[Colors["blue"] = 2] = "blue";
})(Colors || (Colors = {}));
(function (Colors) {
    Colors.yellow = 3;
})(Colors || (Colors = {}));
console.log(Colors);
