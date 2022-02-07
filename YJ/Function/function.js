//Function
//자바스크립트에서의 함수는 속성과 메소드를 가질수 있는 객체이다.


function add(a, b){
    return a + b
}

add['description']='add two numbers' //프로퍼티 추가
add['parameter-info']=function(){ // 메서드 추가
    console.log(`parameters:${add.name} function needs ${add.length} parameters`)

}

console.dir(add) // 속성(프로퍼티)를 출력한다.
console.log('description: ',add['description'])
add['parameter-info']()

// 함수 사용 이유: 코드의 중복을 피하기 위해, 코드의 간결화 가독성 증가. 그리고 유지보수에 좋다

const a=3
const b=5

if(a<b){
    console.log-(a-b) //console.log(-subtract(a,b)) 사용가능
}else{
    console.log(a-b)
}// a-b는 코드 중복이다

function subtract(a,b){
    return a-b
    //or
    //return a<b? b-a:a-b //삼항연산자로 활용가능
} // 함수 추가



//함수표현식

//익명함수

const launguage = ['korean', 'japanese', 'english', 'chinese', 'russian']

const copyArr=function(arr){// 함수표현식은 hoisting이 되지 않음.
    const copiedArr=[]
    
    for(let element of arr){
        copiedArr.push(element)
    }
    return copiedArr
}

const copiedArr=copyArr(launguage)
console.log(copiedArr)
console.log('Check array is same: ',launguage===copiedArr)// 두 배열의 참조값이 같은지 검사


//함수선언과 arrow function의 차이점 => (this, 생성자함수로 사용가능 여부, arguments)
// arrow function은 생성자를 정의하지 못한다.

const music = {
    name: '금요일에 만나요',
    artist: 'IU',
    release: '2013-12-20',
    info: () => {
        //console.log(`${this.name} - ${this.artist} 는 ${this.release} 에 발매되었다.`) // undefined
        console.log(this) // window객체를 가리킴 , 상위에 있는 객체를 가리킴
    }
}
music.info()

const Music =() { // 상위 스코프
    this.name = '보고 싶다'
    this.artist = '김범수'
    this.release = '2002-12-17'
}

const music = new Music()
////////////////////////////////////////////////////////////3번째 차이 -> arguments

function add(a, b){
    console.log(arguments) // arguments 객체
    console.log(arguments[0])// 함수의 첫번째 인자
    console.log(arguments[1])// 함수의 두번째 인자
    console.log(arguments.length)// 함수 인자의 개수
    console.log(arguments.callee)// add 함수 자체
}

add("apple", 'banana') // 유사배열 

////////////////////////////////////////////////////////////////////한 함수 한 기능
//비교기능
function compare(a,b){
    if(a>b) return true
    else return false
}

//뺄셈기능
function subtract(a,b){
    return compare(a,b)? (a-b):(b-a)
}
////////////////////////////////////////////////////함수의 parameter 기본값 설정하기(feat. 타입체크)

//type1
function add(a, b){
    if(typeof a === 'undefined') a = 0 // 타입체크
    if(typeof b === 'undefined') b = 0
    return a + b
}

console.log(add(3, 5)) // 8
console.log(add(3)) // 3
console.log(add()) // 0
 

//type2 _ 삼항연산자
function add(a, b){
    if(typeof a === 'undefined'?a : 0) a = 0 
    if(typeof b === 'undefined'? b = 0)
    return a + b
}

console.log(add(3, 5)) // 8
console.log(add(3)) // 3
console.log(add()) // 0



//type3 - OR 연산자(||) -> truthy, falsy로 판단
//falsy -> 0,'',NaN,null,undefined

function add(a, b){
    a=a||0 //a가 falsy 값이면 0으로 설정
    b=b||0//b가 falsy 값이면 0으로 설정
    return a + b
}

console.log(add(3, 5)) // 8
console.log(add(3)) // 3
console.log(add()) // 0

//type4 - Nullish coalescing operator, 파라미터의 값이 null 또는 undefined인 경우 기본값 0으로 설정

function add(a, b){
    a = a ?? 0
    b = b ?? 0
    return a + b 
}

console.log(add(3, 5)) // 8
console.log(add(3)) // 3
console.log(add()) // 0
console.log(add('', null)) // 0 

///////////////////////////////////////////////////////////////
//함수 파라미터 유효성 검증하기

function copyArr(arr){
    if(!Array.isArray(arr)) return // 유효성 검증하기 , 인자가 배열이 아니면 return
    if(arr.length===0) return // 빈 배열일 경우 return
    const copiedArr = []

    for(let element of arr){
        copiedArr.push(element)
    }

    return copiedArr
}

const copiedArr = copyArr()
console.log(copiedArr)

/////////////////////////////////////////////////나머지 매개변수를 이용한 가변항 함수 만들기

function add(...args){ //(...)을 이용하면 인자 갯수에 상관없이 함수에 주어진 모든 인자들을 배열로 처리한다
    console.log(args)

    let sum=0
    for(let arg of args){
        sum+= arg
    }
    return sum
}

//정렬하기
function sortByOrder(flag, ...args){
    args.sort((a,b)=> flag*(a-b))
    return args
}

console.log(sortByOrder(1,5,2,3,1,4))// 오름차순 정렬
console.log(sortByOrder(-1,5,2,3,1,4))// 내림차순 정렬 

///////////////////////////////////////////////////////////////
//함수인자 전개하기

// 인자가 객체인 경우
function printPersonInfo({ name, age, friends }){// 구조분해(destructuring assignment), 프로퍼티명과 동일하게 넣어줘야함
    console.log('name: ', name)
    console.log('age: ', age)
    console.log('friends: ', friends.join(' '))
}

//인자가 배열인 경우

function printCircleInfo(x, y, radius){
    console.log('원의 중심: ', x, ',', y)
    console.log('반지름: ', radius)
}

printCircleInfo(...[3, 4, 5]) //(...) 스프레드 연선자를 이용하여 배열의 각 요소를 전개한 다음 함수의 파라미터에 복사한다.








