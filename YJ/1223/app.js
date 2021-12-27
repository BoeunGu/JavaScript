const box = document.getElementById("box");
const alert = document.querySelector(".alert");
const gravity = 1;
const FPS = 30; //초당 프레임 수
const limitBottom = 500; //땅 위 근처에 도달하면 멈추게 하기 위함
const limitLeft = 700;
const limitTop = 300; // 점프 높이 제한을 두기 위한 변수

let vx = 100;
let vy = 0; //y방향 속도
let isJumping = true;
let isDead = false;

function down() {
  const topStyle = window.getComputedStyle(box).top; //캐릭터의 y방향 위치를 읽어옴
  let top = parseInt(topStyle); //문자열을 숫자형으로 바꿈

  //중력에 의해서 캐릭터가 아래로 내려옴
  vy += gravity;
  top += vy;

  if (!isDead && top >= limitBottom) {
    top = limitBottom; //땅에 안착
    isJumping = true; //점프가능여부
  }

  //실제 화면에서 캐릭터의 y 방향 위치가 업데이트됨
  box.style.top = `${top.toString()}px`;
}

const timerId = setInterval(down, 1000 / FPS);

function move(e) {
  const leftStyle = window.getComputedStyle(box).left;
  const topStyle = window.getComputedStyle(box).top;
  let left = parseInt(leftStyle);
  let top = parseInt(topStyle);

  if (e.keyCode === 39) {
    //화살표 우측키 누른경우
    box.style.backgroundImage = "url('minioncute.png')";
    left += vx; //등속운동
    if (left > limitLeft) {
      //땅을 벗어나면 죽은것으로 설정함
      isDead = true;
    }
  } else if (e.keyCode === 37) {
    // 화살표 좌측키 누른경우
    box.style.backgroundImage = "url('minioncute.png')";

    if (left > 0) {
      left -= vx;
    }
  }

  //캐릭터 점프 , 스페이스나 위쪽키를 누른 경우
  else if (e.keyCode === 32 || e.keyCode === 38) {
    if (isJumping && top >= limitTop) {
      console.log(top);
      vy -= gravity;
      top -= vy;
    }
    if (vy <= 0) {
      isJumping = false;
    }
  }

  box.style.left = `${left.toString()}px`;
  box.style.top = `${top.toString()}px`;
}

function popup() {
  const leftStyle = window.getComputedStyle(box).left;
  const topStyle = window.getComputedStyle(box).top;
  let left = parseInt(leftStyle);
  let top = parseInt(topStyle);

  if (top > limitBottom + 700) {
    alert.classList.add("show");
    clearInterval(timerId);
  }
}

function setpop() {
  setInterval(popup, 1000);
}

window.addEventListener("keydown", move);
window.addEventListener("load", setpop);
