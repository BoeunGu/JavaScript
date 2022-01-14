
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
        pointEl.style.left = `${(point[0] - offset) * 2}px` // x-scale: 2배
        pointEl.style.top = `${point[1] * 100 * -1 + 100}px` // y-scale : 100배 (반전 + 좌표이동)
        graph.appendChild(pointEl)

    }
}

function filterPoint(points) {
    graph.innerHTML = ''
    console.log('haha')
    for (let i = offset; i < (offset + 360); i++) {
        if (points[i] !== undefined) {

            displayPoint(points[i], points)
            console.log(points.length)

        } else break

    }
    if (points.length > 360) offset++

}

setInterval(getNextPoint, 1)