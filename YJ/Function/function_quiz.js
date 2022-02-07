//JS문법 - 12 문제들

//Q1
// function findMaxValue(...args){
//     // 구현하기
//     //console.log(args)
//     let temp=0
//     for(let i of args){
        
//         if(typeof(i)=='number' || typeof(i)=='string'){
//             //console.log(i)
//             if(typeof(i)=='string'){
//                 i=parseFloat(i)
//             }
//            // console.log(i)
//             if(i>temp) temp=i
            
//         }
//     }
//     return temp


// }

// // 테스트 케이스 
// console.log(findMaxValue(-3, 7, -345, 41, 9, 137, 69))
// console.log(findMaxValue(-31, 8, null, -26, false, 92, {}, 284, 923, [], "2045.8", 'zip', 54, "1024"))

//Q2

// function Movie(title, author, release){
//     this.title = title
//     this.author = author
//     this.release = release
    
//     this.printMovieInfo = () => {
//         function getInfo(){
//             return `${this.title}-${this.author}는 ${this.release}에 발매되었다.`
//         }
//         console.log(getInfo()) 
//     }
// }

// const movie = new Movie("해리포터", "조앤K롤링", "2003 년 3월 23일")

// this.title=movie.title
// this.author=movie.author
// this.release=movie.release
// movie.printMovieInfo()

//Q3

// function getDistance(obj1,obj2){
// //함수 구현하기
//     obj1=obj1||{x:0,y:0}
//     obj2=obj2||{x:0,y:0}

//     const dot_a=obj1.x
//     const dot_b=obj1.y
//     const dot_c=obj2.x
//     const dot_d=obj2.y

//     const result=Math.sqrt(Math.pow((dot_a-dot_c),2) + Math.pow((dot_b-dot_d),2))

//     return result


// }

 
//  // 테스트 케이스
//  console.log(getDistance({x: 3, y: 2}, {x: 8, y: 14}))
//  console.log(getDistance({x: 3, y: 4}))


//Q4

// function countDuplication(flag,...args){
//     //함수 구현하기 
//     const word=flag
//     const result=args.filter(i=>i===word)
//     return result.length


// }


// // 테스트 케이스 
// console.log(countDuplication('cat', 'apple', 'cat', 'tiger', 'cat', 'water', 'computer', 'cat', 'lion', 'pear', 'cat')) 

//Q5 다시풀기

function add(...args){
    console.log(args)
    let sum=0
    
    // 구현하기
    for(let i of args){
        if(typeof(i)=='number' || typeof(i)=='string'){
            console.log(isNaN(Math.abs(i)))
            if(typeof(i)=='string' && !isNaN(Math.abs(i))){
                console.log(i)
                
                sum=sum+i
            }
            
        }
    }
    return sum
}
console.log(Math.abs(''))

// 테스트 케이스
console.log(add(3, null, 19, false, '9', [], 7, {}, '', 34, 'earth', '3.9')) // 75.9


// //Q6
// function divider(flag,...args){
//     //함수 구현하기
//     let num=0
//     if(flag===0){
//         return args
//     }
//     else if(flag!==0){
//         const sum=args.map(i=>i/flag)
//         return sum
//     }


// } 


// // 테스트 케이스 
// console.log(divider(2, 39, 4, 7, 28, 62, 28))
// console.log(divider(0, 39, 4, 7, 28, 62, 28))

//Q7

// const numbers = [121, 23, 345, 43, 59]

// function pickIndex(len){
//     return Math.floor(Math.random() * len)
// }
// function shuffle(arr){
//     // 구현하기
//    //const newArray=[]
//     for(let i in numbers){
//         let temp=0
//         const randomNum= pickIndex(arr.length)
//         temp=numbers[randomNum]
//         numbers[randomNum]=numbers[i]
//         numbers[i]=temp

//     }
//     return numbers
// }

// console.log(shuffle(numbers))