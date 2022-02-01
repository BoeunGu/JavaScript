//Taking Decisions : if_else

const age =15;
const isOldEnough= age>=18;

if(isOldEnough) {
    console.log("Sarah can start driving icense :)");
} else{
    const yearsLeft = 18-age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear=1991;
let century;
if(birthYear <=2000){
    century=20;
}else{
    century=21;
}

console.log(century);


// Type Conversion 

const inputYear='1991'
console.log(inputYear+18)   //199118 -> String + Number = String
console.log(Number(inputYear),inputYear); //1991 ," 1991 " -> Type Conversion

console.log(Number('Jonas')); //NaN 
console.log(typeof NaN); //number -> invalid numver


console.log(String(23)); //String

//JavaScript can only convert 2-3 types (to number, to String, to boolean)

//type coercion (암시적 변환)
console.log('I am' + 23 + 'years old') //String + number =>String
console.log('23'-'10'-3); // minus('-') operator trigger opposite conversion -> String to number
console.log('23'*'2'); //46
console.log('24'/'2'); //12

let n='1' +1; //11, String
n=n-1; //10, number
console.log(n); //10





