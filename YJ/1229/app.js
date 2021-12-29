// const animals = ['lion','tiger','cat','dog','pig','cat','rabbit','duck','cat']
// // const animalTosearch = 'cat'  // 쿼리(query)
// // const searchedIndexes =[] //찾은 인덱스 값들을 저장할 배열

// // let foundIndex = animals.indexOf(animalTosearch)  //멘 처음 칮은 값 반환

// // while(foundIndex !=-1){
// //     searchedIndexes.push(foundIndex)  //찾은 배열원소의 인덱스 값 추가
// //     foundIndex = animals.indexOf(animalTosearch, foundIndex+1) // 다시 추가 검색
// // }
// // console.log(searchedIndexes)

// const searchedAnimal = animals.lastIndexOf('cat')
// console.log(searchedAnimal)

// const fruits = ['apple','banana','orange','watermelon']

//판별함수
// function longest(fruit,index,fruits){
//     return fruit.length>6 //판별조건 / 배열의 요소가 리턴
// }

// const found = fruits.find((fruit,index,fruits)=>fruit.length>6)
// const found = fruits.find(longest)
// console.log(found)

// const words = ['car', 'paper', 'mobile', 'computer', 'school', 'sun', 'house']


// const wordFiltered = words.filter(word=> word.length<5)
// console.log(wordFiltered)

// const currentTime =[3,8,23] // 시, 분, 초
// const timeStr =[]

// //데이터 재가공
// function addZero(time){
//     timeStr.push(`${time<10? '0'+time : time}`)
// }
// currentTime.forEach(addZero)
// console.log(timeStr.join(':'))


// const userIDs = ['victoria', 'sun', 'johseb', 'syleemomo', 'hannah', 'shara', 'martin', 'gorgia', 'nana', 'dannel']

// function addDotCom(userIDs){
//     console.log(userIDs + "@gmial.com")
// }

// userIDs.forEach(addDotCom)

// const numbers = [1, 2, 3, 4, 5]

// function multiplyByThree(element){
//     return element*3
// }
// const numbersRefined = numbers.map(multiplyByThree)
// const numbersRefined = numbers.map(number=> number*3) //arrow function
// console.log(numbersRefined)


// const userEmails = [
//     'victoria@gmail.com',
//     'sun@gmail.com',
//     'johseb@gmail.com',
//     'syleemomo@gmail.com',
//     'hannah@gmail.com',
//     'shara@gmail.com',
//     'martin@gmail.com',
//     'gorgia@gmail.com',
//     'nana@gmail.com',
//     'dannel@gmail.com'
// ]


// function removeDotCom(userEmail){
//     return userEmail.split('@')[0]
// }
// const userIDs = userEmails.map(removeDotCom)

// function displayUserID(uesrId){
//     console.log(uesrId)
// }
// userIDs.forEach(displayUserID)


// const fruits = ['apple', 'banana', 'peach', 'strawberry', 'watermelon']
// const icons = ['🍎', '🍌', '🍑', '🍓', '🍉']
// const rootDiv = document.getElementById('root')

// function addIcons(fruit, index){
//     const item = document.createElement('div')
//     item.innerText = `${icons[index]} ${fruit}`
//     return item
// }

// function displayFruits(fruit){
//     console.log(fruit)
//     rootDiv.appendChild(fruit)
// }



// const fruitsRefined = fruits.map(addIcons)

// fruitsRefined.forEach(displayFruits)

//문제1
// const lyrics = `
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 바라보는 눈빛 속에
// 눈빛 속에 나는 마치
// 나는 마치 뭐에 홀린 놈
// 이젠 벗어나지도 못해
// 걸어오는 너의 모습
// 너의 모습 너는 마치
// 내 심장을 밟고 왔나봐
// 이젠 벗어나지도 못해
// 어딜 가나 당당하게
// 웃는 너는 매력적
// 착한 여자 일색이란
// 생각들은 보편적
// 도도하게 거침 없게
// 정말 너는 환상적
// 돌이킬 수 없을만큼
// 네게 빠져 버렸어
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따 따라빠빠라
// Hey girl gir gir gir gir girl i
// 눈만뜨면 니 생각 Hey girl
// 자나깨나 사실 너 하나 밖에 안보여
// 말해봐 니 맘에 내가
// 말해봐 자리 잡았는지
// 말해줘 내게 말해줘
// 나는 바보 바보 바보
// 주변 사람들은 말해
// 내가 너무 적극적
// 이 세상에 그런 사람
// 어디 한둘이냐고
// 그걸 몰라 그녈 몰라
// 시기하며 하는 말
// 내가 부럽다면 그건
// 그대들이 지는 거
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// 딴딴 딴따다 따 따란딴
// 딴딴 딴따다 따
// 네게 반해버렸어 baby
// 딴딴 딴따다 따 따라라라
// 딴딴 딴따다 따 따라빠빠라
// Lets dance dance dance dance
// Lets dance dance dance dance
// Lets dance dance dance dance dance dance
// Hey 이제 그만 내게 와줄래
// 정말 미칠 것만 같아 yeah
// 난 너만 사랑하고 싶어
// 절대 다시 한눈 팔 생각 없어 hey hey hey.
// 애인이라기보다 친구같은
// 내가 되고 싶어
// 너의 모든 고민 슬픔
// 함께 간직하고파
// 다시 없을 만큼 만큼
// 너를 너무 사랑해
// 내가 바란 사람 니가 바로 그
// That that that girl
// Sorry Sorry Sorry Sorry
// 내가 내가 내가 먼저
// 네게 네게 네게 빠져
// 빠져 빠져 버려 baby
// Shawty Shawty Shawty Shawty
// 눈이 부셔 부셔 부셔
// 숨이 막혀 막혀 막혀
// 내가 미쳐 미쳐 baby
// `
// const keyword1 = 'Sorry'
// const keyword2 = '부셔'

// function searchWord(keyword, n){
// 	// 구현하기
//     const searchedkeyword =[]
    
//     let foundIndex = lyrics.indexOf(keyword)
//     while(foundIndex != -1){
//     searchedkeyword.push(foundIndex)
//     foundIndex = lyrics.indexOf(keyword,foundIndex+n)
//     }
//     return searchedkeyword.length
    


// }

// console.log(searchWord(keyword1, keyword1.length))
// console.log(searchWord(keyword2, keyword2.length))

// //문제2
// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// // 구현하기
// function firstmovie(movie){
//     const year_of_movies=[]
//     for(let i=0;i<movies.length;i++){
//     const year=movie.release.split('-')[0]
//     console.log(year)
//     if(year>2004 && year<2011){
//         year_of_movies.push(movie)
//     }
// }
//     return year_of_movies[0]
// }

// const found = movies.find(firstmovie)
// console.log(found)

//문제3

// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// // 구현하기
// const word ='man'

// function manIntheMovie(movie){
//     const list=[]
//     if(movie.title.includes(word)){
//         list.push(movie)

//     }
//     return list[0]
// }
// const result = movies.find(manIntheMovie)
// console.log(result)


//문제4
// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// function J_movie(movie){
    
//     const filtered = []
   
//     const year = movie.release.split('-')[0]
//     if(year<2010){
//         filtered.push(movie)
//     }
//     for(let i=0;i<filtered.length;i++){
//     const name = filtered[i].title.startsWith('J')
//     if(name){
//         return filtered[[i]]
//     }
//     }
       
// }

// const result= movies.find(J_movie)
// console.log(result)


//문제5
// const words = [
//     'abc',
//     'animal',
//     'fruit',
//     'abba',
//     'abcba',
//     'location',
//     'radar',
//     'madam',
//     'mario',
//     'level'
// ]


// function doubleA(word){
//     if( word.includes('a'))
//     return word
    
// }

// const result = words.map(doubleA)
// console.log(result)

// //문제 6


// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     console.log(products)

//     // 조건에 맞는 상품을 검색하는 코드 구현하기
//     const result = products.filter(p => p.product_type==='mascara' && p.price<10)
//     console.log(result)
       
//     }
    
// )

//문제7



// const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 

// fetch(API_URL)
// .then(function(res){
//     return res.json()
// })
// .then(function(products){
//     // console.log(products)

//     // 조건에 맞는 상품을 검색하는 코드 구현하기
//     const result = products.filter(p=> p.product_type==='lipstick' && p.rating>4 && p.rating<5)
//     console.log(result)
// })

//문제8

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// // 구현하기
// const result = friends.filter(f=>f.city==='seoul' && f.age<30)
// console.log(result)

// //문제9
// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// // 구현하기
// const city1 = 'seoul'
// const city2 = 'busan'
// const city3 = 'daegu'

// const seoul = friends.filter(f=>f.city===city1)
// console.log('Seoul :'+seoul.length)
// const busan = friends.filter(f=>f.city===city2)
// console.log('Busan :'+busan.length)
// const daegu = friends.filter(f=>f.city===city3)
// console.log('Daegu :'+daegu.length)

//문제10

// const friends = [
//     {name: 'victoria', age: 13, city: 'seoul'},
//     {name: 'sun', age: 34, city: 'busan'},
//     {name: 'johseb', age: 25, city: 'busan'},
//     {name: 'syleemomo', age: 9, city: 'seoul'},
//     {name: 'hannah', age: 41, city: 'daegu'},
//     {name: 'shara', age: 37, city: 'seoul'},
//     {name: 'martin', age: 28, city: 'daegu'},
//     {name: 'gorgia', age: 39, city: 'seoul'},
//     {name: 'nana', age: 24, city: 'busan'},
//     {name: 'dannel', age: 19, city: 'seoul'},
// ]

// // 구현하기
// function over40(friend){
//     friend.age>40? console.log(true):false
    
// }
// friends.forEach(over40)

//문제11

const users = [
    {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
    {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
    {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'},
    {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'},
    {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'},
    {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
    {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'},
    {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
    {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
    {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'}
]

// 구현하기


// const trueOne=[]
// function findRightOne(user){
//     //const word ="@gmial.com"

//     if(user.email.includes('@') && user.email.includes('.com') && user.age>0 && Number.isInteger(user.age)){
//         trueOne.push(user)
//        //return user
//     }
//     //console.log(trueOne)
//     return trueOne
// }




//     users.forEach(findRightOne)
//     console.log(trueOne)

   console.log(users.filter(u=>u.email.includes('@') && u.email.includes('.com') && u.age>0 && Number.isInteger(u.age)))