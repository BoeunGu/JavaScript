const rootDiv = document.getElementById('root')  //화면에 리스트를 보여줄 위치
const priceBtn = document.getElementById('price-btn') // 가격정렬 버튼
const searchInput = document.getElementById('search-input') //사용자 상품 검색창
const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline' // API 주소


let shouldSort = false //  정렬 여부 판단
let shouldFilter = false  // 검색 여부 판단
let originalProducts = null  //원본 코드 저장
let keyword=''  //접근성을 위해 global parameter로 선언



// 서버에서 데이터 가져오기

fetch(API_URL)
.then(function (res){
    return res.json()
})
.then(function (products) {
    originalProducts = products // 원본 데이터 저장
    displayProduct(products)  //상품 정보 display(초기 런더링 : 데이터를 화면에 뿌려줌)

    priceBtn.addEventListener('click',sortByPrice)  // 버튼을 누르면 함수연결
    searchInput.addEventListener('input',searchProducts) // 상품유형을 검색하면 함수 연결
})

function displayProduct(products){
    rootDiv.innerHTML ='' //리스트 초기화 -> 이벤트들이 생길 때 마다 새로 렌더링 함
    products.forEach(product =>{
        rootDiv.appendChild(buildElement(product)) // 객체를 DOM 객체로 만들어서 appendChild 해야함
    })

}

function buildElement(product){
    const item = document.createElement('div') //배열들의 각각 객체를 한곳에 넣어줄 박스 생성
    item.className = 'product'
    item.innerHTML =`
    <div class ='product-img'><img src =${product.image_link} alt=${product.name}/></div>
    <div class='product-name'>${product.name} (${product.price})</div>
    <div class='product-description'>${product.description}</div>
    <div class='product-type'>${product.product_type}</div>
    `
    return item
}

function sortByPrice(){
    shouldSort = !shouldSort //true로 변환

    const newProducts = updateProducts(originalProducts, keyword)  // 정렬 및 검색
    displayProduct(newProducts)  // 정렬 및 검색된 새로운 배열을 화면에 보여주기
}

function searchProducts(e) {
    shouldFilter = e.target.value !== ''
    keyword = e.target.value

    const newProducts = updateProducts(originalProducts, keyword)  // 정렬 및 검색
    displayProduct(newProducts)  // 정렬 및 검색된 새로운 배열을 화면에 보여주기
}


function updateProducts(originalProducts, keyword){
    // Conditional Query (조건 쿼리)
    let newProducts = [...products] // 원본배열을 함수 내부에서 지역변수에 복사 -> 원본 배열을 건드리지 않기 위해
    if(shouldFilter){
        newProducts = newProducts.filter(p=> p.product_type.toLowerCase().includes(keyword.toLowerCase()))
    }
    if(shouldSort){
        newProducts.sort((p1,p2) => p1.price-p2.price)
    }
    return newProducts

}