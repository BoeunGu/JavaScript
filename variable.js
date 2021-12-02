'use strict'

//2.Variable, rw(read/write)  메모리에 값을 읽고, 쓰기가 가능
// let(added in ES6)

// let(mutable type)
let globalName = 'global name';
{
let name = 'boeun';
console.log(name);
name= 'hello';
console.log(name);
}
console.log(globalName);

//var (Don't ever use this!)
//var hoisting(move declaration form bottom to top)
//var has no block scope
{age =4;
var age;}
console.log(age);

//호환성 체크 'Can i use?'

// 3. Constant(Immutable), r(read only)
//use const whenever possible
//favor immutable data type always for a few reasons:
//-security
//-thread safety : 
//-reduce human mistakes
// 가르키는 포인터가 잠겨있음 /  값 변경이 불가능(읽기전용)
//되도록 const로 변수설정 권장

const daysInWeek =7;
const maxNumber=5;


//4. Variable types
//primitive, single item: number, string, boolean, null, undefiedn,symbol // 값 자체가 메모리에 저장
//object, box container / 너무커서 메모리에 한번에 저장이 안됨. 포인터는 잠김. 하지만 레퍼런스를 통해서 값을 접근가능.
//function, first-class function

//C언어는 변수할당 시 메모리 설정 가능


const count = 17;// integer
const size = 17.1; //decimal number

//number - special numerric valuse ; infinity,-infinity,NaN
const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//String
const char='c';
const brenden = 'breaden';
const greeting = 'hello'+brenden;
console.log('value:${greting}, type:${typeof greeting}')


//boolean
//false: 0, null,undefined,NaN,''
//true: any other value 
const canRead=true;
const test=3<1; //false
console.log('value: ${canRead}, type: ${typeof canRead}');
console.log('value: ${test}, type: ${typeof test}');


//null
let nothing=null;
console.log('value: ${nothing}, type: ${typeof nothing}');

//undefined
let x;

//symbol, create unique identifiers for obejects
const symbol1=Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1==symbol2); //false
const gSymbol1= Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1==gSymbol2);//true

//object, real-life object, data structure
const boeun ={name: 'bouen',age:'26'};
boeun.age=22; // consts는 값이 변경되지 않기때문에 이런식으로 접근가능.

//5. Dynamic typing: run-time이 동작할때 실시간 변수타입 할당 
// let string으로 지정해도 number로 변경가능.

let text ='hello'
console.log(`value: ${text}, type: ${typeof text}`); // hello, string
text=1;
console.log(`value: ${text}, type: ${typeof text}`); // 1, NUMBER
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, JavaScript엔진이 String으로 인식.
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`); // 4,나누기 연산자가 있고 문자안의 값이 숫자이기 때문에 NUMBER로 인식함.

