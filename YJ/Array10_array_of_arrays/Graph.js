
const graph = document.getElementById('graph')

const points = []
const dx = 1 //degree
let x = 0// degree
let y = 0
let radx = 0 //radian
var timerId = null
const range = 361
let offset = 0

//(x,y) 포인트 값계산 , sin 값을 계산하는 함수

function getNextPoint() {

    radx = x * (Math.PI / 180)  //degree to radian
    y = Math.sin(radx)
    points.push([x, y])  //그림그리기 쉽게하기위해 degree 형태로 저장함
    x += dx
    filterPoint(points)
}

// (X,Y) 포인트 값으로부터 DOM 객체 생성 및 화면에 표시
function displayPoint(point, points) {
    if (points.length < 360) {
        const pointEl = document.createElement('div')
        pointEl.className = 'dot'
        pointEl.style.left = `${point[0] * 2}px` // x-scale: 2배
        pointEl.style.top = `${point[1] * 100 * -1 + 100}px` // y-scale : 100배 (반전 + 좌표이동)
        graph.appendChild(pointEl)
    }
    else {
        const pointEl = document.createElement('div')
        pointEl.className = 'dot'
        pointEl.style.left = `${(point[0] - offset) * 2}px` // x-scale: 2배 // points[offset] 에서 360개 만큼 그려주기에 x축으로 -offset을 해줌(y축이 이동해서 시작점이 고정되어있는거 같은 원리)
        pointEl.style.top = `${point[1] * 100 * -1 + 100}px` // y-scale : 100배 (반전 + 좌표이동)
        graph.appendChild(pointEl)

    }
}

function filterPoint(points) {
    graph.innerHTML = ''
    console.log('1')
    for (let i = offset; i < (offset + 360); i++) {
        if (points[i] !== undefined) {      // points배열의 요소가 비어있으면 display하지 않고 break

            displayPoint(points[i], points)
            console.log('2')
        } else break

    }
    if (points.length > 360) offset++   //points 배열의 길이가 360 이상되야 offset++해서  point[offset] ~ point[offset+360] 만큼 그려줌

}

setInterval(getNextPoint, 1)