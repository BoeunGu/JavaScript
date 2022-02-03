//Quiz1
//잠들기까지 걸린 시간 ->timeToSleep
//잠에서 깨어나는데 걸린시간 ->timetoWakeup
//잠자는 동안 중간에 깬 횟수 ->awakeWhileSleep
//잠자는 동안 뒤척인 횟수 -> moveWhileSleep
//델타파 비율 -> delta
// let A = [];
// let B = [];
// let C = [];
// let a = 0;
// let b = 0;
// let c = 0;

// function Bedtest() {
//   this.timeToSleep = this.pickRandomNumber(1, 10);
//   this.timetoWakeup = this.pickRandomNumber(1, 10);
//   this.awakeWhileSleep = this.pickRandomNumber(1, 5);
//   this.moveWhileSleep = this.pickRandomNumber(1, 10);
//   this.delta = this.pickRandomNumber(0, 50);
//   this.rate = this.findRate(
//     this.timeToSleep,
//     this.timetoWakeup,
//     this.awakeWhileSleep,
//     this.moveWhileSleep,
//     this.delta
//   );
// }

// Bedtest.prototype = {
//   pickRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   },
//   findRate(a, b, c, d, e) {
//     return e / (a * b * c * d);
//   },
// };

// for (let i = 0; i < 100 * 3; i++) {
//   const person = new Bedtest();
//   if (i < 100) {
//     A.push(person.rate);
//   } else if (i > 99 && i < 200) {
//     B.push(person.rate);
//   } else if (i > 199 && i < 300) {
//     C.push(person.rate);
//   }
// }

// for (let i of A) {
//   if (i > 0.36) {
//     a++;
//   }
// }
// for (let i of B) {
//   if (i > 0.36) {
//     b++;
//   }
// }
// for (let i of C) {
//   if (i > 0.36) {
//     c++;
//   }
// }
// console.log("A's rate=" + a);
// console.log("B's rate=" + b);
// console.log("C's rate=" + c);

//////////////////////////////////////////////////////////////////////////////
//Quiz2
// const R = 6371e3; // 지구의 반지름 (meter)
// function Station(station, latitude, longitude){
//     this.station = station
//     this.latitude = latitude
//     this.longitude = longitude
// }

// Station.prototype={
//     getprice(obj1,obj2){
//         const from_lat=obj1.latitude
//         const from_lon=obj1.longitude
//         const to_lat=obj2.latitude
//         const to_lon=obj2.longitude

//         const φ1 = from_lat * Math.PI / 180;
//         const φ2 = to_lat * Math.PI / 180;
//         const Δφ = (to_lat - from_lat) * Math.PI / 180;
//         const Δλ = (to_lon - from_lon) * Math.PI / 180;
//         const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const d = R * c; // meter
//         const distance=(d/1000) //km
//         return Math.floor(distance*100)//요금

//     }

// }
// const city=[]
// const seoul=new Station('서울역',37.55620110026294,126.97223116703012)
// const busan=new Station('부산역',35.116613680508806	,129.04009077373016)
// const daegu=new Station('대구역',35.88049128950934,128.62837657353532)
// const daejeon=new Station('대전역',36.332516127741,127.43421099777726)

// city.push(seoul)
// city.push(daejeon)
// city.push(daegu)
// city.push(busan)

// for(let i=0;i<3;i++){
//     for(let j=1;j<4;j++){
//         if(city[i]===city[j])continue
//         else if(j-i==1){
//             console.log(city[i].station+' - '+city[j].station+" = "+city[0].getprice(city[i],city[j])+ " KRW")
//         }
//         else if(j-i===2){
//             const temp=city[0].getprice(city[i],city[i+1])+city[0].getprice(city[i+1],city[i+2])
//             console.log(city[i].station+' - '+city[j].station+" = "+temp+ " KRW")

//         }
//         else if(j-i===3){
//             const temp=city[0].getprice(city[i],city[i+1])+city[0].getprice(city[i+1],city[i+2])+city[0].getprice(city[i+2],city[i+3])
//             console.log(city[i].station+' - '+city[j].station+" = "+temp+ " KRW")

//         }

//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////

//Quiz3
const classified = {}; // 분류해서 넣을 객체
const hairColors = ["black", "brown", "yellow", "white", "gold"];
const hairTypes = ["curly", "straight", "wavy", "coily"];
const glasses = [true, false];
const heights = [151, 160, 170, 180, 190, 200];
const weights = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
];

function User() {
  this.hairColor = this.randomValueFromArray(hairColors);
  this.hairType = this.randomValueFromArray(hairTypes);
  this.glass = this.randomValueFromArray(glasses);
  this.height = this.randomValueFromArray(heights);
  this.weight = this.randomValueFromArray(weights);
}

User.prototype = {
  randomValueFromArray(array) {
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }//프로토타입에 메서드 생성
};

const userArray = [];
for (let i = 0; i < 10000; i++) {
  const user = new User();
  userArray.push(user);
}

const typeArray = [];
typeArray.push(hairColors, hairTypes, glasses, heights, weights);
//console.log(typeArray);

userArray.forEach((i) => {
  const valueArray = Object.values(i); //user의 value들을 배열로 만들어줌

  for (let k = 0; k < typeArray.length; k++) {
    typeArray[k].forEach((j) => {
      if (!classified[j]) {
        classified[j] = 0; //해당 key값이 존재하지 않으면 생성하고 값을 0으로 초기화
      }
      if (j == valueArray[k]) {
        classified[j]++;
      }
    });
  }
});

console.log(classified);
