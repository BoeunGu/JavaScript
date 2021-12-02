// 연산은 정말 중요하다.

//1. String concatenation
console.log('my'+'cat'); // 문자열 합하기 가능/
console.log('1'+2); // 문자+숫자=문자열
console.log(`string literals: 1+2=${1+2}`); // 값은 Stirng 타입


// 2. Numeric operators

console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3); //exponentiation

// 3. Increment and decrement operators
let counter =2;
const preIncrement = ++counter;
//counter=counter+1  -> 3 /  값을 먼저 더한 후 변수에 할당
//preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter:${counter}`);

const postIncrement = counter++;
//postIncrement =counter; -> 3 // 변수에 값을 먼저 할당 한 후 값을 1증가.
//counter = counter +1;  ->4
console.log(`postIncrement: ${postIncrement}, counter:${counter}`);

// 4. Assignment operators
let x=3;
let y=6;

x +=y; // x= x+y;
x -=y; // x= x-y;
x *=y; // x=x*y;
x /=y; // x=x/y;

// 5. Comparison operators
console.log(10<6); // false /  less than
console.log(10<=6); //false / less than or equal
console.log(10>6); // true / greater than
console.log(10>=6); // true / greater than or equal


// 중요!! 6. Logical operators: ||(or), &&(and), !(not)

const value1=false;
const value2= 4<2;

// || (or)  , finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // 3개 중에 하나라도 'true'값을 가지고 있으면 ture로 계산이 됨. (왼쪽부터 오른쪽으로 계산)
// POINT!! 'OR' 연산자는 처음으로 'true' 값이 나오면 거기서 멈추기 때문에 맨앞에 계산이 헤비한 것들 보다는 뒤쪽에 배치하는 것이 효율적인 코드작성(최후의 수단으로 사용.)
function check(){
    for(let i=0; i<10; i++){
        //wasting time
        console.log('ㅎㅅㅎ');
    }
    return true;
}

// && (and), fins the first falsy value
//often used to compress long if-statement
// nullableObject && nullableObject.something   -> 
// if(nullalbeObject !=null){
//     nullalbeObject.something; // null 값이 아닐때 .something값을 받아옴
// }
console.log(`and: ${value1 && value2&& check1()}`); // 3개가 다 'true'가 되어야 'true'를 리턴함.
// 제일 헤비한 operation을 뒤쪽으로 배치하는 것이 좋음.

function check1(){
    for(let i=0; i<10; i++){
        //wasting time
        console.log('ㅎㅅㅎ');
    }
    return true;
}

// '!' (not) //  값을 반대로 바꾸어줌
console.log(!value1); // false -> true로 값을 바꿈

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// ==   loose equality, with type conversion
console.log(stringFive == numberFive); //true   타입을 변경해서 검사를 하기에 5,5 만 검사 
console.log(stringFive != numberFive);//false

// === strict equality, NO TYPE CONVERSION
console.log(stringFive === numberFive); // 타입을 신경써서 검사, 즉 타입이 다르면 다른 값이라고 판단. (되도록 권장)
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: 'ellie'};     // 'ellie1'는 'ref1'를 포인팅하고, 레퍼런스는 'name'을 포인팅
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;  //  같은 레퍼런스를 가짐
console.log(ellie1 == ellie2);  //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); // true (ref가 같기 때문에)

//Quiz

console.log(0 == false);    //true / 0,null,'',undefined는 false로 간주될수 있음
console.log(0 === false);   // num != boolean
console.log('' == false);   //true
console.log('' === false);  // sting != boolean
console.log(null == undefined); //true
console.log(null === undefined);    // false

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if(name === 'coder'){
    console.log('You are amazing coder!');
} else{
    console.log('unknown');
}

// 9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'ellie'? 'yes' : 'no');    // true면 'yes'로(오른쪽) 실행 false면 'no'(왼쪽)실행. / 간단할 때만 사용하기 권장

//10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('이렇게 묶어서도 사용가능합니다.');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,   조건문이 맞을 떄만 실행하고 싶다면 사용
//body code is executed.
let i =3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,  // 블럭을 먼저 실행하고 싶다면 사용
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

// for loop, for(begin; condition; step)
for (i=3;i>0;i=i--){
    console.log(`for: ${i}`);
}

for(let i=3;i>0;i=i-2){
    //inline variable declaration, 지역변수선언
    console.log(`inline variable for: ${i}`);
}


// nested loops     bigO(n^2)라는 작성 -> CPU에 좋지 않음 (되도록 피함)
for (let i=0;i<10; i++){
    for (let j=0; j<10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
//break는 루프를 완전히 끝냄
//continue는 지금것만 스킵하고 다음스탭으로 넘어감.

//Quiz 01. iterate from 0 to 10 and print only even numbers(use continue)
for(let k=0;k<11;k++){
    if(k%2==0){
        continue;
    }
    console.log(`k: ${k}`);
}

//Quiz 02. iterate from 0 to 10 and print numbers until reaching 8(use break)
for(let i=0;i<11;i++){
    if(i>8){
        break;
    }
    console.log(`i: ${i}`);
}