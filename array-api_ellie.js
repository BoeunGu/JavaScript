//Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' + ');          // join(' + ')  join안에 구분좌를 입력할 수 있음.
    console.log(result);
}

//  Q2. make an array out of a string
{
    const fruits = '🍎,🥝,🍌,🍒';
    const result = fruits.split(',', 3);        //(구분좌,배열길이지정)
    console.log(result);
}

// Q3. make this array look like this:[5,4,3,2,1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);         //  배열도 순서가 바뀜
}

//Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    array.splice(0, 2);         //splice는 배열자체를 수정함.
    console.log(array);

    const result = array.slice(1, 3);       //slice는 배열에서 원하는 부분만 따로 가져올 수 있음.(시작하는 인덱스,원하는 마지막 인덱스+1)
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
//  방법1
{
    for (let student of students) {
        if (student.score === 90) {
            console.log(student);
        }
    }
}

//방법2
{
    const result = students.find(function (student, Index,) {
        return student.score === 90;

    });
    console.log(result);
}

// 방법3            Arrow function
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);      //student.enrolled가 'true'인 값들만 리턴됨
    console.log(result);
}

// Q7.  make an array containing only the student's scores
//result should be:[45,80,90,66,88]
{
    const result = students.map((student) => student.score);     //map함수는 원래의 값이 어떤 값으로 변경되어서 리턴됨 , student의 객체에서 student.score의 값만 골라서 리턴됨  , 만약 점수를 2배로 리턴하고 싶으면 student=>student.score*2를 하면됨.
    console.log(result)
}

//Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student)=> student.score<50);     // 콜백함수에서 리턴값이 true가 있는지 확인해주는 요소  ,every()는 모든 요소가 조건을 만족하면 true를 리턴함
    console.log(result);
}


