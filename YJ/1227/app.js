// //문제1
// const arrays = new Array(100).fill(0)

// for(let i=0; i<arrays.length;i++ ){
//     if((i+1)%3===0){
//         arrays[i]=i+1
//     }
// }
// console.log(arrays)

// //문제2
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
//  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
//   'v', 'w', 'x', 'y', 'z']

// const alphabetMades=new Array(0)
// let tmp=''
// for(let i=0;i<alphabet.length;i++){
//     tmp +=alphabet[i]
// alphabetMades.push(tmp)
// }
// console.log(alphabetMades)
// for(let alphabetMade of alphabetMades){
//     console.log(alphabetMade)
// }
// //문제3
// const Q3=[]
// for(let i=0;i<100;i++){
//     if(i%3===0){
//         Q3.push(i)
//     }
// }
// Q3.shift()
// console.log(Q3)

//문제 4
// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let Q4=[]
// console.log(alphabet.length)
// const range=alphabet.length
// function randomStr(n){
//     for(let k=0;k<n;k++){
//         let j=Math.ceil(Math.random()*range)// Math.ceil -> 소숫점 떼고 정수로 바꾸어 주는 함수
//         Q4.push(alphabet[j])

//     }
//     console.log(Q4)
    
// }

// console.log(randomStr(3))
// console.log(randomStr(5))
// console.log(randomStr(7))

// 문제5
// const Q5=[...Q3]

// for(let i=0; i<Q5.length;i++){
//     if((Q5[i])%6===0){
//         Q5[i]=null
//     }
// }
// console.log(Q5)

//문제6

// const movies = [
//     {title: 'Harry Potter', release: '2003-02-22'}, 
//     {title: 'Indiana Jhones', release: '2009-01-09'}, 
//     {title: 'Jurassic Park', release: '2007-04-13'},
//     {title: 'Iron man', release: '2012-12-18'},
//     {title: 'Spider man', release: '2017-03-07'}
// ]

// const movies_copied = []

// // 구현하기
// for(let h=0;h<movies.length;h++){
//         // movies_copied.push(`title : ${movies[h].title}` +`release : ${movies[h].release}`)
//         movies_copied.push({
//             'title':`${movies[h].title}`,
//             'release' : `${movies[h].release}`
//         })
//     }
//     console.log(movies_copied)
//     // movies_copied=[...movies]
    
//     movies[1].title = 'syleemomo' // 원본배열 변경

// console.log(movies)
// console.log(movies_copied)

//문제7
const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level'
]

function isPalindrome(word) {
    let count=0
    
    for(let i=0;i<word.length;i++){
    
	const str=word[i].split("")
    
    const revstr=[]
    for(let i=str.length-1;i>-1;i--){
     revstr.push(str[i])

     }
     console.log(str,revstr)
     if(str.join('')===revstr.join('')){
        //console.log(str.join(), revstr.join()) 
        count++
     }
}
    console.log(count)
}

isPalindrome(words)


// fruits=['apple']
// fruits.push('🥝', '🍑');
// console.log(fruits);