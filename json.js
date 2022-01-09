//JSON
//JavaScript Object Notation

//1. Object to JSON  -> serialize
//stringify(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),            //Date() 라는 object
    jump: () => {                                      // 함수를 object에 있는 데이터가 아니라서 json으로 변환 되지 않음
        console.log(`${name} can jump!`);

    },
};

json = JSON.stringify(rabbit); //  object -> json 
console.log(json)

json = JSON.stringify(rabbit, ['name']);  // json으로 변환 할때  array에 객체의 property key만 넘겨주면됨
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {  //변환 할 때 좀더 조건을 걸고 싶으면 replacer 콜백함수 사용 가능 (key, value)를 전달 받음
    console.log(`key : ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
})






//2. JSON to Object -> deserialize
//parseFloat(JSON)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json)
console.log(obj);          //jump
rabbit.jump();
obj.jump();            // serialize 될때 json에 함수는 변환되지 않아서 해당 json을 다시 객체화 할때 jump()함수는 없음


console.log(rabbit.birthDate.getDate());  //new Date() 안에 포함되어 있는 API
console.log(rabbit.birthDate.getDate());    //JSON으로 변환할 때 이미 String으로 변환되어 다시 객체화 했을때에도 String으로 할당되어 API 사용 불가


// 그래서 reviver callback function 사용

const obj01 = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;     // reviver 함수를 이용해서 key가 'birthDate'이면 Date 객체를 생성해줌

})
console.log(obj01.birthDate.getDate());
