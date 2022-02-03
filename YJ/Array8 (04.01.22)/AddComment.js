const userName = document.getElementById('user-name') // 사용자 이름 입력창
const userEmail = document.getElementById('user-email')  // 사용자 연락처 입력창
const userAge = document.getElementById('user-age')  // 사용자 나이 입력창
const userList = document.getElementById('user-list')  // 사용자 리스트 출력 위치

const submitBtn = document.getElementById('user-add')  // 사용자 추가 버튼
const users =[] // 사용자 리스트 배열

submitBtn.addEventListener('click', addUser)


// 사용자 추가하기

function addUser(){
    // 구현하기
    if(isValid(userName.value) && isValid(userEmail.value) && isValid(userAge)){
        // 사용자가 각각의 칸에 값을 입력했다면
        user.push({name: userName.value, age: userAge.value, email: userEmail.value})
        displayUsers(users) // 사용자 화면에 보여주기
        initInput() // 화면에 보여준 후에 다시 검색창 리셋
    }
    else{
        alert('You missed some user information ')  // 사용자가 모든 칸에 하나라도 값을 입력하지 않았을 경우
    }
}


// 입력창 유효성 검증

function isValid(str){
    return str !=='' && str !== undefined
}

function displayUsers(users){
    // 구현하기
    userList.innerHTML=''  //제일 처음에 화면 초기화
    users.forEach(user=> {
        userList.appendChild(buildElement(user))
    })
}

function buildElement(user){
    const UserEl = document.createElement('div')
    UserEl.className ='user'
    UserEl.innerHTML=`
    <div> name : ${user.name}</div>
    <div>age : ${user.age}</div>
    <div>email : ${user.email}</div>
    `
    return UserEl
}

//검색창 초기화
function initInput(){
    userName.value=''
    userEmail.value=''
    userAge.value=''
}



