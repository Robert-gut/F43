"use strict";
//!1 type
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCode = void 0;
// const a: number = 1
// const b: number = -10
// const v: number = 3.5
// const f: number = 10_000_000
// const a: string = "test"
// const a: string = 'test'
// const a: string = `test`
// const a: boolean = true
// const a: boolean = false
// const a: number = 1000
// const b: number = 2000
// const c: number = a + b
//! 2 функції, мтрілкові функції, any
//? any це тип в TS який означає будьякий тип
// function getFullName (firstName: string, surName: string):string{
//   if(typeof firstName !== 'string'){
//     throw new Error('!!!!!!!!!!!!')
//   }
//   return `${firstName} ${surName}`
// }
//arraw fun
// const getFullNameArrow = (firstName: string, surName: string):string => {
//   return `${firstName} ${surName}`
// }
// console.log(getFullName('Dmytro','Kyleba'));
// console.log(getFullName(true,false));
//? void - нічого не вертає/ return це функція яка щось вертає
// function test():string {
//   return ''
// }
// function test1():void {
//   '1' + 1
// }
//! 3 Обєкти 
// function getFullName(userEntity: {firstName: string, surName: string}):string{
//   // userEntity.age
//   return `${userEntity.firstName} ${userEntity.surName}`
// }
// const user = {
//   firstName: 'Den',
//   surName: 'Tor',
//   age: 27,
//   skills: {
//     dev: true,
//     devops: true
//   }
// }
// console.log(getFullName(user));
//! масиви 
// const slills = ['dev', 'devOps']
// const slills: string[] = ['dev', 'devOps']
// // const slills: string[] = ['dev', 'devOps', 1]//errr
// const slillsTypesLot: any[] = ['dev', 'devOps', 1, undefined, true]
// const skills: string[] = ['dev', 'devOps', 'QA']
// for (const skill of skills) {
//   console.log(skill.toLowerCase());
// }
// const res = skills
// .filter((s:string) => s !== 'devOps')
// .map(s => s + '! ')
// .reduce((a,b) => a + b )
//! tuples (кортеджи) - це масив обмеженої довжини де кожний ел має свій тип
// const slills: string[] = ['dev', 'devOps']
// const slillsTypesLot: any[] = ['dev', 'devOps', 1, undefined, true]
// const skills: string[] = ['dev', 'devOps', 'QA']
// const skills = [1, 'dev']
// const skills: [number, string] = [1, 'dev']
// const id = skills[0]
// const slillsName = skills[1]
// const idNumber: string = slills[0] 
// skills.push('test')
// const test = skills[2]
// const [id , skillsName] = skills
// const arr: [number, string, ...boolean[]] = [1, 'dev', true, true, false]
//? тип елемента і про довжину
//! readonly
// let a = 1
// a = 2
// const b = 2
// b = 3
// const slills: readonly [string, string, string] = ['dev', 'devops', 'QA']
// const slills: readonly string[] = ['dev', 'devops', 'QA']
// slills[0] = 'netOps' //err
// const skills: string[] = ['dev', 'qa']
// const skills: Array<string> = ['dev', 'qa']
// const skills: ReadonlyArray<string> = ['dev', 'qa']
//! Enum - перелік іменованих значень 
// const res = {
//   message: 'платіж успішний',
//   statusCode: 1
//   // statusCode: 'success'
// }
// const SUCCESS = 'SUCCESS'
// 1 's' - успіх
// 2 'p' - в процесі
// 3 'f' - фейл
// if(res.statusCode === SUCCESS){
// }
//? ENUM
// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS = 3,
//   FAILED = 10
// }
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 1] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (exports.StatusCode = StatusCode = {}));
// enum StatusCode {
//   SUCCESS = 1,
//   IN_PROCESS = 'p',
//   FAILED = 'f'
// }
// if(res.statusCode === StatusCode.SUCCESS){
// }
// function action(status: StatusCode){
// }
// action(StatusCode.SUCCESS)
// action(1)
// // action('p')
// function compute():number {
//   return 3
// }
// enum Roles {
//   ADMIN = 1,
//   USER = ADMIN * 2,
//   DEV = compute(),
// }
//! Продвинуті типи!
//! union, litereal, type Alias , interface, optional, інтерсекшени....
//! 1 UNION (|)
// const arr = ['test', 1, true]
// function logId(id: string | number): string{
//   return `${id}`
// }
// logId('test')
// logId(1235345)
// logId(true)//err
//? звуження типів
function logId(id) {
    // id.toLowerCase()//err
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else if (typeof id === 'number') {
        id.toFixed();
    }
    else {
        id.valueOf();
    }
}
logId('unefined');
logId(34);
logId(true);
// logId(undefined)//err
function logError(err) {
    // err.toLowerCase()//errr
    if (Array.isArray(err)) {
        err.forEach(el => el + '!');
    }
    else {
        err.toLowerCase();
    }
}
function logObject(obj) {
    if ('a' in obj) {
        obj.a;
    }
    else {
        obj.b;
    }
}
function logIds(a, b) {
    if (a === b) {
        a + b;
    }
    else {
        console.log(a, b);
    }
}
