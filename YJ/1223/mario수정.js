const box = document.getElementById('box')
const gravity = 1
const FPS = 30
const limitBottom = 500
const limitLeft = 700
const jumpHeight = 30

let vx = 20
let vy = 0
let isJumping = false
let isDead = false
let jumpKey=false// 추가 / 스페이스바, 화살표 위쪽키를 누른 경우 true

// 처음에 isJumping 을 true 로 설정해서 점핑 가능하게 함
// 점핑 가능하면 계속 점프하다가 vy 가 0 보다 작아지면 isJumping 이 false 가 되면서 더이상 점핑이 불가능함
// 중력은 계속 작용하니까 중력에 의해서 아래로 내려오다가 limit 에 닿으면 isJumping 이 다시 true 가 되면서 점핑이 가능하게 됨

// 슈퍼 마리오가 limitLeft 값을 넘어가면, 즉, 땅을 벗어나면 죽었으므로 isDead 가 true 가 되고 isDead 가 true 이면 계속 아래로 떨어짐

function down(){
    const topStyle = window.getComputedStyle(box).top
    let top = parseInt(topStyle)


    // 중력이 계속 작용하고 있는중
    vy += gravity
    top += vy

    if(vy >= jumpHeight){
        jumpKey =false
    }
   

    // 슈퍼마리오가 땅에 있는 동안에는 죽지 않았으므로 더이상 아래로 떨어지지 않음
    if(!isDead && !jumpKey && top >= limitBottom){
        top = limitBottom
        isJumping = true
        vy=0 // 땅에 내려앉았으니까 y방향 속도를 0으로 해줌

    }

    box.style.top = `${top.toString()}px`
}
const timerId = setInterval(down ,1000/FPS)


function move(e){
   
    const leftStyle = window.getComputedStyle(box).left
    const topStyle = window.getComputedStyle(box).top
    let left = parseInt(leftStyle)
    let top = parseInt(topStyle)

    // 여러 키의 동작이 동시에 적용되려면 if 문을 사용하면 됨 (예: spacebar + arrow key)
    if(e.keyCode === 39){
        box.style.backgroundImage = "url('minioncute.png')";
        left += vx
        if(left > limitLeft){
            isDead = true
        }
    }
    else if(e.keyCode === 37){
        box.style.backgroundImage = "url('minioncute.png')";
        if(left > 0){
            left -= vx
        }
    }
    else if(e.keyCode === 32 || e.keyCode === 38){
        if(isJumping ){  // 슈퍼마리오가 땅에 있으면
            vy = -jumpHeight
            isJumping-false
            jumpKey=true
        }
        
    }

    box.style.left = `${left.toString()}px` 
    box.style.top = `${top.toString()}px` 
}
window.addEventListener('keydown', move)