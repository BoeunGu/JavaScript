//Truthy Falsy Value

//5 falsy values: 0,'',undefined,null,NaN

console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Boeun'));//true
console.log(Boolean({}));//empty object -> true
console.log(Boolean('')); //false

const money = 100;
if(money){
    console.log("Don't spend it all");//execute
}else{
    console.log("You should get at job!");
}

let height;
if(height){
    console.log('YAY! Height is defined');
}else{
    console.log('Height is Undefiend') //execute
}


//Equality Operators : == vs ===

const age =18;
if(age ===18) console.log('You just became an adult :)');

18===18 //true, strict equlity operator
'18'===18 //false

//== -> loose equlity operator , It dose type coresion ( try to avoid to use loose equlity)
'18'==18 //true
const age_1='18'
if(age_1 ==18) console.log('You just became an adult :)');


const favourite= prompt("What is your favourite number?") // 사용자에게 값을 입력받음
console.log(typeof favourite) //string

  // Basic Boolean logic  and, or, not

  const a='Sarah has a driver license'
  const b='Sarah has good vision'

  //A and B -> (left to right), return true if only A and B are both true
  //and -> return ture when All are true(No matter how many variables)

  //A or B -> (left to right) , return true when ONE is true

  //Not a, Not b , inverts true/flase value 

//A =false
//B=true

// !A=true
// A and B=false
// A or B=true
// !A and b=true
// A or !B=false

//Logical Operator

const hasDriverLicense=ture; //A
const hasGoodVision = false; //B
const isTried = true; //C


console.log(hasDriverLicense && hasGoodVision); //and -> false
console.log(hasDriverLicense || hasGoodVision); //or -> true
console.log(!hasDriverLicense); //false

const shouldDrive = hasDriverLicense && hasGoodVision;
if(shouldDrive){
    console.log('Sarah is able to drive!')
}else {
    console.log('Someone else should drive...!'); //execute
}

console.log(hasDriverLicense || hasGoodVision || isTried);//true







