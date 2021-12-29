const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' 
const rootDiv = document.getElementById('root')
// 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
// product 객체의 image_link, name, price, description 프로퍼티 사용하기
function buildElement(product){
    // 구현하기

    const item = document.createElement('div')
    item.className='product'

    const img = document.createElement('img')
    img.className ='product-img'
    img.src = product.image_link

    const name = document.createElement('div')
    name.className= 'product-name'
    name.innerText=product.name +'\n'+product.price

    const description = document.createElement('div')
    description.className='product-description'
    description.innerText=product.description

    item.append(img,name,description)
    return item

}

// DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
function displayProduct(product){
   // 구현하기
   rootDiv.appendChild(product)
}

fetch(API_URL)
.then(function(res){
    return res.json()
})
.then(function(products){
    console.log(products)

    // 상품 정보에 대한 배열로부터 웹화면에 보여줄 DOM 객체로 이루어진 배열로 변환하기
    const productsRefined = products.map(buildElement)
    
    // DOM 객체로 이루어진 배열을 사용하여 웹 화면에 상품 정보 보여주기
    productsRefined.forEach(displayProduct)
})