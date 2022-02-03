const sentence = 'I (joined) swimming <club> in my highschool'
const splitedSentence = sentence.split(/[()<>]/)  //총 4개에 문자로 구분함 '(' , ')' , '<' , '>'
console.log(splitedSentence)

//
const sentence = 'I joined swimming club in my highschool'
const splitedSentence = sentence.split(' ', 3)  // 두번째 인자로 배열 길이 설정 가능
console.log(splitedSentence)

//
const sentence = 'I^,^joined^,^swimming^,^club^,^in^,^my^,^highschool'
const splitedSentence = sentence.split(['^', '^'])  // 구분문자 => ^,^
console.log(splitedSentence)

//
const sentence = 'I joined swimming club in my highschool. that club was awsome !'
const foundedKeyword = sentence.split(' ').filter(word => word === 'club') //문자열을 배열로 바꾸어 .filter를 적용할 수 있게 바꾸어줌
console.log(foundedKeyword.length)



const sentence = 'I joined swimming club in my highschool. that club was awsome !'
const modifiedSentence = sentence.
                        split(' ')
                        .map(word => {
                            return word = word === 'club' ? `${word} 🏊` : word  // map에서 리턴받은 배열에 함수체이닝으로 join 적용
                        })
                        .join(' ')
console.log(modifiedSentence)
console.log(sentence)


const movies = [
    {title: 'Harry Potter', release: '2003-02-22'}, 
    {title: 'Indiana Jhones', release: '2009-01-09'}, 
    {title: 'Jurassic Park', release: '2007-04-13'},
    {title: 'Iron man', release: '2012-12-18'},
    {title: 'Spider man', release: '2017-03-07'}
]

const slicedWords = movies.slice(1,3)

movies[1].title = 'syleemomo'  // slice는 shallow copy이기에 레퍼런스 주소만 가져옴

console.log(movies)
console.log(slicedWords)


//Destructuring assignment - 구조분해

const fruits = ['apple', 'banana', 'orange', 'lemon', 'watermelon']
const [firstFruit] = fruits // fruits의 첫번째 값만 복사
console.log(firstFruit)

const [,,thirdFruit] = fruits  // fruits의 3번째 값만 복사
console.log(thirdFruit)

//copy the last element

const [lastFruit] = fruits.reverse()
console.log(lastFruit)

const [firstFruit, ...rest]=fruits // fruits배열의 1st 값만 제외하고 나머지 요소들을 'rest' 배열에 복사
console.log(rest)


concat, 스프레드 연산자

[new arrray] = [array1].concat(array2)\

const words = ['car', 'mobile', 'sun', 'foot', 'pen']
const numbers = [1, 2, 3]

const unitedArr = words.concat(numbers,fruits) // === const unitedArr = [...words, ...numbers, ...fruits]
console.log(unitedArr)

join()
const fruits = ['apple', 'banana', 'orange']

const fruitsStr = fruits.join(' ')

console.log(fruitsStr)

split()

const sentence = 'I joined swimming club in my highschool'
const splitedSentence = sentence.split('')
console.log(splitedSentence)





