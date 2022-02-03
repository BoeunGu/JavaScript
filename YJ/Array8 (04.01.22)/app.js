const seasons = ['spring', 'summer', 'autumn']

const arrLength = seasons.push('winter')

console.log(seasons) //  변경된 원본배열 출력
console.log(arrLength) // 변경된 배열 길이 출력


const multiplyBySix=[]

for(let i=1;i<100;i++){
    multiplyBySix.push(6*i)
}
console.log(multiplyBySix) // 6의 배수로 이루어진 배열


데이터 가공 -> 데이터 형태를 변경한 것( 문자열 => 객체)
const movies = ['Haprry potter', 'Doctor stranger', 'Iron man', 'Spider man', 'Widow']
const moviesInfo =[]

function addMovieInfo(movie, index, movies ){
    moviesInfo.push({title: movie, id : index})

}

movies.forEach(addMovieInfo)

console.log(moviesInfo)


const cities = ['seoul', 'busan', 'daegu']  // ex) API구글 데이터
const citiesToAdd = ['deajeon', 'ulsan']   // ex) API 네이버 데이터

cities.push(...citiesToAdd)   // 스프레드 연산자

console.log(cities)


const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']

console.log(companies.pop(), companies)

const fruits = ['apple', 'orange', 'watermelon']

const removedFruits = fruits.splice(1,0, 'banana')

console.log(fruits)
console.log(removedFruits)  //제거된 요소 없음


const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']

words.sort()
console.log(words.reverse())

const words = [100, 3, 394, 27, 4, 82, 6, 5, 94]

function compareNumbers(a,b){
    //return a-b  //이렇게 요약 가능
    
    if(a>b) return 1 //앞의 값이 더 크면 순서 바꾸기
    if(a<b) return -1  //뒤의 값이 더 크면 순서 바꾸기
    return  0 // 두 값이 같은 경우
}
words.sort(compareNumbers)

words.sort((a,b)=> a-b)   // 화살표 함수 버전



문제 <자바스크립트 배열 8> 

문제 2

const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
const companiesReversed = []

// 구현하기


    for(let i=0;i<5;i++){
   const poped=companies.pop()
   companiesReversed.push(poped)
    }

교수님 ver
const companiesReversed=[]
var popped = companies.pop()
while(popped !== undefined){
    companiesReversed.push(popped)
    popped = companies.pop()
}
console.log(companiesReversed)

console.log(companiesReversed)

 문제3

 const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

const newFriends = [
    {name: 'Ami', aage: 27, city: 'ulsan'},
    {name: 'gracias', aage: 21, city: 'ulsan'},
]

friends.splice(2,0,newFriends[0],newFriends[1])
console.log(friends)

문제4

const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

friends.splice(4,2)
console.log(friends)

문제5

const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

function byeseoul(friend,index,friends){
    if(friend.city==="seoul"){
        friends.splice(index,1)
    }
}
friends.forEach(byeseoul)
console.log(friends)


문제6

const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

const result= friends.filter((friend)=> friend.age<30)
console.log(result)

교수님 ver

const friendsYoung = friendsYoung
.sort((a,b) => a.age - b.age)  //Method Chaining
.filter(friend => friend.age <30)
console.log(friendsYoung)

문제7

const friends = [
    {name: 'victoria', age: 13, city: 'seoul'},
    {name: 'sun', age: 34, city: 'busan'},
    {name: 'johseb', age: 25, city: 'busan'},
    {name: 'syleemomo', age: 9, city: 'seoul'},
    {name: 'hannah', age: 41, city: 'daegu'},
    {name: 'shara', age: 37, city: 'seoul'},
    {name: 'martin', age: 28, city: 'daegu'},
    {name: 'gorgia', age: 39, city: 'seoul'},
    {name: 'nana', age: 24, city: 'busan'},
    {name: 'dannel', age: 19, city: 'seoul'},
]

friends.sort(function(a,b) {
    let nameA = a.name.toLowerCase() // 대, 소문자는 정렬 기준이(ASCII) 달라서 모두 소문자로 바꾸어줌
    let nameB = b.name.toLowerCase()
    if(nameA>nameB){return 1}
    if(nameA<nameB){return -1}
    return 0
})
console.log(friends)


문제 8

const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Terminator', release: '2007-04-11'},
    {title: 'Dracula', release: '2007-04-13'},
    {title: 'Jurassic Park', release: '2007-05-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

movies.sort(function(a,b){
    let dateA = a.release.split('-')[0]
    let dateB = b.release.split('-')[0]
    return dateB-dateA
})
console.log(movies)

교수님 ver

movies.sort((a,b) => {
    const aRelease = a.release.split('-') // 배열 리턴 ['2003','02','22']
    const bRelease = b.release.split('-') // 배열 리턴 ['2003','02','22']
    const yearA = aRelease[0], monthA = aRelease[1], dayA = aRelease[2]
    const yearB = aRelease[0], monthB = bRelease[1], dayB = aRelease[2]

    //년도 비교하기
    if(yearA< yearB) return 1
    if(yearA > yearB) return -1

    // 년도가 같으면 달을 비교하기
    if(monthA< monthB) return 1
    if(monthA > monthB) return -1

    // 년도와 달이 모두 같은 경우 -> 일을 비교하기
    if(dayA< dayB) return 1
    if(dayA > dayB) return -1

    return 0

})
console.log(movies)