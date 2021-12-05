// Objects
// one of Javascript's data types.
// a collection of related data and / or functonality.
//Nearly all objects in Javascript are instnace of Object
// object = {key : value};      'key' 우리가 접근할 수 있는 변수 (property)와 그에 상응하는 값의 구성

//1. Literals and properties
const obj1 = {};        //'object literal' syntax
const obj2 = new Object();      //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

//with Javascript magic(dynamically typed language)
//can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

//2. Computed properties  계산된 프로퍼티
// key should be always String      키는 항상 스트링타입으로 받아와야한다.
console.log(ellie.name);        // 접근방법1
console.log(ellie['name']);     // 접근방법2
ellie['hasJob'] = true;           //이런 방식으로 프로퍼티 삽입 가능
console.log(ellie.hasJob);      //ture

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = makePerson('boeun', 24); //간단하게 객체생성

function makePerson(name, age) {      //함수를 통해서 객체생성하는 법, class같은 원리
    return {
        name,       //name=name;
        age,        //age=age;      이렇게 Key와 value가 같으면 왼쪽처럼 생각가능
    }
}

//4. Constructor Functions  객체를 생성해주는 기능의 함수 , 자바스크립트 엔진이 알아서 object를 만들어줌
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//5. in operator :  property existence check (key in obj) 해당하는 객체안에 키가 있는지 없는지 확인하는 방법
console.log('name' in ellie);       //true
console.log('age' in ellie);        //true
console.log('random' in ellie);     //false
console.log(ellie.random);          //undefined

// 6. for...in VS for ..of
// for (key in obj)
console.clear();        // 이전의 콘솔들을 지워줌
for (key in ellie) {
    console.log(key);       //ellie안에 있는 모든 key들이 출력됨.
}


//for (value of iterable)
const array = [1, 2, 3, 4, 5,]
for (value of array) {        //array에 있는 모든 값들이 value에 할당됨
    console.log(value);
}


//7. Fun cloning
//Object.assgin(dest,[obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;       //ref복사
user2.name = 'coder';
console.log(user);


const user3 = {};
Object.assign(user4, user);          //'Object.assign'함수를 사용하여 객체 복사 가능
//const user4 = Object.assign({},user);       같은 방법
console.log(user4);

//eg
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

