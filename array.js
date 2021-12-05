'use strict';

//Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2, 3];

//Index position       배열에서 인덱스넘버기준으로 자료들을 이용하는 것이 중요함
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);     //  배열의 길이 ,   2
console.log(fruits[0]);         // 배열의 값에 접근하는 법, 배열의 첫번째 값
console.log(fruits[fruits.length - 1]);       //배열의 마지막번째 값에 접근하는 법


//Looping over an array
//print all fruits

// a.for(
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



//b. for of
for (let fruit of fruits) {
    console.log(fruits);
}

//c. forEach
fruits.forEach(function () {
    console.log('haha');
})

fruits.forEach(function (fruits, index) {
    console.log(fruits, index);
});

//Arrow function으로 변경

fruits.forEach((fruit, index) => console.log(fruit, index));      //forEach는 배열안에 있는 value들 마다 전달받은 함수들을 출력한다.


//4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🥝', '🍑');
console.log(fruits);


//pop: remove an item from the end
fruits.pop();     //배열 맨 마지막 값 삭제
const poped = fruits.pop();  //삭제된 값이 리턴이 됨.
console.log(poped);
// unshift : add an item to the beginning       //제일 앞에 값 삽입
fruits.unshift('🥑', '🍇');
console.log(fruits);
// shift : remove an item from the beginning        //제일 앞에 값을 삭제
fruits.shift();
console.log(fruits);

//NOTE!!        shift, unshift are slower than pop,push
// 모든 배열의 이동이 필요해서 느림. 배열이 길면 길수록 비효율적이다. 
//splice : remove an item by index position      아이템을 지정된 인덱스에서 삭제하는 법

fruits.splice(2, 3);
console.log(fruits);
fruits.splice(0, 1, '🫐', '🍒');        //0번째 자리부터 1개의 값을 지우고 그 자리에 블루베리,체리값 추가.
console.log(fruits);


//combine two arrays
const fruits2 = ['🍍', '🍈'];
const newFruits = fruits.concat(fruits2);       // 배열 두개를 합칠 수 있다.
console.log(newFruits);


//5. Searching      , 몇번 째에 값이 있는지 확인하는 방법
// find the index

console.log(newFruits);

//indexOf
console.log(fruits.indexOf('🫐'));          //배열의 몇 번째에 있는지 알려주는 API, 제일 첫번째인 값의 인덱스를 리턴한다.

//includes
console.log(newFruits.includes('🥕'));      //배열에 해당하는 값이 있는지 boolean타입으로 출력

//lastIndexOf                               // 맨 마지막으로 일치하는 값의 인덱스를 리턴
newFruits.push('🫐');
console.log(newFruits.indexOf('🫐'));
console.log(newFruits.lastIndexOf('🫐'));
