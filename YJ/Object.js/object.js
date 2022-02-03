//Object

// function Book(name, price,release,authors){
//     this.name=name
//     this.price=price
//     this.release=release
//     this.authors=authors
// }
//     Book.prototype={
//         getInfo(){
//         console.log('----- 책 정보 -----')
//         console.log('제목: ', this.name)
//         console.log('가격: ', this.price)
//         console.log('초판: ', this.release)
//         console.log('저자: ', this.authors.join(' '))
//         },
//         discount(){
//             if(this.name ==='python'){
//                 this.price-=1000
//             }
//         },
//         get getPrice(){
//             return this.price
//         },
//         set addAuthor(newAuthor){
//             this.authors.push(newAuthor)
//         }

//     }

    


//     const book1 = new Book(
//         'javascript',
//         21000,
//         '2019-12-03',
//         ['mark','victoria']
//     )

//     const book2 = new Book(
//         'python',
//         18700,
//         '2022-01-01',
//         ['syleemomo']
//     )

//     book1.discount()
//     book1.addAuthor='sunrise'
//     console.log(book1.getPrice)
//     console.log(book1.authors)


//     book2.discount()
//     console.log(book2.getPrice)

//////////////////////////////////////////////////////////////////////

// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }

// for(let prop in book){
//     console.log(prop,book[prop])  //prop은 문자열 이기때문에 .으로 접근 불가능 -> 문자열로 접근해야함


// }

// for(let key of Object.keys(book)){ // 배열로 바꾸어 순회가 가능하게 만들어줌(iterable)
    
//     console.log(key,book[key])
// }

// console.log(Object.values(book)) // book객체의 프로퍼티 값(value)만 추출한 다음 배열로 반환한다.


// console.log('price' in book) //boolean 으로 리턴, 상속받은 프로퍼티까지도 모두 체크함
// console.log('title' in book)// 프로퍼티 이름은 문자열로 주어져야함.
// console.log(book)// 객체의 prototype을 가지고 있음
// console.log(book.hasOwnProperty('price'))// 자기자신의 프로퍼티만 체크하여 boolean으로 리턴함
// console.log(book.hasOwnProperty('title'))
// console.log(book.hasOwnProperty('toString'))// false

//객체의 값 스프레드연산자(...)로 변경하기

// let book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }

// book={...book, release:'2022-01-17'} //let사용, 다른데이터는 두고 release 프로퍼티만 변경 (리액트에서 자주 사용)



//객체 복사하기

// 얕은 복사 - 프로퍼티의 배열이나 객체의 주소값만 복사하기 
//타켓 객체 = Object.assign(타겟 객체,소스 객체)

// const book = {
//     name: 'javascript',
//     price: 21000,
//     release: '2019-12-03',
//     authors: ['mark', 'victoria']
// }

// const target = Object.assign({},book)
//book.authors[0] = '변경' //authors의 프로퍼티는 배열이므로 target에 주소값만 복사된다. 그래서 book의 authors배열의 특정요소를 변경하면 아래와 같이 target에도 변경이 이루어진다.
// console.log(target)
// console.log(book)


//깊은 복사 - 프로퍼티의 배열이나 객체의 내부 요소까지 복사히기


const book = {
    name: 'javascript',
    price: 21000,
    release: '2019-12-03',
    authors: ['mark', 'victoria']
}


const target = JSON.parse(JSON.stringify(book)) //stringfy로 book을 문자열로 바꿔준 후 parse로 다시 객체화 함





