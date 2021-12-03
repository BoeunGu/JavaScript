// Function
//- fundamental buiding block in the program
//- subprogram can be used multiple times
//- performs a task or calculate a value

//1. Function decalration
// function name(parm1, param2){body... return}
//one function === one thing ,하나의 함수는 한가지 일만 하도록 만드는 것이 좋음.
//naming : doSomething, command, verb   , 이름은 되도록 동사로.
//function is object in JS

function printHello() {
    console.log('Hello');
}
printHello(); // 함수 호출, 계속 같은 단어만 프린트하는 함수

function log(message) {      //파라미터로 메세지를 함수에 전달가능 
    console.log(message);
}

log('Good Morning!');


//2. Parameters
//premitive parameters : 메모리에 value가 그대로 저장됨.
// object parameters : 메모리에  reference가 저장됨.

function changeName(obj) {
    obj.name = 'coder';     // object는 레퍼런스로 전달되기에 함수안에서 object값을 변경하면 변경사항에 그대로 메모리에 저장됨.
}

const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); // coder

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');     // 두번째 parameter는 undefined로 출력

//4. Rest parameters (added in ES6)
function printAll(...args) {     // '...' 는 배열 형태로 전달이 된다.
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // for(const arg of args){          //위의 for문과 동일하게 출력됨 for ~ of 문법
    //     console.log(arg);
    // }

    //args.forEach(args) => console.log(arg);       // 또한 동일함. forEach 함수
}
printAll('dream', 'coding', 'Yay')        //3개의 값이 담겨진 배열형태로 전달된다.



//5. Local scope  , 지역변수            //변수 : 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';   //global variable
function printMessage() {
    let message = 'hello';
    console.log(message);   //local variable
    console.log(globalMessage);     //글로벌 변수는 함수 안에서 접근가능
}

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);       //3
console.log(`sum: ${sum(1, 2)}`);


//7. Early return, early exit
//bad
//e.g
function upgradeUser(uesr) {
    if (user.point > 10) {              //upgrade함수 안에서 저런 로직이 있다면, 블럭안에서 로직을 많이 작성하면 가독성이 떨어짐. 
        //long upgrade logic...
    }
}

function upgradeUser(user) {
    if (user.point < 10) {                  //조건이 맞지 않을 땐 빨리 리턴하여 함수를 종료하고 , 조건이 맞을때만 뒤에 필요한 로직을 적으면 좋음.
        return;
    }
    // long upgrade logic...
}

//First-class function
//functions are treated like any other variable 
//can be assigned as a value to variable    -> 변수에 할당가능
//can be passed as an argument to other functions.  -> 다른 함수에 변수로 전달가능.
//cna be returned by another function   -> 다른함수에 리턴값으로 리턴가능.

//1. Function expression
//a 'function declaration' can be called earlier than it is defined.  (Hoisted)     호이스팅이 가능.
//a 'function expression' is created when the execution reaches it.            할당된 다음부터 호출이 가능

const print = function () {           //anonymous function(이름이 없는 함수) , 함수를 선언함과 동시에 바로 print라는 변수에 바로 할당가능.
    console.log('print');
};
print();
const printAgain = print;           // 다른 변수에 또 할당 가능
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {     // 함수를 변수로 전달해서 상황에 맞게 사용가능. 
    if (answer === 'love you') {
        printYes();
    }
    else {
        printNo();
    }
}
const printYes = function () {
    console.log('Yes!');
};

const printNo = function print() {            //named function, better debugging ini debugger's stack traces
    console.log('No!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//Arrow function
//always anonymous

// const simplePrint = function(){
//     console.log('simplePrint!');
// };

//변경했을 때
const simplePrint = () => console.log('simplePrint!');

const add = (a, b) => a + b;
const add = (a, b) => {      // 내용이 많아서 괄호를 사용하면 'return'를 해주어야함
    //do something more
    a + b;
    return a * b;
};

//IIFE : Immediately Invoked Function Expression        , 선언과 동시에 호출하는 방법.
(function hello() {
    console.log("IIFE");
})()
