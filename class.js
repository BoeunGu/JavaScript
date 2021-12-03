'use strict';
//Object-oriendted programming
//class : template
//object : instance of a class
//JavaScript classes
// -introduced in ES6
// -syntactical sugar over prototype-baed innheritance


// 1. Class declaration
class Person {
    //constructor , 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);   // 객체생성
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getters and Setters        보안성을 위함
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if(value1<0){
        //     throw Error ('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;

    }
}

const user1 = new User('Steve', 'Job', -1);


//3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;     //public
    #privateField = 0;   //#는 private
}

//4. Static properties and methods      객체생성을 안해도 생성이 되어있음, 메모리의 사용을 줄여줄수있음
class Article {
    static publisher = 'Hello coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape { }

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
